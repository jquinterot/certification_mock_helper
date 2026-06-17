'use client';

import type { Theme } from '@/lib/theme';
import { TestSetCard } from './TestSetCard';

interface TestSetSelectionProps {
  testSet: number;
  onSetTestSet: (set: number) => void;
  maxTestSets: number;
  totalQuestions: number;
  theme: Theme;
}

export function TestSetSelection({ testSet, onSetTestSet, maxTestSets, totalQuestions, theme }: TestSetSelectionProps) {
  return (
    <div className="mb-8">
      <h3 className={`font-semibold mb-4 ${theme.primaryLightText} text-center`}>Select Test Set</h3>
      <div className={`grid gap-4 ${maxTestSets === 2 ? 'grid-cols-2' : 'grid-cols-3'}`}>
        {Array.from({ length: maxTestSets }, (_, i) => (
          <TestSetCard
            key={i + 1}
            active={testSet === i + 1}
            onClick={() => onSetTestSet(i + 1)}
            number={i + 1}
            count={totalQuestions}
            theme={theme}
          />
        ))}
      </div>
    </div>
  );
}
