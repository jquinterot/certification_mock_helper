---
name: ml-exam-generator
description: Use when generating AWS ML Engineer Associate (MLA-C01) exam questions. Covers all exam domains, ensures question format matches the official exam, and maintains technical accuracy per AWS documentation.
---

## Overview
This skill generates realistic, exam-style questions for the AWS Certified Machine Learning Engineer - Associate (MLA-C01) exam. It ensures questions match the official exam format, cover all required topics, and maintain high quality.

## Official Exam Requirements
- **65 questions** (50 scored + 15 unscored)
- **130 minutes** duration
- **Question types**: Multiple choice, multiple response, ordering, matching
- **Passing score**: 720/1000
- **Domains**:
  - Domain 1: Data Preparation (28%)
  - Domain 2: Model Development (26%)
  - Domain 3: Deployment/Orchestration (22%)
  - Domain 4: Monitoring/Security (24%)

## Question Format Standards

### Multiple Choice (Primary Format)
```typescript
{
  id: number,
  domain: "Domain X: Name",
  type: "multiple-choice",
  question: "Scenario-based question...",
  options: ["A", "B", "C", "D"],
  correctAnswer: 0, // index of correct answer
  explanation: "Detailed explanation..."
}
```

### Multiple Response
```typescript
{
  id: number,
  domain: "Domain X: Name",
  type: "multiple-response",
  question: "Which TWO/THREE services...",
  options: ["A", "B", "C", "D", "E"], // 5+ options
  correctAnswer: [0, 2], // array of correct indices
  explanation: "Explanation..."
}
```

### Ordering
```typescript
{
  id: number,
  domain: "Domain X: Name",
  type: "ordering",
  question: "Put these steps in order...",
  options: ["Step 1", "Step 2", "Step 3", "Step 4", "Step 5"],
  correctAnswer: [2, 0, 4, 1, 3], // correct order indices
  explanation: "Explanation..."
}
```

### Matching
```typescript
{
  id: number,
  domain: "Domain X: Name",
  type: "matching",
  question: "Match each service to its use case...",
  options: {
    prompts: ["Service A", "Service B", "Service C"],
    answers: ["Use case 1", "Use case 2", "Use case 3"]
  },
  correctAnswer: [0, 2, 1], // index mapping
  explanation: "Explanation..."
}
```

## Question Writing Rules

### DO:
- Present realistic scenarios with specific requirements
- Use AWS service short names and full names appropriately
- Include 4 distinct options for multiple choice
- Include 5+ options for multiple response
- Make distractors plausible and related to the topic
- Write detailed explanations (2-3 sentences minimum)
- Reference specific AWS services, features, and configurations
- Include code snippets where appropriate
- Frame questions from an ML Engineer perspective
- Test practical knowledge over memorization

### DON'T:
- Use "All of the above" as an answer option
- Use "Both A and B" as an answer option
- Use "None of the above" as an answer option
- Ask purely definitional questions without context
- Include trick questions or intentionally misleading options
- Use outdated service names or features
- Include questions about out-of-scope services

## In-Scope AWS Services by Category

### Analytics
- Amazon Athena, Data Firehose, EMR, Glue, DataBrew, Data Quality, Kinesis, Lake Formation, Flink, OpenSearch, QuickSight, Redshift

### Application Integration
- EventBridge, MWAA, SNS, SQS, Step Functions

### Compute
- AWS Batch, EC2, Lambda, Serverless Application Repository

### Containers
- ECR, ECS, EKS

### Database
- DocumentDB, DynamoDB, ElastiCache, Neptune, RDS

### Developer Tools
- CDK, CodeArtifact, CodeBuild, CodeDeploy, CodePipeline, X-Ray

### Machine Learning
- A2I, Bedrock, CodeGuru, Comprehend, DevOps Guru, Fraud Detector, HealthLake, Kendra, Lex, Lookout, Personalize, Polly, Q, Rekognition, SageMaker, Textract, Transcribe, Translate

### Management & Governance
- Auto Scaling, Chatbot, CloudFormation, CloudTrail, CloudWatch, Compute Optimizer, Config, Organizations, Service Catalog, Systems Manager, Trusted Advisor

### Networking
- API Gateway, CloudFront, Direct Connect, VPC

### Security
- KMS, Macie, Secrets Manager, IAM

### Storage
- EBS, EFS, FSx, S3, S3 Glacier, Storage Gateway

## Domain-Specific Topics

### Domain 1: Data Preparation (28%)
- Data formats: Parquet, JSON, CSV, ORC, Avro, RecordIO
- Data sources: S3, EBS, EFS, RDS, DynamoDB, Kinesis, Kafka
- Feature engineering: scaling, encoding, splitting, binning, log transformation
- Encoding: one-hot, binary, label, tokenization, subword
- Tools: Data Wrangler, Feature Store, Ground Truth, DataBrew, Glue
- Data quality: validation, bias detection, class imbalance
- Data integrity: encryption, anonymization, PII/PHI handling, compliance
- Bias metrics: CI, DPL, pre-training bias

