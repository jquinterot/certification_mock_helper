'use client';

import type { Theme } from '@/lib/theme';

interface ModeCardProps {
  active: boolean;
  onClick: () => void;
  icon: React.ReactNode;
  label: string;
  count: number;
  theme: Theme;
}

export function ModeCard({ active, onClick, icon, label, count, theme }: ModeCardProps) {
  return (
    <button
      onClick={onClick}
      className={`p-4 rounded-xl border transition-all flex flex-col items-center gap-2 ${
        active ? `${theme.selectedAnswerBg} ${theme.selectedAnswerBorder} text-white` : `${theme.bgCard} ${theme.borderColor} text-slate-700 dark:text-slate-300 hover:${theme.bgCardHover}`
      }`}
    >
      {icon}
      <span className="font-semibold">{label}</span>
      <span className={`text-xs ${theme.bgTextSecondary}`}>{count} questions</span>
    </button>
  );
}
