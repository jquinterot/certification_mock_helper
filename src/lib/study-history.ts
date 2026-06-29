'use client';

import type { ExamAttempt, ExamHistory, QuestionAnalytics, WeaknessAnalysis } from '@/types';
import { logger } from './logger';

const ATTEMPTS_KEY_PREFIX = 'exam-attempts-';
const QUESTION_ANALYTICS_KEY = 'question-analytics';
const MAX_ATTEMPTS_PER_EXAM = 10;

function getAttemptsKey(examId: string): string {
  return `${ATTEMPTS_KEY_PREFIX}${examId}`;
}

function getAllAttempts(examId: string): ExamAttempt[] {
  if (typeof window === 'undefined') return [];
  const stored = localStorage.getItem(getAttemptsKey(examId));
  if (!stored) return [];
  try {
    return JSON.parse(stored);
  } catch (error) {
    logger.warn('Failed to parse exam attempts from localStorage, returning empty', {
      examId,
      error: error instanceof Error ? error.message : String(error),
    });
    return [];
  }
}

function saveAllAttempts(examId: string, attempts: ExamAttempt[]): void {
  try {
    localStorage.setItem(getAttemptsKey(examId), JSON.stringify(attempts));
  } catch (error) {
    logger.error(
      'Failed to persist exam attempts',
      { examId, count: attempts.length },
      error instanceof Error ? error : new Error(String(error))
    );
  }
}

export function saveAttempt(attempt: ExamAttempt): void {
  const attempts = getAllAttempts(attempt.examId);
  attempts.unshift(attempt);
  if (attempts.length > MAX_ATTEMPTS_PER_EXAM) {
    attempts.pop();
  }
  saveAllAttempts(attempt.examId, attempts);
}

export function getExamHistorySummary(examId: string): ExamHistory | null {
  const attempts = getAllAttempts(examId);
  if (attempts.length === 0) return null;

  const scores = attempts.map(a => a.percentage);
  const bestScore = Math.max(...scores);
  const averageScore = scores.reduce((a, b) => a + b, 0) / scores.length;
  const lastAttempt = attempts[0]?.completedAt || null;

  return {
    examId,
    attempts,
    bestScore,
    averageScore: Math.round(averageScore * 10) / 10,
    totalAttempts: attempts.length,
    lastAttempt,
  };
}

export function getWeaknessAnalysis(examId: string): WeaknessAnalysis | null {
  const attempts = getAllAttempts(examId);
  if (attempts.length === 0) return null;

  const domainStats: Record<string, { total: number; correct: number; missed: number[][] }> = {};

  attempts.forEach(attempt => {
    attempt.domainScores.forEach(ds => {
      if (!domainStats[ds.domain]) {
        domainStats[ds.domain] = { total: 0, correct: 0, missed: [] };
      }
      domainStats[ds.domain].total += ds.total;
      domainStats[ds.domain].correct += ds.correct;
    });
  });

  const weakestDomains = Object.entries(domainStats)
    .map(([domain, stats]) => ({
      domain,
      averageScore: stats.total > 0 ? Math.round((stats.correct / stats.total) * 100) : 0,
      questionCount: stats.total,
      missedQuestionIds: [] as number[],
    }))
    .sort((a, b) => a.averageScore - b.averageScore);

  const recommendedStudyOrder = weakestDomains.map(d => d.domain);

  return {
    examId,
    weakestDomains,
    recommendedStudyOrder,
  };
}

function getAllQuestionAnalytics(): Record<string, QuestionAnalytics> {
  if (typeof window === 'undefined') return {};
  const stored = localStorage.getItem(QUESTION_ANALYTICS_KEY);
  if (!stored) return {};
  try {
    return JSON.parse(stored);
  } catch (error) {
    logger.warn('Failed to parse question analytics from localStorage, returning empty', {
      error: error instanceof Error ? error.message : String(error),
    });
    return {};
  }
}

function saveAllQuestionAnalytics(analytics: Record<string, QuestionAnalytics>): void {
  try {
    localStorage.setItem(QUESTION_ANALYTICS_KEY, JSON.stringify(analytics));
  } catch (error) {
    logger.error(
      'Failed to persist question analytics',
      { count: Object.keys(analytics).length },
      error instanceof Error ? error : new Error(String(error))
    );
  }
}

export function updateQuestionAnalytics(questionId: number, examId: string, correct: boolean): void {
  const allAnalytics = getAllQuestionAnalytics();
  const key = `${examId}-${questionId}`;
  const existing = allAnalytics[key];

  const timesSeen = existing ? existing.timesSeen + 1 : 1;
  const timesCorrect = existing ? existing.timesCorrect + (correct ? 1 : 0) : (correct ? 1 : 0);
  const difficultyRatio = timesCorrect / timesSeen;

  let difficulty: 'easy' | 'medium' | 'hard';
  if (difficultyRatio < 0.4) {
    difficulty = 'hard';
  } else if (difficultyRatio <= 0.7) {
    difficulty = 'medium';
  } else {
    difficulty = 'easy';
  }

  allAnalytics[key] = {
    questionId,
    examId,
    timesSeen,
    timesCorrect,
    lastSeen: Date.now(),
    difficulty,
  };

  saveAllQuestionAnalytics(allAnalytics);
}

export function deleteAttempt(examId: string, attemptId: string): void {
  const attempts = getAllAttempts(examId);
  const filtered = attempts.filter(a => a.id !== attemptId);
  saveAllAttempts(examId, filtered);
}