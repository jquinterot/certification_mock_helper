import { describe, it, expect, vi, afterEach } from 'vitest';
import { calculateExamDuration, generateSessionSeed } from './exam-duration';

afterEach(() => {
  vi.restoreAllMocks();
});

describe('calculateExamDuration', () => {
  it('returns the full duration in seconds for full mode', () => {
    expect(calculateExamDuration('full', 60, 40, 40)).toBe(3600);
  });

  it('scales the duration proportionally for section mode', () => {
    // 60-minute exam, 40 questions, taking 10 questions
    // proportional = (3600 * 10) / 40 = 900
    expect(calculateExamDuration('section', 60, 40, 10)).toBe(900);
  });

  it('enforces a 15-minute minimum in section mode', () => {
    // 60-minute exam, 40 questions, only 1 question
    // proportional = 90s, but min is 15 * 60 = 900
    expect(calculateExamDuration('section', 60, 40, 1)).toBe(900);
  });

  it('returns full duration when totalQuestions is 0 even in section mode', () => {
    expect(calculateExamDuration('section', 60, 0, 0)).toBe(3600);
  });

  it('rounds the proportional value', () => {
    // 60-minute exam, 7 questions, 1 question
    // proportional = (3600 * 1) / 7 = 514.28... -> 514 (below 900 minimum)
    expect(calculateExamDuration('section', 60, 7, 1)).toBe(900);
  });
});

describe('generateSessionSeed', () => {
  it('returns a non-negative integer below 1,000,000', () => {
    for (let i = 0; i < 50; i++) {
      const seed = generateSessionSeed();
      expect(Number.isInteger(seed)).toBe(true);
      expect(seed).toBeGreaterThanOrEqual(0);
      expect(seed).toBeLessThan(1_000_000);
    }
  });
});
