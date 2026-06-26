import { describe, it, expect, beforeEach } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useSavedTests } from './useSavedTests';
import { makeSavedTest, makeAttempt } from '@/test/utils/factories';
import { STORAGE_KEY } from '@/lib/constants';

beforeEach(() => {
  window.localStorage.clear();
});

describe('useSavedTests', () => {
  it('starts with an empty list', () => {
    const { result } = renderHook(() => useSavedTests());
    expect(result.current.savedTests).toEqual([]);
  });

  it('adds a saved test (prepended)', () => {
    const { result } = renderHook(() => useSavedTests());
    const test = makeSavedTest({ id: 'a' });
    act(() => result.current.addSavedTest(test));
    expect(result.current.savedTests[0].id).toBe('a');
  });

  it('persists added tests in localStorage', () => {
    const { result } = renderHook(() => useSavedTests());
    const test = makeSavedTest({ id: 'persist' });
    act(() => result.current.addSavedTest(test));
    const stored = JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '[]');
    expect(stored[0].id).toBe('persist');
  });

  it('deletes a saved test by id', () => {
    const { result } = renderHook(() => useSavedTests());
    act(() => result.current.addSavedTest(makeSavedTest({ id: 'a' })));
    act(() => result.current.addSavedTest(makeSavedTest({ id: 'b' })));
    act(() => result.current.deleteSavedTest('a'));
    expect(result.current.savedTests.map((t) => t.id)).toEqual(['b']);
  });

  it('deleteExamAttempt removes the attempt from localStorage', () => {
    const examId = 'aws-ml';
    const attempt = makeAttempt({ id: 'a1', examId });
    window.localStorage.setItem(
      `exam-attempts-${examId}`,
      JSON.stringify([attempt])
    );

    const { result } = renderHook(() => useSavedTests());
    act(() => result.current.deleteExamAttempt(examId, 'a1'));
    const stored = JSON.parse(window.localStorage.getItem(`exam-attempts-${examId}`) || '[]');
    expect(stored).toEqual([]);
  });
});
