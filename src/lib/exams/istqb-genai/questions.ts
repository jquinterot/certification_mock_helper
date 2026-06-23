import type { ExamQuestion } from '@/types';

export const questions: ExamQuestion[] = [
  // Chapter 1: Introduction to Generative AI for Software Testing (12 questions)
  {
    id: 1,
    domain: "Chapter 1: Introduction to GenAI for Testing",
    question: "What is the primary difference between a foundation model and an instruction-tuned model?",
    options: [
      "Foundation models are trained on broad data, while instruction-tuned models are fine-tuned on task-specific instructions",
      "Foundation models are smaller and faster",
      "Foundation models cannot generate text",
      "Instruction-tuned models are always open-source"
    ],
    correctAnswer: 0,
    explanation: "Foundation models are trained on broad, general data and can perform many tasks. Instruction-tuned models are further fine-tuned on specific instruction-following datasets, making them better at understanding and executing user commands."
  },
  {
    id: 2,
    domain: "Chapter 1: Introduction to GenAI for Testing",
    question: "What is a 'context window' in a Large Language Model (LLM)?",
    options: [
      "The physical screen where the model outputs text",
      "The training dataset size",
      "The model's memory footprint",
      "The maximum number of tokens the model can process in a single input"
    ],
    correctAnswer: 3,
    explanation: "The context window is the maximum number of tokens (words/subwords) that an LLM can process in a single input. It limits how much information can be included in one prompt, which affects test log analysis and long requirement documents."
  },
  {
    id: 3,
    domain: "Chapter 1: Introduction to GenAI for Testing",
    question: "Which of the following best describes the 'attention mechanism' in transformer models?",
    options: [
      "A mechanism that reduces the model's memory usage",
      "A mechanism that encrypts the input data",
      "A mechanism that allows the model to focus on relevant parts of the input when generating output",
      "A mechanism that speeds up training by 100x"
    ],
    correctAnswer: 2,
    explanation: "The attention mechanism allows the model to focus on relevant parts of the input when generating each part of the output. This is the core innovation that enables transformers to capture long-range dependencies in text."
  },
  {
    id: 4,
    domain: "Chapter 1: Introduction to GenAI for Testing",
    question: "What is tokenization in the context of LLMs?",
    options: [
      "Encrypting the model weights",
      "Breaking text into smaller units (tokens) for processing",
      "Compressing the model for deployment",
      "Converting images to text descriptions"
    ],
    correctAnswer: 1,
    explanation: "Tokenization is the process of breaking text into smaller units (tokens) such as words or subwords, which the LLM processes. Different tokenizers produce different token counts for the same text."
  },
  {
    id: 5,
    domain: "Chapter 1: Introduction to GenAI for Testing",
    question: "What is a multimodal LLM?",
    options: [
      "A model that can process multiple types of input (text, images, audio)",
      "A model that can only process text",
      "A model trained on multiple programming languages",
      "A model that runs on multiple servers"
    ],
    correctAnswer: 0,
    explanation: "A multimodal LLM can process and understand multiple types of input data, such as text, images, and audio. This is useful for testing applications that involve screenshots, UI elements, or voice interfaces."
  },
  {
    id: 6,
    domain: "Chapter 1: Introduction to GenAI for Testing",
    question: "Which of the following best describes 'embeddings' in the context of LLMs?",
    options: [
      "Visual representations of the model architecture",
      "The process of training a model on multiple datasets",
      "Error messages displayed during model inference",
      "Dense numerical vectors that represent semantic meaning of text"
    ],
    correctAnswer: 3,
    explanation: "Embeddings are dense numerical vectors that capture the semantic meaning of text. They enable semantic similarity search, which is essential for Retrieval-Augmented Generation (RAG) systems in testing."
  },
  {
    id: 7,
    domain: "Chapter 1: Introduction to GenAI for Testing",
    question: "What is the primary advantage of using Small Language Models (SLMs) over Large Language Models for certain testing tasks?",
    options: [
      "SLMs are always more accurate",
      "SLMs can process unlimited context",
      "SLMs are more efficient and cost-effective for specific, narrow tasks",
      "SLMs do not require any training data"
    ],
    correctAnswer: 2,
    explanation: "Small Language Models (SLMs) are more efficient and cost-effective for specific, narrow tasks. They have fewer parameters, making them faster and cheaper to run, which is ideal for repetitive testing tasks like generating test data."
  },
  {
    id: 8,
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
    id: 9,
    domain: "Chapter 1: Introduction to GenAI for Testing",
    question: "What is the purpose of 'pre-training' in foundation models?",
    options: [
      "To train the model on broad data to learn general language patterns",
      "To make the model smaller",
      "To remove all parameters",
      "To make the model run faster"
    ],
    correctAnswer: 0,
    explanation: "Pre-training involves training a model on broad data to learn general language patterns and world knowledge. This foundation can then be fine-tuned for specific tasks like testing."
  },
  {
    id: 10,
    domain: "Chapter 1: Introduction to GenAI for Testing",
    question: "Which of the following is a limitation of LLMs in testing?",
    options: [
      "They cannot generate text",
      "They are too small to process text",
      "They only work with images",
      "They may produce hallucinations or incorrect information"
    ],
    correctAnswer: 3,
    explanation: "LLMs may produce hallucinations - generated content that is incorrect or not based on the input. This is a critical risk in testing where accuracy is essential."
  },
  {
    id: 11,
    domain: "Chapter 1: Introduction to GenAI for Testing",
    question: "Which of the following is a key difference between a foundation model and a reasoning model?",
    options: [
      "Foundation models are always open-source",
      "Foundation models cannot process text",
      "Reasoning models are designed for step-by-step logical analysis and typically slower",
      "Reasoning models are always smaller"
    ],
    correctAnswer: 2,
    explanation: "Reasoning models are designed for step-by-step logical analysis, making them suitable for complex tasks like test planning. They are typically slower and more expensive than foundation or instruction-tuned models."
  },
  {
    id: 12,
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

  // Chapter 2: Prompt Engineering for Effective Software Testing (14 questions)
  {
    id: 13,
    domain: "Chapter 2: Prompt Engineering for Testing",
    question: "What are the six components of a structured prompt for testing?",
    options: [
      "Role, context, instruction, input data, constraints, output format",
      "Title, subtitle, body, conclusion, appendix, references",
      "Introduction, problem statement, solution, evaluation, conclusion, future work",
      "User, password, database, API, endpoint, response"
    ],
    correctAnswer: 0,
    explanation: "The six components of a structured prompt for testing are: Role (who the AI should act as), Context (background information), Instruction (what to do), Input Data (the specific content to process), Constraints (limitations), and Output Format (desired structure)."
  },
  {
    id: 14,
    domain: "Chapter 2: Prompt Engineering for Testing",
    question: "Which prompting technique is MOST appropriate for generating consistent Gherkin scenarios for similar user stories?",
    options: [
      "Prompt chaining",
      "Meta prompting",
      "Zero-shot prompting",
      "Few-shot prompting"
    ],
    correctAnswer: 3,
    explanation: "Few-shot prompting provides examples of the desired output format, which is ideal for generating consistent Gherkin scenarios. By showing 2-3 examples, the model learns the pattern and produces consistent, structured output."
  },
  {
    id: 15,
    domain: "Chapter 2: Prompt Engineering for Testing",
    question: "Which prompting technique is MOST appropriate for breaking down a complex test planning task into sequential steps?",
    options: [
      "Few-shot prompting",
      "Meta prompting",
      "Prompt chaining",
      "Random prompting"
    ],
    correctAnswer: 2,
    explanation: "Prompt chaining breaks down complex tasks into sequential steps, where the output of one prompt becomes the input of the next. This is ideal for complex test planning that requires multiple stages of analysis."
  },
  {
    id: 16,
    domain: "Chapter 2: Prompt Engineering for Testing",
    question: "What is the purpose of the 'role' component in a structured prompt?",
    options: [
      "To specify the user's job title",
      "To define the persona the AI should adopt when generating responses",
      "To set the model's training parameters",
      "To restrict access to the API"
    ],
    correctAnswer: 1,
    explanation: "The 'role' component defines the persona the AI should adopt (e.g., 'senior QA engineer', 'test automation specialist'). This helps the model generate responses from the appropriate perspective and expertise level."
  },
  {
    id: 17,
    domain: "Chapter 2: Prompt Engineering for Testing",
    question: "What is 'meta prompting' in the context of software testing?",
    options: [
      "Asking the model to analyze and improve its own prompts",
      "Prompting the model to generate prompts for other models",
      "Using multiple LLMs simultaneously",
      "Encrypting the prompt before sending"
    ],
    correctAnswer: 0,
    explanation: "Meta prompting involves asking the model to analyze and improve its own prompts. For example, you might ask the model to review a prompt for ambiguities and suggest improvements before using it for test case generation."
  },
  {
    id: 18,
    domain: "Chapter 2: Prompt Engineering for Testing",
    question: "What is the primary risk of using zero-shot prompting for complex test case generation?",
    options: [
      "The model will always produce incorrect results",
      "The model will refuse to generate anything",
      "Zero-shot prompting is always more expensive",
      "The output may be inconsistent and lack domain-specific structure"
    ],
    correctAnswer: 3,
    explanation: "Zero-shot prompting (no examples) may produce inconsistent output that lacks domain-specific structure. Without examples, the model might not understand the expected format or level of detail for test cases."
  },
  {
    id: 19,
    domain: "Chapter 3: Managing Risks of GenAI in Testing",
    question: "What is the primary risk of using a high temperature setting (e.g., 0.9) for test case generation?",
    options: [
      "The model will run slower",
      "The API cost will be lower",
      "The output may be too creative and inconsistent, producing non-deterministic test cases",
      "The model will refuse to generate"
    ],
    correctAnswer: 2,
    explanation: "A high temperature increases randomness and creativity, which can lead to inconsistent, non-deterministic test cases. For test case generation, consistency and reproducibility are often more important than creativity. Temperature control is a mitigation technique for non-deterministic behavior (see Chapter 3)."
  },
  {
    id: 20,
    domain: "Chapter 2: Prompt Engineering for Testing",
    question: "A tester is writing a prompt to generate test cases for a login feature. The prompt includes: role (senior QA), context (web application), instruction (generate test cases), input data (user story), constraints (only positive cases), and output format (Gherkin). Which component is MOST likely missing if the generated test cases include edge cases like empty passwords?",
    options: [
      "The role component",
      "The constraints component needs to be more explicit about edge cases",
      "The input data component",
      "The output format component"
    ],
    correctAnswer: 1,
    explanation: "The constraints component should explicitly define what to include or exclude. If the tester wants only positive test cases but the output includes edge cases, the constraint is not clear enough. The constraint should explicitly state 'exclude edge cases, empty inputs, and boundary conditions'."
  },
  {
    id: 21,
    domain: "Chapter 2: Prompt Engineering for Testing",
    question: "Which of the following is a characteristic of 'chain-of-thought' prompting?",
    options: [
      "It asks the model to provide step-by-step reasoning",
      "It uses multiple models simultaneously",
      "It always produces shorter outputs",
      "It requires no instructions"
    ],
    correctAnswer: 0,
    explanation: "Chain-of-thought prompting asks the model to provide step-by-step reasoning. This improves the quality of complex tasks by making the model's reasoning process explicit, which helps verify correctness."
  },
  {
    id: 22,
    domain: "Chapter 2: Prompt Engineering for Testing",
    question: "Which metric is MOST appropriate for evaluating whether generated test cases cover the requirements adequately?",
    options: [
      "Diversity score",
      "Execution success rate",
      "Time efficiency",
      "Relevance score"
    ],
    correctAnswer: 3,
    explanation: "The relevance score measures how well generated test cases align with the requirements. While diversity, execution success rate, and time efficiency are useful metrics, relevance directly evaluates coverage adequacy."
  },
  {
    id: 23,
    domain: "Chapter 2: Prompt Engineering for Testing",
    question: "Which technique is MOST appropriate for iteratively improving a prompt that generates test data?",
    options: [
      "Increasing the model size",
      "Using a different LLM entirely",
      "Evaluating output and refining constraints based on results",
      "Removing all constraints"
    ],
    correctAnswer: 2,
    explanation: "Iterative prompt improvement involves evaluating the generated output against requirements, identifying gaps, and refining the prompt's constraints and instructions. This is the most effective approach for improving prompt quality."
  },
  {
    id: 24,
    domain: "Chapter 2: Prompt Engineering for Testing",
    question: "Which of the following is a sign that a prompt needs refinement?",
    options: [
      "The generated test cases are always perfect",
      "The generated test cases are inconsistent, miss edge cases, or include irrelevant scenarios",
      "The API response is too fast",
      "The model generates too few test cases"
    ],
    correctAnswer: 1,
    explanation: "Inconsistent output, missing edge cases, or irrelevant scenarios indicate that the prompt needs refinement. This could involve adding constraints, providing examples, or clarifying the instructions."
  },
  {
    id: 25,
    domain: "Chapter 2: Prompt Engineering for Testing",
    question: "Which of the following is a limitation of few-shot prompting?",
    options: [
      "It requires high-quality examples that may not always be available",
      "It always produces perfect results",
      "It is faster than zero-shot prompting",
      "It works with any model size"
    ],
    correctAnswer: 0,
    explanation: "Few-shot prompting requires high-quality examples that demonstrate the desired output format. If good examples are not available, the technique may not be effective, and the model may learn incorrect patterns."
  },
  {
    id: 26,
    domain: "Chapter 2: Prompt Engineering for Testing",
    question: "What is the primary purpose of 'prompt templates' in a testing organization?",
    options: [
      "To make prompts look pretty",
      "To reduce the model's memory usage",
      "To encrypt prompt data",
      "To standardize and reuse effective prompts across the team"
    ],
    correctAnswer: 3,
    explanation: "Prompt templates standardize and reuse effective prompts across the team. This ensures consistency in test case generation and allows best practices to be shared. Templates can be parameterized for different contexts."
  },

  // Chapter 3: Managing Risks of Generative AI in Software Testing (6 questions)
  {
    id: 27,
    domain: "Chapter 3: Managing Risks of GenAI in Testing",
    question: "What is a 'hallucination' in the context of LLM-generated test cases?",
    options: [
      "The model produces too many test cases",
      "The model crashes during generation",
      "The model generates test cases that are completely fabricated and not based on requirements",
      "The model generates test cases that are too simple"
    ],
    correctAnswer: 2,
    explanation: "A hallucination occurs when the LLM generates test cases that are fabricated, incorrect, or not based on the actual requirements. The model may invent requirements, steps, or expected results that don't exist."
  },
  {
    id: 28,
    domain: "Chapter 3: Managing Risks of GenAI in Testing",
    question: "What is the primary purpose of setting a low temperature parameter (e.g., 0.1) when generating test cases?",
    options: [
      "To make the model run faster",
      "To reduce randomness and produce more deterministic, consistent output",
      "To increase the model's creativity",
      "To reduce API costs"
    ],
    correctAnswer: 1,
    explanation: "A low temperature (e.g., 0.1) reduces randomness, making the model's output more deterministic and consistent. This is important for test case generation where repeatability and consistency are desired."
  },
  {
    id: 29,
    domain: "Chapter 3: Managing Risks of GenAI in Testing",
    question: "Which risk is MOST relevant when sending production-equivalent test data to a public LLM API?",
    options: [
      "Data privacy and security violations (GDPR)",
      "The model will generate too many test cases",
      "The test cases will be too complex",
      "The API will be too slow"
    ],
    correctAnswer: 0,
    explanation: "Sending production-equivalent test data containing PII or sensitive information to a public LLM API violates data privacy regulations such as GDPR. This is a critical risk, as GenAI tools may store and process sensitive data without explicit user consent or control."
  },
  {
    id: 30,
    domain: "Chapter 3: Managing Risks of GenAI in Testing",
    question: "Which ISO standard provides a framework for AI management systems?",
    options: [
      "ISO 9001",
      "ISO 27001",
      "ISO 14001",
      "ISO/IEC 42001:2023"
    ],
    correctAnswer: 3,
    explanation: "ISO/IEC 42001:2023 is the international standard for AI management systems. It provides a framework for organizations to manage AI risks and opportunities responsibly."
  },
  {
    id: 31,
    domain: "Chapter 3: Managing Risks of GenAI in Testing",
    question: "What is the EU AI Act's primary focus regarding AI systems?",
    options: [
      "Promoting AI innovation without restrictions",
      "Banning all AI applications",
      "Regulating AI systems based on risk levels and ensuring safety",
      "Standardizing AI training datasets"
    ],
    correctAnswer: 2,
    explanation: "The EU AI Act regulates AI systems based on risk levels (minimal, limited, high, unacceptable). It ensures safety, transparency, and accountability, with strict requirements for high-risk AI applications."
  },
  {
    id: 32,
    domain: "Chapter 3: Managing Risks of GenAI in Testing",
    question: "Which technique is MOST appropriate for mitigating the risk of hallucinations in LLM-generated test cases?",
    options: [
      "Always using the highest temperature setting",
      "Human review and validation of generated test cases against requirements",
      "Using a smaller model",
      "Removing all constraints from the prompt"
    ],
    correctAnswer: 1,
    explanation: "Human review and validation is the most effective mitigation for hallucinations. Testers must verify that generated test cases accurately reflect the requirements and do not contain fabricated information."
  },

  // Chapter 4: LLM-Powered Test Infrastructure (4 questions)
  {
    id: 33,
    domain: "Chapter 4: LLM-Powered Test Infrastructure",
    question: "What is Retrieval-Augmented Generation (RAG) in the context of testing tools?",
    options: [
      "A technique that retrieves relevant test artifacts from a knowledge base to augment LLM prompts",
      "A method for generating random test data",
      "A way to train LLMs from scratch",
      "A protocol for API testing"
    ],
    correctAnswer: 0,
    explanation: "RAG retrieves relevant test artifacts (requirements, test cases, defect history) from a vector database and includes them in the LLM prompt. This grounds the model's responses in actual project data rather than relying solely on training data."
  },
  {
    id: 34,
    domain: "Chapter 4: LLM-Powered Test Infrastructure",
    question: "What is the role of a vector database in a RAG-based testing tool?",
    options: [
      "To store test execution results",
      "To manage user authentication",
      "To compile test code",
      "To store embeddings of test artifacts for semantic similarity search"
    ],
    correctAnswer: 3,
    explanation: "A vector database stores embeddings of test artifacts (requirements, test cases, documentation). It enables semantic similarity search, allowing the system to retrieve the most relevant artifacts for a given query."
  },
  {
    id: 35,
    domain: "Chapter 4: LLM-Powered Test Infrastructure",
    question: "What is the primary purpose of fine-tuning an LLM for testing tasks?",
    options: [
      "To reduce the model's size",
      "To make the model run faster",
      "To adapt the model's behavior to specific testing terminology and patterns",
      "To eliminate the need for prompts"
    ],
    correctAnswer: 2,
    explanation: "Fine-tuning adapts a pre-trained LLM to specific testing tasks by training it on testing-specific datasets. This improves the model's understanding of testing terminology, patterns, and domain-specific requirements."
  },
  {
    id: 36,
    domain: "Chapter 4: LLM-Powered Test Infrastructure",
    question: "What is LLMOps in the context of testing?",
    options: [
      "A type of testing methodology",
      "The operational practices for deploying, monitoring, and maintaining LLMs in test environments",
      "A programming language for test automation",
      "A tool for manual testing"
    ],
    correctAnswer: 1,
    explanation: "LLMOps (LLM Operations) refers to the practices for deploying, monitoring, and maintaining LLMs in production test environments. It includes model versioning, performance monitoring, prompt management, and feedback loops."
  },

  // Chapter 5: Deploying and Integrating Generative AI in Test Organizations (8 questions)
  {
    id: 37,
    domain: "Chapter 5: Deploying and Integrating GenAI",
    question: "What is 'Shadow AI' in the context of testing organizations?",
    options: [
      "Unauthorized use of AI tools by team members without organizational approval or oversight",
      "AI systems that run on dark servers",
      "AI models that generate dark-themed test cases",
      "AI systems that only work at night"
    ],
    correctAnswer: 0,
    explanation: "Shadow AI refers to the unauthorized use of AI tools by team members without organizational approval, governance, or oversight. This poses risks to data security, compliance, and quality consistency."
  },
  {
    id: 38,
    domain: "Chapter 5: Deploying and Integrating GenAI",
    question: "Which of the following is a key criterion for selecting an LLM for a specific testing task?",
    options: [
      "The model's color scheme",
      "The model's training location",
      "The model's file size",
      "The model's performance on the specific task type, cost, and context window size"
    ],
    correctAnswer: 3,
    explanation: "Key criteria for selecting an LLM include: performance on the specific task type (e.g., test case generation), cost per token, context window size, latency, and compliance with organizational requirements."
  },
  {
    id: 39,
    domain: "Chapter 5: Deploying and Integrating GenAI",
    question: "What is the primary purpose of a phased approach to GenAI adoption in a test organization?",
    options: [
      "To reduce the number of testers needed",
      "To implement all tools simultaneously",
      "To manage risks, build skills, and demonstrate value incrementally",
      "To avoid using any AI tools"
    ],
    correctAnswer: 2,
    explanation: "A phased approach to GenAI adoption manages risks by starting with pilot projects, building team skills, and demonstrating value before scaling. This reduces disruption and allows lessons to be learned early."
  },
  {
    id: 40,
    domain: "Chapter 5: Deploying and Integrating GenAI",
    question: "Which of the following is a key skill that testers need in a GenAI-enabled team?",
    options: [
      "Ability to manually write all test cases without tools",
      "Prompt engineering and critical evaluation of AI-generated outputs",
      "Avoiding all AI tools",
      "Working in isolation"
    ],
    correctAnswer: 1,
    explanation: "Testers in GenAI-enabled teams need prompt engineering skills and the ability to critically evaluate AI-generated outputs. This includes identifying hallucinations, verifying coverage, and ensuring quality."
  }
];

export const questions2: ExamQuestion[] = [
  // Chapter 1: Additional unique questions (8 questions)
  {
    id: 1,
    domain: "Chapter 1: Introduction to GenAI for Testing",
    question: "Which type of AI represents knowledge using symbols and logical rules in a rule-based system?",
    options: [
      "Symbolic AI",
      "Classical machine learning",
      "Deep learning",
      "Generative AI"
    ],
    correctAnswer: 0,
    explanation: "Symbolic AI uses a rule-based system to mimic human decision-making. It represents knowledge using symbols and logical rules, which is fundamentally different from data-driven approaches like classical machine learning or deep learning."
  },
  {
    id: 2,
    domain: "Chapter 1: Introduction to GenAI for Testing",
    question: "What is the key advantage of using GenAI for software testing compared to classical machine learning approaches?",
    options: [
      "GenAI models are always more accurate than classical ML models",
      "GenAI uses pre-trained models that can be applied directly to test tasks without the need for an additional training phase",
      "GenAI does not require any data to function",
      "GenAI models are always smaller and faster than classical ML models"
    ],
    correctAnswer: 1,
    explanation: "The key advantage of using GenAI for software testing is that it uses pre-trained models that can be applied directly to test tasks without the need for an additional training phase, although this does come with some risks such as hallucinations and non-deterministic behavior."
  },
  {
    id: 3,
    domain: "Chapter 1: Introduction to GenAI for Testing",
    question: "In the transformer model, how does the model generate coherent and contextually appropriate text during inference?",
    options: [
      "By retrieving pre-stored responses from a database",
      "By predicting the next token in a sequence, leveraging learned relationships between tokens",
      "By copying the most similar sentence from the training data",
      "By applying predefined grammar rules to the input"
    ],
    correctAnswer: 1,
    explanation: "During inference, LLMs predict the next token in a sequence, leveraging learned relationships between tokens to generate coherent and contextually appropriate text. The transformer model can generate new text that is statistically plausible based on training data and the prompt, though plausible is not necessarily correct."
  },
  {
    id: 4,
    domain: "Chapter 1: Introduction to GenAI for Testing",
    question: "What is a Small Language Model (SLM) and when is it preferred over an LLM for testing tasks?",
    options: [
      "An SLM is a model that can only process small text inputs",
      "An SLM is a compact model with fewer parameters, designed to provide lightweight and focused GenAI solutions for specific, narrow tasks",
      "An SLM is always less accurate than an LLM",
      "An SLM is a model that does not use the transformer architecture"
    ],
    correctAnswer: 1,
    explanation: "Small Language Models (SLMs) are compact models with fewer parameters compared to large language models, designed to provide lightweight and focused GenAI solutions. They are preferred for narrow, specific tasks where efficiency and cost-effectiveness are important, such as repetitive test data generation."
  },
  {
    id: 5,
    domain: "Chapter 1: Introduction to GenAI for Testing",
    question: "How do embeddings enable LLMs to understand word relationships and retain context?",
    options: [
      "By compressing words into shorter strings",
      "By converting tokens into dense numerical vectors, where tokens with similar meanings are positioned closely together in a high-dimensional space",
      "By sorting tokens alphabetically in memory",
      "By encrypting tokens to prevent unauthorized access"
    ],
    correctAnswer: 1,
    explanation: "Embeddings are numerical representations of tokens that encode their semantic, syntactic, and contextual relationships. Each token is transformed into a vector in a high-dimensional space. Tokens with similar meanings or contextual roles have embeddings positioned closely together, enabling LLMs to understand word relationships, retain context, and generate coherent responses."
  },
  {
    id: 6,
    domain: "Chapter 1: Introduction to GenAI for Testing",
    question: "What is the primary risk of model overfitting when fine-tuning an LLM for a specific testing task?",
    options: [
      "The model becomes too general and forgets testing terminology",
      "The model becomes unable to generate text",
      "The model requires less computational power",
      "The model memorizes the training data and performs poorly on new test scenarios"
    ],
    correctAnswer: 3,
    explanation: "Overfitting occurs when a model memorizes the training data rather than learning general patterns. When fine-tuning an LLM for testing, overfitting causes poor performance on new test scenarios that differ from the training examples."
  },
  {
    id: 7,
    domain: "Chapter 1: Introduction to GenAI for Testing",
    question: "Which of the following is a key characteristic of pre-training in foundation models compared to fine-tuning?",
    options: [
      "Pre-training requires less data than fine-tuning",
      "Pre-training is only for image models",
      "Pre-training learns general language patterns on broad data, while fine-tuning adapts to specific tasks",
      "Fine-tuning is always performed before pre-training"
    ],
    correctAnswer: 2,
    explanation: "Pre-training involves training on massive, broad datasets to learn general language patterns and world knowledge. Fine-tuning then adapts the pre-trained model to specific tasks or domains using smaller, task-specific datasets."
  },
  {
    id: 8,
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

  // Chapter 2: Additional unique questions (8 questions)
  {
    id: 9,
    domain: "Chapter 2: Prompt Engineering for Testing",
    question: "Which prompting technique, updated in CT-GenAI v1.1, involves providing a single example to guide the model's output?",
    options: [
      "One-shot prompting",
      "Zero-shot prompting",
      "Few-shot prompting",
      "Meta prompting"
    ],
    correctAnswer: 0,
    explanation: "One-shot prompting provides a single example to guide the model's output. This was updated in CT-GenAI v1.1 (replacing 'few-shot' in some contexts) and is useful when you have one good example but not multiple."
  },
  {
    id: 10,
    domain: "Chapter 2: Prompt Engineering for Testing",
    question: "A testing team notices that their LLM-generated test cases are inconsistent. The prompt has not changed. Which technique should they apply to improve consistency?",
    options: [
      "Increase the temperature to 1.0",
      "Remove all constraints from the prompt",
      "Use a different LLM provider for each request",
      "Use a fixed random seed and lower temperature for reproducibility"
    ],
    correctAnswer: 3,
    explanation: "Using a fixed random seed and lower temperature ensures reproducibility. A lower temperature reduces randomness, and a fixed seed makes the output deterministic, improving consistency across test case generation sessions."
  },
  {
    id: 11,
    domain: "Chapter 3: Managing Risks of GenAI in Testing",
    question: "Which of the following is a prompt injection attack in the context of LLM-based testing tools?",
    options: [
      "A user accidentally typing the wrong prompt",
      "A network firewall blocking the API request",
      "A malicious input that overrides the system prompt to make the LLM ignore its instructions",
      "A model running out of memory"
    ],
    correctAnswer: 2,
    explanation: "A prompt injection attack involves crafting malicious input that overrides the system prompt, causing the LLM to ignore its original instructions. This is a security risk when testing tools process user-provided input or requirements."
  },
  {
    id: 12,
    domain: "Chapter 2: Prompt Engineering for Testing",
    question: "What is the primary purpose of A/B testing prompts in a testing team?",
    options: [
      "To compare two different LLM providers",
      "To compare the effectiveness of two prompt versions and select the better one",
      "To test the application's UI",
      "To compare manual vs automated testing"
    ],
    correctAnswer: 1,
    explanation: "A/B testing prompts involves comparing two prompt versions against the same test generation task. The team evaluates which version produces better test cases (higher relevance, execution success) and adopts the winner."
  },
  {
    id: 13,
    domain: "Chapter 2: Prompt Engineering for Testing",
    question: "Which of the following is an example of handling ambiguous requirements with prompt engineering?",
    options: [
      "Adding a constraint that asks the model to flag ambiguities and generate tests for all possible interpretations",
      "Ignoring the ambiguity and generating random test cases",
      "Refusing to generate any test cases",
      "Using only manual testing"
    ],
    correctAnswer: 0,
    explanation: "Handling ambiguous requirements involves adding constraints that ask the model to flag ambiguities and generate tests for all possible interpretations. This ensures coverage and identifies requirements that need clarification."
  },
  {
    id: 14,
    domain: "Chapter 2: Prompt Engineering for Testing",
    question: "Which iterative technique involves generating test cases, evaluating them, and then refining the prompt based on evaluation results?",
    options: [
      "Random prompting",
      "Single-shot generation",
      "Manual testing only",
      "Iterative prompt refinement with feedback loops"
    ],
    correctAnswer: 3,
    explanation: "Iterative prompt refinement with feedback loops involves generating test cases, evaluating them against criteria (relevance, coverage), and then refining the prompt based on gaps. This continuous improvement process maximizes output quality."
  },
  {
    id: 15,
    domain: "Chapter 2: Prompt Engineering for Testing",
    question: "What is the purpose of 'prompt versioning' in a testing team?",
    options: [
      "To make prompts run faster",
      "To encrypt prompt data",
      "To track changes to prompts over time and ensure reproducibility",
      "To reduce the number of tokens"
    ],
    correctAnswer: 2,
    explanation: "Prompt versioning tracks changes to prompts over time, ensuring reproducibility. This is essential for testing teams where different prompt versions may produce different test cases, affecting test coverage and results."
  },
  {
    id: 16,
    domain: "Chapter 2: Prompt Engineering for Testing",
    question: "Which metric measures the percentage of generated test cases that execute successfully without errors?",
    options: [
      "Accuracy",
      "Execution success rate",
      "Relevance score",
      "Diversity score"
    ],
    correctAnswer: 1,
    explanation: "Execution success rate measures the percentage of generated test cases that execute successfully (pass or fail as expected) without syntax errors, runtime exceptions, or infrastructure issues."
  },

  // Chapter 3: Additional unique questions (8 questions)
  {
    id: 17,
    domain: "Chapter 3: Managing Risks of GenAI in Testing",
    question: "Which of the following is a technique for anonymizing test data before sending it to an LLM?",
    options: [
      "Replacing PII with synthetic or masked values",
      "Sending the data in plain text",
      "Increasing the temperature",
      "Using a larger model"
    ],
    correctAnswer: 0,
    explanation: "Replacing PII with synthetic or masked values is a technique for anonymizing test data before sending it to an LLM. This reduces privacy risks while maintaining the data's utility for testing."
  },
  {
    id: 18,
    domain: "Chapter 3: Managing Risks of GenAI in Testing",
    question: "Which NIST framework provides guidance on AI risk management?",
    options: [
      "NIST Cybersecurity Framework",
      "NIST SP 800-53",
      "NIST Cloud Security Framework",
      "NIST AI Risk Management Framework (AI RMF)"
    ],
    correctAnswer: 3,
    explanation: "The NIST AI Risk Management Framework (AI RMF) provides guidance on managing AI risks. It is designed to help organizations manage risks associated with AI systems, including those used in testing."
  },
  {
    id: 19,
    domain: "Chapter 3: Managing Risks of GenAI in Testing",
    question: "Which of the following is a mitigation strategy for bias in LLM-generated test cases?",
    options: [
      "Always using the highest temperature",
      "Using only one LLM provider",
      "Reviewing generated test cases for biased assumptions and diversifying training data",
      "Removing all constraints from prompts"
    ],
    correctAnswer: 2,
    explanation: "Reviewing generated test cases for biased assumptions and diversifying training data are mitigation strategies for bias. LLMs may inherit biases from training data, which can affect test case quality and coverage."
  },
  {
    id: 20,
    domain: "Chapter 3: Managing Risks of GenAI in Testing",
    question: "What is the environmental risk associated with using large LLMs for testing?",
    options: [
      "The models produce physical waste",
      "The models consume significant energy and contribute to carbon emissions",
      "The models require water cooling",
      "The models emit radiation"
    ],
    correctAnswer: 1,
    explanation: "Large LLMs consume significant energy during training and inference, contributing to carbon emissions. This is an environmental risk that organizations should consider when adopting GenAI for testing."
  },
  {
    id: 21,
    domain: "Chapter 3: Managing Risks of GenAI in Testing",
    question: "What is the primary purpose of using a random seed when generating test cases with an LLM?",
    options: [
      "To ensure reproducibility by controlling the randomness in the model's output",
      "To make the model run faster",
      "To increase the model's creativity",
      "To reduce API costs"
    ],
    correctAnswer: 0,
    explanation: "A random seed ensures reproducibility by controlling the randomness in the model's output. With the same seed and temperature, the model will generate the same output, which is important for reproducible testing."
  },
  {
    id: 22,
    domain: "Chapter 3: Managing Risks of GenAI in Testing",
    question: "Which of the following is a distinction between data anonymization and pseudonymization?",
    options: [
      "There is no difference",
      "Pseudonymization is stronger than anonymization",
      "Anonymization is only for images",
      "Anonymization irreversibly removes identifying information, while pseudonymization replaces identifiers with tokens that can be reversed"
    ],
    correctAnswer: 3,
    explanation: "Anonymization irreversibly removes identifying information so the data subject cannot be re-identified. Pseudonymization replaces identifiers with tokens (pseudonyms) that can be reversed with a key, providing a weaker but sometimes reversible form of protection."
  },
  {
    id: 23,
    domain: "Chapter 3: Managing Risks of GenAI in Testing",
    question: "Which of the following is the MOST secure environment for processing sensitive test data with an LLM?",
    options: [
      "Public API endpoint with no encryption",
      "Shared cloud instance with other organizations",
      "On-premise deployment with no external data transmission",
      "Public chat interface"
    ],
    correctAnswer: 2,
    explanation: "On-premise deployment ensures sensitive test data never leaves the organization's infrastructure. This is the most secure option for regulated industries where data residency and privacy are critical."
  },
  {
    id: 24,
    domain: "Chapter 3: Managing Risks of GenAI in Testing",
    question: "Which of the following is a requirement for high-risk AI systems under the EU AI Act?",
    options: [
      "No documentation required",
      "Risk management, data governance, transparency, human oversight, and accuracy requirements",
      "Only speed optimization",
      "No human oversight needed"
    ],
    correctAnswer: 1,
    explanation: "The EU AI Act requires high-risk AI systems to implement risk management, maintain data governance, ensure transparency, provide human oversight, and meet accuracy standards. Testing teams must verify these requirements."
  },

  // Chapter 4: Additional unique questions (8 questions)
  {
    id: 25,
    domain: "Chapter 4: LLM-Powered Test Infrastructure",
    question: "What is the purpose of 'chunking' in a RAG pipeline for testing?",
    options: [
      "To break large test documents into smaller pieces for efficient retrieval",
      "To make the model run faster",
      "To encrypt the data",
      "To compress the model"
    ],
    correctAnswer: 0,
    explanation: "Chunking breaks large test documents into smaller pieces that can be efficiently embedded and retrieved. This ensures that the most relevant sections are retrieved and included in the LLM prompt."
  },
  {
    id: 26,
    domain: "Chapter 4: LLM-Powered Test Infrastructure",
    question: "What is an 'LLM-powered agent' in the context of test automation?",
    options: [
      "A human tester who uses LLMs",
      "A type of database for storing test results",
      "A manual testing technique",
      "An autonomous or semi-autonomous system that uses LLMs to perform testing tasks"
    ],
    correctAnswer: 3,
    explanation: "An LLM-powered agent is an autonomous or semi-autonomous system that uses LLMs to perform testing tasks. It can plan, execute, and evaluate tests with minimal human intervention, using tools and APIs."
  },
  {
    id: 27,
    domain: "Chapter 4: LLM-Powered Test Infrastructure",
    question: "Which of the following is a popular vector database for RAG-based testing tools?",
    options: [
      "MySQL",
      "Excel",
      "Pinecone, Weaviate, or Chroma",
      "FTP server"
    ],
    correctAnswer: 2,
    explanation: "Pinecone, Weaviate, and Chroma are popular vector databases designed for storing embeddings and performing semantic similarity search. They are commonly used in RAG-based testing tools for retrieving relevant test artifacts."
  },
  {
    id: 28,
    domain: "Chapter 4: LLM-Powered Test Infrastructure",
    question: "Which RAG evaluation metric measures whether the retrieved context contains all information needed to answer the question?",
    options: [
      "Context precision",
      "Context recall",
      "Faithfulness",
      "Answer relevance"
    ],
    correctAnswer: 1,
    explanation: "Context recall measures whether the retrieved context contains all the information needed to answer the question. High recall means the RAG system is finding all relevant test artifacts, while precision measures if the retrieved artifacts are actually relevant."
  },
  {
    id: 29,
    domain: "Chapter 4: LLM-Powered Test Infrastructure",
    question: "Which of the following is a model serving framework optimized for LLM inference throughput?",
    options: [
      "vLLM or TensorRT-LLM",
      "Apache Tomcat",
      "Microsoft Word",
      "Postman"
    ],
    correctAnswer: 0,
    explanation: "vLLM and TensorRT-LLM are serving frameworks optimized for LLM inference throughput. They use techniques like PagedAttention and kernel optimization to maximize GPU utilization and reduce inference latency."
  },
  {
    id: 30,
    domain: "Chapter 4: LLM-Powered Test Infrastructure",
    question: "Which of the following is a critical step in preparing data for fine-tuning an LLM for testing tasks?",
    options: [
      "Using raw, unprocessed data",
      "Deleting all test data",
      "Using only image data",
      "Data cleaning, deduplication, and formatting into instruction-response pairs"
    ],
    correctAnswer: 3,
    explanation: "Data preparation for fine-tuning involves cleaning (removing errors), deduplication (removing duplicates), and formatting data into instruction-response pairs. High-quality training data is essential for effective fine-tuning."
  },
  {
    id: 31,
    domain: "Chapter 4: LLM-Powered Test Infrastructure",
    question: "Which of the following is a technique for generating synthetic test data using LLMs?",
    options: [
      "Manual data entry",
      "Copying production data directly",
      "Using LLMs to generate realistic but artificial data that preserves statistical properties without exposing real data",
      "Deleting test data"
    ],
    correctAnswer: 2,
    explanation: "LLMs can generate synthetic test data that is realistic and preserves statistical properties of real data without exposing actual sensitive information. This is useful for privacy-preserving testing."
  },
  {
    id: 32,
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
  },

  // Chapter 5: Additional unique questions (8 questions) - NEW TOPICS
  {
    id: 33,
    domain: "Chapter 5: Deploying and Integrating GenAI",
    question: "What is the primary purpose of a 'GenAI adoption roadmap' in a test organization?",
    options: [
      "To plan phased implementation, identify use cases, and manage risks",
      "To immediately replace all testers with AI",
      "To avoid using any AI tools",
      "To reduce testing budgets to zero"
    ],
    correctAnswer: 0,
    explanation: "A GenAI adoption roadmap plans phased implementation, identifies high-value use cases, and manages risks. It ensures that GenAI adoption is strategic, controlled, and aligned with organizational goals."
  },
  {
    id: 34,
    domain: "Chapter 5: Deploying and Integrating GenAI",
    question: "Which of the following is a criterion for selecting between an LLM and an SLM for a testing task?",
    options: [
      "The model's logo color",
      "The model's training location",
      "The model's age",
      "The task complexity, cost constraints, and latency requirements"
    ],
    correctAnswer: 3,
    explanation: "Selection criteria include task complexity (simple tasks may use SLMs), cost constraints (SLMs are cheaper), and latency requirements (SLMs are faster). Complex reasoning tasks may require LLMs despite higher costs."
  },
  {
    id: 35,
    domain: "Chapter 5: Deploying and Integrating GenAI",
    question: "Which of the following is a metric for measuring ROI of GenAI tools in testing?",
    options: [
      "Number of testers fired",
      "Number of AI tools purchased",
      "Time saved in test case generation, defect detection rate improvement, and cost per test case",
      "Lines of code written"
    ],
    correctAnswer: 2,
    explanation: "ROI of GenAI tools in testing is measured by time saved in test case generation, defect detection rate improvement, and cost per test case. These metrics demonstrate whether the tool investment is delivering value."
  },
  {
    id: 36,
    domain: "Chapter 5: Deploying and Integrating GenAI",
    question: "Which of the following is a best practice for integrating GenAI tools with existing test management systems?",
    options: [
      "Replace all existing systems immediately",
      "Use APIs and connectors to integrate AI tools while maintaining current workflows",
      "Avoid all integration",
      "Use only manual data transfer"
    ],
    correctAnswer: 1,
    explanation: "Using APIs and connectors to integrate AI tools with existing test management systems preserves current workflows while adding AI capabilities. This minimizes disruption and allows gradual adoption."
  },
  {
    id: 37,
    domain: "Chapter 5: Deploying and Integrating GenAI",
    question: "Which of the following is a change management challenge when introducing GenAI to testing teams?",
    options: [
      "Resistance to change, fear of job displacement, and need for new skills training",
      "Testers will automatically adapt without any issues",
      "AI tools are always accepted immediately",
      "No training is needed"
    ],
    correctAnswer: 0,
    explanation: "Change management challenges include resistance to change, fear of job displacement, and the need for new skills training. Addressing these through communication, training, and demonstrating value is essential for successful adoption."
  },
  {
    id: 38,
    domain: "Chapter 5: Deploying and Integrating GenAI",
    question: "Which role is MOST responsible for integrating LLM-based tools into existing test automation frameworks?",
    options: [
      "Manual tester",
      "Business analyst",
      "Project manager",
      "Test automation engineer"
    ],
    correctAnswer: 3,
    explanation: "Test automation engineers are most responsible for integrating LLM-based tools into existing test automation frameworks. They have the technical skills to build APIs, handle tool integration, and maintain the automation infrastructure."
  },
  {
    id: 39,
    domain: "Chapter 5: Deploying and Integrating GenAI",
    question: "What is the primary purpose of governance policies for GenAI usage in testing organizations?",
    options: [
      "To prevent all use of AI tools",
      "To eliminate all testing roles",
      "To ensure responsible, secure, and compliant use of AI tools across the organization",
      "To reduce testing budgets"
    ],
    correctAnswer: 2,
    explanation: "Governance policies for GenAI usage ensure responsible, secure, and compliant use of AI tools. They address data privacy, security, compliance, quality control, and ethical considerations."
  },
  {
    id: 40,
    domain: "Chapter 5: Deploying and Integrating GenAI",
    question: "Which of the following is a characteristic of successful test process evolution in GenAI-enabled teams?",
    options: [
      "Testing remains completely unchanged",
      "Test planning, design, and execution incorporate AI-assisted generation, evaluation, and maintenance",
      "All testing becomes fully automated with no human involvement",
      "Testing is eliminated entirely"
    ],
    correctAnswer: 1,
    explanation: "Test process evolution in GenAI-enabled teams involves incorporating AI-assisted generation (test cases), evaluation (coverage analysis), and maintenance (updating tests). Humans remain in the loop for critical decisions and quality assurance."
  }
];

export const questions3: ExamQuestion[] = [
  // Section-based questions consolidated (40 questions total, similar structure)

  // Chapter 1: Consolidated unique questions (8 questions)
  {
    id: 1,
    domain: "Chapter 1: Introduction to GenAI for Testing",
    question: "Which of the following is a type of generative AI model used for text generation?",
    options: [
      "Large Language Model (LLM) based on the transformer architecture",
      "Support Vector Machine",
      "Decision Tree",
      "K-Means Clustering"
    ],
    correctAnswer: 0,
    explanation: "Large Language Models (LLMs) based on the transformer architecture are the primary generative AI models used for text generation in testing. They are pre-trained on large textual datasets and can generate coherent text for test tasks."
  },
  {
    id: 2,
    domain: "Chapter 1: Introduction to GenAI for Testing",
    question: "What is the primary difference between a vision-language model and a text-only LLM?",
    options: [
      "Vision-language models are always smaller",
      "Vision-language models cannot generate text",
      "Text-only LLMs are always more accurate",
      "Vision-language models can process both images and text"
    ],
    correctAnswer: 3,
    explanation: "Vision-language models (VLMs) can process both images and text, enabling them to understand visual content. This is useful for testing applications involving UI elements, screenshots, and visual interfaces."
  },
  {
    id: 3,
    domain: "Chapter 1: Introduction to GenAI for Testing",
    question: "What is the purpose of 'positional encoding' in transformer models?",
    options: [
      "To encrypt the input data",
      "To compress the model size",
      "To provide information about the position of tokens in the sequence",
      "To speed up training"
    ],
    correctAnswer: 2,
    explanation: "Positional encoding provides information about the position of tokens in the sequence. Since transformers process all tokens simultaneously, they need positional encoding to understand word order."
  },
  {
    id: 4,
    domain: "Chapter 1: Introduction to GenAI for Testing",
    question: "Which of the following is a characteristic of the transformer architecture?",
    options: [
      "It processes tokens sequentially one at a time",
      "It processes all tokens in parallel using self-attention",
      "It only works with numerical data",
      "It requires recurrent connections"
    ],
    correctAnswer: 1,
    explanation: "The transformer architecture processes all tokens in parallel using self-attention, rather than sequentially like RNNs. This enables efficient processing of long sequences and captures long-range dependencies."
  },
  {
    id: 5,
    domain: "Chapter 1: Introduction to GenAI for Testing",
    question: "What is the purpose of 'fine-tuning' a pre-trained model?",
    options: [
      "To adapt the model to specific tasks or domains with additional training",
      "To make the model smaller",
      "To remove all parameters",
      "To make the model run faster"
    ],
    correctAnswer: 0,
    explanation: "Fine-tuning adapts a pre-trained model to specific tasks or domains by training it on additional, task-specific data. This improves performance on the target task while retaining general knowledge."
  },
  {
    id: 6,
    domain: "Chapter 1: Introduction to GenAI for Testing",
    question: "What is the primary advantage of using a reasoning model for test planning?",
    options: [
      "Reasoning models are always faster",
      "Reasoning models are always cheaper",
      "Reasoning models require less context",
      "Reasoning models can perform step-by-step logical analysis and identify edge cases"
    ],
    correctAnswer: 3,
    explanation: "Reasoning models excel at step-by-step logical analysis, which helps identify edge cases, dependencies, and risks in test planning. While they are slower and more expensive, their analytical capabilities are valuable for complex tasks."
  },
  {
    id: 7,
    domain: "Chapter 1: Introduction to GenAI for Testing",
    question: "A testing team needs to choose between an LLM and an SLM for generating test data. The task is simple, requires high throughput, and cost is a concern. Which is the MOST appropriate choice?",
    options: [
      "LLM for maximum accuracy",
      "Both simultaneously",
      "SLM for efficiency and cost-effectiveness",
      "Neither, use manual testing"
    ],
    correctAnswer: 2,
    explanation: "For simple, high-throughput tasks where cost is a concern, an SLM (Small Language Model) is the most appropriate choice. SLMs are faster, cheaper, and more efficient for narrow tasks like test data generation."
  },
  {
    id: 8,
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

  // Chapter 2: Consolidated unique questions (8 questions)
  {
    id: 9,
    domain: "Chapter 2: Prompt Engineering for Testing",
    question: "Which of the following is a best practice for writing prompts for test case generation?",
    options: [
      "Be specific about output format, constraints, and requirements",
      "Use vague language to allow creativity",
      "Keep prompts as short as possible",
      "Use technical jargon without explanation"
    ],
    correctAnswer: 0,
    explanation: "Specific prompts that clearly define output format, constraints, and requirements produce better results. Vague prompts lead to inconsistent output, while overly short prompts may miss critical context."
  },
  {
    id: 10,
    domain: "Chapter 2: Prompt Engineering for Testing",
    question: "Which of the following is an example of the 'input data' component in a structured prompt for testing?",
    options: [
      "The model's training dataset",
      "The API key for authentication",
      "The model's hyperparameters",
      "The specific user story, requirement, or code snippet to be tested"
    ],
    correctAnswer: 3,
    explanation: "The 'input data' component is the specific content the model should process (e.g., a user story, requirement, or code snippet). This is distinct from the context, instruction, and constraints components."
  },
  {
    id: 11,
    domain: "Chapter 2: Prompt Engineering for Testing",
    question: "What is the primary advantage of using 'system prompts' in a testing tool?",
    options: [
      "They reduce API costs",
      "They make the model run faster",
      "They set consistent behavior, role, and constraints across all user interactions",
      "They eliminate the need for user prompts"
    ],
    correctAnswer: 2,
    explanation: "System prompts set consistent behavior, role, and constraints across all user interactions. This ensures that all generated test cases adhere to the same standards and formatting rules."
  },
  {
    id: 12,
    domain: "Chapter 2: Prompt Engineering for Testing",
    question: "Which metric measures the proportion of generated test cases that are relevant to the requirements?",
    options: [
      "Diversity score",
      "Relevance score",
      "Execution success rate",
      "Time efficiency"
    ],
    correctAnswer: 1,
    explanation: "The relevance score measures how well generated test cases align with the requirements. A high relevance score indicates that most generated test cases are applicable to the feature being tested."
  },
  {
    id: 13,
    domain: "Chapter 2: Prompt Engineering for Testing",
    question: "Which technique is MOST appropriate for generating test data that must include specific boundary values (e.g., age 17, 18, 19)?",
    options: [
      "Few-shot prompting with boundary value examples",
      "Zero-shot prompting without constraints",
      "Random prompting",
      "Removing the constraints component"
    ],
    correctAnswer: 0,
    explanation: "Few-shot prompting with boundary value examples is most effective for generating test data with specific boundary values. Examples help the model understand the pattern and generate appropriate boundary conditions."
  },
  {
    id: 14,
    domain: "Chapter 2: Prompt Engineering for Testing",
    question: "Which of the following is a best practice for managing prompts in a testing team?",
    options: [
      "Each tester writes their own prompts without sharing",
      "Use the same prompt for all testing tasks",
      "Never review or update prompts",
      "Maintain a prompt library with version control and documentation"
    ],
    correctAnswer: 3,
    explanation: "Maintaining a prompt library with version control and documentation ensures consistency, allows knowledge sharing, and enables continuous improvement. It prevents the 'prompt drift' problem where different team members use different prompts."
  },
  {
    id: 15,
    domain: "Chapter 2: Prompt Engineering for Testing",
    question: "What is the primary purpose of 'output format constraints' in a prompt for test case generation?",
    options: [
      "To make the output look good",
      "To reduce the number of tokens",
      "To ensure the generated test cases can be parsed and integrated with test management tools",
      "To make the model run faster"
    ],
    correctAnswer: 2,
    explanation: "Output format constraints ensure generated test cases are structured in a way that can be parsed and integrated with test management tools, automation frameworks, and CI/CD pipelines."
  },
  {
    id: 16,
    domain: "Chapter 2: Prompt Engineering for Testing",
    question: "Which of the following is a risk when prompts are not versioned in a testing team?",
    options: [
      "The model will run faster",
      "Different team members may use different prompts, leading to inconsistent test case quality",
      "API costs will decrease",
      "The model will become more accurate"
    ],
    correctAnswer: 1,
    explanation: "Without prompt versioning, different team members may use different prompt versions, leading to inconsistent test case quality. Versioning ensures everyone uses the same, tested prompts and allows tracking of improvements."
  },

  // Chapter 3: Consolidated unique questions (8 questions)
  {
    id: 17,
    domain: "Chapter 3: Managing Risks of GenAI in Testing",
    question: "Which of the following is a key component of the NIST AI Risk Management Framework (AI RMF)?",
    options: [
      "Govern, Map, Measure, Manage",
      "Plan, Do, Check, Act",
      "Input, Process, Output, Store",
      "Train, Validate, Test, Deploy"
    ],
    correctAnswer: 0,
    explanation: "The NIST AI RMF consists of four key functions: Govern (establishing policies), Map (identifying risks and context), Measure (evaluating risks), and Manage (mitigating risks). This framework helps organizations manage AI risks systematically."
  },
  {
    id: 18,
    domain: "Chapter 3: Managing Risks of GenAI in Testing",
    question: "Which of the following is a type of bias that occurs when training data reflects historical prejudices or inequalities?",
    options: [
      "Selection bias",
      "Confirmation bias",
      "Measurement bias",
      "Historical bias"
    ],
    correctAnswer: 3,
    explanation: "Historical bias occurs when training data reflects historical prejudices, stereotypes, or inequalities. When an LLM is trained on this data, it may reproduce these biases in generated test cases or assumptions."
  },
  {
    id: 19,
    domain: "Chapter 3: Managing Risks of GenAI in Testing",
    question: "What is the primary purpose of AI model cards in the context of testing?",
    options: [
      "To store the model's training data",
      "To encrypt the model weights",
      "To document the model's intended use, limitations, biases, and performance metrics",
      "To replace test documentation"
    ],
    correctAnswer: 2,
    explanation: "AI model cards document a model's intended use, limitations, known biases, performance metrics, and ethical considerations. This transparency helps testing teams understand when and how to use the model appropriately."
  },
  {
    id: 20,
    domain: "Chapter 3: Managing Risks of GenAI in Testing",
    question: "Which of the following is a technique for red teaming an LLM used in testing?",
    options: [
      "Using the model only for normal test cases",
      "Systematically testing the model with adversarial inputs to find vulnerabilities and harmful outputs",
      "Ignoring security testing",
      "Only testing positive scenarios"
    ],
    correctAnswer: 1,
    explanation: "Red teaming involves systematically testing the LLM with adversarial inputs to find vulnerabilities, harmful outputs, and failure modes. This proactive approach identifies risks before the model is used in production testing workflows."
  },
  {
    id: 21,
    domain: "Chapter 3: Managing Risks of GenAI in Testing",
    question: "Which of the following is a data minimization technique for using LLMs in testing?",
    options: [
      "Using only the minimum necessary data and anonymizing sensitive fields",
      "Sending all production data to the LLM",
      "Storing all test data in public repositories",
      "Using the largest possible datasets"
    ],
    correctAnswer: 0,
    explanation: "Data minimization involves using only the minimum necessary data and anonymizing sensitive fields. This reduces privacy risks and ensures compliance with regulations like GDPR."
  },
  {
    id: 22,
    domain: "Chapter 3: Managing Risks of GenAI in Testing",
    question: "A tester is using an LLM to generate test cases for a healthcare application. The user stories contain patient names and medical record numbers. Which risk is MOST critical?",
    options: [
      "The model will generate too few test cases",
      "The test cases will be too complex",
      "The model will run too slowly",
      "Sending patient names and medical record numbers to an external LLM API risks unintentional data exposure and violates data privacy regulations like GDPR"
    ],
    correctAnswer: 3,
    explanation: "Sending personally identifiable information (PII) such as patient names and medical record numbers to an external LLM API risks unintentional data exposure and violates data privacy regulations like GDPR. The tester must anonymize data, use a private LLM, or process data on-premise."
  },
  {
    id: 23,
    domain: "Chapter 3: Managing Risks of GenAI in Testing",
    question: "Which of the following is a characteristic of a reasoning error vs. a hallucination?",
    options: [
      "Reasoning errors are always intentional",
      "Reasoning errors are always correct",
      "Reasoning errors involve incorrect logic applied to real information, while hallucinations invent false information",
      "There is no difference between them"
    ],
    correctAnswer: 2,
    explanation: "A reasoning error involves incorrect logic or flawed reasoning applied to real information. A hallucination involves inventing false information. Both require detection, but reasoning errors are identified through logical analysis while hallucinations require fact-checking."
  },
  {
    id: 24,
    domain: "Chapter 3: Managing Risks of GenAI in Testing",
    question: "Which of the following is a mitigation strategy for reducing the environmental impact of using LLMs in testing?",
    options: [
      "Using the largest model available for all tasks",
      "Using smaller models (SLMs) for simple tasks and optimizing inference efficiency",
      "Running models continuously 24/7",
      "Using multiple models simultaneously"
    ],
    correctAnswer: 1,
    explanation: "Using smaller models (SLMs) for simple tasks and optimizing inference efficiency reduces energy consumption. This is an important mitigation strategy for the environmental impact of LLM usage."
  },

  // Chapter 4: Consolidated unique questions (8 questions)
  {
    id: 25,
    domain: "Chapter 4: LLM-Powered Test Infrastructure",
    question: "What is the primary purpose of 'semantic similarity retrieval' in a RAG system?",
    options: [
      "To find content with similar meaning regardless of exact words",
      "To find exact keyword matches",
      "To encrypt the data",
      "To compress the model"
    ],
    correctAnswer: 0,
    explanation: "Semantic similarity retrieval finds content with similar meaning regardless of exact words. This is more powerful than keyword search because it understands concepts and context."
  },
  {
    id: 26,
    domain: "Chapter 4: LLM-Powered Test Infrastructure",
    question: "Which of the following is a benefit of fine-tuning an LLM for testing?",
    options: [
      "It reduces the model's size",
      "It makes the model run faster",
      "It eliminates the need for prompts",
      "It improves the model's understanding of domain-specific testing terminology"
    ],
    correctAnswer: 3,
    explanation: "Fine-tuning improves the model's understanding of domain-specific testing terminology and patterns. This leads to better test case generation, defect analysis, and test planning."
  },
  {
    id: 27,
    domain: "Chapter 4: LLM-Powered Test Infrastructure",
    question: "What is the primary purpose of 'prompt management' in LLMOps?",
    options: [
      "To make prompts look good",
      "To reduce the model's memory usage",
      "To version, test, and deploy prompts systematically",
      "To encrypt prompt data"
    ],
    correctAnswer: 2,
    explanation: "Prompt management in LLMOps involves versioning, testing, and deploying prompts systematically. This ensures consistency and allows tracking of which prompt versions produce the best results."
  },
  {
    id: 28,
    domain: "Chapter 4: LLM-Powered Test Infrastructure",
    question: "Which of the following is a component of a RAG pipeline?",
    options: [
      "Training, validation, testing, deployment",
      "Chunking, embedding, retrieval, generation",
      "Planning, coding, testing, deployment",
      "Input, processing, output, storage"
    ],
    correctAnswer: 1,
    explanation: "A RAG pipeline typically includes: chunking (breaking documents into pieces), embedding (converting to vectors), retrieval (finding relevant chunks), and generation (using retrieved context to generate output)."
  },
  {
    id: 29,
    domain: "Chapter 4: LLM-Powered Test Infrastructure",
    question: "What is the primary advantage of using a vector database over a traditional database for RAG?",
    options: [
      "Vector databases enable semantic similarity search based on meaning",
      "Vector databases are always faster",
      "Vector databases are cheaper",
      "Vector databases are easier to set up"
    ],
    correctAnswer: 0,
    explanation: "Vector databases enable semantic similarity search based on meaning rather than exact keyword matches. This is essential for RAG systems that need to find relevant content based on conceptual similarity."
  },
  {
    id: 30,
    domain: "Chapter 4: LLM-Powered Test Infrastructure",
    question: "Which of the following is a risk of using LLM-powered agents for testing?",
    options: [
      "They are always more accurate than humans",
      "They cannot process text",
      "They are always deterministic",
      "They may make decisions without human oversight that have unintended consequences"
    ],
    correctAnswer: 3,
    explanation: "LLM-powered agents may make decisions without human oversight that have unintended consequences. This is a risk that requires careful design of human-in-the-loop controls and approval workflows."
  },
  {
    id: 31,
    domain: "Chapter 4: LLM-Powered Test Infrastructure",
    question: "What is the primary purpose of 'feedback loops' in LLMOps for testing?",
    options: [
      "To make the model run faster",
      "To reduce the model's size",
      "To improve the model's performance over time based on test results and human feedback",
      "To eliminate the need for prompts"
    ],
    correctAnswer: 2,
    explanation: "Feedback loops in LLMOps improve the model's performance over time based on test results and human feedback. This continuous improvement is essential for maintaining quality."
  },
  {
    id: 32,
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

  // Chapter 5: Additional unique questions (8 questions)
  {
    id: 33,
    domain: "Chapter 5: Deploying and Integrating GenAI",
    question: "Which of the following is a risk of rapid GenAI adoption without proper planning?",
    options: [
      "It may lead to inconsistent practices, security risks, and wasted resources",
      "It always improves test quality",
      "It reduces testing time",
      "It eliminates the need for test management"
    ],
    correctAnswer: 0,
    explanation: "Rapid GenAI adoption without proper planning may lead to inconsistent practices, security risks, and wasted resources. A phased approach with proper governance is essential."
  },
  {
    id: 34,
    domain: "Chapter 5: Deploying and Integrating GenAI",
    question: "What is the primary purpose of governance in GenAI adoption?",
    options: [
      "To prevent all use of AI tools",
      "To eliminate all testing roles",
      "To reduce testing budgets",
      "To ensure AI tools are used responsibly, securely, and consistently"
    ],
    correctAnswer: 3,
    explanation: "Governance in GenAI adoption ensures that AI tools are used responsibly, securely, and consistently. It addresses data privacy, security, compliance, and quality control."
  },
  {
    id: 35,
    domain: "Chapter 5: Deploying and Integrating GenAI",
    question: "What is the primary purpose of a pilot project in GenAI adoption?",
    options: [
      "To immediately deploy AI across all teams",
      "To avoid using any AI tools",
      "To test GenAI tools on a small scale, learn lessons, and demonstrate value",
      "To eliminate all testing roles"
    ],
    correctAnswer: 2,
    explanation: "A pilot project tests GenAI tools on a small scale, allowing the organization to learn lessons, identify risks, and demonstrate value before scaling to larger teams."
  },
  {
    id: 36,
    domain: "Chapter 5: Deploying and Integrating GenAI",
    question: "Which of the following is a best practice for managing GenAI tools in a testing team?",
    options: [
      "Allowing each tester to use any tool they want without oversight",
      "Establishing approved tools, usage guidelines, and review processes",
      "Avoiding all AI tools",
      "Using only one tool for all tasks"
    ],
    correctAnswer: 1,
    explanation: "Establishing approved tools, usage guidelines, and review processes ensures that GenAI tools are used consistently and responsibly. This prevents Shadow AI and maintains quality."
  },
  {
    id: 37,
    domain: "Chapter 5: Deploying and Integrating GenAI",
    question: "A test manager is creating a GenAI adoption strategy for their team. They should start with which phase?",
    options: [
      "Pilot project with a small team to test and evaluate",
      "Immediate deployment to all teams",
      "Avoiding all AI tools",
      "Replacing all testers with AI"
    ],
    correctAnswer: 0,
    explanation: "A pilot project with a small team is the recommended starting phase for GenAI adoption. This allows the organization to test tools, identify risks, and demonstrate value before scaling to larger teams."
  },
  {
    id: 38,
    domain: "Chapter 5: Deploying and Integrating GenAI",
    question: "Which of the following is a risk of using public LLM APIs for testing in regulated industries?",
    options: [
      "The model is always more accurate",
      "The model is always faster",
      "The model is always cheaper",
      "Sensitive data may be exposed to third-party providers"
    ],
    correctAnswer: 3,
    explanation: "Using public LLM APIs for testing in regulated industries may expose sensitive data to third-party providers. This requires data anonymization, use of private LLMs, or on-premise deployment."
  },
  {
    id: 39,
    domain: "Chapter 5: Deploying and Integrating GenAI",
    question: "Which of the following is essential for successful GenAI adoption in a testing team?",
    options: [
      "Replacing all human testers with AI",
      "Using AI tools without any evaluation",
      "Combining AI tools with human expertise, oversight, and governance",
      "Avoiding all AI tools"
    ],
    correctAnswer: 2,
    explanation: "Successful GenAI adoption combines AI tools with human expertise, oversight, and governance. AI tools enhance productivity, but human testers provide critical evaluation, domain knowledge, and quality assurance."
  },
  {
    id: 40,
    domain: "Chapter 5: Deploying and Integrating GenAI",
    question: "Which of the following is a key consideration when scaling GenAI adoption in testing?",
    options: [
      "Replacing all human testers immediately",
      "Training, governance, and continuous evaluation of AI tools",
      "Avoiding all AI tools",
      "Using only one LLM provider"
    ],
    correctAnswer: 1,
    explanation: "Scaling GenAI adoption requires training (building team skills), governance (ensuring responsible use), and continuous evaluation (monitoring quality and ROI). These factors ensure sustainable adoption."
  }
];
