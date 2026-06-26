import { describe, it, expect } from 'vitest';
import { shuffleQuestions, checkAnswer } from './shuffle';
import { makeQuestion } from '@/test/utils/factories';
import type { ExamQuestion } from '@/types';

const sampleQuestions: ExamQuestion[] = [
  makeQuestion({ id: 1, options: ['A', 'B', 'C', 'D'], correctAnswer: 0 }),
  makeQuestion({ id: 2, options: ['W', 'X', 'Y', 'Z'], correctAnswer: 2 }),
  makeQuestion({ id: 3, options: ['P', 'Q', 'R'], correctAnswer: 1 }),
];

describe('shuffleQuestions', () => {
  it('returns one ShuffledQuestion per input', () => {
    const result = shuffleQuestions(sampleQuestions, 42);
    expect(result).toHaveLength(sampleQuestions.length);
    result.forEach((q) => {
      expect(q).toHaveProperty('shuffledOptions');
      expect(q).toHaveProperty('shuffledCorrectIndex');
    });
  });

  it('preserves the original option text (rearranged)', () => {
    const result = shuffleQuestions(sampleQuestions, 42);
    result.forEach((shuffled, idx) => {
      const original = sampleQuestions[idx].options;
      expect([...shuffled.shuffledOptions].sort()).toEqual([...original].sort());
    });
  });

  it('produces a deterministic order for the same seed', () => {
    const a = shuffleQuestions(sampleQuestions, 12345);
    const b = shuffleQuestions(sampleQuestions, 12345);
    expect(a.map((q) => q.shuffledOptions)).toEqual(b.map((q) => q.shuffledOptions));
  });

  it('produces different orders for different seeds', () => {
    const a = shuffleQuestions(sampleQuestions, 1);
    const b = shuffleQuestions(sampleQuestions, 2);
    const same = a.every((q, i) =>
      JSON.stringify(q.shuffledOptions) === JSON.stringify(b[i].shuffledOptions)
    );
    expect(same).toBe(false);
  });

  it('keeps shuffledCorrectIndex pointing to the original correct option', () => {
    const result = shuffleQuestions(sampleQuestions, 42);
    result.forEach((shuffled, idx) => {
      const original = sampleQuestions[idx];
      const correctText = original.options[original.correctAnswer as number];
      const shuffledText = shuffled.shuffledOptions[shuffled.shuffledCorrectIndex as number];
      expect(shuffledText).toBe(correctText);
    });
  });

  it('handles multi-response (correctAnswers array)', () => {
    const multi: ExamQuestion[] = [
      makeQuestion({
        id: 99,
        options: ['A', 'B', 'C', 'D'],
        correctAnswer: 0,
        correctAnswers: [0, 2],
      }),
    ];
    const [result] = shuffleQuestions(multi, 7);
    expect(Array.isArray(result.shuffledCorrectIndex)).toBe(true);
    const correctSet = (result.shuffledCorrectIndex as number[]).map(
      (i) => result.shuffledOptions[i]
    );
    expect(correctSet.sort()).toEqual(['A', 'C']);
  });
});

describe('checkAnswer', () => {
  it('returns true when the selected option matches the correct one', () => {
    const shuffled = shuffleQuestions(sampleQuestions, 42);
    const q = shuffled[0];
    const correctIdx = q.shuffledCorrectIndex as number;
    expect(checkAnswer(q, correctIdx)).toBe(true);
  });

  it('returns false when the selected option is wrong', () => {
    const shuffled = shuffleQuestions(sampleQuestions, 42);
    const q = shuffled[0];
    const correctIdx = q.shuffledCorrectIndex as number;
    const wrongIdx = (correctIdx + 1) % q.shuffledOptions.length;
    expect(checkAnswer(q, wrongIdx)).toBe(false);
  });

  it('handles multi-response correctly', () => {
    const multi: ExamQuestion[] = [
      makeQuestion({
        id: 99,
        options: ['A', 'B', 'C', 'D'],
        correctAnswer: 0,
        correctAnswers: [0, 2],
      }),
    ];
    const [q] = shuffleQuestions(multi, 1);
    const correctSet = q.shuffledCorrectIndex as number[];
    expect(checkAnswer(q, [...correctSet].sort((a, b) => a - b))).toBe(true);
    expect(checkAnswer(q, [correctSet[0]])).toBe(false);
  });
});
