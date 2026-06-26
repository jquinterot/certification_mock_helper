import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { ExitDialog } from './ExitDialog';
import { awsDarkTheme } from '@/lib/theme';

describe('ExitDialog', () => {
  const baseProps = {
    isOpen: true,
    answeredCount: 5,
    totalCount: 10,
    flaggedCount: 0,
    onSave: vi.fn(),
    onLeave: vi.fn(),
    onCancel: vi.fn(),
    theme: awsDarkTheme,
  };

  it('renders nothing when isOpen is false', () => {
    const { container } = render(<ExitDialog {...baseProps} isOpen={false} />);
    expect(container.firstChild).toBeNull();
  });

  it('shows the answered/total count', () => {
    render(<ExitDialog {...baseProps} answeredCount={3} totalCount={12} />);
    expect(screen.getByText(/You have answered 3 of 12 questions/)).toBeInTheDocument();
  });

  it('shows the flagged count when > 0 (plural)', () => {
    render(<ExitDialog {...baseProps} flaggedCount={2} />);
    expect(screen.getByText('2 questions flagged for review')).toBeInTheDocument();
  });

  it('uses singular "question" when flaggedCount is 1', () => {
    render(<ExitDialog {...baseProps} flaggedCount={1} />);
    expect(screen.getByText('1 question flagged for review')).toBeInTheDocument();
  });

  it('hides the flagged line when flaggedCount is 0', () => {
    render(<ExitDialog {...baseProps} flaggedCount={0} />);
    expect(screen.queryByText(/flagged for review/)).not.toBeInTheDocument();
  });

  it('invokes onSave when the Save & Exit button is clicked', () => {
    const onSave = vi.fn();
    render(<ExitDialog {...baseProps} onSave={onSave} />);
    fireEvent.click(screen.getByTestId('exit-dialog-save'));
    expect(onSave).toHaveBeenCalledTimes(1);
  });

  it('invokes onLeave when the Leave button is clicked', () => {
    const onLeave = vi.fn();
    render(<ExitDialog {...baseProps} onLeave={onLeave} />);
    fireEvent.click(screen.getByTestId('exit-dialog-leave'));
    expect(onLeave).toHaveBeenCalledTimes(1);
  });

  it('invokes onCancel when the Cancel button is clicked', () => {
    const onCancel = vi.fn();
    render(<ExitDialog {...baseProps} onCancel={onCancel} />);
    fireEvent.click(screen.getByTestId('exit-dialog-cancel'));
    expect(onCancel).toHaveBeenCalledTimes(1);
  });
});
