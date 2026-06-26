'use client';

import { Sun, Moon } from 'lucide-react';
import { useApp } from '@/contexts/AppContext';
import type { Theme } from '@/lib/theme';

interface ThemeToggleProps {
  theme: Theme;
  size?: 'sm' | 'md';
  label?: 'short' | 'long';
}

/**
 * Standard theme toggle button. The current theme value comes from the App
 * context; consumers only need to pass the `Theme` to get the right styling.
 */
export function ThemeToggle({ theme, size = 'md', label = 'short' }: ThemeToggleProps) {
  const { themeMode, toggleThemeMode } = useApp();
  const isDark = themeMode === 'dark';
  const sizeClass = size === 'sm' ? 'px-3 py-2 text-xs' : 'px-4 py-2 text-sm';
  const longLabel = isDark ? 'Light Mode' : 'Dark Mode';
  const shortLabel = isDark ? 'Light' : 'Dark';
  const displayLabel = label === 'long' ? longLabel : shortLabel;

  return (
    <button
      onClick={toggleThemeMode}
      className={`flex items-center gap-2 ${sizeClass} rounded-lg ${theme.bgCard} ${theme.borderColor} border transition-all hover:scale-105`}
      data-test-id="theme-toggle"
    >
      {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
      <span className="font-medium">{displayLabel}</span>
    </button>
  );
}
