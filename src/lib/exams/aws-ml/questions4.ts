import type { ExamQuestion } from '@/types';

export const questions: ExamQuestion[] = [
  // Topic 1: AWS AI Services Deep Comparisons (2 questions)
  {
    id: 1001,
    domain: "Domain 2: ML Model Development",
    question: "A company receives thousands of scanned invoices and needs to extract vendor names, invoice numbers, and line-item details into a structured database. They also want to detect if any invoices contain suspicious logos or watermarks. Which AWS service combination should they use?",
    options: [
      "Amazon Rekognition for both document extraction and logo detection",
      "Amazon Textract for structured data extraction and Amazon Rekognition for image analysis",
      "Amazon Comprehend for entity extraction and Amazon Kendra for document search",
      "Amazon Polly for text-to-speech and Amazon Translate for language translation"
    ],
    correctAnswer: 1,
    explanation: "Amazon Textract is specifically designed for extracting structured data from scanned documents and forms, including key-value pairs and tables. Amazon Rekognition is for image analysis tasks like object detection, facial recognition, and content moderation. Comprehend is for NLP on text, and Kendra is for search. Polly and Translate are irrelevant to this use case."
  },
  {
    id: 1002,
    domain: "Domain 2: ML Model Development",
    question: "A retail company wants to predict which products a customer will likely purchase next based on their browsing history and past transactions. They also need to forecast inventory demand for the next quarter to optimize warehouse stock levels. Which AWS services should they use?",
    options: [
      "Amazon Personalize for both product recommendations and inventory demand forecasting",
      "Amazon Forecast for both recommendations and demand forecasting",
      "Amazon Personalize for recommendations and Amazon Forecast for demand forecasting",
      "Amazon SageMaker Autopilot for both use cases"
    ],
    correctAnswer: 2,
    explanation: "Amazon Personalize is purpose-built for real-time recommendations based on user-item interactions and contextual data. Amazon Forecast is designed for time-series forecasting, including demand planning and inventory optimization. SageMaker Autopilot can solve both but requires more setup and is not purpose-built for either specific use case."
  },

  // Topic 2: Foundation Model & Generative AI Concepts (2 questions)
  {
    id: 1003,
    domain: "Domain 2: ML Model Development",
    question: "An enterprise wants to build an internal knowledge base assistant that can answer questions about company policies using a large repository of internal documents. The policies are updated frequently, and the model must provide answers based on the most current information without hallucinating. Which approach is MOST appropriate?",
    options: [
      "Fine-tune a foundation model on the entire document corpus and retrain weekly",
      "Use Retrieval-Augmented Generation (RAG) with Amazon Bedrock and Amazon Kendra",
      "Prompt engineer a generic foundation model with all documents in the context window",
      "Train a custom model from scratch using SageMaker on the document repository"
    ],
    correctAnswer: 1,
    explanation: "RAG retrieves relevant documents from a knowledge base at inference time and augments the prompt with that context, ensuring answers are grounded in current information without requiring model retraining. Fine-tuning requires retraining when documents change, and context windows have token limits that prevent fitting entire repositories. Training from scratch is prohibitively expensive."
  },
  {
    id: 1004,
    domain: "Domain 2: ML Model Development",
    question: "A pharmaceutical company needs to predict molecular binding affinity for drug discovery. They have proprietary experimental data that no publicly available foundation model has been trained on. Which approach should they take?",
    options: [
      "Use Amazon Bedrock with a general-purpose foundation model and prompt engineering",
      "Use Amazon SageMaker to train a custom deep learning model on their proprietary data",
      "Use Amazon Comprehend with custom entity recognition for molecular structures",
      "Use Amazon Rekognition Custom Labels for image-based drug screening"
    ],
    correctAnswer: 1,
    explanation: "For specialized scientific tasks with proprietary data that foundation models have not been trained on, custom model training with SageMaker is the appropriate approach. Bedrock's foundation models lack domain-specific knowledge for molecular binding. Comprehend and Rekognition are not designed for molecular binding prediction."
  },

  // Topic 3: Distributed Tracing & Monitoring (2 questions)
  {
    id: 1005,
    domain: "Domain 4: Monitoring, Maintenance, and Security",
    question: "An ML Engineer observes sporadic high latency in a SageMaker endpoint that is part of a microservices architecture. The endpoint is invoked through API Gateway, processed by a Lambda function, and then calls the SageMaker Runtime. Which AWS service should they use to trace the request path and identify the bottleneck?",
    options: [
      "Amazon CloudWatch Logs Insights",
      "AWS X-Ray with service maps and subsegments",
      "Amazon CloudWatch Metrics with custom dashboards",
      "AWS CloudTrail with data event logging"
    ],
    correctAnswer: 1,
    explanation: "AWS X-Ray provides distributed tracing across microservices, allowing you to trace requests from API Gateway through Lambda to SageMaker Runtime and identify where latency is introduced. CloudWatch Logs Insights analyzes logs, CloudWatch Metrics monitors aggregate metrics, and CloudTrail logs API calls but does not trace request latency."
  },
  {
    id: 1006,
    domain: "Domain 4: Monitoring, Maintenance, and Security",
    question: "An ML pipeline has started failing intermittently during feature engineering steps. The pipeline logs are stored in CloudWatch Logs. The engineer needs to find specific error patterns across thousands of log entries from multiple training runs. Which tool is MOST appropriate?",
    options: [
      "Amazon CloudWatch Logs Insights with query language",
      "AWS X-Ray with distributed tracing",
      "Amazon Athena with federated queries to CloudWatch Logs",
      "AWS CloudTrail with event history search"
    ],
    correctAnswer: 0,
    explanation: "CloudWatch Logs Insights provides a purpose-built query language for searching and analyzing log data in CloudWatch Logs, including pattern detection, aggregation, and filtering. X-Ray is for tracing distributed requests, not analyzing log contents. Athena can query logs but requires additional setup. CloudTrail is for API auditing, not log analysis."
  },

  // Topic 4: Business/Product Terminology in ML (1 question)
  {
    id: 1007,
    domain: "Domain 4: Monitoring, Maintenance, and Security",
    question: "A streaming service measures the business impact of its recommendation engine. After deploying a new model, they observe that the average number of content hours watched per user increased by 15%, but the Average Revenue Per User (ARPU) only increased by 2%. Which conclusion is MOST appropriate?",
    options: [
      "The model improved engagement but did not significantly impact monetization",
      "The model failed because engagement metrics increased without proportional revenue growth",
      "The model should be retrained with only revenue-related features",
      "ARPU is not a relevant metric for recommendation systems"
    ],
    correctAnswer: 0,
    explanation: "ARPU measures monetization per user, while engagement metrics like hours watched measure content consumption. A 15% engagement increase with only 2% ARPU growth suggests users are consuming more content but not converting to higher revenue. This indicates engagement improved without proportional monetization impact, not that the model failed."
  },

  // Topic 5: Advanced Security & Compliance (1 question)
  {
    id: 1008,
    domain: "Domain 4: Monitoring, Maintenance, and Security",
    question: "A financial services company needs to invoke SageMaker endpoints from their VPC without traffic traversing the public internet. They also need to restrict access so only specific VPCs can invoke the endpoint. Which AWS networking feature should they implement?",
    options: [
      "AWS Transit Gateway with VPC peering",
      "AWS PrivateLink with interface VPC endpoints for SageMaker Runtime",
      "Amazon CloudFront with origin access identity",
      "AWS Direct Connect with public virtual interfaces"
    ],
    correctAnswer: 1,
    explanation: "AWS PrivateLink with interface VPC endpoints enables private connectivity between a VPC and SageMaker services without traversing the public internet. Endpoint policies can restrict access to specific VPCs or principals. Transit Gateway is for inter-VPC routing, CloudFront is a CDN, and Direct Connect provides dedicated connectivity but does not natively restrict endpoint access."
  },

  // Topic 6: Multiple Response Questions (1 question with 3 correct answers)
  {
    id: 1009,
    domain: "Domain 2: ML Model Development",
    question: "Which THREE of the following AWS services can be used to build a complete document processing pipeline that includes text extraction, entity recognition, and intelligent search?",
    options: [
      "Amazon Textract",
      "Amazon Comprehend",
      "Amazon Kendra",
      "Amazon Polly",
      "Amazon Translate"
    ],
    correctAnswer: [0, 1, 2],
    explanation: "Amazon Textract extracts text and structured data from documents, Amazon Comprehend performs NLP tasks like entity recognition and sentiment analysis on the extracted text, and Amazon Kendra provides intelligent search across the processed documents. Polly is text-to-speech and Translate is for language translation, neither of which are core to document processing pipelines."
  },

  // Additional questions to round out questions array (1 more)
  {
    id: 1010,
    domain: "Domain 2: ML Model Development",
    question: "A media company needs to analyze customer support call recordings to identify recurring complaints and sentiment trends. They need to first convert the audio into text and then analyze the text for sentiment and key phrases. Which AWS service sequence is correct?",
    options: [
      "Amazon Transcribe for sentiment analysis and Amazon Comprehend for speech-to-text",
      "Amazon Comprehend for speech-to-text and Amazon Transcribe for sentiment analysis",
      "Amazon Transcribe for speech-to-text and Amazon Comprehend for NLP analysis",
      "Amazon Polly for speech-to-text and Amazon Lex for sentiment analysis"
    ],
    correctAnswer: 2,
    explanation: "Amazon Transcribe converts speech to text, which is the necessary first step for analyzing audio recordings. Amazon Comprehend then performs natural language processing tasks like sentiment analysis, entity recognition, and key phrase extraction on the transcribed text. Polly is text-to-speech, and Lex is for building conversational interfaces."
  }
];

