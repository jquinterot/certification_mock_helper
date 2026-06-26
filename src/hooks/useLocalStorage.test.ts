import { describe, it, expect } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useLocalStorage } from './useLocalStorage';

describe('useLocalStorage', () => {
  it('returns the initial value when no value is stored', () => {
    const { result } = renderHook(() => useLocalStorage<number>('test-key', 0));
    expect(result.current[0]).toBe(0);
  });

  it('reads existing value from localStorage on mount', () => {
    window.localStorage.setItem('existing', JSON.stringify(42));
    const { result } = renderHook(() => useLocalStorage<number>('existing', 0));
    expect(result.current[0]).toBe(42);
  });

  it('persists the value when set', () => {
    const { result } = renderHook(() => useLocalStorage<string>('save-key', 'init'));
    act(() => {
      result.current[1]('updated');
    });
    expect(result.current[0]).toBe('updated');
    expect(window.localStorage.getItem('save-key')).toBe(JSON.stringify('updated'));
  });

  it('supports a function updater', () => {
    const { result } = renderHook(() => useLocalStorage<number>('counter', 1));
    act(() => {
      result.current[1]((prev) => prev + 1);
    });
    expect(result.current[0]).toBe(2);
  });

  it('falls back to initial value when stored JSON is invalid', () => {
    window.localStorage.setItem('bad', '{not-json');
    const { result } = renderHook(() => useLocalStorage<string>('bad', 'fallback'));
    expect(result.current[0]).toBe('fallback');
  });
});
