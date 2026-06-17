import type { ExamQuestion } from '@/types';

export const questions: ExamQuestion[] = [
  // Test Set 1: Questions 1-15
  {
    id: 1,
    domain: "Domain 4: Monitoring, Maintenance, and Security",
    question: "A company is monitoring a production recommendation model and notices that the distribution of user ages in incoming requests has shifted significantly compared to the training data. Which type of drift is this indicative of?",
    options: [
      "Concept drift",
      "Data drift (covariate shift)",
      "Model drift",
      "Label drift"
    ],
    correctAnswer: 1,
    explanation: "Data drift (covariate shift) occurs when the distribution of input features changes over time. The shift in user age distribution indicates that the incoming data distribution differs from the training distribution, which is data drift. Concept drift would be a change in the relationship between inputs and outputs."
  },
  {
    id: 2,
    domain: "Domain 4: Monitoring, Maintenance, and Security",
    question: "Which SageMaker Model Monitor component is MOST appropriate for detecting when a model's prediction accuracy degrades over time by comparing predicted labels against ground truth labels?",
    options: [
      "Data Quality Monitor",
      "Model Quality Monitor",
      "Model Bias Monitor",
      "Feature Attribution Monitor"
    ],
    correctAnswer: 1,
    explanation: "SageMaker Model Quality Monitor compares model predictions against ground truth labels to track accuracy, precision, recall, F1, and other performance metrics over time. It alerts when performance degrades below thresholds, triggering retraining or investigation."
  },
  {
    id: 3,
    domain: "Domain 4: Monitoring, Maintenance, and Security",
    question: "Which IAM role configuration is MOST appropriate for a SageMaker notebook instance that needs to read training data from S3 and write model artifacts to S3, but should NOT have access to production databases?",
    options: [
      "Use the AWS account root user credentials",
      "Create an IAM role with specific S3 bucket policies and no database permissions (least privilege)",
      "Use the AmazonSageMakerFullAccess managed policy for all users",
      "Share a single IAM role across all SageMaker resources"
    ],
    correctAnswer: 1,
    explanation: "The principle of least privilege requires creating an IAM role with only the necessary permissions (specific S3 buckets for read/write) and no unnecessary permissions (database access). This minimizes the blast radius if the notebook instance is compromised. FullAccess policies and shared roles violate least privilege."
  },
  {
    id: 4,
    domain: "Domain 4: Monitoring, Maintenance, and Security",
    question: "Which encryption approach is MOST appropriate for ensuring that ML model artifacts stored in Amazon S3 are encrypted at rest using a customer-managed key with full audit control?",
    options: [
      "SSE-S3 (Amazon S3 managed keys)",
      "SSE-KMS with a customer-managed key in AWS KMS",
      "SSE-C with client-provided keys",
      "No encryption"
    ],
    correctAnswer: 1,
    explanation: "SSE-KMS with a customer-managed key provides encryption at rest with full control over key rotation, access policies, and audit trails via CloudTrail. It allows you to control who can decrypt model artifacts and provides detailed logging of key usage. SSE-S3 uses AWS-managed keys without customer control."
  },
  {
    id: 5,
    domain: "Domain 4: Monitoring, Maintenance, and Security",
    question: "A company needs to comply with GDPR requirements for data privacy when training ML models on EU customer data. Which practice is MOST critical?",
    options: [
      "Store all data in us-east-1",
      "Implement data anonymization/pseudonymization and allow data deletion requests (right to be forgotten)",
      "Use public S3 buckets for easy access",
      "Disable encryption to improve training performance"
    ],
    correctAnswer: 1,
    explanation: "GDPR requires data anonymization/pseudonymization and the right to erasure (right to be forgotten). ML pipelines must support deleting individual customer data on request and ensuring that models trained on that data can be updated or retrained without the deleted data. This is the most critical GDPR requirement for ML systems."
  },
  {
    id: 6,
    domain: "Domain 4: Monitoring, Maintenance, and Security",
    question: "Which SageMaker Model Monitor schedule is MOST appropriate for a model that receives high-volume traffic and requires near real-time detection of data drift?",
    options: [
      "Daily monitoring schedule",
      "Hourly monitoring schedule",
      "Monitoring on every batch of 1000 inferences",
      "Weekly monitoring schedule"
    ],
    correctAnswer: 2,
    explanation: "SageMaker Model Monitor supports scheduling based on inference volume (e.g., every N inferences). For high-volume traffic, monitoring on every batch of 1000 inferences provides near real-time detection without excessive processing. Fixed schedules (daily, weekly) might miss rapid drift."
  },
  {
    id: 7,
    domain: "Domain 4: Monitoring, Maintenance, and Security",
    question: "Which VPC configuration is MOST appropriate for isolating SageMaker training jobs from the public internet while allowing access to S3 and ECR?",
    options: [
      "Public subnet with internet gateway",
      "Private subnet with VPC endpoints for S3 and ECR, and NAT gateway for outbound access if needed",
      "Public subnet with no security groups",
      "Default VPC with no modifications"
    ],
    correctAnswer: 1,
    explanation: "Private subnets with VPC endpoints for S3 and ECR keep traffic within the AWS network. NAT gateway can provide outbound internet access if needed for package downloads. This configuration isolates training jobs from the public internet while maintaining necessary access to AWS services, following the defense-in-depth principle."
  },
  {
    id: 8,
    domain: "Domain 4: Monitoring, Maintenance, and Security",
    question: "Which AWS service is MOST appropriate for creating an audit trail of all data access operations on ML datasets stored in S3 for compliance reporting?",
    options: [
      "Amazon CloudWatch Metrics",
      "AWS CloudTrail with S3 data event logging",
      "AWS Config Rules",
      "Amazon GuardDuty"
    ],
    correctAnswer: 1,
    explanation: "AWS CloudTrail with S3 data event logging records every API call made to S3 objects, including GetObject, PutObject, and DeleteObject. This provides a complete audit trail of who accessed what data and when, which is essential for compliance reporting (SOC 2, HIPAA, PCI-DSS)."
  },
  {
    id: 9,
    domain: "Domain 4: Monitoring, Maintenance, and Security",
    question: "Which automated remediation action is MOST appropriate when SageMaker Model Monitor detects that data drift has exceeded a threshold?",
    options: [
      "Send an email alert and wait for manual action",
      "Trigger an EventBridge rule that starts a SageMaker Pipeline for retraining and evaluation",
      "Delete the model endpoint immediately",
      "Disable Model Monitor to stop alerts"
    ],
    correctAnswer: 1,
    explanation: "EventBridge can receive alerts from Model Monitor and trigger automated remediation. A SageMaker Pipeline can retrain the model on recent data, evaluate it, and conditionally deploy if metrics improve. This event-driven approach minimizes downtime and human intervention."
  },
  {
    id: 10,
    domain: "Domain 4: Monitoring, Maintenance, and Security",
    question: "Which tagging strategy is MOST effective for tracking costs of ML experiments across multiple departments and enforcing budget limits?",
    options: [
      "Use only AWS default tags",
      "Implement a mandatory tagging policy with Department, Project, Environment, and CostCenter tags",
      "Tag only the most expensive resources",
      "Use random tags for flexibility"
    ],
    correctAnswer: 1,
    explanation: "A mandatory tagging policy with Department, Project, Environment, and CostCenter tags enables accurate cost allocation and chargeback. AWS Organizations tagging policies can enforce this, and Cost Explorer can filter by these tags. This is essential for multi-department ML cost governance."
  },
  {
    id: 11,
    domain: "Domain 4: Monitoring, Maintenance, and Security",
    question: "Which AWS service is MOST appropriate for detecting unauthorized access attempts to a SageMaker notebook instance that has a public internet-facing endpoint?",
    options: [
      "Amazon CloudWatch Logs",
      "Amazon GuardDuty with threat detection",
      "AWS CloudTrail for API logging",
      "Both B and C"
    ],
    correctAnswer: 3,
    explanation: "Both GuardDuty and CloudTrail provide security monitoring. GuardDuty uses ML to detect anomalous behavior and unauthorized access patterns. CloudTrail logs all API calls, including suspicious ones. Together they provide comprehensive threat detection for SageMaker resources."
  },
  {
    id: 12,
    domain: "Domain 4: Monitoring, Maintenance, and Security",
    question: "Which approach is MOST appropriate for implementing model governance that requires approval from multiple stakeholders before a model is promoted to production?",
    options: [
      "Email the model file to managers for approval",
      "SageMaker Model Registry with approval workflows and version tracking",
      "Store the model in a shared S3 bucket without versioning",
      "Deploy directly to production and review later"
    ],
    correctAnswer: 1,
    explanation: "SageMaker Model Registry supports model versioning, approval workflows, and stage transitions (development, staging, production). Multiple stakeholders can review model metrics, documentation, and bias reports before approving the transition to production. This provides auditability and governance."
  },
  {
    id: 13,
    domain: "Domain 4: Monitoring, Maintenance, and Security",
    question: "Which AWS service is MOST appropriate for monitoring the inference latency of a SageMaker endpoint and automatically sending alerts when p99 latency exceeds 200ms?",
    options: [
      "AWS CloudTrail",
      "Amazon CloudWatch Alarms with p99 latency metric",
      "AWS Config",
      "Amazon Macie"
    ],
    correctAnswer: 1,
    explanation: "Amazon CloudWatch Alarms can monitor SageMaker endpoint metrics including ModelLatency and OverheadLatency at various percentiles (p50, p99). Setting an alarm on p99 latency > 200ms ensures that the worst-case user experience is monitored, and alerts can trigger notifications or automated remediation."
  },
  {
    id: 14,
    domain: "Domain 4: Monitoring, Maintenance, and Security",
    question: "Which data privacy technique is MOST appropriate for anonymizing a dataset containing customer names and phone numbers while maintaining statistical utility for ML training?",
    options: [
      "Replace names with 'REDACTED' and phone numbers with '0000000000'",
      "Tokenization with a secure lookup table and format-preserving encryption for phone numbers",
      "Delete all personal information columns",
      "Publish the dataset publicly without changes"
    ],
    correctAnswer: 1,
    explanation: "Tokenization replaces sensitive data with non-sensitive tokens while maintaining a secure mapping. Format-preserving encryption maintains the data format (e.g., phone number format) while encrypting values. This preserves statistical properties and referential integrity needed for ML, unlike deletion or simple redaction."
  },
  {
    id: 15,
    domain: "Domain 4: Monitoring, Maintenance, and Security",
    question: "Which AWS service is BEST for implementing a cost anomaly detection alert that notifies the ML team when training infrastructure costs spike unexpectedly?",
    options: [
      "AWS Cost Explorer with manual daily checks",
      "AWS Cost Anomaly Detection with SNS notifications",
      "AWS Trusted Advisor with weekly reports",
      "Amazon CloudWatch Dashboards"
    ],
    correctAnswer: 1,
    explanation: "AWS Cost Anomaly Detection uses ML to identify unusual spending patterns and sends alerts via SNS. It can detect unexpected spikes in training costs (e.g., a runaway training job or misconfigured instance type) and notify the team automatically, enabling quick investigation and remediation."
  }
];

