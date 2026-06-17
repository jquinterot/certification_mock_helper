import { useState, useMemo, useRef } from 'react';
import type { ShuffledQuestion, ExamRuntimeConfig, AppPhase } from '@/types';
import { getActiveQuestions, getDomainScores } from '@/lib/utils';
import { checkAnswer } from '@/lib/questions/shuffle';

export interface ExamState {
  phase: AppPhase;
  currentQuestion: number;
  answers: Record<number, number | number[]>;
  showExplanation: Record<number, boolean>;
  flaggedQuestions: Set<number>;
  showResults: boolean;
  config: ExamRuntimeConfig;
}

export function useExamState(questions: ShuffledQuestion[]) {
  const [phase, setPhase] = useState<AppPhase>('idle');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number | number[]>>({});
  const [showExplanation, setShowExplanation] = useState<Record<number, boolean>>({});
  const [flaggedQuestions, setFlaggedQuestions] = useState<Set<number>>(new Set());
  const [showResults, setShowResults] = useState(false);
  const [config, setConfig] = useState<ExamRuntimeConfig>({ mode: 'full', selectedDomain: '', testSet: 1 });
  const configRef = useRef<ExamRuntimeConfig>({ mode: 'full', selectedDomain: '', testSet: 1 });

  const activeQuestions = useMemo(
    () => getActiveQuestions(questions, config.mode, config.selectedDomain),
    [questions, config.mode, config.selectedDomain]
  );

  const score = useMemo(() => {
    let correct = 0;
    activeQuestions.forEach((q, idx) => {
      if (checkAnswer(q, answers[idx])) {
        correct++;
      }
    });
    return { correct, total: activeQuestions.length, percentage: activeQuestions.length > 0 ? Math.round((correct / activeQuestions.length) * 100) : 0 };
  }, [activeQuestions, answers]);

  const domainScores = useMemo(
    () => getDomainScores(activeQuestions, answers),
    [activeQuestions, answers]
  );

  const question = activeQuestions[currentQuestion];
  const isCorrect = useMemo(() => {
    if (!question) return false;
    return checkAnswer(question, answers[currentQuestion]);
  }, [answers, currentQuestion, question]);
  const flaggedCount = flaggedQuestions.size;
  const answeredCount = Object.keys(answers).length;

  return {
    phase,
    currentQuestion,
    answers,
    showExplanation,
    flaggedQuestions,
    showResults,
    config,
    configRef,
    activeQuestions,
    score,
    domainScores,
    question,
    isCorrect,
    flaggedCount,
    answeredCount,
    setPhase,
    setCurrentQuestion,
    setAnswers,
    setShowExplanation,
    setFlaggedQuestions,
    setShowResults,
    setConfig,
  };
}

export type UseExamStateReturn = ReturnType<typeof useExamState>;
