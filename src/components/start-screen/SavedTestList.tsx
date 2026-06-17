'use client';

import { Play, Trash2, Eye } from 'lucide-react';
import type { SavedTest } from '@/lib/types';
import type { Theme } from '@/lib/theme';
import { formatTime, formatDate } from '@/lib/utils';

interface SavedTestListProps {
  savedTests: SavedTest[];
  theme: Theme;
  onResumeTest: (test: SavedTest) => void;
  onDeleteTest: (id: string) => void;
}

export function SavedTestList({ savedTests, theme, onResumeTest, onDeleteTest }: SavedTestListProps) {
  return (
    <div className="mb-8">
      <h3 className={`font-semibold mb-4 ${theme.primaryLightText} text-center`}>Saved Tests</h3>
      <div className="space-y-2">
        {savedTests.map((savedTest) => (
          <div
            key={savedTest.id}
            className={`flex items-center gap-3 ${theme.bgCard} p-3 rounded-xl border transition-colors ${
              savedTest.status === 'submitted' ? 'border-green-500/30' : theme.borderColor
            }`}
          >
            <button
              onClick={() => onResumeTest(savedTest)}
              className="flex-1 flex items-center gap-3 text-left"
            >
              <div className={`flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center ${
                savedTest.status === 'submitted' ? 'bg-green-500/20' : 'bg-blue-500/20'
              }`}>
                {savedTest.status === 'submitted' ? (
                  <Eye className="w-5 h-5 text-green-400" />
                ) : (
                  <Play className="w-5 h-5 text-blue-400" />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold truncate">
                  {savedTest.mode === 'full' ? 'Full Exam' : savedTest.selectedDomain}{' '}
                  <span className={theme.primaryLightText}>(Set {savedTest.testSet})</span>
                  {savedTest.status === 'submitted' && (
                    <span className="ml-2 text-xs text-green-400 font-normal">(Submitted)</span>
                  )}
                </p>
                <p className={`text-xs ${theme.bgTextSecondary}`}>
                  {savedTest.answeredCount}/{savedTest.questionCount} answered
                  {savedTest.status === 'submitted' ? (
                    <> • View only</>
                  ) : (
                    <> • {formatTime(savedTest.timer)}</>
                  )}
                  • {formatDate(savedTest.timestamp)}
                </p>
              </div>
            </button>
            <button
              onClick={() => onDeleteTest(savedTest.id)}
              className="p-2 hover:bg-red-500/20 rounded-lg transition-colors text-slate-400 hover:text-red-400"
              aria-label="Delete saved test"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>
      <div className="my-6 border-t border-white/10" />
    </div>
  );
}
