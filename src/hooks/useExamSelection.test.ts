import { describe, it, expect, beforeEach, vi } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useExamSelection } from './useExamSelection';

vi.mock('@/lib/exam-duration', async () => {
  const actual = await vi.importActual<typeof import('@/lib/exam-duration')>('@/lib/exam-duration');
  let counter = 100;
  return {
    ...actual,
    generateSessionSeed: () => counter++,
  };
});

beforeEach(() => {
  window.localStorage.clear();
});

describe('useExamSelection', () => {
  it('starts with empty selections and no questions', () => {
    const { result } = renderHook(() => useExamSelection());
    expect(result.current.selectedExamId).toBe('');
    expect(result.current.selectedExamConfig).toBeNull();
    expect(result.current.examMode).toBe('full');
    expect(result.current.selectedDomain).toBe('');
    expect(result.current.selectedTestSet).toBe(1);
    expect(result.current.questions).toEqual([]);
    expect(result.current.totalQuestions).toBe(0);
  });

  it('selectExam sets the exam id, config, and resets mode/domain/testSet', () => {
    const { result } = renderHook(() => useExamSelection());
    act(() => {
      result.current.selectExam('istqb-foundation');
    });
    expect(result.current.selectedExamId).toBe('istqb-foundation');
    expect(result.current.selectedExamConfig?.id).toBe('istqb-foundation');
    expect(result.current.examMode).toBe('full');
    expect(result.current.selectedDomain).toBe('');
    expect(result.current.selectedTestSet).toBe(1);
    expect(result.current.maxTestSets).toBe(3);
  });

  it('selectExam returns null for an unknown id', () => {
    const { result } = renderHook(() => useExamSelection());
    let returned: unknown;
    act(() => {
      returned = result.current.selectExam('does-not-exist');
    });
    expect(returned).toBeNull();
    expect(result.current.selectedExamConfig).toBeNull();
  });

  it('selecting an exam populates questions and domain stats', () => {
    const { result } = renderHook(() => useExamSelection());
    act(() => {
      result.current.selectExam('istqb-foundation');
    });
    expect(result.current.questions.length).toBeGreaterThan(0);
    expect(result.current.domains.length).toBeGreaterThan(0);
    expect(Object.keys(result.current.domainStats).length).toBeGreaterThan(0);
  });

  it('sectionDomainStats lists each domain with counts per set', () => {
    const { result } = renderHook(() => useExamSelection());
    act(() => {
      result.current.selectExam('istqb-foundation');
    });
    const stats = result.current.sectionDomainStats;
    expect(stats.length).toBeGreaterThan(0);
    stats.forEach((s) => {
      expect(s).toHaveProperty('set1Count');
      expect(s).toHaveProperty('set2Count');
      expect(s).toHaveProperty('set3Count');
    });
  });

  it('studyDomain switches to section mode and sets the domain', () => {
    const { result } = renderHook(() => useExamSelection());
    act(() => {
      result.current.selectExam('istqb-foundation');
    });
    const firstDomain = result.current.domains[0];
    act(() => result.current.studyDomain(firstDomain));
    expect(result.current.examMode).toBe('section');
    expect(result.current.selectedDomain).toBe(firstDomain);
    expect(result.current.questions.every((q) => q.domain === firstDomain)).toBe(true);
  });

  it('resetSelections returns to full mode with default test set', () => {
    const { result } = renderHook(() => useExamSelection());
    act(() => {
      result.current.selectExam('istqb-foundation');
    });
    act(() => result.current.studyDomain(result.current.domains[0]));
    act(() => {
      result.current.setSelectedTestSet(2);
    });
    act(() => result.current.resetSelections());
    expect(result.current.examMode).toBe('full');
    expect(result.current.selectedDomain).toBe('');
    expect(result.current.selectedTestSet).toBe(1);
  });

  it('clearExam resets examId and config but keeps category/mode', () => {
    const { result } = renderHook(() => useExamSelection());
    act(() => {
      result.current.selectCategory('AWS');
    });
    act(() => {
      result.current.selectExam('istqb-foundation');
    });
    act(() => result.current.clearExam());
    expect(result.current.selectedExamId).toBe('');
    expect(result.current.selectedExamConfig).toBeNull();
    expect(result.current.selectedCategory).toBe('AWS');
  });

  it('regenerateSeed produces a new seed that reorders the options within each question', () => {
    const { result } = renderHook(() => useExamSelection());
    act(() => {
      result.current.selectExam('istqb-foundation');
    });
    const seedBefore = result.current.questionSeed;
    const firstOptionsBefore = [...result.current.questions[0].shuffledOptions];
    act(() => result.current.regenerateSeed());
    const seedAfter = result.current.questionSeed;
    const firstOptionsAfter = [...result.current.questions[0].shuffledOptions];
    expect(seedAfter).not.toBe(seedBefore);
    expect(JSON.stringify(firstOptionsBefore)).not.toEqual(JSON.stringify(firstOptionsAfter));
  });

  it('falls back to maxTestSets=2 for an unknown exam', () => {
    const { result } = renderHook(() => useExamSelection());
    act(() => {
      result.current.selectExam('does-not-exist');
    });
    expect(result.current.maxTestSets).toBe(2);
  });

  it('setExamMode and setSelectedDomain update the state', () => {
    const { result } = renderHook(() => useExamSelection());
    act(() => result.current.setExamMode('section'));
    expect(result.current.examMode).toBe('section');
    act(() => result.current.setSelectedDomain('Chapter 1: Fundamentals of Testing'));
    expect(result.current.selectedDomain).toBe('Chapter 1: Fundamentals of Testing');
  });

  it('setSelectedTestSet updates the active test set', () => {
    const { result } = renderHook(() => useExamSelection());
    act(() => {
      result.current.selectExam('istqb-foundation');
    });
    act(() => result.current.setSelectedTestSet(2));
    expect(result.current.selectedTestSet).toBe(2);
  });
});
