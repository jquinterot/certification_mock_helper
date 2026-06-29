'use client';

import { useEffect, useRef, useState } from 'react';
import type { ExamAttempt, DomainScore, ShuffledQuestion } from '@/types';
import { checkAnswer } from '@/lib/questions/shuffle';
import { saveAttempt, updateQuestionAnalytics } from '@/lib/study-history';
import { generateLocalId } from '@/lib/utils';
import { logger } from '@/lib/logger';

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

    // answers is keyed by question INDEX (position in the active list),
    // not by question id, and the shuffled question's correctness lives in
    // `shuffledCorrectIndex` (post-shuffle option positions), not
    // `correctAnswer` (pre-shuffle). Use the high-level `checkAnswer` so
    // both single- and multi-response questions are evaluated correctly.
    options.questions.forEach((q, idx) => {
      const userAnswer = options.answers[idx];
      const correct = checkAnswer(q, userAnswer);
      updateQuestionAnalytics(q.id, options.selectedExamId, correct);
    });

    logger.info('Exam submitted', {
      examId: options.selectedExamId,
      testSet: options.config.testSet,
      mode: options.config.mode,
      score: options.score.correct,
      totalQuestions: options.score.total,
      percentage: options.score.percentage,
      passed: options.passed,
      timeElapsed: options.timeElapsed,
    });
  }, [options]);

  return submittedAt;
}
