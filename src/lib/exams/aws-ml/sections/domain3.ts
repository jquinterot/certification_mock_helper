import type { ExamQuestion } from '@/types';

export const questions: ExamQuestion[] = [
  // Test Set 1: Questions 1-15
  {
    id: 1,
    domain: "Domain 3: Deployment and Orchestration",
    question: "A company needs to deploy a fraud detection model that receives sporadic traffic (few requests per hour) with strict latency requirements under 100ms. Which SageMaker endpoint type is MOST cost-effective?",
    options: [
      "Real-time endpoint with 2 ml.c5.2xlarge instances",
      "Serverless endpoint with provisioned concurrency",
      "Asynchronous endpoint",
      "Batch Transform job"
    ],
    correctAnswer: 1,
    explanation: "SageMaker Serverless Endpoints automatically scale compute based on request volume and charge only for the inference duration. With provisioned concurrency, you can keep a warm pool of instances to meet strict latency requirements. This is ideal for sporadic traffic, as you don't pay for idle instances."
  },
  {
    id: 2,
    domain: "Domain 3: Deployment and Orchestration",
    question: "Which deployment strategy routes 100% of traffic to a new model version only after it has been validated, while maintaining the old version as an instant rollback option?",
    options: [
      "Canary deployment",
      "Blue/Green deployment",
      "A/B testing",
      "Rolling deployment"
    ],
    correctAnswer: 1,
    explanation: "Blue/Green deployment maintains two identical environments. The green environment hosts the new model version and is validated before traffic is switched from blue (current production) to green. If issues arise, traffic can be instantly switched back to blue, providing a fast rollback mechanism."
  },
  {
    id: 3,
    domain: "Domain 3: Deployment and Orchestration",
    question: "A company needs to deploy a model that processes video files up to 500MB each with processing times of 5-10 minutes per file. Which SageMaker inference option is MOST appropriate?",
    options: [
      "Real-time endpoint with auto scaling",
      "SageMaker Asynchronous Inference",
      "Serverless endpoint",
      "Multi-model endpoint"
    ],
    correctAnswer: 1,
    explanation: "SageMaker Asynchronous Inference is designed for large payloads and long processing times. It accepts requests, queues them, and processes them asynchronously. Results are stored in S3. It supports payloads up to 1GB and doesn't require maintaining persistent instances for the entire duration, making it ideal for video processing."
  },
  {
    id: 4,
    domain: "Domain 3: Deployment and Orchestration",
    question: "Which AWS Step Functions feature is MOST appropriate for implementing a human approval step before promoting a model to production in an ML pipeline?",
    options: [
      "Map state",
      "Wait state with callback",
      "Task state with AWS Lambda",
      "Choice state with conditions"
    ],
    correctAnswer: 1,
    explanation: "Step Functions Wait state with callback (using .waitForTaskToken) can pause execution until a human approves the model via an external system (email, Slack, or custom UI). The callback sends a task token to resume the workflow, making it ideal for human-in-the-loop approval processes in ML pipelines."
  },
  {
    id: 5,
    domain: "Domain 3: Deployment and Orchestration",
    question: "Which MLOps practice is MOST important for ensuring that a model deployed to production can be traced back to the exact training data and code that produced it?",
    options: [
      "Manual documentation of experiments",
      "Model lineage tracking with SageMaker Model Registry and artifact versioning",
      "Storing model weights in S3 without metadata",
      "Using the latest version of training libraries"
    ],
    correctAnswer: 1,
    explanation: "Model lineage tracking with SageMaker Model Registry captures the relationships between models, training jobs, datasets, and code. It records which dataset version, training job, and code commit produced each model version. This traceability is essential for debugging, compliance, and reproducing results."
  },
  {
    id: 6,
    domain: "Domain 3: Deployment and Orchestration",
    question: "Which SageMaker feature is MOST appropriate for deploying a model to an edge device with limited compute resources, such as a Raspberry Pi?",
    options: [
      "SageMaker Model Monitor",
      "SageMaker Neo with target device compilation",
      "SageMaker Batch Transform",
      "SageMaker Debugger"
    ],
    correctAnswer: 1,
    explanation: "SageMaker Neo compiles models for specific target devices (including ARM-based devices like Raspberry Pi). It optimizes the model for the target hardware, reducing model size and improving inference speed. This is essential for deploying ML models on resource-constrained edge devices."
  },
  {
    id: 7,
    domain: "Domain 3: Deployment and Orchestration",
    question: "Which AWS CodePipeline stage is MOST appropriate for automatically running model evaluation tests after a new model version is trained?",
    options: [
      "Source stage",
      "Build stage with SageMaker processing job",
      "Deploy stage",
      "Approval stage"
    ],
    correctAnswer: 1,
    explanation: "The Build stage in CodePipeline can run evaluation tests using SageMaker Processing Jobs or Lambda. This stage executes after the training pipeline completes and validates the model against test datasets. If evaluation metrics don't meet thresholds, the pipeline can fail before deployment."
  },
  {
    id: 8,
    domain: "Domain 3: Deployment and Orchestration",
    question: "A company needs to deploy a model that handles traffic patterns that spike predictably at 9 AM and 5 PM daily. Which auto scaling approach is MOST appropriate?",
    options: [
      "Target tracking scaling on CPU utilization",
      "Scheduled scaling with defined scale-out and scale-in times",
      "Step scaling based on memory usage",
      "No scaling (fixed instance count)"
    ],
    correctAnswer: 1,
    explanation: "Scheduled scaling allows you to define scaling actions at specific times based on known traffic patterns. For predictable spikes at 9 AM and 5 PM, scheduled scaling can proactively add capacity before traffic increases and remove capacity after peak hours, providing consistent performance while optimizing costs."
  },
  {
    id: 9,
    domain: "Domain 3: Deployment and Orchestration",
    question: "Which approach is BEST for implementing a shadow deployment where a new model version receives production traffic but its predictions are not returned to users?",
    options: [
      "Deploy a separate endpoint and route 50% traffic to it",
      "Use SageMaker Shadow Tests (or configure a variant with 0% weight in production traffic)",
      "Use Batch Transform on production data",
      "Deploy both models and compare them offline"
    ],
    correctAnswer: 1,
    explanation: "SageMaker Shadow Tests (or configuring a variant with 0% weight in production traffic) allows a new model to receive real production traffic while its predictions are logged but not returned to users. This enables safe validation of the new model against real-world data without affecting user experience."
  },
  {
    id: 10,
    domain: "Domain 3: Deployment and Orchestration",
    question: "Which AWS service is MOST appropriate for orchestrating a complex ML workflow that includes data preprocessing, model training, human review, and conditional deployment?",
    options: [
      "AWS Lambda alone",
      "SageMaker Pipelines with Step Functions integration",
      "Amazon SQS with worker pools",
      "AWS Batch"
    ],
    correctAnswer: 1,
    explanation: "SageMaker Pipelines can orchestrate ML-specific steps (preprocessing, training, evaluation), while Step Functions integration enables human review steps, conditional logic, and complex branching. Together they provide a comprehensive orchestration solution for end-to-end ML workflows with human-in-the-loop processes."
  },
  {
    id: 11,
    domain: "Domain 3: Deployment and Orchestration",
    question: "Which container registry feature is MOST important for securing custom ML model containers before deployment to SageMaker?",
    options: [
      "Public repository access",
      "Amazon ECR image scanning with vulnerability detection",
      "Unencrypted storage",
      "Anonymous pull access"
    ],
    correctAnswer: 1,
    explanation: "Amazon ECR image scanning detects vulnerabilities in container images using Common Vulnerabilities and Exposures (CVE) databases. This is critical for securing custom ML containers before deployment, ensuring that known security issues are identified and remediated."
  },
  {
    id: 12,
    domain: "Domain 3: Deployment and Orchestration",
    question: "A company needs to deploy multiple language-specific translation models (English, Spanish, French) on a single endpoint to reduce infrastructure costs. Which SageMaker deployment option is BEST?",
    options: [
      "Individual real-time endpoints for each language",
      "SageMaker Multi-Model Endpoint",
      "SageMaker Serverless Endpoint",
      "SageMaker Batch Transform"
    ],
    correctAnswer: 1,
    explanation: "SageMaker Multi-Model Endpoints allow deploying multiple models behind a single endpoint, sharing underlying compute instances. This is ideal for language-specific models that receive moderate traffic individually, as it reduces costs by consolidating infrastructure while maintaining separate model artifacts."
  },
  {
    id: 13,
    domain: "Domain 3: Deployment and Orchestration",
    question: "Which CI/CD pattern is MOST appropriate for implementing automated model retraining when data drift is detected?",
    options: [
      "Manual retraining triggered by a daily cron job",
      "Event-driven pipeline: Model Monitor triggers EventBridge, which triggers SageMaker Pipeline for retraining",
      "Email alert to data scientists for manual retraining",
      "Weekly scheduled retraining regardless of drift"
    ],
    correctAnswer: 1,
    explanation: "An event-driven pipeline automates the entire retraining process. When SageMaker Model Monitor detects data drift, it sends an event to EventBridge. EventBridge triggers a SageMaker Pipeline or Step Functions workflow that executes data preprocessing, training, evaluation, and conditional deployment. This is the most responsive and scalable approach."
  },
  {
    id: 14,
    domain: "Domain 3: Deployment and Orchestration",
    question: "Which approach is BEST for implementing infrastructure as code for a SageMaker endpoint with auto scaling policies and VPC configuration?",
    options: [
      "AWS CloudFormation YAML templates",
      "AWS CDK with high-level SageMaker constructs",
      "Manual AWS Console configuration",
      "AWS CLI scripts"
    ],
    correctAnswer: 1,
    explanation: "AWS CDK provides high-level constructs for SageMaker resources, including endpoints, endpoint configurations, and auto scaling policies. It allows you to define infrastructure using Python or TypeScript, with type safety and code reuse. This is more maintainable than raw CloudFormation YAML for complex ML infrastructure."
  },
  {
    id: 15,
    domain: "Domain 3: Deployment and Orchestration",
    question: "Which SageMaker feature is MOST appropriate for compiling and optimizing a TensorFlow model to run on a mobile iOS device?",
    options: [
      "SageMaker Model Monitor",
      "SageMaker Neo with target platform iOS (Core ML)",
      "SageMaker Batch Transform",
      "SageMaker Processing"
    ],
    correctAnswer: 1,
    explanation: "SageMaker Neo compiles models for specific target platforms, including iOS (Core ML). It optimizes the model for the target hardware (Apple Neural Engine, GPU, CPU), reducing model size and improving inference latency on mobile devices. Core ML is Apple's framework for running ML models on iOS devices."
  }
];

