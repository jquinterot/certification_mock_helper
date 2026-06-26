import type { ExamQuestion, ShuffledQuestion, SavedTest, ExamAttempt } from '@/types';

let counter = 0;
const nextId = (): number => ++counter;

export function makeQuestion(overrides: Partial<ExamQuestion> = {}): ExamQuestion {
  const id = overrides.id ?? nextId();
  return {
    id,
    domain: 'Chapter 1: Test Domain',
    question: `Sample question ${id}?`,
    options: ['Option A', 'Option B', 'Option C', 'Option D'],
    correctAnswer: 0,
    explanation: 'Because option A is the correct answer.',
    ...overrides,
  };
}

export function makeShuffledQuestion(overrides: Partial<ShuffledQuestion> = {}): ShuffledQuestion {
  const base = makeQuestion(overrides);
  return {
    ...base,
    shuffledOptions: [...base.options],
    shuffledCorrectIndex: base.correctAnswer,
    ...overrides,
  } as ShuffledQuestion;
}

export function makeSavedTest(overrides: Partial<SavedTest> = {}): SavedTest {
  return {
    id: `saved-${nextId()}`,
    examId: 'aws-ml',
    timestamp: Date.now(),
    mode: 'full',
    selectedDomain: '',
    testSet: 1,
    currentQuestion: 0,
    answers: {},
    flaggedQuestions: [],
    timer: 0,
    questionCount: 5,
    answeredCount: 0,
    questionSeed: 12345,
    status: 'in-progress',
    ...overrides,
  };
}

export function makeAttempt(overrides: Partial<ExamAttempt> = {}): ExamAttempt {
  return {
    id: `attempt-${nextId()}`,
    examId: 'aws-ml',
    testSet: 1,
    mode: 'full',
    selectedDomain: '',
    score: 8,
    totalQuestions: 10,
    percentage: 80,
    passed: true,
    domainScores: [
      { domain: 'Chapter 1', correct: 4, total: 5, percentage: 80 },
    ],
    timeElapsed: 1200,
    completedAt: Date.now(),
    answers: {},
    ...overrides,
  };
}
