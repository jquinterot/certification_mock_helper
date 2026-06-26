'use client';

import { ArrowRight, Clock, FileText } from 'lucide-react';
import { getCategoryTheme, getIcon } from '@/lib/constants/ui';
import { getExamsByCategory } from '@/lib/exams';
import { useApp } from '@/contexts/AppContext';
import { ThemeToggle } from './ThemeToggle';

export function CategoryMenu() {
  const { selectedCategory, handleSelectExam, handleBackToHome, theme } = useApp();
  const exams = getExamsByCategory(selectedCategory);
  const colors = getCategoryTheme(selectedCategory);

  return (
    <div className={`min-h-screen bg-gradient-to-br ${theme.bgGradientFrom} ${theme.bgGradientVia} ${theme.bgGradientTo} ${theme.bgText} flex items-center justify-center p-4`}>
      <div className="max-w-4xl w-full">
        {/* Back Button */}
        <button
          onClick={handleBackToHome}
          className={`flex items-center gap-2 ${theme.bgTextSecondary} hover:${theme.bgText} mb-8 transition-colors`}
          data-test-id="back-button"
        >
          Back to Home
        </button>

        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold mb-2">{selectedCategory}</h1>
          <p className={theme.bgTextSecondary}>
            Select a certification to start practicing
          </p>
        </div>

        {/* Theme Toggle */}
        <div className="flex justify-center mb-8">
          <ThemeToggle theme={theme} size="md" label="long" />
        </div>

        {/* Exam Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {exams.map((exam) => (
            <button
              key={exam.id}
              onClick={() => handleSelectExam(exam.id)}
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