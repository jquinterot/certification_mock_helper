import { describe, it, expect } from 'vitest';
import {
  STORAGE_KEY,
  PASSING_SCORE,
  PASSING_THRESHOLD,
  TOTAL_EXAM_TIME,
  QUESTIONS_PER_MINUTE,
} from './constants';

describe('constants', () => {
  it('STORAGE_KEY is a non-empty string', () => {
    expect(typeof STORAGE_KEY).toBe('string');
    expect(STORAGE_KEY.length).toBeGreaterThan(0);
  });

  it('PASSING_SCORE is 72 (ISTQB Foundation threshold)', () => {
    expect(PASSING_SCORE).toBe(72);
  });

  it('PASSING_THRESHOLD is 10 * PASSING_SCORE', () => {
    expect(PASSING_THRESHOLD).toBe(PASSING_SCORE * 10);
  });

  it('TOTAL_EXAM_TIME and QUESTIONS_PER_MINUTE are positive', () => {
    expect(TOTAL_EXAM_TIME).toBeGreaterThan(0);
    expect(QUESTIONS_PER_MINUTE).toBeGreaterThan(0);
  });
});
