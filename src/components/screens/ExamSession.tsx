'use client';

import { ExamScreen } from '@/components/ExamScreen';
import { ExitDialog } from '@/components/ExitDialog';
import { SubmitDialog } from '@/components/SubmitDialog';
import { useApp } from '@/contexts/AppContext';

export function ExamSession() {
  const {
    exam,
    theme,
    showExitDialog,
    showSubmitDialog,
    setShowExitDialog,
    setShowSubmitDialog,
    handleSave,
    handleLeave,
    handleConfirmSubmit,
  } = useApp();

  return (
    <>
      <ExamScreen />

      <ExitDialog
        isOpen={showExitDialog}
        answeredCount={exam.answeredCount}
        totalCount={exam.activeQuestions.length}
        flaggedCount={exam.flaggedCount}
        onSave={handleSave}
        onLeave={handleLeave}
        onCancel={() => setShowExitDialog(false)}
        theme={theme}
      />

      <SubmitDialog
        isOpen={showSubmitDialog}
        answeredCount={exam.answeredCount}
        totalCount={exam.activeQuestions.length}
        flaggedCount={exam.flaggedCount}
        onConfirm={handleConfirmSubmit}
        onCancel={() => setShowSubmitDialog(false)}
        theme={theme}
      />
    </>
  );
}