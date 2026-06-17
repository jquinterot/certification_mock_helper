'use client';

import { useState } from 'react';
import { BookOpen, History, TrendingUp, AlertTriangle, Award, ChevronLeft, Sun, Moon } from 'lucide-react';
import type { SavedTest, ExamHistory as ExamHistoryType, WeaknessAnalysis } from '@/types';
import type { ExamMode } from '@/types';
import type { Theme } from '@/lib/theme';
import {
  SavedTestList,
  ModeSelection,
  TestSetSelection,
  DomainSelection,
  ExamInfo,
} from './start-screen';

interface SectionDomainStats {
  domain: string;
  set1Count: number;
  set2Count: number;
}

interface StartScreenProps {
  examName: string;
  examSubtitle: string;
  durationMinutes: number;
  passingScore: number;
  savedTests: SavedTest[];
  mode: ExamMode;
  selectedDomain: string;
  testSet: number;
  domains: string[];
  domainStats: Record<string, number>;
  sectionDomainStats: SectionDomainStats[];
  totalQuestions: number;
  maxTestSets: number;
  theme: Theme;
  themeMode: 'light' | 'dark';
  onToggleTheme: () => void;
  examHistory?: ExamHistoryType | null;
  weaknessAnalysis?: WeaknessAnalysis | null;
  onResumeTest: (test: SavedTest) => void;
  onDeleteTest: (id: string) => void;
  onSetMode: (mode: ExamMode) => void;
  onSetDomain: (domain: string) => void;
  onSetTestSet: (set: number) => void;
  onStart: () => void;
  onViewHistory?: () => void;
  onBackToHome?: () => void;
}

