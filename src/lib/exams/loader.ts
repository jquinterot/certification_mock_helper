import { questions as awsMlQuestions1 } from './aws-ml/questions';
import { questions2 as awsMlQuestions2 } from './aws-ml/questions2';
import { additionalQuestions as awsMlQuestions3 } from './aws-ml/additional-questions';
import { questions as awsMlQuestions4, questions2 as awsMlQuestions4Set2 } from './aws-ml/questions4';
import { questions as awsSaaQuestions1 } from './aws-saa/questions';
import { questions2 as awsSaaQuestions2 } from './aws-saa/questions2';
import { questions as istqbQuestions1 } from './istqb-foundation/questions';
import { questions2 as istqbQuestions2 } from './istqb-foundation/questions2';
import { questions as istqbGenaiQuestions1, questions2 as istqbGenaiQuestions2 } from './istqb-genai/questions';
import { questions as istqbGenaiQuestions3 } from './istqb-genai/questions3';
import type { ExamQuestion } from '@/types';

// AWS ML section questions
import { questions as awsMlD1Q1 } from './aws-ml/sections/domain1';
import { questions2 as awsMlD1Q2 } from './aws-ml/sections/domain1';
import { questions as awsMlD2Q1 } from './aws-ml/sections/domain2';
import { questions2 as awsMlD2Q2 } from './aws-ml/sections/domain2';
import { questions as awsMlD3Q1 } from './aws-ml/sections/domain3';
import { questions2 as awsMlD3Q2 } from './aws-ml/sections/domain3';
import { questions as awsMlD4Q1 } from './aws-ml/sections/domain4';
import { questions2 as awsMlD4Q2 } from './aws-ml/sections/domain4';

// AWS SAA section questions
import { questions as awsSaaD1Q1 } from './aws-saa/sections/domain1';
import { questions2 as awsSaaD1Q2 } from './aws-saa/sections/domain1';
import { questions as awsSaaD2Q1 } from './aws-saa/sections/domain2';
import { questions2 as awsSaaD2Q2 } from './aws-saa/sections/domain2';
import { questions as awsSaaD3Q1 } from './aws-saa/sections/domain3';
import { questions2 as awsSaaD3Q2 } from './aws-saa/sections/domain3';
import { questions as awsSaaD4Q1 } from './aws-saa/sections/domain4';
import { questions2 as awsSaaD4Q2 } from './aws-saa/sections/domain4';

// ISTQB Foundation section questions
import { questions as istqbC1Q1 } from './istqb-foundation/sections/chapter1';
import { questions2 as istqbC1Q2 } from './istqb-foundation/sections/chapter1';
import { questions as istqbC2Q1 } from './istqb-foundation/sections/chapter2';
import { questions2 as istqbC2Q2 } from './istqb-foundation/sections/chapter2';
import { questions as istqbC3Q1 } from './istqb-foundation/sections/chapter3';
import { questions2 as istqbC3Q2 } from './istqb-foundation/sections/chapter3';
import { questions as istqbC4Q1 } from './istqb-foundation/sections/chapter4';
import { questions2 as istqbC4Q2 } from './istqb-foundation/sections/chapter4';
import { questions as istqbC5Q1 } from './istqb-foundation/sections/chapter5';
import { questions2 as istqbC5Q2 } from './istqb-foundation/sections/chapter5';
import { questions as istqbC6Q1 } from './istqb-foundation/sections/chapter6';
import { questions2 as istqbC6Q2 } from './istqb-foundation/sections/chapter6';

// ISTQB GenAI section questions
import { questions as istqbGenaiC1Q1 } from './istqb-genai/sections/chapter1';
import { questions2 as istqbGenaiC1Q2 } from './istqb-genai/sections/chapter1';
import { questions as istqbGenaiC2Q1 } from './istqb-genai/sections/chapter2';
import { questions2 as istqbGenaiC2Q2 } from './istqb-genai/sections/chapter2';
import { questions as istqbGenaiC3Q1 } from './istqb-genai/sections/chapter3';
import { questions2 as istqbGenaiC3Q2 } from './istqb-genai/sections/chapter3';
import { questions as istqbGenaiC4Q1 } from './istqb-genai/sections/chapter4';
import { questions2 as istqbGenaiC4Q2 } from './istqb-genai/sections/chapter4';
import { questions as istqbGenaiC5Q1 } from './istqb-genai/sections/chapter5';
import { questions2 as istqbGenaiC5Q2 } from './istqb-genai/sections/chapter5';
import { questions as istqbGenaiC1Q3 } from './istqb-genai/sections/chapter1_q3';
import { questions as istqbGenaiC2Q3 } from './istqb-genai/sections/chapter2_q3';
import { questions as istqbGenaiC3Q3 } from './istqb-genai/sections/chapter3_q3';
import { questions as istqbGenaiC4Q3 } from './istqb-genai/sections/chapter4_q3';
import { questions as istqbGenaiC5Q3 } from './istqb-genai/sections/chapter5_q3';

