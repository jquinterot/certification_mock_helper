'use client';

import { CheckCircle2 } from 'lucide-react';
import { Theme } from '@/lib/theme';

interface SubmitDialogProps {
  isOpen: boolean;
  answeredCount: number;
  totalCount: number;
  flaggedCount: number;
  onConfirm: () => void;
  onCancel: () => void;
  theme: Theme;
}

export function SubmitDialog({
  isOpen,
  answeredCount,
  totalCount,
  flaggedCount,
  onConfirm,
  onCancel,
  theme,
}: SubmitDialogProps) {
  if (!isOpen) return null;

  const unansweredCount = totalCount - answeredCount;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="submit-dialog-title"
      data-test-id="submit-dialog"
    >
      <div className={`${theme.bgCard} border ${theme.borderColor} rounded-2xl p-6 max-w-md w-full shadow-2xl`}>
        <div className="text-center mb-6">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-green-500/20 rounded-full mb-3">
            <CheckCircle2 className="w-6 h-6 text-green-500 dark:text-green-400" aria-hidden="true" />
          </div>
          <h2 id="submit-dialog-title" className={`text-xl font-bold mb-1 ${theme.bgText}`}>
            Submit Exam?
          </h2>
          <p className={`text-sm ${theme.bgTextSecondary}`}>
            You have answered {answeredCount} of {totalCount} questions.
          </p>
          {unansweredCount > 0 && (
            <p className={`${theme.primaryLightText} text-sm mt-1`}>
              {unansweredCount} question{unansweredCount !== 1 ? 's' : ''} unanswered
            </p>
          )}
          {flaggedCount > 0 && (
            <p className="text-yellow-400 text-sm mt-1">
              {flaggedCount} question{flaggedCount !== 1 ? 's' : ''} flagged for review
            </p>
          )}
        </div>

        <div className="space-y-3">
          <button
            onClick={onConfirm}
            className="w-full flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-xl transition-all"
            data-test-id="submit-dialog-confirm"
          >
            <CheckCircle2 className="w-5 h-5" aria-hidden="true" />
            Submit & View Report
          </button>

          <button
            onClick={onCancel}
            className={`w-full ${theme.bgTextSecondary} hover:${theme.bgText} py-2 transition-colors text-sm`}
            data-test-id="submit-dialog-cancel"
          >
            Cancel — Continue Exam
          </button>
        </div>
      </div>
    </div>
  );
}
