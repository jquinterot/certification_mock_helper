import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { TestSetCard } from './TestSetCard';
import { awsDarkTheme } from '@/lib/theme';

describe('TestSetCard', () => {
  const baseProps = {
    active: false,
    onClick: vi.fn(),
    number: 1,
    count: 40,
    theme: awsDarkTheme,
  };

  it('renders the test set number and count', () => {
    render(<TestSetCard {...baseProps} />);
    expect(screen.getByText('Test Set 1')).toBeInTheDocument();
    expect(screen.getByText('40 questions')).toBeInTheDocument();
  });

  it('uses the test set number in the data-test-id', () => {
    const { rerender } = render(<TestSetCard {...baseProps} number={2} />);
    expect(screen.getByTestId('testset-card-2')).toBeInTheDocument();
    rerender(<TestSetCard {...baseProps} number={3} />);
    expect(screen.getByTestId('testset-card-3')).toBeInTheDocument();
  });

  it('invokes onClick when clicked', () => {
    const onClick = vi.fn();
    render(<TestSetCard {...baseProps} onClick={onClick} />);
    fireEvent.click(screen.getByTestId('testset-card-1'));
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('reflects the active prop in styling', () => {
    const { container, rerender } = render(<TestSetCard {...baseProps} active={false} />);
    const inactiveClass = container.querySelector('button')?.className ?? '';
    rerender(<TestSetCard {...baseProps} active={true} />);
    const activeClass = container.querySelector('button')?.className ?? '';
    expect(inactiveClass).not.toBe(activeClass);
  });
});
