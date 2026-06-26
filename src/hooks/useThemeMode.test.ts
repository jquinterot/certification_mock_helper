import { describe, it, expect } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useThemeMode } from './useThemeMode';
import { awsDarkTheme, awsLightTheme, istqbDarkTheme, istqbLightTheme } from '@/lib/theme';

describe('useThemeMode', () => {
  it('defaults to dark mode', () => {
    const { result } = renderHook(() => useThemeMode('AWS'));
    expect(result.current.themeMode).toBe('dark');
  });

  it('returns the dark theme object for AWS by default', () => {
    const { result } = renderHook(() => useThemeMode('AWS'));
    expect(result.current.theme).toBe(awsDarkTheme);
  });

  it('toggles between dark and light mode', () => {
    const { result } = renderHook(() => useThemeMode('AWS'));
    expect(result.current.themeMode).toBe('dark');
    act(() => result.current.toggleThemeMode());
    expect(result.current.themeMode).toBe('light');
    expect(result.current.theme).toBe(awsLightTheme);
    act(() => result.current.toggleThemeMode());
    expect(result.current.themeMode).toBe('dark');
  });

  it('returns the ISTQB theme when category is ISTQB', () => {
    const { result } = renderHook(() => useThemeMode('ISTQB Testing'));
    expect(result.current.theme).toBe(istqbDarkTheme);
    act(() => result.current.toggleThemeMode());
    expect(result.current.theme).toBe(istqbLightTheme);
  });
});
