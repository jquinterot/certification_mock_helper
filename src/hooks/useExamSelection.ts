'use client';

import { useState, useCallback, useMemo } from 'react';
import type { ExamConfig } from '@/lib/exams/types';
import type { ExamMode, ShuffledQuestion } from '@/types';
import { getExamConfig } from '@/lib/exams';
import { getQuestions, getSectionQuestions, getDomainStats } from '@/lib/exams/loader';
import { shuffleQuestions } from '@/lib/questions/shuffle';
import { generateSessionSeed } from '@/lib/exam-duration';

const MAX_TEST_SETS: Record<string, number> = {
  'aws-ml': 4,
  'istqb-genai': 3,
  'istqb-foundation': 3,
};

const DEFAULT_TEST_SET = 1;

export interface SectionDomainStat {
  domain: string;
  set1Count: number;
  set2Count: number;
  set3Count: number;
}

export interface UseExamSelectionResult {
  selectedCategory: string;
  selectedExamId: string;
  selectedExamConfig: ExamConfig | null;
  examMode: ExamMode;
  selectedDomain: string;
  selectedTestSet: number;
  questionSeed: number;
  questions: ShuffledQuestion[];
  domainStats: ReturnType<typeof getDomainStats>;
  domains: string[];
  sectionDomainStats: SectionDomainStat[];
  totalQuestions: number;
  maxTestSets: number;
  setExamMode: (mode: ExamMode) => void;
  setSelectedDomain: (domain: string) => void;
  setSelectedTestSet: (set: number) => void;
  selectCategory: (category: string) => void;
  selectExam: (examId: string) => ExamConfig | null;
  clearExam: () => void;
  studyDomain: (domain: string) => void;
  resetSelections: () => void;
  regenerateSeed: () => void;
}

/**
 * Tracks the user's selections for which exam to take, which test set, and
 * which domain to focus on. Owns the question shuffle seed so a re-shuffle
 * produces a different question order for the same exam + test set.
 */
export function useExamSelection(): UseExamSelectionResult {
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [selectedExamId, setSelectedExamId] = useState<string>('');
  const [selectedExamConfig, setSelectedExamConfig] = useState<ExamConfig | null>(null);
  const [examMode, setExamMode] = useState<ExamMode>('full');
  const [selectedDomain, setSelectedDomain] = useState<string>('');
  const [selectedTestSet, setSelectedTestSet] = useState<number>(DEFAULT_TEST_SET);
  const [questionSeed, setQuestionSeed] = useState<number>(() => generateSessionSeed());

  const questions = useMemo(() => {
    if (!selectedExamId) return [];
    const rawQuestions =
      examMode === 'section' && selectedDomain
        ? getSectionQuestions(selectedExamId, selectedDomain, selectedTestSet)
        : getQuestions(selectedExamId, selectedTestSet);
    return shuffleQuestions(rawQuestions, questionSeed);
  }, [selectedExamId, selectedTestSet, examMode, selectedDomain, questionSeed]);

  const domainStats = useMemo(() => {
    if (!selectedExamId) return {};
    return getDomainStats(selectedExamId, selectedTestSet);
  }, [selectedExamId, selectedTestSet]);

  const domains = useMemo(() => Object.keys(domainStats), [domainStats]);

  const sectionDomainStats = useMemo<SectionDomainStat[]>(() => {
    if (!selectedExamConfig) return [];
    return selectedExamConfig.domains.map((domain) => ({
      domain,
      set1Count: getSectionQuestions(selectedExamId, domain, 1).length,
      set2Count: getSectionQuestions(selectedExamId, domain, 2).length,
      set3Count: getSectionQuestions(selectedExamId, domain, 3).length,
    }));
  }, [selectedExamId, selectedExamConfig]);

  const totalQuestions = questions.length;
  const maxTestSets = MAX_TEST_SETS[selectedExamId] ?? 2;

  const selectCategory = useCallback((category: string) => {
    setSelectedCategory(category);
  }, []);

  const selectExam = useCallback((examId: string): ExamConfig | null => {
    const config = getExamConfig(examId);
    setSelectedExamId(examId);
    setSelectedExamConfig(config || null);
    setExamMode('full');
    setSelectedDomain('');
    setSelectedTestSet(DEFAULT_TEST_SET);
    return config || null;
  }, []);

  const clearExam = useCallback(() => {
    setSelectedExamId('');
    setSelectedExamConfig(null);
  }, []);

  const studyDomain = useCallback((domain: string) => {
    setSelectedDomain(domain);
    setExamMode('section');
  }, []);

  const resetSelections = useCallback(() => {
    setExamMode('full');
    setSelectedDomain('');
    setSelectedTestSet(DEFAULT_TEST_SET);
  }, []);

  const regenerateSeed = useCallback(() => setQuestionSeed(generateSessionSeed()), []);

  return {
    selectedCategory,
    selectedExamId,
    selectedExamConfig,
    examMode,
    selectedDomain,
    selectedTestSet,
    questionSeed,
    questions,
    domainStats,
    domains,
    sectionDomainStats,
    totalQuestions,
    maxTestSets,
    setExamMode,
    setSelectedDomain,
    setSelectedTestSet,
    selectCategory,
    selectExam,
    clearExam,
    studyDomain,
    resetSelections,
    regenerateSeed,
  };
}
