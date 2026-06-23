import type { ExamQuestion } from '@/types';

export const questions: ExamQuestion[] = [
  // Chapter 1: Introduction to GenAI for Testing (8 questions)
  {
    id: 1,
    domain: "Chapter 1: Introduction to GenAI for Testing",
    question: "Which of the following correctly orders the types of AI from most rule-based to most content-generating?",
    options: [
      "Generative AI → Classical machine learning → Symbolic AI → Deep learning",
      "Symbolic AI → Classical machine learning → Deep learning → Generative AI",
      "Deep learning → Symbolic AI → Classical machine learning → Generative AI",
      "Classical machine learning → Generative AI → Symbolic AI → Deep learning"
    ],
    correctAnswer: 1,
    explanation: "The AI spectrum progresses from symbolic AI (rule-based, uses symbols and logical rules), through classical machine learning (data-driven, requires feature selection and model training), to deep learning (neural networks that automatically learn features), and finally to generative AI (uses deep learning to create new content by mimicking patterns from training data)."
  },
  {
    id: 2,
    domain: "Chapter 1: Introduction to GenAI for Testing",
    question: "An LLM produces different output each time the same prompt is submitted, even though no settings have changed. What is the MOST likely explanation for this behavior?",
    options: [
      "The model has a bug in its attention mechanism",
      "LLMs exhibit non-deterministic behavior due to the probabilistic nature of their inference mechanisms and hyper-parameter settings",
      "The context window is too small for the input",
      "The tokenizer is breaking the input into incorrect tokens"
    ],
    correctAnswer: 1,
    explanation: "LLMs exhibit non-deterministic behavior primarily due to the probabilistic nature of their inference mechanisms and hyper-parameter settings. This inherent randomness can lead to variations in outputs even when the same input is provided multiple times. This is a known characteristic of LLMs, not a bug."
  },
  {
    id: 3,
    domain: "Chapter 1: Introduction to GenAI for Testing",
    question: "A testing team needs to perform complex multi-step test planning that requires logical inference and synthesis of information from multiple sources. Which type of LLM is MOST appropriate for this task?",
    options: [
      "A foundation LLM, because it is trained on the broadest dataset",
      "A reasoning LLM, because it is fine-tuned for structured cognitive abilities such as logical inference and multi-step problem-solving",
      "Any instruction-tuned LLM, because it follows instructions",
      "A small language model (SLM), because it is the most cost-effective"
    ],
    correctAnswer: 1,
    explanation: "Reasoning LLMs extend instruction-tuned models by emphasizing structured cognitive abilities such as logical inference, multi-step problem-solving, and chain-of-thought reasoning. They are better suited for high-cognitive-load tasks like complex test planning. Foundation LLMs typically require further adaptation, and SLMs are designed for narrower tasks."
  },
  {
    id: 4,
    domain: "Chapter 1: Introduction to GenAI for Testing",
    question: "In software testing, how do vision-language models extend the capabilities of standard text-only LLMs?",
    options: [
      "They replace the transformer architecture with a different neural network",
      "They convert all text input into images before processing",
      "They integrate visual and textual information to perform tasks such as analyzing screenshots and GUI wireframes alongside textual descriptions like defect reports",
      "They generate images of bugs for visual defect tracking"
    ],
    correctAnswer: 2,
    explanation: "Vision-language models, a subset of multimodal LLMs, specifically integrate visual and textual information. In software testing, they can analyze visual elements of applications (screenshots, GUI wireframes) along with associated textual descriptions (defect reports, user stories) to identify discrepancies between expected results and actual visual elements, and generate rich test cases incorporating both text and visual cues."
  },
  {
    id: 5,
    domain: "Chapter 1: Introduction to GenAI for Testing",
    question: "Which of the following is an example of using an LLM capability for 'test oracle generation'?",
    options: [
      "Using an LLM to generate test data with specific boundary values",
      "Using an LLM to generate expected results for test cases based on requirements",
      "Using an LLM to create automated test scripts from test case descriptions",
      "Using an LLM to classify defects by severity and priority"
    ],
    correctAnswer: 1,
    explanation: "Test oracle generation refers to using LLMs to help generate expected results. An LLM can analyze requirements or user stories and produce the expected outcomes for given test inputs, serving as a test oracle. Generating test data is a different capability (test data generation), creating scripts is test automation support, and classifying defects is test result analysis."
  },
  {
    id: 6,
    domain: "Chapter 1: Introduction to GenAI for Testing",
    question: "Which of the following best describes how an AI chatbot and an LLM-powered testing application differ in their use for software testing?",
    options: [
      "They are essentially the same thing with different names",
      "An AI chatbot provides a conversational interface for direct interaction, while an LLM-powered testing application integrates LLM capabilities via APIs to perform automated, well-defined testing tasks with greater customization and scalability",
      "AI chatbots can only be used for testing, while LLM-powered applications are used for development",
      "LLM-powered testing applications require no prompt engineering, while AI chatbots do"
    ],
    correctAnswer: 1,
    explanation: "AI chatbots provide a conversational interface enabling testers to communicate directly with LLMs through natural language, which is effective for exploratory testing and quick feedback. LLM-powered testing applications integrate LLM capabilities via APIs to perform well-defined and often automated testing tasks, offering greater customization and scalability for repetitive or complex tasks like test case generation and defect analysis."
  },
  {
    id: 7,
    domain: "Chapter 1: Introduction to GenAI for Testing",
    question: "A tester wants to use an LLM to iteratively refine acceptance criteria by having a back-and-forth conversation, adjusting the prompt based on each response. Which interaction model is MOST appropriate?",
    options: [
      "An LLM-powered testing application with a fixed API integration",
      "An AI chatbot, because it allows dynamic, conversational interaction with iterative refinement through prompt chaining",
      "A standalone SLM deployed on local infrastructure",
      "A multi-agent architecture with autonomous agents"
    ],
    correctAnswer: 1,
    explanation: "AI chatbots are particularly effective for dynamic, conversational interactions where testers can iteratively refine outputs through prompt chaining. This natural language interaction allows for quick feedback, clarification of test concepts, and dynamic exploration of requirements. An API-based LLM-powered application is better suited for automated, repetitive tasks rather than interactive refinement."
  },
  {
    id: 8,
    domain: "Chapter 1: Introduction to GenAI for Testing",
    question: "Which of the following correctly describes embeddings in the context of LLMs used for software testing?",
    options: [
      "Visual diagrams showing the architecture of the LLM",
      "Dense numerical vectors that encode semantic, syntactic, and contextual relationships of tokens, enabling semantic similarity search used in RAG systems",
      "Error messages embedded in the LLM's output when it encounters unknown input",
      "The process of compressing an LLM for faster deployment"
    ],
    correctAnswer: 1,
    explanation: "Embeddings are numerical representations of tokens that encode their semantic, syntactic, and contextual relationships in a format suitable for processing by generative AI models. Each token is transformed into a vector in a high-dimensional space. Tokens with similar meanings have embeddings positioned closely together, enabling LLMs to understand word relationships and enabling semantic similarity search essential for RAG systems in testing."
  },

  // Chapter 2: Prompt Engineering for Testing (8 questions)
  {
    id: 9,
    domain: "Chapter 2: Prompt Engineering for Testing",
    question: "A tester writes the following prompt: 'You are a test manager (role) for a banking application (context). Generate test conditions for the login feature (instruction) based on this user story: As a user, I want to log in with my credentials (input data). Focus on security and edge cases (constraints). Present the output as a numbered list (output format).' How many components of a structured prompt does this include?",
    options: [
      "Three: role, instruction, and output format",
      "Four: role, context, instruction, and input data",
      "Five: role, context, instruction, input data, and constraints",
      "Six: role, context, instruction, input data, constraints, and output format"
    ],
    correctAnswer: 3,
    explanation: "A structured prompt for software testing typically includes six components: role (test manager), context (banking application), instruction (generate test conditions for login), input data (the user story), constraints (focus on security and edge cases), and output format (numbered list). This prompt includes all six components."
  },
  {
    id: 10,
    domain: "Chapter 2: Prompt Engineering for Testing",
    question: "A testing team needs to generate test cases from a complex requirements document. They want to break this down into steps: first analyze requirements, then generate test conditions, then create test cases from those conditions, verifying each step before proceeding. Which prompting technique is MOST appropriate?",
    options: [
      "Zero-shot prompting, because it relies on the model's pre-existing knowledge",
      "Few-shot prompting, because it provides examples to guide the output",
      "Prompt chaining, because it breaks the task into a series of intermediate steps with each result checked before proceeding to the next",
      "Meta prompting, because it leverages the AI's ability to generate its own prompts"
    ],
    correctAnswer: 2,
    explanation: "Prompt chaining involves breaking a task into a series of intermediate steps (multiple prompts). The result of each step is manually or automatically checked and refined before proceeding to the next step. This approach leads to greater accuracy as each response informs the next prompt. It is particularly useful in test processes where tasks are complicated and require decomposition into subtasks with systematic checking of intermediate LLM outputs."
  },
  {
    id: 11,
    domain: "Chapter 2: Prompt Engineering for Testing",
    question: "A tester wants an LLM to generate Gherkin-style test cases. They include two complete examples of user stories with their corresponding Given-When-Then test cases in the prompt before the actual user story. Which prompting technique is being used?",
    options: [
      "Zero-shot prompting",
      "One-shot prompting",
      "Few-shot prompting",
      "Meta prompting"
    ],
    correctAnswer: 2,
    explanation: "Few-shot prompting involves providing the LLM with more than one example (a few) in the prompt to consolidate the desired response behavior. Zero-shot prompting provides no examples, one-shot prompting provides one example, and meta prompting leverages the AI's ability to generate or refine its own prompts. Few-shot prompting is particularly effective for tasks like Gherkin-style test case generation where examples illustrate the required output format."
  },
  {
    id: 12,
    domain: "Chapter 2: Prompt Engineering for Testing",
    question: "Which of the following statements correctly distinguishes between a system prompt and a user prompt?",
    options: [
      "The system prompt changes with each interaction, while the user prompt stays constant throughout the session",
      "The system prompt is defined by the developer or tester to guide overall LLM behavior and stays constant, while the user prompt represents the actual input that changes with each interaction",
      "There is no difference between system and user prompts",
      "The system prompt is visible and editable by the chatbot user, while the user prompt is hidden"
    ],
    correctAnswer: 1,
    explanation: "The system prompt is typically defined by the developer or tester to guide the overall behavior of the LLM (e.g., role, operational parameters, constraints). It is not visible or editable by the chatbot's user and stays constant throughout the interaction session. The user prompt represents the actual input or question from the user, changes with each interaction, and is directly visible."
  },
  {
    id: 13,
    domain: "Chapter 2: Prompt Engineering for Testing",
    question: "A tester uses GenAI to analyze a set of user stories and identify potential defects, ambiguities, and missing information in the test basis. Which test task is being performed?",
    options: [
      "Test design",
      "Test implementation",
      "Test analysis",
      "Test monitoring"
    ],
    correctAnswer: 2,
    explanation: "Test analysis with GenAI involves generating and prioritizing test conditions, identifying defects in the test basis, and providing coverage analysis. GenAI can help analyze the test basis for inconsistencies, ambiguities, or incomplete information that could lead to defects. This is a test analysis task, not test design (which involves creating test cases) or test monitoring (which involves tracking progress)."
  },
  {
    id: 14,
    domain: "Chapter 2: Prompt Engineering for Testing",
    question: "In a CI/CD pipeline, an LLM is used to analyze code changes and identify which areas of the software are most likely to be affected by recent modifications, enabling targeted regression testing. Which GenAI capability for regression testing does this represent?",
    options: [
      "Self-healing and adaptive tests",
      "Automated test reporting and insights",
      "Impact analysis and test optimization",
      "Enhanced defect reporting and root cause analysis"
    ],
    correctAnswer: 2,
    explanation: "Impact analysis and test optimization involves GenAI analyzing code changes to identify high-risk areas, enabling targeted regression testing where it is most needed. This is one of the key GenAI capabilities for automated regression testing: dynamically adapting to codebase changes and performing impact analysis to focus regression test efforts effectively."
  },
  {
    id: 15,
    domain: "Chapter 2: Prompt Engineering for Testing",
    question: "A test manager wants to use GenAI to analyze test execution data from a test management tool, generate metrics such as test progress and defect trends, and produce a natural language summary for stakeholders. Which test task does this support?",
    options: [
      "Test analysis",
      "Test design",
      "Test monitoring and test control",
      "Test implementation"
    ],
    correctAnswer: 2,
    explanation: "Test monitoring and test control with GenAI involves automating the analysis of test data to generate metrics (test progress, defect trends, coverage), predicting potential risks, and creating dynamic dashboards and natural language summaries. GenAI also assists with test control by providing insights for reprioritizing tests, adjusting schedules, and reallocating resources."
  },
  {
    id: 16,
    domain: "Chapter 2: Prompt Engineering for Testing",
    question: "A testing team wants to evaluate the quality of LLM-generated test cases. They measure the proportion of generated test scripts that can be executed successfully without syntax errors or output format issues. Which metric are they using?",
    options: [
      "Accuracy",
      "Precision",
      "Recall",
      "Execution success rate"
    ],
    correctAnswer: 3,
    explanation: "Execution success rate measures the proportion of generated test cases or test scripts that can be executed successfully. It determines how many of the generated test scripts can be executed without syntax errors or output format issues in an otherwise working test environment. This is one of the key metrics for evaluating GenAI results on test tasks."
  },

  // Chapter 3: Managing Risks of GenAI in Testing (8 questions)
  {
    id: 17,
    domain: "Chapter 3: Managing Risks of GenAI in Testing",
    question: "Which of the following correctly defines a 'reasoning error' in the context of GenAI for software testing?",
    options: [
      "An LLM generates output that appears factually incorrect or irrelevant to the given task",
      "An LLM misinterprets logical structures such as cause-and-effect relationships or conditional logic, leading to incorrect conclusions",
      "An LLM's output favors certain types of information due to its training data",
      "An LLM produces different output each time for the same input"
    ],
    correctAnswer: 1,
    explanation: "Reasoning errors occur when LLMs misinterpret logical structures, such as cause-and-effect relationships, conditional logic, or step-by-step problem-solving processes, leading to incorrect conclusions. Unlike humans, LLMs lack true logical reasoning and rely on pattern matching. Test planning and test case prioritization are examples of test tasks where LLMs can make reasoning errors."
  },
  {
    id: 18,
    domain: "Chapter 3: Managing Risks of GenAI in Testing",
    question: "An LLM generates a test case that verifies an acceptance criterion which does not exist in the requirements document. Which type of problem is this, and what detection approach should be used?",
    options: [
      "A reasoning error; use logical validation to evaluate the logical flow",
      "A hallucination; use cross-verification by comparing the AI-generated output with existing documentation and requirements",
      "A bias; review how generated testware is fairly represented",
      "Non-deterministic behavior; lower the temperature parameter"
    ],
    correctAnswer: 1,
    explanation: "A hallucination occurs when an LLM generates output that appears factually incorrect or irrelevant to a given task. In this case, the LLM created a test case verifying a non-existent acceptance criterion. Hallucination detection can be done through cross-verification: comparing AI-generated output with existing documentation, requirements, and known system behavior to flag discrepancies."
  },
  {
    id: 19,
    domain: "Chapter 3: Managing Risks of GenAI in Testing",
    question: "Which of the following is NOT one of the five key mitigation techniques for hallucinations, reasoning errors, and biases described in the syllabus?",
    options: [
      "Provide complete context in the prompt",
      "Divide prompts into manageable segments using prompt chaining",
      "Use reinforcement learning from human feedback (RLHF) to retrain the model",
      "Compare results across multiple LLM models"
    ],
    correctAnswer: 2,
    explanation: "The five key mitigation techniques described in the syllabus are: (1) Provide complete context, (2) Divide prompts into manageable segments using prompt chaining, (3) Use clear, interpretable data formats, (4) Select the appropriate GenAI model for the task, and (5) Compare results across models. RLHF is a model training technique, not a tester-facing mitigation strategy described in the syllabus."
  },
  {
    id: 20,
    domain: "Chapter 3: Managing Risks of GenAI in Testing",
    question: "Which two strategies can help reduce the non-deterministic behavior of LLMs during inference?",
    options: [
      "Increasing the context window and using more training data",
      "Adjusting the temperature parameter to a lower value and setting random seeds",
      "Using a larger model and increasing the number of output tokens",
      "Switching to a foundation model and disabling tokenization"
    ],
    correctAnswer: 1,
    explanation: "The syllabus describes two strategies for mitigating non-deterministic behavior: (1) Adjusting the LLM's temperature parameter settings — lowering the temperature narrows the probability distribution, reducing randomness and resulting in more consistent outputs; (2) Setting random seeds — some LLM implementations allow setting a seed value for the random number generator, ensuring the same pseudo-random sequence is used, which improves reproducibility."
  },
  {
    id: 21,
    domain: "Chapter 3: Managing Risks of GenAI in Testing",
    question: "An attacker sends excessively long prompts to an LLM-powered test tool, exceeding the context window to overload the AI's memory, attempting to make it reveal training data. Which attack vector does this represent?",
    options: [
      "Data poisoning",
      "Request manipulation",
      "Data exfiltration",
      "Malicious code generation"
    ],
    correctAnswer: 2,
    explanation: "Data exfiltration involves sending requests designed to extract confidential training data. The example given in the syllabus is exceeding the LLM contextual window with long prompts to overload the AI's memory, which could lead it to reveal random snippets of its training data and potentially expose sensitive information."
  },
  {
    id: 22,
    domain: "Chapter 3: Managing Risks of GenAI in Testing",
    question: "Which of the following is a key mitigation strategy to protect data privacy when using GenAI for software testing?",
    options: [
      "Always use the largest available LLM for maximum accuracy",
      "Data anonymization and pseudonymization: mask or replace sensitive information with non-identifiable data",
      "Disable all encryption to improve processing speed",
      "Only use GenAI for non-functional testing tasks"
    ],
    correctAnswer: 1,
    explanation: "Data anonymization and pseudonymization is a key mitigation strategy: masking or replacing sensitive information with non-identifiable data. Other mitigation strategies include data minimization (avoiding processing sensitive data unless legally permitted), secure data storage and transmission (encryption and access controls), systematic review of generated output, and choosing a secure operational environment."
  },
  {
    id: 23,
    domain: "Chapter 3: Managing Risks of GenAI in Testing",
    question: "Which of the following statements about the energy consumption of GenAI in software testing is correct, according to the syllabus?",
    options: [
      "Generating text with a powerful AI model consumes as much energy as fully charging a smartphone",
      "Generating a single image using a powerful AI model can consume as much energy as fully charging a smartphone, while generating text consumes only a small percentage of a smartphone's charge",
      "Energy consumption of GenAI is negligible and does not contribute to CO2 emissions",
      "Only the training of LLMs consumes energy, not the inference phase"
    ],
    correctAnswer: 1,
    explanation: "According to the syllabus, generating a single image using a powerful AI model can consume as much energy as fully charging a smartphone, while generating text consumes only a small percentage of a smartphone's charge. The complexity of the task and computational resources required influence energy consumption. Cumulative effects across millions of users result in substantial CO2 emissions."
  },
  {
    id: 24,
    domain: "Chapter 3: Managing Risks of GenAI in Testing",
    question: "Which standard provides a framework for AI lifecycle processes, emphasizing fault tolerance and transparency, and is relevant when using GenAI for testing?",
    options: [
      "ISO/IEC 42001:2023 — Artificial Intelligence Management System",
      "ISO/IEC 23053:2022 — Framework for Artificial Intelligence (AI) Systems Using Machine Learning",
      "GDPR — General Data Protection Regulation",
      "NIST AI Risk Management Framework"
    ],
    correctAnswer: 1,
    explanation: "ISO/IEC 23053:2022 provides a framework for AI lifecycle processes, emphasizing fault tolerance and transparency. In software testing, it provides a framework for data quality, transparency, and fault tolerance when using GenAI for testing. ISO/IEC 42001:2023 specifies requirements for managing AI systems within an organization, and the NIST AI RMF offers guidelines for managing AI risks."
  },

  // Chapter 4: LLM-Powered Test Infrastructure (8 questions)
  {
    id: 25,
    domain: "Chapter 4: LLM-Powered Test Infrastructure",
    question: "In a typical LLM-powered test infrastructure, which component is responsible for processing user input, managing authentication, data retrieval, prompt preparation, and interaction with the LLM?",
    options: [
      "The front-end",
      "The back-end",
      "The vector database",
      "The LLM itself"
    ],
    correctAnswer: 1,
    explanation: "In an LLM-powered test infrastructure, the back-end processes user input and manages critical functions such as authentication, data retrieval, prompt preparation, and interaction with the LLM. The front-end is the user interface, the vector database stores embeddings for semantic retrieval, and the LLM generates responses based on structured prompts."
  },
  {
    id: 26,
    domain: "Chapter 4: LLM-Powered Test Infrastructure",
    question: "In a Retrieval-Augmented Generation (RAG) system, what is the correct order of steps during the user query processing phase?",
    options: [
      "Generation → Retrieval → Chunking → Embedding",
      "Retrieval → Generation → Chunking → Embedding",
      "Retrieval of relevant information from vector databases → Generation of response by LLM using retrieved information",
      "Embedding → Generation → Retrieval → Chunking"
    ],
    correctAnswer: 2,
    explanation: "In the user prompt processing phase, RAG works through a two-step process: (1) Retrieval: Given a user query, the system retrieves relevant information from previously created vector databases based on semantic similarity between embeddings; (2) Generation: The retrieved information is then fed to the LLM, which generates a response combining its existing knowledge with the newly acquired data, resulting in more accurate and contextually appropriate output."
  },
  {
    id: 27,
    domain: "Chapter 4: LLM-Powered Test Infrastructure",
    question: "During the preprocessing phase of a RAG system, large documents are broken into smaller chunks. What is the typical size of these chunks, and why is this necessary?",
    options: [
      "1-10 tokens, to minimize processing time",
      "256-512 tokens, to ensure focused retrieval and compatibility with the model's context window",
      "10,000+ tokens, to include as much context as possible",
      "Variable size depending on the LLM's training data, to match its vocabulary"
    ],
    correctAnswer: 1,
    explanation: "During preprocessing in a RAG system, large documents are broken into smaller chunks (e.g., 256-512 tokens) to ensure focused retrieval and compatibility with the model context window. Each chunk is cleaned, processed, and encoded into a high-dimensional vector (embedding) using pre-trained models. These embeddings are stored in vector databases to enable efficient similarity-based retrieval at runtime."
  },
  {
    id: 28,
    domain: "Chapter 4: LLM-Powered Test Infrastructure",
    question: "Which of the following correctly describes the difference between autonomous and semi-autonomous LLM-powered agents in test processes?",
    options: [
      "Autonomous agents require human oversight for every action, while semi-autonomous agents operate independently",
      "Autonomous agents operate independently with minimal human intervention using predefined rules and adaptive feedback loops, while semi-autonomous agents perform tasks with periodic human oversight to ensure output meets goals",
      "There is no difference between autonomous and semi-autonomous agents",
      "Autonomous agents are used for testing, while semi-autonomous agents are used for development"
    ],
    correctAnswer: 1,
    explanation: "Autonomous agents operate independently, performing tasks with minimal human intervention using predefined rules, reinforcement learning, and adaptive feedback loops. Semi-autonomous agents perform tasks with periodic human oversight to ensure that the output meets user-defined goals. In test processes, semi-autonomous agents can be used for critical tasks where human verification of results is important."
  },
  {
    id: 29,
    domain: "Chapter 4: LLM-Powered Test Infrastructure",
    question: "What is the primary purpose of fine-tuning an LLM or SLM for software testing tasks?",
    options: [
      "To reduce the model's context window for faster processing",
      "To adapt a pre-trained model to perform specific testing tasks or tailor it to a particular domain by further training it on targeted datasets",
      "To replace the transformer architecture with a more efficient neural network",
      "To eliminate non-deterministic behavior entirely"
    ],
    correctAnswer: 1,
    explanation: "Fine-tuning adapts a pre-trained LLM or SLM to perform specific tasks or tailor it to particular domains by further training the model on a targeted dataset. This allows the model to learn domain-specific knowledge and nuances. For example, in software testing, fine-tuning can enable an LLM to generate test cases from user stories in an output format specific to the organization's context and terminology."
  },
  {
    id: 30,
    domain: "Chapter 4: LLM-Powered Test Infrastructure",
    question: "Which of the following is NOT a challenge of fine-tuning a GenAI model for software testing, as described in the syllabus?",
    options: [
      "Ensuring high-quality, task-specific training datasets to avoid biased or inaccurate results",
      "Mitigating overfitting, where the model becomes too specialized to training data and loses generalization",
      "Addressing opacity (lack of transparency) in the model's reasoning, complicating debugging and validation",
      "Obtaining sufficient user feedback for real-time prompt adjustments"
    ],
    correctAnswer: 3,
    explanation: "The syllabus describes four challenges of fine-tuning: (1) Avoiding biased or inaccurate results by ensuring high-quality training datasets, (2) Mitigating overfitting to maintain generalization, (3) Addressing opacity in the model's reasoning which complicates debugging and validation, and (4) Managing significant computational resources required for fine-tuning LLMs. Obtaining user feedback for real-time prompt adjustments is not listed as a fine-tuning challenge."
  },
  {
    id: 31,
    domain: "Chapter 4: LLM-Powered Test Infrastructure",
    question: "An organization wants to use GenAI in its test processes and is considering three approaches. Which of the following correctly lists the three approaches described in the syllabus for using GenAI in an organization's test processes?",
    options: [
      "Using a public cloud LLM, using a private on-premise LLM, or using a hybrid cloud-on-premise LLM",
      "Using an AI chatbot, using a test tool with generative AI capabilities, or in-house development of a test tool based on generative AI",
      "Using open-source models only, using commercial models only, or using a combination of both",
      "Using RAG, using fine-tuning, or using prompt engineering only"
    ],
    correctAnswer: 1,
    explanation: "The syllabus describes three possible approaches for using GenAI in an organization's test processes: (1) Using an AI chatbot — managing data privacy/security risks while optimizing cost; (2) Using a test tool with generative AI capabilities — evaluating data security and performance assurances from the tool provider; (3) In-house development of a test tool based on generative AI — emphasizing comprehensive control of data privacy, security, and AI operating costs. These approaches are not mutually exclusive."
  },
  {
    id: 32,
    domain: "Chapter 4: LLM-Powered Test Infrastructure",
    question: "An organization chooses to use an AI chatbot (LLM-as-a-Service) for some test tasks. What is the primary consideration they must address, according to the syllabus?",
    options: [
      "They must build custom infrastructure to host the LLM locally",
      "They must rigorously assess vendor assurances regarding data privacy and security risks, or deploy in-house infrastructure using open-source licensed LLMs for greater control",
      "They must fine-tune the LLM on their own training data before using it",
      "They must implement a multi-agent architecture for all test tasks"
    ],
    correctAnswer: 1,
    explanation: "When using an AI chatbot approach, the primary considerations include managing data privacy and security risks while optimizing cost. Organizations might use LLM-as-a-Service platforms if the necessary assurances are given, or deploy in-house infrastructure using open-source licensed LLMs for greater control. A rigorous assessment of vendor assurances or internal capabilities is critical to mitigate data privacy and security risks and ensure operational efficiency."
  },

  // Chapter 5: Deploying and Integrating GenAI (8 questions)
  {
    id: 33,
    domain: "Chapter 5: Deploying and Integrating GenAI",
    question: "Which of the following is NOT a risk of shadow AI, as described in the syllabus?",
    options: [
      "Information security and data privacy weaknesses due to personal AI tools lacking robust security",
      "Compliance and regulatory issues from using unapproved AI tools that may violate industry standards",
      "Vague intellectual property issues from using AI tools with unclear licensing agreements",
      "Increased model accuracy leading to over-reliance on AI-generated test cases"
    ],
    correctAnswer: 3,
    explanation: "The syllabus identifies three risks of shadow AI: (1) Information security and data privacy weaknesses — personal AI tools may lack robust security, leading to potential data breaches; (2) Compliance and regulatory issues — using unapproved AI tools can lead to non-compliance with industry standards and regulations; (3) Vague intellectual property — using AI tools with unclear licensing agreements can expose users to IP disputes. 'Increased model accuracy' is not listed as a risk of shadow AI."
  },
  {
    id: 34,
    domain: "Chapter 5: Deploying and Integrating GenAI",
    question: "When defining a Generative AI strategy for software testing, which of the following is a key aspect to consider, according to the syllabus?",
    options: [
      "Selecting the most expensive LLM available to ensure maximum quality",
      "Defining measurable test objectives for GenAI, such as increasing test productivity, shortening test cycles, and improving test quality",
      "Ensuring all test cases are generated exclusively by GenAI without human review",
      "Avoiding the collection of metrics, as they may discourage the testing team"
    ],
    correctAnswer: 1,
    explanation: "Key aspects of a GenAI strategy include defining measurable test objectives (e.g., increasing test productivity, shortening test cycles, improving test quality), selecting the right LLMs aligned with these objectives, ensuring data quality, providing comprehensive training programs, collecting metrics to measure effectiveness, and establishing process guidelines for compliance with regulatory standards and ethical guidelines."
  },
  {
    id: 35,
    domain: "Chapter 5: Deploying and Integrating GenAI",
    question: "A test organization is evaluating several LLMs for generating test cases. Which of the following is NOT one of the key criteria for selecting LLMs/SLMs described in the syllabus?",
    options: [
      "Model performance evaluated against the organization's benchmarks",
      "Fine-tuning potential with domain-specific data",
      "The number of parameters in the model",
      "Recurring cost, including licensing fees and operational expenses"
    ],
    correctAnswer: 2,
    explanation: "The syllabus describes four key criteria for selecting LLMs/SLMs: (1) Model performance — evaluate against the organization's benchmarks using appropriate metrics; (2) Fine-tuning potential — evaluate whether the model can be fine-tuned with domain-specific data; (3) Recurring cost — consider licensing fees and operational expenses; (4) Community and support — choose models with active community support and detailed documentation. The number of parameters is not listed as a key criterion."
  },
  {
    id: 36,
    domain: "Chapter 5: Deploying and Integrating GenAI",
    question: "A test organization is in the early stages of GenAI adoption. They are training test teams on GenAI concepts, providing access to LLMs, and experimenting with initial use cases. Which phase of GenAI adoption are they in?",
    options: [
      "Utilization and iteration",
      "Initiation and usage definition",
      "Discovery",
      "Full integration"
    ],
    correctAnswer: 2,
    explanation: "The syllabus describes three key phases of GenAI adoption: (1) Discovery — focuses on awareness and capability building, including training test teams on GenAI concepts, providing access to LLMs/SLMs, and experimenting with initial use cases; (2) Initiation and usage definition — identifying and prioritizing practical use cases; (3) Utilization and iteration — fully integrating GenAI into test processes with continuous monitoring. This organization is in the Discovery phase."
  },
  {
    id: 37,
    domain: "Chapter 5: Deploying and Integrating GenAI",
    question: "According to the syllabus, which of the following is an essential skill or knowledge area for testers working with GenAI?",
    options: [
      "Mastering reinforcement learning algorithms to retrain LLMs",
      "Mastering prompt engineering techniques, understanding model context windows, and developing test review methods",
      "Building custom neural network architectures for test automation",
      "Managing large-scale data center infrastructure for LLM hosting"
    ],
    correctAnswer: 1,
    explanation: "The syllabus states that essential skills include mastering prompt engineering techniques, understanding model context windows, and developing test review methods. Testers must combine domain and test expertise with AI skills to evaluate LLM-driven testing. Key competencies include assessing LLM capabilities, understanding prompt refinement techniques, and evaluating AI-generated testware. They should also understand data security implications and environmental considerations."
  },
  {
    id: 38,
    domain: "Chapter 5: Deploying and Integrating GenAI",
    question: "Which of the following is a strategy for cultivating GenAI capabilities within test teams, as described in the syllabus?",
    options: [
      "Replacing all manual testers with AI agents immediately",
      "Using a hands-on approach with guided exercises, peer learning, and gradual integration of AI into daily test tasks, supported by communities of practice",
      "Sending all testers to external certification programs before allowing any AI usage",
      "Mandating that all team members use the same LLM and identical prompts for all tasks"
    ],
    correctAnswer: 1,
    explanation: "The syllabus describes a hands-on approach to training test teams: practicing with various LLMs/SLMs, following structured learning paths, and gradually developing know-how through sharing within the organization. Test team members progress from basic prompt creation to test-specific prompts. Internal communities of practice support ongoing knowledge sharing, with regular meetings to highlight successful applications, discuss challenges, and share prompt pattern libraries."
  },
  {
    id: 39,
    domain: "Chapter 5: Deploying and Integrating GenAI",
    question: "How does the role of a tester evolve when an organization adopts GenAI, according to the syllabus?",
    options: [
      "Testers are no longer needed, as GenAI handles all testing tasks",
      "Testers evolve from test design and execution specialists to AI-assisted test specialists who combine test expertise with skills to guide and verify AI-generated testware",
      "Testers become purely AI model developers, focusing on fine-tuning models",
      "Testers' responsibilities remain completely unchanged"
    ],
    correctAnswer: 1,
    explanation: "The syllabus states that testers evolve from test design and test execution specialists to AI-assisted test specialists, combining their expertise in test techniques with skills to guide and verify AI-generated testware. Their test tasks expand to include review of AI-based output, prompt refinement, and maintenance of test-specific prompt libraries. Test managers' responsibilities expand to include AI-based test strategy, AI risk management, and coordinating hybrid teams of people and GenAI tools."
  },
  {
    id: 40,
    domain: "Chapter 5: Deploying and Integrating GenAI",
    question: "When using GenAI for test tasks, what should testers do regarding data security, according to the essential skills described in the syllabus?",
    options: [
      "Share all testware with LLMs freely, as GenAI tools are inherently secure",
      "Implement proper data sanitization by removing or masking sensitive, personal, or confidential information before sharing testware with LLMs",
      "Only use GenAI for tasks that do not involve any data at all",
      "Rely solely on the LLM provider's default security settings without any additional measures"
    ],
    correctAnswer: 1,
    explanation: "The syllabus states that testers should understand the data security implications of sharing testware with LLMs, implement proper data sanitization (removing or masking sensitive, personal, or confidential information), and follow data privacy-preserving prompt engineering practices. Environmental considerations include optimizing model selection and usage patterns to reduce computational overhead and balancing benefits with cost and energy impact."
  }
];