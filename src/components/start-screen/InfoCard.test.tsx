import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { InfoCard } from './InfoCard';
import { awsDarkTheme } from '@/lib/theme';

describe('InfoCard', () => {
  it('renders the title and subtitle', () => {
    render(
      <InfoCard
        icon={<span data-test-id="info-icon">!</span>}
        title="40 Questions"
        subtitle="Multiple choice format"
        theme={awsDarkTheme}
      />
    );
    expect(screen.getByText('40 Questions')).toBeInTheDocument();
    expect(screen.getByText('Multiple choice format')).toBeInTheDocument();
  });

  it('renders the provided icon', () => {
    render(
      <InfoCard
        icon={<span data-test-id="info-icon">★</span>}
        title="Title"
        subtitle="Subtitle"
        theme={awsDarkTheme}
      />
    );
    expect(screen.getByTestId('info-icon')).toBeInTheDocument();
  });

  it('renders different title and subtitle combinations', () => {
    const { rerender } = render(
      <InfoCard icon={<span>i</span>} title="A" subtitle="a" theme={awsDarkTheme} />
    );
    expect(screen.getByText('A')).toBeInTheDocument();

    rerender(
      <InfoCard icon={<span>i</span>} title="B" subtitle="b" theme={awsDarkTheme} />
    );
    expect(screen.getByText('B')).toBeInTheDocument();
    expect(screen.getByText('b')).toBeInTheDocument();
  });
});
