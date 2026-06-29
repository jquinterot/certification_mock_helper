import { describe, it, expect, beforeEach } from 'vitest';
import {
  saveAttempt,
  getExamHistorySummary,
  getWeaknessAnalysis,
  updateQuestionAnalytics,
  deleteAttempt,
} from './study-history';
import { makeAttempt } from '@/test/utils/factories';

const examId = 'test-exam';

beforeEach(() => {
  // Each test gets a clean localStorage. setup.ts already clears between
  // tests, but we additionally clear the attempt + analytics keys here
  // because the study-history module caches nothing — it just reads
  // localStorage on every call.
  deleteAttempt(examId, '__nonexistent__'); // no-op safety
  window.localStorage.removeItem(`exam-attempts-${examId}`);
  window.localStorage.removeItem('question-analytics');
});

describe('saveAttempt', () => {
  it('stores an attempt in localStorage', () => {
    const attempt = makeAttempt({ id: 'a1', examId });
    saveAttempt(attempt);
    const summary = getExamHistorySummary(examId);
    expect(summary?.totalAttempts).toBe(1);
    expect(summary?.attempts[0].id).toBe('a1');
  });

  it('caps history at 10 attempts (oldest dropped)', () => {
    for (let i = 0; i < 12; i++) {
      saveAttempt(makeAttempt({ id: `a${i}`, examId, percentage: i * 5 }));
    }
    const summary = getExamHistorySummary(examId);
    expect(summary?.totalAttempts).toBe(10);
    // Newest first; the oldest two (a0, a1) are dropped.
    expect(summary?.attempts[0].id).toBe('a11');
    expect(summary?.attempts.find((a) => a.id === 'a0')).toBeUndefined();
    expect(summary?.attempts.find((a) => a.id === 'a1')).toBeUndefined();
  });

  it('returns null summary for an unknown exam', () => {
    expect(getExamHistorySummary('unknown-exam')).toBeNull();
  });
});

describe('getExamHistorySummary', () => {
  it('computes best, average, total, lastAttempt', () => {
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
    expect(getWeaknessAnalysis(examId)).toBeNull();
  });

  it('returns domains sorted by lowest average score first', () => {
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

describe('updateQuestionAnalytics', () => {
  it('classifies difficulty based on correct ratio', () => {
    // 0% -> hard
    updateQuestionAnalytics(2, examId, false);
    // Verify by reading the localStorage blob directly — the public
    // getQuestionAnalytics helper was removed when getMostMissedQuestions
    // and friends were deleted as dead code. The internal analytics store
    // is the only state that updateQuestionAnalytics touches.
    const blob = JSON.parse(
      window.localStorage.getItem('question-analytics') || '{}'
    );
    expect(blob[`${examId}-2`].difficulty).toBe('hard');

    // ~50% -> medium
    updateQuestionAnalytics(3, examId, true);
    updateQuestionAnalytics(3, examId, false);
    const blob2 = JSON.parse(
      window.localStorage.getItem('question-analytics') || '{}'
    );
    expect(blob2[`${examId}-3`].difficulty).toBe('medium');

    // 100% -> easy
    updateQuestionAnalytics(4, examId, true);
    const blob3 = JSON.parse(
      window.localStorage.getItem('question-analytics') || '{}'
    );
    expect(blob3[`${examId}-4`].difficulty).toBe('easy');
  });

  it('increments timesSeen and timesCorrect on each update', () => {
    updateQuestionAnalytics(1, examId, true);
    updateQuestionAnalytics(1, examId, false);
    const blob = JSON.parse(
      window.localStorage.getItem('question-analytics') || '{}'
    );
    expect(blob[`${examId}-1`].timesSeen).toBe(2);
    expect(blob[`${examId}-1`].timesCorrect).toBe(1);
  });
});

describe('deleteAttempt', () => {
  it('removes the matching attempt', () => {
    saveAttempt(makeAttempt({ id: 'keep', examId }));
    saveAttempt(makeAttempt({ id: 'remove', examId }));
    deleteAttempt(examId, 'remove');
    const summary = getExamHistorySummary(examId);
    expect(summary?.attempts.map((a) => a.id)).toEqual(['keep']);
  });
});
