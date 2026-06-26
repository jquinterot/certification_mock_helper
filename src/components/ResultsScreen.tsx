'use client';

import { Trophy, Eye, Bookmark, RotateCcw } from 'lucide-react';
import { formatTime, formatLongDate } from '@/lib/utils';
import { useApp } from '@/contexts/AppContext';
import { useSubmitResults } from '@/hooks/useSubmitResults';
import { ThemeToggle } from './ThemeToggle';

const SECTION_PASSING_SCORE = 65;

export function ResultsScreen() {
  const {
    exam,
    timer,
    theme,
    selectedExamId,
    questions,
    handleReview,
    handleReviewFlagged,
    handleReset,
    handleBackToHome,
  } = useApp();

  const { score, domainScores, config, flaggedCount, answers } = exam;
  const passingScore = config.mode === 'section' ? SECTION_PASSING_SCORE : 72;
  const passed = score.percentage >= passingScore;

  const submittedAt = useSubmitResults({
    selectedExamId,
    questions,
    config: {
      testSet: config.testSet,
      mode: config.mode as 'full' | 'section',
      selectedDomain: config.selectedDomain,
    },
    score,
    domainScores,
    passed,
    answers,
    timeElapsed: timer.timer,
  });

  return (
    <div className={`min-h-screen bg-gradient-to-br ${theme.bgGradientFrom} ${theme.bgGradientVia} ${theme.bgGradientTo} ${theme.bgText} p-4`}>
      <div className="max-w-4xl mx-auto">
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

        <div className={`${theme.bgCard} backdrop-blur-lg rounded-2xl p-8 ${theme.borderColor} border shadow-2xl mb-6`}>
          <div className="text-center mb-8">
            <div
              className={`inline-flex items-center justify-center w-24 h-24 rounded-full mb-4 ${
                passed ? 'bg-green-500' : 'bg-red-500'
              }`}
              data-test-id="results-pass-fail-badge"
            >
              <Trophy className="w-12 h-12 text-white" aria-hidden="true" />
            </div>
            <h1 className="text-3xl font-bold mb-2">
              {config.mode === 'section' ? 'Section Results' : 'Exam Results'}
            </h1>
            <p className={theme.bgTextSecondary}>Time: {formatTime(timer.timer)}</p>
            <p className={`${theme.primaryLightText} mt-1`}>Test Set {config.testSet}</p>
            {config.mode === 'section' && config.selectedDomain && (
              <p className={`${theme.primaryLightText} mt-1`}>{config.selectedDomain}</p>
            )}
            <p className={`${theme.bgTextSecondary} text-sm mt-2`}>{formatLongDate(submittedAt)}</p>
          </div>

          {/* Score Summary */}
          <div className={`grid grid-cols-3 gap-4 mb-8`}>
            <div className={`${theme.bgCard} rounded-xl p-4 text-center`} data-test-id="score-correct">
              <p className={`text-3xl font-bold ${theme.primaryLightText}`}>{score.correct}</p>
              <p className={`text-sm ${theme.bgTextSecondary}`}>Correct</p>
            </div>
            <div className={`${theme.bgCard} rounded-xl p-4 text-center`} data-test-id="score-incorrect">
              <p className={`text-3xl font-bold text-red-500 dark:text-red-400`}>{score.total - score.correct}</p>
              <p className={`text-sm ${theme.bgTextSecondary}`}>Incorrect</p>
            </div>
            <div className={`${theme.bgCard} rounded-xl p-4 text-center`} data-test-id="score-percentage">
              <p className={`text-3xl font-bold ${passed ? 'text-green-500 dark:text-green-400' : 'text-red-500 dark:text-red-400'}`}>
                {score.percentage}%
              </p>
              <p className={`text-sm ${theme.bgTextSecondary}`}>Score</p>
            </div>
          </div>

          {/* Domain Breakdown */}
          <div className={`${theme.bgCard} rounded-xl p-4 mb-8`} data-test-id="domain-breakdown">
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
                  <div className="w-full bg-white/10 rounded-full h-2" data-test-id={`domain-${domain.toLowerCase().replace(/\s+/g, '-')}-bar`}>
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
              onClick={handleReview}
              className="flex-1 min-w-[200px] bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 rounded-xl transition-all"
              data-test-id="review-all-button"
            >
              <Eye className="w-5 h-5 inline mr-2" aria-hidden="true" />
              Review All Answers
            </button>
            {flaggedCount > 0 && (
              <button
                onClick={handleReviewFlagged}
                className="flex-1 min-w-[200px] bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 rounded-xl transition-all"
                data-test-id="review-flagged-button"
              >
                <Bookmark className="w-5 h-5 inline mr-2" aria-hidden="true" />
                Review Flagged ({flaggedCount})
              </button>
            )}
            <button
              onClick={handleReset}
              className={`flex-1 min-w-[200px] ${theme.primaryBg} ${theme.primaryBgHover} text-white font-bold py-3 rounded-xl transition-all`}
              data-test-id="retake-button"
            >
              <RotateCcw className="w-5 h-5 inline mr-2" aria-hidden="true" />
              {config.mode === 'section' ? 'Choose Another Section' : 'Retake Exam'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
