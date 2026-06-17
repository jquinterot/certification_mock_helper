'use client';

import type { Theme } from '@/lib/theme';

interface InfoCardProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  theme: Theme;
}

export function InfoCard({ icon, title, subtitle, theme }: InfoCardProps) {
  return (
    <div className={`flex items-center gap-3 ${theme.bgCard} p-4 rounded-xl`}>
      <div className="flex-shrink-0">{icon}</div>
      <div>
        <p className={`font-semibold ${theme.bgText}`}>{title}</p>
        <p className={`text-sm ${theme.bgTextSecondary}`}>{subtitle}</p>
      </div>
    </div>
  );
}
