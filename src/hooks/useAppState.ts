import { useState, useCallback, useMemo } from 'react';
import type { AppPhase, SavedTest } from '@/types';
import { useExam } from '@/hooks/useExam';
import { useTimer } from '@/hooks/useTimer';
import { useSavedTests } from '@/hooks/useSavedTests';
import { useThemeMode } from '@/hooks/useThemeMode';
import { useDialogState } from '@/hooks/useDialogState';
import { useExamSelection } from '@/hooks/useExamSelection';
import { useTimerAutoSubmit } from '@/hooks/useTimerAutoSubmit';
import { calculateExamDuration } from '@/lib/exam-duration';
import { generateLocalId } from '@/lib/utils';
import { getExamHistorySummary, getWeaknessAnalysis, deleteAttempt } from '@/lib/study-history';
import { useStudyHistoryRefresh } from '@/hooks/useStudyHistoryRefresh';

export function useAppState() {
  const [phase, setPhase] = useState<AppPhase>('home');

  // 1. Selection (which exam, test set, mode, domain)
  const selection = useExamSelection();

  // 2. Theme
  const { themeMode, theme, toggleThemeMode } = useThemeMode(selection.selectedCategory);

  // 3. Dialog visibility
  const dialogs = useDialogState();

  // 4. Core exam + timer + saved-tests
  const questions = selection.questions;
  const exam = useExam(questions);
  const timer = useTimer();
  const savedTests = useSavedTests();

  // 5. Exam duration (computed when starting an exam)
  const [examDuration, setExamDuration] = useState(0);
  const [currentSavedTestId, setCurrentSavedTestId] = useState<string | null>(null);

  // 6. Auto-submit when timer crosses exam duration
  const autoSubmit = useCallback(() => {
    timer.pause();
    exam.submit();
    if (currentSavedTestId) {
      savedTests.deleteSavedTest(currentSavedTestId);
      setCurrentSavedTestId(null);
    }
    const savedTest: SavedTest = {
      id: generateLocalId(),
      examId: selection.selectedExamId,
      timestamp: Date.now(),
      mode: exam.config.mode,
      selectedDomain: exam.config.selectedDomain,
      testSet: exam.config.testSet,
      currentQuestion: exam.currentQuestion,
      answers: exam.answers,
      flaggedQuestions: Array.from(exam.flaggedQuestions),
      timer: timer.timer,
      questionCount: exam.activeQuestions.length,
      answeredCount: exam.answeredCount,
      questionSeed: selection.questionSeed,
      status: 'submitted',
    };
    savedTests.addSavedTest(savedTest);
    setPhase('results');
  }, [exam, timer, currentSavedTestId, savedTests, selection.selectedExamId, selection.questionSeed]);

  useTimerAutoSubmit({
    enabled: phase === 'exam' && !exam.showResults,
    elapsed: timer.timer,
    duration: examDuration,
    onExpire: autoSubmit,
  });

  // 7. Phase transitions
  const goToCategory = useCallback((category: string) => {
    selection.selectCategory(category);
    setPhase('category');
  }, [selection]);

  const goToExamStart = useCallback((examId: string) => {
    selection.selectExam(examId);
    setPhase('exam-start');
  }, [selection]);

  const goToHome = useCallback(() => {
    selection.selectCategory('');
    selection.clearExam();
    setPhase('home');
  }, [selection]);

  const goBackToCategory = useCallback(() => {
    selection.clearExam();
    setPhase('category');
  }, [selection]);

  const startExam = useCallback(() => {
    setCurrentSavedTestId(null);
    selection.regenerateSeed();
    exam.start({
      mode: selection.examMode,
      selectedDomain: selection.selectedDomain,
      testSet: selection.selectedTestSet,
    });
    timer.reset();
    timer.start();
    setExamDuration(
      calculateExamDuration(
        selection.examMode,
        selection.selectedExamConfig?.durationMinutes ?? 60,
        selection.selectedExamConfig?.questionCount ?? 0,
        questions.length
      )
    );
    setPhase('exam');
  }, [selection, exam, timer, questions.length]);

  const resumeTest = useCallback((savedTest: SavedTest) => {
    selection.setExamMode(savedTest.mode);
    selection.setSelectedDomain(savedTest.selectedDomain);
    selection.setSelectedTestSet(savedTest.testSet);
    if (savedTest.questionSeed != null) {
      // Restore the original question order so the resumed attempt
      // reproduces the same shuffled questions and option order.
      selection.restoreSeed(savedTest.questionSeed);
    }
    setCurrentSavedTestId(savedTest.id);
    const config = {
      mode: savedTest.mode,
      selectedDomain: savedTest.selectedDomain,
      testSet: savedTest.testSet,
    };

    if (savedTest.status === 'submitted') {
      exam.resume(config, savedTest.currentQuestion, savedTest.answers, savedTest.flaggedQuestions);
      timer.set(savedTest.timer);
      exam.submit();
      setPhase('results');
    } else {
      exam.resume(config, savedTest.currentQuestion, savedTest.answers, savedTest.flaggedQuestions);
      timer.set(savedTest.timer);
      timer.start();
      setExamDuration(
        calculateExamDuration(
          savedTest.mode,
          selection.selectedExamConfig?.durationMinutes ?? 60,
          selection.selectedExamConfig?.questionCount ?? 0,
          savedTest.questionCount
        )
      );
      setPhase('exam');
    }
  }, [selection, exam, timer]);

  const submitExam = useCallback(() => {
    dialogs.openSubmit();
  }, [dialogs]);

  const saveAndExit = useCallback(() => {
    const savedTest: SavedTest = {
      id: generateLocalId(),
      examId: selection.selectedExamId,
      timestamp: Date.now(),
      mode: exam.config.mode,
      selectedDomain: exam.config.selectedDomain,
      testSet: exam.config.testSet,
      currentQuestion: exam.currentQuestion,
      answers: exam.answers,
      flaggedQuestions: Array.from(exam.flaggedQuestions),
      timer: timer.timer,
      questionCount: exam.activeQuestions.length,
      answeredCount: exam.answeredCount,
      questionSeed: selection.questionSeed,
      status: 'in-progress',
    };
    savedTests.addSavedTest(savedTest);
    timer.pause();
    exam.reset();
    dialogs.closeExit();
    setPhase('exam-start');
  }, [selection, exam, timer, savedTests, dialogs]);

  const exit = useCallback(() => {
    if (exam.showResults) {
      exam.reset();
      setPhase('exam-start');
    } else {
      dialogs.openExit();
    }
  }, [exam, dialogs]);

  const leave = useCallback(() => {
    timer.pause();
    exam.reset();
    dialogs.closeExit();
    setPhase('exam-start');
  }, [exam, timer, dialogs]);

  const review = useCallback(() => {
    setPhase('review');
    exam.review();
  }, [exam]);

  const reviewFlagged = useCallback(() => {
    setPhase('review');
    exam.reviewFlagged();
  }, [exam]);

  const reset = useCallback(() => {
    timer.reset();
    exam.reset();
    selection.resetSelections();
  }, [timer, exam, selection]);

  const viewHistory = useCallback(() => {
    setPhase('history');
  }, []);

  const studyDomain = useCallback((domain: string) => {
    selection.studyDomain(domain);
    setPhase('exam-start');
  }, [selection]);

  const backFromHistory = useCallback(() => {
    setPhase('exam-start');
  }, []);

  // 8. History (memoized; refreshes after delete)
  const [historyRefreshKey, triggerHistoryRefresh] = useStudyHistoryRefresh();
  const examHistory = useMemo(() => {
    if (!selection.selectedExamId) return null;
    return getExamHistorySummary(selection.selectedExamId);
  }, [selection.selectedExamId, historyRefreshKey]);

  const weaknessAnalysis = useMemo(() => {
    if (!selection.selectedExamId) return null;
    return getWeaknessAnalysis(selection.selectedExamId);
  }, [selection.selectedExamId]);

  const deleteExamAttempt = useCallback((attemptId: string) => {
    if (!selection.selectedExamId) return;
    deleteAttempt(selection.selectedExamId, attemptId);
    // Bump the refresh key so the history view re-fetches
    triggerHistoryRefresh();
  }, [selection.selectedExamId, triggerHistoryRefresh]);

  return {
    phase,
    selectedCategory: selection.selectedCategory,
    selectedExamId: selection.selectedExamId,
    selectedExamConfig: selection.selectedExamConfig,
    examMode: selection.examMode,
    selectedDomain: selection.selectedDomain,
    selectedTestSet: selection.selectedTestSet,
    questions,
    exam,
    timer,
    savedTests: savedTests.savedTests,
    filteredSavedTests: savedTests.savedTests.filter((t) => t.examId === selection.selectedExamId),
    domainStats: selection.domainStats,
    domains: selection.domains,
    theme,
    sectionDomainStats: selection.sectionDomainStats,
    showExitDialog: dialogs.showExitDialog,
    showSubmitDialog: dialogs.showSubmitDialog,
    totalQuestions: selection.totalQuestions,
    maxTestSets: selection.maxTestSets,
    examHistory,
    weaknessAnalysis,
    setExamMode: selection.setExamMode,
    setSelectedDomain: selection.setSelectedDomain,
    setSelectedTestSet: selection.setSelectedTestSet,
    setShowExitDialog: dialogs.openExit,
    closeExitDialog: dialogs.closeExit,
    setShowSubmitDialog: dialogs.openSubmit,
    closeSubmitDialog: dialogs.closeSubmit,
    themeMode,
    toggleThemeMode,
    examDuration,
    handleSelectCategory: goToCategory,
    handleSelectExam: goToExamStart,
    handleBackToHome: goToHome,
    handleBackToCategory: goBackToCategory,
    handleStartExam: startExam,
    handleResumeTest: resumeTest,
    handleSubmit: submitExam,
    handleConfirmSubmit: autoSubmit,
    handleSave: saveAndExit,
    handleExit: exit,
    handleLeave: leave,
    handleReview: review,
    handleReviewFlagged: reviewFlagged,
    handleReset: reset,
    deleteSavedTest: savedTests.deleteSavedTest,
    handleViewHistory: viewHistory,
    handleStudyDomain: studyDomain,
    handleBackFromHistory: backFromHistory,
    handleDeleteAttempt: deleteExamAttempt,
  };
}
