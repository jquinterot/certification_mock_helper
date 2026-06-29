/**
 * Integration test for the `useAppState` god hook.
 *
 * `useAppState` composes 8 sub-hooks + ~20 action callbacks and is the
 * single most under-tested unit in the codebase. These tests exercise
 * the phase-machine behavior end-to-end: starting an exam, opening the
 * submit dialog, confirming submission (autoSubmit), and saving/exiting.
 *
 * The hook depends on real `localStorage` (via useLocalStorage, useSavedTests,
 * useSubmitResults) and the exam registry (via useExamSelection, useAppState).
 * Both are available in the test environment.
 */
import { describe, it, expect, beforeEach } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useAppState } from '../useAppState';

beforeEach(() => {
  window.localStorage.clear();
});

describe('useAppState — phase transitions', () => {
  it('starts on the "home" phase with an empty selection', () => {
    const { result } = renderHook(() => useAppState());
    expect(result.current.phase).toBe('home');
    expect(result.current.selectedCategory).toBe('');
    expect(result.current.selectedExamId).toBe('');
    // useExam is always a non-null object (it owns the useExamState return).
    // The "exam" object exists on home too — it's just at its idle initial state.
    expect(result.current.exam).toBeDefined();
    expect(result.current.exam.phase).toBe('idle');
    expect(result.current.exam.activeQuestions).toEqual([]);
  });

  it('handleSelectCategory -> "category" phase and stores the category', () => {
    const { result } = renderHook(() => useAppState());
    act(() => result.current.handleSelectCategory('AWS Cloud'));
    expect(result.current.phase).toBe('category');
    expect(result.current.selectedCategory).toBe('AWS Cloud');
  });

  it('handleSelectExam -> "exam-start" phase and populates the config', () => {
    const { result } = renderHook(() => useAppState());
    act(() => result.current.handleSelectCategory('AWS Cloud'));
    act(() => result.current.handleSelectExam('aws-ml'));
    expect(result.current.phase).toBe('exam-start');
    expect(result.current.selectedExamId).toBe('aws-ml');
    expect(result.current.selectedExamConfig?.passingScore).toBe(72);
    expect(result.current.selectedExamConfig?.testSetCount).toBe(4);
  });

  it('handleBackToHome resets phase and selection', () => {
    const { result } = renderHook(() => useAppState());
    act(() => result.current.handleSelectCategory('AWS Cloud'));
    act(() => result.current.handleSelectExam('aws-ml'));
    act(() => result.current.handleBackToHome());
    expect(result.current.phase).toBe('home');
    expect(result.current.selectedCategory).toBe('');
    expect(result.current.selectedExamId).toBe('');
  });
});

describe('useAppState — exam flow', () => {
  /**
   * Walks the hook to the "exam" phase by simulating the home -> category
   * -> exam-start -> exam path.
   */
  function startExam(result: { current: ReturnType<typeof useAppState> }) {
    act(() => result.current.handleSelectCategory('AWS Cloud'));
    act(() => result.current.handleSelectExam('aws-ml'));
    act(() => result.current.handleStartExam());
  }

  it('handleStartExam moves to "exam" phase and starts the timer', () => {
    const { result } = renderHook(() => useAppState());
    startExam(result);
    expect(result.current.phase).toBe('exam');
    // The timer hook initializes at 0; it will tick once the interval fires.
    expect(result.current.timer.timer).toBe(0);
  });

  it('handleSubmit opens the submit dialog (does NOT advance phase yet)', () => {
    const { result } = renderHook(() => useAppState());
    startExam(result);
    expect(result.current.phase).toBe('exam');
    act(() => result.current.handleSubmit());
    expect(result.current.showSubmitDialog).toBe(true);
    expect(result.current.phase).toBe('exam'); // still on exam screen
  });

  it('handleConfirmSubmit advances to "results" and persists the submitted SavedTest', () => {
    const { result } = renderHook(() => useAppState());
    startExam(result);
    act(() => result.current.exam.selectAnswer(0, 0));
    act(() => result.current.handleConfirmSubmit());

    expect(result.current.phase).toBe('results');
    // handleConfirmSubmit (= autoSubmit) writes a SavedTest with status
    // "submitted" to STORAGE_KEY. The actual ExamAttempt is written by
    // useSubmitResults when ResultsScreen mounts — that is tested
    // separately in the ResultsScreen test.
    const savedTests = JSON.parse(
      window.localStorage.getItem('aws-ml-exam-saved-tests') || '[]'
    );
    expect(savedTests).toHaveLength(1);
    expect(savedTests[0].examId).toBe('aws-ml');
    expect(savedTests[0].status).toBe('submitted');
    expect(savedTests[0].answers[0]).toBe(0);
  });

  it('handleSave (save & exit) moves back to "exam-start" and persists the in-progress attempt', () => {
    const { result } = renderHook(() => useAppState());
    startExam(result);
    act(() => result.current.exam.selectAnswer(0, 0));
    act(() => result.current.handleSave());

    expect(result.current.phase).toBe('exam-start');
    // Saved-tests is the dedicated localStorage for in-progress resumes.
    const savedTests = JSON.parse(
      window.localStorage.getItem('aws-ml-exam-saved-tests') || '[]'
    );
    expect(savedTests).toHaveLength(1);
    expect(savedTests[0].status).toBe('in-progress');
    expect(savedTests[0].answers[0]).toBe(0);
  });

  it('handleResumeTest restores phase, answers, and the question seed (regression for §2.2)', () => {
    const { result } = renderHook(() => useAppState());
    startExam(result);
    act(() => result.current.exam.selectAnswer(0, 1));
    const originalSeed = result.current.questionSeed;
    act(() => result.current.handleSave());

    // After save, phase is "exam-start". Resuming should put us back in
    // the exam with the same seed, answers, and configuration.
    const saved = JSON.parse(
      window.localStorage.getItem('aws-ml-exam-saved-tests') || '[]'
    )[0];
    act(() => result.current.handleResumeTest(saved));

    expect(result.current.phase).toBe('exam');
    expect(result.current.exam.answers[0]).toBe(1);
    // The §2.2 regression: the seed MUST be restored so the question order
    // matches the original attempt. If this fails, the empty
    // `if (savedTest.questionSeed) {}` block in useAppState is back.
    expect(result.current.questionSeed).toBe(originalSeed);
  });
});
