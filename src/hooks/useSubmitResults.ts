'use client';

import { useEffect, useRef, useState } from 'react';
import type { ExamAttempt, DomainScore, ShuffledQuestion } from '@/types';
import { isCorrectAnswer } from '@/lib/questions/check';
import { saveAttempt, updateQuestionAnalytics } from '@/lib/study-history';
import { generateLocalId } from '@/lib/utils';

interface UseSubmitResultsOptions {
  selectedExamId: string;
  questions: ShuffledQuestion[];
  config: { testSet: number; mode: 'full' | 'section'; selectedDomain: string };
  score: { correct: number; total: number; percentage: number };
  domainScores: Record<string, { correct: number; total: number; percentage: number }>;
  passed: boolean;
  answers: Record<number, number | number[]>;
  timeElapsed: number;
}

/**
 * Persists the exam attempt and per-question analytics exactly once on mount.
 * Returns the timestamp at which the result was first saved (used to render
 * the "submitted at" date on the results page).
 */
export function useSubmitResults(options: UseSubmitResultsOptions): number {
  const [submittedAt] = useState(() => Date.now());
  const hasSavedRef = useRef(false);

  useEffect(() => {
    if (hasSavedRef.current) return;
    hasSavedRef.current = true;

    const domainScoresArray: DomainScore[] = Object.entries(options.domainScores).map(
      ([domain, stats]) => ({
        domain,
        correct: stats.correct,
        total: stats.total,
        percentage: stats.total > 0 ? Math.round((stats.correct / stats.total) * 100) : 0,
      })
    );

    const attempt: ExamAttempt = {
      id: generateLocalId(),
      examId: options.selectedExamId,
      testSet: options.config.testSet,
      mode: options.config.mode,
      selectedDomain: options.config.selectedDomain || undefined,
      score: options.score.correct,
      totalQuestions: options.score.total,
      percentage: options.score.percentage,
      passed: options.passed,
      domainScores: domainScoresArray,
      timeElapsed: options.timeElapsed,
      completedAt: Date.now(),
      answers: options.answers,
    };

    saveAttempt(attempt);

    options.questions.forEach((q) => {
      const userAnswer = options.answers[q.id];
      updateQuestionAnalytics(q.id, options.selectedExamId, isCorrectAnswer(userAnswer, q.correctAnswer));
    });
  }, [options]);

  return submittedAt;
}
