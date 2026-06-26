import { describe, it, expect, beforeEach } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useExamState } from './useExamState';
import { useExamActions } from './useExamActions';
import { makeShuffledQuestion } from '@/test/utils/factories';
import type { ShuffledQuestion } from '@/types';

beforeEach(() => {
  window.localStorage.clear();
});

const questions: ShuffledQuestion[] = [
  makeShuffledQuestion({ id: 1, domain: 'Ch 1', shuffledCorrectIndex: 0 }),
  makeShuffledQuestion({ id: 2, domain: 'Ch 1', shuffledCorrectIndex: 1, correctAnswer: [0, 2] }),
  makeShuffledQuestion({ id: 3, domain: 'Ch 2', shuffledCorrectIndex: 0 }),
];

function setup() {
  return renderHook(() => {
    const state = useExamState(questions);
    const actions = useExamActions(state);
    return { state, actions };
  });
}

describe('useExamActions', () => {
  it('start(config) sets phase to exam and applies config', () => {
    const { result } = setup();
    act(() => result.current.actions.start({ mode: 'section', selectedDomain: 'Ch 1', testSet: 2 }));
    expect(result.current.state.phase).toBe('exam');
    expect(result.current.state.config).toEqual({ mode: 'section', selectedDomain: 'Ch 1', testSet: 2 });
  });

  it('reset() returns to idle phase with default config and clears state', () => {
    const { result } = setup();
    act(() => result.current.actions.start({ mode: 'section', selectedDomain: 'Ch 1', testSet: 2 }));
    act(() => result.current.state.setAnswers({ 0: 1 }));
    act(() => result.current.actions.reset());
    expect(result.current.state.phase).toBe('idle');
    expect(result.current.state.config).toEqual({ mode: 'full', selectedDomain: '', testSet: 1 });
    expect(result.current.state.answers).toEqual({});
  });

  it('submit() moves to results and shows results', () => {
    const { result } = setup();
    act(() => result.current.actions.start({ mode: 'full', selectedDomain: '', testSet: 1 }));
    act(() => result.current.actions.submit());
    expect(result.current.state.phase).toBe('results');
    expect(result.current.state.showResults).toBe(true);
  });

  it('review() reveals explanations for every question', () => {
    const { result } = setup();
    act(() => result.current.actions.start({ mode: 'full', selectedDomain: '', testSet: 1 }));
    act(() => result.current.actions.submit());
    act(() => result.current.actions.review());
    expect(result.current.state.phase).toBe('review');
    expect(Object.values(result.current.state.showExplanation).every(Boolean)).toBe(true);
  });

  it('reviewFlagged() is a no-op when no questions are flagged', () => {
    const { result } = setup();
    act(() => result.current.actions.start({ mode: 'full', selectedDomain: '', testSet: 1 }));
    act(() => result.current.actions.reviewFlagged());
    expect(result.current.state.phase).toBe('exam');
  });

  it('reviewFlagged() jumps to the first flagged question', () => {
    const { result } = setup();
    act(() => result.current.actions.start({ mode: 'full', selectedDomain: '', testSet: 1 }));
    act(() => result.current.actions.toggleFlag(2));
    act(() => result.current.actions.reviewFlagged());
    expect(result.current.state.phase).toBe('review');
    expect(result.current.state.currentQuestion).toBe(2);
  });

  it('selectAnswer for single-response sets a number and shows explanation', () => {
    const { result } = setup();
    act(() => result.current.actions.start({ mode: 'full', selectedDomain: '', testSet: 1 }));
    act(() => result.current.actions.selectAnswer(0, 1));
    expect(result.current.state.answers[0]).toBe(1);
    expect(result.current.state.showExplanation[0]).toBe(true);
  });

  it('selectAnswer for multi-response toggles an option in the array', () => {
    const { result } = setup();
    act(() => result.current.actions.start({ mode: 'full', selectedDomain: '', testSet: 1 }));
    // Q at index 1 has correctAnswer [0, 2] (multi)
    act(() => result.current.actions.selectAnswer(1, 0));
    act(() => result.current.actions.selectAnswer(1, 2));
    expect(result.current.state.answers[1]).toEqual([0, 2]);
    // Click again to toggle off
    act(() => result.current.actions.selectAnswer(1, 0));
    expect(result.current.state.answers[1]).toEqual([2]);
  });

  it('selectAnswer is ignored when showResults is true', () => {
    const { result } = setup();
    act(() => result.current.actions.start({ mode: 'full', selectedDomain: '', testSet: 1 }));
    act(() => result.current.actions.submit());
    act(() => result.current.actions.selectAnswer(0, 2));
    expect(result.current.state.answers[0]).toBeUndefined();
  });

  it('toggleFlag adds and removes a flag', () => {
    const { result } = setup();
    act(() => result.current.actions.start({ mode: 'full', selectedDomain: '', testSet: 1 }));
    act(() => result.current.actions.toggleFlag(0));
    expect(result.current.state.flaggedQuestions.has(0)).toBe(true);
    act(() => result.current.actions.toggleFlag(0));
    expect(result.current.state.flaggedQuestions.has(0)).toBe(false);
  });

  it('goToNext and goToPrevious move within bounds', () => {
    const { result } = setup();
    act(() => result.current.actions.start({ mode: 'full', selectedDomain: '', testSet: 1 }));
    act(() => result.current.actions.goToNext());
    expect(result.current.state.currentQuestion).toBe(1);
    act(() => result.current.actions.goToNext());
    act(() => result.current.actions.goToNext());
    // clamps at last question
    expect(result.current.state.currentQuestion).toBe(2);
    act(() => result.current.actions.goToPrevious());
    expect(result.current.state.currentQuestion).toBe(1);
    act(() => result.current.actions.goToPrevious());
    act(() => result.current.actions.goToPrevious());
    // clamps at 0
    expect(result.current.state.currentQuestion).toBe(0);
  });

  it('goToNextFlagged jumps to the next flagged question', () => {
    const { result } = setup();
    act(() => result.current.actions.start({ mode: 'full', selectedDomain: '', testSet: 1 }));
    act(() => result.current.actions.toggleFlag(1));
    act(() => result.current.actions.goToNextFlagged());
    expect(result.current.state.currentQuestion).toBe(1);
  });

  it('toggleExplanation flips the showExplanation entry', () => {
    const { result } = setup();
    act(() => result.current.actions.start({ mode: 'full', selectedDomain: '', testSet: 1 }));
    expect(result.current.state.showExplanation[0]).toBeFalsy();
    act(() => result.current.actions.toggleExplanation(0));
    expect(result.current.state.showExplanation[0]).toBe(true);
    act(() => result.current.actions.toggleExplanation(0));
    expect(result.current.state.showExplanation[0]).toBe(false);
  });

  it('resume() restores progress and starts the exam', () => {
    const { result } = setup();
    act(() =>
      result.current.actions.resume(
        { mode: 'full', selectedDomain: '', testSet: 1 },
        2,
        { 0: 1, 1: 2 },
        [1, 2]
      )
    );
    expect(result.current.state.phase).toBe('exam');
    expect(result.current.state.currentQuestion).toBe(2);
    expect(result.current.state.answers).toEqual({ 0: 1, 1: 2 });
    expect(Array.from(result.current.state.flaggedQuestions)).toEqual([1, 2]);
    expect(result.current.state.showResults).toBe(false);
  });
});
