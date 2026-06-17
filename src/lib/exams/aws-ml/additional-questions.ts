import type { ExamQuestion } from '@/types';

export const additionalQuestions: ExamQuestion[] = [
  // Domain 1: Data Preparation for ML (5 questions)
  {
    id: 1,
    domain: "Domain 1: Data Preparation for ML",
    question: "A healthcare startup needs to ingest high-volume streaming vitals from wearable devices into S3 for later batch ML training. They require automatic batching, compression, and conversion to Parquet without managing servers. Which service should they use?",
    options: [
      "Amazon Kinesis Data Streams with a custom Flink application",
      "Amazon Data Firehose with S3 destination and Parquet format conversion",
      "AWS Lambda triggered by Amazon SQS with batch processing logic",
      "Amazon Managed Streaming for Apache Kafka (MSK) with Kafka Connect"
    ],
    correctAnswer: 1,
    explanation: "Amazon Data Firehose is a fully managed streaming delivery service that can automatically batch, compress, and convert data to formats like Parquet or ORC before landing in S3. Kinesis Data Streams and MSK require you to build and manage the processing layer, while Lambda with SQS would need custom orchestration for batching and format conversion."
  },
  {
    id: 2,
    domain: "Domain 1: Data Preparation for ML",
    question: "A financial services firm is building a centralized data lake on S3 for multiple ML teams. They need to enforce fine-grained access controls so that analysts can only see approved columns and rows based on their department. Which service provides this governance capability?",
    options: [
      "AWS Identity and Access Management (IAM) with S3 bucket policies",
      "Amazon S3 with Object Lock and encryption",
      "AWS Lake Formation with table-level and column-level permissions",
      "AWS Glue with resource-based policies and job bookmarks"
    ],
    correctAnswer: 2,
    explanation: "AWS Lake Formation provides centralized governance for data lakes, enabling fine-grained access control at the database, table, column, and row level. IAM policies alone cannot enforce column-level or row-level security on S3 data, and Glue resource policies are primarily for ETL job access rather than end-user data governance."
  },
  {
    id: 3,
    domain: "Domain 1: Data Preparation for ML",
    question: "An ML team needs to train an image classification model on millions of high-resolution satellite images stored in S3. They want to use Pipe mode on SageMaker to stream data directly from S3 without copying to local storage. Which data format is MOST appropriate for this workload?",
    options: [
      "CSV with sharded file distribution",
      "RecordIO format with image embeddings",
      "Apache Parquet with binary image columns",
      "JSON Lines with Base64-encoded images"
    ],
    correctAnswer: 1,
    explanation: "RecordIO is a binary format optimized for streaming data in SageMaker Pipe mode, allowing efficient sequential reads of records without local disk copies. Parquet and CSV are not optimized for high-throughput streaming of binary image data, and JSON Lines with Base64 encoding introduces significant overhead and poor streaming performance."
  },
  {
    id: 4,
    domain: "Domain 1: Data Preparation for ML",
    question: "A company is migrating large on-premises NetApp NAS datasets containing unstructured ML training data to AWS. They need the data to remain accessible over NFS with snapshot capabilities and want to avoid reformatting. Which storage solution should they choose?",
    options: [
      "Amazon FSx for NetApp ONTAP with NFS access and SnapMirror integration",
      "Amazon EFS with performance mode set to Max I/O",
      "Amazon S3 with S3 Transfer Acceleration and File Gateway",
      "Amazon FSx for Lustre with HSM integration to S3"
    ],
    correctAnswer: 0,
    explanation: "Amazon FSx for NetApp ONTAP provides native NetApp compatibility, NFS/SMB access, and NetApp snapshot capabilities (SnapMirror), making it ideal for lift-and-shift migrations of NAS workloads. EFS lacks NetApp-specific features, S3 with File Gateway provides object storage emulation rather than native NAS, and FSx for Lustre is optimized for HPC workloads rather than NetApp compatibility."
  },
  {
    id: 5,
    domain: "Domain 1: Data Preparation for ML",
    question: "A medical imaging company needs to label 50,000 X-ray images for a rare disease detection model. They have a small in-house team and need to augment the dataset while protecting patient PHI. Which approach is MOST appropriate?",
    options: [
      "Use Amazon SageMaker Ground Truth with a private workforce and synthetic data generation via GANs",
      "Use Amazon Mechanical Turk with public workers and store raw DICOM files in public S3 buckets",
      "Use AWS Lambda to apply random cropping and rotation without any human verification",
      "Use Amazon Kendra to auto-tag images based on metadata and skip manual labeling"
    ],
    correctAnswer: 0,
    explanation: "SageMaker Ground Truth with a private workforce ensures PHI compliance by limiting data access to authorized internal annotators, and synthetic data generation via GANs can augment the dataset for rare diseases. Mechanical Turk with public workers violates PHI requirements, Lambda-only augmentation lacks quality labels, and Kendra is a search service not designed for image labeling."
  },

  // Domain 2: Model Development (5 questions)
  {
    id: 6,
    domain: "Domain 2: Model Development",
    question: "A media company wants to fine-tune a large language model to generate content in their brand voice using proprietary articles. They want to avoid managing infrastructure and training from scratch. Which AWS service should they use?",
    options: [
      "Amazon SageMaker Training Jobs with custom PyTorch containers",
      "Amazon Bedrock with custom model fine-tuning and continued pre-training",
      "Amazon EC2 with Elastic Inference and pre-trained Hugging Face models",
      "Amazon Kendra with custom document enrichment and indexing"
    ],
    correctAnswer: 1,
    explanation: "Amazon Bedrock provides fully managed foundation model fine-tuning and continued pre-training without requiring infrastructure management. SageMaker Training Jobs require you to manage containers and infrastructure, EC2 with Elastic Inference is for inference not training, and Kendra is an enterprise search service not a model training platform."
  },
  {
    id: 7,
    domain: "Domain 2: Model Development",
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
  {
    id: 8,
    domain: "Domain 2: Model Development",
    question: "An ML team is updating a production NLP model with new domain-specific vocabulary. After retraining on the new data, they notice the model performs worse on previously learned tasks. What is this phenomenon called, and how should they mitigate it?",
    options: [
      "Overfitting; mitigate with L2 regularization and dropout",
      "Catastrophic forgetting; mitigate with elastic weight consolidation (EWC) or rehearsal",
      "Gradient vanishing; mitigate with residual connections and batch normalization",
      "Data drift; mitigate with automated retraining pipelines and model monitoring"
    ],
    correctAnswer: 1,
    explanation: "Catastrophic forgetting occurs when a neural network loses previously learned knowledge after training on new data. Elastic weight consolidation (EWC) and rehearsal techniques (replaying old data alongside new data) are standard mitigation strategies. Overfitting refers to memorizing training data, gradient vanishing is an optimization issue, and data drift describes input distribution changes rather than model knowledge loss."
  },
  {
    id: 9,
    domain: "Domain 2: Model Development",
    question: "A robotics company needs to deploy a large vision model to edge devices with limited memory and compute. They want to preserve most of the model accuracy while reducing the parameter count by 60%. Which technique is MOST appropriate?",
    options: [
      "Model distillation to train a smaller student model from the large teacher model",
      "Data parallelism across multiple edge devices with synchronized gradients",
      "Transfer learning by freezing all layers and only training the classification head",
      "Batch size reduction with mixed precision training to lower memory usage"
    ],
    correctAnswer: 0,
    explanation: "Model distillation compresses a large teacher model into a smaller student model by training the student to mimic the teacher's outputs, achieving significant parameter reduction while preserving accuracy. Data parallelism is a training strategy, not a compression technique. Transfer learning reduces training compute but doesn't reduce model size. Batch size reduction affects training efficiency, not deployment model size."
  },
  {
    id: 10,
    domain: "Domain 2: Model Development",
    question: "A team is training a 100-billion parameter transformer model on SageMaker using hundreds of GPU instances. They need to split the model layers across multiple GPUs because a single GPU cannot hold the entire model. Which distributed training strategy is required?",
    options: [
      "Data parallelism by replicating the full model on each GPU and splitting the batch",
      "Model parallelism by partitioning layers across GPUs and devices",
      "Pipeline parallelism by splitting the dataset across multiple training pipelines",
      "Asynchronous SGD with delayed gradient updates to reduce memory pressure"
    ],
    correctAnswer: 1,
    explanation: "Model parallelism splits the model itself across multiple devices, which is necessary when a single GPU cannot hold the entire model. Data parallelism requires the full model to fit on each device. Pipeline parallelism is a variant of model parallelism but focuses on pipeline execution rather than layer partitioning. Asynchronous SGD affects update synchronization, not memory distribution of model parameters."
  },

  // Domain 3: Deployment and Orchestration (5 questions)
  {
    id: 11,
    domain: "Domain 3: Deployment and Orchestration",
    question: "An ML pipeline needs to orchestrate a multi-step workflow: preprocess data in Glue, train a model in SageMaker, evaluate model performance, conditionally register the model, and trigger a deployment. Which AWS service is MOST appropriate for this orchestration?",
    options: [
      "Amazon EventBridge with event rules and Lambda targets",
      "AWS Step Functions with SageMaker SDK integrations and Choice states",
      "AWS Glue workflows with job triggers and crawler dependencies",
      "Amazon Simple Workflow Service (SWF) with custom deciders and workers"
    ],
    correctAnswer: 1,
    explanation: "AWS Step Functions provides native integrations with SageMaker, Glue, and Lambda, and supports Choice states for conditional branching based on evaluation results. EventBridge is better for event routing than complex multi-step orchestration. Glue workflows are limited to ETL steps. SWF is a legacy service and lacks the native ML service integrations that Step Functions offers."
  },
  {
    id: 12,
    domain: "Domain 3: Deployment and Orchestration",
    question: "A real-time fraud detection system needs to process inference requests asynchronously when a model is temporarily unavailable. They want a decoupled architecture where messages are queued and processed when the endpoint recovers. Which service combination should they use?",
    options: [
      "Amazon SNS with email subscriptions for manual request handling",
      "Amazon SQS with a queue depth alarm and SageMaker asynchronous endpoint",
      "Amazon EventBridge with scheduled events and AWS Batch job queues",
      "AWS Lambda with Kinesis Data Streams and hot-warm container orchestration"
    ],
    correctAnswer: 1,
    explanation: "Amazon SQS provides durable message queuing that decouples producers from consumers, and SageMaker asynchronous endpoints are designed to process queued requests when the model is available. SNS is for pub/sub notifications, not durable queuing. EventBridge with Batch is for scheduled job processing, not real-time inference queuing. Lambda with Kinesis is for stream processing, not straightforward inference queuing."
  },
  {
    id: 13,
    domain: "Domain 3: Deployment and Orchestration",
    question: "A startup wants to deploy a lightweight scikit-learn model for real-time predictions via a REST API. They expect sporadic traffic and want zero idle cost. Which serverless architecture is MOST cost-effective?",
    options: [
      "SageMaker real-time endpoint with Provisioned Concurrency on a ml.t2.medium",
      "AWS Lambda container image with the model loaded, exposed via Amazon API Gateway",
      "Amazon EC2 Auto Scaling with Spot Instances behind an Application Load Balancer",
      "SageMaker multi-model endpoint with GPU instance and instance sharing"
    ],
    correctAnswer: 1,
    explanation: "AWS Lambda with a container image can serve lightweight scikit-learn models with pay-per-request pricing and zero idle cost, fronted by API Gateway for REST API access. SageMaker real-time endpoints incur hourly instance costs regardless of traffic. EC2 with Spot Instances still has base compute costs and operational overhead. Multi-model endpoints on GPU instances are overkill and not cost-effective for sporadic lightweight CPU inference."
  },
  {
    id: 14,
    domain: "Domain 3: Deployment and Orchestration",
    question: "A company needs to deploy an inference pipeline that first runs a pre-processing container to normalize images, then passes the output to a PyTorch inference container, and finally runs a post-processing container to filter results. Which SageMaker endpoint type supports this?",
    options: [
      "SageMaker serverless endpoint with maximum concurrency limits",
      "SageMaker multi-container endpoint with an inference pipeline",
      "SageMaker asynchronous endpoint with S3 output path configuration",
      "SageMaker real-time endpoint with single model and pre/post Lambda hooks"
    ],
    correctAnswer: 1,
    explanation: "SageMaker multi-container endpoints support inference pipelines, allowing multiple containers to run sequentially on the same instance with shared memory for data passing between pre-processing, inference, and post-processing steps. Serverless endpoints are for single models. Asynchronous endpoints handle large payloads but don't natively support multi-container pipelines. Real-time endpoints with Lambda hooks are not a native SageMaker feature for inference pipelines."
  },
  {
    id: 15,
    domain: "Domain 3: Deployment and Orchestration",
    question: "A financial firm needs to invoke a SageMaker endpoint from a VPC without traffic traversing the public internet. They also need to ensure the endpoint is only accessible from specific VPCs. Which networking feature should they configure?",
    options: [
      "AWS PrivateLink with an interface VPC endpoint for SageMaker Runtime",
      "AWS Transit Gateway with VPC peering across all accounts",
      "Amazon CloudFront with origin access identity and signed URLs",
      "AWS Direct Connect with public virtual interfaces and route filtering"
    ],
    correctAnswer: 0,
    explanation: "AWS PrivateLink with an interface VPC endpoint for SageMaker Runtime enables private connectivity from a VPC to SageMaker without traversing the public internet, and supports endpoint policies to restrict access to specific VPCs. Transit Gateway is for inter-VPC routing, not private service access. CloudFront is a CDN and doesn't provide private endpoint access. Direct Connect provides dedicated connectivity but doesn't natively isolate SageMaker endpoint access."
  },

  // Domain 4: Monitoring and Security (5 questions)
  {
    id: 16,
    domain: "Domain 4: Monitoring, Maintenance, and Security",
    question: "A data governance team needs to discover and classify sensitive data (PII, financial records) stored across multiple S3 buckets used for ML training. They want automated alerts when unencrypted PII is detected. Which service should they use?",
    options: [
      "Amazon GuardDuty with threat detection for S3 data events",
      "Amazon Macie with automated data discovery and sensitive data discovery jobs",
      "AWS Config with rules for S3 bucket encryption and public access",
      "AWS Security Hub with automated compliance checks for S3 buckets"
    ],
    correctAnswer: 1,
    explanation: "Amazon Macie is an AI-powered data security service that automatically discovers and classifies sensitive data (PII, PHI, financial data) in S3, and can alert when unencrypted sensitive data is detected. GuardDuty focuses on threat detection (anomalous access, malware), not data classification. AWS Config monitors configuration compliance but doesn't classify content. Security Hub aggregates findings but doesn't natively classify S3 content."
  },
  {
    id: 17,
    domain: "Domain 4: Monitoring, Maintenance, and Security",
    question: "An enterprise with hundreds of AWS accounts needs to centrally enforce encryption policies for SageMaker notebooks and training jobs. They want to ensure all KMS keys are managed and rotated automatically across the organization. Which approach is MOST effective?",
    options: [
      "AWS Organizations with Service Control Policies (SCPs) and AWS KMS with automatic key rotation",
      "AWS IAM with cross-account role assumption and S3 bucket policies",
      "AWS CloudTrail with log file integrity validation and encryption",
      "AWS Secrets Manager with automatic rotation and cross-account access"
    ],
    correctAnswer: 0,
    explanation: "AWS Organizations with Service Control Policies (SCPs) can enforce encryption requirements across all accounts, and AWS KMS supports automatic key rotation for managed keys. IAM with cross-account roles doesn't enforce organization-wide policies. CloudTrail provides audit logging but doesn't enforce encryption policies. Secrets Manager is for credential rotation, not for enforcing compute resource encryption policies."
  },
  {
    id: 18,
    domain: "Domain 4: Monitoring, Maintenance, and Security",
    question: "An ML team needs to store configuration parameters (hyperparameters, endpoint names, database connection strings) securely and access them from SageMaker training jobs and Lambda functions. They need versioning and audit trails. Which service should they use?",
    options: [
      "Amazon DynamoDB with encrypted tables and point-in-time recovery",
      "AWS Systems Manager Parameter Store with SecureString and parameter policies",
      "Amazon S3 with server-side encryption and bucket versioning",
      "AWS AppConfig with hosted configuration versions and deployment strategies"
    ],
    correctAnswer: 1,
    explanation: "AWS Systems Manager Parameter Store is designed for hierarchical configuration management, supports SecureString for encrypted parameters using KMS, and provides versioning and audit trails. DynamoDB is a database, not a parameter store. S3 with versioning can store config but lacks native parameter management and fine-grained access patterns. AppConfig is for feature flags and dynamic configuration, not secure secret storage."
  },
  {
    id: 19,
    domain: "Domain 4: Monitoring, Maintenance, and Security",
    question: "A company wants to reduce the cost of long-running SageMaker training jobs while maintaining fault tolerance. They can tolerate occasional interruptions. Which compute purchasing option should they use, and what additional SageMaker feature helps with checkpointing?",
    options: [
      "SageMaker Savings Plans with automatic instance right-sizing and warm pools",
      "SageMaker Spot Instances with checkpointing to S3 for fault tolerance",
      "Reserved Instances with capacity reservations and automatic scaling",
      "SageMaker Serverless with provisioned concurrency for training workloads"
    ],
    correctAnswer: 1,
    explanation: "SageMaker Spot Instances provide up to 90% cost savings for training but can be interrupted, so checkpointing to S3 allows jobs to resume from the last saved state. SageMaker Savings Plans are for committed use discounts but don't provide spot pricing. Reserved Instances require long-term commitment. SageMaker Serverless is for inference, not training workloads."
  },
  {
    id: 20,
    domain: "Domain 4: Monitoring, Maintenance, and Security",
    question: "A security team needs to audit network traffic between a SageMaker VPC endpoint and other AWS services to detect potential data exfiltration. They need flow-level metadata without inspecting payload content. Which feature should they enable?",
    options: [
      "AWS CloudTrail with data event logging for all API calls",
      "VPC Flow Logs with traffic metadata capture to CloudWatch Logs or S3",
      "AWS Network Firewall with stateful domain list inspection rules",
      "Amazon GuardDuty with VPC Flow Logs findings and anomaly detection"
    ],
    correctAnswer: 1,
    explanation: "VPC Flow Logs capture metadata about IP traffic going to and from network interfaces, including source/destination IP, ports, and protocol, without inspecting payload content. CloudTrail logs API calls, not network flow metadata. Network Firewall inspects payload content and blocks traffic. GuardDuty uses VPC Flow Logs as a data source but doesn't capture them; VPC Flow Logs must be enabled first, and the question asks what to enable for capture."
  }
];
