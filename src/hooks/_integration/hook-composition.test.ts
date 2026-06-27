/**
 * Hook composition integration tests.
 *
 * Tests that use multiple hooks together to prove their contracts
 * work end-to-end without a browser. This is the integration layer
 * in the test pyramid — see docs/TEST_PYRAMID.md.
 */
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useTimer } from '../useTimer';
import { useTimerAutoSubmit } from '../useTimerAutoSubmit';
import { useExamState } from '../useExamState';
import { useExamActions } from '../useExamActions';
import { makeShuffledQuestion } from '@/test/utils/factories';
import type { ShuffledQuestion } from '@/types';

beforeEach(() => {
  window.localStorage.clear();
  vi.useFakeTimers();
});

afterEach(() => {
  vi.useRealTimers();
});

const questions: ShuffledQuestion[] = [
  makeShuffledQuestion({ id: 1, shuffledCorrectIndex: 0 }),
  makeShuffledQuestion({ id: 2, shuffledCorrectIndex: 1 }),
];

describe('useTimer + useTimerAutoSubmit composition', () => {
  it('fires onExpire exactly once when the timer crosses the duration', () => {
    // The spy is a stable ref so the assertion can observe every call
    // across renders (useTimerAutoSubmit's effect captures the spy by
    // reference and the ref is the same instance every render).
    const onExpire = vi.fn();
    function useComposed() {
      const timer = useTimer();
      useTimerAutoSubmit({
        enabled: true,
        elapsed: timer.timer,
        duration: 3,
        onExpire,
      });
      return { timer };
    }

    const { result } = renderHook(() => useComposed());

    act(() => result.current.timer.start());
    // Advance 2 seconds — not yet expired.
    act(() => vi.advanceTimersByTime(2000));
    expect(onExpire).not.toHaveBeenCalled();

    // Advance to 3 seconds — exactly at the boundary.
    act(() => vi.advanceTimersByTime(1000));
    expect(onExpire).toHaveBeenCalledTimes(1);

    // Advance further — must not re-fire.
    act(() => vi.advanceTimersByTime(5000));
    expect(onExpire).toHaveBeenCalledTimes(1);
  });
});

describe('useExamState + useExamActions composition', () => {
  function useComposed() {
    const state = useExamState(questions);
    const actions = useExamActions(state);
    return { state, actions };
  }

  it('start() + selectAnswer() + submit() roundtrip', () => {
    const { result } = renderHook(() => useComposed());

    act(() => result.current.actions.start({ mode: 'full', selectedDomain: '', testSet: 1 }));
    expect(result.current.state.phase).toBe('exam');
    expect(result.current.state.currentQuestion).toBe(0);

    act(() => result.current.actions.selectAnswer(0, 0));
    expect(result.current.state.answers[0]).toBe(0);
    expect(result.current.state.score.correct).toBe(1);

    act(() => result.current.actions.submit());
    expect(result.current.state.phase).toBe('results');
    expect(result.current.state.showResults).toBe(true);
  });

  it('start() resets transient state even when the previous run had answers', () => {
    const { result } = renderHook(() => useComposed());

    act(() => result.current.actions.start({ mode: 'full', selectedDomain: '', testSet: 1 }));
    act(() => result.current.actions.selectAnswer(0, 1));
    act(() => result.current.actions.toggleFlag(1));
    act(() => result.current.actions.submit());

    // Start a new run — answers and flags should be cleared.
    act(() => result.current.actions.start({ mode: 'full', selectedDomain: '', testSet: 1 }));
    expect(result.current.state.answers).toEqual({});
    expect(result.current.state.flaggedQuestions.size).toBe(0);
    expect(result.current.state.showResults).toBe(false);
    expect(result.current.state.currentQuestion).toBe(0);
  });
});
