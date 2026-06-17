'use client';

import { Award, ChevronRight, Sun, Moon } from 'lucide-react';
import { allExams } from '@/lib/exams';
import { getCategoryTheme, getIcon } from '@/lib/constants/ui';
import type { Theme } from '@/lib/theme';

interface HomePageProps {
  onSelectCategory: (category: string) => void;
  theme: Theme;
  themeMode: 'light' | 'dark';
  onToggleTheme: () => void;
}

export function HomePage({ onSelectCategory, theme, themeMode, onToggleTheme }: HomePageProps) {
  const categories = [
    { name: 'AWS Cloud', description: 'Amazon Web Services certifications for cloud professionals', icon: 'Cloud' },
    { name: 'ISTQB Testing', description: 'International Software Testing Qualifications Board certifications', icon: 'Bug' },
  ];

  const examsByCategory = (category: string) => allExams.filter(e => e.category === category);
  const stats = {
    certifications: new Set(allExams.map(e => e.category)).size,
    testSets: allExams.length,
    totalQuestions: allExams.reduce((sum, e) => sum + e.questionCount, 0),
  };

  return (
    <div className={`min-h-screen bg-gradient-to-br ${theme.bgGradientFrom} ${theme.bgGradientVia} ${theme.bgGradientTo} ${theme.bgText} flex items-center justify-center p-4`}>
      <div className="max-w-4xl w-full">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-orange-500 to-amber-500 rounded-2xl mb-6 shadow-lg">
            <Award className={`w-10 h-10 ${theme.bgText}`} />
          </div>
          <h1 className="text-4xl font-bold mb-3">Certification Practice Hub</h1>
          <p className={`${theme.bgTextSecondary} text-lg max-w-2xl mx-auto`}>
            Practice exams for AWS and ISTQB certifications with realistic questions, timed tests, and detailed explanations
          </p>
        </div>

        {/* Theme Toggle */}
        <div className="flex justify-center mb-8">
          <button
            onClick={onToggleTheme}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg ${theme.bgCard} ${theme.borderColor} border transition-all hover:scale-105`}
          >
            {themeMode === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            <span className="text-sm font-medium">{themeMode === 'dark' ? 'Light Mode' : 'Dark Mode'}</span>
          </button>
        </div>

        {/* Category Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {categories.map((category) => {
            const catTheme = getCategoryTheme(category.name);
            const examCount = examsByCategory(category.name).length;
            return (
              <button
                key={category.name}
                onClick={() => onSelectCategory(category.name)}
                className={`group relative p-8 rounded-2xl border ${catTheme.border} ${catTheme.bg} ${catTheme.hover} backdrop-blur-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-xl text-left`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${catTheme.gradient} text-white`}>
                    {getIcon(category.icon, 'w-12 h-12')}
                  </div>
                  <ChevronRight className={`w-6 h-6 ${theme.bgTextSecondary} group-hover:${theme.bgText} group-hover:translate-x-1 transition-all`} />
                </div>

                <h2 className="text-2xl font-bold mb-2">{category.name}</h2>
                <p className={`${theme.bgTextSecondary} mb-4`}>{category.description}</p>

                <div className="flex items-center gap-2 text-sm">
                  <span className={`px-3 py-1 rounded-full ${theme.bgButton}`}>
                    {examCount} certification{examCount !== 1 ? 's' : ''}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4">
          <div className={`${theme.bgCard} rounded-xl p-4 text-center ${theme.borderColor} border`}>
            <p className={`text-3xl font-bold ${theme.primaryLightText}`}>{stats.certifications}</p>
            <p className={`text-sm ${theme.bgTextSecondary}`}>Certifications</p>
          </div>
          <div className={`${theme.bgCard} rounded-xl p-4 text-center ${theme.borderColor} border`}>
            <p className={`text-3xl font-bold ${theme.primaryLightText}`}>{stats.testSets}</p>
            <p className={`text-sm ${theme.bgTextSecondary}`}>Test Sets</p>
          </div>
          <div className={`${theme.bgCard} rounded-xl p-4 text-center ${theme.borderColor} border`}>
            <p className={`text-3xl font-bold ${theme.primaryLightText}`}>{stats.totalQuestions}</p>
            <p className={`text-sm ${theme.bgTextSecondary}`}>Total Questions</p>
          </div>
        </div>
      </div>
    </div>
  );
}
