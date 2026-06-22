import type { ExamQuestion } from '@/types';

export const questions: ExamQuestion[] = [
  {
    id: 1,
    domain: "Chapter 4: LLM-Powered Test Infrastructure",
    question: "In a RAG-based testing tool, what is 'query transformation' and why is it important?",
    options: [
      "It transforms the LLM's output into a different format",
      "It rewrites or expands the user's query before retrieval to improve the relevance of retrieved test artifacts",
      "It converts the test results into a report",
      "It changes the model's training parameters"
    ],
    correctAnswer: 1,
    explanation: "Query transformation rewrites or expands the user's original query before retrieval. For example, it might decompose a complex query ('find test cases for payment failures in checkout') into sub-queries for each concept, improving retrieval relevance."
  },
  {
    id: 2,
    domain: "Chapter 4: LLM-Powered Test Infrastructure",
    question: "What is 'hybrid retrieval' in a RAG pipeline for test case management and what advantage does it provide?",
    options: [
      "It uses only the LLM's internal knowledge without external data",
      "It combines semantic (vector) search with keyword (BM25) search to improve retrieval accuracy for test cases that contain specific identifiers",
      "It retrieves from both public and private databases simultaneously",
      "It uses two different LLMs for retrieval"
    ],
    correctAnswer: 1,
    explanation: "Hybrid retrieval combines semantic vector search (which finds conceptually similar content) with keyword search like BM25 (which finds exact keyword matches). This is advantageous because test cases often contain specific identifiers that semantic search alone may miss."
  },
  {
    id: 3,
    domain: "Chapter 4: LLM-Powered Test Infrastructure",
    question: "An LLM-powered test agent autonomously navigates a web application and reports defects. What is the role of the 'action space' in this agent's design?",
    options: [
      "It defines the agent's training data requirements",
      "It defines the set of actions the agent can take (e.g., click, type, navigate, assert) during autonomous test execution",
      "It specifies the agent's context window size",
      "It determines the agent's API pricing"
    ],
    correctAnswer: 1,
    explanation: "The action space defines all possible actions an LLM-powered test agent can take during autonomous execution, such as clicking elements, typing text, navigating URLs, or making assertions. A well-designed action space enables the agent to effectively explore while preventing harmful actions."
  },
  {
    id: 4,
    domain: "Chapter 4: LLM-Powered Test Infrastructure",
    question: "Which LLMOps practice involves 'prompt regression testing' and why is it critical for testing teams?",
    options: [
      "Testing the prompts themselves for grammatical correctness",
      "Running a standardized set of prompts against new model versions to verify that output quality and format have not degraded",
      "Removing old prompts that are no longer used",
      "Testing whether the LLM can generate regression tests"
    ],
    correctAnswer: 1,
    explanation: "Prompt regression testing runs a standardized suite of prompts against new model versions or updated prompts to verify that output quality, format, and accuracy have not degraded. This is critical because model updates can silently change outputs, breaking automated test generation pipelines."
  },
  {
    id: 5,
    domain: "Chapter 4: LLM-Powered Test Infrastructure",
    question: "What is the role of a 'guardrail' in an LLM-powered test automation pipeline?",
    options: [
      "It prevents the LLM from generating any output",
      "It validates and filters LLM outputs to ensure they comply with safety, format, and organizational policies before execution",
      "It speeds up the LLM's inference time",
      "It encrypts the prompts before sending them to the API"
    ],
    correctAnswer: 1,
    explanation: "A guardrail validates and filters LLM outputs to ensure they comply with safety rules, format requirements, and organizational policies before being executed. For test automation, this prevents harmful actions and ensures generated test cases meet quality standards."
  },
  {
    id: 6,
    domain: "Chapter 4: LLM-Powered Test Infrastructure",
    question: "In the context of LLM-powered testing tools, what is 'function calling' (also known as 'tool use') and how does it enhance test automation?",
    options: [
      "It allows the LLM to call arbitrary functions on the user's machine",
      "It enables the LLM to invoke predefined functions/APIs (e.g., get_test_results, create_test_case) to interact with external systems",
      "It is a technique for calling the LLM API itself",
      "It refers to writing unit test functions"
    ],
    correctAnswer: 1,
    explanation: "Function calling enables the LLM to invoke predefined functions or APIs that interact with external systems. In test automation, this allows the LLM to retrieve test results, create test cases in a management tool, or trigger test execution in a CI/CD pipeline."
  }
];