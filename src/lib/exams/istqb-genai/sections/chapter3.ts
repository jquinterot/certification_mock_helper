import type { ExamQuestion } from '@/types';

export const questions: ExamQuestion[] = [
  {
    id: 1,
    domain: "Chapter 3: Managing Risks of GenAI in Testing",
    question: "What is a 'hallucination' in LLM-generated test cases?",
    options: [
      "The model generates test cases that are fabricated or not based on requirements",
      "The model generates too many test cases",
      "The model crashes during generation",
      "The model generates test cases that are too simple"
    ],
    correctAnswer: 0,
    explanation: "A hallucination occurs when the LLM generates test cases that are fabricated, incorrect, or not based on the actual requirements. The model may invent requirements, steps, or expected results that don't exist."
  },
  {
    id: 2,
    domain: "Chapter 3: Managing Risks of GenAI in Testing",
    question: "What is the primary purpose of setting a low temperature parameter when generating test cases?",
    options: [
      "To make the model run faster",
      "To increase the model's creativity",
      "To reduce API costs",
      "To reduce randomness and produce more deterministic output"
    ],
    correctAnswer: 3,
    explanation: "A low temperature (e.g., 0.1) reduces randomness, making the model's output more deterministic and consistent. This is important for test case generation where repeatability is desired."
  },
  {
    id: 3,
    domain: "Chapter 3: Managing Risks of GenAI in Testing",
    question: "Which risk is MOST relevant when sending production test data to a public LLM API?",
    options: [
      "The model will generate too many test cases",
      "The test cases will be too complex",
      "Data privacy and security violations",
      "The API will be too slow"
    ],
    correctAnswer: 2,
    explanation: "Sending production test data containing PII or sensitive information to a public LLM API violates data privacy regulations such as GDPR. This is a critical risk, as GenAI tools may store and process sensitive data without explicit user consent or control."
  },
  {
    id: 4,
    domain: "Chapter 3: Managing Risks of GenAI in Testing",
    question: "Which ISO standard provides a framework for AI management systems?",
    options: [
      "ISO 9001",
      "ISO/IEC 42001:2023",
      "ISO 27001",
      "ISO 14001"
    ],
    correctAnswer: 1,
    explanation: "ISO/IEC 42001:2023 is the international standard for AI management systems. It provides a framework for organizations to manage AI risks and opportunities responsibly."
  },
  {
    id: 5,
    domain: "Chapter 3: Managing Risks of GenAI in Testing",
    question: "What is the primary focus of the EU AI Act?",
    options: [
      "Regulating AI systems based on risk levels",
      "Promoting AI innovation without restrictions",
      "Banning all AI applications",
      "Standardizing AI training datasets"
    ],
    correctAnswer: 0,
    explanation: "The EU AI Act regulates AI systems based on risk levels (minimal, limited, high, unacceptable). It ensures safety, transparency, and accountability for AI applications."
  },
  {
    id: 6,
    domain: "Chapter 3: Managing Risks of GenAI in Testing",
    question: "Which technique is MOST appropriate for mitigating hallucinations in LLM-generated test cases?",
    options: [
      "Always using the highest temperature setting",
      "Using a smaller model",
      "Removing all constraints from the prompt",
      "Human review and validation of generated test cases"
    ],
    correctAnswer: 3,
    explanation: "Human review and validation is the most effective mitigation for hallucinations. Testers must verify that generated test cases accurately reflect the requirements."
  },
  {
    id: 7,
    domain: "Chapter 3: Managing Risks of GenAI in Testing",
    question: "Which of the following is a data minimization technique for using LLMs in testing?",
    options: [
      "Sending all production data to the LLM",
      "Storing all test data in public repositories",
      "Using only the minimum necessary data and anonymizing sensitive fields",
      "Using the largest possible datasets"
    ],
    correctAnswer: 2,
    explanation: "Data minimization involves using only the minimum necessary data and anonymizing sensitive fields. This reduces privacy risks and ensures compliance with regulations like GDPR."
  },
  {
    id: 8,
    domain: "Chapter 3: Managing Risks of GenAI in Testing",
    question: "What is the environmental risk associated with using large LLMs?",
    options: [
      "The models produce physical waste",
      "The models consume significant energy and contribute to carbon emissions",
      "The models require water cooling",
      "The models emit radiation"
    ],
    correctAnswer: 1,
    explanation: "Large LLMs consume significant energy during training and inference, contributing to carbon emissions. This is an environmental risk that organizations should consider when adopting GenAI."
  },
  {
    id: 9,
    domain: "Chapter 3: Managing Risks of GenAI in Testing",
    question: "What is the purpose of using a random seed when generating test cases?",
    options: [
      "To ensure reproducibility by controlling randomness",
      "To make the model run faster",
      "To increase the model's creativity",
      "To reduce API costs"
    ],
    correctAnswer: 0,
    explanation: "A random seed ensures reproducibility by controlling the randomness in the model's output. With the same seed and temperature, the model will generate the same output."
  },
  {
    id: 10,
    domain: "Chapter 3: Managing Risks of GenAI in Testing",
    question: "Which of the following is a mitigation strategy for bias in LLM-generated test cases?",
    options: [
      "Always using the highest temperature",
      "Using only one LLM provider",
      "Removing all constraints from prompts",
      "Reviewing generated test cases for biased assumptions"
    ],
    correctAnswer: 3,
    explanation: "Reviewing generated test cases for biased assumptions and diversifying training data are mitigation strategies for bias. LLMs may inherit biases from training data."
  }
];

