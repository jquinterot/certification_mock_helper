import { describe, it, expect } from 'vitest';
import { renderWithProviders } from '@/test/utils/render';
import { ResultsScreen } from './ResultsScreen';
import { screen } from '@testing-library/react';
import { awsDarkTheme } from '@/lib/theme';
import { makeShuffledQuestion } from '@/test/utils/factories';
import type { ShuffledQuestion } from '@/types';

const baseQuestions: ShuffledQuestion[] = [
  makeShuffledQuestion({ id: 1, domain: 'Ch 1', correctAnswer: 0, shuffledCorrectIndex: 0 }),
  makeShuffledQuestion({ id: 2, domain: 'Ch 1', correctAnswer: 0, shuffledCorrectIndex: 0 }),
  makeShuffledQuestion({ id: 3, domain: 'Ch 1', correctAnswer: 0, shuffledCorrectIndex: 0 }),
];

/**
 * Builds a minimal app-context value that makes ResultsScreen render with a
 * given exam's passing score and a given attempt percentage. Only the fields
 * ResultsScreen actually consumes are populated.
 */
function buildContext(opts: {
  passingScore: number;
  mode: 'full' | 'section';
  percentage: number;
  selectedExamId: string;
}) {
  const correct = Math.round((opts.percentage / 100) * baseQuestions.length);
  const exam = {
    score: { correct, total: baseQuestions.length, percentage: opts.percentage },
    domainScores: { 'Ch 1': { correct, total: baseQuestions.length, percentage: opts.percentage } },
    config: { mode: opts.mode, selectedDomain: '', testSet: 1 },
    flaggedCount: 0,
    answers: { 0: 0, 1: 0 },
    activeQuestions: baseQuestions,
  };
  return {
    exam,
    timer: { timer: 1234 },
    theme: awsDarkTheme,
    selectedExamId: opts.selectedExamId,
    selectedExamConfig: {
      id: opts.selectedExamId,
      name: 'Mock',
      shortName: 'Mock',
      category: 'AWS Cloud',
      description: '',
      questionCount: 3,
      durationMinutes: 60,
      passingScore: opts.passingScore,
      testSetCount: 1,
      domains: ['Ch 1'],
      icon: 'Cloud',
    },
    questions: baseQuestions,
    handleReview: () => {},
    handleReviewFlagged: () => {},
    handleReset: () => {},
    handleBackToHome: () => {},
  };
}

describe('ResultsScreen — pass/fail uses per-exam passingScore (regression for §2.6)', () => {
  it('an AWS exam (passingScore=72) FAILS at 71%', () => {
    renderWithProviders(<ResultsScreen />, {
      appContextValue: buildContext({
        passingScore: 72,
        mode: 'full',
        percentage: 71,
        selectedExamId: 'aws-ml',
      }),
    });
    expect(screen.getByTestId('results-pass-fail-badge').className).toContain('bg-red-500');
    expect(screen.getByTestId('score-percentage').textContent).toContain('71');
  });

  it('an AWS exam (passingScore=72) PASSES at 72% (boundary)', () => {
    renderWithProviders(<ResultsScreen />, {
      appContextValue: buildContext({
        passingScore: 72,
        mode: 'full',
        percentage: 72,
        selectedExamId: 'aws-ml',
      }),
    });
    expect(screen.getByTestId('results-pass-fail-badge').className).toContain('bg-green-500');
    expect(screen.getByTestId('score-percentage').textContent).toContain('72');
  });

  it('an ISTQB exam (passingScore=65) PASSES at 67% in full mode — the §2.6 regression', () => {
    // Before the fix, ResultsScreen used a flat 72% threshold for full mode,
    // so an ISTQB attempt at 67% was marked as failed even though the
    // exam's own passingScore is 65%. This test guards against re-introducing
    // the bug.
    renderWithProviders(<ResultsScreen />, {
      appContextValue: buildContext({
        passingScore: 65,
        mode: 'full',
        percentage: 67,
        selectedExamId: 'istqb-foundation',
      }),
    });
    expect(screen.getByTestId('results-pass-fail-badge').className).toContain('bg-green-500');
    expect(screen.getByTestId('score-percentage').textContent).toContain('67');
  });

  it('section mode always uses SECTION_PASSING_SCORE=65 regardless of exam', () => {
    // For an AWS exam in section mode, the threshold is still 65 (sections
    // are practice, not graded against the full-exam passingScore).
    renderWithProviders(<ResultsScreen />, {
      appContextValue: buildContext({
        passingScore: 72, // full-exam threshold is irrelevant in section mode
        mode: 'section',
        percentage: 64,
        selectedExamId: 'aws-ml',
      }),
    });
    // 64% < 65% -> fail
    expect(screen.getByTestId('results-pass-fail-badge').className).toContain('bg-red-500');

    renderWithProviders(<ResultsScreen />, {
      appContextValue: buildContext({
        passingScore: 72,
        mode: 'section',
        percentage: 65,
        selectedExamId: 'aws-ml',
      }),
    });
    // 65% == 65% -> pass (boundary)
    expect(screen.getAllByTestId('results-pass-fail-badge').some(
      (el) => el.className.includes('bg-green-500')
    )).toBe(true);
  });
});
