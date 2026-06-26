import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { QuestionNavigator } from './QuestionNavigator';
import { awsDarkTheme } from '@/lib/theme';
import { makeShuffledQuestion } from '@/test/utils/factories';
import type { ShuffledQuestion } from '@/types';

const questions: ShuffledQuestion[] = [
  makeShuffledQuestion({ id: 1, shuffledCorrectIndex: 0, shuffledOptions: ['A', 'B'] }),
  makeShuffledQuestion({ id: 2, shuffledCorrectIndex: 0, shuffledOptions: ['A', 'B'] }),
  makeShuffledQuestion({ id: 3, shuffledCorrectIndex: 0, shuffledOptions: ['A', 'B'] }),
];

const baseProps = {
  questions,
  currentQuestion: 0,
  answers: {} as Record<number, number | number[]>,
  flaggedQuestions: new Set<number>(),
  showResults: false,
  onGoToQuestion: vi.fn(),
  theme: awsDarkTheme,
};

describe('QuestionNavigator', () => {
  it('renders one button per question', () => {
    render(<QuestionNavigator {...baseProps} />);
    expect(screen.getByTestId('question-navigator-item-0')).toBeInTheDocument();
    expect(screen.getByTestId('question-navigator-item-1')).toBeInTheDocument();
    expect(screen.getByTestId('question-navigator-item-2')).toBeInTheDocument();
    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('2')).toBeInTheDocument();
    expect(screen.getByText('3')).toBeInTheDocument();
  });

  it('invokes onGoToQuestion with the clicked index', () => {
    const onGoToQuestion = vi.fn();
    render(<QuestionNavigator {...baseProps} onGoToQuestion={onGoToQuestion} />);
    fireEvent.click(screen.getByTestId('question-navigator-item-1'));
    expect(onGoToQuestion).toHaveBeenCalledWith(1);
  });

  it('highlights the current question with the theme currentQuestion class', () => {
    render(<QuestionNavigator {...baseProps} currentQuestion={1} />);
    const btn = screen.getByTestId('question-navigator-item-1');
    // awsDarkTheme.currentQuestion is 'bg-orange-500'
    expect(btn.className).toContain(awsDarkTheme.currentQuestion);
  });

  it('does not highlight non-current questions', () => {
    render(<QuestionNavigator {...baseProps} currentQuestion={1} />);
    const btn0 = screen.getByTestId('question-navigator-item-0');
    expect(btn0.className).not.toContain(awsDarkTheme.currentQuestion);
  });

  it('highlights correct answers green and incorrect red', () => {
    // Move current question off-index-0 so index 0 is no longer current
    render(
      <QuestionNavigator
        {...baseProps}
        currentQuestion={2}
        answers={{ 0: 0, 1: 1 /* wrong */, 2: 0 }}
      />
    );
    expect(screen.getByTestId('question-navigator-item-0').className).toContain('green');
    expect(screen.getByTestId('question-navigator-item-1').className).toContain('red');
  });

  it('adds a yellow ring to flagged questions', () => {
    render(
      <QuestionNavigator
        {...baseProps}
        flaggedQuestions={new Set([2])}
      />
    );
    const flagged = screen.getByTestId('question-navigator-item-2');
    expect(flagged.className).toContain('ring-yellow-400');
  });

  it('shows the legend (Current, Correct, Incorrect)', () => {
    render(<QuestionNavigator {...baseProps} />);
    expect(screen.getByText('Current')).toBeInTheDocument();
    expect(screen.getByText('Correct')).toBeInTheDocument();
    expect(screen.getByText('Incorrect')).toBeInTheDocument();
  });
});
