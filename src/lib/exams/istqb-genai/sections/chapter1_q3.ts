import type { ExamQuestion } from '@/types';

export const questions: ExamQuestion[] = [
  {
    id: 1,
    domain: "Chapter 1: Introduction to GenAI for Testing",
    question: "Which of the following correctly describes classical machine learning in the AI spectrum?",
    options: [
      "It uses rule-based systems with symbols and logical rules",
      "It is a data-driven approach that requires data preparation, feature selection, and model training, usable for defect categorization and predicting software problems",
      "It creates new content by learning and mimicking patterns from training data",
      "It uses neural networks to automatically learn features without manual feature definition"
    ],
    correctAnswer: 1,
    explanation: "Classical machine learning is a data-driven approach that requires data preparation, feature selection, and model training. It can be used for tasks such as defect categorization and predicting software problems. Unlike deep learning, it requires users to manually define features."
  },
  {
    id: 2,
    domain: "Chapter 1: Introduction to GenAI for Testing",
    question: "In the context of LLMs, what does it mean that 'plausible is not necessarily correct'?",
    options: [
      "The transformer model can generate new text that is statistically plausible based on training data and the prompt, but this text may still be factually incorrect",
      "The model always produces correct output if the temperature is low enough",
      "Plausibility refers to the model's ability to encrypt its output",
      "The model can only produce output that has been explicitly verified by experts"
    ],
    correctAnswer: 0,
    explanation: "The transformer model can generate new text that is statistically plausible based on training data and the prompt, but plausible is not necessarily correct. This is why LLMs can produce hallucinations—output that appears plausible but is factually incorrect or irrelevant to the given task."
  },
  {
    id: 3,
    domain: "Chapter 1: Introduction to GenAI for Testing",
    question: "Which of the following is a key LLM capability for test tasks related to 'test automation support'?",
    options: [
      "LLMs can generate test scripts from test case descriptions and improve existing test scripts by suggesting changes",
      "LLMs can automatically deploy applications to production",
      "LLMs can physically test hardware devices",
      "LLMs can replace all manual testing without any human oversight"
    ],
    correctAnswer: 0,
    explanation: "Test automation support is a key LLM capability: LLMs can help generate test scripts from test case descriptions and improve existing test scripts by suggesting changes and identifying appropriate test design techniques. They can also create automated test scripts from structured test cases compatible with various test automation frameworks."
  },
  {
    id: 4,
    domain: "Chapter 1: Introduction to GenAI for Testing",
    question: "A tester uses an AI chatbot to iteratively refine acceptance criteria through prompt chaining. Which advantage of AI chatbots does this scenario highlight?",
    options: [
      "AI chatbots are better at automated test execution than LLM-powered applications",
      "AI chatbots provide a conversational interface that is particularly effective for dynamic, iterative refinement through prompt chaining",
      "AI chatbots can only be used by technical stakeholders",
      "AI chatbots do not require any prompt engineering"
    ],
    correctAnswer: 1,
    explanation: "AI chatbots provide a conversational interface enabling testers to communicate directly with LLMs through natural language. This interaction model is particularly effective for dynamic exploration of requirements, iterative prompt refinement, and exploratory testing. Their intuitive interface makes them accessible even to non-technical stakeholders."
  },
  {
    id: 5,
    domain: "Chapter 1: Introduction to GenAI for Testing",
    question: "Which of the following correctly describes 'instruction-tuned LLMs' as defined in the syllabus?",
    options: [
      "Models trained on vast and diverse datasets without any further adaptation",
      "Models derived from foundation models, fine-tuned using datasets that pair prompts with expected responses to enhance alignment with human instructions",
      "Models that only perform mathematical calculations",
      "Models that are always smaller than foundation models"
    ],
    correctAnswer: 1,
    explanation: "Instruction-tuned LLMs are derived from foundation models and are fine-tuned using datasets that pair prompts with expected responses. This stage enhances their alignment with human instructions, improving usability in real-world applications by optimizing for task adherence, instruction following, and response coherence."
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