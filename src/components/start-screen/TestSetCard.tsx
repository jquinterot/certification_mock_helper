'use client';

import { FileText } from 'lucide-react';
import type { Theme } from '@/lib/theme';

interface TestSetCardProps {
  active: boolean;
  onClick: () => void;
  number: number;
  count: number;
  theme: Theme;
}

export function TestSetCard({ active, onClick, number, count, theme }: TestSetCardProps) {
  return (
    <button
      onClick={onClick}
      className={`p-4 rounded-xl border transition-all flex flex-col items-center gap-2 ${
        active ? `${theme.selectedAnswerBg} ${theme.selectedAnswerBorder} text-white` : `${theme.bgCard} ${theme.borderColor} text-slate-700 dark:text-slate-300 hover:${theme.bgCardHover}`
      }`}
    >
      <FileText className={`w-8 h-8 ${theme.primaryLightText}`} />
      <span className="font-semibold">Test Set {number}</span>
      <span className={`text-xs ${theme.bgTextSecondary}`}>{count} questions</span>
    </button>
  );
}
