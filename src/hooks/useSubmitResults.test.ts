import { describe, it, expect, beforeEach, vi } from 'vitest';
import { renderHook } from '@testing-library/react';
import { useSubmitResults } from './useSubmitResults';
import { makeShuffledQuestion } from '@/test/utils/factories';
import type { ShuffledQuestion } from '@/types';

const STORAGE_KEY = 'exam-attempts-test-exam';
const ANALYTICS_KEY = 'question-analytics';

beforeEach(() => {
  window.localStorage.clear();
  vi.spyOn(Date, 'now').mockReturnValue(1234567890);
});

const baseOptions = {
  selectedExamId: 'test-exam',
  config: { testSet: 1, mode: 'full' as const, selectedDomain: '' },
  score: { correct: 2, total: 3, percentage: 67 },
  domainScores: {
    'Ch 1': { correct: 2, total: 3, percentage: 67 },
  },
  passed: true,
  // answers is keyed by question INDEX (position in `questions`), not by
  // question id. Q0 missed, Q1 correct, Q2 correct.
  answers: { 1: 0, 2: 0 } as Record<number, number | number[]>,
  timeElapsed: 1234,
};

const questions: ShuffledQuestion[] = [
  makeShuffledQuestion({ id: 1, domain: 'Ch 1', correctAnswer: 0, shuffledCorrectIndex: 0 }),
  makeShuffledQuestion({ id: 2, domain: 'Ch 1', correctAnswer: 0, shuffledCorrectIndex: 0 }),
  makeShuffledQuestion({ id: 3, domain: 'Ch 1', correctAnswer: 0, shuffledCorrectIndex: 0 }),
];

describe('useSubmitResults', () => {
  it('returns a numeric timestamp', () => {
    const { result } = renderHook(() => useSubmitResults({ ...baseOptions, questions }));
    expect(typeof result.current).toBe('number');
    expect(result.current).toBe(1234567890);
  });

  it('persists the attempt on mount', () => {
    renderHook(() => useSubmitResults({ ...baseOptions, questions }));
    const stored = JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '[]');
    expect(stored).toHaveLength(1);
    expect(stored[0].examId).toBe('test-exam');
    expect(stored[0].score).toBe(2);
    expect(stored[0].totalQuestions).toBe(3);
    expect(stored[0].passed).toBe(true);
    expect(stored[0].answers).toEqual({ 1: 0, 2: 0 });
    expect(stored[0].timeElapsed).toBe(1234);
  });

  it('only saves the attempt once (latch via hasSavedRef)', () => {
    const { rerender } = renderHook(
      ({ opts }: { opts: typeof baseOptions }) => useSubmitResults({ ...opts, questions }),
      { initialProps: { opts: baseOptions } }
    );
    rerender({ opts: baseOptions });
    rerender({ opts: baseOptions });
    const stored = JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '[]');
    expect(stored).toHaveLength(1);
  });

  it('records per-question analytics keyed by index, with shuffledCorrectIndex as the answer key', () => {
    renderHook(() => useSubmitResults({ ...baseOptions, questions }));
    const allAnalytics = JSON.parse(window.localStorage.getItem(ANALYTICS_KEY) || '{}');
    // answers = {1: 0, 2: 0} (index-keyed). Every question has
    // shuffledCorrectIndex = 0. So Q0 (idx 0) is missed (no answer),
    // Q1 (idx 1) and Q2 (idx 2) are correct.
    expect(allAnalytics['test-exam-1'].timesSeen).toBe(1);
    expect(allAnalytics['test-exam-1'].timesCorrect).toBe(0);
    expect(allAnalytics['test-exam-2'].timesSeen).toBe(1);
    expect(allAnalytics['test-exam-2'].timesCorrect).toBe(1);
    expect(allAnalytics['test-exam-3'].timesSeen).toBe(1);
    expect(allAnalytics['test-exam-3'].timesCorrect).toBe(1);
  });

  it('uses shuffledCorrectIndex (post-shuffle) — not the original correctAnswer — to judge correctness', () => {
    // Question whose original correctAnswer is 0, but after shuffling the
    // correct option is at position 2. The user picks option 2; analytics
    // should mark this as correct.
    const shuffledQuestions: ShuffledQuestion[] = [
      makeShuffledQuestion({
        id: 99,
        domain: 'Ch 1',
        correctAnswer: 0,
        shuffledCorrectIndex: 2,
      }),
    ];
    renderHook(() =>
      useSubmitResults({
        ...baseOptions,
        questions: shuffledQuestions,
        answers: { 0: 2 } as Record<number, number | number[]>,
      })
    );
    const allAnalytics = JSON.parse(window.localStorage.getItem(ANALYTICS_KEY) || '{}');
    expect(allAnalytics['test-exam-99'].timesCorrect).toBe(1);
  });

  it('passes the selectedDomain through (or undefined when empty)', () => {
    renderHook(() =>
      useSubmitResults({
        ...baseOptions,
        config: { testSet: 1, mode: 'section', selectedDomain: 'Ch 1' },
        questions,
      })
    );
    const stored = JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '[]');
    expect(stored).toHaveLength(1);
    expect(stored[0].selectedDomain).toBe('Ch 1');
  });

  it('stores selectedDomain as undefined when empty (omits the key gracefully)', () => {
    renderHook(() => useSubmitResults({ ...baseOptions, questions }));
    const stored = JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '[]');
    expect(stored[0].selectedDomain).toBeFalsy();
  });
});