export const questions2: ExamQuestion[] = [
  // Topic 1: AWS AI Services Deep Comparisons (3 questions)
  {
    id: 1011,
    domain: "Domain 2: ML Model Development",
    question: "A startup wants to build a chatbot that can answer general knowledge questions and draft marketing copy. They have no ML engineers and need a solution they can deploy quickly without managing infrastructure. Which AWS service should they use?",
    options: [
      "Amazon SageMaker with custom model training",
      "Amazon Bedrock with foundation models via API",
      "Amazon Personalize with real-time recommendations",
      "Amazon Forecast with time-series predictions"
    ],
    correctAnswer: 1,
    explanation: "Amazon Bedrock provides access to foundation models via a simple API, enabling rapid deployment of generative AI applications without infrastructure management or ML expertise. SageMaker requires ML engineering for custom model development. Personalize and Forecast are specialized services for recommendations and forecasting, not general-purpose chatbots."
  },
  {
    id: 1012,
    domain: "Domain 2: ML Model Development",
    question: "A company wants to build a self-service customer support system where users can speak naturally to resolve issues like password resets and order tracking. The system should handle both voice calls and text chat. Which AWS service is MOST appropriate?",
    options: [
      "Amazon Connect with built-in AI agents",
      "Amazon Lex for building conversational interfaces",
      "Amazon Polly for voice synthesis",
      "Amazon Transcribe for speech-to-text"
    ],
    correctAnswer: 1,
    explanation: "Amazon Lex is designed for building conversational interfaces that can process both voice and text inputs, understand user intent, and fulfill requests through backend integrations. While Connect is a contact center service that can integrate with Lex, Lex itself is the core service for building the conversational AI. Polly and Transcribe are supporting services for voice synthesis and speech recognition, not end-to-end conversational AI."
  },
  {
    id: 1013,
    domain: "Domain 2: ML Model Development",
    question: "An e-commerce platform wants to build personalized product recommendations for users based on browsing history, purchase behavior, and real-time clickstream data. Which AWS service is purpose-built for this use case?",
    options: [
      "Amazon Kendra with custom query ranking profiles",
      "Amazon Personalize with real-time event tracking and recipe selection",
      "Amazon Lex with custom intent classification for product matching",
      "Amazon Bedrock with prompt engineering for recommendation generation"
    ],
    correctAnswer: 1,
    explanation: "Amazon Personalize is a fully managed recommendation service that handles real-time event ingestion, recipe selection (e.g., HRNN, SIMS), and personalized ranking. Kendra is for enterprise search, Lex is for conversational AI, and while Bedrock can generate recommendations, it is not purpose-built for real-time personalized recommendation systems with built-in event tracking."
  },

  // Topic 2: Foundation Model & Generative AI Concepts (3 questions)
  {
    id: 1014,
    domain: "Domain 2: ML Model Development",
    question: "An ML Engineer is designing a generative AI system that can autonomously break down complex tasks into sub-tasks, invoke external APIs to retrieve data, and synthesize a final response. Which AWS feature is MOST appropriate for this agentic workflow?",
    options: [
      "Amazon Bedrock Agents with action groups and knowledge bases",
      "Amazon SageMaker Training Jobs with distributed computing",
      "Amazon Comprehend with custom entity recognition",
      "Amazon Rekognition with video analysis"
    ],
    correctAnswer: 0,
    explanation: "Amazon Bedrock Agents supports agentic workflows by enabling foundation models to break down tasks, invoke external APIs through action groups, and retrieve information from knowledge bases to synthesize responses. SageMaker Training Jobs are for model training, not autonomous task execution. Comprehend and Rekognition are specialized AI services, not agentic workflow platforms."
  },
  {
    id: 1015,
    domain: "Domain 2: ML Model Development",
    question: "A team is using Amazon Bedrock to generate technical documentation. They notice the model sometimes produces inconsistent output formatting and includes irrelevant details. Which prompt engineering technique is MOST likely to improve consistency?",
    options: [
      "Increasing the model temperature to 1.0 for more creative output",
      "Using chain-of-thought prompting with explicit formatting instructions and few-shot examples",
      "Removing all system prompts to reduce token consumption",
      "Increasing the max token limit to the maximum allowed"
    ],
    correctAnswer: 1,
    explanation: "Chain-of-thought prompting with explicit formatting instructions and few-shot examples guides the model to produce consistent, well-structured output. High temperature increases randomness, which worsens consistency. Removing system prompts reduces guidance, and increasing max tokens does not address formatting or relevance issues."
  },
  {
    id: 1016,
    domain: "Domain 2: ML Model Development",
    question: "An ML team is evaluating a text summarization model for a news aggregation platform. They need to compare generated summaries against human-written reference summaries. Which metric is MOST appropriate for measuring semantic overlap between generated and reference text?",
    options: [
      "Perplexity, which measures the model's confidence in its predictions",
      "ROUGE score, which measures overlap of n-grams and longest common subsequences",
      "BLEU score, which is primarily used for machine translation evaluation",
      "Accuracy, which measures exact token matches"
    ],
    correctAnswer: 1,
    explanation: "ROUGE (Recall-Oriented Understudy for Gisting Evaluation) is specifically designed for evaluating text summarization by measuring n-gram overlap and longest common subsequences between generated and reference summaries. Perplexity measures model confidence, not output quality. BLEU is optimized for translation. Accuracy is inappropriate for natural language generation because exact token matching is too strict."
  },

  // Topic 3: Distributed Tracing & Monitoring (1 question)
  {
    id: 1017,
    domain: "Domain 4: Monitoring, Maintenance, and Security",
    question: "An ML application consists of multiple microservices: a feature store, a preprocessing service, and a SageMaker inference endpoint. The team needs to trace a single prediction request across all these services to identify which component adds the most latency. Which AWS service should they configure?",
    options: [
      "Amazon CloudWatch Synthetics with canary scripts",
      "AWS X-Ray with service maps and trace annotations",
      "AWS CloudTrail with event logging",
      "Amazon CloudWatch Logs with log groups"
    ],
    correctAnswer: 1,
    explanation: "AWS X-Ray provides distributed tracing that follows a single request across multiple microservices, showing service maps and timing for each component. CloudWatch Synthetics tests endpoints from external locations. CloudTrail logs API calls. CloudWatch Logs stores logs but does not correlate them into a single request trace."
  },

  // Topic 4: Business/Product Terminology in ML (2 questions)
  {
    id: 1018,
    domain: "Domain 4: Monitoring, Maintenance, and Security",
    question: "A company is optimizing the cost of their ML pipeline. They discover that 70% of their ML budget is spent on training jobs, while only 30% is spent on inference. However, the model accuracy in production is degrading due to concept drift. Where should they focus cost optimization efforts?",
    options: [
      "Reduce inference costs by switching to smaller instance types",
      "Reduce training costs by using spot instances and automated retraining pipelines",
      "Eliminate model monitoring to reduce operational overhead",
      "Increase training data size regardless of cost to improve accuracy"
    ],
    correctAnswer: 1,
    explanation: "Since training consumes 70% of the budget and the model suffers from concept drift, optimizing training costs through spot instances and efficient retraining pipelines addresses both the budget and accuracy issues. Reducing inference costs would only address 30% of spend. Eliminating monitoring worsens drift detection. Increasing training data size without cost optimization is counterproductive."
  },
  {
    id: 1019,
    domain: "Domain 4: Monitoring, Maintenance, and Security",
    question: "An e-commerce company deploys a new recommendation model and observes the following: Click-Through Rate (CTR) increased by 20%, but the conversion rate (purchases per click) decreased by 10%. What is the MOST likely interpretation?",
    options: [
      "The model is recommending more relevant products, leading to more clicks but the same number of purchases",
      "The model is recommending more clickbait-style items that attract clicks but do not convert to purchases",
      "The model has failed and should be immediately rolled back",
      "Both metrics are irrelevant for evaluating recommendation quality"
    ],
    correctAnswer: 1,
    explanation: "A higher CTR with lower conversion rate suggests the model is surfacing items that attract clicks but do not lead to purchases. This could indicate the model is optimizing for click appeal rather than purchase intent. The model has not necessarily failed, but it needs rebalancing of optimization objectives to consider both engagement and conversion."
  },

  // Topic 5: Advanced Security & Compliance (1 question)
  {
    id: 1020,
    domain: "Domain 4: Monitoring, Maintenance, and Security",
    question: "A company needs to share a SageMaker model artifact stored in an S3 bucket with an external partner's AWS account. They want to grant access without creating IAM roles in the partner's account. Which approach is MOST appropriate?",
    options: [
      "Use IAM policies attached to the partner's IAM users",
      "Use a resource-based S3 bucket policy that grants access to the partner's account",
      "Use AWS Organizations with Service Control Policies",
      "Use AWS KMS key policies with external key stores"
    ],
    correctAnswer: 1,
    explanation: "Resource-based policies (like S3 bucket policies) are attached to the resource itself and can grant access to external AWS principals without requiring IAM roles in the external account. IAM policies are attached to identities in the same account. SCPs govern what an account can do, not grant cross-account access to specific resources. KMS key policies control encryption key access, not S3 object access."
  },

  // Topic 6: Multiple Response Questions (1 question with 3 correct answers)
  {
    id: 1021,
    domain: "Domain 4: Monitoring, Maintenance, and Security",
    question: "Which THREE of the following controls should an ML Engineer implement to ensure data residency and encryption compliance for a multi-account ML environment?",
    options: [
      "Use AWS Organizations with Service Control Policies to restrict service usage to specific regions",
      "Enable SSE-KMS encryption on S3 buckets storing model artifacts and training data",
      "Configure VPC endpoints (AWS PrivateLink) to keep service traffic within the AWS network",
      "Store all model artifacts in a single public S3 bucket for centralized access",
      "Use AWS IAM with full administrator access for all ML team members"
    ],
    correctAnswer: [0, 1, 2],
    explanation: "AWS Organizations with SCPs can enforce regional restrictions to meet data residency requirements. SSE-KMS provides encryption at rest for sensitive model artifacts and training data. VPC endpoints ensure service traffic stays within the AWS network, reducing data exposure. Storing artifacts in public buckets and using full administrator access are security anti-patterns that violate compliance and least privilege principles."
  }
];

