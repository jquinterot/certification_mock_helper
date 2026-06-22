import type { ExamQuestion } from '@/types';

export const questions: ExamQuestion[] = [
  {
    id: 1,
    domain: "Chapter 3: Managing Risks of GenAI in Testing",
    question: "What is 'data poisoning' in the context of LLMs used for testing and how can it affect test case quality?",
    options: [
      "An attacker corrupts the training data to make the model produce incorrect or biased test cases",
      "The model's output is poisoned by high temperature settings",
      "Test data is physically destroyed in storage",
      "The prompt contains toxic language"
    ],
    correctAnswer: 0,
    explanation: "Data poisoning involves an attacker injecting malicious or biased data into the LLM's training corpus. This can cause the model to generate systematically incorrect or biased test cases, potentially skipping critical test scenarios or introducing false positives."
  },
  {
    id: 2,
    domain: "Chapter 3: Managing Risks of GenAI in Testing",
    question: "A testing team notices that their LLM-generated test cases for a healthcare application consistently miss edge cases related to elderly patients. What type of bias is this and what is the best mitigation?",
    options: [
      "Measurement bias; fix the evaluation metrics",
      "Representation bias in training data; add explicit constraints for elderly patient scenarios and augment with diverse test data",
      "Temporal bias; wait for a model update",
      "Spatial bias; use a different geographic API endpoint"
    ],
    correctAnswer: 1,
    explanation: "This is representation bias—elderly patients are underrepresented in the model's training data. The best mitigation is adding explicit prompt constraints (e.g., 'include test cases for patients aged 65+') and augmenting with diverse test data that covers underrepresented demographics."
  },
  {
    id: 3,
    domain: "Chapter 3: Managing Risks of GenAI in Testing",
    question: "Which of the following describes the risk of 'over-reliance' on LLM-generated test cases and how to mitigate it?",
    options: [
      "Over-reliance means using the LLM too frequently; mitigate by reducing all AI usage",
      "Over-reliance occurs when testers trust LLM output without critical evaluation; mitigate by mandating human review, coverage analysis, and maintaining testing skills",
      "Over-reliance means the LLM is too expensive; mitigate by using a smaller model",
      "Over-reliance is not actually a risk in testing"
    ],
    correctAnswer: 1,
    explanation: "Over-reliance occurs when testers blindly trust LLM-generated test cases without critical evaluation. This risks missing defects that the LLM's test cases don't cover. Mitigation includes mandating human review, conducting independent coverage analysis, and maintaining manual testing skills."
  },
  {
    id: 4,
    domain: "Chapter 3: Managing Risks of GenAI in Testing",
    question: "What is 'jailbreaking' in the context of LLM-based testing tools and what risk does it pose?",
    options: [
      "Breaking the physical server housing the LLM",
      "Crafting inputs that bypass the model's safety restrictions, potentially causing it to generate harmful or non-compliant test instructions",
      "Using the LLM without an internet connection",
      "Restarting the LLM to reset its memory"
    ],
    correctAnswer: 1,
    explanation: "Jailbreaking involves crafting inputs that bypass the LLM's safety restrictions and alignment. In testing tools, this could cause the model to generate harmful test instructions, bypass security constraints in automated test execution, or produce non-compliant outputs that violate organizational policies."
  },
  {
    id: 5,
    domain: "Chapter 3: Managing Risks of GenAI in Testing",
    question: "Which of the following is the MOST appropriate approach for handling intellectual property (IP) concerns when using a public LLM to generate test cases?",
    options: [
      "All LLM-generated content is automatically public domain",
      "Using a public LLM always transfers IP rights to the provider",
      "Review the provider's terms of service, use enterprise agreements that clarify IP ownership, and avoid sending proprietary code or trade secrets in prompts",
      "IP concerns do not apply to test cases"
    ],
    correctAnswer: 2,
    explanation: "IP concerns with public LLMs are significant. Testing teams should review the provider's terms of service, use enterprise agreements that clarify IP ownership of generated content, and avoid sending proprietary code, algorithms, or trade secrets in prompts."
  },
  {
    id: 6,
    domain: "Chapter 3: Managing Risks of GenAI in Testing",
    question: "An LLM used in a CI/CD pipeline for automated test generation suddenly starts producing lower-quality test cases. The model version has not changed. What is the MOST likely cause?",
    options: [
      "The CI/CD pipeline is too fast",
      "Model drift caused by changes in the application's requirements, code, or data that the LLM has not been updated to reflect",
      "The LLM's context window has shrunk",
      "The testing team is using the LLM too often"
    ],
    correctAnswer: 1,
    explanation: "Even when the model version hasn't changed, model drift can occur due to changes in the application being tested—new features, changed requirements, or evolving code patterns—that the LLM was not trained or prompted to handle. The mitigation is to update prompts and RAG knowledge bases."
  }
];