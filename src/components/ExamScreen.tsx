'use client';

import { ChevronLeft, ChevronRight, Flag, Eye, EyeOff, CheckCircle2, Sun, Moon } from 'lucide-react';
import type { ShuffledQuestion } from '@/types';
import type { Theme } from '@/lib/theme';
import { QuestionCard } from './QuestionCard';
import { QuestionNavigator } from './QuestionNavigator';
import { checkAnswer } from '@/lib/questions/shuffle';

interface ExamScreenProps {
  questions: ShuffledQuestion[];
  currentQuestion: number;
  answers: Record<number, number | number[]>;
  showExplanation: Record<number, boolean>;
  flaggedQuestions: Set<number>;
  showResults: boolean;
  timer: string;
  testSet: number;
  mode: string;
  selectedDomain: string;
  flaggedCount: number;
  theme: Theme;
  themeMode: 'light' | 'dark';
  onToggleTheme: () => void;
  onSelectAnswer: (idx: number, answer: number) => void;
  onToggleFlag: (idx: number) => void;
  onToggleExplanation: (idx: number) => void;
  onGoToPrevious: () => void;
  onGoToNext: () => void;
  onGoToQuestion: (idx: number) => void;
  onGoToNextFlagged: () => void;
  onSubmit: () => void;
  onExit: () => void;
  onSave: () => void;
}