### Domain 2: Model Development (26%)
- Algorithm selection: built-in algorithms, JumpStart, Bedrock, AI services
- Training: epochs, batch size, distributed training, early stopping
- Hyperparameter tuning: random search, Bayesian optimization, AMT
- Regularization: dropout, L1/L2, weight decay
- Evaluation: accuracy, precision, recall, F1, RMSE, ROC/AUC, confusion matrix
- Model management: Model Registry, versioning, reproducibility
- Debugging: Model Debugger, convergence issues, vanishing gradients
- Interpretability: Clarify, SHAP, feature importance
- Ensemble: bagging, boosting, stacking

### Domain 3: Deployment/Orchestration (22%)
- Endpoints: real-time, serverless, batch transform, async, multi-model
- Deployment strategies: blue/green, canary, A/B testing, shadow
- Auto scaling: InvocationsPerInstance, target tracking
- Orchestration: SageMaker Pipelines, Step Functions, CodePipeline
- Containers: ECR, ECS, EKS, Fargate, Lambda
- Edge: SageMaker Neo, compilation, optimization
- CI/CD: CodeBuild, CodeDeploy, CodePipeline, Git
- Infrastructure: CloudFormation, CDK, IaC
- Networking: VPC, security groups, endpoints, API Gateway

### Domain 4: Monitoring/Security (24%)
- Model monitoring: Model Monitor, data drift, concept drift, quality
- Logging: CloudTrail, CloudWatch Logs, audit trails
- Metrics: CloudWatch Dashboards, custom metrics, alarms
- Cost optimization: Compute Optimizer, Savings Plans, Spot, Reserved
- Security: IAM, least privilege, KMS, encryption, VPC
- Compliance: data residency, GDPR, tagging, resource policies
- Alerting: SNS, Chatbot, CloudWatch Alarms
- Performance: X-Ray, distributed tracing, latency analysis
- Infrastructure: Systems Manager, Config, Trusted Advisor

## Scenarios to Generate

### Common Scenario Types
1. **Data Ingestion**: Ingest from multiple sources, real-time vs batch, format selection
2. **Feature Engineering**: Missing values, encoding, scaling, feature stores
3. **Model Training**: Algorithm selection, distributed training, hyperparameter tuning
4. **Model Deployment**: Endpoint type selection, scaling strategies, cost optimization
5. **Monitoring**: Drift detection, performance monitoring, alerting
6. **Security**: IAM policies, encryption, VPC configuration, compliance
7. **Cost Optimization**: Instance selection, Spot vs On-Demand, Savings Plans
8. **Troubleshooting**: Training failures, inference latency, data quality issues

### Example Scenario Templates

**Template 1: Service Selection**
"A company needs to [specific requirement]. The solution must [constraint 1], [constraint 2], and [constraint 3]. Which AWS service is MOST appropriate?"

**Template 2: Architecture Decision**
"An ML engineer is designing a [system type] that needs to [requirement]. The current architecture uses [existing approach] but has [problem]. Which approach is MOST appropriate?"

**Template 3: Troubleshooting**
"A team is training a [model type] on [data type] and observes [symptom]. The training configuration includes [details]. What is the MOST likely cause?"

**Template 4: Best Practice**
"A company is [action] for [purpose]. To ensure [goal], which approach should they follow?"

**Template 5: Cost Optimization**
"An ML workload currently costs [amount] per month using [current approach]. The workload is [characteristics]. Which approach is MOST cost-effective?"

## Quality Checklist

Before generating, verify each question:
- [ ] Scenario is realistic and specific
- [ ] All 4 options are plausible
- [ ] Correct answer is unambiguous
- [ ] Distractors are related but incorrect
- [ ] Explanation is detailed and educational
- [ ] References specific AWS services or features
- [ ] Tests practical knowledge over memorization
- [ ] Uses correct AWS terminology
- [ ] No "All of the above" or "Both A and B" options
- [ ] Matches one of the 4 exam domains
- [ ] Tests in-scope services only

## Generation Strategy

1. **Full Exam Generation**: Generate 65 questions covering all domains with proper weighting
2. **Domain-Specific**: Generate 15-20 questions for a single domain
3. **Topic-Specific**: Generate 10 questions for a specific topic (e.g., SageMaker endpoints)
4. **Mixed Question Types**: Include 80% multiple choice, 10% multiple response, 5% ordering, 5% matching

## Output Format

When generating questions, output as TypeScript code:
```typescript
import type { Question } from './types';

export const questions: Question[] = [
  // Generated questions here
];
```

Ensure each question is properly typed, follows the format standards, and includes comprehensive explanations.