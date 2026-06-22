import type { ExamQuestion } from '@/types';

export const questions2: ExamQuestion[] = [
  // Domain 1: Introduction to AI and Testing (12 questions)
  {
    id: 41,
    domain: "Domain 1: Introduction to AI and Testing",
    question: "What distinguishes reinforcement learning from supervised learning?",
    options: [
      "Reinforcement learning learns through interaction with an environment using rewards, while supervised learning learns from labeled input-output pairs",
      "Reinforcement learning uses labeled data, while supervised learning uses unlabeled data",
      "Reinforcement learning cannot be used for decision-making tasks",
      "Supervised learning is always more accurate than reinforcement learning",
    ],
    correctAnswer: 0,
    explanation: "Reinforcement learning learns through trial-and-error interaction with an environment, receiving rewards or penalties for actions. Supervised learning learns from labeled input-output pairs provided in the training data."
  },
  {
    id: 42,
    domain: "Domain 1: Introduction to AI and Testing",
    question: "What is the primary function of an activation function in a neural network?",
    options: [
      "To store the training data",
      "To introduce non-linearity into the network, enabling it to learn complex patterns",
      "To reduce the size of the training dataset",
      "To encrypt the model weights for security",
    ],
    correctAnswer: 1,
    explanation: "Activation functions introduce non-linearity into neural networks. Without them, the network would only be able to learn linear relationships regardless of depth, severely limiting its ability to model complex patterns."
  },
  {
    id: 43,
    domain: "Domain 1: Introduction to AI and Testing",
    question: "Which of the following describes underfitting?",
    options: [
      "The model performs perfectly on training data but poorly on test data",
      "The model has excessive training data",
      "The model is too simple to capture the underlying patterns in the data",
      "The model's training was interrupted prematurely due to a hardware failure",
    ],
    correctAnswer: 2,
    explanation: "Underfitting occurs when a model is too simple to capture the underlying patterns in the data, resulting in poor performance on both training and test data. This can be caused by insufficient model complexity or inadequate training."
  },
  {
    id: 44,
    domain: "Domain 1: Introduction to AI and Testing",
    question: "A medical diagnosis AI system is classified as which type of AI?",
    options: [
      "General AI, because it handles multiple medical conditions",
      "Neither narrow nor general AI, because medical systems use a different classification",
      "General AI, because it learns from data",
      "Narrow AI, because it is designed for a specific domain (medical diagnosis)",
    ],
    correctAnswer: 3,
    explanation: "A medical diagnosis AI system is narrow (weak) AI because it is designed for a specific domain and task. Despite learning from data and handling multiple conditions, it cannot perform tasks outside its trained domain."
  },
  {
    id: 45,
    domain: "Domain 1: Introduction to AI and Testing",
    question: "Which of the following is a key challenge when testing AI systems compared to traditional software?",
    options: [
      "AI systems often produce non-deterministic outputs, making it difficult to define exact expected results",
      "AI systems require less testing because they learn from data",
      "AI systems cannot have bugs in the traditional sense",
      "AI systems always produce the same output for the same input",
    ],
    correctAnswer: 0,
    explanation: "A key challenge in testing AI systems is that they often produce non-deterministic or probabilistic outputs, making it difficult to define exact expected results. This is known as the oracle problem and requires specialized testing approaches."
  },
  {
    id: 46,
    domain: "Domain 1: Introduction to AI and Testing",
    question: "What is the purpose of a validation dataset in machine learning?",
    options: [
      "To train the model's parameters",
      "To tune hyperparameters and make decisions about model selection during training",
      "To serve as the final evaluation of the model's generalization performance",
      "To generate adversarial examples for testing",
    ],
    correctAnswer: 1,
    explanation: "The validation dataset is used during the training process to tune hyperparameters and make model selection decisions. It provides an unbiased evaluation of model performance during development, separate from both training and final test data."
  },
  {
    id: 47,
    domain: "Domain 1: Introduction to AI and Testing",
    question: "A deep learning model for image classification has 100 layers. Which of the following is a concern?",
    options: [
      "More layers always guarantee better accuracy",
      "Deep learning models cannot have more than 10 layers",
      "Vanishing or exploding gradients can make training difficult",
      "The model will always underfit the data",
    ],
    correctAnswer: 2,
    explanation: "Very deep networks can suffer from vanishing or exploding gradients, where gradient values become too small or too large during backpropagation, making training difficult. Techniques like skip connections, batch normalization, and careful initialization help address this."
  },
  {
    id: 48,
    domain: "Domain 1: Introduction to AI and Testing",
    question: "Which phase of the AI lifecycle involves collecting and preparing the data that will be used for model training?",
    options: [
      "Model deployment",
      "Hyperparameter tuning",
      "Model monitoring",
      "Data engineering and preparation",
    ],
    correctAnswer: 3,
    explanation: "Data engineering and preparation is the phase where raw data is collected, cleaned, transformed, and prepared for model training. This phase includes handling missing values, feature engineering, and ensuring data quality."
  },
  {
    id: 49,
    domain: "Domain 1: Introduction to AI and Testing",
    question: "Which of the following best describes a neural network?",
    options: [
      "A computational model inspired by the human brain consisting of interconnected processing units organized in layers",
      "A database management system with node-based storage",
      "A type of decision tree with exactly two branches at each node",
      "A linear regression model with additional parameters",
    ],
    correctAnswer: 0,
    explanation: "A neural network is a computational model inspired by the human brain, consisting of interconnected processing units (neurons) organized in layers. Information flows through the network, with each connection having a weight that is adjusted during training."
  },
  {
    id: 50,
    domain: "Domain 1: Introduction to AI and Testing",
    question: "What is the key difference between the training set and the test set?",
    options: [
      "The training set is used to evaluate the model, while the test set is used to train it",
      "The training set is used to train the model, while the test set is used to evaluate its generalization performance on unseen data",
      "The training set and test set are the same thing",
      "The test set is always larger than the training set",
    ],
    correctAnswer: 1,
    explanation: "The training set is used to train the model by adjusting its parameters, while the test set consists of unseen data used to evaluate the model's generalization performance. Using different data ensures the evaluation is unbiased."
  },
  {
    id: 51,
    domain: "Domain 1: Introduction to AI and Testing",
    question: "Which of the following best describes 'computer vision'?",
    options: [
      "A field of AI focused on numerical optimization",
      "A type of database that stores visual data",
      "A field of AI that enables computers to interpret and understand visual information from images and videos",
      "A hardware component for displaying images on screens",
    ],
    correctAnswer: 2,
    explanation: "Computer vision is a field of AI that enables computers to interpret and understand visual information from images and videos. Applications include object detection, facial recognition, image classification, and autonomous navigation."
  },
  {
    id: 52,
    domain: "Domain 1: Introduction to AI and Testing",
    question: "In the AI system lifecycle, what activity occurs during the monitoring phase after deployment?",
    options: [
      "Training the model from scratch with new data only",
      "Removing all logging and monitoring tools",
      "Deleting all historical training data",
      "Continuously monitoring model performance, detecting data drift, and triggering retraining when necessary",
    ],
    correctAnswer: 3,
    explanation: "The monitoring phase involves continuously tracking model performance, detecting data and concept drift, and triggering retraining when performance degrades. This ensures the model remains effective in the production environment over time."
  },

  // Domain 2: Testing AI-Based Systems (16 questions)
  {
    id: 53,
    domain: "Domain 2: Testing AI-Based Systems",
    question: "Which of the following is a test strategy for handling the non-deterministic nature of AI outputs?",
    options: [
      "Use statistical testing approaches that evaluate output distributions rather than exact values",
      "Always compare outputs to a single exact expected value",
      "Skip testing entirely because AI outputs cannot be predicted",
      "Only test the training data",
    ],
    correctAnswer: 0,
    explanation: "Statistical testing approaches evaluate output distributions and patterns rather than exact values. This includes checking confidence intervals, distribution consistency, and statistical properties, which are more appropriate for non-deterministic AI systems."
  },
  {
    id: 54,
    domain: "Domain 2: Testing AI-Based Systems",
    question: "What is the primary goal of testing for bias in an AI system?",
    options: [
      "To ensure the model achieves the highest possible overall accuracy",
      "To identify and mitigate unfair discrimination against individuals or groups based on protected attributes",
      "To remove all training data that contains demographic information",
      "To replace the model with a rule-based system",
    ],
    correctAnswer: 1,
    explanation: "The primary goal of bias testing is to identify and mitigate unfair discrimination against individuals or groups based on protected attributes. This involves evaluating model outcomes across different demographic groups and taking corrective action when disparities are found."
  },
  {
    id: 55,
    domain: "Domain 2: Testing AI-Based Systems",
    question: "A tester wants to verify that an AI system's decisions are explainable. Which approach would be most appropriate?",
    options: [
      "Only checking the system's accuracy metrics",
      "Removing all documentation from the system",
      "Applying explainability techniques and verifying that generated explanations are understandable and consistent",
      "Only running performance benchmarks",
    ],
    correctAnswer: 2,
    explanation: "Testing explainability involves applying explainability techniques (like LIME, SHAP, or attention visualization) and verifying that the generated explanations are understandable by stakeholders and consistent with domain knowledge."
  },
  {
    id: 56,
    domain: "Domain 2: Testing AI-Based Systems",
    question: "Which quality characteristic is unique to AI systems and not typically considered in traditional software testing?",
    options: [
      "Performance efficiency",
      "Usability",
      "Functional correctness",
      "Fairness",
    ],
    correctAnswer: 3,
    explanation: "Fairness is a quality characteristic particularly important for AI systems and not typically a primary concern in traditional software testing. It ensures the system does not discriminate unfairly against individuals or groups based on protected attributes."
  },
  {
    id: 57,
    domain: "Domain 2: Testing AI-Based Systems",
    question: "A product recommendation system suggests high-value products more frequently to users from higher-income neighborhoods. What type of bias does this illustrate?",
    options: [
      "Outcome bias leading to unfair treatment",
      "Measurement bias",
      "Confirmation bias in testing",
      "Anchoring bias in data collection",
    ],
    correctAnswer: 0,
    explanation: "This illustrates outcome bias where the system produces unfair treatment by providing better recommendations based on neighborhood (correlated with income). The model has learned to associate location with purchasing power, creating disparate treatment."
  },
  {
    id: 58,
    domain: "Domain 2: Testing AI-Based Systems",
    question: "Which of the following is an appropriate test approach for a chatbot using NLP?",
    options: [
      "Testing only with perfectly formed grammatical sentences",
      "Testing with varied inputs including slang, misspellings, ambiguous phrasing, and adversarial prompts",
      "Testing only with pre-scripted conversations",
      "Skipping testing because NLP models are too complex to test",
    ],
    correctAnswer: 1,
    explanation: "NLP chatbots should be tested with varied inputs including slang, misspellings, ambiguous phrasing, and adversarial prompts. Real users communicate in diverse ways, so the system must handle non-ideal inputs gracefully."
  },
  {
    id: 59,
    domain: "Domain 2: Testing AI-Based Systems",
    question: "What is a 'heuristic oracle' in AI testing?",
    options: [
      "An oracle that always produces the exact correct answer",
      "An oracle based on the model's training data",
      "An oracle that uses approximate rules or general properties to determine whether a test has passed",
      "An oracle that runs only on specialized hardware",
    ],
    correctAnswer: 2,
    explanation: "A heuristic oracle uses approximate rules or general properties to determine whether a test has passed. For example, checking that a translation output is grammatically correct without verifying it's the exact expected translation."
  },
  {
    id: 60,
    domain: "Domain 2: Testing AI-Based Systems",
    question: "During acceptance testing of an AI system, which stakeholders should be involved?",
    options: [
      "Only the development team",
      "Only the quality assurance team",
      "Only the machine learning engineers",
      "End users, domain experts, and other stakeholders who can evaluate the system against business requirements",
    ],
    correctAnswer: 3,
    explanation: "Acceptance testing should involve end users, domain experts, and other stakeholders who can evaluate whether the AI system meets business requirements and is fit for purpose. Their domain knowledge is essential for evaluating quality characteristics like fairness and usability."
  },
  {
    id: 61,
    domain: "Domain 2: Testing AI-Based Systems",
    question: "A tester verifies that when the input to a weather prediction model is increased by 1 degree, the output changes within a reasonable range. What testing technique is this?",
    options: [
      "Metamorphic testing with a metamorphic relation based on input transformation",
      "Equivalence partitioning",
      "Boundary value analysis",
      "Statement coverage",
    ],
    correctAnswer: 0,
    explanation: "This is metamorphic testing. The tester defines a metamorphic relation: a small change in input should produce a reasonable change in output. This allows testing without knowing exact expected outputs."
  },
  {
    id: 62,
    domain: "Domain 2: Testing AI-Based Systems",
    question: "Which of the following data quality dimensions is most critical to test before using data to train an ML model?",
    options: [
      "The file size of the dataset",
      "The representativeness of the data relative to the production environment",
      "The file format (CSV, JSON, etc.)",
      "The programming language used to create the dataset",
    ],
    correctAnswer: 1,
    explanation: "Representativeness is critical because if training data doesn't reflect the production environment, the model will underperform on real-world data. This includes ensuring all relevant classes, scenarios, and edge cases are present in proportionate amounts."
  },
  {
    id: 63,
    domain: "Domain 2: Testing AI-Based Systems",
    question: "What is the purpose of A/B testing in the context of ML model deployment?",
        options: [
      "To test only the user interface of the application",
      "To eliminate the need for model monitoring",
      "To compare the performance of two different models or model versions by routing real traffic to each",
      "To determine which programming language should be used",
    ],
    correctAnswer: 2,
    explanation: "A/B testing in ML deployment compares two versions (A and B) by routing a portion of real traffic to each. This provides real-world performance data to make data-driven decisions about which model or version to deploy."
  },
  {
    id: 64,
    domain: "Domain 2: Testing AI-Based Systems",
    question: "Which metric is most appropriate for evaluating a spam detection model where missing a spam email is worse than flagging a legitimate email?",
    options: [
      "Accuracy, because it gives the overall correct prediction rate",
      "Mean absolute error, because it measures average prediction error",
      "Specificity, because it only measures true negatives",
      "Recall, because it measures the proportion of actual spam emails that were correctly identified",
    ],
    correctAnswer: 3,
    explanation: "When missing spam is worse than false alarms, recall is the priority metric because it measures how many actual spam emails were correctly identified. High recall means fewer spam emails are missed."
  },
  {
    id: 65,
    domain: "Domain 2: Testing AI-Based Systems",
    question: "A machine learning model deployed in a hospital needs to be tested for regulatory compliance. Which quality characteristic is particularly important?",
    options: [
      "Explainability, because healthcare regulations may require the ability to explain how a diagnosis was reached",
      "Only performance efficiency, because speed is the most critical factor",
      "Only security, because healthcare data must be encrypted",
      "Only compatibility, because the system must run on hospital computers",
    ],
    correctAnswer: 0,
    explanation: "In healthcare and other regulated domains, explainability is critical because regulations (such as GDPR's right to explanation) may require that the reasoning behind a model's decision can be explained to patients and regulators."
  },
  {
    id: 66,
    domain: "Domain 2: Testing AI-Based Systems",
    question: "What is the 'confidence threshold' in an AI classification system?",
    options: [
      "The maximum number of classes the model can predict",
      "A probability threshold above which the model's prediction is considered reliable enough to use",
      "The total number of training samples required",
      "The number of layers in the neural network",
    ],
    correctAnswer: 1,
    explanation: "A confidence threshold is a probability cutoff above which the model's prediction is considered reliable enough to act upon. Predictions below the threshold may be flagged for human review, improving the system's reliability."
  },
  {
    id: 67,
    domain: "Domain 2: Testing AI-Based Systems",
    question: "Which of the following is a valid approach to testing the robustness of an NLP model?",
    options: [
      "Only testing with grammatically perfect sentences",
      "Only testing with sentences from the training data",
      "Testing with paraphrases, synonyms, misspellings, and adversarial text inputs",
      "Only testing the model's response time",
    ],
    correctAnswer: 2,
    explanation: "Robustness testing for NLP models involves testing with diverse inputs including paraphrases, synonyms, misspellings, and adversarial text. This verifies the model handles real-world language variation and intentional attacks gracefully."
  },
  {
    id: 68,
    domain: "Domain 2: Testing AI-Based Systems",
    question: "A self-driving car system must make real-time decisions in unpredictable environments. Which testing approach is most effective?",
    options: [
      "Only unit testing individual sensor modules",
      "Only code review of the decision-making algorithm",
      "Only integration testing of all components",
      "A combination of simulation testing, scenario-based testing, and controlled real-world testing",
    ],
    correctAnswer: 3,
    explanation: "Autonomous vehicles require a combination of testing approaches: simulation for dangerous or rare scenarios, scenario-based testing for specific situations, and controlled real-world testing for validation. No single approach is sufficient."
  },

  // Domain 3: Using AI for Testing (12 questions)
  {
    id: 69,
    domain: "Domain 3: Using AI for Testing",
    question: "A company uses AI to automatically analyze user session recordings and identify common failure patterns. This is an example of:",
    options: [
      "AI-based test result analysis and defect detection",
      "AI-based performance testing only",
      "Manual test case design",
      "AI-based code compilation",
    ],
    correctAnswer: 0,
    explanation: "Analyzing user session recordings to identify failure patterns is AI-based test result analysis and defect detection. The AI helps testers discover issues that might be missed by manual analysis of individual sessions."
  },
  {
    id: 70,
    domain: "Domain 3: Using AI for Testing",
    question: "Which of the following is a limitation of using AI for generating test cases from requirements?",
    options: [
      "AI-generated test cases are always complete and need no review",
      "AI may misinterpret ambiguous requirements or generate test cases that lack domain-specific understanding",
      "AI can only generate test cases for non-functional requirements",
      "AI-generated test cases are always superior to manually written ones",
    ],
    correctAnswer: 1,
    explanation: "AI may misinterpret ambiguous requirements or generate test cases that lack domain-specific understanding. Human review is essential to ensure the generated tests are meaningful, accurate, and cover all relevant scenarios."
  },
  {
    id: 71,
    domain: "Domain 3: Using AI for Testing",
    question: "What is 'test suite optimization' using AI?",
    options: [
      "Deleting all test cases and starting over",
      "Running all test cases simultaneously on different machines",
      "Using AI to select, prioritize, and reduce test cases to maximize coverage while minimizing execution time",
      "Only keeping test cases that have found bugs in the past",
    ],
    correctAnswer: 2,
    explanation: "Test suite optimization uses AI to select, prioritize, and reduce test cases to maximize coverage while minimizing execution time. This includes identifying redundant tests, prioritizing by risk, and selecting the most effective subset."
  },
  {
    id: 72,
    domain: "Domain 3: Using AI for Testing",
    question: "How can AI improve API testing?",
        options: [
      "AI can only test REST APIs, not GraphQL",
      "AI can only test a single API endpoint at a time",
      "AI replaces the need for API documentation",
      "AI can generate diverse API test inputs based on API specifications and learn from previous test results",
    ],
    correctAnswer: 3,
    explanation: "AI can improve API testing by generating diverse test inputs based on API specifications, learning from previous test results to focus on error-prone areas, and automatically detecting inconsistencies between API specifications and actual behavior."
  },
  {
    id: 73,
    domain: "Domain 3: Using AI for Testing",
    question: "Which of the following is a consideration when selecting an AI tool for testing?",
    options: [
      "The tool's compatibility with existing testing infrastructure, its accuracy, and the team's ability to interpret its results",
      "The AI tool should always be the most expensive option available",
      "The tool should require no training or onboarding whatsoever",
      "The tool should replace all existing testing processes immediately",
    ],
    correctAnswer: 0,
    explanation: "When selecting an AI testing tool, key considerations include compatibility with existing infrastructure, the tool's accuracy and reliability, the team's ability to interpret results, and how well it integrates into the current testing workflow."
  },
  {
    id: 74,
    domain: "Domain 3: Using AI for Testing",
    question: "A testing team uses AI to identify flaky tests in their regression suite by analyzing historical test execution data. This helps them:",
    options: [
      "Increase the total number of tests without any benefit",
      "Improve test suite reliability by identifying and addressing tests that produce inconsistent results",
      "Eliminate the need for any regression testing",
      "Replace all automated tests with manual testing",
    ],
    correctAnswer: 1,
    explanation: "AI can analyze historical execution data to identify flaky tests—tests that sometimes pass and sometimes fail without code changes. Addressing these tests improves suite reliability and reduces false failures that erode team confidence."
  },
  {
    id: 75,
    domain: "Domain 3: Using AI for Testing",
    question: "Which of these describes how AI can assist with accessibility testing?",
    options: [
      "AI cannot assist with accessibility testing at all",
      "AI can only test color contrast issues",
      "AI can scan interfaces and automatically detect potential accessibility violations based on WCAG guidelines",
      "AI replaces the need for any manual accessibility review",
    ],
    correctAnswer: 2,
    explanation: "AI can scan user interfaces and automatically detect potential accessibility violations based on WCAG guidelines, such as missing alt text, poor color contrast, and keyboard navigation issues. This complements but does not replace manual accessibility review."
  },
  {
    id: 76,
    domain: "Domain 3: Using AI for Testing",
    question: "What role can AI play in security testing?",
    options: [
      "AI can completely eliminate all security vulnerabilities",
      "AI security testing requires no human expertise",
      "AI can only test for performance issues, not security",
      "AI can help identify potential vulnerabilities by analyzing code patterns, detecting anomalies, and simulating attack scenarios",
    ],
    correctAnswer: 3,
    explanation: "AI can assist security testing by analyzing code patterns for known vulnerability types, detecting anomalous behavior that might indicate security issues, and simulating attack scenarios to test system defenses."
  },
  {
    id: 77,
    domain: "Domain 3: Using AI for Testing",
    question: "A test team uses an LLM to generate test cases from a requirements document. The generated test cases should be:",
    options: [
      "Reviewed for accuracy, completeness, and relevance before being added to the test suite",
      "Accepted as-is without any modifications",
      "Used only for performance testing",
      "Discarded because AI-generated tests are never useful",
    ],
    correctAnswer: 0,
    explanation: "AI-generated test cases should be reviewed for accuracy, completeness, and relevance. The LLM may misinterpret requirements, miss edge cases, or generate irrelevant tests. Human oversight ensures quality and applicability."
  },
  {
    id: 78,
    domain: "Domain 3: Using AI for Testing",
    question: "Which of the following is a best practice when implementing AI-assisted testing?",
    options: [
      "Replace all existing test processes immediately with AI-powered ones",
      "Start with a pilot project, evaluate results, and gradually expand AI use based on demonstrated value",
      "Avoid using AI for testing entirely due to its limitations",
      "Use AI tools only for test documentation",
    ],
    correctAnswer: 1,
    explanation: "Best practice is to start with a pilot project, evaluate the results carefully, and gradually expand AI use based on demonstrated value. This allows the team to learn, adjust processes, and build confidence in the AI tools before scaling."
  },
  {
    id: 79,
    domain: "Domain 3: Using AI for Testing",
    question: "How can AI be used to support regression testing?",
    options: [
      "AI can only be used for new feature testing, not regression",
      "AI eliminates the need for regression testing entirely",
      "AI can identify which regression tests are most likely to fail based on code changes, and detect unexpected behavioral changes",
      "AI can only run regression tests in the same order every time",
    ],
    correctAnswer: 2,
    explanation: "AI can support regression testing by identifying which tests are most likely to fail based on code changes (test selection), detecting unexpected behavioral changes (visual and functional regression), and optimizing the regression suite."
  },
  {
    id: 80,
    domain: "Domain 3: Using AI for Testing",
    question: "Which ethical concern should testers be aware of when using AI tools for testing?",
    options: [
      "AI testing tools always violate privacy regulations",
      "Ethical concerns do not apply to AI testing tools",
      "AI tools always produce perfect results without any bias",
      "AI tools may reproduce biases present in their training data, potentially creating biased test scenarios or overlooking important test cases",
    ],
    correctAnswer: 3,
    explanation: "AI tools may reproduce biases present in their training data, which could lead to biased test scenarios, overlooked edge cases affecting certain groups, or skewed prioritization. Testers must be aware of this and actively check for bias in AI-generated testing artifacts."
  },
];
