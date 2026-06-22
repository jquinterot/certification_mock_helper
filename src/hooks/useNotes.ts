'use client';

import { useCallback } from 'react';
import { useLocalStorage } from './useLocalStorage';

const NOTES_KEY = 'certification-exam-question-notes';

export function useNotes() {
  const [allNotes, setAllNotes] = useLocalStorage<Record<string, string>>(NOTES_KEY, {});

  const getNote = useCallback((key: string): string => {
    return allNotes[key] || '';
  }, [allNotes]);

  const saveNote = useCallback((key: string, text: string): void => {
    setAllNotes((prev) => {
      if (!text.trim()) {
        const next = { ...prev };
        delete next[key];
        return next;
      }
      return { ...prev, [key]: text };
    });
  }, [setAllNotes]);

  const deleteNote = useCallback((key: string): void => {
    setAllNotes((prev) => {
      const next = { ...prev };
      delete next[key];
      return next;
    });
  }, [setAllNotes]);

  return { getNote, saveNote, deleteNote };
}