import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { ModeCard } from './ModeCard';
import { awsDarkTheme } from '@/lib/theme';

describe('ModeCard', () => {
  const baseProps = {
    active: false,
    onClick: vi.fn(),
    icon: <span data-test-id="mode-icon">⚡</span>,
    label: 'Full Exam',
    count: 40,
    theme: awsDarkTheme,
  };

  it('renders the label, count, and icon', () => {
    render(<ModeCard {...baseProps} />);
    expect(screen.getByText('Full Exam')).toBeInTheDocument();
    expect(screen.getByText('40 questions')).toBeInTheDocument();
    expect(screen.getByTestId('mode-icon')).toBeInTheDocument();
  });

  it('uses a slugified data-test-id from the label', () => {
    render(<ModeCard {...baseProps} />);
    expect(screen.getByTestId('mode-card-full-exam')).toBeInTheDocument();
  });

  it('invokes onClick when clicked', () => {
    const onClick = vi.fn();
    render(<ModeCard {...baseProps} onClick={onClick} />);
    fireEvent.click(screen.getByTestId('mode-card-full-exam'));
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('reflects the active prop in styling (className differs)', () => {
    const { container, rerender } = render(<ModeCard {...baseProps} active={false} />);
    const inactiveClass = container.querySelector('button')?.className ?? '';
    rerender(<ModeCard {...baseProps} active={true} />);
    const activeClass = container.querySelector('button')?.className ?? '';
    expect(inactiveClass).not.toBe(activeClass);
  });
});
