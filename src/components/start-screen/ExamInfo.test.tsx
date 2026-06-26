import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ExamInfo } from './ExamInfo';
import { awsDarkTheme } from '@/lib/theme';

describe('ExamInfo', () => {
  it('renders the three info cards with the provided values', () => {
    render(
      <ExamInfo
        currentQuestionCount={40}
        estimatedTime={60}
        passingScore={65}
        theme={awsDarkTheme}
      />
    );
    expect(screen.getByText('40 Questions')).toBeInTheDocument();
    expect(screen.getByText('60 Minutes')).toBeInTheDocument();
    expect(screen.getByText('Passing Score: 65')).toBeInTheDocument();
  });

  it('reflects different prop values in the rendered output', () => {
    render(
      <ExamInfo
        currentQuestionCount={20}
        estimatedTime={30}
        passingScore={72}
        theme={awsDarkTheme}
      />
    );
    expect(screen.getByText('20 Questions')).toBeInTheDocument();
    expect(screen.getByText('30 Minutes')).toBeInTheDocument();
    expect(screen.getByText('Passing Score: 72')).toBeInTheDocument();
  });

  it('renders the fixed subtitle copy for each card', () => {
    render(
      <ExamInfo
        currentQuestionCount={40}
        estimatedTime={60}
        passingScore={65}
        theme={awsDarkTheme}
      />
    );
    expect(screen.getByText('Multiple choice format')).toBeInTheDocument();
    expect(screen.getByText('Timed practice exam')).toBeInTheDocument();
    expect(screen.getByText('Results shown immediately')).toBeInTheDocument();
  });
});