export function ExamScreen({
  questions,
  currentQuestion,
  answers,
  showExplanation,
  flaggedQuestions,
  showResults,
  timer,
  testSet,
  mode,
  selectedDomain,
  flaggedCount,
  theme,
  themeMode,
  onToggleTheme,
  onSelectAnswer,
  onToggleFlag,
  onToggleExplanation,
  onGoToPrevious,
  onGoToNext,
  onGoToQuestion,
  onGoToNextFlagged,
  onSubmit,
  onExit,
  onSave,
}: ExamScreenProps) {
  const question = questions[currentQuestion];
  const isFirst = currentQuestion === 0;
  const isLast = currentQuestion === questions.length - 1;

  return (
    <div className={`min-h-screen bg-gradient-to-br ${theme.bgGradientFrom} ${theme.bgGradientVia} ${theme.bgGradientTo} ${theme.bgText}`}>
      {/* Header */}
      <div className={`${theme.bgCard} backdrop-blur-lg border-b ${theme.borderColor} sticky top-0 z-50`}>
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={onExit}
              className={`flex items-center gap-2 px-3 py-2 ${theme.bgButtonHover} rounded-lg transition-colors text-sm font-medium`}
              aria-label="Exit exam"
            >
              Back to Home
            </button>
            <div className="text-sm font-semibold">
              Question {currentQuestion + 1} of {questions.length}
              <span className={`${theme.primaryLightText} ml-2`}>Set {testSet}</span>
              {mode === 'section' && selectedDomain && (
                <span className={`${theme.primaryLightText} ml-2`}>({selectedDomain})</span>
              )}
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={onToggleTheme}
              className={`p-2 rounded-lg ${theme.bgButton} transition-all hover:scale-105`}
              aria-label="Toggle theme"
            >
              {themeMode === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            {!showResults && (
              <button
                onClick={onSave}
                className="hidden sm:flex items-center gap-2 px-3 py-2 bg-blue-500/20 hover:bg-blue-500/30 text-blue-400 text-sm rounded-lg transition-colors"
                aria-label="Save test and exit"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Save & Exit
              </button>
            )}

            {!showResults && (
              <button
                onClick={onSubmit}
                className="hidden sm:flex items-center gap-2 px-3 py-2 bg-green-500/20 hover:bg-green-500/30 text-green-400 text-sm rounded-lg transition-colors"
                aria-label="Submit exam and view results"
              >
                <CheckCircle2 className="w-4 h-4" />
                Submit Exam
              </button>
            )}

            {showResults ? (
              <div className={`flex items-center gap-2 text-sm ${theme.bgTextSecondary}`}>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <circle cx="12" cy="12" r="10" strokeWidth={2} />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6l4 2" />
                </svg>
                <span className="font-mono">{timer}</span>
                <span>elapsed</span>
              </div>
            ) : (
              <div className="flex items-center gap-2 text-sm">
                <svg className={`w-4 h-4 ${theme.primaryLightText}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <circle cx="12" cy="12" r="10" strokeWidth={2} />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6l4 2" />
                </svg>
                <span className="font-mono">{timer}</span>
              </div>
            )}

            {!showResults && (
              <>
                <div className="text-sm">
                  <span className={`${theme.primaryLightText} font-semibold`}>{Object.keys(answers).length}</span>
                  <span className={theme.bgTextSecondary}>/{questions.length} answered</span>
                </div>
                {flaggedCount > 0 && (
                  <div className="flex items-center gap-1 text-sm text-yellow-400">
                    <Flag className="w-4 h-4" fill="currentColor" aria-hidden="true" />
                    <span>{flaggedCount}</span>
                  </div>
                )}
              </>
            )}
          </div>
        </div>

        {/* Progress Bar */}
        <div className={`w-full ${theme.bgButton} h-1`}>
          <div
            className={`${theme.primaryProgress} h-1 transition-all`}
            style={{ width: `${questions.length > 0 ? ((currentQuestion + 1) / questions.length) * 100 : 0}%` }}
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
                      onClick={() => onToggleFlag(currentQuestion)}
                      className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all text-sm ${
                        flaggedQuestions.has(currentQuestion)
                          ? 'bg-yellow-500/20 text-yellow-400'
                          : 'hover:bg-white/10 text-slate-400'
                      }`}
                      aria-label={flaggedQuestions.has(currentQuestion) ? 'Unflag question' : 'Flag for review'}
                    >
                      <Flag className="w-4 h-4" fill={flaggedQuestions.has(currentQuestion) ? 'currentColor' : 'none'} />
                      <span className="hidden sm:inline">{flaggedQuestions.has(currentQuestion) ? 'Flagged' : 'Flag'}</span>
                    </button>
                  </div>
                )}

                <QuestionCard
                  question={question}
                  questionIndex={currentQuestion}
                  selectedAnswer={answers[currentQuestion]}
                  showCorrectness={showResults || showExplanation[currentQuestion]}
                  showResults={showResults}
                  isCorrect={checkAnswer(question, answers[currentQuestion])}
                  showExplanation={showExplanation[currentQuestion]}
                  theme={theme}
                  onSelectAnswer={onSelectAnswer}
                  onToggleExplanation={onToggleExplanation}
                />

                {/* Navigation */}
                <div className="flex items-center justify-between mb-6">
                  <button
                    onClick={onGoToPrevious}
                    disabled={isFirst}
                    className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-xl transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <ChevronLeft className="w-5 h-5" aria-hidden="true" />
                    Previous
                  </button>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => onToggleExplanation(currentQuestion)}
                      className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-xl transition-colors"
                    >
                      {showExplanation[currentQuestion] ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                      {showExplanation[currentQuestion] ? 'Hide' : 'Show'} Explanation
                    </button>

                    {flaggedCount > 0 && !showResults && (
                      <button
                        onClick={onGoToNextFlagged}
                        className="flex items-center gap-2 px-4 py-2 bg-yellow-500/20 hover:bg-yellow-500/30 text-yellow-400 rounded-xl transition-colors"
                        title="Jump to next flagged question"
                      >
                        <Flag className="w-4 h-4" fill="currentColor" />
                        Next Flagged
                      </button>
                    )}
                  </div>

                  {isLast && !showResults ? (
                    <button
                      onClick={onSubmit}
                      className="flex items-center gap-2 px-6 py-2 bg-green-500 hover:bg-green-600 rounded-xl transition-colors font-semibold"
                    >
                      Submit Exam
                      <CheckCircle2 className="w-5 h-5" aria-hidden="true" />
                    </button>
                  ) : isLast && showResults ? null : (
                    <button
                      onClick={onGoToNext}
                      className={`flex items-center gap-2 px-4 py-2 ${theme.primaryBg} ${theme.primaryBgHover} rounded-xl transition-colors`}
                    >
                      Next
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
              questions={questions}
              currentQuestion={currentQuestion}
              answers={answers}
              flaggedQuestions={flaggedQuestions}
              showResults={showResults}
              theme={theme}
              onGoToQuestion={onGoToQuestion}
            />
          </div>
        </div>
      </div>

      {/* Mobile Navigator */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white/10 backdrop-blur-lg border-t border-white/10 p-4">
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
          {questions.map((_, idx) => {
            const isAnswered = answers[idx] !== undefined;
            const isCorrect = checkAnswer(questions[idx], answers[idx]);
            const isFlagged = flaggedQuestions.has(idx);
            const isCurrent = idx === currentQuestion;

            let className = 'w-8 h-8 rounded-lg text-xs font-semibold flex items-center justify-center flex-shrink-0 transition-all cursor-pointer';

            if (isCurrent) {
              className += ` ${theme.currentQuestion} text-white`;
            } else if (isAnswered && isCorrect) {
              className += ' bg-green-500/30 text-green-400';
            } else if (isAnswered && !isCorrect) {
              className += ' bg-red-500/30 text-red-400';
            } else {
              className += ' bg-white/10 text-slate-400';
            }

            if (isFlagged) {
              className += ' ring-2 ring-yellow-400';
            }

            return (
              <button
                key={idx}
                onClick={() => onGoToQuestion(idx)}
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
