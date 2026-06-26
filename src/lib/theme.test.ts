import { describe, it, expect } from 'vitest';
import { getTheme, awsDarkTheme, awsLightTheme, istqbDarkTheme, istqbLightTheme } from './theme';

describe('getTheme', () => {
  it('returns the AWS dark theme by default (no mode passed)', () => {
    expect(getTheme('AWS')).toBe(awsDarkTheme);
  });

  it('returns the AWS dark theme when category is not ISTQB', () => {
    expect(getTheme('AWS', 'dark')).toBe(awsDarkTheme);
    expect(getTheme('AWS', 'light')).toBe(awsLightTheme);
  });

  it('returns the ISTQB dark/light theme for ISTQB category', () => {
    expect(getTheme('ISTQB Testing', 'dark')).toBe(istqbDarkTheme);
    expect(getTheme('ISTQB Testing', 'light')).toBe(istqbLightTheme);
  });

  it('falls back to AWS theme for any non-ISTQB category', () => {
    expect(getTheme('Other', 'dark')).toBe(awsDarkTheme);
    expect(getTheme('Other', 'light')).toBe(awsLightTheme);
  });

  it('dark and light themes have distinct surface colors', () => {
    expect(awsDarkTheme.bgCard).not.toBe(awsLightTheme.bgCard);
    expect(istqbDarkTheme.bgCard).not.toBe(istqbLightTheme.bgCard);
    expect(awsDarkTheme.bgText).not.toBe(awsLightTheme.bgText);
  });

  it('dark and light themes share the same primary', () => {
    expect(awsDarkTheme.primary).toBe(awsLightTheme.primary);
    expect(istqbDarkTheme.primary).toBe(istqbLightTheme.primary);
  });
});