export const questions2: ExamQuestion[] = [
  {
    id: 1,
    domain: "Chapter 3: Managing Risks of GenAI in Testing",
    question: "Which NIST framework provides guidance on AI risk management?",
    options: [
      "NIST Cybersecurity Framework",
      "NIST SP 800-53",
      "NIST AI Risk Management Framework (AI RMF)",
      "NIST Cloud Security Framework"
    ],
    correctAnswer: 2,
    explanation: "The NIST AI Risk Management Framework (AI RMF) provides guidance on managing AI risks. It is designed to help organizations manage risks associated with AI systems."
  },
  {
    id: 2,
    domain: "Chapter 3: Managing Risks of GenAI in Testing",
    question: "What is the primary difference between a hallucination and a reasoning error?",
    options: [
      "Reasoning errors are always intentional",
      "Reasoning errors involve incorrect logic applied to real information, while hallucinations invent false information",
      "Reasoning errors are always correct",
      "There is no difference"
    ],
    correctAnswer: 1,
    explanation: "A reasoning error involves incorrect logic or flawed reasoning applied to real information. A hallucination involves inventing false information that doesn't exist."
  },
  {
    id: 3,
    domain: "Chapter 3: Managing Risks of GenAI in Testing",
    question: "Which technique is appropriate for anonymizing test data before sending it to an LLM?",
    options: [
      "Replacing PII with synthetic or masked values",
      "Sending the data in plain text",
      "Increasing the temperature",
      "Using a larger model"
    ],
    correctAnswer: 0,
    explanation: "Replacing PII with synthetic or masked values is a technique for anonymizing test data before sending it to an LLM. This reduces privacy risks while maintaining the data's utility."
  },
  {
    id: 4,
    domain: "Chapter 3: Managing Risks of GenAI in Testing",
    question: "Which risk is associated with using LLMs in regulated industries?",
    options: [
      "The model generates too many test cases",
      "The test cases are always too simple",
      "The model runs too fast",
      "Potential violation of data privacy regulations"
    ],
    correctAnswer: 3,
    explanation: "In regulated industries, sending sensitive data to external LLM APIs may violate data privacy regulations such as GDPR. This requires data anonymization, use of private LLMs, or on-premise deployment."
  },
  {
    id: 5,
    domain: "Chapter 3: Managing Risks of GenAI in Testing",
    question: "Which of the following is a technique for mitigating non-deterministic LLM behavior?",
    options: [
      "Always using the highest temperature",
      "Using a smaller model",
      "Using temperature control and random seeds",
      "Removing all constraints"
    ],
    correctAnswer: 2,
    explanation: "Temperature control and random seeds are techniques for mitigating non-deterministic LLM behavior. Low temperature reduces randomness, and random seeds ensure reproducibility."
  },
  {
    id: 6,
    domain: "Chapter 3: Managing Risks of GenAI in Testing",
    question: "What is the primary purpose of human review in LLM-generated testing artifacts?",
    options: [
      "To make the process slower",
      "To verify accuracy, identify hallucinations, and ensure quality",
      "To increase costs",
      "To avoid using AI tools"
    ],
    correctAnswer: 1,
    explanation: "Human review is essential to verify accuracy, identify hallucinations, and ensure quality of LLM-generated testing artifacts. This is a critical control for managing AI risks."
  },
  {
    id: 7,
    domain: "Chapter 3: Managing Risks of GenAI in Testing",
    question: "Which of the following is a risk associated with 'Shadow AI' in testing organizations?",
    options: [
      "Unauthorized use of AI tools without organizational oversight",
      "AI systems that run on dark servers",
      "AI models that generate dark-themed test cases",
      "AI systems that only work at night"
    ],
    correctAnswer: 0,
    explanation: "Shadow AI refers to the unauthorized use of AI tools without organizational oversight. This poses risks to data security, compliance, and quality consistency."
  },
  {
    id: 8,
    domain: "Chapter 3: Managing Risks of GenAI in Testing",
    question: "Which of the following is a compliance framework relevant to AI systems?",
    options: [
      "ISO 9001",
      "ISO 14001",
      "ISO 50001",
      "ISO/IEC 42001:2023"
    ],
    correctAnswer: 3,
    explanation: "ISO/IEC 42001:2023 is the international standard for AI management systems. It provides a framework for managing AI risks and ensuring responsible AI use."
  },
  {
    id: 9,
    domain: "Chapter 3: Managing Risks of GenAI in Testing",
    question: "A tester is using an LLM to generate test cases for a healthcare application. The user stories contain patient names and medical record numbers. Which risk is MOST critical?",
    options: [
      "The model will generate too few test cases",
      "The test cases will be too complex",
      "Sending patient names and medical record numbers to an external LLM API risks unintentional data exposure and violates data privacy regulations like GDPR",
      "The model will run too slowly"
    ],
    correctAnswer: 2,
    explanation: "Sending personally identifiable information such as patient names and medical record numbers to an external LLM API risks unintentional data exposure and violates data privacy regulations like GDPR. The tester must anonymize data, use a private LLM, or process data on-premise."
  },
  {
    id: 10,
    domain: "Chapter 3: Managing Risks of GenAI in Testing",
    question: "Which of the following is a technique to ensure reproducibility when using LLMs for test case generation?",
    options: [
      "Using a random seed and fixed temperature",
      "Using a random seed and fixed temperature",
      "Using the highest temperature setting",
      "Using a different model each time"
    ],
    correctAnswer: 1,
    explanation: "Using a random seed and fixed temperature ensures reproducibility. The same seed and temperature will produce the same output, which is critical for consistent test case generation."
  },
  {
    id: 11,
    domain: "Chapter 3: Managing Risks of GenAI in Testing",
    question: "Which of the following is a characteristic of a reasoning error compared to a hallucination?",
    options: [
      "Reasoning errors involve incorrect logic applied to real information, while hallucinations invent false information",
      "Reasoning errors are always intentional",
      "Reasoning errors are always correct",
      "There is no difference"
    ],
    correctAnswer: 0,
    explanation: "A reasoning error involves incorrect logic applied to real information. A hallucination involves inventing false information. Both require detection, but reasoning errors are identified through logical analysis."
  },
  {
    id: 12,
    domain: "Chapter 3: Managing Risks of GenAI in Testing",
    question: "Which of the following is a mitigation strategy for reducing the environmental impact of using LLMs in testing?",
    options: [
      "Using the largest model available for all tasks",
      "Running models continuously 24/7",
      "Using multiple models simultaneously",
      "Using smaller models (SLMs) for simple tasks and optimizing inference efficiency"
    ],
    correctAnswer: 3,
    explanation: "Using smaller models (SLMs) for simple tasks and optimizing inference efficiency reduces energy consumption. This is an important mitigation strategy for the environmental impact of LLM usage."
  }
];
