import type { ExamQuestion } from '@/types';

export const questions: ExamQuestion[] = [
  {
    id: 1,
    domain: "Chapter 1: Introduction to GenAI for Testing",
    question: "What is the primary difference between symbolic AI and generative AI?",
    options: [
      "Symbolic AI is always faster",
      "Symbolic AI uses explicit rules and logic, while generative AI learns patterns from data",
      "Symbolic AI is a type of generative AI",
      "Symbolic AI requires neural networks"
    ],
    correctAnswer: 1,
    explanation: "Symbolic AI uses explicit rules and logic (e.g., expert systems), while generative AI learns patterns from training data. This distinction is important for understanding when to use rule-based vs. learning-based approaches in testing."
  },
  {
    id: 2,
    domain: "Chapter 1: Introduction to GenAI for Testing",
    question: "What is the primary advantage of using an instruction-tuned model over a foundation model for testing tasks?",
    options: [
      "Instruction-tuned models are always larger",
      "Instruction-tuned models are better at following specific instructions and commands",
      "Instruction-tuned models cannot generate text",
      "Instruction-tuned models are always open-source"
    ],
    correctAnswer: 1,
    explanation: "Instruction-tuned models are fine-tuned on instruction-following datasets, making them better at understanding and executing specific commands. This is valuable for testing tasks that require structured output."
  },
  {
    id: 3,
    domain: "Chapter 1: Introduction to GenAI for Testing",
    question: "Which of the following is a limitation of LLMs in testing?",
    options: [
      "They cannot generate text",
      "They may produce hallucinations or incorrect information",
      "They are too small to process text",
      "They only work with images"
    ],
    correctAnswer: 1,
    explanation: "LLMs may produce hallucinations - generated content that is incorrect or not based on the input. This is a critical risk in testing where accuracy is essential."
  },
  {
    id: 4,
    domain: "Chapter 1: Introduction to GenAI for Testing",
    question: "What is the purpose of 'positional encoding' in transformer models?",
    options: [
      "To encrypt the input data",
      "To provide information about the position of tokens in the sequence",
      "To compress the model size",
      "To speed up training"
    ],
    correctAnswer: 1,
    explanation: "Positional encoding provides information about the position of tokens in the sequence. Since transformers process all tokens simultaneously, they need positional encoding to understand word order."
  },
  {
    id: 5,
    domain: "Chapter 1: Introduction to GenAI for Testing",
    question: "What is the primary difference between a vision-language model and a text-only LLM?",
    options: [
      "Vision-language models are always smaller",
      "Vision-language models can process both images and text",
      "Vision-language models cannot generate text",
      "Text-only LLMs are always more accurate"
    ],
    correctAnswer: 1,
    explanation: "Vision-language models (VLMs) can process both images and text, enabling them to understand visual content. This is useful for testing applications involving UI elements, screenshots, and visual interfaces."
  },
  {
    id: 6,
    domain: "Chapter 1: Introduction to GenAI for Testing",
    question: "What is the purpose of 'pre-training' in foundation models?",
    options: [
      "To make the model smaller",
      "To train the model on broad data to learn general language patterns",
      "To remove all parameters",
      "To make the model run faster"
    ],
    correctAnswer: 1,
    explanation: "Pre-training involves training a model on broad data to learn general language patterns and world knowledge. This foundation can then be fine-tuned for specific tasks like testing."
  },
  {
    id: 7,
    domain: "Chapter 1: Introduction to GenAI for Testing",
    question: "A tester is working with a large language model that can process 4,000 tokens. The user story they want to analyze contains 3,500 tokens. They also need to include the prompt instructions and examples. What is the MOST likely issue they will face?",
    options: [
      "The model will run slower",
      "They may exceed the context window and need to truncate the input",
      "The model will refuse to process any text",
      "The model will automatically compress the text"
    ],
    correctAnswer: 1,
    explanation: "When the combined prompt (instructions + examples + input data) exceeds the context window, the model cannot process all tokens. The tester must truncate the input, use a model with a larger context window, or chunk the input into smaller pieces."
  },
  {
    id: 8,
    domain: "Chapter 1: Introduction to GenAI for Testing",
    question: "Which of the following is a characteristic of embeddings used in LLM-powered testing tools?",
    options: [
      "They are human-readable text representations",
      "They are dense numerical vectors that capture semantic meaning",
      "They are always binary values",
      "They are only used for image processing"
    ],
    correctAnswer: 1,
    explanation: "Embeddings are dense numerical vectors that capture semantic meaning. They enable semantic similarity search, which is essential for RAG systems and finding relevant test artifacts based on meaning."
  },
  {
    id: 9,
    domain: "Chapter 1: Introduction to GenAI for Testing",
    question: "A testing team needs to choose between an LLM and an SLM for generating test data. The task is simple, requires high throughput, and cost is a concern. Which is the MOST appropriate choice?",
    options: [
      "LLM for maximum accuracy",
      "SLM for efficiency and cost-effectiveness",
      "Both simultaneously",
      "Neither, use manual testing"
    ],
    correctAnswer: 1,
    explanation: "For simple, high-throughput tasks where cost is a concern, an SLM (Small Language Model) is the most appropriate choice. SLMs are faster, cheaper, and more efficient for narrow tasks like test data generation."
  },
  {
    id: 10,
    domain: "Chapter 1: Introduction to GenAI for Testing",
    question: "Which of the following is a key difference between a foundation model and a reasoning model?",
    options: [
      "Foundation models are always open-source",
      "Reasoning models are designed for step-by-step logical analysis and typically slower",
      "Foundation models cannot process text",
      "Reasoning models are always smaller"
    ],
    correctAnswer: 1,
    explanation: "Reasoning models are designed for step-by-step logical analysis, making them suitable for complex tasks like test planning. They are typically slower and more expensive than foundation or instruction-tuned models."
  },
  {
    id: 11,
    domain: "Chapter 1: Introduction to GenAI for Testing",
    question: "What is the primary risk of using generative AI for test case generation without human oversight?",
    options: [
      "The model will generate too few test cases",
      "The model may generate incorrect, inconsistent, or hallucinated test cases",
      "The model cannot generate text",
      "The model is always deterministic"
    ],
    correctAnswer: 1,
    explanation: "Without human oversight, LLMs may generate incorrect, inconsistent, or hallucinated test cases. Human review is essential to verify accuracy, coverage, and alignment with requirements."
  },
  {
    id: 12,
    domain: "Chapter 1: Introduction to GenAI for Testing",
    question: "What is the main purpose of 'fine-tuning' a pre-trained model?",
    options: [
      "To make the model smaller",
      "To adapt the model to specific tasks or domains with additional training",
      "To remove all parameters",
      "To make the model run faster"
    ],
    correctAnswer: 1,
    explanation: "Fine-tuning adapts a pre-trained model to specific tasks or domains by training it on additional, task-specific data. This improves performance on the target task while retaining general knowledge."
  }
];

