export const EXAM_IDS = {
  AWS_ML: 'aws-ml',
  AWS_SAA: 'aws-saa',
  ISTQB_FOUNDATION: 'istqb-foundation',
  ISTQB_GENAI: 'istqb-genai',
  ISTQB_AI: 'istqb-ai',
} as const;

export const ANSWER_OPTIONS = ['a', 'b', 'c', 'd'] as const;
export type AnswerOption = typeof ANSWER_OPTIONS[number];

export const CATEGORIES = {
  AWS: 'AWS Cloud',
  ISTQB: 'ISTQB Testing',
} as const;