export const questions2: ExamQuestion[] = [
  // Test Set 2: Questions 16-30
  {
    id: 1,
    domain: "Domain 4: Monitoring, Maintenance, and Security",
    question: "Which concept describes the situation where a model's performance degrades because the relationship between input features and the target variable changes over time?",
    options: [
      "Data drift",
      "Concept drift",
      "Model staleness",
      "Training-serving skew"
    ],
    correctAnswer: 1,
    explanation: "Concept drift occurs when the underlying relationship between input features and the target variable changes over time. For example, consumer purchasing behavior may shift after a pandemic, making the old model's learned patterns obsolete. This is different from data drift, which is a change in input feature distributions."
  },
  {
    id: 2,
    domain: "Domain 4: Monitoring, Maintenance, and Security",
    question: "Which SageMaker Model Monitor feature is MOST appropriate for detecting bias in model predictions across different demographic groups in production?",
    options: [
      "Data Quality Monitor",
      "Model Bias Monitor",
      "Model Explainability Monitor",
      "Endpoint Invocation Monitor"
    ],
    correctAnswer: 1,
    explanation: "SageMaker Model Bias Monitor tracks pre-training and post-training bias metrics (e.g., Difference in Positive Proportions in Predicted Labels, Disparate Impact) across demographic groups. It alerts when predictions show unfair treatment of specific groups, enabling bias remediation."
  },
  {
    id: 3,
    domain: "Domain 4: Monitoring, Maintenance, and Security",
    question: "Which VPC endpoint type is MOST appropriate for ensuring that SageMaker API calls from within a VPC do not traverse the public internet?",
    options: [
      "Gateway VPC endpoint for S3",
      "Interface VPC endpoint (PrivateLink) for SageMaker Runtime",
      "Gateway VPC endpoint for DynamoDB",
      "NAT Gateway"
    ],
    correctAnswer: 1,
    explanation: "Interface VPC endpoints (powered by AWS PrivateLink) for SageMaker Runtime enable private connectivity between your VPC and SageMaker services. Traffic stays within the AWS network, improving security by preventing API calls from traversing the public internet. This is essential for sensitive ML workloads."
  },
  {
    id: 4,
    domain: "Domain 4: Monitoring, Maintenance, and Security",
    question: "Which AWS KMS key policy is MOST appropriate for ensuring that only authorized SageMaker training jobs can decrypt training datasets stored in S3?",
    options: [
      "Allow all IAM users in the account to use the key",
      "Restrict key usage to a specific IAM role used by SageMaker training jobs",
      "Make the key public for cross-account access",
      "Disable the key when not in use"
    ],
    correctAnswer: 1,
    explanation: "KMS key policies should restrict key usage to the specific IAM role attached to SageMaker training jobs. This ensures that only authorized training jobs can decrypt the data. Allowing all users or making the key public violates the principle of least privilege and creates security risks."
  },
  {
    id: 5,
    domain: "Domain 4: Monitoring, Maintenance, and Security",
    question: "Which approach is MOST appropriate for implementing a retention policy that automatically deletes old ML training logs after 90 days to comply with data minimization principles?",
    options: [
      "Manually delete logs from S3 every month",
      "S3 Lifecycle policy with expiration after 90 days",
      "Store logs indefinitely for future analysis",
      "Disable logging to save storage costs"
    ],
    correctAnswer: 1,
    explanation: "S3 Lifecycle policies can automatically delete or transition objects after a specified period. Setting an expiration of 90 days ensures old training logs are deleted automatically, complying with data minimization principles without manual intervention. This is more reliable than manual deletion."
  },
  {
    id: 6,
    domain: "Domain 4: Monitoring, Maintenance, and Security",
    question: "Which CloudWatch metric is MOST appropriate for monitoring the cost efficiency of a SageMaker endpoint by tracking inference requests per dollar spent?",
    options: [
      "CPUUtilization",
      "InvocationsPerInstance",
      "Custom metric combining InvocationCount with Cost Explorer data",
      "MemoryUtilization"
    ],
    correctAnswer: 2,
    explanation: "While CloudWatch provides InvocationsPerInstance and InvocationCount, the most direct metric for cost efficiency is a custom metric that combines invocation count with cost data from Cost Explorer. This allows you to calculate and monitor requests per dollar, helping optimize endpoint costs."
  },
  {
    id: 7,
    domain: "Domain 4: Monitoring, Maintenance, and Security",
    question: "Which AWS service is MOST appropriate for continuously assessing the security posture of ML resources (S3 buckets, IAM roles, VPC configurations) against AWS best practices?",
    options: [
      "Amazon CloudWatch",
      "AWS Security Hub with AWS Foundational Security Best Practices",
      "AWS Config with custom rules",
      "Both B and C"
    ],
    correctAnswer: 3,
    explanation: "Both AWS Security Hub and AWS Config provide security posture assessment. Security Hub aggregates findings from multiple services against the Foundational Security Best Practices standard. AWS Config rules can evaluate resource configurations against desired settings. Together they provide comprehensive security monitoring for ML infrastructure."
  },
  {
    id: 8,
    domain: "Domain 4: Monitoring, Maintenance, and Security",
    question: "Which approach is BEST for securing data in transit between a SageMaker endpoint and a client application that sends inference requests?",
    options: [
      "Use HTTP without encryption",
      "Enforce TLS 1.2 or higher on the endpoint and client",
      "Use FTP for file transfer",
      "Compress data without encryption"
    ],
    correctAnswer: 1,
    explanation: "Enforcing TLS 1.2 or higher ensures all data in transit between the client and SageMaker endpoint is encrypted. This prevents eavesdropping and man-in-the-middle attacks. AWS services support TLS by default, and clients should verify they are using HTTPS endpoints."
  },
  {
    id: 9,
    domain: "Domain 4: Monitoring, Maintenance, and Security",
    question: "Which model retraining strategy is MOST appropriate when a model's performance degrades due to seasonal changes in customer behavior?",
    options: [
      "Retrain the model on the original static dataset",
      "Implement periodic retraining with a sliding window of recent data that captures seasonal patterns",
      "Never retrain the model",
      "Train a completely new model with a different architecture"
    ],
    correctAnswer: 1,
    explanation: "Seasonal changes require the model to learn from recent data that reflects current patterns. Periodic retraining with a sliding window (e.g., last 12 months) ensures the model captures recent seasonal behavior while retaining enough data for robust training. Retraining on original data won't address seasonal drift."
  },
  {
    id: 10,
    domain: "Domain 4: Monitoring, Maintenance, and Security",
    question: "Which AWS resource tagging approach is MOST effective for attributing ML infrastructure costs to specific business units and enforcing cost accountability?",
    options: [
      "Tag only EC2 instances",
      "Implement consistent tagging across all ML resources (S3, SageMaker, ECR, IAM) with BusinessUnit, CostCenter, and Project tags",
      "Use only auto-generated AWS tags",
      "Tag resources after they are created without standardization"
    ],
    correctAnswer: 1,
    explanation: "Consistent tagging across all ML resources with BusinessUnit, CostCenter, and Project tags enables accurate cost attribution. AWS Cost Explorer and Billing can filter by these tags, allowing business units to see their exact ML costs. Tagging policies in AWS Organizations can enforce this standardization."
  },
  {
    id: 11,
    domain: "Domain 4: Monitoring, Maintenance, and Security",
    question: "Which AWS service is MOST appropriate for detecting anomalous API calls that may indicate unauthorized access to SageMaker model endpoints?",
    options: [
      "AWS CloudTrail with anomaly detection",
      "Amazon GuardDuty for threat detection",
      "AWS IAM Access Analyzer",
      "All of the above"
    ],
    correctAnswer: 3,
    explanation: "All three services contribute to detecting unauthorized access. CloudTrail logs all API calls and can have anomaly detection. GuardDuty uses ML to detect threats. IAM Access Analyzer identifies external access to resources. Using them together provides layered security monitoring for SageMaker endpoints."
  },
  {
    id: 12,
    domain: "Domain 4: Monitoring, Maintenance, and Security",
    question: "Which approach is MOST appropriate for maintaining an audit trail of model lineage, including which dataset version, training code commit, and hyperparameters were used to produce a deployed model?",
    options: [
      "Manual documentation in a shared spreadsheet",
      "SageMaker Model Registry with experiment tracking and artifact versioning",
      "Store model files in S3 with descriptive filenames",
      "Rely on CloudWatch logs for all lineage information"
    ],
    correctAnswer: 1,
    explanation: "SageMaker Model Registry with experiment tracking captures the complete lineage: dataset version, training job, code commit, hyperparameters, and metrics. It provides a structured, queryable record of how each model was produced, which is essential for audit trails, compliance, and debugging."
  },
  {
    id: 13,
    domain: "Domain 4: Monitoring, Maintenance, and Security",
    question: "Which automated action should be triggered when a SageMaker Model Monitor alert indicates that input data contains a high percentage of missing values?",
    options: [
      "Automatically delete the endpoint",
      "Route requests to a fallback model trained on data with missing values, or trigger a pipeline to investigate and fix the data source",
      "Ignore the alert and continue serving",
      "Disable the monitoring schedule"
    ],
    correctAnswer: 1,
    explanation: "A high percentage of missing values indicates a data quality issue at the source. The most appropriate response is to either route to a fallback model that handles missing values or trigger an investigation pipeline to fix the upstream data source. Deleting the endpoint (option A) is too disruptive."
  },
  {
    id: 14,
    domain: "Domain 4: Monitoring, Maintenance, and Security",
    question: "Which approach is MOST appropriate for implementing network segmentation that isolates SageMaker training environments from production inference endpoints?",
    options: [
      "Use the same VPC and security groups for all environments",
      "Deploy training and inference in separate VPCs with no peering between them",
      "Deploy training and inference in separate VPCs with controlled VPC peering for necessary data transfer",
      "Use public subnets for all resources"
    ],
    correctAnswer: 2,
    explanation: "Separate VPCs for training and inference provide network isolation. Controlled VPC peering allows necessary data transfer (e.g., model artifacts from training to inference) while maintaining isolation. This prevents training workloads from affecting production inference and limits the blast radius of security incidents."
  },
  {
    id: 15,
    domain: "Domain 4: Monitoring, Maintenance, and Security",
    question: "Which AWS service is MOST appropriate for creating a compliance report that shows all changes to SageMaker endpoint configurations over the past year?",
    options: [
      "Amazon CloudWatch Logs",
      "AWS Config with configuration history",
      "AWS CloudTrail with event history",
      "Both B and C"
    ],
    correctAnswer: 3,
    explanation: "AWS Config records configuration changes over time and can show the configuration history of SageMaker endpoints. AWS CloudTrail records the API calls that caused those changes. Together they provide a complete compliance picture: what changed (Config) and who made the change (CloudTrail)."
  },
  {
    id: 16,
    domain: "Domain 4: Monitoring, Maintenance, and Security",
    question: "A healthcare company is preparing to deploy an ML model that processes patient data. They need to ensure that their training data in S3 does not contain unprotected personally identifiable information (PII) before model training. Which AWS service should they use to scan the data?",
    options: [
      "Amazon GuardDuty for threat detection",
      "Amazon Macie for PII discovery in S3",
      "AWS WAF for web application protection",
      "AWS Shield for DDoS protection"
    ],
    correctAnswer: 1,
    explanation: "Amazon Macie is a fully managed data security and privacy service that uses machine learning to discover and classify sensitive data (including PII) in S3 buckets. It can identify unprotected PII in training data before model training. GuardDuty detects threats. WAF protects web applications. Shield protects against DDoS attacks."
  },
  {
    id: 17,
    domain: "Domain 4: Monitoring, Maintenance, and Security",
    question: "An ML team needs to document their model's intended use, performance metrics, potential biases, and ethical considerations for regulatory review. Which AWS feature should they use?",
    options: [
      "AWS CloudTrail for audit logging",
      "Amazon SageMaker Model Cards for model documentation",
      "AWS Artifact for compliance reports",
      "Amazon CloudWatch for metric dashboards"
    ],
    correctAnswer: 1,
    explanation: "Amazon SageMaker Model Cards provide a structured way to document model information including intended use, performance metrics, bias assessment, risk rating, and ethical considerations. This is designed for regulatory review and model governance. CloudTrail provides audit logs. Artifact provides compliance reports. CloudWatch provides monitoring dashboards."
  },
  {
    id: 18,
    domain: "Domain 4: Monitoring, Maintenance, and Security",
    question: "A healthcare startup in the US wants to process patient data in their ML pipeline. They need to ensure their AWS infrastructure meets HIPAA requirements for data privacy and security. Which TWO AWS services should they implement?",
    options: [
      "AWS Artifact for on-demand compliance reports",
      "AWS KMS with customer-managed keys for encryption",
      "AWS CloudTrail for audit logging",
      "Amazon S3 with public access enabled",
      "AWS IAM with root user access for all team members"
    ],
    correctAnswer: [0, 1],
    explanation: "AWS Artifact provides on-demand access to AWS compliance reports including HIPAA Business Associate Agreements (BAAs). AWS KMS with customer-managed keys enables encryption of patient data at rest, meeting HIPAA requirements for data protection. CloudTrail is also important but not directly for HIPAA compliance documentation. Public S3 access and root user access violate security best practices."
  }
];