export const questions2: ExamQuestion[] = [
  // Test Set 2: Questions 16-30
  {
    id: 1,
    domain: "Domain 3: Deployment and Orchestration",
    question: "Which deployment strategy allows sending a small percentage of live traffic to a new model and gradually increasing the percentage based on performance metrics?",
    options: [
      "Blue/Green deployment",
      "Canary deployment",
      "Shadow deployment",
      "Rollback deployment"
    ],
    correctAnswer: 1,
    explanation: "Canary deployment routes a small percentage of traffic (e.g., 5%) to the new model version and monitors performance metrics. If metrics are satisfactory, the percentage is gradually increased until 100% traffic is on the new version. This minimizes risk compared to a full cutover."
  },
  {
    id: 2,
    domain: "Domain 3: Deployment and Orchestration",
    question: "A company needs to process a large dataset of 10 million records for inference once per week. Which SageMaker deployment option is MOST cost-effective?",
    options: [
      "Real-time endpoint with auto scaling to handle peak load",
      "SageMaker Batch Transform with distributed processing",
      "Serverless endpoint with high concurrency",
      "Multi-model endpoint with 50 models"
    ],
    correctAnswer: 1,
    explanation: "SageMaker Batch Transform is designed for offline inference on large datasets. It distributes processing across multiple instances, processes the entire dataset, and terminates resources when complete. For a weekly job, this is significantly more cost-effective than maintaining a persistent real-time endpoint."
  },
  {
    id: 3,
    domain: "Domain 3: Deployment and Orchestration",
    question: "Which AWS Step Functions state type is BEST for implementing a choice between deploying to production or sending a failure notification based on model evaluation metrics?",
    options: [
      "Parallel state",
      "Choice state",
      "Map state",
      "Pass state"
    ],
    correctAnswer: 1,
    explanation: "Step Functions Choice state allows branching based on conditions. In an ML pipeline, it can evaluate model metrics (e.g., accuracy > threshold) and route the workflow to either the Deploy state or the Fail/Notify state. This is the standard pattern for conditional deployment in ML workflows."
  },
  {
    id: 4,
    domain: "Domain 3: Deployment and Orchestration",
    question: "Which MLOps practice is MOST critical for ensuring consistent and reproducible model deployments across development, staging, and production environments?",
    options: [
      "Using different container images for each environment",
      "Environment-specific configuration with the same container image and versioned model artifacts",
      "Manual deployment by different team members for each environment",
      "Deploying the latest model version automatically to all environments"
    ],
    correctAnswer: 1,
    explanation: "Using the same container image with environment-specific configurations (via environment variables or config files) and versioned model artifacts ensures consistency across environments. The only differences should be configuration (data sources, scaling policies), not the core model or container. This is a fundamental MLOps best practice."
  },
  {
    id: 5,
    domain: "Domain 3: Deployment and Orchestration",
    question: "Which SageMaker endpoint auto scaling metric is MOST appropriate for scaling an endpoint that processes image uploads with highly variable payload sizes?",
    options: [
      "CPU utilization",
      "InvocationsPerInstance",
      "Memory utilization",
      "Model latency"
    ],
    correctAnswer: 1,
    explanation: "InvocationsPerInstance directly measures the inference load per instance. For endpoints with variable payload sizes, CPU or memory utilization may not accurately reflect the inference demand. InvocationsPerInstance ensures scaling decisions are based on actual request volume, maintaining consistent per-instance throughput."
  },
  {
    id: 6,
    domain: "Domain 3: Deployment and Orchestration",
    question: "Which approach is BEST for implementing A/B testing between two model versions where one version is a rule-based baseline and the other is a neural network?",
    options: [
      "Deploy both models on separate endpoints and route traffic manually",
      "Use SageMaker Production Variants with traffic splitting and CloudWatch metrics for comparison",
      "Run batch inference on both models sequentially",
      "Compare models offline on historical data"
    ],
    correctAnswer: 1,
    explanation: "SageMaker Production Variants allow deploying multiple model versions on a single endpoint with configurable traffic splitting. CloudWatch metrics for each variant enable statistical comparison of performance (latency, error rate, custom business metrics). This is the standard approach for A/B testing in production."
  },
  {
    id: 7,
    domain: "Domain 3: Deployment and Orchestration",
    question: "Which AWS CodeBuild feature is MOST appropriate for building a custom Docker image for a SageMaker inference endpoint with specific Python dependencies?",
    options: [
      "CodeBuild with a buildspec.yml that includes Docker build and push to ECR",
      "CodeBuild with Maven build",
      "Manual Docker build on a developer workstation",
      "AWS Lambda to build containers"
    ],
    correctAnswer: 0,
    explanation: "CodeBuild with a buildspec.yml can define build steps that include Docker build, tag, and push to Amazon ECR. This automates the creation of custom SageMaker inference containers with specific dependencies, ensuring reproducible and versioned container builds."
  },
  {
    id: 8,
    domain: "Domain 3: Deployment and Orchestration",
    question: "Which networking configuration is MOST appropriate for a SageMaker endpoint that must access data in a VPC's private S3 bucket without traversing the public internet?",
    options: [
      "Public endpoint with IAM role",
      "VPC endpoint with PrivateLink for S3",
      "NAT Gateway for internet access",
      "Public subnet with security groups"
    ],
    correctAnswer: 1,
    explanation: "A VPC endpoint with AWS PrivateLink for S3 provides private connectivity between the VPC and S3 without traversing the public internet. This ensures that data access from the SageMaker endpoint to the S3 bucket stays within the AWS network, meeting security and compliance requirements."
  },
  {
    id: 9,
    domain: "Domain 3: Deployment and Orchestration",
    question: "Which approach is BEST for rolling back a SageMaker endpoint to a previous model version when the current version's error rate exceeds a threshold?",
    options: [
      "Terminate the endpoint and create a new one",
      "Update the endpoint to point to a previous endpoint configuration using UpdateEndpoint",
      "Manually deploy the old model to a new endpoint",
      "Wait for the next scheduled deployment"
    ],
    correctAnswer: 1,
    explanation: "SageMaker UpdateEndpoint allows switching an endpoint to a different endpoint configuration (which references a previous model version) without downtime. This is the fastest and most reliable rollback mechanism, as it doesn't require terminating the endpoint or creating new infrastructure."
  },
  {
    id: 10,
    domain: "Domain 3: Deployment and Orchestration",
    question: "Which SageMaker Pipeline step type is MOST appropriate for running a data preprocessing script before model training in a reproducible workflow?",
    options: [
      "TrainingStep",
      "ProcessingStep",
      "ConditionStep",
      "ModelStep"
    ],
    correctAnswer: 1,
    explanation: "SageMaker ProcessingStep runs data preprocessing, feature engineering, or evaluation scripts using SageMaker Processing Jobs. It is designed for running custom scripts (Python, PySpark) on scalable compute resources before training, ensuring reproducible data preparation within the pipeline."
  },
  {
    id: 11,
    domain: "Domain 3: Deployment and Orchestration",
    question: "Which approach is MOST appropriate for deploying a model to multiple AWS Regions for disaster recovery and low-latency access?",
    options: [
      "Deploy a single endpoint in us-east-1 and use CloudFront",
      "Deploy endpoints in each region with SageMaker and use Route 53 latency-based routing",
      "Use AWS Global Accelerator with a single endpoint",
      "Store the model in S3 and let clients download it"
    ],
    correctAnswer: 1,
    explanation: "Deploying SageMaker endpoints in each target region and using Route 53 latency-based routing directs users to the nearest healthy endpoint. This provides both disaster recovery (if one region fails, traffic routes to another) and low-latency inference for global users."
  },
  {
    id: 12,
    domain: "Domain 3: Deployment and Orchestration",
    question: "Which AWS service is BEST for storing and versioning the training code, inference code, and configuration files for an ML pipeline?",
    options: [
      "Amazon S3 without versioning",
      "AWS CodeCommit or GitHub with branch protection and tagging",
      "Amazon DynamoDB",
      "Amazon EFS"
    ],
    correctAnswer: 1,
    explanation: "AWS CodeCommit (or GitHub) provides version control for code, including training scripts, inference handlers, and configuration files. Branch protection, tagging, and commit history ensure code traceability and reproducibility. This is a fundamental requirement for MLOps and CI/CD pipelines."
  },
  {
    id: 13,
    domain: "Domain 3: Deployment and Orchestration",
    question: "Which approach is MOST appropriate for implementing feature store lookups during real-time inference at a SageMaker endpoint?",
    options: [
      "Query the offline store directly from the endpoint",
      "Use SageMaker Feature Store online store with low-latency GetRecord API",
      "Load all features from S3 on each inference request",
      "Recompute features from raw data during inference"
    ],
    correctAnswer: 1,
    explanation: "SageMaker Feature Store online store is designed for low-latency feature retrieval (single-digit millisecond latency). The GetRecord API retrieves pre-computed features by record ID. This is critical for real-time inference where features must be retrieved quickly without recomputing from raw data."
  },
  {
    id: 14,
    domain: "Domain 3: Deployment and Orchestration",
    question: "Which AWS CodePipeline trigger is MOST appropriate for automatically starting a model training pipeline when a data scientist pushes new training code to a Git repository?",
    options: [
      "Manual trigger through the AWS Console",
      "Webhook trigger from CodeCommit/GitHub",
      "Scheduled daily trigger",
      "S3 event trigger on the model artifacts bucket"
    ],
    correctAnswer: 1,
    explanation: "Webhook triggers from CodeCommit or GitHub automatically start CodePipeline when code is pushed. This enables continuous training: every code push triggers the pipeline, ensuring that the latest training code is validated and potentially deployed. Scheduled triggers (option C) are not event-driven."
  },
  {
    id: 15,
    domain: "Domain 3: Deployment and Orchestration",
    question: "Which approach is BEST for deploying an ML model that must run on an edge device with intermittent internet connectivity?",
    options: [
      "SageMaker real-time endpoint requiring constant connectivity",
      "SageMaker Neo compilation with local runtime on the edge device",
      "SageMaker Batch Transform requiring cloud connectivity",
      "Serverless endpoint with retry logic"
    ],
    correctAnswer: 1,
    explanation: "SageMaker Neo compiles models for edge devices and provides a local runtime. Once deployed, the model runs locally on the device without requiring internet connectivity. This is essential for edge deployments where connectivity is intermittent, bandwidth is limited, or latency requirements are strict."
  },
  {
    id: 16,
    domain: "Domain 3: Deployment and Orchestration",
    question: "An ML team needs to select the optimal instance type and configuration for deploying a PyTorch model to minimize latency and cost. They want to test multiple configurations without manual benchmarking. Which AWS service should they use?",
    options: [
      "Amazon SageMaker Inference Recommender",
      "AWS Compute Optimizer",
      "Amazon CloudWatch Synthetics",
      "AWS Trusted Advisor"
    ],
    correctAnswer: 0,
    explanation: "Amazon SageMaker Inference Recommender automatically tests multiple instance types and configurations for your model to find the optimal balance of latency and cost. It performs load tests with simulated traffic and recommends the best instance type, initial instance count, and scaling policies. Compute Optimizer optimizes EC2 instances for general workloads. CloudWatch Synthetics tests endpoint availability. Trusted Advisor provides general best practices, not model-specific recommendations."
  },
  {
    id: 17,
    domain: "Domain 3: Deployment and Orchestration",
    question: "A manufacturing company needs to deploy ML models to thousands of industrial sensors for predictive maintenance. They need to manage model versions across the fleet and update models remotely without visiting each device. Which AWS service is MOST appropriate?",
    options: [
      "AWS IoT Greengrass with SageMaker Edge Manager",
      "Amazon SageMaker Serverless Endpoints",
      "AWS Lambda for each sensor",
      "Amazon EC2 Auto Scaling for inference servers"
    ],
    correctAnswer: 0,
    explanation: "AWS IoT Greengrass extends AWS to edge devices, enabling local inference and model management. SageMaker Edge Manager works with Greengrass to deploy models to edge devices, manage model versions, and collect metrics from the fleet. This allows remote model updates across thousands of devices. Serverless endpoints run in the cloud, not on devices. Lambda has execution limits and is not designed for model management. EC2 Auto Scaling is for cloud inference, not edge deployment."
  }
];
