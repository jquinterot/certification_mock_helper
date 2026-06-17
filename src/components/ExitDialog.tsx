'use client';

import { LogOut, Save } from 'lucide-react';
import { Theme } from '@/lib/theme';

interface ExitDialogProps {
  isOpen: boolean;
  answeredCount: number;
  totalCount: number;
  flaggedCount: number;
  onSave: () => void;
  onLeave: () => void;
  onCancel: () => void;
  theme: Theme;
}

export function ExitDialog({
  isOpen,
  answeredCount,
  totalCount,
  flaggedCount,
  onSave,
  onLeave,
  onCancel,
  theme,
}: ExitDialogProps) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="exit-dialog-title"
    >
      <div className={`${theme.bgCard} border ${theme.borderColor} rounded-2xl p-6 max-w-md w-full shadow-2xl`}>
        <div className="text-center mb-6">
          <div className={`inline-flex items-center justify-center w-12 h-12 ${theme.iconBg} rounded-full mb-3`}>
            <LogOut className={`w-6 h-6 ${theme.iconText}`} aria-hidden="true" />
          </div>
          <h2 id="exit-dialog-title" className={`text-xl font-bold mb-1 ${theme.bgText}`}>
            Leave Exam?
          </h2>
          <p className={`text-sm ${theme.bgTextSecondary}`}>
            You have answered {answeredCount} of {totalCount} questions.
          </p>
          {flaggedCount > 0 && (
            <p className="text-yellow-400 text-sm mt-1">
              {flaggedCount} question{flaggedCount !== 1 ? 's' : ''} flagged for review
            </p>
          )}
        </div>

        <div className="space-y-3">
          <button
            onClick={onSave}
            className={`w-full flex items-center justify-center gap-2 ${theme.primaryBg} ${theme.primaryBgHover} text-white font-semibold py-3 rounded-xl transition-all`}
          >
            <Save className="w-5 h-5" aria-hidden="true" />
            Save & Exit
          </button>

          <button
            onClick={onLeave}
            className={`w-full flex items-center justify-center gap-2 ${theme.bgButton} ${theme.bgButtonHover} ${theme.bgText} font-semibold py-3 rounded-xl transition-all`}
          >
            <LogOut className="w-5 h-5" aria-hidden="true" />
            Leave Without Saving
          </button>

          <button
            onClick={onCancel}
            className={`w-full ${theme.bgTextSecondary} hover:${theme.bgText} py-2 transition-colors text-sm`}
          >
            Cancel — Continue Exam
          </button>
        </div>
      </div>
    </div>
  );
}
