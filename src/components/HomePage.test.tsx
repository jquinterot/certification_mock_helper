import { describe, it, expect } from 'vitest';
import { renderWithProviders } from '@/test/utils/render';
import { HomePage } from './HomePage';
import { screen } from '@testing-library/react';
import { awsDarkTheme } from '@/lib/theme';

describe('HomePage', () => {
  it('renders stats whose numbers match their labels (regression for §2.4 mislabeled stats)', () => {
    renderWithProviders(<HomePage />, {
      appContextValue: {
        handleSelectCategory: () => {},
        theme: awsDarkTheme,
      },
    });

    // There are 4 registered exams (aws-ml, aws-saa, istqb-foundation,
    // istqb-genai). "Certifications" should show 4, not the count of
    // distinct categories (2).
    const certifications = screen.getByTestId('stat-certifications');
    expect(certifications.textContent).toContain('4');
    expect(certifications.textContent).toContain('Certifications');

    // "Test Sets" should be the SUM of testSetCount across all exams:
    // aws-ml=4 + aws-saa=2 + istqb-foundation=3 + istqb-genai=3 = 12.
    // The old (buggy) implementation showed allExams.length = 4 here.
    const testSets = screen.getByTestId('stat-test-sets');
    expect(testSets.textContent).toContain('12');
    expect(testSets.textContent).toContain('Test Sets');

    // Total Questions is computed from config.questionCount and is correct.
    // aws-ml=65 + aws-saa=65 + istqb-foundation=40 + istqb-genai=40 = 210.
    const total = screen.getByTestId('stat-total-questions');
    expect(total.textContent).toContain('210');
    expect(total.textContent).toContain('Total Questions');
  });
});
