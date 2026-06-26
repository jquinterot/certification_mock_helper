import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useTimer } from './useTimer';

describe('useTimer', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });
  afterEach(() => {
    vi.useRealTimers();
  });

  it('starts at 0', () => {
    const { result } = renderHook(() => useTimer());
    expect(result.current.timer).toBe(0);
  });

  it('increments the timer every second when started', () => {
    const { result } = renderHook(() => useTimer());
    act(() => result.current.start());
    act(() => {
      vi.advanceTimersByTime(3500);
    });
    expect(result.current.timer).toBe(3);
  });

  it('pause stops the increment', () => {
    const { result } = renderHook(() => useTimer());
    act(() => result.current.start());
    act(() => vi.advanceTimersByTime(2000));
    act(() => result.current.pause());
    act(() => vi.advanceTimersByTime(5000));
    expect(result.current.timer).toBe(2);
  });

  it('reset clears the timer', () => {
    const { result } = renderHook(() => useTimer());
    act(() => result.current.start());
    act(() => vi.advanceTimersByTime(2000));
    act(() => result.current.reset());
    expect(result.current.timer).toBe(0);
  });

  it('set overrides the timer value', () => {
    const { result } = renderHook(() => useTimer());
    act(() => result.current.set(120));
    expect(result.current.timer).toBe(120);
  });

  it('start is idempotent (no double interval)', () => {
    const { result } = renderHook(() => useTimer());
    act(() => result.current.start());
    act(() => result.current.start());
    act(() => vi.advanceTimersByTime(1000));
    expect(result.current.timer).toBe(1);
  });

  it('cleans up the interval on unmount', () => {
    const { result, unmount } = renderHook(() => useTimer());
    act(() => result.current.start());
    unmount();
    // After unmount, advancing timers should not throw and the (no longer
    // subscribed) state is irrelevant. We just ensure no errors.
    act(() => vi.advanceTimersByTime(1000));
  });
});
