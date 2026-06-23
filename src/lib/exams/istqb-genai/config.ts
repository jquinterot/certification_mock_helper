import type { ExamConfig } from '../types';

export const examConfig: ExamConfig = {
  id: 'istqb-genai',
  name: 'ISTQB Testing with Generative AI',
  shortName: 'Practice Exam (CT-GenAI v1.0)',
  category: 'ISTQB Testing',
  description: 'ISTQB Certified Tester - Testing with Generative AI (CT-GenAI v1.0)',
  questionCount: 40,
  durationMinutes: 60,
  passingScore: 65,
  domains: [
    'Chapter 1: Introduction to GenAI for Testing',
    'Chapter 2: Prompt Engineering for Testing',
    'Chapter 3: Managing Risks of GenAI in Testing',
    'Chapter 4: LLM-Powered Test Infrastructure',
    'Chapter 5: Deploying and Integrating GenAI',
  ],
  icon: 'Bug',
};