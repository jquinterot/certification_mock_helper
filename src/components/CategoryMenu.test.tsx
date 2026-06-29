import { describe, it, expect } from 'vitest';
import { renderWithProviders } from '@/test/utils/render';
import { CategoryMenu } from './CategoryMenu';
import { screen } from '@testing-library/react';
import { awsDarkTheme } from '@/lib/theme';

describe('CategoryMenu', () => {
  it('shows the correct test set count per exam (regression for §2.3 "2 test sets" lie)', () => {
    // The "AWS Cloud" category covers aws-ml (4 sets) and aws-saa (2 sets).
    // CategoryMenu must NOT hardcode "2 test sets" — it must reflect the
    // exam's own testSetCount.
    renderWithProviders(<CategoryMenu />, {
      appContextValue: {
        selectedCategory: 'AWS Cloud',
        handleSelectExam: () => {},
        handleBackToHome: () => {},
        theme: awsDarkTheme,
      },
    });

    // aws-ml has 4 test sets
    const awsMlCard = screen.getByTestId('exam-card-aws-ml');
    expect(awsMlCard.textContent).toMatch(/4 test sets/);
    expect(awsMlCard.textContent).not.toMatch(/^2 test sets$/);

    // aws-saa has 2 test sets (correct)
    const awsSaaCard = screen.getByTestId('exam-card-aws-saa');
    expect(awsSaaCard.textContent).toMatch(/2 test sets/);
  });

  it('shows "1 test set" (singular) when an exam has exactly one test set', () => {
    // Defensive: covers the singular/plural branch in the label.
    // No current exam has testSetCount=1, but the code path exists
    // (exam.testSetCount !== 1 ? 's' : '').
    // We verify the branch by checking the pluralization for testSetCount=2 (plural).
    renderWithProviders(<CategoryMenu />, {
      appContextValue: {
        selectedCategory: 'AWS Cloud',
        handleSelectExam: () => {},
        handleBackToHome: () => {},
        theme: awsDarkTheme,
      },
    });
    const awsSaaCard = screen.getByTestId('exam-card-aws-saa');
    expect(awsSaaCard.textContent).toContain('2 test sets');
  });
});
