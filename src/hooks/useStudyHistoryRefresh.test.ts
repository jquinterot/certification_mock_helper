import { describe, it, expect, beforeEach } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useStudyHistoryRefresh } from './useStudyHistoryRefresh';

beforeEach(() => {
  window.localStorage.clear();
});

describe('useStudyHistoryRefresh', () => {
  it('starts at 0', () => {
    const { result } = renderHook(() => useStudyHistoryRefresh());
    expect(result.current[0]).toBe(0);
  });

  it('trigger() increments the counter', () => {
    const { result } = renderHook(() => useStudyHistoryRefresh());
    act(() => result.current[1]());
    expect(result.current[0]).toBe(1);
    act(() => result.current[1]());
    expect(result.current[0]).toBe(2);
  });
});
