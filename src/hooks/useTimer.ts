import { useRef, useEffect, useState, useCallback } from 'react';

export function useTimer() {
  const [timer, setTimer] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const timerRef = useRef(0);

  const start = useCallback(() => {
    if (intervalRef.current) return;
    timerRef.current = timer;
    intervalRef.current = setInterval(() => {
      timerRef.current += 1;
      setTimer(timerRef.current);
    }, 1000);
  }, [timer]);

  const pause = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  const reset = useCallback(() => {
    pause();
    timerRef.current = 0;
    setTimer(0);
  }, [pause]);

  const set = useCallback((value: number) => {
    timerRef.current = value;
    setTimer(value);
  }, []);

  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  return { timer, start, pause, reset, set };
}
