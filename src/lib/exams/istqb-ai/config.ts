import type { ExamConfig } from '../types';

export const examConfig: ExamConfig = {
  id: 'istqb-ai',
  name: 'ISTQB AI Testing',
  shortName: 'Practice Exam (CT-AI v1.0)',
  category: 'ISTQB Testing',
  description: 'ISTQB Certified Tester - AI Testing (CT-AI v1.0)',
  questionCount: 40,
  durationMinutes: 60,
  passingScore: 65,
  testSetCount: 2,
  domains: [
    'Domain 1: Introduction to AI and Testing',
    'Domain 2: Testing AI-Based Systems',
    'Domain 3: Using AI for Testing',
  ],
  icon: 'Brain',
};