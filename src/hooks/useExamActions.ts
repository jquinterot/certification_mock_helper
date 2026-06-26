import { useCallback } from 'react';
import type { UseExamStateReturn } from './useExamState';
import type { ExamRuntimeConfig } from '@/types';

const DEFAULT_CONFIG: ExamRuntimeConfig = { mode: 'full', selectedDomain: '', testSet: 1 };

export function useExamActions(state: UseExamStateReturn) {
  const {
    activeQuestions,
    setPhase,
    setCurrentQuestion,
    setAnswers,
    setShowExplanation,
    setFlaggedQuestions,
    setShowResults,
    setConfig,
    configRef,
  } = state;

  const applyConfig = useCallback(
    (newConfig: ExamRuntimeConfig) => {
      setConfig(newConfig);
      configRef.current = newConfig;
    },
    [setConfig, configRef]
  );

  const resetTransientState = useCallback(() => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowExplanation({});
    setFlaggedQuestions(new Set());
    setShowResults(false);
  }, [setCurrentQuestion, setAnswers, setShowExplanation, setFlaggedQuestions, setShowResults]);

  const start = useCallback(
    (newConfig: ExamRuntimeConfig) => {
      applyConfig(newConfig);
      resetTransientState();
      setPhase('exam');
    },
    [applyConfig, resetTransientState, setPhase]
  );

  const resume = useCallback(
    (
      newConfig: ExamRuntimeConfig,
      newCurrentQuestion: number,
      newAnswers: Record<number, number | number[]>,
      newFlaggedQuestions: number[]
    ) => {
      applyConfig(newConfig);
      setCurrentQuestion(newCurrentQuestion);
      setAnswers(newAnswers);
      setShowExplanation({});
      setFlaggedQuestions(new Set(newFlaggedQuestions));
      setShowResults(false);
      setPhase('exam');
    },
    [
      applyConfig,
      setCurrentQuestion,
      setAnswers,
      setShowExplanation,
      setFlaggedQuestions,
      setShowResults,
      setPhase,
    ]
  );

  const reset = useCallback(() => {
    setPhase('idle');
    resetTransientState();
    setConfig(DEFAULT_CONFIG);
  }, [setPhase, resetTransientState, setConfig]);

  const submit = useCallback(() => {
    setPhase('results');
    setShowResults(true);
  }, [setPhase, setShowResults]);

  const review = useCallback(() => {
    setPhase('review');
    setCurrentQuestion(0);
    setShowExplanation(
      activeQuestions.reduce((acc, _, idx) => ({ ...acc, [idx]: true }), {})
    );
  }, [activeQuestions, setPhase, setCurrentQuestion, setShowExplanation]);

  const reviewFlagged = useCallback(() => {
    const flaggedArray = Array.from(state.flaggedQuestions);
    if (flaggedArray.length === 0) return;
    setPhase('review');
    setCurrentQuestion(flaggedArray[0]);
    setShowExplanation(
      activeQuestions.reduce((acc, _, idx) => ({ ...acc, [idx]: true }), {})
    );
  }, [state.flaggedQuestions, activeQuestions, setPhase, setCurrentQuestion, setShowExplanation]);

  const selectAnswer = useCallback((questionIndex: number, answerIndex: number) => {
    if (state.showResults) return;
    const question = activeQuestions[questionIndex];
    const isMultiple = Array.isArray(question?.correctAnswer);

    setAnswers((prev) => {
      const current = prev[questionIndex];
      if (isMultiple) {
        const currentArray = Array.isArray(current) ? current : [];
        const newArray = currentArray.includes(answerIndex)
          ? currentArray.filter((a) => a !== answerIndex)
          : [...currentArray, answerIndex].sort((a, b) => a - b);
        return { ...prev, [questionIndex]: newArray };
      } else {
        return { ...prev, [questionIndex]: answerIndex };
      }
    });
    setShowExplanation((prev) => ({ ...prev, [questionIndex]: true }));
  }, [state.showResults, activeQuestions, setAnswers, setShowExplanation]);

  const toggleFlag = useCallback((questionIndex: number) => {
    setFlaggedQuestions((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(questionIndex)) {
        newSet.delete(questionIndex);
      } else {
        newSet.add(questionIndex);
      }
      return newSet;
    });
  }, [setFlaggedQuestions]);

  const toggleExplanation = useCallback((questionIndex: number) => {
    setShowExplanation((prev) => ({ ...prev, [questionIndex]: !prev[questionIndex] }));
  }, [setShowExplanation]);

  const goToQuestion = useCallback((index: number) => {
    setCurrentQuestion(index);
  }, [setCurrentQuestion]);

  const goToPrevious = useCallback(() => {
    setCurrentQuestion((prev) => Math.max(0, prev - 1));
  }, [setCurrentQuestion]);

  const goToNext = useCallback(() => {
    setCurrentQuestion((prev) => Math.min(activeQuestions.length - 1, prev + 1));
  }, [activeQuestions.length, setCurrentQuestion]);

  const goToNextFlagged = useCallback(() => {
    const flaggedArray = Array.from(state.flaggedQuestions).sort((a, b) => a - b);
    const nextFlagged = flaggedArray.find((idx) => idx > state.currentQuestion);
    if (nextFlagged !== undefined) {
      setCurrentQuestion(nextFlagged);
    } else if (flaggedArray.length > 0) {
      setCurrentQuestion(flaggedArray[0]);
    }
  }, [state.flaggedQuestions, state.currentQuestion, setCurrentQuestion]);

  return {
    start,
    resume,
    reset,
    submit,
    review,
    reviewFlagged,
    selectAnswer,
    toggleFlag,
    toggleExplanation,
    goToQuestion,
    goToPrevious,
    goToNext,
    goToNextFlagged,
  };
}
