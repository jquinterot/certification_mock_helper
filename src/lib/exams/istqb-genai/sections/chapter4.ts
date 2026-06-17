import type { ExamQuestion } from '@/types';

export const questions: ExamQuestion[] = [
  {
    id: 1,
    domain: "Chapter 4: LLM-Powered Test Infrastructure",
    question: "What is Retrieval-Augmented Generation (RAG) in testing tools?",
    options: [
      "A method for generating random test data",
      "A technique that retrieves relevant test artifacts from a knowledge base to augment LLM prompts",
      "A way to train LLMs from scratch",
      "A protocol for API testing"
    ],
    correctAnswer: 1,
    explanation: "RAG retrieves relevant test artifacts (requirements, test cases, defect history) from a vector database and includes them in the LLM prompt. This grounds the model's responses in actual project data."
  },
  {
    id: 2,
    domain: "Chapter 4: LLM-Powered Test Infrastructure",
    question: "What is the role of a vector database in a RAG-based testing tool?",
    options: [
      "To store test execution results",
      "To store embeddings of test artifacts for semantic similarity search",
      "To manage user authentication",
      "To compile test code"
    ],
    correctAnswer: 1,
    explanation: "A vector database stores embeddings of test artifacts. It enables semantic similarity search, allowing the system to retrieve the most relevant artifacts for a given query."
  },
  {
    id: 3,
    domain: "Chapter 4: LLM-Powered Test Infrastructure",
    question: "What is the primary purpose of fine-tuning an LLM for testing tasks?",
    options: [
      "To reduce the model's size",
      "To adapt the model's behavior to specific testing terminology and patterns",
      "To make the model run faster",
      "To eliminate the need for prompts"
    ],
    correctAnswer: 1,
    explanation: "Fine-tuning adapts a pre-trained LLM to specific testing tasks by training it on testing-specific datasets. This improves the model's understanding of testing terminology and patterns."
  },
  {
    id: 4,
    domain: "Chapter 4: LLM-Powered Test Infrastructure",
    question: "What is LLMOps in testing?",
    options: [
      "A type of testing methodology",
      "The operational practices for deploying, monitoring, and maintaining LLMs in test environments",
      "A programming language for test automation",
      "A tool for manual testing"
    ],
    correctAnswer: 1,
    explanation: "LLMOps (LLM Operations) refers to the practices for deploying, monitoring, and maintaining LLMs in test environments. It includes model versioning, prompt management, and performance monitoring."
  },
  {
    id: 5,
    domain: "Chapter 4: LLM-Powered Test Infrastructure",
    question: "What is the purpose of 'chunking' in a RAG pipeline?",
    options: [
      "To make the model run faster",
      "To break large documents into smaller pieces for efficient retrieval",
      "To encrypt the data",
      "To compress the model"
    ],
    correctAnswer: 1,
    explanation: "Chunking breaks large test documents into smaller pieces that can be efficiently embedded and retrieved. This ensures that the most relevant sections are retrieved and included in the LLM prompt."
  },
  {
    id: 6,
    domain: "Chapter 4: LLM-Powered Test Infrastructure",
    question: "What is an 'LLM-powered agent' in test automation?",
    options: [
      "A human tester who uses LLMs",
      "An autonomous or semi-autonomous system that uses LLMs to perform testing tasks",
      "A type of database for storing test results",
      "A manual testing technique"
    ],
    correctAnswer: 1,
    explanation: "An LLM-powered agent is an autonomous or semi-autonomous system that uses LLMs to perform testing tasks. It can plan, execute, and evaluate tests with minimal human intervention."
  },
  {
    id: 7,
    domain: "Chapter 4: LLM-Powered Test Infrastructure",
    question: "What is the role of 'embeddings' in a RAG-based testing tool?",
    options: [
      "To encrypt test data",
      "To convert test artifacts into numerical vectors for semantic similarity search",
      "To compress images",
      "To generate random test data"
    ],
    correctAnswer: 1,
    explanation: "Embeddings convert test artifacts into numerical vectors that capture semantic meaning. This enables semantic similarity search in the vector database, allowing retrieval based on meaning rather than keywords."
  },
  {
    id: 8,
    domain: "Chapter 4: LLM-Powered Test Infrastructure",
    question: "Which of the following is a component of LLMOps for testing?",
    options: [
      "Manual test case creation",
      "Model versioning, prompt management, and performance monitoring",
      "Waterfall development methodology",
      "Paper-based test documentation"
    ],
    correctAnswer: 1,
    explanation: "LLMOps for testing includes model versioning, prompt management, performance monitoring, and feedback loops. These practices ensure that LLM-based testing tools are reliable and maintainable."
  },
  {
    id: 9,
    domain: "Chapter 4: LLM-Powered Test Infrastructure",
    question: "What is the primary advantage of using RAG in a testing tool?",
    options: [
      "It makes the model run faster",
      "It grounds the model's responses in the organization's actual test artifacts",
      "It reduces the need for training data",
      "It eliminates the need for prompts"
    ],
    correctAnswer: 1,
    explanation: "RAG grounds the model's responses in the organization's actual test artifacts (requirements, test cases, defect history). This reduces hallucinations and ensures responses are relevant to the specific project."
  },
  {
    id: 10,
    domain: "Chapter 4: LLM-Powered Test Infrastructure",
    question: "Which of the following is a characteristic of autonomous vs semi-autonomous LLM agents?",
    options: [
      "Autonomous agents require human approval for every action",
      "Semi-autonomous agents require human approval for critical actions",
      "There is no difference between them",
      "Autonomous agents cannot perform any actions"
    ],
    correctAnswer: 1,
    explanation: "Semi-autonomous agents require human approval for critical actions, while autonomous agents can operate independently. This distinction is important for risk management in testing."
  }
];