export function StartScreen({
  examName,
  examSubtitle,
  durationMinutes,
  passingScore,
  savedTests,
  mode,
  selectedDomain,
  testSet,
  sectionDomainStats,
  totalQuestions,
  maxTestSets,
  theme,
  themeMode,
  onToggleTheme,
  examHistory,
  weaknessAnalysis,
  onResumeTest,
  onDeleteTest,
  onSetMode,
  onSetDomain,
  onSetTestSet,
  onStart,
  onViewHistory,
  onBackToHome,
}: StartScreenProps) {
  const [sectionStep, setSectionStep] = useState<'domain' | 'testset'>('domain');

  const selectedSectionStats = sectionDomainStats.find((s) => s.domain === selectedDomain);
  const sectionQuestionCount = selectedSectionStats
    ? testSet === 1
      ? selectedSectionStats.set1Count
      : selectedSectionStats.set2Count
    : 0;

  const currentQuestionCount = mode === 'full' ? totalQuestions : sectionQuestionCount;
  const estimatedTime =
    mode === 'full'
      ? durationMinutes
      : selectedDomain
        ? sectionQuestionCount <= 10
          ? 15
          : 20
        : 0;

  const isSectionMode = mode === 'section';
  const needsDomainSelection = isSectionMode && !selectedDomain;
  const isInDomainSelectionStep = isSectionMode && sectionStep === 'domain';

  const weakestDomain = weaknessAnalysis?.weakestDomains[0];

  return (
    <div className={`min-h-screen bg-gradient-to-br ${theme.bgGradientFrom} ${theme.bgGradientVia} ${theme.bgGradientTo} ${theme.bgText} flex items-center justify-center p-4`}>
      <div className={`max-w-2xl w-full ${theme.bgCard} backdrop-blur-lg rounded-2xl p-8 ${theme.borderColor} border shadow-2xl`}>
        {onBackToHome && (
          <button
            onClick={onBackToHome}
            className={`flex items-center gap-2 ${theme.bgTextSecondary} hover:${theme.bgText} mb-6 transition-colors`}
          >
            Back to Home
          </button>
        )}

        {/* Theme Toggle */}
        <div className="flex justify-end mb-4">
          <button
            onClick={onToggleTheme}
            className={`flex items-center gap-2 px-3 py-2 rounded-lg ${theme.bgButton} ${theme.borderColor} border transition-all hover:scale-105`}
          >
            {themeMode === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            <span className="text-xs font-medium">{themeMode === 'dark' ? 'Light' : 'Dark'}</span>
          </button>
        </div>

        <div className="text-center mb-8">
          <div className={`inline-flex items-center justify-center w-20 h-20 ${theme.primaryBg} rounded-2xl mb-6 shadow-lg`}>
            <BookOpen className={`w-10 h-10 ${theme.bgText}`} />
          </div>
          <h1 className="text-3xl font-bold mb-2">{examName}</h1>
          <p className={`${theme.bgTextSecondary} text-lg`}>{examSubtitle}</p>
        </div>

        {examHistory && examHistory.totalAttempts > 0 && (
          <div className={`${theme.bgCard} rounded-xl p-4 mb-6 ${theme.borderColor} border`}>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <TrendingUp className={`w-4 h-4 ${theme.primaryLightText}`} />
                <span className={`text-sm font-medium ${theme.bgTextSecondary}`}>Your Progress</span>
              </div>
              {onViewHistory && (
                <button
                  onClick={onViewHistory}
                  className={`flex items-center gap-1 text-xs ${theme.primaryLightText} transition-colors`}
                >
                  <History className="w-3 h-3" />
                  View History
                </button>
              )}
            </div>
            <div className="grid grid-cols-3 gap-3">
              <div className="text-center">
                <p className={`text-xl font-bold ${theme.primaryLightText}`}>{examHistory.bestScore}%</p>
                <p className={`text-xs ${theme.bgTextSecondary}`}>Best</p>
              </div>
              <div className="text-center">
                <p className={`text-xl font-bold ${theme.primaryLightText}`}>{examHistory.averageScore}%</p>
                <p className={`text-xs ${theme.bgTextSecondary}`}>Average</p>
              </div>
              <div className="text-center">
                <p className={`text-xl font-bold ${theme.bgText}`}>{examHistory.totalAttempts}</p>
                <p className={`text-xs ${theme.bgTextSecondary}`}>Attempts</p>
              </div>
            </div>
            {weakestDomain && (
              <div className={`mt-3 flex items-center gap-2 bg-red-500/10 rounded-lg p-2 border border-red-500/20`}>
                <AlertTriangle className="w-4 h-4 text-red-400" />
                <span className={`text-xs ${theme.bgTextSecondary}`}>
                  Weakest: <span className="text-red-400 font-medium">{weakestDomain.domain}</span> ({weakestDomain.averageScore}%)
                </span>
              </div>
            )}
          </div>
        )}

        {savedTests.length > 0 && (
          <SavedTestList
            savedTests={savedTests}
            theme={theme}
            onResumeTest={onResumeTest}
            onDeleteTest={onDeleteTest}
          />
        )}

        <ModeSelection
          mode={mode}
          onSetMode={onSetMode}
          theme={theme}
          totalQuestions={totalQuestions}
        />

        {mode === 'full' && (
          <TestSetSelection
            testSet={testSet}
            onSetTestSet={onSetTestSet}
            maxTestSets={maxTestSets}
            totalQuestions={totalQuestions}
            theme={theme}
          />
        )}

        {mode === 'section' && (
          <DomainSelection
            selectedDomain={selectedDomain}
            sectionDomainStats={sectionDomainStats}
            testSet={testSet}
            onSetDomain={onSetDomain}
            onSetTestSet={onSetTestSet}
            sectionStep={sectionStep}
            setSectionStep={setSectionStep}
            theme={theme}
          />
        )}

        <ExamInfo
          currentQuestionCount={currentQuestionCount}
          estimatedTime={estimatedTime}
          passingScore={passingScore}
          theme={theme}
        />

        <button
          onClick={onStart}
          disabled={needsDomainSelection || isInDomainSelectionStep}
          className={`w-full ${theme.primaryBg} ${theme.primaryBgHover} text-white font-bold py-4 rounded-xl transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none`}
        >
          {needsDomainSelection || isInDomainSelectionStep
            ? 'Select a Domain to Start'
            : 'Start Exam'}
        </button>
      </div>
    </div>
  );
}
