import type { ExamQuestion } from '@/types';

export const questions: ExamQuestion[] = [
  {
    id: 1,
    domain: "Chapter 4: LLM-Powered Test Infrastructure",
    question: "In a RAG system, what is the role of embeddings in the retrieval process?",
    options: [
      "They compress the LLM's parameters to fit in memory",
      "Each chunk of the document corpus is encoded into a high-dimensional vector using pre-trained models, enabling efficient similarity-based retrieval at runtime",
      "They replace the need for a vector database",
      "They store the LLM's training data"
    ],
    correctAnswer: 1,
    explanation: "During preprocessing in a RAG system, each chunk is cleaned, processed, and encoded into a high-dimensional vector (embedding) using pre-trained models. These embeddings are stored in vector databases, enabling efficient similarity-based retrieval at runtime (inference)."
  },
  {
    id: 2,
    domain: "Chapter 4: LLM-Powered Test Infrastructure",
    question: "According to the syllabus, which of the following are the two steps of the user query processing phase in a RAG system?",
    options: [
      "Encoding and Decoding",
      "Retrieval (retrieving relevant information from vector databases) and Generation (the LLM generates a response using retrieved information)",
      "Tokenization and Embedding",
      "Authentication and Authorization"
    ],
    correctAnswer: 1,
    explanation: "In the user prompt processing phase, a RAG system works through a two-step process: (1) Retrieval — given a user query, the system retrieves relevant information from previously created vector databases based on semantic similarity; (2) Generation — the retrieved information is fed to the LLM, which generates a response combining its existing knowledge with the newly acquired data."
  },
  {
    id: 3,
    domain: "Chapter 4: LLM-Powered Test Infrastructure",
    question: "What is the difference between autonomous and semi-autonomous LLM-powered agents in test processes?",
    options: [
      "Autonomous agents require human approval for every action, while semi-autonomous agents operate independently",
      "Autonomous agents operate independently with minimal human intervention, while semi-autonomous agents perform tasks with periodic human oversight to ensure output meets user-defined goals",
      "Autonomous agents are used for testing, while semi-autonomous agents are used for development",
      "There is no difference between autonomous and semi-autonomous agents"
    ],
    correctAnswer: 1,
    explanation: "Autonomous agents operate independently, performing tasks with minimal human intervention using predefined rules, reinforcement learning, and adaptive feedback loops. Semi-autonomous agents perform tasks with periodic human oversight to ensure that the output meets user-defined goals. In test processes, semi-autonomous agents can be used for critical tasks where human verification of results is important."
  },
  {
    id: 4,
    domain: "Chapter 4: LLM-Powered Test Infrastructure",
    question: "Which of the following is a challenge of fine-tuning a GenAI model for software testing, as described in the syllabus?",
    options: [
      "LLMs become too small to process test cases",
      "Mitigating overfitting, where the model becomes too specialized to the training data, negatively impacting its performance on new, unseen data",
      "LLMs lose the ability to process English text after fine-tuning",
      "Fine-tuning always reduces the model's accuracy on any task"
    ],
    correctAnswer: 1,
    explanation: "The syllabus describes four challenges of fine-tuning: (1) Avoiding biased or inaccurate results by ensuring high-quality training datasets, (2) Mitigating overfitting to maintain generalization across different scenarios, (3) Addressing opacity in the model's reasoning, which complicates debugging and validation, and (4) Managing significant computational resources required for fine-tuning LLMs."
  },
  {
    id: 5,
    domain: "Chapter 4: LLM-Powered Test Infrastructure",
    question: "According to the syllabus, which of the following is one of the three possible approaches for using GenAI in an organization's test processes?",
    options: [
      "Using a public cloud LLM, using a private on-premise LLM, or using a hybrid cloud-on-premise LLM",
      "Using an AI chatbot, using a test tool with generative AI capabilities, or in-house development of a test tool based on generative AI",
      "Using open-source models only, using commercial models only, or using a combination of both",
      "Using RAG, using fine-tuning, or using prompt engineering only"
    ],
    correctAnswer: 1,
    explanation: "The syllabus describes three possible approaches for using GenAI in an organization's test processes: (1) Using an AI chatbot — managing data privacy/security risks while optimizing cost; (2) Using a test tool with generative AI capabilities — evaluating data security and performance assurances from the tool provider; (3) In-house development of a test tool based on generative AI — emphasizing comprehensive control of data privacy, security, and AI operating costs."
  },
  {
    id: 6,
    domain: "Chapter 4: LLM-Powered Test Infrastructure",
    question: "Which of the following correctly describes the typical architecture of an LLM-powered test infrastructure, as described in the syllabus?",
    options: [
      "It uses a single monolithic application with no external data sources",
      "It consists of a front-end (user interface), a back-end (authentication, data retrieval, prompt preparation, LLM interaction), and an LLM (third-party or custom) that generates responses based on structured prompts",
      "It requires no back-end because the LLM handles all processing",
      "It uses a rule-based system instead of an LLM"
    ],
    correctAnswer: 1,
    explanation: "The typical architecture of an LLM-powered test infrastructure follows a multi-component design: (1) The front-end serves as the user interface; (2) The back-end processes user input and manages authentication, data retrieval, prompt preparation, and interaction with the LLM; (3) The LLM, hosted as a third-party service (via API) or as a custom in-house model, generates responses based on structured prompts."
  }
];