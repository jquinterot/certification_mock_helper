import type { ExamQuestion } from '@/types';

export const questions: ExamQuestion[] = [
  {
    id: 1,
    domain: "Domain 2: Testing AI-Based Systems",
    question: "What does it mean for training data to be 'representative'?",
    options: [
      "The data must contain exactly equal numbers of each category",
      "The data should accurately reflect the diversity and distribution of scenarios the model will encounter in production",
      "The data should be as large as possible without regard to content",
      "The data must be collected from only one source",
    ],
    correctAnswer: 1,
    explanation: "Representative training data accurately reflects the diversity and distribution of scenarios the model will encounter in production. Without representativeness, the model may perform poorly on underrepresented groups or scenarios."
  },
  {
    id: 2,
    domain: "Domain 2: Testing AI-Based Systems",
    question: "Which of the following is a technique for testing the fairness of an AI system?",
    options: [
      "Testing only the overall accuracy of the model",
      "Comparing model performance across different demographic groups to detect disparate impact",
      "Removing all demographic information from the system",
      "Testing only on the training data",
    ],
    correctAnswer: 1,
    explanation: "Fairness testing involves comparing model performance (accuracy, false positive rates, etc.) across different demographic groups. Disparate impact or significantly different performance across groups indicates potential fairness issues."
  },
  {
    id: 3,
    domain: "Domain 2: Testing AI-Based Systems",
    question: "What is a key challenge in testing AI-based systems compared to conventional software?",
    options: [
      "AI systems are always easier to test because they learn from data",
      "AI systems often produce non-deterministic outputs, making it difficult to define precise expected results",
      "AI systems have simpler architectures than conventional software",
      "AI systems do not have any bugs",
    ],
    correctAnswer: 1,
    explanation: "AI systems often produce non-deterministic or probabilistic outputs because they learn from data and may make different predictions for similar inputs. This makes it challenging to define precise expected results, known as the oracle problem."
  },
  {
    id: 4,
    domain: "Domain 2: Testing AI-Based Systems",
    question: "An image classifier is tested by slightly modifying a stop sign image, causing the model to misclassify it as a speed limit sign. This is an example of:",
    options: [
      "Regression testing",
      "Adversarial testing revealing a robustness vulnerability",
      "Boundary value analysis",
      "Smoke testing",
    ],
    correctAnswer: 1,
    explanation: "This is adversarial testing, specifically testing for robustness vulnerabilities. Small, imperceptible modifications to inputs that cause misclassification reveal that the model's decision boundaries are not robust."
  },
  {
    id: 5,
    domain: "Domain 2: Testing AI-Based Systems",
    question: "Why is it important to test an AI system with data that was not used during training?",
    options: [
      "To make the testing process take longer",
      "To evaluate the model's ability to generalize to new, unseen data rather than memorizing training examples",
      "Because training data cannot be used for any testing purpose",
      "To ensure the test data is always smaller than the training data",
    ],
    correctAnswer: 1,
    explanation: "Testing with unseen data evaluates generalization—whether the model has learned generalizable patterns or memorized training examples. A model that performs well only on training data is overfitted and unreliable in production."
  },
  {
    id: 6,
    domain: "Domain 2: Testing AI-Based Systems",
    question: "Which quality characteristic relates to how well humans can understand the reasoning behind an AI system's decisions?",
    options: [
      "Performance efficiency",
      "Explainability",
      "Compatibility",
      "Maintainability",
    ],
    correctAnswer: 0,
    explanation: "Explainability (or interpretability) refers to how well humans can understand the reasoning behind an AI system's decisions. It is crucial for building trust, debugging, and meeting regulatory requirements."
  },
  {
    id: 7,
    domain: "Domain 2: Testing AI-Based Systems",
    question: "A model trained on data from one country performs poorly when deployed in another country. What is the most likely cause?",
    options: [
      "The model has too many parameters",
      "The training data was not representative of the deployment environment, causing a domain shift",
      "The model training algorithm was incorrect",
      "The test data was corrupted",
    ],
    correctAnswer: 2,
    explanation: "When training data doesn't represent the deployment environment, the model encounters data with different distributions—a domain shift. This causes performance degradation because the model learned patterns that don't transfer to the new context."
  },
  {
    id: 8,
    domain: "Domain 2: Testing AI-Based Systems",
    question: "What is a confusion matrix used for in testing ML models?",
    options: [
      "To make the model more confused and test its robustness",
      "To summarize the performance of a classification model by showing true positives, true negatives, false positives, and false negatives",
      "To display the architecture of a neural network",
      "To list the training data files used",
    ],
    correctAnswer: 3,
    explanation: "A confusion matrix summarizes classification performance by showing the counts of true positives, true negatives, false positives, and false negatives. From this, metrics like precision, recall, and F1 score can be calculated."
  },
  {
    id: 9,
    domain: "Domain 2: Testing AI-Based Systems",
    question: "A healthcare AI system must explain why it recommends a particular treatment. Which quality characteristic must be tested?",
    options: [
      "Only response time",
      "Explainability and transparency",
      "Only data storage capacity",
      "Only source code quality",
    ],
    correctAnswer: 0,
    explanation: "Healthcare AI systems often need to explain their recommendations due to regulatory requirements and clinical accountability. Testing explainability and transparency ensures the system can provide understandable justifications for its decisions."
  },
  {
    id: 10,
    domain: "Domain 2: Testing AI-Based Systems",
    question: "In metamorphic testing, what is a 'metamorphic relation'?",
    options: [
      "A relationship between two different AI models",
      "A defined relationship between the outputs of multiple executions when the inputs are transformed in a specific way",
      "A method for combining training and test data",
      "A programming pattern for implementing neural networks",
    ],
    correctAnswer: 2,
    explanation: "A metamorphic relation is a defined relationship between the outputs of multiple executions when inputs are transformed in a specific way. For example, if you reverse the order of items in a sorting input, the output should still be correctly sorted."
  }
];

