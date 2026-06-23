'use client';

import { ArrowLeft } from 'lucide-react';
import type { Theme } from '@/lib/theme';
import { TestSetCard } from './TestSetCard';

interface SectionDomainStats {
  domain: string;
  set1Count: number;
  set2Count: number;
  set3Count?: number;
}

interface DomainSelectionProps {
  selectedDomain: string;
  sectionDomainStats: SectionDomainStats[];
  testSet: number;
  maxTestSets: number;
  onSetDomain: (domain: string) => void;
  onSetTestSet: (set: number) => void;
  sectionStep: 'domain' | 'testset';
  setSectionStep: (step: 'domain' | 'testset') => void;
  theme: Theme;
}

export function DomainSelection({
  selectedDomain,
  sectionDomainStats,
  testSet,
  maxTestSets,
  onSetDomain,
  onSetTestSet,
  sectionStep,
  setSectionStep,
  theme,
}: DomainSelectionProps) {
  const handleSelectDomain = (domain: string) => {
    onSetDomain(domain);
    setSectionStep('testset');
  };

  const handleBackToDomains = () => {
    onSetDomain('');
    setSectionStep('domain');
  };

  if (sectionStep === 'testset' && selectedDomain) {
    const selectedSectionStats = sectionDomainStats.find((s) => s.domain === selectedDomain);
    const hasSet3 = maxTestSets >= 3;
    return (
      <div className="mb-8">
        <button
          onClick={handleBackToDomains}
          className={`flex items-center gap-2 ${theme.bgTextSecondary} hover:${theme.bgText} mb-4 transition-colors text-sm`}
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Domains
        </button>
        <h3 className={`font-semibold mb-2 ${theme.primaryLightText}`}>{selectedDomain}</h3>
        <p className={`${theme.bgTextSecondary} text-sm mb-4`}>Select Test Set</p>
        <div className={`grid gap-4 ${hasSet3 ? 'grid-cols-3' : 'grid-cols-2'}`}>
          <TestSetCard
            active={testSet === 1}
            onClick={() => onSetTestSet(1)}
            number={1}
            count={selectedSectionStats?.set1Count || 0}
            theme={theme}
          />
          <TestSetCard
            active={testSet === 2}
            onClick={() => onSetTestSet(2)}
            number={2}
            count={selectedSectionStats?.set2Count || 0}
            theme={theme}
          />
          {hasSet3 && (
            <TestSetCard
              active={testSet === 3}
              onClick={() => onSetTestSet(3)}
              number={3}
              count={selectedSectionStats?.set3Count || 0}
              theme={theme}
            />
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="mb-8">
      <h3 className={`font-semibold mb-4 ${theme.primaryLightText} text-center`}>Select Domain</h3>
      <div className="space-y-3">
        {sectionDomainStats.map((section) => {
          const domainLabel = section.domain.split(':')[0];
          const domainName = section.domain.split(':').slice(1).join(':').trim();
          return (
          <button
            key={section.domain}
            onClick={() => handleSelectDomain(section.domain)}
            className={`w-full text-left p-4 rounded-xl border transition-all ${
              selectedDomain === section.domain
                ? `${theme.selectedAnswerBg} ${theme.selectedAnswerBorder} text-white`
                : `${theme.bgCard} ${theme.borderColor} text-slate-700 dark:text-slate-300 hover:${theme.bgCardHover}`
            }`}
            data-test-id={`domain-card-${section.domain.split(':')[0].toLowerCase().replace(/\s+/g, '-')}`}
          >
              <div className="flex items-center justify-between">
                <div>
                  <p className={`text-lg font-bold ${theme.bgText}`}>{domainLabel}</p>
                  <p className={`text-sm mt-0.5 ${selectedDomain === section.domain ? 'text-white/80' : theme.bgTextSecondary}`}>
                    {domainName}
                  </p>
                  <p className={`text-xs ${theme.bgTextSecondary} mt-1`}>{section.set1Count} questions per test set</p>
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
