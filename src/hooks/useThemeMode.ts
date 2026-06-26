'use client';

import { useState, useCallback, useMemo } from 'react';
import { getTheme } from '@/lib/theme';
import type { Theme } from '@/lib/theme';

export type ThemeMode = 'light' | 'dark';

const DEFAULT_THEME_MODE: ThemeMode = 'dark';

/**
 * Manages the light/dark theme mode and derives the current theme
 * styling object for the selected category.
 */
export function useThemeMode(category: string) {
  const [themeMode, setThemeMode] = useState<ThemeMode>(DEFAULT_THEME_MODE);

  const toggleThemeMode = useCallback(() => {
    setThemeMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
  }, []);

  const theme = useMemo(() => getTheme(category, themeMode), [category, themeMode]);

  return { themeMode, theme, toggleThemeMode };
}
