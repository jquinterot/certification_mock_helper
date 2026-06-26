import { describe, it, expect } from 'vitest';
import { renderHook } from '@testing-library/react';
import { useTimerUrgency, CRITICAL_TIME_THRESHOLD_SECONDS } from './useTimerUrgency';

describe('useTimerUrgency', () => {
  it('returns neutral state when examDuration <= 0', () => {
    const { result } = renderHook(() => useTimerUrgency(0, 0));
    expect(result.current.remainingTime).toBeNull();
    expect(result.current.urgency).toBe('normal');
    expect(result.current.isLowTime).toBe(false);
    expect(result.current.isCriticalTime).toBe(false);
  });

  it('computes remaining time as max(0, duration - elapsed)', () => {
    const { result } = renderHook(() => useTimerUrgency(3600, 600));
    expect(result.current.remainingTime).toBe(3000);
  });

  it('clamps remaining time at 0 when elapsed exceeds duration', () => {
    const { result } = renderHook(() => useTimerUrgency(1000, 5000));
    expect(result.current.remainingTime).toBe(0);
  });

  it('classifies as critical when remaining is below critical threshold', () => {
    const { result } = renderHook(() => useTimerUrgency(3600, 3600 - CRITICAL_TIME_THRESHOLD_SECONDS + 1));
    expect(result.current.isCriticalTime).toBe(true);
    expect(result.current.urgency).toBe('critical');
  });

  it('classifies as low when remaining is between critical and low thresholds', () => {
    // remaining must be < LOW_TIME_THRESHOLD_SECONDS but >= CRITICAL_TIME_THRESHOLD_SECONDS
    // 3600 - elapsed = 599 -> elapsed = 3001; 599 > 300 (critical) and 599 < 600 (low)
    const { result } = renderHook(() => useTimerUrgency(3600, 3001));
    expect(result.current.remainingTime).toBe(599);
    expect(result.current.isLowTime).toBe(true);
    expect(result.current.urgency).toBe('low');
    expect(result.current.isCriticalTime).toBe(false);
  });

  it('classifies as normal when remaining is well above the low threshold', () => {
    const { result } = renderHook(() => useTimerUrgency(3600, 0));
    expect(result.current.urgency).toBe('normal');
    expect(result.current.isLowTime).toBe(false);
    expect(result.current.isCriticalTime).toBe(false);
  });
});
