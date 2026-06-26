import type { ShuffledQuestion, DomainScore } from '@/types';
import { checkAnswer } from './questions/shuffle';

export const formatTime = (seconds: number): string => {
  const hours = Math.floor(seconds / 3600);
  const mins = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;
  return `${hours.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
};

export const formatRemainingTime = (seconds: number): string => {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
};

export const formatDate = (timestamp: number): string => {
  return new Date(timestamp).toLocaleString('en-US', {
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
};

export const formatLongDate = (timestamp: number): string => {
  return new Date(timestamp).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
};

export const getDomainScores = (
  questions: ShuffledQuestion[],
  answers: Record<number, number | number[]>
): Record<string, DomainScore> => {
  const domainStats: Record<string, { correct: number; total: number }> = {};
  questions.forEach((q, idx) => {
    if (!domainStats[q.domain]) {
      domainStats[q.domain] = { correct: 0, total: 0 };
    }
    domainStats[q.domain].total++;
    if (checkAnswer(q, answers[idx])) {
      domainStats[q.domain].correct++;
    }
  });

  const result: Record<string, DomainScore> = {};
  for (const [domain, stats] of Object.entries(domainStats)) {
    result[domain] = {
      domain,
      correct: stats.correct,
      total: stats.total,
      percentage: stats.total > 0 ? Math.round((stats.correct / stats.total) * 100) : 0,
    };
  }
  return result;
};

export const getActiveQuestions = (
  questions: ShuffledQuestion[],
  mode: 'full' | 'section',
  selectedDomain: string
): ShuffledQuestion[] => {
  if (mode === 'section' && selectedDomain) {
    return questions.filter((q) => q.domain === selectedDomain);
  }
  return questions;
};

/**
 * Generates a short, unique-enough ID for local persistence (saved tests,
 * exam attempts). Combines a timestamp with a random base-36 suffix to
 * avoid collisions when multiple records are created in the same millisecond.
 */
export function generateLocalId(): string {
  return `${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
}
