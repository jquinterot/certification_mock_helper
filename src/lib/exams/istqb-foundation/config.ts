import type { ExamConfig } from '../types';

export const examConfig: ExamConfig = {
  id: 'istqb-foundation',
  name: 'ISTQB Foundation Level',
  shortName: 'Practice Exam (CTFL v4.0.1)',
  category: 'ISTQB Testing',
  description: 'ISTQB Certified Tester Foundation Level (CTFL v4.0)',
  questionCount: 40,
  durationMinutes: 60,
  passingScore: 65,
  domains: [
    'Chapter 1: Fundamentals of Testing',
    'Chapter 2: Testing Throughout the SDLC',
    'Chapter 3: Static Testing',
    'Chapter 4: Test Techniques',
    'Chapter 5: Test Management',
    'Chapter 6: Test Tools and Automation',
  ],
  icon: 'Bug',
};
