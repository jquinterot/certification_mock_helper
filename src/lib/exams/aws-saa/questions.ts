import type { ExamQuestion } from '@/types';

export const questions: ExamQuestion[] = [
  // Domain 1: Design Secure Architectures (30%) - Questions 1-20
  {
    id: 1,
    domain: "Domain 1: Design Secure Architectures",
    question: "A company needs to allow developers to access AWS resources using their corporate credentials. The company uses Active Directory for identity management. Which AWS service should be used to enable this access?",
    options: [
      "AWS Identity and Access Management (IAM) with user accounts",
      "AWS Single Sign-On (SSO) with Active Directory integration",
      "Amazon Cognito with Active Directory as identity provider",
      "AWS Directory Service with IAM federation"
    ],
    correctAnswer: 1,
    explanation: "AWS SSO (now part of IAM Identity Center) allows integration with Active Directory for corporate identity federation. It enables single sign-on access to AWS accounts and applications using existing corporate credentials."
  },
  {
    id: 2,
    domain: "Domain 1: Design Secure Architectures",
    question: "Which AWS service provides centralized logging of all API calls across AWS accounts for security auditing?",
    options: [
      "Amazon CloudWatch",
      "AWS CloudTrail",
      "AWS Config",
      "Amazon GuardDuty"
    ],
    correctAnswer: 1,
    explanation: "AWS CloudTrail records all API calls made across AWS accounts. It provides event history for security analysis, resource change tracking, and compliance auditing. It can be configured to log to a centralized S3 bucket across multiple accounts."
  },
  {
    id: 3,
    domain: "Domain 1: Design Secure Architectures",
    question: "A company needs to enforce encryption for all data stored in S3 buckets. Which approach is MOST effective?",
    options: [
      "Use S3 bucket policies to deny unencrypted uploads",
      "Enable default encryption on all S3 buckets with SSE-KMS",
      "Use IAM policies to require encryption headers",
      "Enable S3 Object Lock on all buckets"
    ],
    correctAnswer: 1,
    explanation: "Enabling default encryption on S3 buckets with SSE-KMS ensures all objects are automatically encrypted without requiring client-side changes. This is the most effective approach as it encrypts both existing and new objects."
  },
  {
    id: 4,
    domain: "Domain 1: Design Secure Architectures",
    question: "Which AWS feature allows you to restrict EC2 instance types that can be launched in an account?",
    options: [
      "AWS Organizations SCPs",
      "IAM policies with conditions",
      "AWS Service Catalog",
      "AWS Config Rules"
    ],
    correctAnswer: 0,
    explanation: "AWS Organizations Service Control Policies (SCPs) can be used to restrict which EC2 instance types can be launched across member accounts. This provides centralized governance at the organization level."
  },
  {
    id: 5,
    domain: "Domain 1: Design Secure Architectures",
    question: "A company needs to rotate database credentials automatically every 30 days. Which AWS service should they use?",
    options: [
      "AWS Certificate Manager",
      "AWS Secrets Manager",
      "AWS Systems Manager Parameter Store",
      "AWS Key Management Service"
    ],
    correctAnswer: 1,
    explanation: "AWS Secrets Manager provides automatic rotation of database credentials with built-in Lambda functions for common databases. It supports rotation intervals and integrates with RDS, DocumentDB, and Redshift."
  },
  {
    id: 6,
    domain: "Domain 1: Design Secure Architectures",
    question: "Which AWS service provides threat detection by analyzing VPC Flow Logs, CloudTrail logs, and DNS logs?",
    options: [
      "AWS WAF",
      "Amazon GuardDuty",
      "AWS Shield",
      "Amazon Inspector"
    ],
    correctAnswer: 1,
    explanation: "Amazon GuardDuty is a threat detection service that continuously monitors for malicious activity using machine learning. It analyzes VPC Flow Logs, CloudTrail logs, and DNS logs to identify threats."
  },
  {
    id: 7,
    domain: "Domain 1: Design Secure Architectures",
    question: "A company needs to implement a Web Application Firewall to protect against SQL injection and XSS attacks. Which AWS service is MOST appropriate?",
    options: [
      "AWS Shield",
      "AWS WAF",
      "AWS Firewall Manager",
      "Amazon CloudFront"
    ],
    correctAnswer: 1,
    explanation: "AWS WAF (Web Application Firewall) protects web applications from common web exploits including SQL injection, XSS, and cross-site forgery. It integrates with CloudFront, ALB, and API Gateway."
  },
  {
    id: 8,
    domain: "Domain 1: Design Secure Architectures",
    question: "Which AWS service helps you identify unintended network access to your EC2 instances?",
    options: [
      "AWS Config",
      "Amazon Inspector",
      "AWS Trusted Advisor",
      "VPC Flow Logs"
    ],
    correctAnswer: 1,
    explanation: "Amazon Inspector performs automated security assessments on EC2 instances and container images. It identifies unintended network accessibility, software vulnerabilities, and deviations from best practices."
  },
  {
    id: 9,
    domain: "Domain 1: Design Secure Architectures",
    question: "A company needs to ensure that EC2 instances can only be accessed from specific IP ranges. Which approach is BEST?",
    options: [
      "Use IAM policies to restrict IP access",
      "Configure security groups with specific source IP ranges",
      "Use NACLs with deny rules for unwanted IPs",
      "Enable AWS Shield Advanced"
    ],
    correctAnswer: 1,
    explanation: "Security groups act as virtual firewalls for EC2 instances. Configuring inbound rules with specific source IP ranges (CIDR blocks) is the most effective way to restrict access to instances from authorized locations."
  },
  {
    id: 10,
    domain: "Domain 1: Design Secure Architectures",
    question: "Which AWS service provides a hardware security module (HSM) for managing encryption keys?",
    options: [
      "AWS KMS",
      "AWS CloudHSM",
      "AWS Certificate Manager",
      "AWS Secrets Manager"
    ],
    correctAnswer: 1,
    explanation: "AWS CloudHSM provides dedicated hardware security modules for managing encryption keys. It offers FIPS 140-2 Level 3 compliance and gives you full control over your keys within a hardware appliance."
  },
  {
    id: 11,
    domain: "Domain 1: Design Secure Architectures",
    question: "A company needs to share AWS resources across multiple accounts while maintaining isolation. Which approach is BEST?",
    options: [
      "Use AWS Organizations with consolidated billing",
      "Use AWS Resource Access Manager (RAM) with VPC sharing",
      "Create IAM roles in each account",
      "Use cross-account S3 bucket policies"
    ],
    correctAnswer: 1,
    explanation: "AWS RAM enables resource sharing across accounts while maintaining network isolation. It allows sharing of VPC subnets, Transit Gateways, and other resources without duplicating infrastructure."
  },
  {
    id: 12,
    domain: "Domain 1: Design Secure Architectures",
    question: "Which AWS feature allows you to detect and prevent the public sharing of S3 buckets?",
    options: [
      "S3 Block Public Access",
      "S3 Bucket Policies",
      "AWS Config Rules",
      "Amazon Macie"
    ],
    correctAnswer: 0,
    explanation: "S3 Block Public Access provides centralized controls to prevent public access to S3 buckets. It can override bucket policies and ACLs at the account level, ensuring no buckets are accidentally made public."
  },
  {
    id: 13,
    domain: "Domain 1: Design Secure Architectures",
    question: "A company needs to encrypt data at rest and in transit for an application running on EC2. Which combination of AWS services is MOST appropriate?",
    options: [
      "Use SSE-S3 for S3 and HTTPS for transit",
      "Use AWS KMS for EBS encryption and TLS for transit",
      "Use AWS CloudHSM for encryption and VPC for network isolation",
      "Use AWS Certificate Manager for both at rest and in transit"
    ],
    correctAnswer: 1,
    explanation: "AWS KMS with EBS encryption provides data at rest encryption for EC2 volumes. TLS/SSL provides encryption in transit. This combination is the standard approach for securing application data on EC2."
  },
  {
    id: 14,
    domain: "Domain 1: Design Secure Architectures",
    question: "Which AWS service provides a centralized way to manage AWS WAF rules across multiple accounts and applications?",
    options: [
      "AWS Shield Advanced",
      "AWS Firewall Manager",
      "AWS Security Hub",
      "Amazon GuardDuty"
    ],
    correctAnswer: 1,
    explanation: "AWS Firewall Manager simplifies administration and maintenance of AWS WAF rules across multiple accounts and resources. It provides centralized rule management for web applications."
  },
  {
    id: 15,
    domain: "Domain 1: Design Secure Architectures",
    question: "A company needs to implement fine-grained access control for a database with multiple users. Which approach is BEST?",
    options: [
      "Use database-level user management with IAM authentication",
      "Use IAM policies with resource-level permissions for RDS",
      "Use VPC security groups to restrict database access",
      "Use AWS SSO for database authentication"
    ],
    correctAnswer: 0,
    explanation: "IAM database authentication for RDS/Aurora provides fine-grained access control. It allows you to manage database users through IAM policies, enabling centralized access management without managing database credentials."
  },
  {
    id: 16,
    domain: "Domain 1: Design Secure Architectures",
    question: "Which AWS service provides a security assessment of AWS accounts against AWS best practices?",
    options: [
      "AWS Config",
      "AWS Trusted Advisor",
      "AWS Security Hub",
      "Amazon Inspector"
    ],
    correctAnswer: 2,
    explanation: "AWS Security Hub provides a comprehensive view of security alerts and compliance status across AWS accounts. It runs automated security checks against AWS best practices and consolidates findings from multiple services."
  },
  {
    id: 17,
    domain: "Domain 1: Design Secure Architectures",
    question: "A company needs to protect against DDoS attacks on a web application. Which AWS service combination is MOST effective?",
    options: [
      "AWS WAF and AWS Shield Standard",
      "AWS Shield Advanced and AWS WAF",
      "Amazon CloudFront and Route 53",
      "AWS Firewall Manager and AWS Config"
    ],
    correctAnswer: 1,
    explanation: "AWS Shield Advanced provides DDoS protection with cost protection and access to the DDoS Response Team. Combined with AWS WAF, it provides comprehensive protection against both network and application layer attacks."
  },
  {
    id: 18,
    domain: "Domain 1: Design Secure Architectures",
    question: "Which AWS feature allows you to enforce MFA for all IAM users in an account?",
    options: [
      "IAM password policy",
      "AWS Organizations SCP",
      "IAM policy conditions",
      "AWS Config rule"
    ],
    correctAnswer: 2,
    explanation: "IAM policies can include conditions that require MFA authentication. For example, the 'aws:MultiFactorAuthPresent' condition can be used to deny actions unless MFA is used, effectively enforcing MFA for all users."
  },
  {
    id: 19,
    domain: "Domain 1: Design Secure Architectures",
    question: "A company needs to store sensitive data in S3 with encryption key rotation. Which approach is BEST?",
    options: [
      "Use SSE-S3 with automatic key rotation",
      "Use SSE-KMS with customer managed keys and automatic rotation",
      "Use client-side encryption with AWS CloudHSM",
      "Use SSE-C with customer-provided keys"
    ],
    correctAnswer: 1,
    explanation: "SSE-KMS with customer managed keys provides automatic key rotation (annual by default). KMS also provides detailed audit trails and fine-grained access control through key policies."
  },
  {
    id: 20,
    domain: "Domain 1: Design Secure Architectures",
    question: "Which AWS service provides a secure way to connect on-premises networks to AWS without traversing the public internet?",
    options: [
      "AWS Direct Connect",
      "AWS VPN",
      "AWS Transit Gateway",
      "AWS PrivateLink"
    ],
    correctAnswer: 0,
    explanation: "AWS Direct Connect provides a dedicated private network connection from on-premises to AWS. It bypasses the public internet, providing consistent network performance and enhanced security."
  },
  // Domain 2: Design Resilient Architectures (26%) - Questions 21-37
  {
    id: 21,
    domain: "Domain 2: Design Resilient Architectures",
    question: "A company needs to ensure their application remains available even if an entire Availability Zone fails. Which AWS feature should they use?",
    options: [
      "Auto Scaling across multiple AZs",
      "Multi-AZ deployment with a load balancer",
      "AWS CloudFormation for rapid recovery",
      "Amazon S3 for static content"
    ],
    correctAnswer: 1,
    explanation: "Multi-AZ deployment across multiple Availability Zones with a load balancer provides automatic failover. If one AZ fails, the load balancer routes traffic to healthy instances in other AZs."
  },
  {
    id: 22,
    domain: "Domain 2: Design Resilient Architectures",
    question: "Which AWS service provides a fully managed backup solution for AWS resources?",
    options: [
      "Amazon S3 with versioning",
      "AWS Backup",
      "AWS Snapshot Manager",
      "AWS CloudFormation"
    ],
    correctAnswer: 1,
    explanation: "AWS Backup is a fully managed service that centralizes and automates backups across AWS services including EBS, RDS, DynamoDB, and EFS. It provides backup scheduling, retention management, and lifecycle policies."
  },
  {
    id: 23,
    domain: "Domain 2: Design Resilient Architectures",
    question: "A company needs to implement a disaster recovery strategy with an RTO of 4 hours. Which DR strategy is MOST appropriate?",
    options: [
      "Backup and Restore",
      "Pilot Light",
      "Warm Standby",
      "Multi-Site Active-Active"
    ],
    correctAnswer: 2,
    explanation: "Warm Standby provides a scaled-down version of the production environment running in DR region. It can be scaled up within hours, making it suitable for RTO requirements of 4 hours or less."
  },
  {
    id: 24,
    domain: "Domain 2: Design Resilient Architectures",
    question: "Which AWS service provides automatic failover for a relational database with synchronous replication?",
    options: [
      "Amazon RDS Read Replicas",
      "Amazon RDS Multi-AZ",
      "Amazon Aurora Global Database",
      "AWS Database Migration Service"
    ],
    correctAnswer: 1,
    explanation: "Amazon RDS Multi-AZ provides automatic failover with synchronous replication to a standby instance in a different Availability Zone. It ensures high availability without manual intervention."
  },
  {
    id: 25,
    domain: "Domain 2: Design Resilient Architectures",
    question: "A company needs to distribute traffic across multiple regions for global availability. Which AWS service is BEST?",
    options: [
      "Amazon Route 53 with latency-based routing",
      "AWS Global Accelerator",
      "AWS Elastic Load Balancer",
      "Amazon CloudFront"
    ],
    correctAnswer: 1,
    explanation: "AWS Global Accelerator provides static IP addresses that route traffic over the AWS global network to optimal endpoints. It provides automatic failover across regions and improves global availability."
  },
  {
    id: 26,
    domain: "Domain 2: Design Resilient Architectures",
    question: "Which AWS service provides point-in-time recovery for a DynamoDB table?",
    options: [
      "DynamoDB Streams",
      "DynamoDB Point-in-Time Recovery (PITR)",
      "DynamoDB Backup",
      "DynamoDB Global Tables"
    ],
    correctAnswer: 1,
    explanation: "DynamoDB Point-in-Time Recovery (PITR) provides continuous backups of your table data, allowing you to restore to any point in time within the last 35 days. It protects against accidental writes or deletes."
  },
  {
    id: 27,
    domain: "Domain 2: Design Resilient Architectures",
    question: "A company needs to implement a queue-based architecture to decouple application components. Which AWS service is MOST appropriate?",
    options: [
      "Amazon SNS",
      "Amazon SQS",
      "AWS Lambda",
      "Amazon Kinesis"
    ],
    correctAnswer: 1,
    explanation: "Amazon SQS provides a fully managed message queue service that decouples application components. It ensures message delivery even if consumer components are temporarily unavailable, improving resilience."
  },
  {
    id: 28,
    domain: "Domain 2: Design Resilient Architectures",
    question: "Which AWS service provides automated healing by replacing unhealthy EC2 instances?",
    options: [
      "Amazon CloudWatch",
      "AWS Auto Scaling",
      "AWS Elastic Beanstalk",
      "Amazon EC2 Auto Recovery"
    ],
    correctAnswer: 1,
    explanation: "AWS Auto Scaling (including EC2 Auto Scaling) automatically replaces unhealthy instances based on health checks. It maintains the desired capacity by launching new instances when existing ones fail."
  },
  {
    id: 29,
    domain: "Domain 2: Design Resilient Architectures",
    question: "A company needs to replicate data across regions for disaster recovery. Which AWS service is BEST for replicating S3 data?",
    options: [
      "S3 Cross-Region Replication (CRR)",
      "S3 Transfer Acceleration",
      "AWS DataSync",
      "AWS Snowball"
    ],
    correctAnswer: 0,
    explanation: "S3 Cross-Region Replication (CRR) automatically replicates objects across buckets in different AWS regions. It provides asynchronous replication for disaster recovery and compliance requirements."
  },
  {
    id: 30,
    domain: "Domain 2: Design Resilient Architectures",
    question: "Which AWS service provides a health check and automatic failover for DNS records?",
    options: [
      "Amazon CloudWatch",
      "AWS Health Dashboard",
      "Amazon Route 53 health checks",
      "AWS Trusted Advisor"
    ],
    correctAnswer: 2,
    explanation: "Amazon Route 53 health checks monitor endpoints and automatically route traffic away from unhealthy resources. It supports failover routing policies for automatic disaster recovery."
  },
  {
    id: 31,
    domain: "Domain 2: Design Resilient Architectures",
    question: "A company needs to implement a pilot light disaster recovery strategy. Which component is MOST critical?",
    options: [
      "Running a full copy of the production environment",
      "Maintaining a minimal core infrastructure with critical data replicated",
      "Using backup and restore for all resources",
      "Implementing multi-region active-active architecture"
    ],
    correctAnswer: 1,
    explanation: "Pilot Light maintains a minimal core infrastructure in the DR region with critical data continuously replicated. It provides a balance between cost and recovery time, allowing rapid scaling during failover."
  },
  {
    id: 32,
    domain: "Domain 2: Design Resilient Architectures",
    question: "Which AWS service provides a managed in-memory cache to improve database read performance?",
    options: [
      "Amazon CloudFront",
      "Amazon ElastiCache",
      "Amazon DynamoDB DAX",
      "AWS Storage Gateway"
    ],
    correctAnswer: 1,
    explanation: "Amazon ElastiCache provides managed Redis or Memcached for in-memory caching. It reduces database load by caching frequently accessed data, improving application performance and resilience."
  },
  {
    id: 33,
    domain: "Domain 2: Design Resilient Architectures",
    question: "A company needs to implement a microservices architecture with service discovery. Which AWS service is MOST appropriate?",
    options: [
      "Amazon ECS with Service Connect",
      "AWS Lambda with API Gateway",
      "AWS Step Functions",
      "Amazon EKS with Kubernetes DNS"
    ],
    correctAnswer: 0,
    explanation: "Amazon ECS with Service Connect provides service discovery and connectivity for microservices. It automatically manages service naming, load balancing, and health checks within the cluster."
  },
  {
    id: 34,
    domain: "Domain 2: Design Resilient Architectures",
    question: "Which AWS feature provides automatic failover for a VPC's internet connection?",
    options: [
      "Multiple NAT Gateways across AZs",
      "AWS Transit Gateway",
      "AWS Direct Connect",
      "Amazon CloudFront"
    ],
    correctAnswer: 0,
    explanation: "NAT Gateways are AZ-specific resources. Deploying NAT Gateways in multiple AZs ensures that if one AZ fails, instances in other AZs can still access the internet through their local NAT Gateway."
  },
  {
    id: 35,
    domain: "Domain 2: Design Resilient Architectures",
    question: "A company needs to replicate data across multiple regions for read performance. Which DynamoDB feature is BEST?",
    options: [
      "DynamoDB Streams",
      "DynamoDB Global Tables",
      "DynamoDB PITR",
      "DynamoDB Accelerator (DAX)"
    ],
    correctAnswer: 1,
    explanation: "DynamoDB Global Tables provides multi-region, multi-active replication. It allows applications to read and write locally in multiple regions, improving both performance and availability."
  },
  {
    id: 36,
    domain: "Domain 2: Design Resilient Architectures",
    question: "Which AWS service provides a managed message broker for decoupling applications with complex routing?",
    options: [
      "Amazon SQS",
      "Amazon SNS",
      "Amazon MQ",
      "AWS EventBridge"
    ],
    correctAnswer: 2,
    explanation: "Amazon MQ provides managed message brokers (ActiveMQ, RabbitMQ) for applications that require complex routing, message transformation, and protocol compatibility. It supports industry-standard messaging protocols."
  },
  {
    id: 37,
    domain: "Domain 2: Design Resilient Architectures",
    question: "A company needs to implement a static website with high availability and global reach. Which AWS service combination is BEST?",
    options: [
      "S3 with CloudFront",
      "EC2 with Elastic Load Balancer",
      "Lambda with API Gateway",
      "Route 53 with S3"
    ],
    correctAnswer: 0,
    explanation: "S3 with CloudFront provides a highly available static website with global edge caching. S3 provides durable storage, and CloudFront caches content at edge locations for low latency and high availability."
  },
  // Domain 3: Design High-Performing Architectures (24%) - Questions 38-53
  {
    id: 38,
    domain: "Domain 3: Design High-Performing Architectures",
    question: "A company needs to optimize database read performance for a read-heavy application. Which approach is MOST effective?",
    options: [
      "Use a larger instance type",
      "Add RDS Read Replicas",
      "Enable Multi-AZ deployment",
      "Use DynamoDB instead of RDS"
    ],
    correctAnswer: 1,
    explanation: "RDS Read Replicas provide horizontal scaling for read-heavy workloads. They offload read traffic from the primary database, improving performance and allowing read replicas to be placed closer to users."
  },
  {
    id: 39,
    domain: "Domain 3: Design High-Performing Architectures",
    question: "Which AWS storage service provides the highest performance for I/O-intensive applications?",
    options: [
      "Amazon S3",
      "Amazon EBS io2 Block Express",
      "Amazon EFS",
      "Amazon FSx for Lustre"
    ],
    correctAnswer: 1,
    explanation: "Amazon EBS io2 Block Express provides up to 256,000 IOPS and 4,000 MB/s throughput per volume. It is designed for the most demanding I/O-intensive workloads including large databases."
  },
  {
    id: 40,
    domain: "Domain 3: Design High-Performing Architectures",
    question: "A company needs to serve dynamic content with low latency globally. Which AWS service is BEST?",
    options: [
      "Amazon CloudFront with Lambda@Edge",
      "Amazon S3 with Transfer Acceleration",
      "AWS Global Accelerator",
      "Amazon Route 53"
    ],
    correctAnswer: 0,
    explanation: "CloudFront with Lambda@Edge allows you to run code at edge locations to customize content delivery. It provides both caching and dynamic content generation at the edge for low latency."
  },
  {
    id: 41,
    domain: "Domain 3: Design High-Performing Architectures",
    question: "Which AWS service provides a high-performance, fully managed NoSQL database?",
    options: [
      "Amazon RDS",
      "Amazon DynamoDB",
      "Amazon DocumentDB",
      "Amazon Keyspaces"
    ],
    correctAnswer: 1,
    explanation: "Amazon DynamoDB is a fully managed NoSQL database that provides single-digit millisecond performance at any scale. It supports auto-scaling and on-demand capacity for variable workloads."
  },
  {
    id: 42,
    domain: "Domain 3: Design High-Performing Architectures",
    question: "A company needs to process large files (up to 100GB) in parallel. Which AWS storage service is BEST?",
    options: [
      "Amazon S3 with multipart upload",
      "Amazon EBS with RAID 0",
      "Amazon FSx for Lustre",
      "AWS Storage Gateway"
    ],
    correctAnswer: 2,
    explanation: "Amazon FSx for Lustre provides high-performance parallel file storage for compute-intensive workloads. It supports high-throughput processing of large files and integrates with S3 for persistent storage."
  },
  {
    id: 43,
    domain: "Domain 3: Design High-Performing Architectures",
    question: "Which AWS service provides a high-performance, low-latency network connection between EC2 instances?",
    options: [
      "Enhanced Networking (ENA)",
      "AWS PrivateLink",
      "AWS Direct Connect",
      "AWS Transit Gateway"
    ],
    correctAnswer: 0,
    explanation: "Enhanced Networking (ENA) provides high-performance networking capabilities for EC2 instances, including higher bandwidth, lower latency, and lower jitter compared to traditional networking."
  },
  {
    id: 44,
    domain: "Domain 3: Design High-Performing Architectures",
    question: "A company needs to optimize database queries for a complex analytics workload. Which AWS service is MOST appropriate?",
    options: [
      "Amazon RDS with read replicas",
      "Amazon Redshift",
      "Amazon DynamoDB",
      "Amazon Neptune"
    ],
    correctAnswer: 1,
    explanation: "Amazon Redshift is a fully managed data warehouse optimized for analytics workloads. It provides columnar storage, massively parallel processing, and advanced query optimization for complex queries."
  },
  {
    id: 45,
    domain: "Domain 3: Design High-Performing Architectures",
    question: "Which AWS service provides a content delivery network (CDN) with edge caching?",
    options: [
      "AWS Global Accelerator",
      "Amazon CloudFront",
      "AWS Direct Connect",
      "AWS Transit Gateway"
    ],
    correctAnswer: 1,
    explanation: "Amazon CloudFront is a content delivery network that caches content at edge locations worldwide. It provides low latency and high transfer speeds for static and dynamic content."
  },
  {
    id: 46,
    domain: "Domain 3: Design High-Performing Architectures",
    question: "A company needs to implement a high-performance computing (HPC) cluster on AWS. Which service is BEST?",
    options: [
      "Amazon EC2 with C6i instances",
      "AWS Batch",
      "AWS ParallelCluster",
      "Amazon ECS"
    ],
    correctAnswer: 2,
    explanation: "AWS ParallelCluster is an open-source cluster management tool that makes it easy to deploy and manage HPC clusters on AWS. It automates the creation of compute environments, networking, and storage."
  },
  {
    id: 47,
    domain: "Domain 3: Design High-Performing Architectures",
    question: "Which AWS service provides a high-performance, in-memory data store for real-time applications?",
    options: [
      "Amazon ElastiCache for Redis",
      "Amazon DynamoDB",
      "Amazon RDS",
      "Amazon S3"
    ],
    correctAnswer: 0,
    explanation: "Amazon ElastiCache for Redis provides sub-millisecond latency for in-memory data storage. It is ideal for real-time applications, caching, and session management requiring high performance."
  },
  {
    id: 48,
    domain: "Domain 3: Design High-Performing Architectures",
    question: "A company needs to optimize EBS performance for a database. Which EBS volume type is MOST appropriate?",
    options: [
      "gp3 (General Purpose SSD)",
      "io2 (Provisioned IOPS SSD)",
      "st1 (Throughput Optimized HDD)",
      "sc1 (Cold HDD)"
    ],
    correctAnswer: 1,
    explanation: "io2 (Provisioned IOPS SSD) provides the highest performance for I/O-intensive workloads. It offers up to 64,000 IOPS and 1,000 MB/s throughput per volume, ideal for databases requiring consistent performance."
  },
  {
    id: 49,
    domain: "Domain 3: Design High-Performing Architectures",
    question: "Which AWS service provides a high-performance file system for machine learning workloads?",
    options: [
      "Amazon EFS",
      "Amazon FSx for Lustre",
      "Amazon S3",
      "AWS Storage Gateway"
    ],
    correctAnswer: 1,
    explanation: "Amazon FSx for Lustre provides high-performance file storage for machine learning workloads. It supports sub-millisecond latencies and high throughput for training large models."
  },
  {
    id: 50,
    domain: "Domain 3: Design High-Performing Architectures",
    question: "A company needs to reduce database load by caching query results. Which AWS service is MOST appropriate?",
    options: [
      "Amazon CloudFront",
      "Amazon ElastiCache",
      "Amazon S3",
      "AWS Lambda"
    ],
    correctAnswer: 1,
    explanation: "Amazon ElastiCache provides managed caching for Redis and Memcached. It caches query results, reducing database load and improving application response times."
  },
  {
    id: 51,
    domain: "Domain 3: Design High-Performing Architectures",
    question: "Which AWS service provides a high-performance, fully managed search service?",
    options: [
      "Amazon Athena",
      "Amazon OpenSearch Service",
      "Amazon Redshift",
      "Amazon QuickSight"
    ],
    correctAnswer: 1,
    explanation: "Amazon OpenSearch Service provides a fully managed search and analytics engine. It supports full-text search, log analytics, and real-time application monitoring with high performance."
  },
  {
    id: 52,
    domain: "Domain 3: Design High-Performing Architectures",
    question: "A company needs to optimize API performance for a global application. Which AWS service is BEST?",
    options: [
      "Amazon CloudFront with API Gateway",
      "AWS Global Accelerator",
      "Amazon Route 53",
      "AWS App Mesh"
    ],
    correctAnswer: 0,
    explanation: "CloudFront with API Gateway provides edge caching for API responses. CloudFront caches API responses at edge locations, reducing latency and improving performance for global users."
  },
  {
    id: 53,
    domain: "Domain 3: Design High-Performing Architectures",
    question: "Which AWS service provides a high-performance, columnar storage for analytics?",
    options: [
      "Amazon RDS",
      "Amazon Redshift",
      "Amazon DynamoDB",
      "Amazon S3"
    ],
    correctAnswer: 1,
    explanation: "Amazon Redshift provides columnar storage optimized for analytics queries. Columnar storage reduces I/O and improves query performance by reading only the columns needed for a query."
  },
  // Domain 4: Design Cost-Optimized Architectures (20%) - Questions 54-65
  {
    id: 54,
    domain: "Domain 4: Design Cost-Optimized Architectures",
    question: "A company needs to reduce EC2 costs for a development environment that is only used during business hours. Which approach is MOST cost-effective?",
    options: [
      "Use Reserved Instances",
      "Use On-Demand Instances with scheduled scaling",
      "Use Spot Instances",
      "Use Savings Plans"
    ],
    correctAnswer: 1,
    explanation: "Scheduled scaling with On-Demand instances allows you to automatically start and stop instances based on business hours. This is more cost-effective than keeping instances running 24/7 for development environments."
  },
  {
    id: 55,
    domain: "Domain 4: Design Cost-Optimized Architectures",
    question: "Which AWS pricing model provides the MOST significant discount for predictable, steady-state workloads?",
    options: [
      "On-Demand",
      "Reserved Instances or Savings Plans",
      "Spot Instances",
      "Dedicated Hosts"
    ],
    correctAnswer: 1,
    explanation: "Reserved Instances and Savings Plans provide up to 72% discount compared to On-Demand pricing for predictable, steady-state workloads. They are ideal for applications with consistent usage patterns."
  },
  {
    id: 56,
    domain: "Domain 4: Design Cost-Optimized Architectures",
    question: "A company needs to store infrequently accessed data with the lowest cost. Which S3 storage class is MOST appropriate?",
    options: [
      "S3 Standard",
      "S3 Intelligent-Tiering",
      "S3 Glacier Deep Archive",
      "S3 One Zone-IA"
    ],
    correctAnswer: 2,
    explanation: "S3 Glacier Deep Archive provides the lowest cost storage for long-term retention of data that is rarely accessed. It is designed for backup and archival data with retrieval times of 12 hours."
  },
  {
    id: 57,
    domain: "Domain 4: Design Cost-Optimized Architectures",
    question: "Which AWS service provides recommendations for cost optimization across AWS resources?",
    options: [
      "AWS Budgets",
      "AWS Trusted Advisor",
      "AWS Cost Explorer",
      "AWS Compute Optimizer"
    ],
    correctAnswer: 1,
    explanation: "AWS Trusted Advisor provides automated recommendations for cost optimization, including identifying idle resources, underutilized instances, and opportunities for Reserved Instance purchases."
  },
  {
    id: 58,
    domain: "Domain 4: Design Cost-Optimized Architectures",
    question: "A company needs to run batch processing jobs that can tolerate interruptions. Which EC2 pricing model is MOST cost-effective?",
    options: [
      "On-Demand Instances",
      "Reserved Instances",
      "Spot Instances",
      "Dedicated Instances"
    ],
    correctAnswer: 2,
    explanation: "Spot Instances provide up to 90% discount compared to On-Demand pricing. They are ideal for fault-tolerant, flexible workloads like batch processing that can tolerate interruptions."
  },
  {
    id: 59,
    domain: "Domain 4: Design Cost-Optimized Architectures",
    question: "Which AWS service provides a serverless compute option that charges only for actual compute time used?",
    options: [
      "Amazon EC2",
      "AWS Lambda",
      "AWS Fargate",
      "Amazon ECS"
    ],
    correctAnswer: 1,
    explanation: "AWS Lambda provides serverless compute with per-millisecond billing. You pay only for the compute time consumed when your code is running, with no charges when code is idle."
  },
  {
    id: 60,
    domain: "Domain 4: Design Cost-Optimized Architectures",
    question: "A company needs to reduce data transfer costs between S3 and EC2 in the same region. Which approach is BEST?",
    options: [
      "Use CloudFront for data transfer",
      "Use S3 Transfer Acceleration",
      "Use VPC endpoints for S3",
      "Use AWS Direct Connect"
    ],
    correctAnswer: 2,
    explanation: "VPC endpoints for S3 allow private connectivity between VPC and S3 without traversing the public internet. Data transfer between S3 and EC2 in the same region using VPC endpoints is free."
  },
  {
    id: 61,
    domain: "Domain 4: Design Cost-Optimized Architectures",
    question: "Which AWS feature automatically moves objects between storage classes based on access patterns?",
    options: [
      "S3 Lifecycle Policies",
      "S3 Intelligent-Tiering",
      "S3 Cross-Region Replication",
      "S3 Versioning"
    ],
    correctAnswer: 1,
    explanation: "S3 Intelligent-Tiering automatically moves objects between storage classes based on access patterns. It optimizes costs by moving infrequently accessed objects to lower-cost tiers without performance impact."
  },
  {
    id: 62,
    domain: "Domain 4: Design Cost-Optimized Architectures",
    question: "A company needs to rightsize EC2 instances based on actual utilization. Which AWS service is MOST appropriate?",
    options: [
      "AWS CloudWatch",
      "AWS Compute Optimizer",
      "AWS Trusted Advisor",
      "AWS Systems Manager"
    ],
    correctAnswer: 1,
    explanation: "AWS Compute Optimizer analyzes utilization metrics and provides recommendations for optimal instance types and sizes. It helps identify over-provisioned instances and suggests right-sizing opportunities."
  },
  {
    id: 63,
    domain: "Domain 4: Design Cost-Optimized Architectures",
    question: "Which AWS service provides a cost-effective way to run containerized workloads without managing servers?",
    options: [
      "Amazon ECS with EC2 launch type",
      "AWS Fargate",
      "Amazon EKS with managed node groups",
      "AWS Lambda"
    ],
    correctAnswer: 1,
    explanation: "AWS Fargate provides serverless compute for containers. You pay only for the vCPU and memory resources used by your containers, with no upfront costs or need to manage EC2 instances."
  },
  {
    id: 64,
    domain: "Domain 4: Design Cost-Optimized Architectures",
    question: "A company needs to implement a caching layer to reduce database costs. Which AWS service provides the MOST cost-effective solution?",
    options: [
      "Amazon ElastiCache for Memcached",
      "Amazon ElastiCache for Redis",
      "Amazon DynamoDB DAX",
      "Amazon CloudFront"
    ],
    correctAnswer: 0,
    explanation: "Amazon ElastiCache for Memcached is a simple, cost-effective caching solution. It provides in-memory caching without the advanced features of Redis, making it more cost-effective for basic caching needs."
  },
  {
    id: 65,
    domain: "Domain 4: Design Cost-Optimized Architectures",
    question: "Which AWS pricing model allows you to commit to a consistent amount of usage (in USD/hour) across instance families?",
    options: [
      "Reserved Instances",
      "Savings Plans",
      "Spot Instances",
      "Dedicated Hosts"
    ],
    correctAnswer: 1,
    explanation: "Savings Plans provide flexibility across instance families, regions, and operating systems. You commit to a consistent amount of usage (USD/hour) rather than specific instance types, providing more flexibility than Reserved Instances."
  }
];