export function getQuestions(examId: string, testSet: number): ExamQuestion[] {
  if (examId === 'aws-ml') {
    if (testSet === 1) return awsMlQuestions1;
    if (testSet === 2) return awsMlQuestions2;
    if (testSet === 3) return awsMlQuestions3;
    if (testSet === 4) return [...awsMlQuestions4, ...awsMlQuestions4Set2];
    return awsMlQuestions1;
  }
  if (examId === 'aws-saa') {
    return testSet === 1 ? awsSaaQuestions1 : awsSaaQuestions2;
  }
  if (examId === 'istqb-foundation') {
    return testSet === 1 ? istqbQuestions1 : istqbQuestions2;
  }
  if (examId === 'istqb-genai') {
    if (testSet === 1) return istqbGenaiQuestions1;
    if (testSet === 2) return istqbGenaiQuestions2;
    if (testSet === 3) return istqbGenaiQuestions3;
    return istqbGenaiQuestions1;
  }
  return awsMlQuestions1;
}

export function getSectionQuestions(examId: string, domain: string, testSet: number): ExamQuestion[] {
  const sectionMap: Record<string, Record<string, Record<number, ExamQuestion[]>>> = {
    'aws-ml': {
      'Domain 1: Data Preparation for ML': { 1: awsMlD1Q1, 2: awsMlD1Q2 },
      'Domain 2: ML Model Development': { 1: awsMlD2Q1, 2: awsMlD2Q2 },
      'Domain 3: Deployment and Orchestration': { 1: awsMlD3Q1, 2: awsMlD3Q2 },
      'Domain 4: Monitoring, Maintenance, and Security': { 1: awsMlD4Q1, 2: awsMlD4Q2 },
    },
    'aws-saa': {
      'Domain 1: Design Secure Architectures': { 1: awsSaaD1Q1, 2: awsSaaD1Q2 },
      'Domain 2: Design Resilient Architectures': { 1: awsSaaD2Q1, 2: awsSaaD2Q2 },
      'Domain 3: Design High-Performing Architectures': { 1: awsSaaD3Q1, 2: awsSaaD3Q2 },
      'Domain 4: Design Cost-Optimized Architectures': { 1: awsSaaD4Q1, 2: awsSaaD4Q2 },
    },
    'istqb-foundation': {
      'Chapter 1: Fundamentals of Testing': { 1: istqbC1Q1, 2: istqbC1Q2 },
      'Chapter 2: Testing Throughout the SDLC': { 1: istqbC2Q1, 2: istqbC2Q2 },
      'Chapter 3: Static Testing': { 1: istqbC3Q1, 2: istqbC3Q2 },
      'Chapter 4: Test Techniques': { 1: istqbC4Q1, 2: istqbC4Q2 },
      'Chapter 5: Test Management': { 1: istqbC5Q1, 2: istqbC5Q2 },
      'Chapter 6: Test Tools and Automation': { 1: istqbC6Q1, 2: istqbC6Q2 },
    },
    'istqb-genai': {
      'Chapter 1: Introduction to GenAI for Testing': { 1: istqbGenaiC1Q1, 2: istqbGenaiC1Q2, 3: istqbGenaiC1Q3 },
      'Chapter 2: Prompt Engineering for Testing': { 1: istqbGenaiC2Q1, 2: istqbGenaiC2Q2, 3: istqbGenaiC2Q3 },
      'Chapter 3: Managing Risks of GenAI in Testing': { 1: istqbGenaiC3Q1, 2: istqbGenaiC3Q2, 3: istqbGenaiC3Q3 },
      'Chapter 4: LLM-Powered Test Infrastructure': { 1: istqbGenaiC4Q1, 2: istqbGenaiC4Q2, 3: istqbGenaiC4Q3 },
      'Chapter 5: Deploying and Integrating GenAI': { 1: istqbGenaiC5Q1, 2: istqbGenaiC5Q2, 3: istqbGenaiC5Q3 },
    },
  };

  const examSections = sectionMap[examId];
  if (!examSections) return [];

  const domainSections = examSections[domain];
  if (!domainSections) return [];

  return domainSections[testSet] || [];
}

export function getDomainStats(examId: string, testSet: number): Record<string, number> {
  const questions = getQuestions(examId, testSet);
  const stats: Record<string, number> = {};
  questions.forEach((q) => {
    stats[q.domain] = (stats[q.domain] || 0) + 1;
  });
  return stats;
}

export function getSectionDomainStats(examId: string, domain: string): Record<string, number> {
  const q1 = getSectionQuestions(examId, domain, 1);
  const q2 = getSectionQuestions(examId, domain, 2);
  return {
    [domain]: q1.length + q2.length,
  };
}
