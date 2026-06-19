import type { ExamQuestion } from '@/types';

export const questions: ExamQuestion[] = [
  // K1 - Remember (2 questions)
  {
    id: 1,
    domain: "Chapter 4: LLM-Powered Test Infrastructure",
    question: "What is Retrieval-Augmented Generation (RAG) in testing tools?",
    options: [
      "A technique that retrieves relevant test artifacts from a knowledge base to augment LLM prompts",
      "A protocol for API testing",
      "A way to train LLMs from scratch",
      "A method for generating random test data"
    ],
    correctAnswer: 0,
    explanation: "RAG retrieves relevant test artifacts (requirements, test cases, defect history) from a vector database and includes them in the LLM prompt. This grounds the model's responses in actual project data rather than generating random data or training from scratch."
  },
  {
    id: 2,
    domain: "Chapter 4: LLM-Powered Test Infrastructure",
    question: "Which of the following is a popular vector database used in RAG-based testing tools?",
    options: [
      "MySQL",
      "Pinecone, Weaviate, or Chroma",
      "Microsoft Excel",
      "Apache Tomcat"
    ],
    correctAnswer: 1,
    explanation: "Pinecone, Weaviate, and Chroma are popular vector databases designed for storing embeddings and performing semantic similarity search. MySQL is a relational database, Excel is a spreadsheet, and Tomcat is a web server."
  },

  // K2 - Understand (4 questions)
  {
    id: 3,
    domain: "Chapter 4: LLM-Powered Test Infrastructure",
    question: "What is the role of 'embeddings' in a RAG-based testing tool?",
    options: [
      "To compress images for faster loading",
      "To convert test artifacts into numerical vectors that capture semantic meaning for similarity search",
      "To encrypt test data for security",
      "To generate random test data from templates"
    ],
    correctAnswer: 1,
    explanation: "Embeddings convert test artifacts into numerical vectors that capture semantic meaning. This enables semantic similarity search in the vector database, allowing retrieval based on meaning rather than exact keyword matches."
  },
  {
    id: 4,
    domain: "Chapter 4: LLM-Powered Test Infrastructure",
    question: "What is the primary advantage of using RAG over a standalone LLM for testing tasks?",
    options: [
      "It eliminates the need for any human oversight",
      "It makes the model run faster by caching responses",
      "It reduces the cost of running the LLM to zero",
      "It grounds the model's responses in the organization's actual test artifacts, reducing hallucinations"
    ],
    correctAnswer: 3,
    explanation: "RAG grounds the model's responses in the organization's actual test artifacts (requirements, test cases, defect history). This reduces hallucinations and ensures responses are relevant to the specific project. It does not eliminate the need for human oversight, reduce cost to zero, or improve speed through caching."
  },
  {
    id: 5,
    domain: "Chapter 4: LLM-Powered Test Infrastructure",
    question: "What is the role of a vector database in a RAG pipeline?",
    options: [
      "To compile and execute test code",
      "To store embeddings of test artifacts for semantic similarity search",
      "To manage user authentication and authorization",
      "To generate test reports in PDF format"
    ],
    correctAnswer: 1,
    explanation: "A vector database stores embeddings of test artifacts and enables semantic similarity search. It allows the system to retrieve the most relevant artifacts for a given query based on meaning rather than keywords. It does not compile code, manage auth, or generate reports."
  },
  {
    id: 6,
    domain: "Chapter 4: LLM-Powered Test Infrastructure",
    question: "Which statement BEST describes the difference between autonomous and semi-autonomous LLM agents in testing?",
    options: [
      "Autonomous agents require human approval for every action",
      "Autonomous agents cannot perform any actions without explicit programming",
      "Semi-autonomous agents require human approval for critical actions, while autonomous agents operate independently",
      "There is no practical difference between them"
    ],
    correctAnswer: 2,
    explanation: "Semi-autonomous agents require human approval for critical or high-risk actions, while autonomous agents can operate independently. This distinction is important for risk management in testing - higher-risk operations typically require human oversight."
  },

  // K3 - Apply (3 questions - scenario/exercise)
  {
    id: 7,
    domain: "Chapter 4: LLM-Powered Test Infrastructure",
    question: "A testing team wants to build a RAG-based tool that answers questions about their 10,000 test cases. They need to retrieve the most relevant test cases based on meaning. Which component of the RAG pipeline is responsible for converting the test cases into a format that enables semantic search?",
    options: [
      "The prompt template",
      "The chunking component",
      "The LLM inference engine",
      "The embedding model"
    ],
    correctAnswer: 3,
    explanation: "The embedding model converts test artifacts (text) into numerical vectors (embeddings) that capture semantic meaning. Chunking breaks documents into pieces, the prompt template structures the input, and the LLM inference engine generates the final output. It is the embedding model specifically that enables semantic search by creating vector representations."
  },
  {
    id: 8,
    domain: "Chapter 4: LLM-Powered Test Infrastructure",
    question: "A team is evaluating vector databases for their RAG-based testing tool. They need to store embeddings of test cases, requirements, and defect reports. Their requirements include: (1) real-time updates when new test artifacts are created, (2) filtering by metadata (e.g., test case priority, defect severity), and (3) scalability to millions of embeddings. Which type of database is MOST appropriate?",
    options: [
      "A relational database like PostgreSQL",
      "A key-value store like Redis without vector search capabilities",
      "A simple JSON file stored on disk",
      "A vector database like Pinecone or Weaviate that supports both vector search and metadata filtering"
    ],
    correctAnswer: 3,
    explanation: "A vector database like Pinecone or Weaviate supports both semantic (vector) search and metadata filtering, which is essential for this use case. Relational databases don't natively support vector similarity search. JSON files don't scale and lack search capabilities. Redis without vector support can't perform semantic similarity search."
  },
  {
    id: 9,
    domain: "Chapter 4: LLM-Powered Test Infrastructure",
    question: "A testing team uses an LLM agent to execute test cases and report results. The agent is configured as semi-autonomous. In which of the following scenarios should the agent MOST likely require human approval before proceeding?",
    options: [
      "Executing a low-priority test case that verifies a UI label color",
      "Deleting a test environment after a test run completes",
      "Logging a minor cosmetic defect in a test report",
      "Running a standard regression test suite"
    ],
    correctAnswer: 1,
    explanation: "A semi-autonomous agent should require human approval for critical or high-risk actions such as deleting a test environment, which could result in data loss or disruption. Executing low-priority tests, logging minor defects, and running standard regression suites are low-risk operations that can be handled autonomously."
  },

  // K4 - Analyze (1 question)
  {
    id: 10,
    domain: "Chapter 4: LLM-Powered Test Infrastructure",
    question: "A testing team is designing their RAG pipeline and must decide between fine-tuning an LLM and using prompt engineering with RAG. Consider the following characteristics:\n\n(A) Requires a large labeled dataset of testing-specific examples\n(B) Can incorporate real-time updates to test artifacts without retraining\n(C) Has lower upfront cost but higher per-query cost due to longer prompts\n(D) Produces more consistent outputs for domain-specific terminology\n\nWhich combination correctly identifies fine-tuning vs. RAG with prompt engineering?",
    options: [
      "Fine-tuning: A, D; RAG with prompt engineering: B, C",
      "Fine-tuning: B, C; RAG with prompt engineering: A, D",
      "Fine-tuning: A, B; RAG with prompt engineering: C, D",
      "Fine-tuning: C, D; RAG with prompt engineering: A, B"
    ],
    correctAnswer: 0,
    explanation: "Fine-tuning requires a labeled dataset (A) and produces more consistent domain-specific terminology (D). RAG with prompt engineering can incorporate real-time updates without retraining (B) and has lower upfront cost but higher per-query cost due to longer prompts (C). This question requires analyzing the tradeoffs between approaches."
  }
];

