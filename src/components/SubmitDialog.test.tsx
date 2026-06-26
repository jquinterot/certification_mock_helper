import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { SubmitDialog } from './SubmitDialog';
import { awsDarkTheme } from '@/lib/theme';

describe('SubmitDialog', () => {
  const baseProps = {
    isOpen: true,
    answeredCount: 5,
    totalCount: 10,
    flaggedCount: 0,
    onConfirm: vi.fn(),
    onCancel: vi.fn(),
    theme: awsDarkTheme,
  };

  it('renders nothing when isOpen is false', () => {
    const { container } = render(<SubmitDialog {...baseProps} isOpen={false} />);
    expect(container.firstChild).toBeNull();
  });

  it('shows the answered/total count', () => {
    render(<SubmitDialog {...baseProps} answeredCount={8} totalCount={10} />);
    expect(screen.getByText(/You have answered 8 of 10 questions/)).toBeInTheDocument();
  });

  it('shows unanswered count (plural) when > 0', () => {
    render(<SubmitDialog {...baseProps} answeredCount={3} totalCount={10} />);
    expect(screen.getByText('7 questions unanswered')).toBeInTheDocument();
  });

  it('hides the unanswered line when all questions are answered', () => {
    render(<SubmitDialog {...baseProps} answeredCount={10} totalCount={10} />);
    expect(screen.queryByText(/unanswered/)).not.toBeInTheDocument();
  });

  it('shows the flagged count when > 0', () => {
    render(<SubmitDialog {...baseProps} flaggedCount={2} />);
    expect(screen.getByText('2 questions flagged for review')).toBeInTheDocument();
  });

  it('invokes onConfirm when the Submit button is clicked', () => {
    const onConfirm = vi.fn();
    render(<SubmitDialog {...baseProps} onConfirm={onConfirm} />);
    fireEvent.click(screen.getByTestId('submit-dialog-confirm'));
    expect(onConfirm).toHaveBeenCalledTimes(1);
  });

  it('invokes onCancel when the Cancel button is clicked', () => {
    const onCancel = vi.fn();
    render(<SubmitDialog {...baseProps} onCancel={onCancel} />);
    fireEvent.click(screen.getByTestId('submit-dialog-cancel'));
    expect(onCancel).toHaveBeenCalledTimes(1);
  });
});
