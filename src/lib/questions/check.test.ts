import { describe, it, expect } from 'vitest';
import { isCorrectAnswer } from './check';

describe('isCorrectAnswer', () => {
  describe('single-response', () => {
    it('returns true when answer matches correctAnswer', () => {
      expect(isCorrectAnswer(2, 2)).toBe(true);
    });

    it('returns false when answer does not match', () => {
      expect(isCorrectAnswer(1, 2)).toBe(false);
    });

    it('returns false when answer is undefined', () => {
      expect(isCorrectAnswer(undefined, 2)).toBe(false);
    });
  });

  describe('multi-response', () => {
    it('returns true when arrays contain the same elements in any order', () => {
      expect(isCorrectAnswer([2, 0, 3], [0, 2, 3])).toBe(true);
    });

    it('returns false when arrays have different lengths', () => {
      expect(isCorrectAnswer([0, 2], [0, 2, 3])).toBe(false);
      expect(isCorrectAnswer([0, 2, 3, 4], [0, 2, 3])).toBe(false);
    });

    it('returns false when arrays have the same length but different elements', () => {
      expect(isCorrectAnswer([0, 1, 3], [0, 2, 3])).toBe(false);
    });

    it('returns false when answer is not an array but correctAnswer is', () => {
      expect(isCorrectAnswer(2, [0, 2])).toBe(false);
    });

    it('returns false when answer is an array but correctAnswer is a number', () => {
      expect(isCorrectAnswer([2], 2)).toBe(false);
    });

    it('returns true for empty correctAnswer and empty answer', () => {
      expect(isCorrectAnswer([], [])).toBe(true);
    });
  });
});
