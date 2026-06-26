'use client';

import { useEffect, useRef } from 'react';

export interface UseTimerAutoSubmitOptions {
  enabled: boolean;
  elapsed: number;
  duration: number;
  onExpire: () => void;
}

/**
 * Fires `onExpire` once when the elapsed timer crosses the exam duration.
 * Latches via a ref so the callback runs at most once per activation cycle.
 */
export function useTimerAutoSubmit({ enabled, elapsed, duration, onExpire }: UseTimerAutoSubmitOptions) {
  const firedRef = useRef(false);

  useEffect(() => {
    if (!enabled) {
      firedRef.current = false;
      return;
    }
    if (duration > 0 && elapsed >= duration && !firedRef.current) {
      firedRef.current = true;
      onExpire();
    }
  }, [enabled, elapsed, duration, onExpire]);

  const reset = () => {
    firedRef.current = false;
  };

  return { reset };
}
