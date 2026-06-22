import type { ExamQuestion } from '@/types';

export const questions: ExamQuestion[] = [
  // Domain 1: Introduction to AI and Testing (12 questions - K1/K2/K3)
  {
    id: 1,
    domain: "Domain 1: Introduction to AI and Testing",
    question: "Which of the following best describes artificial intelligence?",
    options: [
      "A system that exhibits behavior that appears intelligent by simulating human cognitive functions",
      "A system that can only perform arithmetic calculations faster than humans",
      "A database system that stores large volumes of information for retrieval",
      "A hardware component that accelerates graphics rendering",
    ],
    correctAnswer: 0,
    explanation: "AI refers to systems that exhibit behavior appearing intelligent by simulating human cognitive functions such as learning, reasoning, and problem-solving. It is not limited to computation speed, data storage, or hardware acceleration."
  },
  {
    id: 2,
    domain: "Domain 1: Introduction to AI and Testing",
    question: "What is the key difference between narrow AI and general AI?",
    options: [
      "Narrow AI operates within limited domains, while general AI can perform any intellectual task a human can",
      "Narrow AI is always less accurate than general AI",
      "Narrow AI uses neural networks, while general AI uses rule-based systems",
      "Narrow AI requires more training data than general AI",
    ],
    correctAnswer: 0,
    explanation: "Narrow (or weak) AI is designed for specific tasks within limited domains, such as image recognition or language translation. General (or strong) AI would be capable of performing any intellectual task that a human can, but this does not yet exist in practice."
  },
  {
    id: 3,
    domain: "Domain 1: Introduction to AI and Testing",
    question: "Which type of machine learning uses labeled training data to learn a mapping from inputs to outputs?",
    options: [
      "Reinforcement learning",
      "Unsupervised learning",
      "Supervised learning",
      "Self-supervised learning",
    ],
    correctAnswer: 2,
    explanation: "Supervised learning uses labeled training data where each input is paired with the correct output. The model learns to map inputs to outputs, enabling it to make predictions on new, unseen data."
  },
  {
    id: 4,
    domain: "Domain 1: Introduction to AI and Testing",
    question: "In unsupervised learning, which of the following is a primary objective?",
    options: [
      "To classify inputs into predefined categories using labeled data",
      "To maximize a reward signal through trial-and-error interaction",
      "To discover hidden patterns and structures in unlabeled data",
      "To generate new data samples that match the training distribution",
    ],
    correctAnswer: 2,
    explanation: "Unsupervised learning works with unlabeled data and aims to discover hidden patterns, groupings, or structures in the data. Common techniques include clustering and dimensionality reduction."
  },
  {
    id: 5,
    domain: "Domain 1: Introduction to AI and Testing",
    question: "A self-driving car learns to navigate by receiving positive rewards for safe driving and penalties for collisions. Which type of machine learning is this?",
    options: [
      "Supervised learning",
      "Unsupervised learning",
      "Reinforcement learning",
      "Transfer learning",
    ],
    correctAnswer: 2,
    explanation: "Reinforcement learning trains agents through trial and error using a reward signal. The agent learns to maximize cumulative rewards by interacting with its environment, making it suitable for sequential decision-making tasks like autonomous driving."
  },
  {
    id: 6,
    domain: "Domain 1: Introduction to AI and Testing",
    question: "Which of the following is a defining characteristic of a deep neural network?",
    options: [
      "It uses a single layer of processing units",
      "It contains multiple hidden layers between input and output",
      "It can only process numerical data",
      "It does not require any training data",
    ],
    correctAnswer: 1,
    explanation: "Deep neural networks are characterized by having multiple hidden layers between the input and output layers. These layers enable the network to learn hierarchical representations, where each layer extracts increasingly abstract features from the data."
  },
  {
    id: 7,
    domain: "Domain 1: Introduction to AI and Testing",
    question: "Which of the following statements about the AI system lifecycle is correct?\n\ni. Data collection and preparation is an early phase of the AI lifecycle\nii. Deployment is the final phase, with no further activities needed\niii. Monitoring and maintenance are ongoing activities after deployment\niv. Model training is only performed once and never repeated",
    options: [
      "i and iii only",
      "i and iv only",
      "ii and iii only",
      "ii and iv only",
    ],
    correctAnswer: 0,
    explanation: "Data collection and preparation is indeed an early phase (i). Monitoring and maintenance are essential ongoing activities, as model performance can degrade over time due to data drift (iii). Deployment is not the final activity—ongoing monitoring is needed (ii is false). Model training may need to be repeated as new data becomes available (iv is false)."
  },
  {
    id: 8,
    domain: "Domain 1: Introduction to AI and Testing",
    question: "What is a convolutional neural network (CNN) primarily designed for?",
    options: [
      "Processing sequential data such as time series",
      "Processing grid-like data such as images",
      "Generating natural language text",
      "Performing reinforcement learning tasks",
    ],
    correctAnswer: 1,
    explanation: "CNNs are designed to process grid-like data structures, particularly images. They use convolutional layers that apply filters to detect features such as edges, textures, and patterns, making them highly effective for computer vision tasks."
  },
  {
    id: 9,
    domain: "Domain 1: Introduction to AI and Testing",
    question: "Which of the following best describes natural language processing (NLP)?",
    options: [
      "A technique for optimizing database queries",
      "A field of AI focused on enabling computers to understand, interpret, and generate human language",
      "A method for compressing image files",
      "A type of neural network used exclusively for numerical computation",
    ],
    correctAnswer: 1,
    explanation: "NLP is a field of AI focused on enabling computers to understand, interpret, and generate human language. Applications include machine translation, sentiment analysis, speech recognition, and chatbots."
  },
  {
    id: 10,
    domain: "Domain 1: Introduction to AI and Testing",
    question: "A company develops an AI system for loan approval decisions. The system was trained on historical data that reflects past discriminatory practices. What is the primary risk?",
    options: [
      "The system will be too slow to process applications",
      "The system will perpetuate or amplify existing biases in its decisions",
      "The system will be unable to handle numerical inputs",
      "The system will require too much memory",
    ],
    correctAnswer: 1,
    explanation: "When an AI system is trained on biased historical data, it learns and can perpetuate or amplify those biases. This is a significant concern in high-stakes domains like lending, hiring, and criminal justice, where biased decisions can cause real harm."
  },
  {
    id: 11,
    domain: "Domain 1: Introduction to AI and Testing",
    question: "Which of the following is a key impact of AI on traditional software testing?",
    options: [
      "AI systems require no testing because they learn from data",
      "AI introduces new quality characteristics such as fairness and explainability that must be tested",
      "AI eliminates the need for test automation",
      "AI makes traditional test levels (unit, integration, system) obsolete",
    ],
    correctAnswer: 1,
    explanation: "AI introduces new quality characteristics that go beyond traditional software quality, including fairness, explainability, transparency, and robustness. These must be tested in addition to conventional quality attributes."
  },
  {
    id: 12,
    domain: "Domain 1: Introduction to AI and Testing",
    question: "A tester needs to verify that an ML classification model's accuracy meets the acceptance threshold on a held-out dataset. Which test level does this correspond to?",
    options: [
      "Unit testing of individual functions",
      "System testing of model quality",
      "Integration testing of components",
      "Acceptance testing of business requirements",
    ],
    correctAnswer: 1,
    explanation: "Evaluating a trained model's accuracy on a held-out dataset is a system-level test of model quality. This assesses whether the model as a whole meets its quality requirements, distinguishing it from unit-level tests of individual components."
  },

  // Domain 2: Testing AI-Based Systems (16 questions)
  {
    id: 13,
    domain: "Domain 2: Testing AI-Based Systems",
    question: "Which of the following is a characteristic of data quality that is particularly important for ML model training?",
    options: [
      "Completeness, accuracy, and consistency of data",
      "The data must always be in CSV format",
      "The data must contain at least one million records",
      "The data must be generated synthetically",
    ],
    correctAnswer: 0,
    explanation: "Data quality dimensions important for ML include completeness (no missing critical values), accuracy (values correctly represent reality), and consistency (no contradictory entries). These directly affect model training and performance."
  },
  {
    id: 14,
    domain: "Domain 2: Testing AI-Based Systems",
    question: "What is data drift in the context of ML systems?",
    options: [
      "A technique for improving model training speed",
      "A change in the statistical properties of the input data over time compared to the training data",
      "A method for transferring a model from one server to another",
      "The intentional removal of training data to reduce model size",
    ],
    correctAnswer: 1,
    explanation: "Data drift (or covariate shift) occurs when the statistical properties of the input data change over time, causing the model's performance to degrade because it was trained on data with different characteristics."
  },
  {
    id: 15,
    domain: "Domain 2: Testing AI-Based Systems",
    question: "A model is designed to classify medical images as either healthy or diseased. When tested on images from a different hospital than the training data, accuracy drops significantly. What type of bias is most likely responsible?",
    options: [
      "Sample bias in the training data",
      "Confirmation bias in the test design",
      "Availability bias in the reporting",
      "Anchoring bias in the model architecture",
    ],
    correctAnswer: 0,
    explanation: "Sample bias occurs when the training data is not representative of the data the model encounters in production. If the medical images come from specific hospitals or equipment, the model may not generalize well to images from other sources."
  },
  {
    id: 16,
    domain: "Domain 2: Testing AI-Based Systems",
    question: "Which of the following best describes 'fairness' as a quality characteristic for AI systems?",
    options: [
      "The system processes all requests at the same speed",
      "The system provides equal storage capacity for all users",
      "The system does not discriminate unfairly against individuals or groups based on protected attributes",
      "The system uses the same algorithm for all input types",
    ],
    correctAnswer: 2,
    explanation: "Fairness in AI means the system does not discriminate unfairly against individuals or groups based on protected attributes such as race, gender, age, or ethnicity. Testing fairness involves checking for disparate impact and ensuring equitable outcomes across demographic groups."
  },
  {
    id: 17,
    domain: "Domain 2: Testing AI-Based Systems",
    question: "What is 'explainability' in the context of AI systems?",
    options: [
      "The ability of an AI system to generate natural language documentation",
      "The degree to which a human can understand the cause of a decision made by the AI system",
      "The ability of an AI system to run on multiple hardware platforms",
      "The process of training a model with more data to improve accuracy",
    ],
    correctAnswer: 1,
    explanation: "Explainability refers to the degree to which a human can understand the cause of a decision made by an AI system. It is crucial for trust, debugging, and regulatory compliance, especially in high-stakes applications like healthcare and finance."
  },
  {
    id: 18,
    domain: "Domain 2: Testing AI-Based Systems",
    question: "Metamorphic testing is particularly useful for AI systems because:",
    options: [
      "It eliminates the need for any test data",
      "It addresses the oracle problem by verifying relationships between outputs of multiple executions",
      "It can only be applied to deterministic systems",
      "It replaces the need for model accuracy testing",
    ],
    correctAnswer: 1,
    explanation: "Metamorphic testing addresses the oracle problem (determining expected outputs) by defining relationships (metamorphic relations) between outputs of multiple executions. If input A is transformed in a specific way, the output should change in a predictable way."
  },
  {
    id: 19,
    domain: "Domain 2: Testing AI-Based Systems",
    question: "A tester creates a metamorphic relation for a temperature conversion model: if the input is doubled, the output in Fahrenheit should also increase by a predictable amount. This is an example of which testing approach?",
    options: [
      "Boundary value analysis",
      "Metamorphic testing with a metamorphic relation",
      "Equivalence partitioning",
      "Statement coverage testing",
    ],
    correctAnswer: 1,
    explanation: "This is metamorphic testing. The tester defines a metamorphic relation: a predictable relationship between outputs when inputs are transformed. This allows testing without knowing the exact expected output for each input."
  },
  {
    id: 20,
    domain: "Domain 2: Testing AI-Based Systems",
    question: "What is adversarial testing in the context of AI systems?",
    options: [
      "Testing that pits two models against each other in competition",
      "Testing by creating inputs specifically designed to cause the model to make mistakes",
      "Testing only the security aspects of the system",
      "Testing performed exclusively by external auditors",
    ],
    correctAnswer: 3,
    explanation: "Adversarial testing involves creating inputs specifically designed to cause the AI model to make mistakes. These adversarial examples test the robustness of the model by slightly perturbing normal inputs in ways that are often imperceptible to humans but cause misclassification."
  },
  {
    id: 21,
    domain: "Domain 2: Testing AI-Based Systems",
    question: "Which of the following statements about testing autonomous systems is correct?\n\ni. Autonomous systems can operate in dynamic, unpredictable environments\nii. Exhaustive testing of all possible scenarios is feasible for autonomous systems\niii. Autonomous systems may need to be tested using simulation environments\niv. Safety is a critical quality characteristic for autonomous systems",
    options: [
      "i, ii, and iii only",
      "i, iii, and iv only",
      "ii, iii, and iv only",
      "i, ii, and iv only",
    ],
    correctAnswer: 3,
    explanation: "Autonomous systems operate in dynamic, unpredictable environments (i). Simulation environments are essential because real-world testing cannot cover all scenarios (iii). Safety is critical since failures can cause harm (iv). However, exhaustive testing of all possible scenarios is not feasible (ii is false)."
  },
  {
    id: 22,
    domain: "Domain 2: Testing AI-Based Systems",
    question: "What is the 'oracle problem' in software testing?",
    options: [
      "The challenge of connecting to a database during testing",
      "The problem of determining the expected correct output for a given test input, especially for non-deterministic systems",
      "The difficulty of selecting which test cases to execute first",
      "The challenge of training a machine learning model",
    ],
    correctAnswer: 3,
    explanation: "The oracle problem refers to the difficulty of determining the expected correct output for a given test input. This is especially challenging for AI systems, which often produce probabilistic outputs where there is no single definitively correct answer."
  },
  {
    id: 23,
    domain: "Domain 2: Testing AI-Based Systems",
    question: "During integration testing of an AI system, which of the following should be verified?",
    options: [
      "Only the ML model's accuracy metrics",
      "The correct interaction between the ML model and its surrounding data pipeline and application components",
      "Only the user interface elements",
      "Only the model training process",
    ],
    correctAnswer: 3,
    explanation: "Integration testing of an AI system verifies that the ML model correctly interacts with its surrounding components, including data pipelines, preprocessing modules, and application components. An accurate model can still produce incorrect results if data feeds are broken or outputs are misprocessed."
  },
  {
    id: 24,
    domain: "Domain 2: Testing AI-Based Systems",
    question: "A bank uses an AI system for credit scoring. After deployment, the model's performance degrades because customer behavior has changed since training. Which concept best describes this?",
    options: [
      "Concept drift",
      "Overfitting",
      "Data augmentation",
      "Transfer learning",
    ],
    correctAnswer: 0,
    explanation: "Concept drift occurs when the relationship between input features and the target variable changes over time. When customer behavior shifts, the mapping from features to credit risk that the model learned during training no longer holds, causing performance degradation."
  },
  {
    id: 25,
    domain: "Domain 2: Testing AI-Based Systems",
    question: "Which of the following is a heuristic oracle for testing an AI-based system?",
    options: [
      "Comparing the model output to the exact expected output from a specification",
      "Checking that the output falls within a plausible range or satisfies general properties rather than exact values",
      "Running the same input twice and verifying identical outputs",
      "Measuring the code coverage of unit tests",
    ],
    correctAnswer: 2,
    explanation: "Heuristic oracles check that outputs fall within a plausible range or satisfy general properties rather than exact values. This is useful for AI systems where exact outputs may be difficult to specify, but reasonable bounds can be defined."
  },
  {
    id: 26,
    domain: "Domain 2: Testing AI-Based Systems",
    question: "A team is testing a facial recognition system and needs to verify it works equally well across different demographic groups. This is testing which quality characteristic?",
    options: [
      "Performance efficiency",
      "Fairness",
      "Maintainability",
      "Compatibility",
    ],
    correctAnswer: 3,
    explanation: "Testing that a facial recognition system works equally well across different demographic groups is testing fairness. Fairness testing ensures the system does not exhibit disparate impact or varying performance across protected groups."
  },
  {
    id: 27,
    domain: "Domain 2: Testing AI-Based Systems",
    question: "Which test level involves testing the AI system as a whole to ensure it meets business requirements and user expectations?",
    options: [
      "Unit testing of individual model layers",
      "Acceptance testing",
      "Integration testing of data pipelines",
      "Code review of training scripts",
    ],
    correctAnswer: 2,
    explanation: "Acceptance testing evaluates the AI system as a whole against business requirements and user expectations. It ensures the system delivers value in its operational context, including quality characteristics like fairness, transparency, and robustness."
  },
  {
    id: 28,
    domain: "Domain 2: Testing AI-Based Systems",
    question: "What is bias in the context of ML systems?",
    options: [
      "A mathematical optimization technique used during training",
      "Systematic and unfair discrimination in model outputs caused by biased data, assumptions, or design choices",
      "The random variation in model outputs across different runs",
      "A regularization technique to prevent overfitting",
    ],
    correctAnswer: 3,
    explanation: "Bias in ML refers to systematic and unfair discrimination in model outputs. It can arise from biased training data, flawed assumptions, or design choices that favor certain groups. Detecting and mitigating bias is essential for ensuring fair AI systems."
  },

  // Domain 3: Using AI for Testing (12 questions)
  {
    id: 29,
    domain: "Domain 3: Using AI for Testing",
    question: "Which of the following is a way AI can be used for test generation?",
    options: [
      "AI can analyze specifications and requirements to automatically generate test cases",
      "AI can only generate unit tests but not integration tests",
      "AI replaces the need for any human involvement in testing",
      "AI guarantees that all generated tests will find bugs",
    ],
    correctAnswer: 0,
    explanation: "AI can analyze specifications, requirements, and other artifacts to automatically generate test cases. This includes generating test inputs, expected results, and even identifying coverage gaps that human testers might miss."
  },
  {
    id: 30,
    domain: "Domain 3: Using AI for Testing",
    question: "How can AI be used to create test oracles?",
    options: [
      "AI cannot be used to create test oracles",
      "AI can learn patterns from existing test results and system behavior to predict expected outcomes for new tests",
      "AI can only create oracles for deterministic systems",
      "AI creates oracles by randomly generating expected outputs",
    ],
    correctAnswer: 2,
    explanation: "AI can learn patterns from existing test results and system behavior to predict expected outcomes for new tests. This is especially useful for systems where traditional oracles are difficult to define, such as complex AI-based systems."
  },
  {
    id: 31,
    domain: "Domain 3: Using AI for Testing",
    question: "What is the primary benefit of using AI for test optimization?",
    options: [
      "It eliminates all bugs from the software",
      "It can prioritize and select the most relevant test cases to run based on risk, coverage, and historical data",
      "It replaces the need for any manual testing",
      "It can only optimize tests written in specific programming languages",
    ],
    correctAnswer: 3,
    explanation: "AI-based test optimization uses historical data, risk analysis, and coverage information to prioritize and select the most relevant test cases. This reduces execution time while maintaining effective coverage."
  },
  {
    id: 32,
    domain: "Domain 3: Using AI for Testing",
    question: "A testing team uses an AI tool that analyzes past test executions to identify which tests are most likely to fail based on recent code changes. This is an example of:",
    options: [
      "AI-based test execution",
      "AI-based test optimization (test selection and prioritization)",
      "AI-based test oracle creation",
      "AI-based requirement analysis",
    ],
    correctAnswer: 0,
    explanation: "Using AI to analyze past executions and code changes to identify which tests are most likely to fail is test optimization, specifically test selection and prioritization. This ensures the most impactful tests are run first."
  },
  {
    id: 33,
    domain: "Domain 3: Using AI for Testing",
    question: "Which of the following is a challenge of using AI for test generation?",
    options: [
      "AI-generated tests always produce exact expected results",
      "AI-generated tests may not align with business requirements if not properly guided",
      "AI can only generate tests for web applications",
      "AI-generated tests never find real defects",
    ],
    correctAnswer: 2,
    explanation: "A key challenge is that AI-generated tests may not align with business requirements if the AI is not properly guided with context and domain knowledge. Human oversight is needed to ensure generated tests are meaningful and relevant."
  },
  {
    id: 34,
    domain: "Domain 3: Using AI for Testing",
    question: "How can AI assist with test execution?",
    options: [
      "AI can execute tests faster by identifying and prioritizing test cases, handling flaky tests, and automating environment setup",
      "AI can execute tests without any test framework",
      "AI can only assist with manual testing, not automated testing",
      "AI completely eliminates the need for test environments",
    ],
    correctAnswer: 0,
    explanation: "AI can assist with test execution by prioritizing test cases, detecting and handling flaky tests, automating environment setup, and managing test data. This improves efficiency and reliability of the test execution process."
  },
  {
    id: 35,
    domain: "Domain 3: Using AI for Testing",
    question: "Which of the following is a risk of using AI for testing?\n\ni. AI tools may produce hallucinations or incorrect suggestions\nii. AI tools may have biases that affect test coverage\niii. AI testing tools are always 100% accurate\niv. AI-generated tests may lack domain-specific understanding",
    options: [
      "i, ii, and iv only",
      "i, ii, and iii only",
      "ii, iii, and iv only",
      "i, iii, and iv only",
    ],
    correctAnswer: 0,
    explanation: "AI tools can produce hallucinations or incorrect suggestions (i), may have biases affecting test coverage (ii), and generated tests may lack domain-specific understanding (iv). Statement iii is false because AI testing tools are not always 100% accurate."
  },
  {
    id: 36,
    domain: "Domain 3: Using AI for Testing",
    question: "A system uses AI to automatically detect visual regressions in a web application by comparing screenshots. This is an example of:",
    options: [
      "AI assisting with test automation by performing visual regression testing",
      "AI replacing the need for any test cases",
      "AI creating new business requirements",
      "AI performing unit testing",
    ],
    correctAnswer: 3,
    explanation: "Using AI to detect visual regressions by comparing screenshots is an example of AI assisting with test automation. The AI identifies visual differences that a human tester might miss, enhancing the effectiveness of visual regression testing."
  },
  {
    id: 37,
    domain: "Domain 3: Using AI for Testing",
    question: "What is the role of AI in self-healing test automation?",
    options: [
      "AI writes all test cases from scratch without any human input",
      "AI automatically detects and repairs broken locators in automated tests when the application changes",
      "AI eliminates the need for test maintenance entirely",
      "AI only works with manual test cases",
    ],
    correctAnswer: 2,
    explanation: "In self-healing test automation, AI detects when locators (e.g., XPath, CSS selectors) break due to application changes and automatically identifies alternative locators to repair the test. This reduces maintenance effort and increases test suite resilience."
  },
  {
    id: 38,
    domain: "Domain 3: Using AI for Testing",
    question: "Which of the following is a limitation of using AI for test oracle creation?",
    options: [
      "AI oracles are always less accurate than manual oracles",
      "AI oracles may produce false positives or miss subtle defects due to their probabilistic nature",
      "AI oracles can only be created for web applications",
      "AI oracles require zero training data",
    ],
    correctAnswer: 3,
    explanation: "AI oracles, being based on probabilistic models, may produce false positives or miss subtle defects. They learn from patterns in training data and may not accurately predict expected outcomes for edge cases or novel situations."
  },
  {
    id: 39,
    domain: "Domain 3: Using AI for Testing",
    question: "A team uses an LLM to analyze user stories and generate test cases. To ensure quality, the team should:",
    options: [
      "Blindly accept all AI-generated test cases without review",
      "Review and validate AI-generated test cases against requirements and domain knowledge",
      "Only use AI-generated test cases for unit testing",
      "Discard all AI-generated test cases and write them manually",
    ],
    correctAnswer: 2,
    explanation: "Human review and validation of AI-generated test cases is essential. Testers should verify that the generated tests align with requirements, cover relevant scenarios, and contain correct expected outputs. AI augments but does not replace human judgment."
  },
  {
    id: 40,
    domain: "Domain 3: Using AI for Testing",
    question: "Which of the following best describes how AI can support exploratory testing?",
    options: [
      "AI replaces exploratory testing entirely with automated scripts",
      "AI can suggest areas to explore, identify anomalies in session data, and help testers focus on high-risk areas",
      "AI can only support exploratory testing for mobile applications",
      "AI makes exploratory testing unnecessary",
    ],
    correctAnswer: 3,
    explanation: "AI can support exploratory testing by suggesting areas to explore based on risk analysis, identifying anomalies in session data, and helping testers focus on high-risk areas. This enhances the tester's exploratory capabilities rather than replacing them."
  }
];