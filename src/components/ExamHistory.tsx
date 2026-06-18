'use client';

import { History, TrendingUp, AlertTriangle, Trash2, Target, Sun, Moon } from 'lucide-react';
import type { ExamAttempt, WeaknessAnalysis } from '@/types';
import type { Theme } from '@/lib/theme';
import { formatTime } from '@/lib/utils';
import { deleteAttempt } from '@/lib/study-history';

interface ExamHistoryProps {
  examId: string;
  examName: string;
  attempts: ExamAttempt[];
  weaknessAnalysis: WeaknessAnalysis | null;
  theme: Theme;
  themeMode: 'light' | 'dark';
  onToggleTheme: () => void;
  onBack: () => void;
  onStudyDomain: (domain: string) => void;
}

export function ExamHistory({
  examId,
  examName,
  attempts,
  weaknessAnalysis,
  theme,
  themeMode,
  onToggleTheme,
  onBack,
  onStudyDomain,
}: ExamHistoryProps) {
  const handleDeleteAttempt = (attemptId: string) => {
    deleteAttempt(examId, attemptId);
    window.location.reload();
  };

  const formatDate = (timestamp: number) => {
    return new Date(timestamp).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const bestScore = attempts.length > 0 ? Math.max(...attempts.map(a => a.percentage)) : 0;
  const avgScore = attempts.length > 0
    ? Math.round(attempts.reduce((a, b) => a + b.percentage, 0) / attempts.length)
    : 0;

  return (
    <div className={`min-h-screen bg-gradient-to-br ${theme.bgGradientFrom} ${theme.bgGradientVia} ${theme.bgGradientTo} ${theme.bgText} p-4`}>
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={onBack}
            className={`flex items-center gap-2 ${theme.bgTextSecondary} hover:${theme.bgText} transition-colors`}
            data-test-id="back-button"
          >
            Back to Home
          </button>
          <h1 className="text-xl font-bold">{examName} - History</h1>
          <button
            onClick={onToggleTheme}
            className={`flex items-center gap-2 px-3 py-2 rounded-lg ${theme.bgCard} ${theme.borderColor} border transition-all hover:scale-105`}
            data-test-id="theme-toggle"
          >
            {themeMode === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            <span className="text-xs font-medium">{themeMode === 'dark' ? 'Light' : 'Dark'}</span>
          </button>
        </div>

        {attempts.length === 0 ? (
          <div className={`${theme.bgCard} backdrop-blur-lg rounded-2xl p-8 ${theme.borderColor} border text-center`}>
            <History className={`w-16 h-16 mx-auto mb-4 ${theme.bgTextSecondary}`} />
            <p className={`${theme.bgTextSecondary} text-lg`}>No exam attempts yet</p>
            <p className={`${theme.bgTextSecondary} text-sm mt-2`}>Complete an exam to see your history here</p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className={`${theme.bgCard} backdrop-blur-lg rounded-xl p-4 ${theme.borderColor} border text-center`} data-test-id="best-score">
                <p className={`text-3xl font-bold ${theme.primaryLightText}`}>{bestScore}%</p>
                <p className={`text-sm ${theme.bgTextSecondary}`}>Best Score</p>
              </div>
              <div className={`${theme.bgCard} backdrop-blur-lg rounded-xl p-4 ${theme.borderColor} border text-center`} data-test-id="average-score">
                <p className={`text-3xl font-bold ${theme.primaryLightText}`}>{avgScore}%</p>
                <p className={`text-sm ${theme.bgTextSecondary}`}>Average</p>
              </div>
              <div className={`${theme.bgCard} backdrop-blur-lg rounded-xl p-4 ${theme.borderColor} border text-center`} data-test-id="total-attempts">
                <p className={`text-3xl font-bold ${theme.bgText}`}>{attempts.length}</p>
                <p className={`text-sm ${theme.bgTextSecondary}`}>Attempts</p>
              </div>
            </div>

            {weaknessAnalysis && weaknessAnalysis.weakestDomains.length > 0 && (
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 mb-6">
                <div className="flex items-center gap-2 mb-4">
                  <AlertTriangle className={`w-5 h-5 ${theme.primaryLightText}`} />
                  <h2 className={`font-semibold ${theme.primaryLightText}`}>Areas to Improve</h2>
                </div>
                <div className="space-y-3">
                  {weaknessAnalysis.weakestDomains.slice(0, 3).map((weakness, idx) => (
                    <div key={weakness.domain} className="flex items-center justify-between" data-test-id={`weakness-area-${idx}`}>
                      <div className="flex items-center gap-3">
                        <span className={`${idx === 0 ? 'text-red-400' : 'text-yellow-400'}`}>
                          <Target className="w-4 h-4" />
                        </span>
                        <span className="text-slate-300">{weakness.domain}</span>
                        <span className="text-slate-500 text-sm">
                          ({weakness.questionCount} questions)
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className={`font-semibold ${
                          weakness.averageScore < 50 ? 'text-red-400' : 'text-yellow-400'
                        }`}>
                          {weakness.averageScore}%
                        </span>
                        <button
                          onClick={() => onStudyDomain(weakness.domain)}
                          className={`${theme.primaryBg} ${theme.primaryBgHover} px-3 py-1 rounded-lg text-sm transition-all`}
                          data-test-id={`study-button-${weakness.domain.toLowerCase().replace(/\s+/g, '-')}`}
                        >
                          Study
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 mb-6">
              <div className="flex items-center gap-2 mb-4">
                <TrendingUp className={`w-5 h-5 ${theme.primaryLightText}`} />
                <h2 className={`font-semibold ${theme.primaryLightText}`}>Recent Attempts</h2>
              </div>
              <div className="space-y-3">
                {attempts.map((attempt) => (
                  <div
                    key={attempt.id}
                    className="bg-white/5 rounded-xl p-4 border border-white/10"
                    data-test-id={`attempt-${attempt.id}`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className={`text-2xl font-bold ${
                          attempt.passed ? 'text-green-400' : 'text-red-400'
                        }`}>
                          {attempt.percentage}%
                        </span>
                        <div>
                          <p className="text-slate-300 text-sm">
                            {attempt.mode === 'section' ? attempt.selectedDomain : `Set ${attempt.testSet}`}
                          </p>
                          <p className="text-slate-500 text-xs">
                            {formatDate(attempt.completedAt)} • {formatTime(attempt.timeElapsed)}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className={`px-2 py-1 rounded text-xs ${
                          attempt.passed
                            ? 'bg-green-500/20 text-green-400'
                            : 'bg-red-500/20 text-red-400'
                        }`}>
                          {attempt.passed ? 'Pass' : 'Fail'}
                        </span>
                        <button
                          onClick={() => handleDeleteAttempt(attempt.id)}
                          className="text-slate-400 hover:text-red-400 transition-colors p-1"
                          title="Delete attempt"
                          data-test-id={`delete-attempt-${attempt.id}`}
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    <div className="mt-3 space-y-1">
                      <p className="text-xs text-slate-500 mb-2">
                        {attempt.score}/{attempt.totalQuestions} correct
                      </p>
                      <div className="flex gap-1">
                        {attempt.domainScores.map((ds) => (
                          <div key={ds.domain} className="flex-1">
                            <div className="text-xs text-slate-400 truncate">{ds.domain}</div>
                            <div className="w-full bg-white/10 rounded-full h-1.5 mt-1">
                              <div
                                className={`h-1.5 rounded-full ${
                                  ds.percentage >= 70 ? 'bg-green-500' : 'bg-red-500'
                                }`}
                                style={{ width: `${ds.percentage}%` }}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}