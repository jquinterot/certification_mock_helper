import { describe, it, expect } from 'vitest';
import {
  saveAttempt,
  getExamHistory,
  getExamHistorySummary,
  getWeaknessAnalysis,
  getQuestionAnalytics,
  updateQuestionAnalytics,
  getAllQuestionAnalyticsForExam,
  getMostMissedQuestions,
  deleteAttempt,
  clearExamHistory,
} from './study-history';
import { makeAttempt } from '@/test/utils/factories';

const examId = 'test-exam';

describe('saveAttempt and getExamHistory', () => {
  it('stores an attempt in localStorage', () => {
    const attempt = makeAttempt({ id: 'a1', examId });
    saveAttempt(attempt);
    expect(getExamHistory(examId)).toHaveLength(1);
    expect(getExamHistory(examId)[0].id).toBe('a1');
  });

  it('caps history at 10 attempts (oldest dropped)', () => {
    clearExamHistory(examId);
    for (let i = 0; i < 12; i++) {
      saveAttempt(makeAttempt({ id: `a${i}`, examId, percentage: i * 5 }));
    }
    const history = getExamHistory(examId);
    expect(history).toHaveLength(10);
    // The newest (a11, a10, ..., a2) survive; the oldest (a0, a1) are dropped.
    expect(history[0].id).toBe('a11');
    expect(history.find((a) => a.id === 'a0')).toBeUndefined();
    expect(history.find((a) => a.id === 'a1')).toBeUndefined();
  });

  it('returns empty array when no history', () => {
    clearExamHistory('unknown-exam');
    expect(getExamHistory('unknown-exam')).toEqual([]);
  });
});

describe('getExamHistorySummary', () => {
  it('returns null when there are no attempts', () => {
    clearExamHistory(examId);
    expect(getExamHistorySummary(examId)).toBeNull();
  });

  it('computes best, average, total, lastAttempt', () => {
    clearExamHistory(examId);
    saveAttempt(makeAttempt({ id: '1', examId, percentage: 60, completedAt: 1000 }));
    saveAttempt(makeAttempt({ id: '2', examId, percentage: 80, completedAt: 2000 }));
    saveAttempt(makeAttempt({ id: '3', examId, percentage: 100, completedAt: 3000 }));

    const summary = getExamHistorySummary(examId);
    expect(summary).not.toBeNull();
    expect(summary?.bestScore).toBe(100);
    expect(summary?.averageScore).toBe(80); // (60+80+100)/3 = 80
    expect(summary?.totalAttempts).toBe(3);
    expect(summary?.lastAttempt).toBe(3000);
  });
});

describe('getWeaknessAnalysis', () => {
  it('returns null when no attempts', () => {
    clearExamHistory(examId);
    expect(getWeaknessAnalysis(examId)).toBeNull();
  });

  it('returns domains sorted by lowest average score first', () => {
    clearExamHistory(examId);
    saveAttempt(
      makeAttempt({
        examId,
        domainScores: [
          { domain: 'Strong', correct: 9, total: 10, percentage: 90 },
          { domain: 'Weak', correct: 2, total: 10, percentage: 20 },
        ],
      })
    );
    const analysis = getWeaknessAnalysis(examId);
    expect(analysis?.weakestDomains[0].domain).toBe('Weak');
    expect(analysis?.recommendedStudyOrder[0]).toBe('Weak');
  });
});

describe('updateQuestionAnalytics and getQuestionAnalytics', () => {
  it('creates a new analytics entry on first sight', () => {
    updateQuestionAnalytics(1, examId, true);
    const a = getQuestionAnalytics(1, examId);
    expect(a).toEqual({
      questionId: 1,
      examId,
      timesSeen: 1,
      timesCorrect: 1,
      lastSeen: expect.any(Number),
      difficulty: 'easy',
    });
  });

  it('increments timesSeen and timesCorrect on each update', () => {
    updateQuestionAnalytics(1, examId, true);
    updateQuestionAnalytics(1, examId, false);
    const a = getQuestionAnalytics(1, examId);
    expect(a?.timesSeen).toBe(2);
    expect(a?.timesCorrect).toBe(1);
  });

  it('classifies difficulty based on correct ratio', () => {
    // 0% -> hard
    updateQuestionAnalytics(2, examId, false);
    expect(getQuestionAnalytics(2, examId)?.difficulty).toBe('hard');
    // ~50% -> medium
    updateQuestionAnalytics(3, examId, true);
    updateQuestionAnalytics(3, examId, false);
    expect(getQuestionAnalytics(3, examId)?.difficulty).toBe('medium');
    // 100% -> easy
    updateQuestionAnalytics(4, examId, true);
    expect(getQuestionAnalytics(4, examId)?.difficulty).toBe('easy');
  });
});

describe('getMostMissedQuestions', () => {
  it('returns only questions seen at least twice', () => {
    updateQuestionAnalytics(1, examId, false);
    expect(getMostMissedQuestions(examId)).toEqual([]);

    updateQuestionAnalytics(1, examId, false);
    updateQuestionAnalytics(2, examId, false);
    const missed = getMostMissedQuestions(examId);
    expect(missed.length).toBeGreaterThan(0);
  });

  it('sorts by worst (lowest) correct ratio first', () => {
    updateQuestionAnalytics(10, examId, true);
    updateQuestionAnalytics(10, examId, true);
    updateQuestionAnalytics(11, examId, false);
    updateQuestionAnalytics(11, examId, false);
    const missed = getMostMissedQuestions(examId);
    expect(missed[0].questionId).toBe(11);
  });

  it('respects the limit', () => {
    for (let i = 100; i < 110; i++) {
      updateQuestionAnalytics(i, examId, false);
      updateQuestionAnalytics(i, examId, false);
    }
    expect(getMostMissedQuestions(examId, 3)).toHaveLength(3);
  });
});

describe('deleteAttempt', () => {
  it('removes the matching attempt', () => {
    clearExamHistory(examId);
    saveAttempt(makeAttempt({ id: 'keep', examId }));
    saveAttempt(makeAttempt({ id: 'remove', examId }));
    deleteAttempt(examId, 'remove');
    const history = getExamHistory(examId);
    expect(history.map((a) => a.id)).toEqual(['keep']);
  });
});

describe('getAllQuestionAnalyticsForExam', () => {
  it('returns only analytics for the given exam', () => {
    updateQuestionAnalytics(1, examId, true);
    updateQuestionAnalytics(2, 'other-exam', true);
    expect(getAllQuestionAnalyticsForExam(examId)).toHaveLength(1);
    expect(getAllQuestionAnalyticsForExam('other-exam')).toHaveLength(1);
  });
});
