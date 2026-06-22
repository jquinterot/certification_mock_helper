'use client';

import { useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Flag, Eye, EyeOff, CheckCircle2, Sun, Moon, Clock } from 'lucide-react';
import { QuestionCard } from './QuestionCard';
import { QuestionNavigator } from './QuestionNavigator';
import { checkAnswer } from '@/lib/questions/shuffle';
import { formatTime } from '@/lib/utils';
import { useApp } from '@/contexts/AppContext';

export function ExamScreen() {
  const {
    exam,
    timer,
    theme,
    themeMode,
    toggleThemeMode,
    examDuration,
    selectedExamId,
    handleSubmit,
    handleExit,
    handleSave,
  } = useApp();

  const {
    activeQuestions,
    currentQuestion,
    answers,
    showExplanation,
    flaggedQuestions,
    showResults,
    config,
    flaggedCount,
    selectAnswer,
    toggleFlag,
    toggleExplanation,
    goToPrevious,
    goToNext,
    goToQuestion,
    goToNextFlagged,
  } = exam;

  const question = activeQuestions[currentQuestion];
  const isFirst = currentQuestion === 0;
  const isLast = currentQuestion === activeQuestions.length - 1;

  const remainingTime = examDuration > 0 ? Math.max(0, examDuration - timer.timer) : null;
  const isLowTime = remainingTime !== null && remainingTime < 600;
  const isCriticalTime = remainingTime !== null && remainingTime < 300;

  const formatRemaining = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (showResults) return;
    const target = e.target as HTMLElement;
    if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA') return;

    switch (e.key.toLowerCase()) {
      case 'n':
        if (!isLast) goToNext();
        break;
      case 'p':
        if (!isFirst) goToPrevious();
        break;
      case 'f':
        toggleFlag(currentQuestion);
        break;
      case 'e':
        toggleExplanation(currentQuestion);
        break;
      default:
        if (e.key >= '1' && e.key <= '9') {
          const idx = parseInt(e.key) - 1;
          if (idx < activeQuestions.length) goToQuestion(idx);
        }
    }
  }, [showResults, isLast, isFirst, goToNext, goToPrevious, toggleFlag, currentQuestion, toggleExplanation, activeQuestions.length, goToQuestion]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  const timerColor = isCriticalTime ? 'text-red-500' : isLowTime ? 'text-yellow-400' : theme.primaryLightText;
  const timerBg = isCriticalTime ? 'bg-red-500/10' : isLowTime ? 'bg-yellow-500/10' : '';

  return (
    <div className={`min-h-screen bg-gradient-to-br ${theme.bgGradientFrom} ${theme.bgGradientVia} ${theme.bgGradientTo} ${theme.bgText} pb-20 lg:pb-0`}>
      {/* Header */}
      <div className={`${theme.bgCard} backdrop-blur-lg border-b ${theme.borderColor} sticky top-0 z-50`}>
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={handleExit}
              className={`flex items-center gap-2 px-3 py-2 ${theme.bgButtonHover} rounded-lg transition-colors text-sm font-medium`}
              aria-label="Exit exam"
              data-test-id="exit-button"
            >
              Back to Home
            </button>
            <div className="text-sm font-semibold hidden sm:block">
              Question {currentQuestion + 1} of {activeQuestions.length}
              <span className={`${theme.primaryLightText} ml-2`}>Set {config.testSet}</span>
              {config.mode === 'section' && config.selectedDomain && (
                <span className={`${theme.primaryLightText} ml-2`}>{config.selectedDomain}</span>
              )}
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-4">
            <button
              onClick={toggleThemeMode}
              className={`p-2 rounded-lg ${theme.bgButton} transition-all hover:scale-105`}
              aria-label="Toggle theme"
              data-test-id="theme-toggle"
            >
              {themeMode === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            {!showResults && (
              <button
                onClick={handleSave}
                className="flex items-center gap-1 px-2 sm:px-3 py-2 bg-blue-500/20 hover:bg-blue-500/30 text-blue-400 text-sm rounded-lg transition-colors"
                aria-label="Save test and exit"
                data-test-id="save-exit-button"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                <span className="hidden sm:inline">Save &amp; Exit</span>
              </button>
            )}

            {!showResults && (
              <button
                onClick={handleSubmit}
                className="flex items-center gap-1 px-2 sm:px-3 py-2 bg-green-500/20 hover:bg-green-500/30 text-green-400 text-sm rounded-lg transition-colors"
                aria-label="Submit exam and view results"
                data-test-id="submit-exam-button"
              >
                <CheckCircle2 className="w-4 h-4" />
                <span className="hidden sm:inline">Submit</span>
              </button>
            )}

            {showResults ? (
              <div className={`flex items-center gap-2 text-sm ${theme.bgTextSecondary}`}>
                <Clock className="w-4 h-4" aria-hidden="true" />
                <span className="font-mono">{formatTime(timer.timer)}</span>
                <span className="hidden sm:inline">elapsed</span>
              </div>
            ) : (
              <div
                className={`flex items-center gap-2 text-sm px-2 py-1 rounded-lg ${timerBg} ${isCriticalTime ? 'animate-pulse' : ''}`}
                data-test-id="timer-display"
              >
                <Clock className={`w-4 h-4 ${timerColor}`} aria-hidden="true" />
                <span className={`font-mono font-semibold ${timerColor}`}>
                  {remainingTime !== null ? formatRemaining(remainingTime) : formatTime(timer.timer)}
                </span>
                {remainingTime !== null && (
                  <span className={`hidden sm:inline ${timerColor}`}>
                    {isCriticalTime ? 'left!' : 'left'}
                  </span>
                )}
              </div>
            )}

            {!showResults && (
              <>
                <div className="text-sm hidden sm:block" data-test-id="answered-count">
                  <span className={`${theme.primaryLightText} font-semibold`}>{Object.keys(answers).length}</span>
                  <span className={theme.bgTextSecondary}>/{activeQuestions.length}</span>
                </div>
                {flaggedCount > 0 && (
                  <div className="flex items-center gap-1 text-sm text-yellow-400" data-test-id="flagged-count">
                    <Flag className="w-4 h-4" fill="currentColor" aria-hidden="true" />
                    <span>{flaggedCount}</span>
                  </div>
                )}
              </>
            )}
          </div>
        </div>

        {/* Progress Bar */}
        <div className={`w-full ${theme.bgButton} h-1`} data-test-id="progress-bar">
          <div
            className={`${theme.primaryProgress} h-1 transition-all`}
            style={{ width: `${activeQuestions.length > 0 ? ((currentQuestion + 1) / activeQuestions.length) * 100 : 0}%` }}
          />
        </div>
      </div>

      <div className="max-w-4xl mx-auto p-4">
        <div className="flex gap-4">
          {/* Main Content */}
          <div className="flex-1">
            {question && (
              <>
                {/* Flag Button */}
                {!showResults && (
                  <div className="flex items-center justify-end mb-2">
                    <button
                      onClick={() => toggleFlag(currentQuestion)}
                      className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all text-sm ${
                        flaggedQuestions.has(currentQuestion)
                          ? 'bg-yellow-500/20 text-yellow-400'
                          : 'hover:bg-white/10 text-slate-400'
                      }`}
                      aria-label={flaggedQuestions.has(currentQuestion) ? 'Unflag question' : 'Flag for review'}
                      data-test-id="flag-button"
                    >
                      <Flag className="w-4 h-4" fill={flaggedQuestions.has(currentQuestion) ? 'currentColor' : 'none'} />
                      <span className="hidden sm:inline">{flaggedQuestions.has(currentQuestion) ? 'Flagged' : 'Flag'}</span>
                    </button>
                  </div>
                )}

                <QuestionCard
                  question={question}
                  questionIndex={currentQuestion}
                  examId={selectedExamId}
                  selectedAnswer={answers[currentQuestion]}
                  showCorrectness={showResults || showExplanation[currentQuestion]}
                  showResults={showResults}
                  isCorrect={checkAnswer(question, answers[currentQuestion])}
                  showExplanation={showExplanation[currentQuestion]}
                  theme={theme}
                  onSelectAnswer={selectAnswer}
                  onToggleExplanation={toggleExplanation}
                />

                {/* Navigation */}
                  <div className="flex items-center justify-between mb-6">
                    <button
                      onClick={goToPrevious}
                      disabled={isFirst}
                      className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-xl transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                      data-test-id="previous-button"
                    >
                      <ChevronLeft className="w-5 h-5" aria-hidden="true" />
                      <span className="hidden sm:inline">Previous</span>
                    </button>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => toggleExplanation(currentQuestion)}
                        className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-xl transition-colors"
                        data-test-id="show-explanation-button"
                      >
                        {showExplanation[currentQuestion] ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                        <span className="hidden sm:inline">{showExplanation[currentQuestion] ? 'Hide' : 'Show'}</span>
                      </button>

                      {flaggedCount > 0 && !showResults && (
                        <button
                          onClick={goToNextFlagged}
                          className="flex items-center gap-2 px-4 py-2 bg-yellow-500/20 hover:bg-yellow-500/30 text-yellow-400 rounded-xl transition-colors"
                          title="Jump to next flagged question"
                          data-test-id="next-flagged-button"
                        >
                          <Flag className="w-4 h-4" fill="currentColor" />
                          <span className="hidden sm:inline">Next Flagged</span>
                        </button>
                      )}
                    </div>

                    {isLast && !showResults ? (
                      <button
                        onClick={handleSubmit}
                        className="flex items-center gap-2 px-6 py-2 bg-green-500 hover:bg-green-600 rounded-xl transition-colors font-semibold"
                        data-test-id="submit-exam-button"
                      >
                        <span className="hidden sm:inline">Submit Exam</span>
                        <span className="sm:hidden">Submit</span>
                        <CheckCircle2 className="w-5 h-5" aria-hidden="true" />
                      </button>
                    ) : isLast && showResults ? null : (
                      <button
                        onClick={goToNext}
                        className={`flex items-center gap-2 px-4 py-2 ${theme.primaryBg} ${theme.primaryBgHover} rounded-xl transition-colors`}
                        data-test-id="next-button"
                      >
                        <span className="hidden sm:inline">Next</span>
                        <ChevronRight className="w-5 h-5" aria-hidden="true" />
                      </button>
                    )}
                  </div>
              </>
            )}
          </div>

          {/* Sidebar Navigator */}
          <div className="hidden lg:block w-64">
            <QuestionNavigator
              questions={activeQuestions}
              currentQuestion={currentQuestion}
              answers={answers}
              flaggedQuestions={flaggedQuestions}
              showResults={showResults}
              theme={theme}
              onGoToQuestion={goToQuestion}
            />
          </div>
        </div>
      </div>

      {/* Mobile Navigator */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white/10 dark:bg-slate-900/80 backdrop-blur-lg border-t border-white/10 dark:border-slate-700/50 p-4">
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
          {activeQuestions.map((_, idx) => {
            const isAnswered = answers[idx] !== undefined;
            const isJsCorrect = checkAnswer(activeQuestions[idx], answers[idx]);
            const isFlagged = flaggedQuestions.has(idx);
            const isCurrent = idx === currentQuestion;

            let className = 'w-8 h-8 rounded-lg text-xs font-semibold flex items-center justify-center flex-shrink-0 transition-all cursor-pointer';

            if (isCurrent) {
              className += ` ${theme.currentQuestion} text-white`;
            } else if (isAnswered && isJsCorrect) {
              className += ' bg-green-500/30 text-green-400';
            } else if (isAnswered && !isJsCorrect) {
              className += ' bg-red-500/30 text-red-400';
            } else {
              className += ' bg-white/10 dark:bg-slate-700/50 text-slate-400';
            }

            if (isFlagged) {
              className += ' ring-2 ring-yellow-400';
            }

            return (
              <button
                key={idx}
                onClick={() => goToQuestion(idx)}
                className={className}
                title={isFlagged ? 'Flagged for review' : `Question ${idx + 1}`}
                aria-label={`Question ${idx + 1}${isFlagged ? ', flagged for review' : ''}`}
              >
                {idx + 1}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}