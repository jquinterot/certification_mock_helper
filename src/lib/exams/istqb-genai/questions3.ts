import type { ExamQuestion } from '@/types';

export const questions: ExamQuestion[] = [
  // Chapter 1: Introduction to GenAI for Testing (8 questions - NEW TOPICS)
  {
    id: 1,
    domain: "Chapter 1: Introduction to GenAI for Testing",
    question: "What is a 'mixture of experts' (MoE) architecture in LLMs and how does it relate to testing?",
    options: [
      "A system where multiple human experts review LLM outputs",
      "An architecture that routes inputs to specialized sub-models, reducing compute while maintaining capability for testing tasks",
      "A testing methodology that requires expert-level test cases",
      "A technique for combining test results from multiple manual testers"
    ],
    correctAnswer: 1,
    explanation: "Mixture of Experts (MoE) routes input tokens to specialized sub-models (experts) rather than activating the entire model. This reduces computational cost while maintaining capability, making it viable to run sophisticated LLM-powered testing tools more efficiently."
  },
  {
    id: 2,
    domain: "Chapter 1: Introduction to GenAI for Testing",
    question: "A tester observes that an LLM generates different outputs for the same prompt on different days. After confirming the temperature is set to 0, what is the MOST likely explanation?",
    options: [
      "The temperature setting is broken",
      "The model provider has updated the model weights or version without notification",
      "The tester's computer has a hardware issue",
      "The prompt is too short"
    ],
    correctAnswer: 1,
    explanation: "When a model provider updates the model weights or version, the same prompt can produce different outputs even with temperature set to 0. This is a known risk in LLMOps called 'silent model drift,' where providers update models without explicit notification to users."
  },
  {
    id: 3,
    domain: "Chapter 1: Introduction to GenAI for Testing",
    question: "Which of the following best describes the concept of 'emergent abilities' in large language models and their relevance to testing?",
    options: [
      "Abilities that appear suddenly in humans when using LLMs",
      "Capabilities that arise at scale but are absent in smaller models, enabling complex test generation tasks that smaller models cannot perform",
      "Abilities that emerge from proper prompt engineering alone",
      "Skills that only appear in closed-source models"
    ],
    correctAnswer: 1,
    explanation: "Emergent abilities are capabilities that appear in large models but are absent in smaller models of the same architecture. For testing, this means that certain complex test generation tasks (like reasoning about multi-step test scenarios) may only be possible with sufficiently large models."
  },
  {
    id: 4,
    domain: "Chapter 1: Introduction to GenAI for Testing",
    question: "What is the key difference between a generative model and a discriminative model in the context of AI-powered testing tools?",
    options: [
      "Generative models are always more accurate than discriminative models",
      "Discriminative models can only classify existing test cases, while generative models can create new test cases",
      "Discriminative models are faster at generating test data",
      "Generative models cannot be used for classification tasks"
    ],
    correctAnswer: 1,
    explanation: "Discriminative models learn to classify or label existing data (e.g., classifying a test case as pass/fail), while generative models can create new data (e.g., generating new test cases). In testing, generative models create test cases and test data, while discriminative models classify results."
  },
  {
    id: 5,
    domain: "Chapter 1: Introduction to GenAI for Testing",
    question: "In the context of transformer architecture, what is the role of the feed-forward neural network (FFN) layers in processing test-related input?",
    options: [
      "They replace the attention mechanism entirely",
      "They store the training data for retrieval",
      "They apply non-linear transformations to each token's representation independently, enabling the model to learn complex patterns in test requirements",
      "They compress the model for faster deployment"
    ],
    correctAnswer: 2,
    explanation: "Feed-forward neural network (FFN) layers in a transformer apply non-linear transformations to each token's representation independently after the attention mechanism has contextualized them. This enables the model to learn complex patterns required for understanding nuanced test requirements."
  },
  {
    id: 6,
    domain: "Chapter 1: Introduction to GenAI for Testing",
    question: "What is 'knowledge distillation' and how can it benefit testing organizations deploying LLM-powered tools?",
    options: [
      "A process of removing all knowledge from a model",
      "A technique where a smaller 'student' model learns from a larger 'teacher' model, enabling cost-effective deployment of testing tools with near-equivalent performance",
      "A method for encrypting model knowledge",
      "A process of training a model on testing documentation only"
    ],
    correctAnswer: 1,
    explanation: "Knowledge distillation transfers knowledge from a large, expensive 'teacher' model to a smaller, cheaper 'student' model. This enables testing organizations to deploy cost-effective, fast-running models that retain much of the teacher's testing capability, reducing inference costs without significant quality loss."
  },
  {
    id: 7,
    domain: "Chapter 1: Introduction to GenAI for Testing",
    question: "Which type of AI model is MOST suitable for automatically identifying duplicate defect reports from a large bug database?",
    options: [
      "A generative text model that creates new bug reports",
      "A discriminative model using embedding-based semantic similarity to identify near-duplicate reports",
      "A reinforcement learning model that maximizes reward signals",
      "A diffusion model that generates images of bugs"
    ],
    correctAnswer: 1,
    explanation: "A discriminative model using embedding-based semantic similarity is best suited for identifying duplicate defect reports. It converts each report into embeddings and computes pairwise similarity, finding near-duplicates based on semantic content rather than exact text matching."
  },
  {
    id: 8,
    domain: "Chapter 1: Introduction to GenAI for Testing",
    question: "What is a 'reasoning model' in the context of GenAI for testing, and when should a tester choose it over a standard LLM?",
    options: [
      "A reasoning model is always preferable for all testing tasks",
      "A reasoning model uses extended computation for step-by-step logical analysis, best for complex test planning or risk analysis tasks where accuracy outweighs speed",
      "A reasoning model only works with numerical data",
      "A reasoning model is smaller and faster than a standard LLM"
    ],
    correctAnswer: 1,
    explanation: "Reasoning models (e.g., OpenAI o1) perform extended internal computation for step-by-step logical analysis. They are best for complex testing tasks like risk analysis, test strategy planning, or root-cause analysis where accurate reasoning is more important than fast response times."
  },

  // Chapter 2: Prompt Engineering for Testing (8 questions - NEW TOPICS)
  {
    id: 9,
    domain: "Chapter 2: Prompt Engineering for Testing",
    question: "What is 'self-consistency prompting' and how is it applied to improve test case generation?",
    options: [
      "Generating one response and checking it for internal consistency",
      "Generating multiple responses with high temperature and selecting the most common or consistent answer",
      "Ensuring the prompt itself is grammatically consistent",
      "Having the model verify that its prompt follows the organization's style guide"
    ],
    correctAnswer: 1,
    explanation: "Self-consistency prompting generates multiple responses to the same prompt with high temperature and then selects the most common or consistent answer. For test case generation, this can improve quality by aggregating diverse outputs and selecting the most frequently generated test scenarios."
  },
  {
    id: 10,
    domain: "Chapter 2: Prompt Engineering for Testing",
    question: "A tester wants the LLM to first identify missing test scenarios in a requirements document, then generate test cases for those gaps. Which prompting approach is MOST appropriate?",
    options: [
      "Single-shot prompting with all instructions combined",
      "Prompt chaining with two sequential prompts: analysis then generation",
      "Zero-shot prompting with high temperature",
      "Meta prompting to improve the prompt before execution"
    ],
    correctAnswer: 1,
    explanation: "Prompt chaining divides the task into two sequential prompts: the first analyzes the requirements to identify missing test scenarios, and the second generates test cases for those gaps. This produces better results than a combined prompt because each step can focus on its specific task."
  },
  {
    id: 11,
    domain: "Chapter 2: Prompt Engineering for Testing",
    question: "In the context of prompt engineering for testing, what is 'tree-of-thought' (ToT) prompting and when is it beneficial?",
    options: [
      "A technique that generates only two possible solutions",
      "A technique that explores multiple reasoning paths (branches) before selecting the best one, beneficial for complex test design with multiple valid approaches",
      "A method for organizing test cases in a tree structure",
      "A technique that forces the model to always choose the shortest path"
    ],
    correctAnswer: 1,
    explanation: "Tree-of-thought (ToT) prompting encourages the model to explore multiple reasoning paths (branches of a 'thought tree') and evaluate each before selecting the best one. In test design, this is beneficial when there are multiple valid testing approaches and the model needs to explore trade-offs between them."
  },
  {
    id: 12,
    domain: "Chapter 2: Prompt Engineering for Testing",
    question: "Which of the following is a key consideration when designing a system prompt for an LLM-based test automation assistant?",
    options: [
      "The system prompt should be as vague as possible for flexibility",
      "The system prompt should establish the assistant's role, safety boundaries, output format conventions, and prohibited actions",
      "System prompts are only needed for simple tasks",
      "The system prompt should include all test data directly"
    ],
    correctAnswer: 1,
    explanation: "A well-designed system prompt for a test automation assistant should establish its role (e.g., 'you are a test automation expert'), define safety boundaries (e.g., 'never execute tests in production'), specify output conventions (e.g., 'always output Gherkin format'), and list prohibited actions."
  },
  {
    id: 13,
    domain: "Chapter 2: Prompt Engineering for Testing",
    question: "What is 'structured output prompting' and why is it important for integrating LLM-generated test cases into test management systems?",
    options: [
      "It formats the prompt itself in a structured way",
      "It instructs the LLM to generate output in a specific machine-readable format (e.g., JSON, XML) that can be directly imported into test management tools",
      "It structures the training data before fine-tuning",
      "It organizes the test execution reports"
    ],
    correctAnswer: 1,
    explanation: "Structured output prompting instructs the LLM to produce output in a specific machine-readable format like JSON or XML. This is critical for integration because test management tools (e.g., Jira, TestRail) can programmatically import structured test cases without manual reformatting."
  },
  {
    id: 14,
    domain: "Chapter 2: Prompt Engineering for Testing",
    question: "A testing team is using few-shot prompting but the generated test cases are too similar to the examples. Which technique should they use to encourage diversity while maintaining structure?",
    options: [
      "Remove all examples and use zero-shot prompting",
      "Increase the temperature to maximum and remove constraints",
      "Use diverse few-shot examples that demonstrate different test techniques and explicitly instruct the model to generate varied test scenarios",
      "Switch to a completely different LLM provider"
    ],
    correctAnswer: 2,
    explanation: "When few-shot outputs are too similar to examples, the solution is to provide diverse examples that demonstrate different test techniques (boundary value, equivalence partitioning, error guessing) and explicitly instruct the model to generate varied scenarios. This breaks the pattern repetition while maintaining format consistency."
  },
  {
    id: 15,
    domain: "Chapter 2: Prompt Engineering for Testing",
    question: "What is 'retrieval-augmented prompting' and how does it differ from standard prompting for test case generation?",
    options: [
      "It retrieves the model's previous responses from cache",
      "It augments the prompt with context retrieved from a knowledge base (e.g., project requirements, test history) before sending it to the LLM",
      "It retrieves prompts from a public database",
      "It augments the user's input with spell corrections"
    ],
    correctAnswer: 1,
    explanation: "Retrieval-augmented prompting (RAG-based prompting) retrieves relevant context from a knowledge base and augments the prompt with it before sending to the LLM. This differs from standard prompting because the LLM generates test cases grounded in actual project data rather than relying solely on its training data."
  },
  {
    id: 16,
    domain: "Chapter 2: Prompt Engineering for Testing",
    question: "A tester wants to generate both positive and negative test cases from a single user story. Which prompt structure would MOST effectively ensure both types are generated?",
    options: [
      "Ask the model to 'generate some test cases' without specifying types",
      "Use a single prompt with explicit constraints: 'Generate 5 positive test cases and 5 negative test cases, clearly labeled, covering at least 3 different test techniques'",
      "Generate only positive cases and manually add negative ones",
      "Use maximum temperature for creative negative test cases"
    ],
    correctAnswer: 1,
    explanation: "Using explicit constraints that specify the number, type (positive/negative), labeling, and minimum test techniques ensures the LLM generates a balanced set of test cases in a single prompt. Ambiguous instructions like 'generate some test cases' often result in unbalanced coverage favoring happy-path scenarios."
  },

  // Chapter 3: Managing Risks of GenAI in Testing (8 questions - NEW TOPICS)
  {
    id: 17,
    domain: "Chapter 3: Managing Risks of GenAI in Testing",
    question: "What is 'data poisoning' in the context of LLMs used for testing and how can it affect test case quality?",
    options: [
      "An attacker corrupts the training data to make the model produce incorrect or biased test cases",
      "The model's output is poisoned by high temperature settings",
      "Test data is physically destroyed in storage",
      "The prompt contains toxic language"
    ],
    correctAnswer: 0,
    explanation: "Data poisoning involves an attacker injecting malicious or biased data into the LLM's training corpus. This can cause the model to generate systematically incorrect or biased test cases, potentially skipping critical test scenarios or introducing false positives."
  },
  {
    id: 18,
    domain: "Chapter 3: Managing Risks of GenAI in Testing",
    question: "A testing team notices that their LLM-generated test cases for a healthcare application consistently miss edge cases related to elderly patients. What type of bias is this and what is the best mitigation?",
    options: [
      "Measurement bias; fix the evaluation metrics",
      "Representation bias in training data; add explicit constraints for elderly patient scenarios and augment with diverse test data",
      "Temporal bias; wait for a model update",
      "Spatial bias; use a different geographic API endpoint"
    ],
    correctAnswer: 1,
    explanation: "This is representation bias—elderly patients are underrepresented in the model's training data. The best mitigation is adding explicit prompt constraints (e.g., 'include test cases for patients aged 65+') and augmenting with diverse test data that covers underrepresented demographics."
  },
  {
    id: 19,
    domain: "Chapter 3: Managing Risks of GenAI in Testing",
    question: "Which of the following describes the risk of 'over-reliance' on LLM-generated test cases and how to mitigate it?",
    options: [
      "Over-reliance means using the LLM too frequently; mitigate by reducing all AI usage",
      "Over-reliance occurs when testers trust LLM output without critical evaluation; mitigate by mandating human review, coverage analysis, and maintaining testing skills",
      "Over-reliance means the LLM is too expensive; mitigate by using a smaller model",
      "Over-reliance is not actually a risk in testing"
    ],
    correctAnswer: 1,
    explanation: "Over-reliance occurs when testers blindly trust LLM-generated test cases without critical evaluation. This risks missing defects that the LLM's test cases don't cover. Mitigation includes mandating human review, conducting independent coverage analysis, and maintaining manual testing skills."
  },
  {
    id: 20,
    domain: "Chapter 3: Managing Risks of GenAI in Testing",
    question: "An LLM used in a CI/CD pipeline for automated test generation suddenly starts producing lower-quality test cases. The model version has not changed. What is the MOST likely cause?",
    options: [
      "The CI/CD pipeline is too fast",
      "Model drift caused by changes in the application's requirements, code, or data that the LLM has not been updated to reflect",
      "The LLM's context window has shrunk",
      "The testing team is using the LLM too often"
    ],
    correctAnswer: 1,
    explanation: "Even when the model version hasn't changed, model drift can occur due to changes in the application being tested—new features, changed requirements, or evolving code patterns—that the LLM was not trained or prompted to handle. The mitigation is to update prompts and RAG knowledge bases to reflect current application state."
  },
  {
    id: 21,
    domain: "Chapter 3: Managing Risks of GenAI in Testing",
    question: "What is the difference between 'model watermarking' and 'output watermarking' for LLM-generated test artifacts, and why does it matter for testing teams?",
    options: [
      "They are identical concepts with different names",
      "Model watermarking embeds markers in the model itself, while output watermarking adds identifiable patterns to generated text; both help trace the origin of AI-generated test artifacts for audit purposes",
      "Model watermarking encrypts the model and output watermarking decrypts it",
      "Watermarking is only relevant for images, not text"
    ],
    correctAnswer: 1,
    explanation: "Model watermarking embeds markers in the model's weights, while output watermarking adds identifiable patterns to the generated text. For testing teams, both help trace AI-generated test artifacts, proving auditability and distinguishing human-written test cases from AI-generated ones."
  },
  {
    id: 22,
    domain: "Chapter 3: Managing Risks of GenAI in Testing",
    question: "Under the EU AI Act, what is the obligation of a testing team using a high-risk AI system for test case generation?",
    options: [
      "No obligations exist for testing teams",
      "They must ensure human oversight, maintain technical documentation, log the system's activity, and ensure the AI is transparent and accurate",
      "They only need to inform users about the AI",
      "They must disable the AI after one year"
    ],
    correctAnswer: 1,
    explanation: "Under the EU AI Act, teams using high-risk AI systems must ensure human oversight, maintain technical documentation, log system activity, and ensure transparency and accuracy. For testing teams, this means documenting which test cases are AI-generated and maintaining human validation processes."
  },
  {
    id: 23,
    domain: "Chapter 3: Managing Risks of GenAI in Testing",
    question: "Which of the following is the MOST appropriate approach for handling intellectual property (IP) concerns when using a public LLM to generate test cases?",
    options: [
      "All LLM-generated content is automatically public domain",
      "Using a public LLM always transfers IP rights to the provider",
      "Review the provider's terms of service, use enterprise agreements that clarify IP ownership, and avoid sending proprietary >code or trade secrets in prompts",
      "IP concerns do not apply to test cases"
    ],
    correctAnswer: 2,
    explanation: "IP concerns with public LLMs are significant. Testing teams should review the provider's terms of service, use enterprise agreements that clarify IP ownership of generated content, and avoid sending proprietary code, algorithms, or trade secrets in prompts that could be used in the provider's future training."
  },
  {
    id: 24,
    domain: "Chapter 3: Managing Risks of GenAI in Testing",
    question: "What is 'jailbreaking' in the context of LLM-based testing tools and what risk does it pose?",
    options: [
      "Breaking the physical server housing the LLM",
      "Crafting inputs that bypass the model's safety restrictions, potentially causing it to generate harmful or non-compliant test instructions",
      "Using the LLM without an internet connection",
      "Restarting the LLM to reset its memory"
    ],
    correctAnswer: 1,
    explanation: "Jailbreaking involves crafting inputs that bypass the LLM's safety restrictions and alignment. In testing tools, this could cause the model to generate harmful test instructions, bypass security constraints in automated test execution, or produce non-compliant outputs that violate organizational policies."
  },

  // Chapter 4: LLM-Powered Test Infrastructure (8 questions - NEW TOPICS)
  {
    id: 25,
    domain: "Chapter 4: LLM-Powered Test Infrastructure",
    question: "In a RAG-based testing tool, what is 'query transformation' and why is it important?",
    options: [
      "It transforms the LLM's output into a different format",
      "It rewrites or expands the user's query before retrieval to improve the relevance of retrieved test artifacts",
      "It converts the test results into a report",
      "It changes the model's training parameters"
    ],
    correctAnswer: 1,
    explanation: "Query transformation rewrites or expands the user's original query before retrieval. For example, it might decompose a complex query ('find test cases for payment failures in checkout') into sub-queries for each concept. This improves retrieval relevance by matching against better-formulated search terms."
  },
  {
    id: 26,
    domain: "Chapter 4: LLM-Powered Test Infrastructure",
    question: "What is 'hybrid retrieval' in a RAG pipeline for test case management and what advantage does it provide?",
    options: [
      "It uses only the LLM's internal knowledge without external data",
      "It combines semantic (vector) search with keyword (BM25) search to improve retrieval accuracy for test cases that contain specific identifiers",
      "It retrieves from both public and private databases simultaneously",
      "It uses two different LLMs for retrieval"
    ],
    correctAnswer: 1,
    explanation: "Hybrid retrieval combines semantic vector search (which finds conceptually similar content) with keyword search like BM25 (which finds exact keyword matches). This is advantageous because test cases often contain specific identifiers (test IDs, requirement numbers) that semantic search alone may miss."
  },
  {
    id: 27,
    domain: "Chapter 4: LLM-Powered Test Infrastructure",
    question: "An LLM-powered test agent autonomously navigates a web application and reports defects. What is the role of the 'action space' in this agent's design?",
    options: [
      "It defines the agent's training data requirements",
      "It defines the set of actions the agent can take (e.g., click, type, navigate, assert) during autonomous test execution",
      "It specifies the agent's context window size",
      "It determines the agent's API pricing"
    ],
    correctAnswer: 1,
    explanation: "The action space defines all possible actions an LLM-powered test agent can take during autonomous execution, such as clicking elements, typing text, navigating URLs, or making assertions. A well-designed action space enables the agent to effectively explore the application while preventing harmful actions."
  },
  {
    id: 28,
    domain: "Chapter 4: LLM-Powered Test Infrastructure",
    question: "Which LLMOps practice involves 'prompt regression testing' and why is it critical for testing teams?",
    options: [
      "Testing the prompts themselves for grammatical correctness",
      "Running a standardized set of prompts against new model versions to verify that output quality and format have not degraded",
      "Removing old prompts that are no longer used",
      "Testing whether the LLM can generate regression tests"
    ],
    correctAnswer: 1,
    explanation: "Prompt regression testing runs a standardized suite of prompts against new model versions or updated prompts to verify that output quality, format, and accuracy have not degraded. This is critical for testing teams because model updates can silently change outputs, breaking automated test case generation pipelines."
  },
  {
    id: 29,
    domain: "Chapter 4: LLM-Powered Test Infrastructure",
    question: "What is the role of a 'guardrail' in an LLM-powered test automation pipeline?",
    options: [
      "It prevents the LLM from generating any output",
      "It validates and filters LLM outputs to ensure they comply with safety, format, and organizational policies before execution",
      "It speeds up the LLM's inference time",
      "It encrypts the prompts before sending them to the API"
    ],
    correctAnswer: 1,
    explanation: "A guardrail validates and filters LLM outputs to ensure they comply with safety rules, format requirements, and organizational policies before being executed. For test automation, this prevents harmful actions (e.g., executing tests in production) and ensures generated test cases meet quality standards."
  },
  {
    id: 30,
    domain: "Chapter 4: LLM-Powered Test Infrastructure",
    question: "In the context of LLM-powered testing tools, what is 'function calling' (also known as 'tool use') and how does it enhance test automation?",
    options: [
      "It allows the LLM to call arbitrary functions on the user's machine",
      "It enables the LLM to invoke predefined functions/APIs (e.g., get_test_results, create_test_case) to interact with external systems and execute real actions",
      "It is a technique for calling the LLM API itself",
      "It refers to writing unit test functions"
    ],
    correctAnswer: 1,
    explanation: "Function calling enables the LLM to invoke predefined functions or APIs that interact with external systems. In test automation, this allows the LLM to retrieve test results from a database, create test cases in a management tool, or trigger test execution in a CI/CD pipeline, bridging the gap between text generation and real actions."
  },
  {
    id: 31,
    domain: "Chapter 4: LLM-Powered Test Infrastructure",
    question: "A testing team builds a RAG system where the vector database is updated nightly with new test cases. However, retrieval queries during the day return outdated results. What is the MOST likely issue?",
    options: [
      "The vector database is too slow",
      "The embedding model is outdated",
      "The vector database needs real-time or near-real-time indexing, not just nightly batch updates",
      "The LLM's context window is too small"
    ],
    correctAnswer: 2,
    explanation: "Nightly batch updates mean the vector database doesn't reflect test cases created during the day. For near-real-time retrieval, the system should use incremental indexing where new or updated test cases are embedded and indexed as they are created, rather than waiting for a nightly batch."
  },
  {
    id: 32,
    domain: "Chapter 4: LLM-Powered Test Infrastructure",
    question: "Which of the following is a critical consideration for deploying an LLM-powered test agent in a production-like environment?",
    options: [
      "The agent should always have unrestricted access to all environments",
      "The agent should have a sandboxed execution environment with limited permissions, logging of all actions, and human-in-the-loop for critical decisions",
      "The agent should be deployed without any monitoring to save costs",
      "The agent should only run during business hours"
    ],
    correctAnswer: 1,
    explanation: "Deploying an LLM-powered test agent in production-like environments requires sandboxing (isolated execution), limited permissions (principle of least privilege), comprehensive logging of all actions for audit and debugging, and human-in-the-loop validation for critical decisions to prevent unintended side effects."
  },

  // Chapter 5: Deploying and Integrating GenAI (8 questions - NEW TOPICS)
  {
    id: 33,
    domain: "Chapter 5: Deploying and Integrating GenAI",
    question: "What is 'AI literacy' training as mandated by the EU AI Act, and why is it relevant for testing teams?",
    options: [
      "It is training on how to read AI-generated text",
      "It is mandatory training ensuring staff have sufficient understanding of AI systems to oversee them responsibly, including understanding capabilities, limitations, and risks",
      "It is a certification for AI engineers",
      "It is optional training on AI history"
    ],
    correctAnswer: 1,
    explanation: "The EU AI Act mandates AI literacy training for staff deploying or operating AI systems. For testing teams, this means ensuring all team members understand LLM capabilities, limitations (hallucinations, bias), risks (data privacy, over-reliance), and their responsibilities when overseeing AI-assisted testing."
  },
  {
    id: 34,
    domain: "Chapter 5: Deploying and Integrating GenAI",
    question: "Which change management approach is MOST effective when introducing GenAI test case generation to a team resistant to adopting AI?",
    options: [
      "Mandate immediate AI usage for all testing tasks",
      "Replace resistant team members with AI-friendly staff",
      "Start with volunteer champions on low-risk tasks, demonstrate value through results, provide hands-on training, and address fears about job displacement transparently",
      "Deploy AI tools without any communication or training"
    ],
    correctAnswer: 2,
    explanation: "Effective change management for GenAI adoption starts with volunteer champions who pilot low-risk tasks, demonstrate concrete value through measurable results, provide hands-on training to build confidence, and transparently address fears about job displacement by emphasizing AI as a tool that augments rather than replaces testers."
  },
  {
    id: 35,
    domain: "Chapter 5: Deploying and Integrating GenAI",
    question: "What is a 'human-in-the-loop' (HITL) checkpoint in a GenAI testing pipeline and when should it be mandatory?",
    options: [
      "It allows humans to push a button every time the LLM generates text",
      "It requires human review and approval before AI-generated test cases proceed to the next stage, mandatory for safety-critical, regulated, or high-risk applications",
      "It is a method for humans to write test cases alongside AI",
      "It is an optional step that can always be skipped"
    ],
    correctAnswer: 1,
    explanation: "A human-in-the-loop checkpoint requires human review and approval before AI-generated test cases proceed. It is mandatory for safety-critical systems (medical devices, automotive), regulated industries (finance, healthcare), and high-risk applications where incorrect test cases could lead to undetected defects with severe consequences."
  },
  {
    id: 36,
    domain: "Chapter 5: Deploying and Integrating GenAI",
    question: "A test director needs to justify the $3,000/month cost of an LLM-powered testing tool to executives. Which metric combination would provide the MOST compelling ROI case?",
    options: [
      "Number of prompts written and tokens consumed",
      "Hours saved on test case creation, defect detection rate improvement, test coverage increase, and reduction in escaped defects to production",
      "The model's parameter count and training data size",
      "Number of API calls made and server uptime"
    ],
    correctAnswer: 1,
    explanation: "The most compelling ROI case combines hours saved on test case creation (direct cost savings), defect detection rate improvement (quality gains), test coverage increase (risk reduction), and reduced escaped defects (cost avoidance). These metrics translate AI tool costs into concrete business value."
  },
  {
    id: 37,
    domain: "Chapter 5: Deploying and Integrating GenAI",
    question: "Which of the following is a critical element of a GenAI governance policy specifically for testing organizations?",
    options: [
      "A policy that bans all AI tool usage permanently",
      "Clear guidelines on what data can be sent to LLMs, mandatory human review processes, approved tools list, prompt versioning requirements, and audit trails",
      "A policy that requires all test cases to be AI-generated",
      "A policy that only the testing lead can use AI tools"
    ],
    correctAnswer: 1,
    explanation: "A GenAI governance policy for testing must include: data classification rules (what can/cannot be sent to LLMs), mandatory human review processes, an approved tools list to prevent Shadow AI, prompt versioning requirements for reproducibility, and audit trails for compliance and quality tracking."
  },
  {
    id: 38,
    domain: "Chapter 5: Deploying and Integrating GenAI",
    question: "An organization uses a public LLM API for test case generation. After switching to a self-hosted open-source model to save costs, test case quality drops significantly. What is the BEST first step to remediate?",
    options: [
      "Switch back to the public API immediately",
      "Fine-tune the self-hosted model on the organization's historical test cases and implement RAG with project-specific knowledge",
      "Increase the temperature to maximum",
      "Abandon AI-assisted testing entirely"
    ],
    correctAnswer: 1,
    explanation: "When a self-hosted open-source model underperforms compared to a public API, the best first step is fine-tuning it on the organization's historical test cases (domain-specific knowledge) and implementing RAG with project-specific artifacts. This bridges the capability gap while maintaining data privacy and cost savings."
  },
  {
    id: 39,
    domain: "Chapter 5: Deploying and Integrating GenAI",
    question: "Which approach to scaling GenAI testing tools across multiple teams is MOST likely to maintain quality and consistency?",
    options: [
      "Each team chooses and deploys their own LLM tools independently",
      "Establish a centralized platform team that provides approved tools, shared prompt libraries, common guardrails, and best practices while allowing team-level customization",
      "Deploy identical configurations to all teams with no customization allowed",
      "Only allow one team to use GenAI until perfect results are achieved"
    ],
    correctAnswer: 1,
    explanation: "A centralized platform team providing approved tools, shared prompt libraries, common guardrails, and best practices ensures consistency and compliance while allowing team-level customization for specific testing needs. This approach balances standardization (quality, security) with flexibility (relevance to different product areas)."
  },
  {
    id: 40,
    domain: "Chapter 5: Deploying and Integrating GenAI",
    question: "When evaluating whether to build a custom LLM-powered testing tool or buy an existing commercial solution, which factor is MOST critical?",
    options: [
      "The commercial solution's logo design",
      "Whether the organization has unique testing workflows that off-the-shelf tools cannot support, weighed against build vs. buy costs, maintenance burden, and time-to-value",
      "The number of features in the commercial solution, regardless of relevance",
      "Whether the build team prefers Python or JavaScript"
    ],
    correctAnswer: 1,
    explanation: "The build vs. buy decision should weigh whether existing tools support the organization's unique testing workflows against the costs of building (development time, maintenance, infrastructure), buying (licensing, customization limits), and time-to-value. If workflows are highly unique, building may be justified; if standard, buying is faster."
  }
];