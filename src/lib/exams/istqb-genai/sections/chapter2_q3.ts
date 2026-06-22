import type { ExamQuestion } from '@/types';

export const questions: ExamQuestion[] = [
  {
    id: 1,
    domain: "Chapter 2: Prompt Engineering for Testing",
    question: "What is 'self-consistency prompting' and how is it applied to improve test case generation?",
    options: [
      "Generating one response and checking it for internal consistency",
      "Generating multiple responses with high temperature and selecting the most common or consistent answer",
      "Ensuring the prompt itself is grammatically consistent",
      "Having the model verify that its prompt follows the organization's style guide"
    ],
    correctAnswer: 1,
    explanation: "Self-consistency prompting generates multiple responses to the same prompt with high temperature and then selects the most common or consistent answer. For test case generation, this can improve quality by aggregating diverse outputs and selecting the most frequently generated test scenarios."
  },
  {
    id: 2,
    domain: "Chapter 2: Prompt Engineering for Testing",
    question: "What is 'tree-of-thought' (ToT) prompting and when is it beneficial for test design?",
    options: [
      "A technique that generates only two possible solutions",
      "A technique that explores multiple reasoning paths (branches) before selecting the best one, beneficial for complex test design",
      "A method for organizing test cases in a tree structure",
      "A technique that forces the model to always choose the shortest path"
    ],
    correctAnswer: 1,
    explanation: "Tree-of-thought (ToT) prompting encourages the model to explore multiple reasoning paths (branches of a thought tree) and evaluate each before selecting the best one. In test design, this is beneficial when there are multiple valid testing approaches and trade-offs to consider."
  },
  {
    id: 3,
    domain: "Chapter 2: Prompt Engineering for Testing",
    question: "What is 'structured output prompting' and why is it important for integrating LLM-generated test cases into test management systems?",
    options: [
      "It formats the prompt itself in a structured way",
      "It instructs the LLM to generate output in a specific machine-readable format (e.g., JSON, XML) for direct import into test tools",
      "It structures the training data before fine-tuning",
      "It organizes the test execution reports"
    ],
    correctAnswer: 1,
    explanation: "Structured output prompting instructs the LLM to produce output in a specific machine-readable format like JSON or XML. This is critical for integration because test management tools can programmatically import structured test cases without manual reformatting."
  },
  {
    id: 4,
    domain: "Chapter 2: Prompt Engineering for Testing",
    question: "A testing team is using few-shot prompting but the generated test cases are too similar to the examples. Which technique should they use to encourage diversity while maintaining structure?",
    options: [
      "Remove all examples and use zero-shot prompting",
      "Increase the temperature to maximum and remove constraints",
      "Use diverse few-shot examples that demonstrate different test techniques and explicitly instruct the model to generate varied test scenarios",
      "Switch to a completely different LLM provider"
    ],
    correctAnswer: 2,
    explanation: "When few-shot outputs are too similar to examples, the solution is to provide diverse examples that demonstrate different test techniques (boundary value, equivalence partitioning, error guessing) and explicitly instruct the model to generate varied scenarios."
  },
  {
    id: 5,
    domain: "Chapter 2: Prompt Engineering for Testing",
    question: "What is 'retrieval-augmented prompting' and how does it differ from standard prompting for test case generation?",
    options: [
      "It retrieves the model's previous responses from cache",
      "It augments the prompt with context retrieved from a knowledge base (e.g., project requirements, test history) before sending it to the LLM",
      "It retrieves prompts from a public database",
      "It augments the user's input with spell corrections"
    ],
    correctAnswer: 1,
    explanation: "Retrieval-augmented prompting (RAG-based prompting) retrieves relevant context from a knowledge base and augments the prompt with it before sending to the LLM. This grounds test case generation in actual project data rather than relying solely on the model's training data."
  },
  {
    id: 6,
    domain: "Chapter 2: Prompt Engineering for Testing",
    question: "A tester wants to generate both positive and negative test cases from a single user story. Which prompt structure would MOST effectively ensure both types are generated?",
    options: [
      "Ask the model to 'generate some test cases' without specifying types",
      "Use a single prompt with explicit constraints: 'Generate 5 positive test cases and 5 negative test cases, clearly labeled, covering at least 3 different test techniques'",
      "Generate only positive cases and manually add negative ones",
      "Use maximum temperature for creative negative test cases"
    ],
    correctAnswer: 1,
    explanation: "Using explicit constraints that specify the number, type (positive/negative), labeling, and minimum test techniques ensures the LLM generates a balanced set of test cases in a single prompt."
  }
];