import type { ExamQuestion } from '@/types';

export const questions: ExamQuestion[] = [
  {
    id: 1,
    domain: "Chapter 1: Introduction to GenAI for Testing",
    question: "Which of the following best describes how a transformer model processes input sequences?",
    options: [
      "It processes all tokens in parallel using self-attention mechanisms",
      "It processes tokens one at a time in sequential order",
      "It only processes the first and last tokens of a sequence",
      "It compresses all tokens into a single representation before processing"
    ],
    correctAnswer: 0,
    explanation: "Transformer models use self-attention to process all tokens in parallel, allowing each token to attend to every other token. This is more efficient than sequential processing and enables capturing long-range dependencies."
  },
  {
    id: 2,
    domain: "Chapter 1: Introduction to GenAI for Testing",
    question: "Which type of AI uses a data-driven approach that requires data preparation, feature selection, and model training for tasks such as defect categorization and predicting software problems?",
    options: [
      "Symbolic AI",
      "Classical machine learning",
      "Deep learning",
      "Generative AI"
    ],
    correctAnswer: 1,
    explanation: "Classical machine learning is a data-driven approach that requires data preparation, feature selection, and model training. It can be used for tasks such as defect categorization and predicting software problems. Unlike GenAI, it requires users to manually define features for the task at hand."
  },
  {
    id: 3,
    domain: "Chapter 1: Introduction to GenAI for Testing",
    question: "Which of the following is a key characteristic of Large Language Models that differentiates them from traditional rule-based testing tools?",
    options: [
      "LLMs can only follow pre-defined rules",
      "LLMs always produce deterministic outputs",
      "LLMs cannot process natural language",
      "LLMs generate outputs based on learned statistical patterns rather than explicit programming"
    ],
    correctAnswer: 3,
    explanation: "LLMs generate outputs based on learned statistical patterns from training data, rather than explicit programming rules. This allows them to handle novel inputs and generate creative outputs, unlike traditional rule-based tools."
  },
  {
    id: 4,
    domain: "Chapter 1: Introduction to GenAI for Testing",
    question: "A testing team is evaluating whether to use a general-purpose LLM or a domain-specific SLM for generating API test cases. The task involves standard REST API patterns and the team needs fast, cost-effective results. Which approach is MOST appropriate?",
    options: [
      "Always use the general-purpose LLM for maximum coverage",
      "Use the domain-specific SLM since it is more efficient for this narrow, well-defined task",
      "Use both models simultaneously for every test case",
      "Avoid using any AI model for API testing"
    ],
    correctAnswer: 1,
    explanation: "For narrow, well-defined tasks like standard REST API test generation, a domain-specific SLM is more appropriate because it is faster, more cost-effective, and may actually perform better on domain-specific patterns than a general-purpose LLM."
  },
  {
    id: 5,
    domain: "Chapter 1: Introduction to GenAI for Testing",
    question: "Deep learning uses neural networks to automatically learn features from data. How does this differ from classical machine learning?",
    options: [
      "Deep learning requires manual feature definition, while classical ML does not",
      "Deep learning can find patterns in very large and complex datasets without users manually defining features, while classical ML requires manual feature selection",
      "Deep learning can only be used for image processing, not text",
      "Deep learning does not require any data, while classical ML does"
    ],
    correctAnswer: 1,
    explanation: "Deep learning uses neural networks to automatically learn features from data. It can find patterns in very large and complex datasets (images, video, audio, text) without the need for users to manually define features, though it may still require human involvement in data annotation, model tuning, or result validation. Classical machine learning requires manual feature selection."
  },
  {
    id: 6,
    domain: "Chapter 1: Introduction to GenAI for Testing",
    question: "Which of the following describes the relationship between parameters and model capability in LLMs?",
    options: [
      "More parameters always guarantee better results for every task",
      "Parameters have no relationship to model capability",
      "Generally, more parameters enable the model to capture more complex patterns, but come with higher computational costs",
      "Fewer parameters always produce more accurate outputs"
    ],
    correctAnswer: 2,
    explanation: "More parameters generally enable an LLM to capture more complex patterns and nuances, improving capability. However, this comes with higher computational costs, increased latency, and greater resource requirements."
  },
  {
    id: 7,
    domain: "Chapter 1: Introduction to GenAI for Testing",
    question: "A testing team wants to use a multimodal LLM to analyze screenshots of a mobile application and generate UI test cases. Which capability is MOST relevant for this task?",
    options: [
      "The model's ability to process and understand both visual images and text inputs simultaneously",
      "The model's ability to generate code from scratch",
      "The model's ability to run on a server without internet access",
      "The model's ability to store large amounts of test data"
    ],
    correctAnswer: 0,
    explanation: "A multimodal LLM can process and understand both visual and text inputs. For UI testing, this means the model can analyze application screenshots alongside requirements text to generate relevant test cases."
  },
  {
    id: 8,
    domain: "Chapter 1: Introduction to GenAI for Testing",
    question: "An organization is comparing two LLMs: Model A has a 128K token context window, and Model B has a 4K token context window. For analyzing a 50-page requirements specification, which statement is MOST accurate?",
    options: [
      "Both models will perform identically since they are both LLMs",
      "Model B is better suited because smaller context windows produce more focused results",
      "Context window size has no impact on requirements analysis",
      "Model A is better suited because it can process more of the document in a single prompt without truncation"
    ],
    correctAnswer: 3,
    explanation: "A larger context window (128K tokens) allows Model A to process more of the requirements document in a single prompt without truncation. This preserves the full context and dependencies, which is critical for comprehensive requirements analysis."
  },
  {
    id: 9,
    domain: "Chapter 2: Prompt Engineering for Testing",
    question: "Which structured prompt component specifies the format in which the LLM should output test cases?",
    options: [
      "Role",
      "Context",
      "Input data",
      "Output format"
    ],
    correctAnswer: 3,
    explanation: "The output format component specifies the structure or template the LLM should follow when generating output. For test cases, this could specify Gherkin format, tabular format, or JSON structure."
  },
  {
    id: 10,
    domain: "Chapter 2: Prompt Engineering for Testing",
    question: "A tester provides a prompt with no examples, asking the LLM to generate boundary value analysis test cases for a login form. Which prompting technique is being used?",
    options: [
      "Few-shot prompting",
      "Zero-shot prompting",
      "Chain-of-thought prompting",
      "Meta prompting"
    ],
    correctAnswer: 1,
    explanation: "Zero-shot prompting provides only instructions without examples. The tester relies solely on the LLM's pre-trained knowledge to generate boundary value analysis test cases without demonstrating the expected format or approach."
  },
  {
    id: 11,
    domain: "Chapter 2: Prompt Engineering for Testing",
    question: "What is the primary purpose of including constraints in a structured prompt for test case generation?",
    options: [
      "To make the prompt longer and more impressive",
      "To limit the model's output to specific boundaries, rules, and exclusions relevant to the task",
      "To encrypt the prompt for security",
      "To increase the model's vocabulary"
    ],
    correctAnswer: 1,
    explanation: "Constraints define specific boundaries, rules, and exclusions for the model's output. For example: 'Only generate positive test cases', 'Exclude performance testing', or 'Focus on the login module only'. This prevents irrelevant or out-of-scope output."
  },
  {
    id: 12,
    domain: "Chapter 2: Prompt Engineering for Testing",
    question: "Which prompting technique involves generating the model's reasoning process explicitly before arriving at the final answer, particularly useful for complex test analysis?",
    options: [
      "Zero-shot prompting",
      "Few-shot prompting",
      "Chain-of-thought prompting",
      "Random prompting"
    ],
    correctAnswer: 2,
    explanation: "Chain-of-thought prompting asks the model to show its reasoning step by step before producing the final answer. This is particularly useful for complex test analysis tasks where the reasoning process itself provides valuable insights."
  },
  {
    id: 13,
    domain: "Chapter 2: Prompt Engineering for Testing",
    question: "A tester wants to generate consistent test cases in Gherkin format and provides two complete example test cases in the prompt before the instruction. Which technique are they using?",
    options: [
      "Zero-shot prompting",
      "Meta prompting",
      "Prompt chaining",
      "Few-shot prompting with examples"
    ],
    correctAnswer: 3,
    explanation: "Few-shot prompting includes one or more examples of the desired output format. By providing two complete Gherkin examples, the tester helps the model understand the expected format, style, and level of detail, leading to more consistent output."
  },
  {
    id: 14,
    domain: "Chapter 2: Prompt Engineering for Testing",
    question: "What is the primary risk of using an ambiguous or vague prompt instruction for test case generation?",
    options: [
      "The model will always refuse to respond",
      "The model will run faster than expected",
      "The generated test cases may not align with the tester's intent, leading to gaps or irrelevant scenarios",
      "The model will automatically switch to a different language"
    ],
    correctAnswer: 2,
    explanation: "Ambiguous or vague prompts lead to output that may not align with the tester's intent. The model may generate irrelevant scenarios or miss critical test cases. Clear, specific instructions with well-defined constraints produce more reliable results."
  },
  {
    id: 15,
    domain: "Chapter 2: Prompt Engineering for Testing",
    question: "A prompt generates test cases for an e-commerce checkout. The tester notices that every run produces different test cases, even with the same prompt. Which parameter adjustment would MOST improve consistency?",
    options: [
      "Increase the temperature to 1.5",
      "Remove all constraints from the prompt",
      "Decrease the temperature to near 0 and use a fixed seed value",
      "Use zero-shot prompting instead of few-shot"
    ],
    correctAnswer: 2,
    explanation: "Decreasing temperature to near 0 reduces randomness in token selection, and using a fixed seed ensures reproducibility. Together, these adjustments make the model generate more consistent, deterministic output across multiple runs."
  },
  {
    id: 16,
    domain: "Chapter 2: Prompt Engineering for Testing",
    question: "What is the primary advantage of prompt chaining for generating a comprehensive test plan?",
    options: [
      "It uses only one prompt for the entire task",
      "It breaks down the complex task into sequential steps, where each step's output feeds into the next",
      "It eliminates the need for human review",
      "It reduces the total number of tokens used"
    ],
    correctAnswer: 1,
    explanation: "Prompt chaining decomposes a complex task into a sequence of smaller, focused prompts. Each prompt's output becomes the input for the next, improving quality and allowing intermediate validation."
  },
  {
    id: 17,
    domain: "Chapter 2: Prompt Engineering for Testing",
    question: "A tester includes instructions such as 'You are a senior QA engineer with 15 years of experience in financial software testing.' Which structured prompt component does this represent?",
    options: [
      "Role",
      "Context",
      "Input data",
      "Constraints"
    ],
    correctAnswer: 0,
    explanation: "The role component defines the persona the AI should adopt. By specifying 'senior QA engineer with 15 years of experience in financial software testing,' the prompt sets the expertise level and domain focus for the model's responses."
  },
  {
    id: 18,
    domain: "Chapter 2: Prompt Engineering for Testing",
    question: "A team evaluates two prompts for the same task. Prompt A produces test cases with 85% relevance and 90% execution success. Prompt B produces test cases with 70% relevance and 95% execution success. Which metric should be prioritized for improving requirement coverage?",
    options: [
      "Relevance score, because it measures alignment with requirements and directly impacts coverage",
      "Execution success rate, because higher is always better",
      "Speed of generation",
      "Token count of the output"
    ],
    correctAnswer: 0,
    explanation: "The relevance score measures how well generated test cases align with the requirements. For improving requirement coverage, relevance is the priority because generating irrelevant test cases (even if they execute successfully) does not improve actual coverage."
  },
  {
    id: 19,
    domain: "Chapter 3: Managing Risks of GenAI in Testing",
    question: "A testing team discovers that their LLM-generated test cases consistently favor testing the happy path and neglect error handling scenarios. Which type of bias is MOST likely causing this?",
    options: [
      "Measurement bias",
      "Temporal bias",
      "Selection bias in training data, where successful scenarios are overrepresented",
      "Spatial bias"
    ],
    correctAnswer: 2,
    explanation: "Selection bias occurs when training data overrepresents certain scenarios (like happy path cases) while underrepresenting others (like error handling). This causes the model to generate biased test cases that reflect the skewed distribution in its training data."
  },
  {
    id: 20,
    domain: "Chapter 3: Managing Risks of GenAI in Testing",
    question: "Which of the following is the MOST effective strategy for detecting hallucinations in LLM-generated test cases?",
    options: [
      "Running the test cases only once on production",
      "Using the highest temperature setting",
      "Increasing the number of output tokens",
      "Cross-referencing generated test cases against the original requirements traceability matrix"
    ],
    correctAnswer: 3,
    explanation: "Cross-referencing generated test cases against the original requirements traceability matrix is the most effective detection strategy. It systematically verifies that each test case traces to a real requirement, identifying fabricated or hallucinated content."
  },
  {
    id: 21,
    domain: "Chapter 3: Managing Risks of GenAI in Testing",
    question: "Under the EU AI Act, which risk category would an LLM used for automated test execution in a safety-critical medical device MOST likely fall into?",
    options: [
      "Minimal risk",
      "Limited risk",
      "High risk",
      "Unacceptable risk"
    ],
    correctAnswer: 2,
    explanation: "An LLM used for automated test execution in a safety-critical medical device would most likely be classified as high risk under the EU AI Act. Medical devices are explicitly listed as high-risk AI systems, requiring strict compliance with transparency, data governance, and human oversight requirements."
  },
  {
    id: 22,
    domain: "Chapter 3: Managing Risks of GenAI in Testing",
    question: "What is the primary difference between a hallucination and a reasoning error in LLM-generated test output?",
    options: [
      "Hallucinations are always longer than reasoning errors",
      "Hallucinations involve fabricating information not present in the input, while reasoning errors involve flawed logic applied to real information",
      "Reasoning errors cannot be detected by humans",
      "Hallucinations only occur in small models"
    ],
    correctAnswer: 1,
    explanation: "Hallucinations involve fabricating information not present in the input (e.g., inventing requirements), while reasoning errors involve applying flawed logic to real information (e.g., reaching an incorrect conclusion from valid data). Both require different mitigation strategies."
  },
  {
    id: 23,
    domain: "Chapter 3: Managing Risks of GenAI in Testing",
    question: "A financial services company wants to use a public LLM API to generate test cases for their banking application. Which data preparation step is MOST critical before submission?",
    options: [
      "Increasing the text length of each requirement",
      "Converting all requirements to uppercase",
      "Adding more examples to the prompt",
      "Anonymizing and masking all personally identifiable information and financial data"
    ],
    correctAnswer: 3,
    explanation: "Anonymizing and masking PII and financial data is the most critical step before sending data to a public LLM API. Financial data is subject to strict regulations such as GDPR, and exposing it to third-party APIs could result in data privacy violations and security risks."
  },
  {
    id: 24,
    domain: "Chapter 3: Managing Risks of GenAI in Testing",
    question: "A tester notices that an LLM consistently generates test cases assuming all users have English as their primary language, even though the application serves an international audience. What should the tester do?",
    options: [
      "Accept the output and move on",
      "Switch to a different testing methodology entirely",
      "Only use the LLM for non-international applications",
      "Add explicit constraints in the prompt to consider multilingual and international scenarios, and review for cultural bias"
    ],
    correctAnswer: 3,
    explanation: "When bias is detected, the tester should add explicit constraints in the prompt to address the bias (e.g., 'consider international users and multiple languages') and review generated test cases for cultural bias. Iterative prompt improvement mitigates the bias."
  },
  {
    id: 25,
    domain: "Chapter 3: Managing Risks of GenAI in Testing",
    question: "Which of the following is a characteristic of the ISO/IEC 42001:2023 standard for AI management systems?",
    options: [
      "It applies only to hardware manufacturing",
      "It mandates the use of specific LLM providers",
      "It replaces all existing quality management standards",
      "It provides a framework for establishing, implementing, and improving an AI management system"
    ],
    correctAnswer: 3,
    explanation: "ISO/IEC 42001:2023 provides a framework for establishing, implementing, maintaining, and continually improving an AI management system within organizations. It addresses AI risk management, transparency, and accountability."
  },
  {
    id: 26,
    domain: "Chapter 3: Managing Risks of GenAI in Testing",
    question: "Which of the following describes pseudonymization as it relates to using LLMs for testing with sensitive data?",
    options: [
      "Replacing identifying information with reversible tokens, allowing re-identification with a key",
      "Permanently removing all identifying information so it can never be recovered",
      "Encrypting the data using a public key infrastructure",
      "Sending data to the LLM without any modifications"
    ],
    correctAnswer: 0,
    explanation: "Pseudonymization replaces identifying information with reversible tokens (pseudonyms) that can be reversed with a key. This is weaker than anonymization but allows the original data to be restored, which is useful when test data needs to be traced back to real records."
  },
  {
    id: 27,
    domain: "Chapter 4: LLM-Powered Test Infrastructure",
    question: "What is the primary function of an embedding model in a RAG-based testing tool?",
    options: [
      "To train the LLM on new data",
      "To convert text documents into numerical vector representations that capture semantic meaning",
      "To delete outdated test cases from the database",
      "To compile test scripts into executable code"
    ],
    correctAnswer: 1,
    explanation: "An embedding model converts text documents into numerical vector representations (embeddings) that capture semantic meaning. These vectors are stored in a vector database and used for semantic similarity search during RAG retrieval."
  },
  {
    id: 28,
    domain: "Chapter 4: LLM-Powered Test Infrastructure",
    question: "In a RAG pipeline, which step occurs immediately after retrieving the relevant document chunks from the vector database?",
    options: [
      "Deleting the original documents",
      "Training the embedding model",
      "Augmenting the LLM prompt with the retrieved context and generating the response",
      "Compressing the vector database"
    ],
    correctAnswer: 2,
    explanation: "After retrieving relevant document chunks from the vector database, the RAG pipeline augments the LLM prompt with these chunks as context and then generates a response. This grounds the model's output in actual retrieved data rather than relying solely on its training data."
  },
  {
    id: 29,
    domain: "Chapter 4: LLM-Powered Test Infrastructure",
    question: "What is the primary difference between RAG and fine-tuning as approaches to adapting an LLM for testing?",
    options: [
      "RAG and fine-tuning are identical approaches",
      "Fine-tuning is always cheaper than RAG",
      "RAG can only be used with small models",
      "RAG retrieves relevant context at inference time, while fine-tuning modifies the model weights during additional training"
    ],
    correctAnswer: 3,
    explanation: "RAG retrieves relevant context from a knowledge base at inference time without changing the model. Fine-tuning modifies the model's weights through additional training on domain-specific data. RAG keeps knowledge up-to-date, while fine-tuning internalizes domain knowledge."
  },
  {
    id: 30,
    domain: "Chapter 4: LLM-Powered Test Infrastructure",
    question: "Which evaluation metric in a RAG system measures whether all retrieved context chunks are relevant to the query?",
    options: [
      "Context precision",
      "Answer relevance",
      "Context recall",
      "Faithfulness"
    ],
    correctAnswer: 0,
    explanation: "Context precision measures whether all retrieved context chunks are relevant to the query (i.e., low false positives). High precision means the system retrieves mostly relevant information, avoiding irrelevant chunks that could distract the model."
  },
  {
    id: 31,
    domain: "Chapter 4: LLM-Powered Test Infrastructure",
    question: "A testing team wants to build an LLM-powered tool that answers questions about their project's test cases by retrieving relevant cases from a knowledge base. Which architecture is MOST appropriate?",
    options: [
      "A RAG-based architecture that retrieves relevant test cases from a vector database and uses them as context",
      "A basic LLM with a large context window and no external knowledge base",
      "A standalone test management tool without AI",
      "A fine-tuned model trained on only one project's data"
    ],
    correctAnswer: 0,
    explanation: "A RAG-based architecture is most appropriate because it retrieves relevant test cases from a vector database based on semantic similarity and uses them as context for the LLM. This ensures responses are grounded in actual project data and can be updated without retraining."
  },
  {
    id: 32,
    domain: "Chapter 4: LLM-Powered Test Infrastructure",
    question: "What is the role of prompt management within a LLMOps framework?",
    options: [
      "To create artistic prompt designs",
      "To eliminate the need for human oversight",
      "To systematically version, test, deploy, and monitor prompts across the testing team",
      "To reduce the model's parameter count"
    ],
    correctAnswer: 2,
    explanation: "Prompt management in LLMOps involves systematically versioning, testing, deploying, and monitoring prompts. This ensures consistency across the team, enables tracking of which prompt versions produce the best results, and supports continuous improvement."
  },
  {
    id: 33,
    domain: "Chapter 4: LLM-Powered Test Infrastructure",
    question: "Which of the following is an advantage of using LLM-powered agents for exploratory testing compared to traditional scripted testing?",
    options: [
      "LLM agents always find all defects without human guidance",
      "LLM agents can dynamically adapt test scenarios based on observations and application responses",
      "LLM agents require no initial setup or configuration",
      "LLM agents are always faster than manual testing"
    ],
    correctAnswer: 1,
    explanation: "LLM-powered agents can dynamically adapt their test scenarios based on what they observe during testing. Unlike traditional scripted testing, they can explore alternative paths, investigate anomalies, and adjust their approach in real time based on application responses."
  },
  {
    id: 34,
    domain: "Chapter 4: LLM-Powered Test Infrastructure",
    question: "In a RAG system for test case management, the chunking strategy divides a 200-page requirements specification into smaller pieces. What is the PRIMARY risk of using chunks that are too large?",
    options: [
      "The database will crash",
      "Irrelevant information in large chunks may dilute the context and reduce retrieval precision",
      "Chunks that are too large cannot be stored in a vector database",
      "The embedding model will refuse to process them"
    ],
    correctAnswer: 1,
    explanation: "When chunks are too large, they may contain a mix of relevant and irrelevant information. This dilutes the context provided to the LLM and reduces retrieval precision, as the system retrieves chunks that contain irrelevant content alongside the relevant portions."
  },
  {
    id: 35,
    domain: "Chapter 5: Deploying and Integrating GenAI",
    question: "When selecting an LLM for a testing task, which factor is LEAST important?",
    options: [
      "The model's accuracy on the specific task type",
      "The model's ability to meet data privacy and compliance requirements",
      "The model's logo design and marketing materials",
      "The model's context window size for the expected input length"
    ],
    correctAnswer: 2,
    explanation: "The model's logo design and marketing materials are irrelevant to technical selection. Important factors include accuracy on the task type, data privacy compliance, context window size, cost, latency, and ability to handle the expected input."
  },
  {
    id: 36,
    domain: "Chapter 5: Deploying and Integrating GenAI",
    question: "A testing organization is planning to adopt GenAI tools. Which approach is MOST likely to lead to successful adoption?",
    options: [
      "Immediately deploying GenAI across all teams simultaneously",
      "Avoiding any pilot and adopting tools based solely on vendor marketing",
      "Assigning GenAI adoption to a single person without team training",
      "Starting with a pilot project on a low-risk task, evaluating results, and scaling gradually"
    ],
    correctAnswer: 3,
    explanation: "Starting with a pilot project on a low-risk task allows the organization to evaluate results, learn lessons, and demonstrate value before scaling. This phased approach manages risks, builds team skills incrementally, and gains stakeholder buy-in."
  },
  {
    id: 37,
    domain: "Chapter 5: Deploying and Integrating GenAI",
    question: "Which metric is MOST useful for demonstrating the ROI of a GenAI test case generation tool to management?",
    options: [
      "Time saved in test design, defect detection improvement, and cost reduction per test case",
      "The number of AI tools purchased",
      "The model's parameter count",
      "The number of API calls made per day"
    ],
    correctAnswer: 0,
    explanation: "ROI is best demonstrated by measuring concrete value: time saved in test design tasks, improvement in defect detection rates, and reduction in cost per test case. These metrics directly show the business value of the GenAI investment."
  },
  {
    id: 38,
    domain: "Chapter 5: Deploying and Integrating GenAI",
    question: "What is the primary purpose of establishing a GenAI governance board in a testing organization?",
    options: [
      "To oversee the responsible, ethical, and compliant use of AI tools, establish policies, and manage risks",
      "To ban all AI usage in testing",
      "To replace project managers",
      "To write all test cases manually"
    ],
    correctAnswer: 0,
    explanation: "A GenAI governance board oversees the responsible, ethical, and compliant use of AI tools. It establishes policies, manages risks, evaluates tool approvals, and ensures that AI adoption aligns with organizational values and regulatory requirements."
  },
  {
    id: 39,
    domain: "Chapter 5: Deploying and Integrating GenAI",
    question: "A testing team is integrating an LLM-based tool into their CI/CD pipeline to automatically generate regression tests from code changes. Which integration approach is MOST effective?",
    options: [
      "Replacing the entire CI/CD pipeline with the LLM tool",
      "Adding the LLM tool as a step in the existing pipeline with human review of generated tests before execution",
      "Running the LLM tool separately without any integration",
      "Using the LLM only for documentation, not test generation"
    ],
    correctAnswer: 1,
    explanation: "Adding the LLM tool as a step in the existing pipeline with human review of generated tests is the most effective approach. This preserves existing workflows, adds AI capabilities incrementally, and maintains human oversight for quality assurance."
  },
  {
    id: 40,
    domain: "Chapter 5: Deploying and Integrating GenAI",
    question: "Which of the following statements about Shadow AI in testing organizations is MOST accurate?",
    options: [
      "Shadow AI always improves testing quality",
      "Shadow AI eliminates the need for governance policies",
      "Shadow AI creates risks including data privacy violations, inconsistent results, and lack of quality oversight",
      "Shadow AI is only possible with on-premise deployments"
    ],
    correctAnswer: 2,
    explanation: "Shadow AI (unauthorized AI use) creates significant risks: data privacy violations (sensitive data sent to unapproved services), inconsistent results (different prompts and models), and lack of quality oversight (no review of AI-generated outputs)."
  }
];

