import { describe, it, expect, vi, afterEach } from 'vitest';
import { renderHook } from '@testing-library/react';
import { useGlobalKeydown, isTypingInForm } from './useKeyboardShortcuts';

describe('isTypingInForm', () => {
  it('returns true for an INPUT element', () => {
    const input = document.createElement('input');
    expect(isTypingInForm(input)).toBe(true);
  });

  it('returns true for a TEXTAREA element', () => {
    const textarea = document.createElement('textarea');
    expect(isTypingInForm(textarea)).toBe(true);
  });

  it('returns false for other elements', () => {
    const div = document.createElement('div');
    expect(isTypingInForm(div)).toBe(false);
    const button = document.createElement('button');
    expect(isTypingInForm(button)).toBe(false);
  });

  it('returns false for null', () => {
    expect(isTypingInForm(null)).toBe(false);
  });
});

describe('useGlobalKeydown', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('registers a keydown listener that invokes the handler', () => {
    const handler = vi.fn();
    renderHook(() => useGlobalKeydown(handler));
    window.dispatchEvent(new KeyboardEvent('keydown', { key: 'a' }));
    expect(handler).toHaveBeenCalledTimes(1);
  });

  it('uses the latest handler (does not capture a stale closure)', () => {
    const first = vi.fn();
    const second = vi.fn();
    const { rerender } = renderHook(
      ({ h }: { h: (e: KeyboardEvent) => void }) => useGlobalKeydown(h),
      { initialProps: { h: first } }
    );
    window.dispatchEvent(new KeyboardEvent('keydown', { key: 'a' }));
    expect(first).toHaveBeenCalledTimes(1);

    rerender({ h: second });
    window.dispatchEvent(new KeyboardEvent('keydown', { key: 'b' }));
    expect(second).toHaveBeenCalledTimes(1);
    // first should NOT have been called a second time
    expect(first).toHaveBeenCalledTimes(1);
  });

  it('removes the listener on unmount', () => {
    const handler = vi.fn();
    const { unmount } = renderHook(() => useGlobalKeydown(handler));
    unmount();
    window.dispatchEvent(new KeyboardEvent('keydown', { key: 'a' }));
    expect(handler).not.toHaveBeenCalled();
  });
});