export const questions2: ExamQuestion[] = [
  // K1 - Remember (2 questions)
  {
    id: 11,
    domain: "Chapter 4: LLM-Powered Test Infrastructure",
    question: "What is 'chunking' in a RAG pipeline?",
    options: [
      "A method for compressing LLM model weights",
      "The process of breaking large documents into smaller pieces for efficient retrieval",
      "A way to speed up LLM inference",
      "A technique for encrypting test data"
    ],
    correctAnswer: 1,
    explanation: "Chunking breaks large test documents into smaller pieces that can be efficiently embedded and retrieved. This ensures that the most relevant sections are retrieved and included in the LLM prompt. It is not related to model compression, encryption, or inference speed."
  },
  {
    id: 12,
    domain: "Chapter 4: LLM-Powered Test Infrastructure",
    question: "Which of the following is a component of LLMOps for testing?",
    options: [
      "Model versioning, prompt management, and performance monitoring",
      "Waterfall development methodology",
      "Manual test case creation using spreadsheets",
      "Paper-based test documentation"
    ],
    correctAnswer: 0,
    explanation: "LLMOps for testing includes model versioning, prompt management, and performance monitoring. These practices ensure that LLM-based testing tools are reliable, maintainable, and can be rolled back if needed. It does not include waterfall methodology, manual spreadsheets, or paper documentation."
  },

  // K2 - Understand (4 questions)
  {
    id: 13,
    domain: "Chapter 4: LLM-Powered Test Infrastructure",
    question: "What is the primary purpose of fine-tuning an LLM for testing tasks?",
    options: [
      "To eliminate the need for prompts entirely",
      "To adapt the model's behavior to specific testing terminology, patterns, and domain knowledge",
      "To make the model run faster on smaller hardware",
      "To reduce the model's memory requirements"
    ],
    correctAnswer: 1,
    explanation: "Fine-tuning adapts a pre-trained LLM to specific testing tasks by training it on testing-specific datasets. This improves the model's understanding of testing terminology, patterns, and domain knowledge. It does not eliminate the need for prompts, make the model run faster, or reduce memory."
  },
  {
    id: 14,
    domain: "Chapter 4: LLM-Powered Test Infrastructure",
    question: "What is the purpose of 'semantic similarity retrieval' in a RAG system?",
    options: [
      "To find content with similar meaning regardless of exact words used",
      "To find exact keyword matches in test documents",
      "To compress documents for faster storage",
      "To encrypt sensitive test data"
    ],
    correctAnswer: 0,
    explanation: "Semantic similarity retrieval finds content with similar meaning regardless of exact words used. This is more powerful than keyword search because it understands concepts and context, allowing retrieval of relevant test artifacts even when different terminology is used."
  },
  {
    id: 15,
    domain: "Chapter 4: LLM-Powered Test Infrastructure",
    question: "Why is 'prompt management' important in LLMOps for testing?",
    options: [
      "It ensures prompts are versioned, tested, and deployed systematically for reproducibility",
      "It makes prompts visually appealing to end users",
      "It reduces the LLM's memory consumption",
      "It eliminates the need for any human oversight"
    ],
    correctAnswer: 0,
    explanation: "Prompt management in LLMOps involves versioning, testing, and deploying prompts systematically. This ensures consistency and reproducibility, allowing teams to track which prompt versions produce the best results and roll back if needed."
  },
  {
    id: 16,
    domain: "Chapter 4: LLM-Powered Test Infrastructure",
    question: "Which RAG evaluation metric measures whether the generated answer is factually consistent with the retrieved context?",
    options: [
      "Context recall",
      "Context precision",
      "Faithfulness",
      "Latency"
    ],
    correctAnswer: 2,
    explanation: "Faithfulness measures whether the generated answer is factually consistent with the retrieved context. It detects hallucinations by verifying that the output does not introduce information not present in the retrieved test artifacts. Context precision measures relevance of retrieved chunks, and context recall measures completeness of retrieval."
  },

  // K3 - Apply (3 questions - scenario/exercise)
  {
    id: 17,
    domain: "Chapter 4: LLM-Powered Test Infrastructure",
    question: "A testing team is building a RAG pipeline. Their test documentation includes: (1) a 500-page requirements document, (2) 2000 test cases, and (3) 500 defect reports. Which chunking strategy would be MOST effective for retrieving relevant information?",
    options: [
      "Use the entire 500-page document as a single chunk for maximum context",
      "Split each document type using appropriate chunk sizes: paragraphs for requirements, individual test cases for test cases, and individual reports for defects",
      "Randomly split all documents into 1000-character chunks regardless of content type",
      "Only chunk the defect reports and ignore requirements and test cases"
    ],
    correctAnswer: 1,
    explanation: "Different document types benefit from different chunking strategies. Requirements are best chunked by paragraph or section, test cases are naturally self-contained units, and defect reports are best kept as individual reports. This preserves semantic meaning while enabling efficient retrieval. Single chunks are too large, random splitting breaks semantic units, and ignoring content loses context."
  },
  {
    id: 18,
    domain: "Chapter 4: LLM-Powered Test Infrastructure",
    question: "A testing team's RAG system returns irrelevant test cases when asked about login functionality. Analysis shows the system retrieves test cases for 'logging' instead of 'authentication'. Which component of the RAG pipeline should be improved FIRST?",
    options: [
      "The LLM inference engine",
      "The embedding model or the chunking strategy",
      "The user interface",
      "The scoring algorithm for test results"
    ],
    correctAnswer: 1,
    explanation: "The problem is semantic confusion between 'login' and 'logging', which indicates the embedding model is not capturing the correct semantic meaning, or the chunking strategy doesn't preserve enough context to disambiguate. Improving the embedding model or adding metadata to chunks (e.g., tagging sections as 'authentication' vs. 'logging') would help most. The LLM, UI, and scoring are not the root cause."
  },
  {
    id: 19,
    domain: "Chapter 4: LLM-Powered Test Infrastructure",
    question: "A team wants to generate synthetic test data for a banking application. The real data contains customer names, account numbers, and transaction amounts. Which approach BEST preserves data utility while protecting privacy?",
    options: [
      "Use the real production data directly since it's only for testing",
      "Replace all sensitive fields with constant placeholder values like 'XXX'",
      "Use an LLM to generate realistic but synthetic data that preserves statistical properties without exposing real information",
      "Delete all data and use only empty strings"
    ],
    correctAnswer: 2,
    explanation: "Using an LLM to generate synthetic data preserves statistical properties (distributions, correlations, edge cases) while protecting privacy since no real customer data is used. Using production data directly violates privacy, constant placeholders lose data utility, and empty strings make testing impossible."
  },

  // K4 - Analyze (1 question)
  {
    id: 20,
    domain: "Chapter 4: LLM-Powered Test Infrastructure",
    question: "A testing team evaluates two approaches for their LLM-powered test case generator:\n\nApproach A: Fine-tune an LLM on 5000 labeled test cases, then deploy it.\nApproach B: Use RAG with prompt engineering, retrieving relevant test cases at query time.\n\nConsider these tradeoffs:\n(A) Approach A has higher upfront cost but lower latency per query\n(B) Approach B can incorporate new test cases immediately without retraining\n(C) Approach A produces more consistent domain-specific terminology\n(D) Approach B is more prone to hallucination on edge cases not covered by retrieved context\n\nWhich approaches and tradeoffs are correctly paired?",
options: [
      "Fine-tuning: A, C; RAG with prompt engineering: B, D",
      "Fine-tuning: A, D; RAG with prompt engineering: B, C",
      "Fine-tuning: B, D; RAG with prompt engineering: A, C",
      "Fine-tuning: C, D; RAG with prompt engineering: A, B"
    ],
    correctAnswer: 0,
    explanation: "Fine-tuning (Approach A) has higher upfront training cost (A) but produces more consistent domain terminology (C). RAG (Approach B) can incorporate new test cases immediately without retraining (B) but is more prone to hallucination on edge cases not covered by retrieved context (D). This question requires analyzing the tradeoffs between the two approaches."
  }
];