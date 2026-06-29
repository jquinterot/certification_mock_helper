'use client';

import { memo } from 'react';
import type { ShuffledQuestion } from '@/types';
import type { Theme } from '@/lib/theme';
import { checkAnswer } from '@/lib/questions/shuffle';

interface QuestionNavigatorProps {
  questions: ShuffledQuestion[];
  currentQuestion: number;
  answers: Record<number, number | number[]>;
  flaggedQuestions: Set<number>;
  showResults: boolean;
  onGoToQuestion: (index: number) => void;
  theme: Theme;
}

function getButtonClass(
  isCurrent: boolean,
  isAnswered: boolean,
  isCorrect: boolean,
  isFlagged: boolean,
  theme: Theme
): string {
  let base = 'rounded-lg font-semibold flex items-center justify-center transition-all cursor-pointer';

  if (isCurrent) {
    base += ` ${theme.currentQuestion} text-white`;
  } else if (isAnswered && isCorrect) {
    base += ' bg-green-500/30 text-green-600 dark:text-green-400 border border-green-500/50';
  } else if (isAnswered && !isCorrect) {
    base += ' bg-red-500/30 text-red-600 dark:text-red-400 border border-red-500/50';
  } else {
    base += ' bg-slate-200 text-slate-600 dark:bg-white/10 dark:text-slate-400 hover:bg-slate-300 dark:hover:bg-white/20';
  }

  if (isFlagged) {
    base += ' ring-2 ring-yellow-400';
  }

  return base;
}

function QuestionNavigatorComponent({
  questions,
  currentQuestion,
  answers,
  flaggedQuestions,
  onGoToQuestion,
  theme,
}: QuestionNavigatorProps) {
  const isFlagged = (idx: number) => flaggedQuestions.has(idx);
  const isAnswered = (idx: number) => answers[idx] !== undefined;
  const isCorrect = (idx: number) => checkAnswer(questions[idx], answers[idx]);

  return (
    <div className={`${theme.bgCard} backdrop-blur-lg rounded-2xl p-4 ${theme.borderColor} border shadow-xl sticky top-24`} data-test-id="question-navigator">
      <h3 className={`font-semibold mb-3 text-sm ${theme.bgText}`}>Question Navigator</h3>
      <div className="grid grid-cols-5 gap-2">
        {questions.map((_, idx) => (
          <button
            key={idx}
            onClick={() => onGoToQuestion(idx)}
            className={getButtonClass(
              idx === currentQuestion,
              isAnswered(idx),
              isCorrect(idx),
              isFlagged(idx),
              theme
            )}
            aria-label={`Go to question ${idx + 1}`}
            data-test-id={`question-navigator-item-${idx}`}
          >
            {idx + 1}
          </button>
        ))}
      </div>

      <div className={`flex gap-4 mt-4 text-xs ${theme.bgTextSecondary}`}>
        <div className="flex items-center gap-1">
          <div className={`w-3 h-3 rounded ${theme.currentQuestion}`} />
          <span>Current</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-3 h-3 rounded bg-green-500/30 border border-green-500/50" />
          <span>Correct</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-3 h-3 rounded bg-red-500/30 border border-red-500/50" />
          <span>Incorrect</span>
        </div>
      </div>
    </div>
  );
}

export const QuestionNavigator = memo(QuestionNavigatorComponent);
QuestionNavigator.displayName = 'QuestionNavigator';
