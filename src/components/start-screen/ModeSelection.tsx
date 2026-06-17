'use client';

import { Layers, Target } from 'lucide-react';
import type { Theme } from '@/lib/theme';
import { ModeCard } from './ModeCard';

interface ModeSelectionProps {
  mode: 'full' | 'section';
  onSetMode: (mode: 'full' | 'section') => void;
  theme: Theme;
  totalQuestions: number;
}

export function ModeSelection({ mode, onSetMode, theme, totalQuestions }: ModeSelectionProps) {
  return (
    <div className="mb-8">
      <h3 className={`font-semibold mb-4 ${theme.primaryLightText} text-center`}>Select Practice Mode</h3>
      <div className="grid grid-cols-2 gap-4">
        <ModeCard
          active={mode === 'full'}
          onClick={() => onSetMode('full')}
          icon={<Layers />}
          label="Full Exam"
          count={totalQuestions}
          theme={theme}
        />
        <ModeCard
          active={mode === 'section'}
          onClick={() => onSetMode('section')}
          icon={<Target />}
          label="Section Mode"
          count={totalQuestions}
          theme={theme}
        />
      </div>
    </div>
  );
}
