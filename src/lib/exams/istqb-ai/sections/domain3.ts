import type { ExamQuestion } from '@/types';

export const questions: ExamQuestion[] = [
  {
    id: 1,
    domain: "Domain 3: Using AI for Testing",
    question: "How can AI assist with test case design?",
    options: [
      "AI can only design unit tests",
      "AI can analyze requirements, specifications, and user stories to suggest comprehensive test scenarios and identify coverage gaps",
      "AI replaces the need for human testers entirely",
      "AI can only design tests for web applications",
    ],
    correctAnswer: 1,
    explanation: "AI can analyze requirements, specifications, and user stories to suggest comprehensive test scenarios, identify coverage gaps, and generate test cases. This complements human expertise by catching scenarios that might be overlooked."
  },
  {
    id: 2,
    domain: "Domain 3: Using AI for Testing",
    question: "Which of the following describes how AI can be used for test oracle creation?",
    options: [
      "AI cannot be used for creating test oracles",
      "AI can learn expected behavior patterns from historical data and system specifications to predict expected outputs for new test inputs",
      "AI creates oracles that always produce 100% accurate results",
      "AI test oracles can only verify numerical outputs",
    ],
    correctAnswer: 1,
    explanation: "AI can learn expected behavior patterns from historical test data, specifications, and system behavior to predict expected outputs for new test inputs. This helps address the oracle problem, especially for complex systems."
  },
  {
    id: 3,
    domain: "Domain 3: Using AI for Testing",
    question: "A test team uses AI to predict which test cases are most likely to fail after a code change. This is an example of:",
    options: [
      "AI-based test generation",
      "AI-based test optimization through risk-based test selection and prioritization",
      "AI-based test oracle creation",
      "AI-based manual testing",
    ],
    correctAnswer: 1,
    explanation: "Using AI to predict which tests are most likely to fail after a code change is test optimization. This risk-based selection and prioritization ensures the most relevant tests are executed first, saving time and providing faster feedback."
  },
  {
    id: 4,
    domain: "Domain 3: Using AI for Testing",
    question: "What is a key challenge of using AI-generated test cases?",
    options: [
      "AI-generated test cases always require more execution time",
      "AI-generated test cases may lack domain-specific context and require human review for quality assurance",
      "AI-generated test cases cannot be executed automatically",
      "AI can only generate tests for non-functional requirements",
    ],
    correctAnswer: 1,
    explanation: "AI-generated test cases may lack domain-specific context, miss subtle business requirements, or include irrelevant scenarios. Human review is essential to ensure quality, relevance, and alignment with business needs."
  },
  {
    id: 5,
    domain: "Domain 3: Using AI for Testing",
    question: "How can AI improve test maintenance?",
    options: [
      "By eliminating the need for any test maintenance",
      "By automatically detecting and repairing broken test locators through self-healing capabilities",
      "By deleting all failing tests automatically",
      "By preventing any tests from ever breaking",
    ],
    correctAnswer: 1,
    explanation: "AI-powered self-healing capabilities automatically detect broken locators (CSS selectors, XPaths) when the application UI changes and suggest or apply alternative locators. This reduces maintenance effort and keeps test suites running smoothly."
  },
  {
    id: 6,
    domain: "Domain 3: Using AI for Testing",
    question: "Which statement about AI and test automation is correct?",
    options: [
      "AI can completely replace all existing test automation frameworks",
      "AI can enhance test automation by improving element detection, reducing maintenance, and generating test data",
      "AI-based test automation always produces fewer bugs than manual testing",
      "AI can only automate performance tests",
    ],
    correctAnswer: 0,
    explanation: "AI enhances test automation by improving element detection (handling dynamic UIs), reducing maintenance (self-healing), generating realistic test data, and optimizing test execution. It augments rather than replaces existing frameworks."
  },
  {
    id: 7,
    domain: "Domain 3: Using AI for Testing",
    question: "What is the main benefit of using AI for test data generation?",
    options: [
      "AI always produces perfectly realistic data with no anomalies",
      "AI can generate diverse, realistic test data that covers edge cases and various scenarios more comprehensively than manual creation",
      "AI-generated test data does not need to be validated",
      "AI can only generate numerical test data",
    ],
    correctAnswer: 2,
    explanation: "AI can generate diverse, realistic test data that covers edge cases, boundary conditions, and various scenarios more comprehensively than manual creation. This improves test coverage and helps identify defects that might be missed with manually created data."
  },
  {
    id: 8,
    domain: "Domain 3: Using AI for Testing",
    question: "A tester uses an LLM to analyze test results and identify patterns in failures across multiple test runs. This is an example of:",
    options: [
      "AI-based test optimization",
      "AI-based test result analysis and defect pattern recognition",
      "AI-based test oracle creation",
      "AI-based test data generation",
    ],
    correctAnswer: 3,
    explanation: "Using AI to analyze test results and identify failure patterns is test result analysis and defect pattern recognition. The AI helps detect recurring issues, identify root causes, and suggest areas for focused testing."
  },
  {
    id: 9,
    domain: "Domain 3: Using AI for Testing",
    question: "Which of the following is a risk of using AI for testing?\n\ni. AI may produce hallucinations or incorrect suggestions\nii. AI tools may introduce bias in test coverage\niii. AI tools always guarantee better results than manual testing\niv. AI-generated artifacts may require significant review effort",
    options: [
      "i, ii, and iv only",
      "i, ii, and iii only",
      "ii, iii, and iv only",
      "i, iii, and iv only",
    ],
    correctAnswer: 0,
    explanation: "AI may produce hallucinations (i), tools may introduce bias affecting coverage (ii), and AI-generated artifacts may require significant review (iv). Statement iii is false because AI does not always guarantee better results than manual testing."
  },
  {
    id: 10,
    domain: "Domain 3: Using AI for Testing",
    question: "How can AI support performance testing?",
    options: [
      "AI can only analyze the results of performance tests, not help design them",
      "AI can analyze production traffic patterns to generate realistic load scenarios and predict performance bottlenecks",
      "AI eliminates the need for any performance testing",
      "AI can only be used for functional testing, not performance testing",
    ],
    correctAnswer: 2,
    explanation: "AI can analyze production traffic patterns to generate realistic load test scenarios, predict performance bottlenecks before they occur, and identify patterns in performance degradation that might be missed by traditional analysis."
  }
];

