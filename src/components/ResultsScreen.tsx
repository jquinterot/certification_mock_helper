'use client';

import { useEffect } from 'react';
import { Trophy, Eye, Bookmark, RotateCcw, Home, Sun, Moon } from 'lucide-react';
import type { Score, DomainScore, ExamAttempt } from '@/types';
import type { Theme } from '@/lib/theme';
import { formatTime } from '@/lib/utils';
import { saveAttempt, updateQuestionAnalytics } from '@/lib/study-history';

interface ResultsScreenProps {
  score: Score;
  domainScores: Record<string, DomainScore>;
  timer: number;
  testSet: number;
  mode: string;
  selectedDomain: string;
  flaggedCount: number;
  theme: Theme;
  themeMode: 'light' | 'dark';
  onToggleTheme: () => void;
  examId: string;
  answers: Record<number, number | number[]>;
  questions: Array<{ id: number; domain: string; correctAnswer: number | number[] }>;
  onReview: () => void;
  onReviewFlagged: () => void;
  onReset: () => void;
  onBackToHome?: () => void;
}

export function ResultsScreen({
  score,
  domainScores,
  timer,
  testSet,
  mode,
  selectedDomain,
  flaggedCount,
  theme,
  themeMode,
  onToggleTheme,
  examId,
  answers,
  questions,
  onReview,
  onReviewFlagged,
  onReset,
  onBackToHome,
}: ResultsScreenProps) {
  const passed = score.percentage >= 72;

  useEffect(() => {
    const domainScoresArray: DomainScore[] = Object.entries(domainScores).map(([domain, stats]) => ({
      domain,
      correct: stats.correct,
      total: stats.total,
      percentage: stats.total > 0 ? Math.round((stats.correct / stats.total) * 100) : 0,
    }));

    const attempt: ExamAttempt = {
      id: `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      examId,
      testSet,
      mode: mode as 'full' | 'section',
      selectedDomain: selectedDomain || undefined,
      score: score.correct,
      totalQuestions: score.total,
      percentage: score.percentage,
      passed,
      domainScores: domainScoresArray,
      timeElapsed: timer,
      completedAt: Date.now(),
      answers,
    };

    saveAttempt(attempt);

    questions.forEach((q) => {
      const userAnswer = answers[q.id];
      let isCorrect = false;

      if (Array.isArray(q.correctAnswer) && Array.isArray(userAnswer)) {
        isCorrect =
          q.correctAnswer.length === userAnswer.length &&
          q.correctAnswer.every((a) => userAnswer.includes(a));
      } else if (typeof q.correctAnswer === 'number' && typeof userAnswer === 'number') {
        isCorrect = q.correctAnswer === userAnswer;
      }

      updateQuestionAnalytics(q.id, examId, isCorrect);
    });
  }, []);

  const formatDate = (timestamp: number) => {
    return new Date(timestamp).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  };

  return (
    <div className={`min-h-screen bg-gradient-to-br ${theme.bgGradientFrom} ${theme.bgGradientVia} ${theme.bgGradientTo} ${theme.bgText} p-4`}>
      <div className="max-w-4xl mx-auto">
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
            className={`flex items-center gap-2 px-3 py-2 rounded-lg ${theme.bgCard} ${theme.borderColor} border transition-all hover:scale-105`}
          >
            {themeMode === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            <span className="text-xs font-medium">{themeMode === 'dark' ? 'Light' : 'Dark'}</span>
          </button>
        </div>

        <div className={`${theme.bgCard} backdrop-blur-lg rounded-2xl p-8 ${theme.borderColor} border shadow-2xl mb-6`}>
          <div className="text-center mb-8">
            <div
              className={`inline-flex items-center justify-center w-24 h-24 rounded-full mb-4 ${
                passed ? 'bg-green-500' : 'bg-red-500'
              }`}
            >
              <Trophy className="w-12 h-12 text-white" aria-hidden="true" />
            </div>
            <h1 className="text-3xl font-bold mb-2">
              {mode === 'section' ? 'Section Results' : 'Exam Results'}
            </h1>
            <p className={theme.bgTextSecondary}>Time: {formatTime(timer)}</p>
            <p className={`${theme.primaryLightText} mt-1`}>Test Set {testSet}</p>
            {mode === 'section' && selectedDomain && (
              <p className={`${theme.primaryLightText} mt-1`}>{selectedDomain}</p>
            )}
            <p className={`${theme.bgTextSecondary} text-sm mt-2`}>{formatDate(Date.now())}</p>
          </div>

          {/* Score Summary */}
          <div className={`grid grid-cols-3 gap-4 mb-8`}>
            <div className={`${theme.bgCard} rounded-xl p-4 text-center`}>
              <p className={`text-3xl font-bold ${theme.primaryLightText}`}>{score.correct}</p>
              <p className={`text-sm ${theme.bgTextSecondary}`}>Correct</p>
            </div>
            <div className={`${theme.bgCard} rounded-xl p-4 text-center`}>
              <p className={`text-3xl font-bold text-red-500 dark:text-red-400`}>{score.total - score.correct}</p>
              <p className={`text-sm ${theme.bgTextSecondary}`}>Incorrect</p>
            </div>
            <div className={`${theme.bgCard} rounded-xl p-4 text-center`}>
              <p className={`text-3xl font-bold ${passed ? 'text-green-500 dark:text-green-400' : 'text-red-500 dark:text-red-400'}`}>
                {score.percentage}%
              </p>
              <p className={`text-sm ${theme.bgTextSecondary}`}>Score</p>
            </div>
          </div>

          {/* Domain Breakdown */}
          <div className={`${theme.bgCard} rounded-xl p-4 mb-8`}>
            <h3 className={`font-semibold mb-4 ${theme.primaryLightText}`}>Domain Breakdown</h3>
            <div className="space-y-3">
              {Object.entries(domainScores).map(([domain, stats]) => (
                <div key={domain} className="space-y-1">
                  <div className={`flex justify-between text-sm ${theme.bgText}`}>
                    <span>{domain}</span>
                    <span className="font-semibold">
                      {stats.correct}/{stats.total} (
                      {stats.total > 0 ? Math.round((stats.correct / stats.total) * 100) : 0}%)
                    </span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-2">
                    <div
                      className={`${theme.primaryProgress} h-2 rounded-full transition-all`}
                      style={{
                        width: `${stats.total > 0 ? (stats.correct / stats.total) * 100 : 0}%`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-4 flex-wrap">
            <button
              onClick={onReview}
              className="flex-1 min-w-[200px] bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 rounded-xl transition-all"
            >
              <Eye className="w-5 h-5 inline mr-2" aria-hidden="true" />
              Review All Answers
            </button>
            {flaggedCount > 0 && (
              <button
                onClick={onReviewFlagged}
                className="flex-1 min-w-[200px] bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 rounded-xl transition-all"
              >
                <Bookmark className="w-5 h-5 inline mr-2" aria-hidden="true" />
                Review Flagged ({flaggedCount})
              </button>
            )}
            <button
              onClick={onReset}
              className={`flex-1 min-w-[200px] ${theme.primaryBg} ${theme.primaryBgHover} text-white font-bold py-3 rounded-xl transition-all`}
            >
              <RotateCcw className="w-5 h-5 inline mr-2" aria-hidden="true" />
              {mode === 'section' ? 'Choose Another Section' : 'Retake Exam'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
