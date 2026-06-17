import { useCallback } from 'react';
import { useLocalStorage } from './useLocalStorage';
import type { SavedTest } from '@/lib/types';
import { STORAGE_KEY } from '@/lib/constants';
import { deleteAttempt } from '@/lib/study-history';

export function useSavedTests() {
  const [savedTests, setSavedTests] = useLocalStorage<SavedTest[]>(STORAGE_KEY, []);

  const addSavedTest = useCallback(
    (test: SavedTest) => {
      setSavedTests((prev) => [test, ...prev]);
    },
    [setSavedTests]
  );

  const deleteSavedTest = useCallback(
    (id: string) => {
      setSavedTests((prev) => prev.filter((t) => t.id !== id));
    },
    [setSavedTests]
  );

  const deleteExamAttempt = useCallback(
    (examId: string, attemptId: string) => {
      deleteAttempt(examId, attemptId);
    },
    []
  );

  return { savedTests, addSavedTest, deleteSavedTest, deleteExamAttempt };
}
