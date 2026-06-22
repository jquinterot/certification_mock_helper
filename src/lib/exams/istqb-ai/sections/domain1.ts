import type { ExamQuestion } from '@/types';

export const questions: ExamQuestion[] = [
  {
    id: 1,
    domain: "Domain 1: Introduction to AI and Testing",
    question: "Which of the following statements best describes machine learning?",
    options: [
      "A subset of AI where systems learn from data to improve performance on a specific task without being explicitly programmed",
      "A programming technique where all rules are manually coded by developers",
      "A database optimization method for faster query processing",
      "A hardware acceleration technique for faster computation",
    ],
    correctAnswer: 0,
    explanation: "Machine learning is a subset of AI where systems learn patterns from data to improve their performance on tasks without being explicitly programmed with rules. The model adjusts its parameters based on training data."
  },
  {
    id: 2,
    domain: "Domain 1: Introduction to AI and Testing",
    question: "What distinguishes deep learning from traditional machine learning?",
    options: [
      "Deep learning does not require any data for training",
      "Deep learning uses neural networks with multiple hidden layers to learn hierarchical representations",
      "Deep learning can only process numerical data",
      "Deep learning is always less accurate than traditional ML",
    ],
    correctAnswer: 1,
    explanation: "Deep learning uses neural networks with multiple hidden layers (hence 'deep') to learn hierarchical representations of data. Each layer captures increasingly abstract features, enabling the model to learn complex patterns automatically."
  },
  {
    id: 3,
    domain: "Domain 1: Introduction to AI and Testing",
    question: "A company uses clustering to group similar customer profiles without predefined categories. Which type of learning is this?",
    options: [
      "Supervised learning",
      "Unsupervised learning",
      "Reinforcement learning",
      "Transfer learning",
    ],
    correctAnswer: 1,
    explanation: "Clustering is an unsupervised learning technique that groups data points based on similarity without predefined labels or categories. The algorithm discovers natural groupings in the data without guidance on what the groups should be."
  },
  {
    id: 4,
    domain: "Domain 1: Introduction to AI and Testing",
    question: "Which of the following is an example of reinforcement learning?",
    options: [
      "A model that predicts house prices from labeled historical data",
      "An email filter that learns from labeled spam and non-spam examples",
      "A game-playing agent that learns optimal moves through trial and error with reward signals",
      "A model that groups similar images together without labels",
    ],
    correctAnswer: 2,
    explanation: "Reinforcement learning involves an agent learning through trial and error by interacting with an environment and receiving reward signals. A game-playing agent that learns optimal strategies through experience is a classic example."
  },
  {
    id: 5,
    domain: "Domain 1: Introduction to AI and Testing",
    question: "What is the main difference between training data and test data in ML?",
    options: [
      "Training data is used to evaluate the model; test data is used to train it",
      "Training data is used to train the model; test data is used to evaluate its generalization on unseen data",
      "Training data and test data are identical datasets",
      "Test data is always larger than training data",
    ],
    correctAnswer: 1,
    explanation: "Training data is used to train the model by adjusting its parameters, while test data consists of unseen examples used to evaluate the model's ability to generalize. Using separate datasets prevents overfitting to known examples."
  },
  {
    id: 6,
    domain: "Domain 1: Introduction to AI and Testing",
    question: "Which phase of the AI lifecycle comes immediately after model training?",
    options: [
      "Data collection",
      "Model evaluation and validation",
      "Feature engineering",
      "Problem definition",
    ],
    correctAnswer: 1,
    explanation: "After model training, the next phase is model evaluation and validation. This involves assessing the trained model's performance on validation and test datasets to determine if it meets quality requirements before deployment."
  },
  {
    id: 7,
    domain: "Domain 1: Introduction to AI and Testing",
    question: "How does AI impact the traditional testing process?",
    options: [
      "It makes traditional testing completely unnecessary",
      "It introduces new quality characteristics to test, such as fairness, transparency, and robustness, while traditional techniques remain applicable",
      "It only affects the performance testing aspect",
      "It reduces the need for any quality assurance",
    ],
    correctAnswer: 1,
    explanation: "AI introduces new quality characteristics (fairness, transparency, explainability, robustness) that require additional testing approaches. Traditional testing techniques remain applicable but are not sufficient on their own for AI systems."
  },
  {
    id: 8,
    domain: "Domain 1: Introduction to AI and Testing",
    question: "Which of the following describes a recurrent neural network (RNN)?",
    options: [
      "A network that processes grid-like data using convolution operations",
      "A network with loops that allow information to persist, making it suitable for sequential data",
      "A network consisting of a single layer of neurons",
      "A network that only processes numerical tabular data",
    ],
    correctAnswer: 3,
    explanation: "RNNs have loops that allow information to persist from one step to the next, making them suitable for sequential data like text, speech, and time series. They maintain a hidden state that captures information about previous inputs."
  },
  {
    id: 9,
    domain: "Domain 1: Introduction to AI and Testing",
    question: "An ML model is trained to detect fraudulent transactions. It achieves 99% accuracy on training data but only 60% on new data. What is the most likely cause?",
    options: [
      "Underfitting",
      "Overfitting to the training data",
      "Correct generalization",
      "Insufficient memory allocation",
    ],
    correctAnswer: 0,
    explanation: "The large performance gap between training (99%) and new data (60%) indicates overfitting. The model has memorized the training data, including noise, but fails to generalize to unseen data."
  },
  {
    id: 10,
    domain: "Domain 1: Introduction to AI and Testing",
    question: "Which of the following describes the relationship between AI, machine learning, and deep learning?",
    options: [
      "Deep learning is a subset of machine learning, which is a subset of AI",
      "AI is a subset of machine learning, which is a subset of deep learning",
      "AI, machine learning, and deep learning are completely independent fields",
      "Machine learning is a subset of deep learning, which is a subset of AI",
    ],
    correctAnswer: 0,
    explanation: "Deep learning is a subset of machine learning (using neural networks with multiple layers), and machine learning is a subset of AI (systems that learn from data). Each is a more specialized form of the broader category."
  }
];

