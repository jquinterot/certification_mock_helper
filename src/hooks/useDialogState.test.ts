import { describe, it, expect } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useDialogState } from './useDialogState';

describe('useDialogState', () => {
  it('starts with both dialogs closed', () => {
    const { result } = renderHook(() => useDialogState());
    expect(result.current.showExitDialog).toBe(false);
    expect(result.current.showSubmitDialog).toBe(false);
  });

  it('opens and closes the exit dialog', () => {
    const { result } = renderHook(() => useDialogState());
    act(() => result.current.openExit());
    expect(result.current.showExitDialog).toBe(true);
    act(() => result.current.closeExit());
    expect(result.current.showExitDialog).toBe(false);
  });

  it('opens and closes the submit dialog', () => {
    const { result } = renderHook(() => useDialogState());
    act(() => result.current.openSubmit());
    expect(result.current.showSubmitDialog).toBe(true);
    act(() => result.current.closeSubmit());
    expect(result.current.showSubmitDialog).toBe(false);
  });

  it('independently tracks the two dialogs', () => {
    const { result } = renderHook(() => useDialogState());
    act(() => result.current.openExit());
    expect(result.current.showSubmitDialog).toBe(false);
    act(() => result.current.openSubmit());
    expect(result.current.showExitDialog).toBe(true);
    expect(result.current.showSubmitDialog).toBe(true);
  });
});
