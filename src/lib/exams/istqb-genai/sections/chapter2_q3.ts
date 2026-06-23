import type { ExamQuestion } from '@/types';

export const questions: ExamQuestion[] = [
  {
    id: 1,
    domain: "Chapter 2: Prompt Engineering for Testing",
    question: "Which of the following is NOT one of the three core prompting techniques described in the syllabus for software testing?",
    options: [
      "Prompt chaining",
      "Few-shot prompting",
      "Meta prompting",
      "Chain-of-thought prompting"
    ],
    correctAnswer: 3,
    explanation: "The syllabus describes three core prompting techniques commonly used for test tasks: (1) Prompt chaining — breaking a task into a series of intermediate steps with each checked before proceeding; (2) Few-shot prompting — providing the LLM with examples in the prompt; (3) Meta prompting — leveraging the AI's ability to generate or refine its own prompts. Chain-of-thought is not listed as a core technique."
  },
  {
    id: 2,
    domain: "Chapter 2: Prompt Engineering for Testing",
    question: "A tester is unsure how to craft an effective prompt for generating test cases from a complex requirements document. They ask the LLM to help create an effective prompt for this task. Which prompting technique are they using?",
    options: [
      "Prompt chaining",
      "Few-shot prompting",
      "Meta prompting",
      "Zero-shot prompting"
    ],
    correctAnswer: 2,
    explanation: "Meta prompting leverages the AI's ability to generate or refine its own prompts. The tester collaborates with the LLM to co-create an effective prompt. This is especially beneficial when the tester is unsure how to craft an effective prompt, reflecting a form of pairing with the GenAI tool."
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
    question: "According to the syllabus, which prompting technique is MOST appropriate for a repetitive test task that requires a specific output format, such as generating keyword-driven test scripts?",
    options: [
      "Meta prompting, because it generates its own prompts",
      "Few-shot prompting, because it provides examples to GenAI for repetitive generation with a specific pattern",
      "Prompt chaining, because it breaks the task into smaller steps",
      "Zero-shot prompting, because it relies on the model's pre-existing knowledge"
    ],
    correctAnswer: 1,
    explanation: "According to the syllabus, few-shot prompting is recommended for repetitive or specific/constrained output format tasks. It provides examples to GenAI for repetitive generation with a specific pattern, making it ideal for keyword-driven test scripts, Gherkin-style test cases, or test reporting with a specific output format."
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