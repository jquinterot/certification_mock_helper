import { describe, it, expect, beforeEach } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useExamState } from './useExamState';
import { makeShuffledQuestion } from '@/test/utils/factories';
import type { ShuffledQuestion } from '@/types';

beforeEach(() => {
  window.localStorage.clear();
});

const sampleQuestions: ShuffledQuestion[] = [
  makeShuffledQuestion({ id: 1, domain: 'Ch 1', shuffledCorrectIndex: 0 }),
  makeShuffledQuestion({ id: 2, domain: 'Ch 1', shuffledCorrectIndex: 1 }),
  makeShuffledQuestion({ id: 3, domain: 'Ch 2', shuffledCorrectIndex: 0 }),
];

describe('useExamState', () => {
  it('starts in idle phase on question 0 with empty answers', () => {
    const { result } = renderHook(() => useExamState(sampleQuestions));
    expect(result.current.phase).toBe('idle');
    expect(result.current.currentQuestion).toBe(0);
    expect(result.current.answers).toEqual({});
    expect(result.current.flaggedQuestions.size).toBe(0);
    expect(result.current.showResults).toBe(false);
    expect(result.current.answeredCount).toBe(0);
    expect(result.current.flaggedCount).toBe(0);
  });

  it('exposes the current question from activeQuestions', () => {
    const { result } = renderHook(() => useExamState(sampleQuestions));
    expect(result.current.question.id).toBe(1);
  });

  it('computes score and domainScores from answers', () => {
    const { result } = renderHook(() => useExamState(sampleQuestions));
    act(() => {
      result.current.setAnswers({ 0: 0, 1: 2, 2: 0 });
    });
    // Q1 correct, Q2 wrong, Q3 correct
    expect(result.current.score.correct).toBe(2);
    expect(result.current.score.total).toBe(3);
    expect(result.current.score.percentage).toBe(67);
    expect(result.current.domainScores['Ch 1'].correct).toBe(1);
    expect(result.current.domainScores['Ch 2'].correct).toBe(1);
  });

  it('isCorrect reflects the answer for the current question', () => {
    const { result } = renderHook(() => useExamState(sampleQuestions));
    act(() => result.current.setAnswers({ 0: 0 }));
    expect(result.current.isCorrect).toBe(true);
    act(() => result.current.setAnswers({ 0: 1 }));
    expect(result.current.isCorrect).toBe(false);
  });

  it('filters active questions by domain in section mode', () => {
    const { result } = renderHook(() => useExamState(sampleQuestions));
    act(() => {
      result.current.setConfig({ mode: 'section', selectedDomain: 'Ch 1', testSet: 1 });
    });
    expect(result.current.activeQuestions).toHaveLength(2);
    expect(result.current.score.total).toBe(2);
  });

  it('answeredCount tracks number of answered questions', () => {
    const { result } = renderHook(() => useExamState(sampleQuestions));
    act(() => result.current.setAnswers({ 0: 1, 1: 2 }));
    expect(result.current.answeredCount).toBe(2);
  });

  it('flaggedCount tracks the flagged set', () => {
    const { result } = renderHook(() => useExamState(sampleQuestions));
    act(() => result.current.setFlaggedQuestions(new Set([0, 2])));
    expect(result.current.flaggedCount).toBe(2);
  });

  it('isCorrect returns false when there is no current question', () => {
    const { result } = renderHook(() => useExamState([]));
    expect(result.current.isCorrect).toBe(false);
  });
});