export const questions2: ExamQuestion[] = [
  {
    id: 1,
    domain: "Chapter 1: Introduction to GenAI for Testing",
    question: "What is the transformer architecture's key innovation that enables LLMs to process text?",
    options: [
      "Recurrent neural networks with long-term memory",
      "Self-attention mechanism that captures relationships between tokens",
      "Convolutional layers for image processing",
      "Rule-based grammar parsing"
    ],
    correctAnswer: 1,
    explanation: "The transformer architecture's key innovation is the self-attention mechanism, which allows the model to capture relationships between all tokens in the input simultaneously, regardless of their distance from each other."
  },
  {
    id: 2,
    domain: "Chapter 1: Introduction to GenAI for Testing",
    question: "Which of the following AI types involves training a model to maximize a reward signal through trial and error?",
    options: [
      "Supervised learning",
      "Unsupervised learning",
      "Reinforcement learning",
      "Transfer learning"
    ],
    correctAnswer: 2,
    explanation: "Reinforcement learning involves training an agent to maximize a reward signal through trial and error. This is used in RLHF (Reinforcement Learning from Human Feedback) to align LLM outputs with human preferences."
  },
  {
    id: 3,
    domain: "Chapter 1: Introduction to GenAI for Testing",
    question: "Which technique is used to reduce the size of an LLM while maintaining performance?",
    options: [
      "Data augmentation",
      "Model quantization",
      "Feature engineering",
      "Cross-validation"
    ],
    correctAnswer: 1,
    explanation: "Model quantization reduces the precision of model weights (e.g., from 32-bit to 8-bit or 4-bit), significantly reducing model size and memory requirements while maintaining acceptable performance."
  },
  {
    id: 4,
    domain: "Chapter 1: Introduction to GenAI for Testing",
    question: "What is the primary advantage of using a reasoning model for test planning?",
    options: [
      "Reasoning models are always faster",
      "Reasoning models can perform step-by-step logical analysis and identify edge cases",
      "Reasoning models are always cheaper",
      "Reasoning models require less context"
    ],
    correctAnswer: 1,
    explanation: "Reasoning models excel at step-by-step logical analysis, which helps identify edge cases, dependencies, and risks in test planning. While they are slower and more expensive, their analytical capabilities are valuable for complex tasks."
  },
  {
    id: 5,
    domain: "Chapter 1: Introduction to GenAI for Testing",
    question: "Which of the following is a generative AI model architecture primarily used for generating images from text descriptions?",
    options: [
      "Transformer",
      "Diffusion Model",
      "Recurrent Neural Network (RNN)",
      "Convolutional Neural Network (CNN)"
    ],
    correctAnswer: 1,
    explanation: "Diffusion Models are generative AI architectures primarily used for generating images from text descriptions. They work by gradually denoising random noise to create coherent images."
  },
  {
    id: 6,
    domain: "Chapter 1: Introduction to GenAI for Testing",
    question: "What is the purpose of model pruning in the context of LLMs for testing?",
    options: [
      "To increase the model's training data",
      "To remove unnecessary parameters and reduce model size without significant performance loss",
      "To add more layers to the model",
      "To change the model's architecture"
    ],
    correctAnswer: 1,
    explanation: "Model pruning removes unnecessary or redundant parameters from a neural network. This reduces model size, memory footprint, and inference time while maintaining acceptable performance for testing tasks."
  },
  {
    id: 7,
    domain: "Chapter 1: Introduction to GenAI for Testing",
    question: "Which of the following best describes a Generative Adversarial Network (GAN)?",
    options: [
      "A single neural network that generates text",
      "Two neural networks (generator and discriminator) competing against each other",
      "A transformer model with attention mechanism",
      "A database for storing training data"
    ],
    correctAnswer: 1,
    explanation: "A GAN consists of two neural networks: a generator that creates synthetic data and a discriminator that tries to distinguish real from generated data. They compete against each other, improving generation quality over time."
  },
  {
    id: 8,
    domain: "Chapter 1: Introduction to GenAI for Testing",
    question: "What is the primary risk of model overfitting when fine-tuning an LLM for a specific testing task?",
    options: [
      "The model becomes too general and forgets testing terminology",
      "The model memorizes the training data and performs poorly on new test scenarios",
      "The model becomes unable to generate text",
      "The model requires less computational power"
    ],
    correctAnswer: 1,
    explanation: "Overfitting occurs when a model memorizes the training data rather than learning general patterns. When fine-tuning an LLM for testing, overfitting causes poor performance on new test scenarios that differ from the training examples."
  },
  {
    id: 9,
    domain: "Chapter 1: Introduction to GenAI for Testing",
    question: "What is the main difference between classical machine learning and deep learning in the context of testing?",
    options: [
      "Classical ML always outperforms deep learning",
      "Deep learning uses neural networks with multiple layers to automatically learn features, while classical ML requires manual feature engineering",
      "Classical ML is only used for classification",
      "Deep learning does not require training data"
    ],
    correctAnswer: 1,
    explanation: "Deep learning uses neural networks with multiple layers to automatically learn hierarchical features from data. Classical ML typically requires manual feature engineering. In testing, this means deep learning can automatically learn patterns from test logs, while classical ML needs structured features."
  },
  {
    id: 10,
    domain: "Chapter 1: Introduction to GenAI for Testing",
    question: "Which of the following is a key characteristic of pre-training in foundation models compared to fine-tuning?",
    options: [
      "Pre-training requires less data than fine-tuning",
      "Pre-training learns general language patterns on broad data, while fine-tuning adapts to specific tasks",
      "Pre-training is only for image models",
      "Fine-tuning is always performed before pre-training"
    ],
    correctAnswer: 1,
    explanation: "Pre-training involves training on massive, broad datasets to learn general language patterns and world knowledge. Fine-tuning then adapts the pre-trained model to specific tasks or domains using smaller, task-specific datasets."
  },
  {
    id: 11,
    domain: "Chapter 1: Introduction to GenAI for Testing",
    question: "Which of the following is the 'AI spectrum' from least to most complex?",
    options: [
      "Generative AI, Deep Learning, Classical ML, Symbolic AI",
      "Symbolic AI, Classical ML, Deep Learning, Generative AI",
      "Deep Learning, Classical ML, Symbolic AI, Generative AI",
      "Classical ML, Symbolic AI, Deep Learning, Generative AI"
    ],
    correctAnswer: 1,
    explanation: "The AI spectrum progresses from Symbolic AI (rule-based), to Classical ML (statistical learning), to Deep Learning (neural networks), to Generative AI (creating new content). This progression represents increasing complexity and capability."
  },
  {
    id: 12,
    domain: "Chapter 1: Introduction to GenAI for Testing",
    question: "Which of the following is a type of language model that is specifically trained to follow instructions?",
    options: [
      "Foundation model",
      "Instruction-tuned model",
      "Random model",
      "Untrained model"
    ],
    correctAnswer: 1,
    explanation: "Instruction-tuned models are specifically trained to follow instructions and commands. They are fine-tuned on datasets containing instructions and expected outputs, making them more useful for practical tasks."
  }
];
