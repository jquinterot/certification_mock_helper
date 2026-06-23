import type { ExamQuestion } from '@/types';

export const questions: ExamQuestion[] = [
  {
    id: 1,
    domain: "Chapter 2: Prompt Engineering for Testing",
    question: "What are the six components of a structured prompt?",
    options: [
      "Role, context, instruction, input data, constraints, output format",
      "Title, subtitle, body, conclusion, appendix, references",
      "Introduction, problem, solution, evaluation, conclusion, future work",
      "User, password, database, API, endpoint, response"
    ],
    correctAnswer: 0,
    explanation: "The six components of a structured prompt are: Role (who the AI should act as), Context (background information), Instruction (what to do), Input Data (specific content to process), Constraints (limitations), and Output Format (desired structure)."
  },
  {
    id: 2,
    domain: "Chapter 2: Prompt Engineering for Testing",
    question: "Which prompting technique is MOST appropriate for generating consistent test cases in a specific format?",
    options: [
      "Zero-shot prompting",
      "Random prompting",
      "No prompting",
      "Few-shot prompting with examples"
    ],
    correctAnswer: 3,
    explanation: "Few-shot prompting provides examples of the desired output format, which is ideal for generating consistent test cases. By showing 2-3 examples, the model learns the pattern and produces consistent, structured output."
  },
  {
    id: 3,
    domain: "Chapter 2: Prompt Engineering for Testing",
    question: "What is the primary purpose of prompt chaining?",
    options: [
      "To reduce API costs",
      "To make the model run faster",
      "To break complex tasks into sequential steps for better accuracy",
      "To encrypt the prompt"
    ],
    correctAnswer: 2,
    explanation: "Prompt chaining breaks complex tasks into sequential steps. The output of one prompt becomes the input of the next, improving accuracy for complex tasks like end-to-end test scenario generation."
  },
  {
    id: 4,
    domain: "Chapter 2: Prompt Engineering for Testing",
    question: "Which of the following is a valid evaluation metric for GenAI-generated test artifacts?",
    options: [
      "Model accuracy",
      "Execution success rate",
      "Training loss",
      "API latency"
    ],
    correctAnswer: 1,
    explanation: "Execution success rate is a valid metric for evaluating generated test artifacts. It measures whether the generated tests are syntactically correct and can execute without errors."
  },
  {
    id: 5,
    domain: "Chapter 2: Prompt Engineering for Testing",
    question: "What is the primary purpose of the 'role' component in a structured prompt?",
    options: [
      "To define the persona the AI should adopt",
      "To specify the user's job title",
      "To set the model's training parameters",
      "To restrict access to the API"
    ],
    correctAnswer: 0,
    explanation: "The 'role' component defines the persona the AI should adopt (e.g., 'senior QA engineer'). This helps the model generate responses from the appropriate perspective and expertise level."
  },
  {
    id: 6,
    domain: "Chapter 2: Prompt Engineering for Testing",
    question: "Which prompting technique is MOST appropriate for generating test cases for a completely new feature with no examples?",
    options: [
      "Few-shot prompting",
      "Prompt chaining",
      "Meta prompting",
      "Zero-shot prompting with detailed instructions"
    ],
    correctAnswer: 3,
    explanation: "Zero-shot prompting with detailed instructions is appropriate when no examples exist. By providing a clear, structured prompt with detailed instructions, constraints, and output format, you can guide the model to generate relevant test cases."
  },
  {
    id: 7,
    domain: "Chapter 2: Prompt Engineering for Testing",
    question: "What is the primary purpose of 'output format constraints' in a prompt?",
    options: [
      "To make the output look good",
      "To reduce the number of tokens",
      "To ensure the output can be parsed and integrated with tools",
      "To make the model run faster"
    ],
    correctAnswer: 2,
    explanation: "Output format constraints ensure generated output is structured in a way that can be parsed and integrated with test management tools, automation frameworks, and CI/CD pipelines."
  },
  {
    id: 8,
    domain: "Chapter 2: Prompt Engineering for Testing",
    question: "Which metric measures whether generated test cases align with the requirements?",
    options: [
      "Diversity score",
      "Relevance score",
      "Execution success rate",
      "Time efficiency"
    ],
    correctAnswer: 1,
    explanation: "The relevance score measures how well generated test cases align with the requirements. A high relevance score indicates that the generated test cases are applicable to the feature being tested."
  },
  {
    id: 9,
    domain: "Chapter 3: Managing Risks of GenAI in Testing",
    question: "What is the primary risk of using a high temperature setting for test case generation?",
    options: [
      "The output may be too creative and inconsistent",
      "The model will run slower",
      "The API cost will be lower",
      "The model will refuse to generate"
    ],
    correctAnswer: 0,
    explanation: "A high temperature increases randomness and creativity, which can lead to inconsistent, non-deterministic test cases. Temperature control is a mitigation technique for non-deterministic behavior (Chapter 3). For test case generation, consistency and reproducibility are often more important than creativity."
  },
  {
    id: 10,
    domain: "Chapter 2: Prompt Engineering for Testing",
    question: "Which of the following is a best practice for managing prompts in a testing team?",
    options: [
      "Each tester writes their own prompts without sharing",
      "Use the same prompt for all tasks",
      "Never review or update prompts",
      "Maintain a prompt library with version control"
    ],
    correctAnswer: 3,
    explanation: "Maintaining a prompt library with version control ensures consistency, allows knowledge sharing, and enables continuous improvement. It prevents 'prompt drift' where different team members use different prompts."
  },
  {
    id: 11,
    domain: "Chapter 2: Prompt Engineering for Testing",
    question: "What is the purpose of 'system prompts' vs 'user prompts'?",
    options: [
      "System prompts are visible to users, user prompts are hidden",
      "System prompts are shorter than user prompts",
      "System prompts set the model's behavior, user prompts contain the specific task",
      "There is no difference"
    ],
    correctAnswer: 2,
    explanation: "System prompts define the model's behavior, role, and constraints (e.g., 'You are a QA expert'). User prompts contain the specific task or question (e.g., 'Generate test cases for this user story')."
  },
  {
    id: 12,
    domain: "Chapter 2: Prompt Engineering for Testing",
    question: "What is meta prompting?",
    options: [
      "Prompting the model to generate prompts for other models",
      "Asking the model to analyze and improve its own prompts",
      "Using multiple LLMs simultaneously",
      "Encrypting the prompt"
    ],
    correctAnswer: 1,
    explanation: "Meta prompting involves asking the model to analyze and improve its own prompts. This helps identify ambiguities, missing constraints, or unclear instructions before using the prompt."
  },
  {
    id: 13,
    domain: "Chapter 2: Prompt Engineering for Testing",
    question: "Which technique is MOST appropriate for generating test data with specific boundary values?",
    options: [
      "Few-shot prompting with boundary value examples",
      "Zero-shot prompting without constraints",
      "Random prompting",
      "Removing the constraints component"
    ],
    correctAnswer: 0,
    explanation: "Few-shot prompting with boundary value examples is most effective for generating test data with specific boundary values. Examples help the model understand the pattern and generate appropriate values."
  },
  {
    id: 14,
    domain: "Chapter 2: Prompt Engineering for Testing",
    question: "What is the primary purpose of 'prompt versioning' in a testing team?",
    options: [
      "To make prompts run faster",
      "To encrypt prompt data",
      "To reduce the number of tokens",
      "To track changes to prompts over time and ensure reproducibility"
    ],
    correctAnswer: 3,
    explanation: "Prompt versioning tracks changes to prompts over time, ensuring reproducibility. This is essential for testing where different prompt versions may produce different test cases, affecting results."
  },
  {
    id: 15,
    domain: "Chapter 2: Prompt Engineering for Testing",
    question: "Which of the following is a characteristic of 'chain-of-thought' prompting?",
    options: [
      "It uses multiple models simultaneously",
      "It always produces shorter outputs",
      "It asks the model to provide step-by-step reasoning",
      "It requires no instructions"
    ],
    correctAnswer: 2,
    explanation: "Chain-of-thought prompting asks the model to provide step-by-step reasoning. This improves the quality of complex tasks by making the reasoning process explicit, which helps verify correctness."
  },
  {
    id: 16,
    domain: "Chapter 2: Prompt Engineering for Testing",
    question: "A tester is writing a prompt to generate test cases for a login feature. The prompt includes: role (senior QA), context (web application), instruction (generate test cases), input data (user story), constraints (only positive cases), and output format (Gherkin). Which component is MOST likely missing if the generated test cases include edge cases like empty passwords?",
    options: [
      "The role component",
      "The constraints component needs to be more explicit about edge cases",
      "The input data component",
      "The output format component"
    ],
    correctAnswer: 1,
    explanation: "The constraints component should explicitly define what to include or exclude. If the tester wants only positive test cases but the output includes edge cases, the constraint is not clear enough."
  }
];

