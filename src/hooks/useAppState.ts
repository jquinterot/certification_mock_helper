import { useState, useCallback, useMemo, useEffect, useRef } from 'react';
import type { ExamConfig } from '@/lib/exams/types';
import type { AppPhase } from '@/types';
import { useExam } from '@/hooks/useExam';
import { useTimer } from '@/hooks/useTimer';
import { useSavedTests } from '@/hooks/useSavedTests';
import { getQuestions, getSectionQuestions, getDomainStats } from '@/lib/exams/loader';
import { getExamConfig } from '@/lib/exams';
import { getTheme } from '@/lib/theme';
import { getExamHistorySummary, getWeaknessAnalysis, deleteAttempt } from '@/lib/study-history';
import { shuffleQuestions } from '@/lib/questions/shuffle';

function generateSessionSeed(): number {
  return Math.floor(Math.random() * 1000000);
}

export function useAppState() {
  const [phase, setPhase] = useState<AppPhase>('home');
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [selectedExamId, setSelectedExamId] = useState<string>('');
  const [selectedExamConfig, setSelectedExamConfig] = useState<ExamConfig | null>(null);
  const [examMode, setExamMode] = useState<'full' | 'section'>('full');
  const [selectedDomain, setSelectedDomain] = useState<string>('');
  const [selectedTestSet, setSelectedTestSet] = useState<number>(1);
  const [questionSeed, setQuestionSeed] = useState<number>(() => generateSessionSeed());

  const questions = useMemo(() => {
    if (!selectedExamId) return [];
    const rawQuestions = examMode === 'section' && selectedDomain
      ? getSectionQuestions(selectedExamId, selectedDomain, selectedTestSet)
      : getQuestions(selectedExamId, selectedTestSet);
    return shuffleQuestions(rawQuestions, questionSeed);
  }, [selectedExamId, selectedTestSet, examMode, selectedDomain, questionSeed]);

  const exam = useExam(questions);
  const timer = useTimer();
  const { savedTests, addSavedTest, deleteSavedTest } = useSavedTests();

  const [showExitDialog, setShowExitDialog] = useState(false);
  const [showSubmitDialog, setShowSubmitDialog] = useState(false);
  const [currentSavedTestId, setCurrentSavedTestId] = useState<string | null>(null);
  const [themeMode, setThemeMode] = useState<'light' | 'dark'>('dark');
  const [historyRefreshKey, setHistoryRefreshKey] = useState(0);
  const [examDuration, setExamDuration] = useState(0);
  const autoSubmittedRef = useRef(false);

  const filteredSavedTests = useMemo(() => {
    return savedTests.filter((t) => t.examId === selectedExamId);
  }, [savedTests, selectedExamId]);

  const domainStats = useMemo(() => {
    if (!selectedExamId) return {};
    return getDomainStats(selectedExamId, selectedTestSet);
  }, [selectedExamId, selectedTestSet]);

  const domains = useMemo(() => Object.keys(domainStats), [domainStats]);

  const theme = useMemo(() => getTheme(selectedCategory, themeMode), [selectedCategory, themeMode]);

  const sectionDomainStats = useMemo(() => {
    if (!selectedExamConfig) return [];
    return selectedExamConfig.domains.map((domain) => {
      const q1 = getSectionQuestions(selectedExamId, domain, 1);
      const q2 = getSectionQuestions(selectedExamId, domain, 2);
      return {
        domain,
        set1Count: q1.length,
        set2Count: q2.length,
      };
    });
  }, [selectedExamId, selectedExamConfig]);

  const examHistory = useMemo(() => {
    if (!selectedExamId) return null;
    return getExamHistorySummary(selectedExamId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedExamId, historyRefreshKey]);

  const weaknessAnalysis = useMemo(() => {
    if (!selectedExamId) return null;
    return getWeaknessAnalysis(selectedExamId);
  }, [selectedExamId]);

  const handleSelectCategory = useCallback((category: string) => {
    setSelectedCategory(category);
    setPhase('category');
  }, []);

  const handleSelectExam = useCallback((examId: string) => {
    const config = getExamConfig(examId);
    setSelectedExamId(examId);
    setSelectedExamConfig(config || null);
    setExamMode('full');
    setSelectedDomain('');
    setSelectedTestSet(1);
    setPhase('exam-start');
  }, []);

  const handleBackToHome = useCallback(() => {
    setPhase('home');
    setSelectedCategory('');
    setSelectedExamId('');
    setSelectedExamConfig(null);
  }, []);

  const handleBackToCategory = useCallback(() => {
    setPhase('category');
    setSelectedExamId('');
    setSelectedExamConfig(null);
  }, []);

  const handleStartExam = useCallback(() => {
    setCurrentSavedTestId(null);
    autoSubmittedRef.current = false;
    setQuestionSeed(generateSessionSeed());
    const config = {
      mode: examMode,
      selectedDomain,
      testSet: selectedTestSet,
    };
    exam.start(config);
    timer.reset();
    timer.start();
    const totalSeconds = (selectedExamConfig?.durationMinutes ?? 60) * 60;
    const duration = examMode === 'section' && selectedExamConfig
      ? Math.max(900, Math.round(totalSeconds * questions.length / selectedExamConfig.questionCount))
      : totalSeconds;
    setExamDuration(duration);
    setPhase('exam');
  }, [exam, timer, examMode, selectedDomain, selectedTestSet, selectedExamConfig, questions.length]);

  const handleResumeTest = useCallback((savedTest: {
    id: string;
    mode: 'full' | 'section';
    selectedDomain: string;
    testSet: number;
    currentQuestion: number;
    answers: Record<number, number | number[]>;
    flaggedQuestions: number[];
    timer: number;
    questionCount: number;
    answeredCount: number;
    questionSeed: number;
    status: 'in-progress' | 'submitted';
  }) => {
    setExamMode(savedTest.mode);
    setSelectedDomain(savedTest.selectedDomain);
    setSelectedTestSet(savedTest.testSet);
    setQuestionSeed(savedTest.questionSeed || generateSessionSeed());
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
      autoSubmittedRef.current = false;
      const totalSeconds = (selectedExamConfig?.durationMinutes ?? 60) * 60;
      const duration = savedTest.mode === 'section' && selectedExamConfig
        ? Math.max(900, Math.round(totalSeconds * savedTest.questionCount / selectedExamConfig.questionCount))
        : totalSeconds;
      setExamDuration(duration);
      setPhase('exam');
    }
  }, [exam, timer, selectedExamConfig]);

  const handleSubmit = useCallback(() => {
    setShowSubmitDialog(true);
  }, []);

  const handleConfirmSubmit = useCallback(() => {
    timer.pause();
    exam.submit();
    setShowSubmitDialog(false);
    if (currentSavedTestId) {
      deleteSavedTest(currentSavedTestId);
      setCurrentSavedTestId(null);
    }
    const savedTest = {
      id: `${Date.now()}-${Math.random().toString(36).substring(2, 9)}`,
      examId: selectedExamId,
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
      questionSeed,
      status: 'submitted' as const,
    };
    addSavedTest(savedTest);
    setPhase('results');
  }, [exam, timer, currentSavedTestId, deleteSavedTest, addSavedTest, questionSeed, selectedExamId]);

  const handleSave = useCallback(() => {
    const savedTest = {
      id: `${Date.now()}-${Math.random().toString(36).substring(2, 9)}`,
      examId: selectedExamId,
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
      questionSeed,
      status: 'in-progress' as const,
    };
    addSavedTest(savedTest);
    timer.pause();
    exam.reset();
    setShowExitDialog(false);
    setPhase('exam-start');
  }, [exam, timer, addSavedTest, questionSeed, selectedExamId]);

  const handleExit = useCallback(() => {
    if (exam.showResults) {
      exam.reset();
      setPhase('exam-start');
    } else {
      setShowExitDialog(true);
    }
  }, [exam]);

  const handleLeave = useCallback(() => {
    timer.pause();
    exam.reset();
    setShowExitDialog(false);
    setPhase('exam-start');
  }, [exam, timer]);

  const handleReview = useCallback(() => {
    setPhase('review');
    exam.review();
  }, [exam]);

  const handleReviewFlagged = useCallback(() => {
    setPhase('review');
    exam.reviewFlagged();
  }, [exam]);

  const handleReset = useCallback(() => {
    timer.reset();
    exam.reset();
    setExamMode('full');
    setSelectedDomain('');
    setSelectedTestSet(1);
  }, [exam, timer]);

  const handleViewHistory = useCallback(() => {
    setPhase('history');
  }, []);

  const handleStudyDomain = useCallback((domain: string) => {
    setSelectedDomain(domain);
    setExamMode('section');
    setPhase('exam-start');
  }, []);

  const handleBackFromHistory = useCallback(() => {
    setPhase('exam-start');
  }, []);

  const handleDeleteAttempt = useCallback((attemptId: string) => {
    if (!selectedExamId) return;
    deleteAttempt(selectedExamId, attemptId);
    setHistoryRefreshKey((k) => k + 1);
  }, [selectedExamId]);

  const toggleThemeMode = useCallback(() => {
    setThemeMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
  }, []);

  useEffect(() => {
    if (
      phase === 'exam' &&
      examDuration > 0 &&
      timer.timer >= examDuration &&
      !exam.showResults &&
      !autoSubmittedRef.current
    ) {
      autoSubmittedRef.current = true;
      handleConfirmSubmit();
    }
  }, [timer.timer, examDuration, phase, exam.showResults, handleConfirmSubmit]);

  const totalQuestions = questions.length;

  const maxTestSets = selectedExamId === 'aws-ml' ? 4 : selectedExamId === 'istqb-genai' ? 3 : 2;

  return {
    phase,
    selectedCategory,
    selectedExamId,
    selectedExamConfig,
    examMode,
    selectedDomain,
    selectedTestSet,
    questions,
    exam,
    timer,
    savedTests,
    filteredSavedTests,
    domainStats,
    domains,
    theme,
    sectionDomainStats,
    showExitDialog,
    showSubmitDialog,
    totalQuestions,
    maxTestSets,
    examHistory,
    weaknessAnalysis,
    setExamMode,
    setSelectedDomain,
    setSelectedTestSet,
    setShowExitDialog,
    setShowSubmitDialog,
    themeMode,
    toggleThemeMode,
    examDuration,
    handleSelectCategory,
    handleSelectExam,
    handleBackToHome,
    handleBackToCategory,
    handleStartExam,
    handleResumeTest,
    handleSubmit,
    handleConfirmSubmit,
    handleSave,
    handleExit,
    handleLeave,
    handleReview,
    handleReviewFlagged,
    handleReset,
    deleteSavedTest,
    handleViewHistory,
    handleStudyDomain,
    handleBackFromHistory,
    handleDeleteAttempt,
  };
}
