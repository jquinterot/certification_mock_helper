import { describe, it, expect } from 'vitest';
import {
  formatTime,
  formatRemainingTime,
  formatDate,
  formatLongDate,
  getDomainScores,
  getActiveQuestions,
  generateLocalId,
} from './utils';
import { makeShuffledQuestion } from '@/test/utils/factories';
import type { ShuffledQuestion } from '@/types';

describe('formatTime', () => {
  it('formats 0 seconds as 00:00:00', () => {
    expect(formatTime(0)).toBe('00:00:00');
  });

  it('formats 65 seconds as 00:01:05', () => {
    expect(formatTime(65)).toBe('00:01:05');
  });

  it('formats 1 hour 23 minutes 45 seconds as 01:23:45', () => {
    expect(formatTime(3600 + 23 * 60 + 45)).toBe('01:23:45');
  });

  it('pads single-digit values', () => {
    expect(formatTime(5)).toBe('00:00:05');
    expect(formatTime(60 + 7)).toBe('00:01:07');
  });
});

describe('formatRemainingTime', () => {
  it('formats 0 seconds as 00:00', () => {
    expect(formatRemainingTime(0)).toBe('00:00');
  });

  it('formats 125 seconds as 02:05', () => {
    expect(formatRemainingTime(125)).toBe('02:05');
  });

  it('pads single-digit seconds', () => {
    expect(formatRemainingTime(65)).toBe('01:05');
  });
});

describe('formatDate', () => {
  it('returns a non-empty string for a given timestamp', () => {
    const ts = new Date('2024-06-15T14:30:00Z').getTime();
    const result = formatDate(ts);
    expect(result).toBeTruthy();
    expect(typeof result).toBe('string');
  });
});

describe('formatLongDate', () => {
  it('returns a non-empty string for a given timestamp', () => {
    const ts = new Date('2024-06-15T14:30:00Z').getTime();
    const result = formatLongDate(ts);
    expect(result).toBeTruthy();
    expect(typeof result).toBe('string');
  });
});

describe('getDomainScores', () => {
  it('returns empty object when no questions', () => {
    expect(getDomainScores([], {})).toEqual({});
  });

  it('aggregates correct and total per domain', () => {
    const questions: ShuffledQuestion[] = [
      makeShuffledQuestion({ id: 1, domain: 'Ch 1', shuffledCorrectIndex: 0 }),
      makeShuffledQuestion({ id: 2, domain: 'Ch 1', shuffledCorrectIndex: 1 }),
      makeShuffledQuestion({ id: 3, domain: 'Ch 2', shuffledCorrectIndex: 0 }),
    ];
    const answers = { 0: 0, 1: 2, 2: 1 }; // Q1 right, Q2 wrong, Q3 wrong
    const result = getDomainScores(questions, answers);
    expect(result['Ch 1']).toEqual({
      domain: 'Ch 1',
      correct: 1,
      total: 2,
      percentage: 50,
    });
    expect(result['Ch 2']).toEqual({
      domain: 'Ch 2',
      correct: 0,
      total: 1,
      percentage: 0,
    });
  });

  it('handles missing answers (no answer provided)', () => {
    const questions: ShuffledQuestion[] = [
      makeShuffledQuestion({ id: 1, domain: 'Ch 1', shuffledCorrectIndex: 0 }),
    ];
    const result = getDomainScores(questions, {});
    expect(result['Ch 1']).toEqual({
      domain: 'Ch 1',
      correct: 0,
      total: 1,
      percentage: 0,
    });
  });

  it('handles multi-response correct answers', () => {
    const questions: ShuffledQuestion[] = [
      makeShuffledQuestion({ id: 1, domain: 'Ch 1', shuffledCorrectIndex: [0, 2] }),
    ];
    const answers = { 0: [0, 2] };
    const result = getDomainScores(questions, answers);
    expect(result['Ch 1'].correct).toBe(1);
    expect(result['Ch 1'].percentage).toBe(100);
  });
});

describe('getActiveQuestions', () => {
  const questions: ShuffledQuestion[] = [
    makeShuffledQuestion({ id: 1, domain: 'Ch 1' }),
    makeShuffledQuestion({ id: 2, domain: 'Ch 2' }),
    makeShuffledQuestion({ id: 3, domain: 'Ch 1' }),
  ];

  it('returns all questions when mode is full', () => {
    expect(getActiveQuestions(questions, 'full', '')).toEqual(questions);
  });

  it('returns all questions when mode is full even with a domain', () => {
    expect(getActiveQuestions(questions, 'full', 'Ch 1')).toEqual(questions);
  });

  it('returns only matching domain when mode is section', () => {
    const result = getActiveQuestions(questions, 'section', 'Ch 1');
    expect(result).toHaveLength(2);
    expect(result.every((q) => q.domain === 'Ch 1')).toBe(true);
  });

  it('returns all when mode is section but domain is empty', () => {
    expect(getActiveQuestions(questions, 'section', '')).toEqual(questions);
  });
});

describe('generateLocalId', () => {
  it('returns a string with timestamp and random suffix', () => {
    const id = generateLocalId();
    expect(typeof id).toBe('string');
    expect(id).toMatch(/^\d+-[a-z0-9]+$/);
  });

  it('produces unique ids across calls', () => {
    const ids = new Set(Array.from({ length: 100 }, () => generateLocalId()));
    // With a random suffix, collisions in 100 ids are astronomically unlikely.
    expect(ids.size).toBeGreaterThan(95);
  });
});
