import type { ShuffledQuestion, DomainScore } from '@/types';
import { checkAnswer } from './questions/shuffle';

export const formatTime = (seconds: number): string => {
  const hours = Math.floor(seconds / 3600);
  const mins = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;
  return `${hours.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
};

export const formatDate = (timestamp: number): string => {
  return new Date(timestamp).toLocaleString('en-US', {
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
};

export const isCorrectAnswer = (
  answer: number | number[] | undefined,
  correctAnswer: number | number[]
): boolean => {
  if (Array.isArray(correctAnswer)) {
    if (!Array.isArray(answer)) return false;
    if (correctAnswer.length !== answer.length) return false;
    return correctAnswer.every((c) => answer.includes(c));
  }
  return answer === correctAnswer;
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
