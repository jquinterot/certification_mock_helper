'use client';

import { AlertCircle, Clock, Trophy } from 'lucide-react';
import type { Theme } from '@/lib/theme';
import { InfoCard } from './InfoCard';

interface ExamInfoProps {
  currentQuestionCount: number;
  estimatedTime: number;
  passingScore: number;
  theme: Theme;
}

export function ExamInfo({ currentQuestionCount, estimatedTime, passingScore, theme }: ExamInfoProps) {
  return (
    <div className="space-y-4 mb-8">
      <InfoCard
        icon={<AlertCircle className={`w-6 h-6 ${theme.primaryLightText}`} />}
        title={`${currentQuestionCount} Questions`}
        subtitle="Multiple choice format"
        theme={theme}
      />
      <InfoCard
        icon={<Clock className={`w-6 h-6 ${theme.primaryLightText}`} />}
        title={`${estimatedTime} Minutes`}
        subtitle="Timed practice exam"
        theme={theme}
      />
      <InfoCard
        icon={<Trophy className={`w-6 h-6 ${theme.primaryLightText}`} />}
        title={`Passing Score: ${passingScore}`}
        subtitle="Results shown immediately"
        theme={theme}
      />
    </div>
  );
}
