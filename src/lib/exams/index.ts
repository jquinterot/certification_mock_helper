import { examConfig as awsMlConfig } from './aws-ml/config';
import { examConfig as awsSaaConfig } from './aws-saa/config';
import { examConfig as istqbConfig } from './istqb-foundation/config';
import { examConfig as istqbGenaiConfig } from './istqb-genai/config';
import type { ExamConfig } from './types';

export const allExams: ExamConfig[] = [awsMlConfig, awsSaaConfig, istqbConfig, istqbGenaiConfig];

export const getExamConfig = (id: string): ExamConfig | undefined => {
  return allExams.find((exam) => exam.id === id);
};

export const getExamsByCategory = (category: string): ExamConfig[] => {
  return allExams.filter((exam) => exam.category === category);
};

export const getCategories = (): string[] => {
  return Array.from(new Set(allExams.map((exam) => exam.category)));
};
