import type { ExamConfig } from '../types';

export const examConfig: ExamConfig = {
  id: 'aws-ml',
  name: 'AWS ML Engineer Associate',
  shortName: 'Practice Exam (MLA-C01)',
  category: 'AWS Cloud',
  description: 'AWS Certified Machine Learning Engineer - Associate (MLA-C01)',
  questionCount: 65,
  durationMinutes: 130,
  passingScore: 72,
  testSetCount: 4,
  domains: [
    'Domain 1: Data Preparation for ML',
    'Domain 2: ML Model Development',
    'Domain 3: Deployment and Orchestration',
    'Domain 4: Monitoring, Maintenance, and Security',
  ],
  icon: 'Brain',
};
