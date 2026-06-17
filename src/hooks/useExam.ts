import type { ShuffledQuestion } from '@/types';
import { useExamState } from './useExamState';
import { useExamActions } from './useExamActions';

export function useExam(questions: ShuffledQuestion[]) {
  const state = useExamState(questions);
  const actions = useExamActions(state);

  return {
    ...state,
    ...actions,
  };
}

export type { ExamState } from './useExamState';