export const questions2: ExamQuestion[] = [
  {
    id: 1,
    domain: "Chapter 4: LLM-Powered Test Infrastructure",
    question: "What is the purpose of 'semantic similarity retrieval' in a RAG system?",
    options: [
      "To find exact keyword matches",
      "To find content with similar meaning regardless of exact words",
      "To encrypt the data",
      "To compress the model"
    ],
    correctAnswer: 1,
    explanation: "Semantic similarity retrieval finds content with similar meaning regardless of exact words. This is more powerful than keyword search because it understands concepts and context."
  },
  {
    id: 2,
    domain: "Chapter 4: LLM-Powered Test Infrastructure",
    question: "Which of the following is a benefit of fine-tuning an LLM for testing?",
    options: [
      "It reduces the model's size",
      "It improves the model's understanding of domain-specific testing terminology",
      "It makes the model run faster",
      "It eliminates the need for prompts"
    ],
    correctAnswer: 1,
    explanation: "Fine-tuning improves the model's understanding of domain-specific testing terminology and patterns. This leads to better test case generation, defect analysis, and test planning."
  },
  {
    id: 3,
    domain: "Chapter 4: LLM-Powered Test Infrastructure",
    question: "What is the primary purpose of 'prompt management' in LLMOps?",
    options: [
      "To make prompts look good",
      "To version, test, and deploy prompts systematically",
      "To reduce the model's memory usage",
      "To encrypt prompt data"
    ],
    correctAnswer: 1,
    explanation: "Prompt management in LLMOps involves versioning, testing, and deploying prompts systematically. This ensures consistency and allows tracking of which prompt versions produce the best results."
  },
  {
    id: 4,
    domain: "Chapter 4: LLM-Powered Test Infrastructure",
    question: "Which of the following is a component of a RAG pipeline?",
    options: [
      "Chunking, embedding, retrieval, generation",
      "Training, validation, testing, deployment",
      "Planning, coding, testing, deployment",
      "Input, processing, output, storage"
    ],
    correctAnswer: 0,
    explanation: "A RAG pipeline typically includes: chunking (breaking documents into pieces), embedding (converting to vectors), retrieval (finding relevant chunks), and generation (using retrieved context to generate output)."
  },
  {
    id: 5,
    domain: "Chapter 4: LLM-Powered Test Infrastructure",
    question: "What is the primary advantage of using a vector database over a traditional database for RAG?",
    options: [
      "Vector databases are always faster",
      "Vector databases enable semantic similarity search based on meaning",
      "Vector databases are cheaper",
      "Vector databases are easier to set up"
    ],
    correctAnswer: 1,
    explanation: "Vector databases enable semantic similarity search based on meaning rather than exact keyword matches. This is essential for RAG systems that need to find relevant content based on conceptual similarity."
  },
  {
    id: 6,
    domain: "Chapter 4: LLM-Powered Test Infrastructure",
    question: "Which of the following is a risk of using LLM-powered agents for testing?",
    options: [
      "They are always more accurate than humans",
      "They may make decisions without human oversight that have unintended consequences",
      "They cannot process text",
      "They are always deterministic"
    ],
    correctAnswer: 1,
    explanation: "LLM-powered agents may make decisions without human oversight that have unintended consequences. This is a risk that requires careful design of human-in-the-loop controls and approval workflows."
  },
  {
    id: 7,
    domain: "Chapter 4: LLM-Powered Test Infrastructure",
    question: "What is the primary purpose of 'model versioning' in LLMOps?",
    options: [
      "To make the model run faster",
      "To track which model version produces which results and enable rollback",
      "To reduce the model's size",
      "To eliminate the need for training"
    ],
    correctAnswer: 1,
    explanation: "Model versioning tracks which model version produces which results and enables rollback if a new version performs worse. This is essential for reproducibility and risk management."
  },
  {
    id: 8,
    domain: "Chapter 4: LLM-Powered Test Infrastructure",
    question: "What is the primary purpose of 'feedback loops' in LLMOps for testing?",
    options: [
      "To make the model run faster",
      "To improve the model's performance over time based on test results and human feedback",
      "To reduce the model's size",
      "To eliminate the need for prompts"
    ],
    correctAnswer: 1,
    explanation: "Feedback loops in LLMOps improve the model's performance over time based on test results and human feedback. This continuous improvement is essential for maintaining quality."
  },
  {
    id: 9,
    domain: "Chapter 4: LLM-Powered Test Infrastructure",
    question: "A testing team is building a RAG-based tool to answer questions about their test cases. They need to store 10,000 test cases and retrieve the most relevant ones based on meaning. Which database type is MOST appropriate?",
    options: [
      "Relational database (e.g., PostgreSQL)",
      "Vector database (e.g., Pinecone, Weaviate, pgvector)",
      "Key-value store (e.g., Redis)",
      "Graph database (e.g., Neo4j)"
    ],
    correctAnswer: 1,
    explanation: "A vector database is designed for storing embeddings and performing semantic similarity search. It enables retrieval of test cases based on meaning rather than keywords, which is essential for RAG-based tools."
  },
  {
    id: 10,
    domain: "Chapter 4: LLM-Powered Test Infrastructure",
    question: "Which of the following is a popular vector database for RAG-based testing tools?",
    options: [
      "MySQL",
      "Pinecone, Weaviate, or Chroma",
      "Excel",
      "FTP server"
    ],
    correctAnswer: 1,
    explanation: "Pinecone, Weaviate, and Chroma are popular vector databases designed for storing embeddings and performing semantic similarity search. They are commonly used in RAG-based testing tools."
  },
  {
    id: 11,
    domain: "Chapter 4: LLM-Powered Test Infrastructure",
    question: "Which technique is used to improve LLM inference speed by processing multiple requests together?",
    options: [
      "Request serialization",
      "Batching",
      "Request dropping",
      "Single-threading"
    ],
    correctAnswer: 1,
    explanation: "Batching processes multiple requests together in a single forward pass. This improves LLM inference throughput and reduces per-request latency, making it cost-effective for high-volume testing tasks."
  },
  {
    id: 12,
    domain: "Chapter 4: LLM-Powered Test Infrastructure",
    question: "Which of the following is a model serving framework optimized for LLM inference throughput?",
    options: [
      "Apache Tomcat",
      "vLLM or TensorRT-LLM",
      "Microsoft Word",
      "Postman"
    ],
    correctAnswer: 1,
    explanation: "vLLM and TensorRT-LLM are serving frameworks optimized for LLM inference throughput. They use techniques like PagedAttention and kernel optimization to maximize GPU utilization and reduce inference latency."
  },
  {
    id: 13,
    domain: "Chapter 4: LLM-Powered Test Infrastructure",
    question: "Which of the following is a critical step in preparing data for fine-tuning an LLM for testing tasks?",
    options: [
      "Using raw, unprocessed data",
      "Data cleaning, deduplication, and formatting into instruction-response pairs",
      "Deleting all test data",
      "Using only image data"
    ],
    correctAnswer: 1,
    explanation: "Data preparation for fine-tuning involves cleaning (removing errors), deduplication (removing duplicates), and formatting data into instruction-response pairs. High-quality training data is essential for effective fine-tuning."
  },
  {
    id: 14,
    domain: "Chapter 4: LLM-Powered Test Infrastructure",
    question: "Which of the following is a technique for generating synthetic test data using LLMs?",
    options: [
      "Manual data entry",
      "Using LLMs to generate realistic but artificial data that preserves statistical properties without exposing real data",
      "Copying production data directly",
      "Deleting test data"
    ],
    correctAnswer: 1,
    explanation: "LLMs can generate synthetic test data that is realistic and preserves statistical properties of real data without exposing actual sensitive information. This is useful for privacy-preserving testing."
  },
  {
    id: 15,
    domain: "Chapter 4: LLM-Powered Test Infrastructure",
    question: "Which RAG evaluation metric measures whether the retrieved context contains all information needed to answer the question?",
    options: [
      "Context precision",
      "Context recall",
      "Faithfulness",
      "Answer relevance"
    ],
    correctAnswer: 1,
    explanation: "Context recall measures whether the retrieved context contains all the information needed to answer the question. High recall means the RAG system is finding all relevant test artifacts."
  },
  {
    id: 16,
    domain: "Chapter 4: LLM-Powered Test Infrastructure",
    question: "Which RAG evaluation metric measures whether the generated answer is factually consistent with the retrieved context?",
    options: [
      "Context precision",
      "Faithfulness",
      "Context recall",
      "Latency"
    ],
    correctAnswer: 1,
    explanation: "Faithfulness measures whether the generated answer is factually consistent with the retrieved context. It detects hallucinations by verifying that the output does not introduce information not present in the retrieved test artifacts."
  }
];
