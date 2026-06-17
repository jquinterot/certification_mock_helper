'use client';

import { ExamScreen } from '@/components/ExamScreen';
import { ExitDialog } from '@/components/ExitDialog';
import { SubmitDialog } from '@/components/SubmitDialog';
import type { ShuffledQuestion } from '@/types';
import type { Theme } from '@/lib/theme';
import { formatTime } from '@/lib/utils';

interface ExamSessionProps {
  questions: ShuffledQuestion[];
  activeQuestions: ShuffledQuestion[];
  currentQuestion: number;
  answers: Record<number, number | number[]>;
  showExplanation: Record<number, boolean>;
  flaggedQuestions: Set<number>;
  showResults: boolean;
  timer: number;
  config: { testSet: number; mode: string; selectedDomain: string };
  flaggedCount: number;
  answeredCount: number;
  theme: Theme;
  themeMode: 'light' | 'dark';
  onToggleTheme: () => void;
  onSelectAnswer: (idx: number, answer: number) => void;
  onToggleFlag: (idx: number) => void;
  onToggleExplanation: (idx: number) => void;
  onGoToPrevious: () => void;
  onGoToNext: () => void;
  onGoToQuestion: (idx: number) => void;
  onGoToNextFlagged: () => void;
  onSubmit: () => void;
  onExit: () => void;
  onSave: () => void;
  showExitDialog: boolean;
  showSubmitDialog: boolean;
  onCloseExitDialog: () => void;
  onCloseSubmitDialog: () => void;
  onConfirmSubmit: () => void;
  onLeave: () => void;
}

export function ExamSession({
  activeQuestions,
  currentQuestion,
  answers,
  showExplanation,
  flaggedQuestions,
  showResults,
  timer,
  config,
  flaggedCount,
  answeredCount,
  theme,
  themeMode,
  onToggleTheme,
  onSelectAnswer,
  onToggleFlag,
  onToggleExplanation,
  onGoToPrevious,
  onGoToNext,
  onGoToQuestion,
  onGoToNextFlagged,
  onSubmit,
  onExit,
  onSave,
  showExitDialog,
  showSubmitDialog,
  onCloseExitDialog,
  onCloseSubmitDialog,
  onConfirmSubmit,
  onLeave,
}: ExamSessionProps) {
  return (
    <>
      <ExamScreen
        questions={activeQuestions}
        currentQuestion={currentQuestion}
        answers={answers}
        showExplanation={showExplanation}
        flaggedQuestions={flaggedQuestions}
        showResults={showResults}
        timer={formatTime(timer)}
        testSet={config.testSet}
        mode={config.mode}
        selectedDomain={config.selectedDomain}
        flaggedCount={flaggedCount}
        theme={theme}
        themeMode={themeMode}
        onToggleTheme={onToggleTheme}
        onSelectAnswer={onSelectAnswer}
        onToggleFlag={onToggleFlag}
        onToggleExplanation={onToggleExplanation}
        onGoToPrevious={onGoToPrevious}
        onGoToNext={onGoToNext}
        onGoToQuestion={onGoToQuestion}
        onGoToNextFlagged={onGoToNextFlagged}
        onSubmit={onSubmit}
        onExit={onExit}
        onSave={onSave}
      />

      <ExitDialog
        isOpen={showExitDialog}
        answeredCount={answeredCount}
        totalCount={activeQuestions.length}
        flaggedCount={flaggedCount}
        onSave={onSave}
        onLeave={onLeave}
        onCancel={onCloseExitDialog}
        theme={theme}
      />

      <SubmitDialog
        isOpen={showSubmitDialog}
        answeredCount={answeredCount}
        totalCount={activeQuestions.length}
        flaggedCount={flaggedCount}
        onConfirm={onConfirmSubmit}
        onCancel={onCloseSubmitDialog}
        theme={theme}
      />
    </>
  );
}
