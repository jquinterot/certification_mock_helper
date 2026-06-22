'use client';

import { memo } from 'react';
import { CheckCircle2, XCircle } from 'lucide-react';
import type { ShuffledQuestion } from '@/types';
import { Theme } from '@/lib/theme';
import { QuestionNotes } from './QuestionNotes';

interface QuestionCardProps {
  question: ShuffledQuestion;
  questionIndex: number;
  examId: string;
  selectedAnswer: number | number[] | undefined;
  showCorrectness: boolean;
  showResults: boolean;
  isCorrect: boolean;
  showExplanation: boolean;
  onSelectAnswer: (questionIndex: number, answerIndex: number) => void;
  onToggleExplanation: (questionIndex: number) => void;
  theme: Theme;
}

function getOptionClass(
  isSelected: boolean,
  isCorrectOption: boolean,
  showCorrectness: boolean,
  showResults: boolean,
  theme: Theme
): string {
  const base = 'w-full text-left p-4 rounded-xl border transition-all';

  if (showCorrectness || showResults) {
    if (isCorrectOption) {
      return `${base} bg-green-500/20 border-green-500/50 text-green-700 dark:text-green-300`;
    }
    if (isSelected && !isCorrectOption) {
      return `${base} bg-red-500/20 border-red-500/50 text-red-700 dark:text-red-300`;
    }
    return `${base} bg-slate-100 border-slate-200 text-slate-400 dark:bg-white/5 dark:border-white/10 dark:text-slate-300 opacity-50`;
  }

  return isSelected
    ? `${base} ${theme.selectedAnswerBg} ${theme.selectedAnswerBorder} ${theme.selectedAnswerText}`
    : `${base} bg-slate-100 border-slate-200 text-slate-700 hover:bg-slate-50 dark:bg-white/5 dark:border-white/10 dark:text-slate-300 dark:hover:bg-white/10 dark:hover:border-white/20`;
}

function getBadgeClass(
  showCorrectness: boolean,
  isCorrectOption: boolean,
  isSelected: boolean,
  theme: Theme
): string {
  const base = 'flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold';

  if (showCorrectness) {
    if (isCorrectOption) return `${base} bg-green-500 text-white`;
    if (isSelected) return `${base} bg-red-500 text-white`;
    return `${base} bg-slate-200 text-slate-600 dark:bg-white/10 dark:text-slate-400`;
  }

  return isSelected
    ? `${base} ${theme.selectedCorrectAnswer} ${theme.selectedCorrectAnswerText}`
    : `${base} bg-slate-200 text-slate-600 dark:bg-white/10 dark:text-slate-400`;
}

function QuestionCardComponent({
  question,
  questionIndex,
  examId,
  selectedAnswer,
  showCorrectness,
  showResults,
  isCorrect,
  showExplanation,
  onSelectAnswer,
  theme,
}: QuestionCardProps) {
  const options = question.shuffledOptions;
  const correctAnswer = question.shuffledCorrectIndex;

  return (
    <div className={`${theme.bgCard} backdrop-blur-lg rounded-2xl p-6 ${theme.borderColor} border shadow-xl mb-4`} data-test-id={`question-${questionIndex}`}>
      {/* Domain Badge */}
      <div className="mb-4">
        <span className={`inline-block ${theme.explanationBadge} ${theme.explanationBadgeText} text-xs font-semibold px-3 py-1 rounded-full`} data-test-id="domain-badge">
          {question.domain}
        </span>
      </div>

      {/* Question */}
      <h2 className={`text-lg font-semibold mb-6 leading-relaxed ${theme.bgText}`}>
        {question.question}
      </h2>

      {/* Options */}
      <div className="space-y-3">
        {options.map((option, idx) => {
          const isSelected = Array.isArray(selectedAnswer) ? selectedAnswer.includes(idx) : selectedAnswer === idx;
          const isCorrectOption = Array.isArray(correctAnswer) ? correctAnswer.includes(idx) : idx === correctAnswer;
          const showResult = showCorrectness || showResults;

          return (
            <button
              key={idx}
              onClick={() => onSelectAnswer(questionIndex, idx)}
              className={getOptionClass(isSelected, isCorrectOption, showResult, showResults, theme)}
              disabled={showResults}
              aria-label={`Option ${String.fromCharCode(65 + idx)}: ${option}`}
              data-test-id={`answer-option-${questionIndex}-${String.fromCharCode(65 + idx).toLowerCase()}`}
            >
              <div className="flex items-center gap-3">
                <span className={getBadgeClass(showResult, isCorrectOption, isSelected, theme)}>
                  {String.fromCharCode(65 + idx)}
                </span>
                <span className="flex-1">{option}</span>
                {showResult && isCorrectOption && (
                  <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" aria-hidden="true" />
                )}
                {showResult && isSelected && !isCorrectOption && (
                  <XCircle className="w-5 h-5 text-red-400 flex-shrink-0" aria-hidden="true" />
                )}
              </div>
            </button>
          );
        })}
      </div>

      {/* Explanation */}
      {(showExplanation || showResults) && (
        <div className={`mt-6 p-4 rounded-xl border ${isCorrect ? 'bg-green-500/10 border-green-500/30' : 'bg-red-500/10 border-red-500/30'}`} data-test-id="explanation-panel">
          <div className="flex items-center gap-2 mb-2">
            {isCorrect ? (
              <>
                <CheckCircle2 className="w-5 h-5 text-green-400" aria-hidden="true" />
                <span className="font-semibold text-green-400">Correct!</span>
              </>
            ) : (
              <>
                <XCircle className="w-5 h-5 text-red-400" aria-hidden="true" />
                <span className="font-semibold text-red-400">Incorrect</span>
              </>
            )}
          </div>
          <p className={`leading-relaxed ${theme.bgTextSecondary}`}>{question.explanation}</p>
        </div>
      )}

      {/* Personal Notes */}
      <QuestionNotes key={`${examId}-${question.id}`} noteKey={`${examId}-${question.id}`} theme={theme} />
    </div>
  );
}

export const QuestionCard = memo(QuestionCardComponent);
QuestionCard.displayName = 'QuestionCard';