export const questions2: ExamQuestion[] = [
  {
    id: 11,
    domain: "Domain 1: Introduction to AI and Testing",
    question: "What is the purpose of a validation set in the ML development process?",
    options: [
      "To serve as the final test of model performance on unseen data",
      "To tune model hyperparameters and make model selection decisions during development",
      "To provide the initial training data for the model",
      "To store backups of the trained model",
    ],
    correctAnswer: 2,
    explanation: "The validation set is used during development to tune hyperparameters and make model selection decisions. It provides an unbiased evaluation of model performance during training, separate from both training data and the final test set."
  },
  {
    id: 12,
    domain: "Domain 1: Introduction to AI and Testing",
    question: "Which of the following is a characteristic of supervised learning?",
    options: [
      "The model learns from unlabeled data by discovering patterns",
      "The model is trained on input-output pairs with known correct answers",
      "The model learns only through trial and error",
      "The model does not require any training data",
    ],
    correctAnswer: 3,
    explanation: "Supervised learning is characterized by training on input-output pairs where the correct answers (labels) are known. The model learns to map inputs to outputs, enabling it to make predictions on new, unseen data."
  },
  {
    id: 13,
    domain: "Domain 1: Introduction to AI and Testing",
    question: "A recommendation system suggests products based on a user's past behavior and similar users' preferences. What type of AI technique does this most likely use?",
    options: [
      "Unsupervised learning alone for grouping products",
      "A combination of techniques potentially including collaborative filtering, which is a form of ML",
      "Only rule-based logic without any learning",
      "Only reinforcement learning",
    ],
    correctAnswer: 2,
    explanation: "Recommendation systems typically use a combination of techniques. Collaborative filtering is a common ML approach that finds patterns in user behavior and similar users' preferences. Modern systems may also incorporate content-based filtering and deep learning."
  },
  {
    id: 14,
    domain: "Domain 1: Introduction to AI and Testing",
    question: "What is a key risk of deploying an AI system without proper testing?",
    options: [
      "The system might always produce perfect results",
      "The system might make incorrect or biased decisions that cause real-world harm",
      "The system might require too little memory",
      "The system might execute too quickly",
    ],
    correctAnswer: 3,
    explanation: "Untested AI systems can make incorrect or biased decisions that cause real-world harm, including financial loss, discrimination, safety hazards, or erosion of trust. Proper testing is essential to identify and mitigate these risks before deployment."
  },
  {
    id: 15,
    domain: "Domain 1: Introduction to AI and Testing",
    question: "Which of the following describes the concept of 'generalization' in ML?",
    options: [
      "The ability of a model to memorize all training data perfectly",
      "The ability of a model to perform well on new, unseen data by learning general patterns rather than memorizing",
      "The process of making a model more complex",
      "The process of converting a specialized model to a general-purpose one",
    ],
    correctAnswer: 0,
    explanation: "Generalization is the ability of a model to perform well on new, unseen data. A model that generalizes well has learned the underlying patterns rather than memorizing specific examples, making it useful for real-world applications."
  },
  {
    id: 16,
    domain: "Domain 1: Introduction to AI and Testing",
    question: "In the context of NLP, what is a transformer model?",
    options: [
      "A model that transforms numerical data into categorical data",
      "A neural network architecture that uses self-attention mechanisms to process sequential data in parallel",
      "A hardware device that accelerates AI processing",
      "A model that can only work with short text inputs",
    ],
    correctAnswer: 2,
    explanation: "Transformer models use self-attention mechanisms to process sequential data in parallel, capturing relationships between all positions in the input. This architecture revolutionized NLP and forms the basis of models like BERT and GPT."
  },
  {
    id: 17,
    domain: "Domain 1: Introduction to AI and Testing",
    question: "Which of the following test levels applies to testing the data preprocessing pipeline of an AI system?",
    options: [
      "Unit testing, verifying individual preprocessing functions work correctly",
      "System testing of the entire deployed application",
      "Acceptance testing by end users",
      "Performance testing of production servers",
    ],
    correctAnswer: 0,
    explanation: "Unit testing is appropriate for verifying individual data preprocessing functions (e.g., normalization, encoding, feature extraction). Each function should be tested in isolation to ensure it correctly transforms the data."
  },
  {
    id: 18,
    domain: "Domain 1: Introduction to AI and Testing",
    question: "What is feature engineering?",
    options: [
      "Deploying an ML model to production servers",
      "The process of selecting, transforming, or creating input features from raw data to improve model performance",
      "The architectural design of a neural network",
      "The process of collecting training data from users",
    ],
    correctAnswer: 3,
    explanation: "Feature engineering is the process of selecting, transforming, or creating input features from raw data to improve model performance. Well-designed features can significantly impact model accuracy and reduce training complexity."
  },
  {
    id: 19,
    domain: "Domain 1: Introduction to AI and Testing",
    question: "An AI system is described as a 'black box.' What does this mean?",
    options: [
      "The system is physically enclosed in a black container",
      "The system's internal decision-making process is not transparent or interpretable to humans",
      "The system only processes data at night",
      "The system has no outputs",
    ],
    correctAnswer: 2,
    explanation: "A 'black box' AI system is one whose internal decision-making process is not transparent or interpretable to humans. The inputs and outputs are visible, but how the system arrives at its decisions is difficult to understand."
  },
  {
    id: 20,
    domain: "Domain 1: Introduction to AI and Testing",
    question: "Why is testing important throughout the AI system lifecycle, not just at the end?",
    options: [
      "It is not important; only final testing matters",
      "Because errors at each stage (data, training, deployment) can propagate and compound, requiring testing at every phase",
      "Because testing at each stage reduces the total number of test cases needed",
      "Because AI systems cannot be tested after deployment",
    ],
    correctAnswer: 3,
    explanation: "Errors at each stage of the AI lifecycle can propagate and compound. Data quality issues affect training, training issues affect model quality, and deployment issues affect real-world performance. Testing throughout the lifecycle catches problems early before they escalate."
  }
];