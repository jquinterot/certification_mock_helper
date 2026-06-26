'use client';

import { useState, useCallback } from 'react';

/**
 * Tracks a counter that callers bump to trigger re-computation of
 * local-storage-backed memoized values. The `value` is the counter, the
 * `trigger` function increments it.
 */
export function useStudyHistoryRefresh(): [number, () => void] {
  const [value, setValue] = useState(0);
  const trigger = useCallback(() => setValue((k) => k + 1), []);
  return [value, trigger];
}
