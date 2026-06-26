'use client';

import { useMemo } from 'react';

export const LOW_TIME_THRESHOLD_SECONDS = 10 * 60;
export const CRITICAL_TIME_THRESHOLD_SECONDS = 5 * 60;

export type TimerUrgency = 'normal' | 'low' | 'critical';

export interface UseTimerUrgencyResult {
  remainingTime: number | null;
  urgency: TimerUrgency;
  isLowTime: boolean;
  isCriticalTime: boolean;
}

/**
 * Derives the "remaining-time" display state and urgency classification from
 * the total exam duration and the current elapsed timer. Pass
 * `examDuration <= 0` to disable the timer (e.g. when no exam is active).
 */
export function useTimerUrgency(examDuration: number, elapsed: number): UseTimerUrgencyResult {
  return useMemo(() => {
    if (examDuration <= 0) {
      return { remainingTime: null, urgency: 'normal', isLowTime: false, isCriticalTime: false };
    }
    const remaining = Math.max(0, examDuration - elapsed);
    const isCritical = remaining < CRITICAL_TIME_THRESHOLD_SECONDS;
    const isLow = !isCritical && remaining < LOW_TIME_THRESHOLD_SECONDS;
    return {
      remainingTime: remaining,
      urgency: isCritical ? 'critical' : isLow ? 'low' : 'normal',
      isLowTime: isLow,
      isCriticalTime: isCritical,
    };
  }, [examDuration, elapsed]);
}
