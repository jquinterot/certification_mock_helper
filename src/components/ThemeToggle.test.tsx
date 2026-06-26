import { describe, it, expect, vi } from 'vitest';
import { screen, fireEvent } from '@testing-library/react';
import { ThemeToggle } from './ThemeToggle';
import { awsDarkTheme, awsLightTheme } from '@/lib/theme';
import { renderWithProviders } from '@/test/utils/render';

describe('ThemeToggle', () => {
  it('shows "Light" label and Sun icon when in dark mode', () => {
    renderWithProviders(<ThemeToggle theme={awsDarkTheme} />, {
      appContextValue: { themeMode: 'dark', toggleThemeMode: vi.fn() },
    });
    expect(screen.getByText('Light')).toBeInTheDocument();
  });

  it('shows "Dark" label and Moon icon when in light mode', () => {
    renderWithProviders(<ThemeToggle theme={awsLightTheme} />, {
      appContextValue: { themeMode: 'light', toggleThemeMode: vi.fn() },
    });
    expect(screen.getByText('Dark')).toBeInTheDocument();
  });

  it('uses the long label when label="long"', () => {
    renderWithProviders(<ThemeToggle theme={awsDarkTheme} label="long" />, {
      appContextValue: { themeMode: 'dark', toggleThemeMode: vi.fn() },
    });
    expect(screen.getByText('Light Mode')).toBeInTheDocument();
  });

  it('invokes toggleThemeMode on click', () => {
    const toggleThemeMode = vi.fn();
    renderWithProviders(<ThemeToggle theme={awsDarkTheme} />, {
      appContextValue: { themeMode: 'dark', toggleThemeMode },
    });
    fireEvent.click(screen.getByTestId('theme-toggle'));
    expect(toggleThemeMode).toHaveBeenCalledTimes(1);
  });
});
