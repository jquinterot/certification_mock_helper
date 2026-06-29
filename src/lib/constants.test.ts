import { describe, it, expect } from 'vitest';
import {
  STORAGE_KEY,
  PASSING_SCORE,
  SECTION_PASSING_SCORE,
  DOMAIN_MASTERY_THRESHOLD,
  getPassingScore,
} from './constants';

describe('constants', () => {
  it('STORAGE_KEY is a non-empty string', () => {
    expect(typeof STORAGE_KEY).toBe('string');
    expect(STORAGE_KEY.length).toBeGreaterThan(0);
  });

  it('PASSING_SCORE is 72 (the historical default used by AWS exams)', () => {
    expect(PASSING_SCORE).toBe(72);
  });

  it('SECTION_PASSING_SCORE is 65 (section-mode threshold across all exams)', () => {
    expect(SECTION_PASSING_SCORE).toBe(65);
  });

  it('DOMAIN_MASTERY_THRESHOLD is 70 (domain-bar color cutoff in history)', () => {
    expect(DOMAIN_MASTERY_THRESHOLD).toBe(70);
  });
});

describe('getPassingScore', () => {
  it('returns the exam config passing score for full mode', () => {
    expect(getPassingScore(72, 'full')).toBe(72);
    expect(getPassingScore(65, 'full')).toBe(65);
  });

  it('returns SECTION_PASSING_SCORE for section mode regardless of exam', () => {
    expect(getPassingScore(72, 'section')).toBe(65);
    expect(getPassingScore(65, 'section')).toBe(65);
  });

  it('is the single source of truth for pass/fail — ISTQB (65) and AWS (72) full-mode pass lines differ', () => {
    // This is the regression test for the §2.6 bug: an ISTQB exam with
    // passingScore 65 was being graded against a flat 72% threshold on the
    // results screen. getPassingScore now returns the exam's own value.
    expect(getPassingScore(65, 'full')).not.toBe(getPassingScore(72, 'full'));
  });
});
