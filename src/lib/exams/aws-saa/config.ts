import type { ExamConfig } from '../types';

export const examConfig: ExamConfig = {
  id: 'aws-saa',
  name: 'AWS Solutions Architect Associate',
  shortName: 'Practice Exam (SAA-C03)',
  category: 'AWS Cloud',
  description: 'AWS Certified Solutions Architect - Associate (SAA-C03)',
  questionCount: 65,
  durationMinutes: 130,
  passingScore: 72,
  domains: [
    'Domain 1: Design Secure Architectures',
    'Domain 2: Design Resilient Architectures',
    'Domain 3: Design High-Performing Architectures',
    'Domain 4: Design Cost-Optimized Architectures',
  ],
  icon: 'Cloud',
};
