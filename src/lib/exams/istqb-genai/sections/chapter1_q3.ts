import type { ExamQuestion } from '@/types';

export const questions: ExamQuestion[] = [
  {
    id: 1,
    domain: "Chapter 1: Introduction to GenAI for Testing",
    question: "What is a 'mixture of experts' (MoE) architecture in LLMs and how does it relate to testing?",
    options: [
      "A system where multiple human experts review LLM outputs",
      "An architecture that routes inputs to specialized sub-models, reducing compute while maintaining capability for testing tasks",
      "A testing methodology that requires expert-level test cases",
      "A technique for combining test results from multiple manual testers"
    ],
    correctAnswer: 1,
    explanation: "Mixture of Experts (MoE) routes input tokens to specialized sub-models (experts) rather than activating the entire model. This reduces computational cost while maintaining capability, making it viable to run sophisticated LLM-powered testing tools more efficiently."
  },
  {
    id: 2,
    domain: "Chapter 1: Introduction to GenAI for Testing",
    question: "Which type of AI model is MOST suitable for automatically identifying duplicate defect reports from a large bug database?",
    options: [
      "A generative text model that creates new bug reports",
      "A discriminative model using embedding-based semantic similarity to identify near-duplicate reports",
      "A reinforcement learning model that maximizes reward signals",
      "A diffusion model that generates images of bugs"
    ],
    correctAnswer: 1,
    explanation: "A discriminative model using embedding-based semantic similarity is best suited for identifying duplicate defect reports. It converts each report into embeddings and computes pairwise similarity, finding near-duplicates based on semantic content rather than exact text matching."
  },
  {
    id: 3,
    domain: "Chapter 1: Introduction to GenAI for Testing",
    question: "What is 'knowledge distillation' and how can it benefit testing organizations deploying LLM-powered tools?",
    options: [
      "A process of removing all knowledge from a model",
      "A technique where a smaller 'student' model learns from a larger 'teacher' model, enabling cost-effective deployment of testing tools",
      "A method for encrypting model knowledge",
      "A process of training a model on testing documentation only"
    ],
    correctAnswer: 1,
    explanation: "Knowledge distillation transfers knowledge from a large, expensive 'teacher' model to a smaller, cheaper 'student' model. This enables testing organizations to deploy cost-effective models that retain much of the teacher's testing capability, reducing inference costs."
  },
  {
    id: 4,
    domain: "Chapter 1: Introduction to GenAI for Testing",
    question: "Which of the following best describes 'emergent abilities' in large language models and their relevance to testing?",
    options: [
      "Abilities that appear suddenly in humans when using LLMs",
      "Capabilities that arise at scale but are absent in smaller models, enabling complex test generation tasks",
      "Abilities that emerge from proper prompt engineering alone",
      "Skills that only appear in closed-source models"
    ],
    correctAnswer: 1,
    explanation: "Emergent abilities are capabilities that appear in large models but are absent in smaller models of the same architecture. For testing, this means certain complex test generation tasks (like reasoning about multi-step test scenarios) may only be possible with sufficiently large models."
  },
  {
    id: 5,
    domain: "Chapter 1: Introduction to GenAI for Testing",
    question: "What is the key difference between a generative model and a discriminative model in the context of AI-powered testing tools?",
    options: [
      "Generative models are always more accurate than discriminative models",
      "Discriminative models can only classify existing test cases, while generative models can create new test cases",
      "Discriminative models are faster at generating test data",
      "Generative models cannot be used for classification tasks"
    ],
    correctAnswer: 1,
    explanation: "Discriminative models learn to classify or label existing data (e.g., classifying a test case as pass/fail), while generative models can create new data (e.g., generating new test cases). In testing, generative models create test cases and test data, while discriminative models classify results."
  },
  {
    id: 6,
    domain: "Chapter 1: Introduction to GenAI for Testing",
    question: "What is a 'reasoning model' in the context of GenAI for testing, and when should a tester choose it over a standard LLM?",
    options: [
      "A reasoning model is always preferable for all testing tasks",
      "A reasoning model uses extended computation for step-by-step logical analysis, best for complex test planning or risk analysis tasks",
      "A reasoning model only works with numerical data",
      "A reasoning model is smaller and faster than a standard LLM"
    ],
    correctAnswer: 1,
    explanation: "Reasoning models perform extended internal computation for step-by-step logical analysis. They are best for complex testing tasks like risk analysis, test strategy planning, or root-cause analysis where accurate reasoning is more important than fast response times."
  }
];