export const questions2: ExamQuestion[] = [
  {
    id: 1,
    domain: "Chapter 1: Introduction to GenAI for Testing",
    question: "Which of the following is an example of an LLM capability for test tasks, as described in the syllabus?",
    options: [
      "Automatically deploying test environments to the cloud",
      "Requirements analysis and improvement: identifying ambiguities, inconsistencies, or missing information in requirements",
      "Replacing all human testers in a test organization",
      "Manually executing test scripts on physical devices"
    ],
    correctAnswer: 1,
    explanation: "Requirements analysis and improvement is a key LLM capability for test tasks. LLMs can help analyze requirements by identifying ambiguities, inconsistencies, or missing information, and can generate meaningful questions to help clarify requirements during discussions with stakeholders."
  },
  {
    id: 2,
    domain: "Chapter 1: Introduction to GenAI for Testing",
    question: "What is the primary purpose of an encoder in a transformer-based LLM?",
    options: [
      "To convert the input sequence into numerical representations that capture context and relationships between tokens",
      "To generate output text token by token",
      "To delete unnecessary tokens from the input",
      "To compress the model for deployment"
    ],
    correctAnswer: 0,
    explanation: "The encoder processes the input sequence and converts it into numerical representations (embeddings) that capture context and relationships between tokens. This enables the model to understand the meaning and relationships in the input before generating output."
  },
  {
    id: 3,
    domain: "Chapter 1: Introduction to GenAI for Testing",
    question: "A testing organization is considering deploying an SLM on their own infrastructure versus using a cloud-based LLM API. Which factor would MOST favor the SLM deployment?",
    options: [
      "The need for the most advanced language understanding available",
      "The need to process extremely long documents in a single prompt",
      "Strict data privacy requirements that prohibit sending data to external services",
      "The requirement for maximum creativity in generated test cases"
    ],
    correctAnswer: 2,
    explanation: "When strict data privacy requirements prohibit sending data to external cloud services, deploying an SLM on internal infrastructure ensures sensitive test data never leaves the organization's network, maintaining compliance with regulations."
  },
  {
    id: 4,
    domain: "Chapter 1: Introduction to GenAI for Testing",
    question: "What is the significance of the attention mechanism for test case generation using LLMs?",
    options: [
      "It reduces the token count of the output",
      "It allows the model to focus on relevant parts of the input when generating each part of the test case",
      "It encrypts the test cases for security",
      "It prevents the model from generating test cases for edge cases"
    ],
    correctAnswer: 1,
    explanation: "The attention mechanism allows the model to focus on different relevant parts of the input when generating each part of the output. For test case generation, this means the model can attend to specific requirement details, constraints, and relevant context when crafting each test case."
  },
  {
    id: 5,
    domain: "Chapter 1: Introduction to GenAI for Testing",
    question: "Which of the following describes a key limitation of LLMs that is particularly relevant for safety-critical testing?",
    options: [
      "LLMs can only process numerical data",
      "LLMs may produce plausible-sounding but factually incorrect outputs (hallucinations), requiring human verification",
      "LLMs always produce identical outputs for the same input",
      "LLMs cannot process requirements documents"
    ],
    correctAnswer: 1,
    explanation: "LLMs may produce hallucinations - outputs that sound plausible but are factually incorrect. For safety-critical testing, this means LLM-generated test cases must always be verified by humans, as incorrect test cases could lead to undetected defects in safety-critical systems."
  },
  {
    id: 6,
    domain: "Chapter 1: Introduction to GenAI for Testing",
    question: "What is the primary difference between an autoregressive language model and a masked language model?",
    options: [
      "Autoregressive models predict the next token given previous tokens, while masked models predict hidden tokens within the sequence",
      "Autoregressive models can only process images",
      "Masked language models are only used for text classification",
      "There is no functional difference between them"
    ],
    correctAnswer: 0,
    explanation: "Autoregressive models (like GPT) generate text by predicting the next token based on previous tokens. Masked language models (like BERT) predict hidden/masked tokens within a sequence. This distinction affects how they are used: autoregressive for generation, masked for understanding."
  },
  {
    id: 7,
    domain: "Chapter 1: Introduction to GenAI for Testing",
    question: "A testing team uses a multimodal LLM to validate that a web application's UI matches its design specifications. Which capability is being leveraged?",
    options: [
      "The ability to process and compare both visual screenshots and textual design specifications",
      "The ability to generate unit test code",
      "The ability to run load tests on servers",
      "The ability to manage test databases"
    ],
    correctAnswer: 0,
    explanation: "A multimodal LLM can process both visual input (screenshots) and text input (design specifications), allowing it to compare the two and identify discrepancies. This visual-textual comparison capability is unique to multimodal models."
  },
  {
    id: 8,
    domain: "Chapter 1: Introduction to GenAI for Testing",
    question: "A team is choosing between Model A (a 175B parameter LLM) and Model B (a 7B parameter SLM) for generating test case titles from short user stories. Which factor MOST favors choosing the SLM?",
    options: [
      "The SLM will always produce more creative test case titles",
      "The SLM has a larger context window",
      "The task is simple and well-defined, so the SLM is more cost-effective and faster while producing adequate results",
      "The SLM can process more languages"
    ],
    correctAnswer: 2,
    explanation: "For simple, well-defined tasks like generating test case titles from short user stories, an SLM is more cost-effective and faster while producing adequate results. Using a 175B parameter model for such a narrow task would be unnecessarily expensive and slow."
  },
  {
    id: 9,
    domain: "Chapter 2: Prompt Engineering for Testing",
    question: "A tester wants the LLM to analyze a user story and identify potential test areas before generating specific test cases. Which prompting technique divides this into two sequential steps?",
    options: [
      "Zero-shot prompting",
      "Meta prompting",
      "One-shot prompting",
      "Prompt chaining, with the first prompt identifying test areas and the second generating test cases"
    ],
    correctAnswer: 3,
    explanation: "Prompt chaining divides the task into sequential steps. First, a prompt asks the LLM to analyze the user story and identify potential test areas. Then, a second prompt uses those identified areas as input to generate specific test cases. This produces better results than a single complex prompt."
  },
  {
    id: 10,
    domain: "Chapter 2: Prompt Engineering for Testing",
    question: "In a structured prompt for generating security test cases, which component would specify 'Only generate OWASP Top 10 test cases'?",
    options: [
      "Role",
      "Context",
      "Input data",
      "Constraints"
    ],
    correctAnswer: 3,
    explanation: "The constraints component specifies boundaries, rules, and exclusions for the output. 'Only generate OWASP Top 10 test cases' is a constraint that limits the scope of generated test cases to a specific framework, preventing irrelevant or out-of-scope output."
  },
  {
    id: 11,
    domain: "Chapter 2: Prompt Engineering for Testing",
    question: "What is the primary advantage of using a system prompt in an LLM-based testing tool compared to including the same instructions in each individual user prompt?",
    options: [
      "System prompts are ignored by the model",
      "System prompts set consistent behavior and constraints across all interactions without repeating instructions in each prompt",
      "System prompts reduce the model's parameter count",
      "System prompts eliminate the need for any other prompt components"
    ],
    correctAnswer: 1,
    explanation: "System prompts set consistent behavior, role, and constraints across all interactions without repeating instructions in each user prompt. This ensures consistency and prevents users from accidentally omitting critical instructions."
  },
  {
    id: 12,
    domain: "Chapter 2: Prompt Engineering for Testing",
    question: "A tester writes: 'Think step by step about the boundary values for a password field with min 8 and max 128 characters.' Which prompting technique is being used?",
    options: [
      "Few-shot prompting",
      "Zero-shot prompting",
      "Chain-of-thought prompting",
      "Meta prompting"
    ],
    correctAnswer: 2,
    explanation: "The phrase 'Think step by step' is the hallmark of chain-of-thought prompting. This technique asks the model to reason through the problem in steps, producing more accurate and transparent results for analytical tasks like boundary value analysis."
  },
  {
    id: 13,
    domain: "Chapter 2: Prompt Engineering for Testing",
    question: "A testing team maintains a prompt library with versioned, documented prompts. What is the PRIMARY benefit of this practice?",
    options: [
      "It reduces API costs by caching responses",
      "It eliminates the need for human review",
      "It automatically generates new prompts",
      "It ensures consistency, enables reuse, and allows tracking which prompt versions produce the best results"
    ],
    correctAnswer: 3,
    explanation: "A prompt library ensures consistency across the team, enables prompt reuse, and allows tracking of which prompt versions produce the best results. Versioning enables rollback to previous versions and systematic improvement through A/B testing."
  },
  {
    id: 14,
    domain: "Chapter 2: Prompt Engineering for Testing",
    question: "What is the primary risk of including real production data with PII in prompts sent to a public LLM API?",
    options: [
      "The LLM will generate more test cases than needed",
      "The LLM will reject the prompt entirely",
      "The test cases will be too creative",
      "The production data with PII may be stored, logged, or used by the API provider, violating privacy regulations"
    ],
    correctAnswer: 3,
    explanation: "Sending PII to public LLM APIs risks the data being stored, logged, or used by the provider, potentially violating GDPR and other data privacy regulations. Data anonymization, pseudonymization, or using private/self-hosted models mitigates this risk."
  },
  {
    id: 15,
    domain: "Chapter 2: Prompt Engineering for Testing",
    question: "Which of the following is a best practice when designing prompts for test case generation?",
    options: [
      "Use vague instructions to allow maximum model creativity",
      "Include no constraints to give the model complete freedom",
      "Always use the maximum temperature setting",
      "Clearly specify the output format, include relevant context, and define explicit constraints"
    ],
    correctAnswer: 3,
    explanation: "Best practices include clearly specifying the output format (e.g., Gherkin, tabular), including relevant context (application type, testing scope), and defining explicit constraints (what to include/exclude). This structure produces consistent, relevant, and usable test cases."
  },
  {
    id: 16,
    domain: "Chapter 2: Prompt Engineering for Testing",
    question: "A tester provides three Gherkin example test cases and asks the LLM to generate new ones. The output closely follows the examples' structure but misses boundary conditions. What is the MOST likely cause?",
    options: [
      "The temperature is set too low",
      "The model is malfunctioning",
      "The provided examples did not include boundary value test cases, so the model followed the pattern without introducing new test techniques",
      "The output format constraint is too restrictive"
    ],
    correctAnswer: 2,
    explanation: "Few-shot prompting causes the model to closely follow the examples' pattern. If the examples only include functional happy-path scenarios without boundary conditions, the model will replicate that pattern. Including diverse example types would ensure the model generates similar variety."
  },
  {
    id: 17,
    domain: "Chapter 2: Prompt Engineering for Testing",
    question: "What does the diversity score metric measure when evaluating LLM-generated test cases?",
    options: [
      "The percentage of test cases that execute successfully",
      "The variety of test scenarios, techniques, and coverage areas in the generated test cases",
      "The speed at which test cases are generated",
      "The number of tokens in each test case"
    ],
    correctAnswer: 1,
    explanation: "The diversity score measures the variety in the generated test cases, including different test scenarios, techniques (boundary value, equivalence partitioning), and coverage areas. High diversity ensures comprehensive testing rather than repetitive, overlapping test cases."
  },
  {
    id: 18,
    domain: "Chapter 2: Prompt Engineering for Testing",
    question: "A prompt engineer observes that changing the role from 'software tester' to 'senior security auditor' dramatically changes the focus of generated test cases from functional to security testing. Which prompt component is MOST responsible?",
    options: [
      "Context",
      "Input data",
      "Output format",
      "Role"
    ],
    correctAnswer: 3,
    explanation: "The role component defines the persona the AI should adopt. Changing the role from 'software tester' to 'senior security auditor' reframes the model's perspective, causing it to focus on security vulnerabilities and security-specific test scenarios rather than functional testing."
  },
  {
    id: 19,
    domain: "Chapter 3: Managing Risks of GenAI in Testing",
    question: "Which of the following is an example of confirmation bias when using an LLM for testing?",
    options: [
      "The LLM generating a completely fabricated requirement",
      "The LLM producing the same output for different inputs",
      "A tester accepting LLM-generated test cases that confirm their existing assumptions while rejecting those that challenge them",
      "A developer using unapproved AI tools"
    ],
    correctAnswer: 2,
    explanation: "Confirmation bias occurs when a tester selectively accepts LLM outputs that confirm their pre-existing beliefs and rejects or ignores outputs that challenge their assumptions. This reduces the effectiveness of AI-assisted testing by reinforcing existing blind spots."
  },
  {
    id: 20,
    domain: "Chapter 3: Managing Risks of GenAI in Testing",
    question: "What is model drift in the context of using LLMs for testing, and why is it a concern?",
    options: [
      "The model physically moving between servers, which causes latency",
      "The model becoming more creative over time, which is always beneficial",
      "Gradual changes in the model's output quality or behavior over time, potentially reducing test case accuracy without obvious warning",
      "The model's context window increasing over time"
    ],
    correctAnswer: 2,
    explanation: "Model drift refers to gradual changes in the LLM's output quality or behavior over time, often caused by model updates, changing context, or evolving training data. This is concerning because the quality of generated test cases may decrease without obvious warning signs."
  },
  {
    id: 21,
    domain: "Chapter 3: Managing Risks of GenAI in Testing",
    question: "A healthcare testing team needs to validate an LLM's outputs for a medical device testing application. Which approach is MOST appropriate according to the EU AI Act requirements for high-risk systems?",
    options: [
      "Trust all LLM outputs without verification",
      "Override all LLM outputs with manual testing",
      "Implement human oversight, maintain documentation, and validate all LLM outputs against requirements",
      "Only use the LLM for low-risk tasks"
    ],
    correctAnswer: 2,
    explanation: "The EU AI Act requires high-risk AI systems to implement appropriate human oversight, maintain thorough documentation, and ensure transparency and accuracy. For medical device testing, all LLM outputs must be validated by humans against requirements."
  },
  {
    id: 22,
    domain: "Chapter 3: Managing Risks of GenAI in Testing",
    question: "Which of the following describes a prompt injection attack on an LLM-based testing tool?",
    options: [
      "A hardware failure in the testing server",
      "A malicious input that causes the LLM to ignore its original instructions and execute unintended commands",
      "A network connectivity issue when calling the LLM API",
      "A syntax error in the test case format"
    ],
    correctAnswer: 1,
    explanation: "A prompt injection attack involves crafting malicious input that causes the LLM to ignore its original system instructions and execute unintended commands. This is a security risk when testing tools process user-provided input or requirements data."
  },
  {
    id: 23,
    domain: "Chapter 3: Managing Risks of GenAI in Testing",
    question: "A financial institution discovers that employees are using an unauthorized chat-based LLM to analyze test results containing financial data. Which risk category does this fall under?",
    options: [
      "Shadow AI leading to potential data privacy and compliance violations",
      "Model accuracy",
      "Environmental impact",
      "Model drift"
    ],
    correctAnswer: 0,
    explanation: "This is Shadow AI - unauthorized use of AI tools without organizational governance. It creates serious risks including data privacy violations (financial data sent to external services without approval), compliance violations, and lack of quality oversight."
  },
  {
    id: 24,
    domain: "Chapter 3: Managing Risks of GenAI in Testing",
    question: "What is the right to explanation under GDPR and how does it relate to LLM-based testing?",
    options: [
      "It gives individuals the right to understand how automated decisions about them were made, which applies when LLMs process personal data in testing",
      "It requires all test results to be publicly shared",
      "It requires LLMs to explain their architecture in plain language",
      "It mandates that all AI testing must be manual"
    ],
    correctAnswer: 0,
    explanation: "The GDPR right to explanation gives individuals the right to understand how automated decisions about them were made. When LLMs process personal data during testing, organizations must be able to explain how the models reached their conclusions, which is challenging with LLMs' inherent opacity."
  },
  {
    id: 25,
    domain: "Chapter 3: Managing Risks of GenAI in Testing",
    question: "Which strategy is MOST effective for mitigating bias in LLM-generated test cases?",
    options: [
      "Regular auditing of generated test cases for biased patterns and diversifying review perspectives",
      "Always using the largest available model",
      "Removing all constraints from prompts",
      "Using only zero-shot prompting"
    ],
    correctAnswer: 0,
    explanation: "Regular auditing of generated test cases for biased patterns (e.g., assuming certain demographics, excluding edge cases) and diversifying review perspectives helps identify and mitigate bias. Including reviewers from diverse backgrounds improves detection of biased assumptions."
  },
  {
    id: 26,
    domain: "Chapter 3: Managing Risks of GenAI in Testing",
    question: "An LLM generates a test case for a requirement that does not exist in the specification. The tester traces the requirement ID mentioned in the test case and confirms it is fabricated. What type of error has occurred?",
    options: [
      "A hallucination, where the model fabricated information not present in the input",
      "A reasoning error based on valid data",
      "A tokenization error",
      "A context window overflow"
    ],
    correctAnswer: 0,
    explanation: "When an LLM generates content for a non-existent requirement with a fabricated requirement ID, this is a hallucination. The model has invented information that was not present in the original input, which is a critical risk in testing where accuracy is essential."
  },
  {
    id: 27,
    domain: "Chapter 4: LLM-Powered Test Infrastructure",
    question: "What is the primary advantage of using RAG over simply increasing the LLM's context window for incorporating project-specific testing knowledge?",
    options: [
      "RAG always produces shorter output",
      "RAG can selectively retrieve the most relevant information, keeping context focused and up-to-date without retraining",
      "Increasing the context window is always cheaper than RAG",
      "RAG eliminates the need for an LLM entirely"
    ],
    correctAnswer: 1,
    explanation: "RAG selectively retrieves the most relevant information from a knowledge base, keeping the context focused and up-to-date. Unlike simply increasing the context window (which increases cost and may dilute relevance), RAG can be updated without retraining the model."
  },
  {
    id: 28,
    domain: "Chapter 4: LLM-Powered Test Infrastructure",
    question: "Which component of a RAG pipeline is responsible for converting document chunks into numerical vectors?",
    options: [
      "The LLM generator",
      "The embedding model",
      "The vector database",
      "The chunking algorithm"
    ],
    correctAnswer: 1,
    explanation: "The embedding model converts document chunks into numerical vectors (embeddings) that capture semantic meaning. These vectors are stored in a vector database and used for similarity search during retrieval, enabling the system to find conceptually relevant content."
  },
  {
    id: 29,
    domain: "Chapter 4: LLM-Powered Test Infrastructure",
    question: "A testing team implements a RAG system but finds that retrieved context chunks are often irrelevant. Which improvement would MOST likely address this issue?",
    options: [
      "Using a larger LLM model",
      "Removing the vector database entirely",
      "Increasing the temperature of the LLM",
      "Improving the chunking strategy and embedding quality, and adjusting the similarity threshold for retrieval"
    ],
    correctAnswer: 3,
    explanation: "Irrelevant context retrieval is typically caused by poor chunking (pieces too large or poorly segmented), low-quality embeddings, or an inappropriate similarity threshold. Improving the chunking strategy and embedding quality ensures more relevant context is retrieved."
  },
  {
    id: 30,
    domain: "Chapter 4: LLM-Powered Test Infrastructure",
    question: "What is the role of human-in-the-loop in an LLM-powered testing agent?",
    options: [
      "To eliminate the need for the LLM entirely",
      "To write all test cases manually",
      "To provide oversight, validate critical decisions, and ensure the agent's actions align with testing objectives and safety requirements",
      "To continuously monitor the agent's power consumption"
    ],
    correctAnswer: 2,
    explanation: "Human-in-the-loop provides oversight, validates critical decisions, and ensures the agent's actions align with testing objectives and safety requirements. This is essential for maintaining quality, preventing unintended consequences, and handling edge cases the agent cannot resolve autonomously."
  },
  {
    id: 31,
    domain: "Chapter 4: LLM-Powered Test Infrastructure",
    question: "A testing team fine-tunes an LLM on their organization's historical defect reports and test cases. What is the primary benefit compared to using a general-purpose LLM with RAG?",
    options: [
      "The fine-tuned model will always be cheaper to run",
      "Fine-tuning eliminates the need for any prompt engineering",
      "The fine-tuned model will never produce hallucinations",
      "The fine-tuned model internalizes domain-specific terminology, patterns, and testing conventions specific to the organization"
    ],
    correctAnswer: 3,
    explanation: "Fine-tuning internalizes the organization's domain-specific terminology, patterns, and testing conventions into the model's weights. This produces more accurate and contextually appropriate outputs compared to a general-purpose LLM that lacks this specialized knowledge, even with RAG."
  },
  {
    id: 32,
    domain: "Chapter 4: LLM-Powered Test Infrastructure",
    question: "Which of the following is a key consideration when choosing between fine-tuning and RAG for a testing tool?",
    options: [
      "Fine-tuning is always better than RAG",
      "RAG is always better than fine-tuning",
      "Fine-tuning is better for stable domain knowledge, while RAG is better for frequently changing information",
      "Both approaches require the same amount of training data"
    ],
    correctAnswer: 2,
    explanation: "Fine-tuning is ideal for stable domain knowledge that doesn't change frequently (e.g., testing terminology, organizational conventions). RAG is better for frequently changing information (e.g., current test cases, latest defect data) because the knowledge base can be updated without retraining."
  },
  {
    id: 33,
    domain: "Chapter 4: LLM-Powered Test Infrastructure",
    question: "In an LLMOps pipeline, what is the purpose of A/B testing different model versions or prompt versions?",
    options: [
      "To eliminate the need for human evaluation",
      "To compare their performance on testing tasks and select the version that produces better results",
      "To reduce the model's size",
      "To increase the number of tokens generated"
    ],
    correctAnswer: 1,
    explanation: "A/B testing in LLMOps compares different model versions or prompt versions on the same testing tasks. By measuring metrics like relevance score, execution success rate, and coverage, teams can objectively select the version that produces better test case quality."
  },
  {
    id: 34,
    domain: "Chapter 4: LLM-Powered Test Infrastructure",
    question: "A testing team builds a RAG system that uses their company's test case repository as the knowledge base. When a tester asks about payment module test cases, the system retrieves irrelevant test cases about user authentication. Which RAG component should they improve FIRST?",
    options: [
      "The LLM's output format",
      "The embedding model or chunking strategy, as they directly affect retrieval quality",
      "The user interface design",
      "The number of tokens in the response"
    ],
    correctAnswer: 1,
    explanation: "When retrieved context is irrelevant, the issue typically lies in the embedding model or chunking strategy. Poor embeddings fail to capture semantic meaning, and improper chunking can split important context. Improving these components directly enhances retrieval relevance."
  },
  {
    id: 35,
    domain: "Chapter 5: Deploying and Integrating GenAI",
    question: "An organization wants to adopt GenAI for testing but is concerned about data privacy. Which deployment strategy would BEST address this concern?",
    options: [
      "Using a public cloud-based LLM API for all testing tasks",
      "Avoiding all AI tools entirely",
      "Using only free online chatbots for test case generation",
      "Deploying a private, on-premise LLM or using a secure cloud instance with data residency guarantees"
    ],
    correctAnswer: 3,
    explanation: "Deploying a private, on-premise LLM or using a secure cloud instance with data residency guarantees ensures that sensitive test data never leaves the organization's controlled environment. This addresses data privacy concerns while still enabling GenAI adoption."
  },
  {
    id: 36,
    domain: "Chapter 5: Deploying and Integrating GenAI",
    question: "Which of the following is a key component of a successful GenAI training program for testers?",
    options: [
      "Only training testers on manual testing techniques",
      "Training testers to avoid all AI tools",
      "Focusing solely on the technical architecture of LLMs",
      "Teaching prompt engineering, critical evaluation of AI outputs, and understanding of LLM limitations and risks"
    ],
    correctAnswer: 3,
    explanation: "A successful GenAI training program for testers includes prompt engineering (crafting effective prompts), critical evaluation of AI outputs (identifying hallucinations, verifying coverage), and understanding LLM limitations and risks. This builds the skills needed for effective human-AI collaboration."
  },
  {
    id: 37,
    domain: "Chapter 5: Deploying and Integrating GenAI",
    question: "A test manager evaluates GenAI ROI: test case generation time reduced by 60%, defect detection rate improved by 15%, and tool cost is $5,000/month. How should they present this to stakeholders?",
    options: [
      "Present a balanced view including efficiency gains, quality improvements, and costs to demonstrate net value",
      "Only report the cost savings from reduced test generation time",
      "Only report the cost of the tool",
      "Avoid reporting any metrics to stakeholders"
    ],
    correctAnswer: 0,
    explanation: "A balanced ROI presentation should include efficiency gains (time saved), quality improvements (better defect detection), and costs (tool subscription). This gives stakeholders a complete picture of both the value delivered and the investment required."
  },
  {
    id: 38,
    domain: "Chapter 5: Deploying and Integrating GenAI",
    question: "Which organizational challenge is MOST commonly encountered when introducing GenAI tools into an established testing team?",
    options: [
      "Reskilling needs, resistance to change, and concerns about job displacement",
      "The tools are always immediately accepted by all team members",
      "GenAI tools never require any changes to existing processes",
      "All team members already have the necessary prompt engineering skills"
    ],
    correctAnswer: 0,
    explanation: "The most common challenges when introducing GenAI are: reskilling needs (testers must learn prompt engineering and AI evaluation), resistance to change (comfort with existing tools and processes), and concerns about job displacement (fear that AI will replace testing roles)."
  },
  {
    id: 39,
    domain: "Chapter 5: Deploying and Integrating GenAI",
    question: "What is the recommended sequence for a phased GenAI adoption in a testing organization?",
    options: [
      "Full deployment, then training, then governance",
      "Assessment and planning, pilot project, evaluation, gradual scaling, continuous improvement",
      "Purchasing the most expensive tool available, then deploying it everywhere",
      "Avoiding any changes to the testing process"
    ],
    correctAnswer: 1,
    explanation: "The recommended sequence is: assessment and planning (identify needs, evaluate tools), pilot project (test on a small scale), evaluation (measure results), gradual scaling (expand to more teams), and continuous improvement (optimize based on feedback)."
  },
  {
    id: 40,
    domain: "Chapter 5: Deploying and Integrating GenAI",
    question: "A testing team wants to integrate an LLM-based test case generator with their existing test management tool (e.g., Jira, Azure DevOps). Which approach is MOST effective?",
    options: [
      "Using APIs and connectors to integrate the LLM tool while maintaining current workflows and adding human review",
      "Replacing the entire test management tool with the LLM",
      "Running the LLM tool separately without any integration",
      "Using the LLM only for documentation, not test generation"
    ],
    correctAnswer: 0,
    explanation: "Using APIs and connectors to integrate the LLM tool with existing test management tools preserves current workflows while adding AI capabilities. Adding human review of generated content maintains quality assurance and builds trust in the AI-assisted process."
  }
];