export const questions2: ExamQuestion[] = [
  {
    id: 11,
    domain: "Domain 2: Testing AI-Based Systems",
    question: "Which of the following describes 'label noise' in training data?",
    options: [
      "Incorrect or inconsistent labels assigned to training examples",
      "Random noise added to input features to improve robustness",
      "Extra audio descriptions added to image data",
      "A regularization technique to prevent overfitting",
    ],
    correctAnswer: 0,
    explanation: "Label noise refers to incorrect or inconsistent labels in the training data. This can mislead the model during training, causing it to learn incorrect patterns and reducing its accuracy and reliability."
  },
  {
    id: 12,
    domain: "Domain 2: Testing AI-Based Systems",
    question: "When testing an autonomous vehicle, which approach addresses the infinite number of possible road scenarios?",
    options: [
      "Testing every possible scenario exhaustively",
      "Using scenario-based testing that covers critical edge cases combined with simulation for broader coverage",
      "Only testing on a closed track",
      "Relying solely on the vehicle's self-learning capabilities",
    ],
    correctAnswer: 3,
    explanation: "Since exhaustive testing is impossible for autonomous vehicles, scenario-based testing covers critical edge cases, and simulation provides broader coverage of rare and dangerous situations. This combination balances thoroughness with practicality."
  },
  {
    id: 13,
    domain: "Domain 2: Testing AI-Based Systems",
    question: "A sentiment analysis model classifies 95% of positive reviews correctly but only 50% of negative reviews. Which testing concern does this highlight?",
    options: [
      "The model has performance efficiency issues",
      "The model has class-specific performance imbalances that may indicate bias or insufficient negative examples",
      "The model has too many parameters",
      "The model's architecture is incorrect",
    ],
    correctAnswer: 2,
    explanation: "Significant imbalance in class-specific performance (95% vs 50%) indicates either insufficient training examples for the minority class, model bias, or both. This is important to test for, especially in applications where both classes matter."
  },
  {
    id: 14,
    domain: "Domain 2: Testing AI-Based Systems",
    question: "What is the primary purpose of testing data quality before model training?",
    options: [
      "To reduce the file size of the dataset",
      "To ensure the data is representative, complete, accurate, and free from bias that could affect model behavior",
      "To convert all data to the same file format",
      "To merge all datasets into one large dataset",
    ],
    correctAnswer: 3,
    explanation: "Testing data quality before training ensures the data is representative (covers expected scenarios), complete (no important missing values), accurate (correct values), and free from bias that could lead to unfair or unreliable model behavior."
  },
  {
    id: 15,
    domain: "Domain 2: Testing AI-Based Systems",
    question: "Which testing technique is most appropriate for verifying that an ML model meets its defined accuracy threshold?",
    options: [
      "Unit testing of individual functions",
      "System testing of model quality using a representative test dataset",
      "Integration testing of the data pipeline only",
      "Code review of the training script",
    ],
    correctAnswer: 0,
    explanation: "System testing of model quality involves evaluating the trained model on a representative test dataset to verify it meets defined accuracy thresholds. This tests the model as a whole, not individual components."
  },
  {
    id: 16,
    domain: "Domain 2: Testing AI-Based Systems",
    question: "A model's precision is 90% and recall is 60%. This means:",
    options: [
      "The model correctly identifies 90% of all actual positives and 60% of all actual negatives",
      "90% of the model's positive predictions are correct, but it only identifies 60% of all actual positives",
      "The model is 75% accurate overall",
      "The model identifies 60% of negatives correctly",
    ],
    correctAnswer: 2,
    explanation: "Precision of 90% means that when the model predicts positive, it is correct 90% of the time. Recall of 60% means the model identifies 60% of all actual positive cases. The trade-off between precision and recall depends on the application's requirements."
  },
  {
    id: 17,
    domain: "Domain 2: Testing AI-Based Systems",
    question: "Testing that an AI system behaves safely and predictably when encountering unexpected inputs is testing for which quality characteristic?",
    options: [
      "Maintainability",
      "Robustness",
      "Portability",
      "Compatibility",
    ],
    correctAnswer: 3,
    explanation: "Robustness is the quality characteristic that describes how well a system handles unexpected, invalid, or adversarial inputs. Testing robustness involves verifying the system degrades gracefully and does not produce dangerous outputs when faced with unexpected inputs."
  },
  {
    id: 18,
    domain: "Domain 2: Testing AI-Based Systems",
    question: "During integration testing of an AI system, which of the following should be verified?",
    options: [
      "Only the ML model's weights and biases",
      "The correct data flow and interaction between the ML model, data preprocessing, and application components",
      "Only the visual appearance of the user interface",
      "Only the model training process",
    ],
    correctAnswer: 0,
    explanation: "Integration testing verifies correct data flow and interaction between the ML model, data preprocessing pipeline, and application components. Even with a good model, incorrect data flow or interface mismatches can cause system failures."
  },
  {
    id: 19,
    domain: "Domain 2: Testing AI-Based Systems",
    question: "What is the role of a confusion matrix in evaluating model quality?",
    options: [
      "It shows only the model's overall accuracy percentage",
      "It provides a detailed breakdown of correct and incorrect predictions for each class, enabling calculation of precision, recall, and F1 score",
      "It displays the model's training time and memory usage",
      "It lists the features used by the model",
    ],
    correctAnswer: 2,
    explanation: "A confusion matrix provides a detailed breakdown of true positives, true negatives, false positives, and false negatives for each class. This enables calculation of multiple quality metrics (precision, recall, F1) for comprehensive model evaluation."
  },
  {
    id: 20,
    domain: "Domain 2: Testing AI-Based Systems",
    question: "Why is monitoring an AI system after deployment considered a testing activity?",
    options: [
      "It is not a testing activity; testing ends at deployment",
      "Because AI systems can degrade over time due to data drift and concept drift, requiring continuous quality assessment",
      "Because monitoring replaces all pre-deployment testing",
      "Because all AI systems fail immediately after deployment",
    ],
    correctAnswer: 3,
    explanation: "Post-deployment monitoring is a testing activity because AI systems can degrade over time due to data drift (input distribution changes) and concept drift (input-output relationship changes). Continuous monitoring ensures the system maintains acceptable performance."
  }
];