export const questions2: ExamQuestion[] = [
  {
    id: 1,
    domain: "Chapter 2: Prompt Engineering for Testing",
    question: "Which prompting technique is MOST appropriate for breaking down a complex test planning task into steps?",
    options: [
      "Prompt chaining",
      "Few-shot prompting",
      "Meta prompting",
      "Random prompting"
    ],
    correctAnswer: 0,
    explanation: "Prompt chaining is ideal for breaking down complex tasks into sequential steps. Each step's output feeds into the next prompt, improving accuracy for complex tasks like test planning."
  },
  {
    id: 2,
    domain: "Chapter 2: Prompt Engineering for Testing",
    question: "What is the primary purpose of 'constraints' in a structured prompt?",
    options: [
      "To limit the model's creativity",
      "To make the prompt shorter",
      "To reduce API costs",
      "To define boundaries and requirements for the output"
    ],
    correctAnswer: 3,
    explanation: "The 'constraints' component defines boundaries and limitations (e.g., 'generate only positive test cases', 'limit to 10 test cases'). This ensures the output meets specific requirements."
  },
  {
    id: 3,
    domain: "Chapter 2: Prompt Engineering for Testing",
    question: "Which metric is MOST appropriate for evaluating the speed of test case generation?",
    options: [
      "Accuracy",
      "Precision",
      "Time efficiency",
      "Recall"
    ],
    correctAnswer: 2,
    explanation: "Time efficiency measures the speed of test case generation. This is important for evaluating whether the LLM-based approach is faster than manual creation, which affects ROI."
  },
  {
    id: 4,
    domain: "Chapter 2: Prompt Engineering for Testing",
    question: "Which of the following is a sign that a prompt needs refinement?",
    options: [
      "The generated output is always perfect",
      "The output is inconsistent, misses edge cases, or includes irrelevant scenarios",
      "The API response is too fast",
      "The model generates too few outputs"
    ],
    correctAnswer: 1,
    explanation: "Inconsistent output, missing edge cases, or irrelevant scenarios indicate that the prompt needs refinement. This could involve adding constraints, providing examples, or clarifying instructions."
  },
  {
    id: 5,
    domain: "Chapter 2: Prompt Engineering for Testing",
    question: "Which of the following is a limitation of few-shot prompting?",
    options: [
      "It requires high-quality examples that may not always be available",
      "It always produces perfect results",
      "It is faster than zero-shot prompting",
      "It works with any model size"
    ],
    correctAnswer: 0,
    explanation: "Few-shot prompting requires high-quality examples that demonstrate the desired output format. If good examples are not available, the technique may not be effective."
  },
  {
    id: 6,
    domain: "Chapter 2: Prompt Engineering for Testing",
    question: "A testing team wants to evaluate whether an LLM-generated test suite covers all requirements. Which metric should they primarily use?",
    options: [
      "Execution success rate",
      "Time efficiency",
      "Diversity score",
      "Relevance score"
    ],
    correctAnswer: 3,
    explanation: "The relevance score measures how well generated test cases align with the requirements. It is the primary metric for evaluating whether a test suite covers all requirements."
  },
  {
    id: 7,
    domain: "Chapter 2: Prompt Engineering for Testing",
    question: "Which of the following is a best practice when using zero-shot prompting for test case generation?",
    options: [
      "Provide minimal instructions to allow creativity",
      "Use only one word as the prompt",
      "Provide detailed, specific instructions with clear output format and constraints",
      "Never specify the output format"
    ],
    correctAnswer: 2,
    explanation: "With zero-shot prompting (no examples), the prompt must be highly detailed and specific. Clear instructions, output format, and constraints compensate for the lack of examples."
  },
  {
    id: 8,
    domain: "Chapter 2: Prompt Engineering for Testing",
    question: "Which of the following is a characteristic of meta prompting in the context of testing?",
    options: [
      "It involves using multiple LLMs simultaneously",
      "It involves asking the model to analyze and improve the prompt itself before generating test cases",
      "It involves encrypting the prompt",
      "It involves generating random prompts"
    ],
    correctAnswer: 1,
    explanation: "Meta prompting involves asking the model to analyze and improve the prompt itself. For testing, this can help identify ambiguities, missing constraints, or unclear instructions before generating test cases."
  },
  {
    id: 9,
    domain: "Chapter 2: Prompt Engineering for Testing",
    question: "Which prompting technique, updated in CT-GenAI v1.1, involves providing a single example to guide the model's output?",
    options: [
      "One-shot prompting",
      "Zero-shot prompting",
      "Few-shot prompting",
      "Meta prompting"
    ],
    correctAnswer: 0,
    explanation: "One-shot prompting provides a single example to guide the model's output. This was updated in CT-GenAI v1.1 and is useful when you have one good example but not multiple."
  },
  {
    id: 10,
    domain: "Chapter 2: Prompt Engineering for Testing",
    question: "A testing team notices that their LLM-generated test cases are inconsistent. The prompt has not changed. Which technique should they apply to improve consistency?",
    options: [
      "Increase the temperature to 1.0",
      "Remove all constraints from the prompt",
      "Use a different LLM provider for each request",
      "Use a fixed random seed and lower temperature for reproducibility"
    ],
    correctAnswer: 3,
    explanation: "Using a fixed random seed and lower temperature ensures reproducibility. A lower temperature reduces randomness, and a fixed seed makes the output deterministic."
  },
  {
    id: 11,
    domain: "Chapter 3: Managing Risks of GenAI in Testing",
    question: "Which of the following is a request manipulation attack in the context of LLM-based testing tools?",
    options: [
      "A user accidentally typing the wrong prompt",
      "A network firewall blocking the API request",
      "A malicious input that overrides the system prompt to make the LLM ignore its instructions",
      "A model running out of memory"
    ],
    correctAnswer: 2,
    explanation: "A prompt injection attack involves crafting malicious input that overrides the system prompt, causing the LLM to ignore its original instructions."
  },
  {
    id: 12,
    domain: "Chapter 2: Prompt Engineering for Testing",
    question: "Which iterative technique involves generating test cases, evaluating them, and then refining the prompt based on evaluation results?",
    options: [
      "Random prompting",
      "Iterative prompt refinement with feedback loops",
      "Single-shot generation",
      "Manual testing only"
    ],
    correctAnswer: 1,
    explanation: "Iterative prompt refinement with feedback loops involves generating test cases, evaluating them against criteria, and then refining the prompt based on gaps."
  },
  {
    id: 13,
    domain: "Chapter 2: Prompt Engineering for Testing",
    question: "What is the primary purpose of 'prompt templates' in a testing organization?",
    options: [
      "To standardize and reuse effective prompts across the team",
      "To make prompts look pretty",
      "To reduce the model's memory usage",
      "To encrypt prompt data"
    ],
    correctAnswer: 0,
    explanation: "Prompt templates standardize and reuse effective prompts across the team. This ensures consistency in test case generation and allows best practices to be shared."
  },
  {
    id: 14,
    domain: "Chapter 2: Prompt Engineering for Testing",
    question: "What is the primary purpose of A/B testing prompts in a testing team?",
    options: [
      "To compare two different LLM providers",
      "To test the application's UI",
      "To compare manual vs automated testing",
      "To compare the effectiveness of two prompt versions and select the better one"
    ],
    correctAnswer: 3,
    explanation: "A/B testing prompts involves comparing two prompt versions against the same test generation task. The team evaluates which version produces better test cases and adopts the winner."
  },
  {
    id: 15,
    domain: "Chapter 2: Prompt Engineering for Testing",
    question: "Which metric measures the percentage of generated test cases that execute successfully without errors?",
    options: [
      "Accuracy",
      "Relevance score",
      "Execution success rate",
      "Diversity score"
    ],
    correctAnswer: 2,
    explanation: "Execution success rate measures the percentage of generated test cases that execute successfully (pass or fail as expected) without syntax errors, runtime exceptions, or infrastructure issues."
  }
];