export const questions2: ExamQuestion[] = [
  {
    id: 11,
    domain: "Domain 3: Using AI for Testing",
    question: "What is test suite minimization using AI?",
    options: [
      "Deleting all test cases and starting over with a new suite",
      "Using AI to identify and remove redundant test cases while maintaining equivalent coverage",
      "Reducing the execution time of each individual test case",
      "Minimizing the number of test environments needed",
    ],
    correctAnswer: 3,
    explanation: "Test suite minimization uses AI to identify redundant test cases that provide the same coverage as other tests, and removes them to reduce execution time while maintaining the same level of coverage effectiveness."
  },
  {
    id: 12,
    domain: "Domain 3: Using AI for Testing",
    question: "A QA team uses a large language model to automatically write Selenium test scripts from user stories. The testers should:",
    options: [
      "Deploy the generated scripts directly to production without review",
      "Review the generated scripts for correctness, completeness, and maintainability before use",
      "Only use the generated scripts for smoke testing",
      "Discard the generated scripts because LLMs cannot write automation code",
    ],
    correctAnswer: 0,
    explanation: "LLM-generated test scripts should be reviewed for correctness (do they test the right things?), completeness (do they cover all scenarios?), and maintainability (are they well-structured?). Human review ensures quality before deployment."
  },
  {
    id: 13,
    domain: "Domain 3: Using AI for Testing",
    question: "Which of the following best describes how AI can be used for test oracle creation?",
    options: [
      "AI creates perfect oracles that never produce false results",
      "AI can learn from historical data and system behavior to create approximate oracles that check if outputs are plausible",
      "AI oracles can only work with numerical data",
      "AI oracles replace all forms of manual verification",
    ],
    correctAnswer: 2,
    explanation: "AI can learn from historical data and system behavior to create approximate oracles that check whether outputs are plausible, fall within expected ranges, or satisfy learned patterns. These are not perfect but provide valuable automated checking."
  },
  {
    id: 14,
    domain: "Domain 3: Using AI for Testing",
    question: "What is a potential risk when relying on AI for test case generation?",
    options: [
      "AI always generates too many test cases",
      "AI may generate test cases that reflect biases in its training data, potentially overlooking important edge cases",
      "AI can only generate test cases for unit testing",
      "AI-generated test cases always pass",
    ],
    correctAnswer: 3,
    explanation: "AI may generate test cases that reflect biases in its training data, potentially overlooking important edge cases or underrepresented scenarios. This can lead to gaps in test coverage for areas the AI's training data didn't adequately cover."
  },
  {
    id: 15,
    domain: "Domain 3: Using AI for Testing",
    question: "How can AI support regression testing?",
    options: [
      "By automatically identifying which regression tests are most relevant based on code changes and historical data",
      "By eliminating the need for any regression testing",
      "By running the same regression tests in the same order every time",
      "By only testing new features",
    ],
    correctAnswer: 0,
    explanation: "AI can analyze code changes, historical failure data, and coverage information to identify which regression tests are most relevant. This test selection and prioritization reduces execution time while maintaining effective coverage."
  },
  {
    id: 16,
    domain: "Domain 3: Using AI for Testing",
    question: "Which of the following is a way AI can assist with exploratory testing?",
    options: [
      "AI can provide real-time suggestions for areas to explore based on risk analysis and observed behavior",
      "AI can perform exploratory testing without any human involvement",
      "AI makes exploratory testing unnecessary by generating all possible tests",
      "AI can only assist with scripted testing, not exploratory testing",
    ],
    correctAnswer: 0,
    explanation: "AI can provide real-time suggestions for areas to explore based on risk analysis, observed behavior, and coverage gaps. This enhances the tester's exploratory capabilities by highlighting high-risk areas and potential anomalies."
  },
  {
    id: 17,
    domain: "Domain 3: Using AI for Testing",
    question: "What is a key consideration when integrating AI tools into an existing testing process?",
    options: [
      "AI tools should completely replace all existing testing processes immediately",
      "AI tools should be carefully evaluated for compatibility, accuracy, and should complement rather than replace human expertise",
      "AI tools do not require any training or configuration",
      "AI tools always work perfectly out of the box",
    ],
    correctAnswer: 2,
    explanation: "When integrating AI tools, careful evaluation for compatibility with existing infrastructure, accuracy verification, and ensuring they complement human expertise is essential. AI should augment, not replace, the testing process."
  },
  {
    id: 18,
    domain: "Domain 3: Using AI for Testing",
    question: "A team uses AI to automatically categorize and prioritize bug reports based on severity and impact. This is an example of:",
    options: [
      "AI-based test data generation",
      "AI-based defect analysis and management",
      "AI-based performance testing",
      "AI-based security testing",
    ],
    correctAnswer: 3,
    explanation: "Using AI to categorize and prioritize bug reports is AI-based defect analysis and management. The AI helps testers focus on the most impactful issues by automating triage, categorization, and severity assessment."
  },
  {
    id: 19,
    domain: "Domain 3: Using AI for Testing",
    question: "Which of the following describes how AI can be used in load testing?",
    options: [
      "AI can only generate load testing scripts but cannot execute them",
      "AI can analyze production traffic patterns to create realistic load models and predict system behavior under stress",
      "AI makes load testing unnecessary",
      "AI can only be used for unit testing, not load testing",
    ],
    correctAnswer: 2,
    explanation: "In load testing, AI can analyze production traffic patterns to create realistic load models, predict system behavior under stress, and identify potential bottlenecks before they impact users in production."
  },
  {
    id: 20,
    domain: "Domain 3: Using AI for Testing",
    question: "What is the primary ethical concern when using AI tools that process sensitive test data?",
    options: [
      "The AI tools might be too expensive",
      "AI tools may expose or mishandle sensitive data, violating privacy regulations or organizational policies",
      "The AI tools might be too slow",
      "The AI tools might generate too many test cases",
    ],
    correctAnswer: 3,
    explanation: "AI tools that process sensitive test data may expose or mishandle that data, potentially violating privacy regulations (like GDPR), organizational policies, or exposing personal information. Data governance and privacy protection are essential."
  }
];