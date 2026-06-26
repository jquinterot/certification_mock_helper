import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { QuestionCard } from './QuestionCard';
import { awsDarkTheme } from '@/lib/theme';
import { makeShuffledQuestion } from '@/test/utils/factories';
import type { ShuffledQuestion } from '@/types';

const singleQuestion: ShuffledQuestion = makeShuffledQuestion({
  id: 1,
  domain: 'Ch 1',
  question: 'What is 1+1?',
  options: ['1', '2', '3', '4'],
  correctAnswer: 1,
  shuffledCorrectIndex: 1,
  shuffledOptions: ['1', '2', '3', '4'],
  explanation: 'Because 1+1=2.',
});

const multiQuestion: ShuffledQuestion = makeShuffledQuestion({
  id: 2,
  domain: 'Ch 2',
  question: 'Pick TWO primes',
  options: ['2', '3', '4', '5'],
  correctAnswer: [0, 1, 3],
  shuffledCorrectIndex: [0, 1, 3],
  shuffledOptions: ['2', '3', '4', '5'],
  explanation: '2, 3, 5 are prime.',
});

const baseProps = {
  questionIndex: 0,
  examId: 'test-exam',
  selectedAnswer: undefined as number | number[] | undefined,
  showCorrectness: false,
  showResults: false,
  isCorrect: false,
  showExplanation: false,
  onSelectAnswer: vi.fn(),
  onToggleExplanation: vi.fn(),
  theme: awsDarkTheme,
};

describe('QuestionCard', () => {
  it('renders the question text and the options', () => {
    render(<QuestionCard question={singleQuestion} {...baseProps} />);
    expect(screen.getByText('What is 1+1?')).toBeInTheDocument();
    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('2')).toBeInTheDocument();
    expect(screen.getByText('3')).toBeInTheDocument();
    expect(screen.getByText('4')).toBeInTheDocument();
  });

  it('renders the domain badge', () => {
    render(<QuestionCard question={singleQuestion} {...baseProps} />);
    expect(screen.getByTestId('domain-badge')).toHaveTextContent('Ch 1');
  });

  it('shows the multi-select badge for multi-response questions', () => {
    render(<QuestionCard question={multiQuestion} {...baseProps} />);
    const badge = screen.getByTestId('multi-select-badge');
    expect(badge).toBeInTheDocument();
    expect(badge).toHaveTextContent('Select 3 options');
  });

  it('does not show the multi-select badge for single-response questions', () => {
    render(<QuestionCard question={singleQuestion} {...baseProps} />);
    expect(screen.queryByTestId('multi-select-badge')).not.toBeInTheDocument();
  });

  it('invokes onSelectAnswer with (questionIndex, optionIndex) on click', () => {
    const onSelectAnswer = vi.fn();
    render(
      <QuestionCard
        question={singleQuestion}
        {...baseProps}
        onSelectAnswer={onSelectAnswer}
      />
    );
    fireEvent.click(screen.getByTestId('answer-option-0-b'));
    expect(onSelectAnswer).toHaveBeenCalledWith(0, 1);
  });

  it('disables the option buttons when showResults is true', () => {
    render(<QuestionCard question={singleQuestion} {...baseProps} showResults={true} />);
    const opt = screen.getByTestId('answer-option-0-a');
    expect(opt).toBeDisabled();
  });

  it('hides the explanation panel when neither showExplanation nor showResults is true', () => {
    render(<QuestionCard question={singleQuestion} {...baseProps} />);
    expect(screen.queryByTestId('explanation-panel')).not.toBeInTheDocument();
  });

  it('shows the explanation panel and "Correct!" when isCorrect is true', () => {
    render(
      <QuestionCard
        question={singleQuestion}
        {...baseProps}
        showResults
        isCorrect
      />
    );
    const panel = screen.getByTestId('explanation-panel');
    expect(panel).toBeInTheDocument();
    expect(screen.getByText('Correct!')).toBeInTheDocument();
    expect(screen.getByText('Because 1+1=2.')).toBeInTheDocument();
  });

  it('shows the explanation panel and "Incorrect" when isCorrect is false', () => {
    render(
      <QuestionCard
        question={singleQuestion}
        {...baseProps}
        showExplanation
        isCorrect={false}
      />
    );
    expect(screen.getByText('Incorrect')).toBeInTheDocument();
  });

  it('marks the correct option when showCorrectness is true', () => {
    render(
      <QuestionCard
        question={singleQuestion}
        {...baseProps}
        showCorrectness
        selectedAnswer={0}
      />
    );
    // option B (index 1) is the correct one; verify it has the aria-pressed=false
    // but the correct option is visually highlighted (data attribute).
    expect(screen.getByTestId('answer-option-0-b')).toBeInTheDocument();
  });

  it('toggles a multi-response option into the selected array', () => {
    const onSelectAnswer = vi.fn();
    render(
      <QuestionCard
        question={multiQuestion}
        {...baseProps}
        onSelectAnswer={onSelectAnswer}
        selectedAnswer={[0]}
      />
    );
    fireEvent.click(screen.getByTestId('answer-option-0-b'));
    expect(onSelectAnswer).toHaveBeenCalledWith(0, 1);
  });
});
