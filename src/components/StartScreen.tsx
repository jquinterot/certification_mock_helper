'use client';

import { useState } from 'react';
import { BookOpen, History, TrendingUp, AlertTriangle } from 'lucide-react';
import type { ExamMode } from '@/types';
import { useApp } from '@/contexts/AppContext';
import { ThemeToggle } from './ThemeToggle';
import {
  SavedTestList,
  ModeSelection,
  TestSetSelection,
  DomainSelection,
  ExamInfo,
} from './start-screen';

export function StartScreen() {
  const {
    selectedExamConfig,
    filteredSavedTests,
    examMode,
    selectedDomain,
    selectedTestSet,
    sectionDomainStats,
    totalQuestions,
    maxTestSets,
    theme,
    examHistory,
    weaknessAnalysis,
    handleResumeTest,
    deleteSavedTest,
    setExamMode,
    setSelectedDomain,
    setSelectedTestSet,
    handleStartExam,
    handleViewHistory,
    handleBackToHome,
  } = useApp();

  const [sectionStep, setSectionStep] = useState<'domain' | 'testset'>('domain');

  const selectedSectionStats = sectionDomainStats.find((s) => s.domain === selectedDomain);
  const sectionQuestionCount = selectedSectionStats
    ? selectedTestSet === 1
      ? selectedSectionStats.set1Count
      : selectedTestSet === 2
      ? selectedSectionStats.set2Count
      : selectedSectionStats.set3Count || 0
    : 0;

  const currentQuestionCount = examMode === 'full' ? totalQuestions : sectionQuestionCount;
  const estimatedTime =
    examMode === 'full'
      ? selectedExamConfig!.durationMinutes
      : selectedDomain
        ? sectionQuestionCount <= 10
          ? 15
          : 20
        : 0;

  const isSectionMode = examMode === 'section';
  const needsDomainSelection = isSectionMode && !selectedDomain;
  const isInDomainSelectionStep = isSectionMode && sectionStep === 'domain';

  const weakestDomain = weaknessAnalysis?.weakestDomains[0];

  return (
    <div className={`min-h-screen bg-gradient-to-br ${theme.bgGradientFrom} ${theme.bgGradientVia} ${theme.bgGradientTo} ${theme.bgText} flex items-center justify-center p-4`}>
      <div className={`max-w-2xl w-full ${theme.bgCard} backdrop-blur-lg rounded-2xl p-8 ${theme.borderColor} border shadow-2xl`}>
        {handleBackToHome && (
          <button
            onClick={handleBackToHome}
            className={`flex items-center gap-2 ${theme.bgTextSecondary} hover:${theme.bgText} mb-6 transition-colors`}
            data-test-id="back-button"
          >
            Back to Home
          </button>
        )}

        {/* Theme Toggle */}
        <div className="flex justify-end mb-4">
          <ThemeToggle theme={theme} size="sm" />
        </div>

        <div className="text-center mb-8">
          <div className={`inline-flex items-center justify-center w-20 h-20 ${theme.primaryBg} rounded-2xl mb-6 shadow-lg`}>
            <BookOpen className={`w-10 h-10 ${theme.bgText}`} />
          </div>
          <h1 className="text-3xl font-bold mb-2">{selectedExamConfig!.name}</h1>
          <p className={`${theme.bgTextSecondary} text-lg`}>{selectedExamConfig!.shortName}</p>
        </div>

        {examHistory && examHistory.totalAttempts > 0 && (
          <div className={`${theme.bgCard} rounded-xl p-4 mb-6 ${theme.borderColor} border`}>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <TrendingUp className={`w-4 h-4 ${theme.primaryLightText}`} />
                <span className={`text-sm font-medium ${theme.bgTextSecondary}`}>Your Progress</span>
              </div>
              {handleViewHistory && (
                <button
                  onClick={handleViewHistory}
                  className={`flex items-center gap-1 text-xs ${theme.primaryLightText} transition-colors`}
                  data-test-id="view-history-button"
                >
                  <History className="w-3 h-3" />
                  View History
                </button>
              )}
            </div>
            <div className="grid grid-cols-3 gap-3">
              <div className="text-center" data-test-id="progress-best-score">
                <p className={`text-xl font-bold ${theme.primaryLightText}`}>{examHistory.bestScore}%</p>
                <p className={`text-xs ${theme.bgTextSecondary}`}>Best</p>
              </div>
              <div className="text-center" data-test-id="progress-average-score">
                <p className={`text-xl font-bold ${theme.primaryLightText}`}>{examHistory.averageScore}%</p>
                <p className={`text-xs ${theme.bgTextSecondary}`}>Average</p>
              </div>
              <div className="text-center" data-test-id="progress-attempts">
                <p className={`text-xl font-bold ${theme.bgText}`}>{examHistory.totalAttempts}</p>
                <p className={`text-xs ${theme.bgTextSecondary}`}>Attempts</p>
              </div>
            </div>
            {weakestDomain && (
              <div className={`mt-3 flex items-center gap-2 bg-red-500/10 rounded-lg p-2 border border-red-500/20`} data-test-id="weakest-domain">
                <AlertTriangle className="w-4 h-4 text-red-400" />
                <span className={`text-xs ${theme.bgTextSecondary}`}>
                  Weakest: <span className="text-red-400 font-medium">{weakestDomain.domain}</span> ({weakestDomain.averageScore}%)
                </span>
              </div>
            )}
          </div>
        )}

        {filteredSavedTests.length > 0 && (
          <SavedTestList
            savedTests={filteredSavedTests}
            theme={theme}
            onResumeTest={handleResumeTest}
            onDeleteTest={deleteSavedTest}
          />
        )}

        <ModeSelection
          mode={examMode}
          onSetMode={setExamMode as (mode: ExamMode) => void}
          theme={theme}
          totalQuestions={totalQuestions}
        />

        {examMode === 'full' && (
          <TestSetSelection
            testSet={selectedTestSet}
            onSetTestSet={setSelectedTestSet}
            maxTestSets={maxTestSets}
            totalQuestions={totalQuestions}
            theme={theme}
          />
        )}

        {examMode === 'section' && (
          <DomainSelection
            selectedDomain={selectedDomain}
            sectionDomainStats={sectionDomainStats}
            testSet={selectedTestSet}
            maxTestSets={maxTestSets}
            onSetDomain={setSelectedDomain}
            onSetTestSet={setSelectedTestSet}
            sectionStep={sectionStep}
            setSectionStep={setSectionStep}
            theme={theme}
          />
        )}

        <ExamInfo
          currentQuestionCount={currentQuestionCount}
          estimatedTime={estimatedTime}
          passingScore={selectedExamConfig!.passingScore}
          theme={theme}
        />

        <button
          onClick={handleStartExam}
          disabled={needsDomainSelection || isInDomainSelectionStep}
          className={`w-full ${theme.primaryBg} ${theme.primaryBgHover} text-white font-bold py-4 rounded-xl transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none`}
          data-test-id="start-exam-button"
        >
          {needsDomainSelection || isInDomainSelectionStep
            ? 'Select a Domain to Start'
            : 'Start Exam'}
        </button>
      </div>
    </div>
  );
}