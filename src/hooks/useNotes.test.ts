import { describe, it, expect, beforeEach } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useNotes } from './useNotes';

const NOTE_KEY = 'certification-exam-question-notes';

beforeEach(() => {
  window.localStorage.clear();
});

describe('useNotes', () => {
  it('returns an empty string for an unseen key', () => {
    const { result } = renderHook(() => useNotes());
    expect(result.current.getNote('q1')).toBe('');
  });

  it('saves a note', () => {
    const { result } = renderHook(() => useNotes());
    act(() => result.current.saveNote('q1', 'Remember this'));
    expect(result.current.getNote('q1')).toBe('Remember this');
    expect(window.localStorage.getItem(NOTE_KEY)).toContain('Remember this');
  });

  it('deletes a note when saved with empty text', () => {
    const { result } = renderHook(() => useNotes());
    act(() => result.current.saveNote('q1', 'Remember this'));
    act(() => result.current.saveNote('q1', '   '));
    expect(result.current.getNote('q1')).toBe('');
  });

  it('deletes a note via deleteNote', () => {
    const { result } = renderHook(() => useNotes());
    act(() => result.current.saveNote('q1', 'Note A'));
    act(() => result.current.saveNote('q2', 'Note B'));
    act(() => result.current.deleteNote('q1'));
    expect(result.current.getNote('q1')).toBe('');
    expect(result.current.getNote('q2')).toBe('Note B');
  });

  it('persists notes across hook instances', () => {
    const { result: first } = renderHook(() => useNotes());
    act(() => first.current.saveNote('q1', 'Shared note'));

    const { result: second } = renderHook(() => useNotes());
    expect(second.current.getNote('q1')).toBe('Shared note');
  });
});
