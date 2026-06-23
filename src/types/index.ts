export interface ExamQuestion {
  id: number;
  domain: string;
  question: string;
  options: string[];
  correctAnswer: number | number[];
  correctAnswers?: number[];
  explanation: string;
}

export interface ShuffledQuestion extends ExamQuestion {
  shuffledOptions: string[];
  shuffledCorrectIndex: number | number[];
}

export interface ExamMetadataConfig {
  id: string;
  name: string;
  shortName: string;
  category: string;
  description: string;
  questionCount: number;
  durationMinutes: number;
  passingScore: number;
  domains: string[];
  icon: string;
}

export interface ExamRuntimeConfig {
  mode: 'full' | 'section';
  selectedDomain: string;
  testSet: number;
}

export interface Score {
  correct: number;
  total: number;
  percentage: number;
}

export interface DomainScore {
  domain: string;
  correct: number;
  total: number;
  percentage: number;
}

export interface SavedTest {
  id: string;
  examId: string;
  timestamp: number;
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
}

export type AppPhase = 'idle' | 'home' | 'category' | 'exam-start' | 'exam' | 'results' | 'review' | 'history';
export type ExamMode = 'full' | 'section';

export interface ExamAttempt {
  id: string;
  examId: string;
  testSet: number;
  mode: 'full' | 'section';
  selectedDomain?: string;
  score: number;
  totalQuestions: number;
  percentage: number;
  passed: boolean;
  domainScores: DomainScore[];
  timeElapsed: number;
  completedAt: number;
  answers: Record<number, number | number[]>;
}

export interface ExamHistory {
  examId: string;
  attempts: ExamAttempt[];
  bestScore: number;
  averageScore: number;
  totalAttempts: number;
  lastAttempt: number | null;
}

export interface QuestionAnalytics {
  questionId: number;
  examId: string;
  timesSeen: number;
  timesCorrect: number;
  lastSeen: number;
  difficulty: 'easy' | 'medium' | 'hard';
}

export interface WeaknessAnalysis {
  examId: string;
  weakestDomains: {
    domain: string;
    averageScore: number;
    questionCount: number;
    missedQuestionIds: number[];
  }[];
  recommendedStudyOrder: string[];
}

export interface DomainStudyGuide {
  domain: string;
  weight: number;
  keyTopics: string[];
  totalQuestions: number;
  averageDifficulty: number;
  resources: string[];
}
