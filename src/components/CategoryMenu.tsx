'use client';

import { ArrowRight, Clock, FileText, Sun, Moon } from 'lucide-react';
import type { ExamConfig } from '@/lib/exams/types';
import { getCategoryTheme, getIcon } from '@/lib/constants/ui';
import type { Theme } from '@/lib/theme';

interface CategoryMenuProps {
  category: string;
  exams: ExamConfig[];
  onSelectExam: (examId: string) => void;
  onBack: () => void;
  theme: Theme;
  themeMode: 'light' | 'dark';
  onToggleTheme: () => void;
}

export function CategoryMenu({ category, exams, onSelectExam, onBack, theme, themeMode, onToggleTheme }: CategoryMenuProps) {
  const colors = getCategoryTheme(category);

  return (
    <div className={`min-h-screen bg-gradient-to-br ${theme.bgGradientFrom} ${theme.bgGradientVia} ${theme.bgGradientTo} ${theme.bgText} flex items-center justify-center p-4`}>
      <div className="max-w-4xl w-full">
        {/* Back Button */}
        <button
          onClick={onBack}
          className={`flex items-center gap-2 ${theme.bgTextSecondary} hover:${theme.bgText} mb-8 transition-colors`}
          data-test-id="back-button"
        >
          Back to Home
        </button>

        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold mb-2">{category}</h1>
          <p className={theme.bgTextSecondary}>
            Select a certification to start practicing
          </p>
        </div>

        {/* Theme Toggle */}
        <div className="flex justify-center mb-8">
          <button
            onClick={onToggleTheme}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg ${theme.bgCard} ${theme.borderColor} border transition-all hover:scale-105`}
            data-test-id="theme-toggle"
          >
            {themeMode === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            <span className="text-sm font-medium">{themeMode === 'dark' ? 'Light Mode' : 'Dark Mode'}</span>
          </button>
        </div>

        {/* Exam Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {exams.map((exam) => (
            <button
              key={exam.id}
              onClick={() => onSelectExam(exam.id)}
              className={`group relative p-6 rounded-2xl border ${colors.border} ${colors.bg} ${colors.hover} backdrop-blur-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-xl text-left`}
              data-test-id={`exam-card-${exam.id}`}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className={`p-3 rounded-xl bg-gradient-to-br ${colors.gradient} text-white flex-shrink-0`}>
                  {getIcon(exam.icon)}
                </div>
                <div className="flex-1">
                  <h2 className="text-xl font-bold mb-1">{exam.name}</h2>
                  <p className={`text-sm ${theme.bgTextSecondary}`}>{exam.description}</p>
                </div>
              </div>

              <div className="space-y-2 mb-4">
                <div className={`flex items-center gap-2 text-sm ${theme.bgTextSecondary}`}>
                  <FileText className="w-4 h-4" />
                  <span>{exam.questionCount} questions per test set</span>
                </div>
                <div className={`flex items-center gap-2 text-sm ${theme.bgTextSecondary}`}>
                  <Clock className="w-4 h-4" />
                  <span>{exam.durationMinutes} minutes</span>
                </div>
                <div className={`flex items-center gap-2 text-sm ${theme.bgTextSecondary}`}>
                  <span className={`${theme.bgButton} px-2 py-0.5 rounded text-xs`}>
                    Passing: {exam.passingScore}%
                  </span>
                  <span className={`${theme.bgButton} px-2 py-0.5 rounded text-xs`}>
                    2 test sets
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className={`text-xs ${theme.bgTextSecondary}`}>
                  {exam.domains.length} domains
                </div>
                <div className={`flex items-center gap-2 text-sm font-semibold ${theme.bgText} group-hover:translate-x-1 transition-transform`}>
                  Start Exam
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
