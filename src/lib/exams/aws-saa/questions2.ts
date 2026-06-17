import type { ExamQuestion } from '@/types';

export const questions2: ExamQuestion[] = [
  // Domain 1: Design Secure Architectures (30%) - Questions 1-20
  {
    id: 1,
    domain: "Domain 1: Design Secure Architectures",
    question: "A company wants to restrict administrative access to their AWS environment so that actions can only be performed from their corporate office IP range. Which approach is MOST effective?",
    options: [
      "Attach an IAM policy with an IP address condition to the admin IAM role",
      "Use security groups to restrict the source IP for SSH and RDP",
      "Configure AWS WAF to block requests from unauthorized IPs",
      "Enable AWS Shield Advanced on the VPC"
    ],
    correctAnswer: 0,
    explanation: "IAM policies support conditions such as aws:SourceIp to restrict API calls based on the originating IP address. Attaching this to the admin role ensures all AWS API actions can only be initiated from the corporate office IP range, regardless of the service."
  },
  {
    id: 2,
    domain: "Domain 1: Design Secure Architectures",
    question: "An organization needs to centrally manage AWS access for hundreds of employees using their existing Microsoft Active Directory. Which solution requires the LEAST operational overhead?",
    options: [
      "Deploy AWS Directory Service AD Connector and configure IAM roles for each user",
      "Use IAM Identity Center (successor to AWS SSO) with automatic AD synchronization",
      "Create individual IAM users for each employee and manage credentials manually",
      "Set up a SAML 2.0 identity provider with custom federation scripts"
    ],
    correctAnswer: 1,
    explanation: "IAM Identity Center (successor to AWS SSO) integrates natively with Active Directory and provides automatic user synchronization, single sign-on, and permission sets. It requires the least operational overhead compared to manual IAM user management or custom federation."
  },
  {
    id: 3,
    domain: "Domain 1: Design Secure Architectures",
    question: "A company needs to ensure that all S3 objects uploaded by a specific IAM role are automatically encrypted using a customer-managed key. Which combination of services and configurations is required?",
    options: [
      "S3 default encryption with SSE-S3 and a bucket policy requiring encryption headers",
      "S3 default encryption with SSE-KMS and an IAM policy granting kms:GenerateDataKey",
      "S3 Object Lock with governance mode and a bucket policy denying unencrypted PUTs",
      "S3 default encryption with SSE-C and a bucket policy requiring x-amz-server-side-encryption-customer-algorithm"
    ],
    correctAnswer: 1,
    explanation: "S3 default encryption with SSE-KMS automatically encrypts objects using a KMS key. The IAM role needs permission to use the KMS key (kms:GenerateDataKey) for encryption to succeed. This combination ensures all uploads by that role are encrypted with the specified customer-managed key."
  },
  {
    id: 4,
    domain: "Domain 1: Design Secure Architectures",
    question: "Which VPC component provides a stateful firewall that controls traffic at the instance level?",
    options: [
      "Network ACLs",
      "Security Groups",
      "AWS Network Firewall",
      "AWS WAF"
    ],
    correctAnswer: 1,
    explanation: "Security Groups are stateful virtual firewalls that operate at the instance (ENI) level. They automatically allow return traffic for allowed inbound connections and are the primary mechanism for controlling instance-level network access."
  },
  {
    id: 5,
    domain: "Domain 1: Design Secure Architectures",
    question: "A company needs to audit and track changes to AWS resource configurations over time, such as security group rule modifications. Which AWS service should they use?",
    options: [
      "AWS CloudTrail",
      "AWS Config",
      "Amazon GuardDuty",
      "AWS Security Hub"
    ],
    correctAnswer: 1,
    explanation: "AWS Config records and evaluates configurations of AWS resources over time. It tracks changes to resource configurations, maintains a configuration history, and can trigger notifications when configurations drift from desired states."
  },
  {
    id: 6,
    domain: "Domain 1: Design Secure Architectures",
    question: "A company needs to allow an EC2 instance to access an S3 bucket without using long-term credentials or traversing the public internet. Which approach is MOST secure?",
    options: [
      "Store IAM user credentials in AWS Systems Manager Parameter Store and use a VPC endpoint",
      "Attach an IAM role to the EC2 instance with an S3 VPC endpoint",
      "Use a bucket policy that allows access from the VPC CIDR range via a NAT Gateway",
      "Create a service-linked role and route traffic through AWS PrivateLink"
    ],
    correctAnswer: 1,
    explanation: "IAM roles for EC2 provide temporary credentials automatically via the instance metadata service. Combined with a VPC endpoint for S3, traffic stays within the AWS network without using public IPs or long-term credentials."
  },
  {
    id: 7,
    domain: "Domain 1: Design Secure Architectures",
    question: "Which AWS service automatically detects sensitive data such as personally identifiable information (PII) in S3 buckets?",
    options: [
      "AWS Macie",
      "Amazon GuardDuty",
      "AWS Security Hub",
      "AWS Config"
    ],
    correctAnswer: 0,
    explanation: "Amazon Macie is a fully managed data security and privacy service that uses machine learning to automatically discover, classify, and protect sensitive data in S3, including PII, financial data, and credentials."
  },
  {
    id: 8,
    domain: "Domain 1: Design Secure Architectures",
    question: "A company uses AWS Organizations and needs to prevent member accounts from leaving the organization. Which feature should they use?",
    options: [
      "An SCP with the deny action for organizations:LeaveOrganization",
      "An IAM policy attached to the Organizations master account",
      "AWS Config rule to detect account removal attempts",
      "AWS Security Hub finding for organizational changes"
    ],
    correctAnswer: 0,
    explanation: "Service Control Policies (SCPs) in AWS Organizations can be used to deny specific actions across all member accounts. Denying the organizations:LeaveOrganization action prevents any member account from leaving the organization."
  },
  {
    id: 9,
    domain: "Domain 1: Design Secure Architectures",
    question: "Which AWS feature allows a company to create a private connection between their VPC and AWS services without exposing traffic to the public internet?",
    options: [
      "AWS VPN",
      "AWS PrivateLink",
      "AWS Direct Connect",
      "AWS Transit Gateway"
    ],
    correctAnswer: 1,
    explanation: "AWS PrivateLink provides private connectivity between VPCs and AWS services (or third-party services) without traversing the public internet. It uses interface VPC endpoints within the customer's VPC."
  },
  {
    id: 10,
    domain: "Domain 1: Design Secure Architectures",
    question: "A company needs to enforce that all API calls in their AWS account are made using MFA. Which is the MOST effective way to implement this?",
    options: [
      "Create an IAM policy that denies all actions unless the aws:MultiFactorAuthPresent condition is true",
      "Enable MFA on all IAM user accounts and require password changes every 90 days",
      "Use AWS Organizations SCP to require MFA for all member accounts",
      "Configure AWS IAM Identity Center to enforce MFA at the identity provider level"
    ],
    correctAnswer: 0,
    explanation: "An IAM policy with the aws:MultiFactorAuthPresent condition set to true will deny all API calls unless the user has authenticated with MFA. This can be applied to all users and roles via a permissions boundary or policy."
  },
  {
    id: 11,
    domain: "Domain 1: Design Secure Architectures",
    question: "A company needs to securely store and automatically rotate TLS certificates for their web application. Which AWS service should they use?",
    options: [
      "AWS Secrets Manager",
      "AWS Certificate Manager",
      "AWS KMS",
      "AWS CloudHSM"
    ],
    correctAnswer: 0,
    explanation: "AWS Secrets Manager can store and automatically rotate TLS certificates using custom Lambda rotation functions. While ACM manages certificates for AWS-integrated services, Secrets Manager provides general-purpose secure storage with automatic rotation."
  },
  {
    id: 12,
    domain: "Domain 1: Design Secure Architectures",
    question: "Which AWS service can be used to centrally manage AWS WAF rules, AWS Shield Advanced protection, and VPC security groups across multiple accounts?",
    options: [
      "AWS Firewall Manager",
      "AWS Security Hub",
      "AWS Config",
      "Amazon GuardDuty"
    ],
    correctAnswer: 0,
    explanation: "AWS Firewall Manager simplifies administration and maintenance of AWS WAF rules, AWS Shield Advanced protections, and VPC security groups across multiple accounts and resources from a single place."
  },
  {
    id: 13,
    domain: "Domain 1: Design Secure Architectures",
    question: "A company needs to protect their web application from DDoS attacks at the network and transport layers. Which AWS service should they use?",
    options: [
      "AWS WAF",
      "AWS Shield",
      "AWS Firewall Manager",
      "AWS Network Firewall"
    ],
    correctAnswer: 1,
    explanation: "AWS Shield provides managed DDoS protection at the network and transport layers (Layer 3 and 4). AWS Shield Standard is automatically included, while Shield Advanced provides enhanced protection and cost mitigation."
  },
  {
    id: 14,
    domain: "Domain 1: Design Secure Architectures",
    question: "A company needs to ensure that a specific S3 bucket can never be made publicly accessible, even by bucket owners or administrators. Which feature should they use?",
    options: [
      "S3 bucket policies with explicit deny statements",
      "S3 Block Public Access at the account level",
      "S3 Object Lock with compliance mode",
      "AWS Organizations SCPs to deny s3:PutBucketAcl"
    ],
    correctAnswer: 1,
    explanation: "S3 Block Public Access at the account level provides centralized controls that override bucket policies and ACLs. Even bucket owners or administrators cannot make buckets public when these settings are enabled at the account level."
  },
  {
    id: 15,
    domain: "Domain 1: Design Secure Architectures",
    question: "A company needs to implement a bastion host architecture for secure administrative access to EC2 instances in a private subnet. Which combination of components is required?",
    options: [
      "A NAT Gateway in the public subnet and an Application Load Balancer in the private subnet",
      "A bastion host in the public subnet with security groups restricting SSH from the corporate IP",
      "A VPN connection and AWS Systems Manager Session Manager with IAM policies",
      "AWS Direct Connect and a Transit Gateway in the public subnet"
    ],
    correctAnswer: 1,
    explanation: "A bastion host (jump box) deployed in a public subnet with security groups restricting SSH/RDP access from authorized IP ranges provides secure administrative access to instances in private subnets."
  },
  {
    id: 16,
    domain: "Domain 1: Design Secure Architectures",
    question: "Which AWS service allows you to create and manage private certificates for internal use cases without needing to purchase a public domain?",
    options: [
      "AWS Certificate Manager (ACM) public certificates",
      "AWS Certificate Manager Private Certificate Authority",
      "AWS KMS custom key stores",
      "AWS Secrets Manager with custom certificates"
    ],
    correctAnswer: 1,
    explanation: "ACM Private Certificate Authority (PCA) allows you to create and manage private certificates for internal use cases such as securing communication between internal services, without requiring a public domain."
  },
  {
    id: 17,
    domain: "Domain 1: Design Secure Architectures",
    question: "A company needs to monitor for potential security threats by analyzing AWS management events, DNS logs, and VPC flow logs across all accounts. Which AWS service is MOST appropriate?",
    options: [
      "AWS CloudTrail",
      "Amazon GuardDuty",
      "AWS Security Hub",
      "Amazon Macie"
    ],
    correctAnswer: 1,
    explanation: "Amazon GuardDuty is a continuous security monitoring service that uses machine learning to analyze CloudTrail management events, VPC Flow Logs, and DNS logs to detect potential threats across AWS accounts."
  },
  {
    id: 18,
    domain: "Domain 1: Design Secure Architectures",
    question: "A company needs to restrict the outbound internet traffic from their VPC to only allow connections to a specific set of approved domains. Which AWS service should they use?",
    options: [
      "AWS WAF",
      "AWS Network Firewall",
      "AWS Shield",
      "Security Groups"
    ],
    correctAnswer: 1,
    explanation: "AWS Network Firewall provides domain-level filtering, allowing you to allow or deny traffic based on destination domain names. It operates at the VPC level and provides stateful inspection and intrusion prevention."
  },
  {
    id: 19,
    domain: "Domain 1: Design Secure Architectures",
    question: "Which AWS service enables a company to centrally manage and enforce tagging policies across all accounts in an organization?",
    options: [
      "AWS Resource Groups",
      "AWS Organizations Tag Policies",
      "AWS Config Rules",
      "AWS Systems Manager"
    ],
    correctAnswer: 1,
    explanation: "AWS Organizations Tag Policies allow you to centrally define and enforce tagging rules across all accounts in your organization. They can standardize tag keys and values and identify non-compliant resources."
  },
  {
    id: 20,
    domain: "Domain 1: Design Secure Architectures",
    question: "A company needs to provide temporary, limited-privilege access to a third-party vendor for an AWS account. Which approach is MOST secure?",
    options: [
      "Create a new IAM user with AdministratorAccess and share the credentials",
      "Create a cross-account IAM role with an external ID and the minimum required permissions",
      "Add the vendor's IAM user to the company's AWS account with a strong password policy",
      "Share the root account credentials with multi-factor authentication enabled"
    ],
    correctAnswer: 1,
    explanation: "A cross-account IAM role with an external ID and the minimum required permissions provides secure, temporary access without sharing long-term credentials. The external ID prevents the confused deputy problem."
  },
  // Domain 2: Design Resilient Architectures (26%) - Questions 21-37
  {
    id: 21,
    domain: "Domain 2: Design Resilient Architectures",
    question: "A company needs to implement a disaster recovery strategy with an RTO of less than 1 hour and an RPO of less than 5 minutes for a critical application. Which DR strategy is MOST appropriate?",
    options: [
      "Backup and Restore",
      "Pilot Light",
      "Warm Standby",
      "Multi-Site Active-Active"
    ],
    correctAnswer: 3,
    explanation: "Multi-Site Active-Active provides the lowest RTO and RPO by running workloads simultaneously in multiple regions. Traffic is routed to healthy regions, and data is continuously replicated, enabling near-instantaneous failover."
  },
  {
    id: 22,
    domain: "Domain 2: Design Resilient Architectures",
    question: "A company runs an application on EC2 instances in a single Availability Zone. They need to improve availability so the application can survive an AZ failure. What is the MOST cost-effective approach?",
    options: [
      "Deploy a second set of instances in a different region and use Route 53 failover routing",
      "Distribute instances across multiple AZs behind an Application Load Balancer with health checks",
      "Migrate the application to Amazon ECS and use Fargate with a multi-AZ deployment",
      "Create a Multi-AZ deployment of the EC2 instances using RDS Multi-AZ"
    ],
    correctAnswer: 1,
    explanation: "Distributing EC2 instances across multiple AZs behind an Application Load Balancer with health checks is the most cost-effective approach. The ALB automatically routes traffic away from unhealthy instances in a failed AZ."
  },
  {
    id: 23,
    domain: "Domain 2: Design Resilient Architectures",
    question: "A company needs to back up their AWS resources across multiple services including EBS, RDS, DynamoDB, and EFS with a unified backup policy. Which AWS service should they use?",
    options: [
      "AWS CloudFormation",
      "AWS Backup",
      "Amazon S3 with cross-region replication",
      "AWS DataSync"
    ],
    correctAnswer: 1,
    explanation: "AWS Backup provides a fully managed, centralized backup service that supports EBS, RDS, DynamoDB, EFS, and other AWS services. It allows you to create unified backup plans with schedules, retention policies, and lifecycle management."
  },
  {
    id: 24,
    domain: "Domain 2: Design Resilient Architectures",
    question: "Which Amazon RDS feature provides high availability for a database by automatically failing over to a standby instance in a different AZ with synchronous replication?",
    options: [
      "Read Replicas",
      "Multi-AZ deployment",
      "Aurora Global Database",
      "Cross-Region Replication"
    ],
    correctAnswer: 1,
    explanation: "RDS Multi-AZ deployment creates a synchronous standby replica in a different Availability Zone. In the event of an AZ failure, RDS automatically fails over to the standby without manual intervention."
  },
  {
    id: 25,
    domain: "Domain 2: Design Resilient Architectures",
    question: "A company needs to route global user traffic to the nearest healthy AWS region. Which Route 53 routing policy should they use?",
    options: [
      "Simple routing policy",
      "Failover routing policy",
      "Latency-based routing policy",
      "Geolocation routing policy"
    ],
    correctAnswer: 2,
    explanation: "Latency-based routing routes users to the AWS region that provides the lowest latency. Combined with health checks, it ensures traffic is routed to the nearest healthy region."
  },
  {
    id: 26,
    domain: "Domain 2: Design Resilient Architectures",
    question: "A company needs to ensure that their application can continue processing messages even if a downstream component is temporarily unavailable. Which AWS service should they use?",
    options: [
      "Amazon SNS",
      "Amazon SQS",
      "AWS Lambda",
      "Amazon Kinesis"
    ],
    correctAnswer: 1,
    explanation: "Amazon SQS provides a fully managed message queue that decouples application components. If a downstream component is unavailable, messages remain in the queue until the component can process them."
  },
  {
    id: 27,
    domain: "Domain 2: Design Resilient Architectures",
    question: "A company needs to implement a pilot light disaster recovery strategy for an application running on EC2. Which component is MOST critical to maintain in the DR region?",
    options: [
      "A full-scale copy of all EC2 instances with Auto Scaling",
      "A minimal core infrastructure with the database and critical data continuously replicated",
      "Only the S3 buckets with cross-region replication enabled",
      "A complete duplicate of the VPC with all subnets and route tables"
    ],
    correctAnswer: 1,
    explanation: "Pilot Light maintains a minimal core infrastructure in the DR region, typically the database with continuous replication. The rest of the infrastructure can be quickly scaled up when needed, providing a balance between cost and recovery time."
  },
  {
    id: 28,
    domain: "Domain 2: Design Resilient Architectures",
    question: "A company needs to implement a static website with high availability and fault tolerance. Which AWS service combination is MOST appropriate?",
    options: [
      "EC2 instances with an Elastic Load Balancer and Multi-AZ deployment",
      "Amazon S3 with static website hosting and Amazon CloudFront",
      "AWS Lambda with API Gateway and DynamoDB",
      "Amazon ECS with Fargate and an Application Load Balancer"
    ],
    correctAnswer: 1,
    explanation: "Amazon S3 with static website hosting provides 99.999999999% durability and high availability. Amazon CloudFront caches content at edge locations globally, providing additional availability and performance."
  },
  {
    id: 29,
    domain: "Domain 2: Design Resilient Architectures",
    question: "Which AWS feature provides automatic failover for an internet-facing application by monitoring the health of resources and routing traffic away from unhealthy endpoints?",
    options: [
      "AWS Global Accelerator",
      "Amazon Route 53 health checks with failover routing",
      "AWS Elastic Load Balancer health checks",
      "AWS Auto Scaling"
    ],
    correctAnswer: 1,
    explanation: "Amazon Route 53 health checks monitor the health of endpoints and can trigger failover routing policies to redirect traffic to healthy resources when primary endpoints become unhealthy."
  },
  {
    id: 30,
    domain: "Domain 2: Design Resilient Architectures",
    question: "A company needs to replicate their Amazon Aurora database to a secondary region for disaster recovery. Which Aurora feature should they use?",
    options: [
      "Aurora Read Replicas",
      "Aurora Global Database",
      "Aurora Multi-AZ",
      "Aurora Serverless"
    ],
    correctAnswer: 1,
    explanation: "Aurora Global Database is designed for globally distributed applications, allowing a single Aurora database to span multiple AWS regions. It replicates data with typical latency of less than 1 second and provides fast failover."
  },
  {
    id: 31,
    domain: "Domain 2: Design Resilient Architectures",
    question: "A company needs to decouple their order processing system from their inventory management system. Which AWS service should they use to ensure messages are not lost if the inventory system is temporarily down?",
    options: [
      "Amazon SNS with email notifications",
      "Amazon SQS with a visibility timeout",
      "AWS Lambda with retries",
      "Amazon Kinesis Data Streams"
    ],
    correctAnswer: 1,
    explanation: "Amazon SQS provides durable message storage with a visibility timeout. If the inventory system fails to process a message, the message becomes visible again after the timeout and can be processed by another consumer or retried."
  },
  {
    id: 32,
    domain: "Domain 2: Design Resilient Architectures",
    question: "Which AWS service provides a fully managed message broker that supports industry-standard protocols like AMQP and MQTT for decoupling microservices?",
    options: [
      "Amazon SQS",
      "Amazon SNS",
      "Amazon MQ",
      "AWS Step Functions"
    ],
    correctAnswer: 2,
    explanation: "Amazon MQ is a managed message broker service for Apache ActiveMQ and RabbitMQ. It supports industry-standard messaging protocols including AMQP, MQTT, STOMP, and OpenWire for decoupling applications."
  },
  {
    id: 33,
    domain: "Domain 2: Design Resilient Architectures",
    question: "A company needs to ensure that their NAT Gateways do not become a single point of failure for outbound internet access. Which design should they implement?",
    options: [
      "Use a single NAT Gateway in a centralized VPC with Transit Gateway",
      "Deploy NAT Gateways in each Availability Zone where instances are deployed",
      "Use a NAT instance with high availability instead of NAT Gateways",
      "Configure a VPC endpoint for all internet-facing services"
    ],
    correctAnswer: 1,
    explanation: "NAT Gateways are AZ-specific resources. Deploying NAT Gateways in each AZ where instances are deployed ensures that if one AZ fails, instances in other AZs can still access the internet through their local NAT Gateway."
  },
  {
    id: 34,
    domain: "Domain 2: Design Resilient Architectures",
    question: "A company needs to implement a warm standby disaster recovery strategy with an RTO of less than 15 minutes. Which approach is MOST appropriate?",
    options: [
      "Maintain a minimal core infrastructure in the DR region with Auto Scaling to scale up when needed",
      "Keep a fully scaled-out copy of the production environment running in the DR region",
      "Store encrypted backups in the DR region and restore them when needed",
      "Use S3 Cross-Region Replication for all data and deploy CloudFormation templates on demand"
    ],
    correctAnswer: 0,
    explanation: "Warm Standby maintains a scaled-down but functional copy of the production environment in the DR region. With Auto Scaling, it can quickly scale up to full capacity during a disaster, meeting RTO requirements of less than 15 minutes."
  },
  {
    id: 35,
    domain: "Domain 2: Design Resilient Architectures",
    question: "A company needs to provide a global database with multi-region, multi-active replication where users can read and write locally in multiple regions. Which DynamoDB feature should they use?",
    options: [
      "DynamoDB Streams",
      "DynamoDB Global Tables",
      "DynamoDB PITR",
      "DynamoDB Accelerator (DAX)"
    ],
    correctAnswer: 1,
    explanation: "DynamoDB Global Tables provide multi-region, multi-active replication, allowing applications to read and write locally in multiple regions. Changes are automatically propagated to all regions with eventual consistency."
  },
  {
    id: 36,
    domain: "Domain 2: Design Resilient Architectures",
    question: "A company needs to detect and replace unhealthy EC2 instances in an Auto Scaling group automatically. Which component is responsible for this?",
    options: [
      "Amazon CloudWatch Alarms",
      "Elastic Load Balancer health checks",
      "Auto Scaling health checks",
      "AWS Systems Manager"
    ],
    correctAnswer: 2,
    explanation: "Auto Scaling health checks monitor the health of instances and automatically replace unhealthy instances. These can be EC2 status checks or ELB health checks configured in the Auto Scaling group."
  },
  {
    id: 37,
    domain: "Domain 2: Design Resilient Architectures",
    question: "A company needs to protect their data from accidental deletion or modification by retaining immutable backups for 7 years. Which AWS backup feature should they use?",
    options: [
      "S3 Versioning with MFA Delete",
      "AWS Backup with a locked backup vault",
      "S3 Object Lock with compliance mode",
      "RDS Multi-AZ with automated backups"
    ],
    correctAnswer: 1,
    explanation: "AWS Backup with a locked backup vault provides immutable backups that cannot be deleted or modified by anyone, including the root account, until the vault lock expires. This protects against accidental and malicious deletion."
  },
  // Domain 3: Design High-Performing Architectures (24%) - Questions 38-53
  {
    id: 38,
    domain: "Domain 3: Design High-Performing Architectures",
    question: "A company runs a read-heavy database workload and needs to reduce latency for read queries. Their database is running on Amazon RDS MySQL. Which approach is MOST effective?",
    options: [
      "Increase the RDS instance size to a larger instance type",
      "Add RDS Read Replicas to distribute read traffic",
      "Enable Multi-AZ deployment for the RDS instance",
      "Migrate the database to Amazon DynamoDB"
    ],
    correctAnswer: 1,
    explanation: "RDS Read Replicas provide horizontal scaling for read-heavy workloads by allowing read traffic to be distributed across multiple replicas. They can also be placed in different regions for geographic distribution."
  },
  {
    id: 39,
    domain: "Domain 3: Design High-Performing Architectures",
    question: "A company needs to optimize the performance of a high-performance computing (HPC) workload that requires high-throughput, low-latency storage. Which AWS storage service is MOST appropriate?",
    options: [
      "Amazon EFS",
      "Amazon FSx for Lustre",
      "Amazon S3",
      "Amazon EBS gp3"
    ],
    correctAnswer: 1,
    explanation: "Amazon FSx for Lustre provides high-performance parallel file storage optimized for HPC workloads. It offers sub-millisecond latencies and high throughput, and can be linked to S3 for persistent data storage."
  },
  {
    id: 40,
    domain: "Domain 3: Design High-Performing Architectures",
    question: "A company needs to serve dynamic content to users globally with the lowest possible latency. Which AWS service combination is BEST?",
    options: [
      "Amazon CloudFront with Lambda@Edge",
      "AWS Global Accelerator with Elastic Load Balancers",
      "Amazon Route 53 with geolocation routing",
      "AWS App Mesh with CloudFront"
    ],
    correctAnswer: 0,
    explanation: "CloudFront with Lambda@Edge allows you to run lightweight code at edge locations to customize content for users. This combination provides both caching and dynamic content generation at the edge, reducing latency."
  },
  {
    id: 41,
    domain: "Domain 3: Design High-Performing Architectures",
    question: "A company needs a fully managed NoSQL database that provides single-digit millisecond latency at any scale with automatic scaling. Which AWS service is MOST appropriate?",
    options: [
      "Amazon RDS",
      "Amazon DynamoDB",
      "Amazon DocumentDB",
      "Amazon Neptune"
    ],
    correctAnswer: 1,
    explanation: "Amazon DynamoDB is a fully managed NoSQL database that provides single-digit millisecond latency at any scale. It supports on-demand capacity for automatic scaling without manual intervention."
  },
  {
    id: 42,
    domain: "Domain 3: Design High-Performing Architectures",
    question: "A company needs to optimize network performance between EC2 instances within a cluster placement group. Which EC2 feature provides the best network performance?",
    options: [
      "Enhanced Networking with ENA",
      "Elastic Fabric Adapter (EFA)",
      "AWS PrivateLink",
      "AWS Direct Connect"
    ],
    correctAnswer: 0,
    explanation: "Enhanced Networking with the Elastic Network Adapter (ENA) provides high-performance networking capabilities for EC2 instances, including higher bandwidth, lower latency, and lower jitter."
  },
  {
    id: 43,
    domain: "Domain 3: Design High-Performing Architectures",
    question: "A company needs to run complex analytical queries on large datasets stored in S3. Which AWS service is MOST appropriate?",
    options: [
      "Amazon RDS",
      "Amazon Redshift",
      "Amazon Athena",
      "Amazon DynamoDB"
    ],
    correctAnswer: 2,
    explanation: "Amazon Athena is a serverless query service that allows you to analyze data directly in S3 using standard SQL. It is ideal for ad-hoc queries on large datasets without needing to load data into a separate database."
  },
  {
    id: 44,
    domain: "Domain 3: Design High-Performing Architectures",
    question: "A company needs to optimize the performance of a DynamoDB table for read-heavy workloads. Which approach is MOST effective?",
    options: [
      "Increase the provisioned write capacity units",
      "Use DynamoDB Accelerator (DAX)",
      "Enable DynamoDB Streams",
      "Migrate to Amazon RDS"
    ],
    correctAnswer: 1,
    explanation: "DynamoDB Accelerator (DAX) is a fully managed, highly available caching service for DynamoDB. It provides microsecond-level latency for read-heavy workloads, reducing the load on the underlying DynamoDB table."
  },
  {
    id: 45,
    domain: "Domain 3: Design High-Performing Architectures",
    question: "Which AWS service provides a fully managed search and analytics engine that can be used for log analytics, real-time monitoring, and full-text search?",
    options: [
      "Amazon Athena",
      "Amazon OpenSearch Service",
      "Amazon Redshift",
      "Amazon QuickSight"
    ],
    correctAnswer: 1,
    explanation: "Amazon OpenSearch Service is a fully managed search and analytics engine that supports full-text search, log analytics, and real-time monitoring. It is the successor to Amazon Elasticsearch Service."
  },
  {
    id: 46,
    domain: "Domain 3: Design High-Performing Architectures",
    question: "A company needs to optimize storage performance for a database running on EC2 that requires consistent, low-latency IOPS. Which EBS volume type is MOST appropriate?",
    options: [
      "gp3 (General Purpose SSD)",
      "io2 Block Express (Provisioned IOPS SSD)",
      "st1 (Throughput Optimized HDD)",
      "sc1 (Cold HDD)"
    ],
    correctAnswer: 1,
    explanation: "io2 Block Express provides the highest performance for I/O-intensive workloads, offering up to 256,000 IOPS and 4,000 MB/s throughput per volume. It is designed for the most demanding database workloads."
  },
  {
    id: 47,
    domain: "Domain 3: Design High-Performing Architectures",
    question: "A company needs to cache session data for a web application with sub-millisecond latency. Which AWS service is MOST appropriate?",
    options: [
      "Amazon ElastiCache for Memcached",
      "Amazon ElastiCache for Redis",
      "Amazon DynamoDB DAX",
      "Amazon S3"
    ],
    correctAnswer: 1,
    explanation: "Amazon ElastiCache for Redis provides sub-millisecond latency for in-memory data storage. It supports advanced data structures, persistence, and replication, making it ideal for session caching and real-time applications."
  },
  {
    id: 48,
    domain: "Domain 3: Design High-Performing Architectures",
    question: "A company needs to optimize API performance for a global application by caching API responses at edge locations. Which AWS service combination should they use?",
    options: [
      "Amazon API Gateway with AWS AppSync",
      "Amazon API Gateway with Amazon CloudFront",
      "AWS Lambda with Amazon CloudFront",
      "Amazon Route 53 with API Gateway"
    ],
    correctAnswer: 1,
    explanation: "Amazon API Gateway with Amazon CloudFront allows API responses to be cached at edge locations. CloudFront can cache both static and dynamic content, reducing latency and reducing the load on the API backend."
  },
  {
    id: 49,
    domain: "Domain 3: Design High-Performing Architectures",
    question: "A company needs to implement a high-performance computing cluster for tightly coupled workloads. Which EC2 feature allows instances to communicate with low-latency, high-throughput networking?",
    options: [
      "Placement Groups with cluster strategy",
      "Enhanced Networking with ENA",
      "Elastic Fabric Adapter (EFA)",
      "AWS PrivateLink"
    ],
    correctAnswer: 0,
    explanation: "EC2 Placement Groups with cluster strategy pack instances close together in a single Availability Zone. This enables low-latency, high-throughput networking between instances, which is ideal for tightly coupled HPC workloads."
  },
  {
    id: 50,
    domain: "Domain 3: Design High-Performing Architectures",
    question: "A company needs to reduce the load on their relational database by caching frequently accessed query results. Which AWS service is MOST appropriate?",
    options: [
      "Amazon CloudFront",
      "Amazon ElastiCache",
      "Amazon S3",
      "AWS Lambda"
    ],
    correctAnswer: 1,
    explanation: "Amazon ElastiCache provides managed caching for Redis and Memcached. It caches frequently accessed query results, reducing database load and improving application response times for read-heavy workloads."
  },
  {
    id: 51,
    domain: "Domain 3: Design High-Performing Architectures",
    question: "A company needs to transfer large datasets (petabytes) from on-premises to AWS for a high-performance analytics workload. Which AWS service is MOST appropriate?",
    options: [
      "AWS DataSync",
      "AWS Snowmobile",
      "AWS Direct Connect",
      "AWS Transfer Family"
    ],
    correctAnswer: 1,
    explanation: "AWS Snowmobile is an exabyte-scale data transfer service that uses a secure 45-foot shipping container to transfer up to 100PB of data. It is ideal for transferring petabytes of data when network transfer is impractical."
  },
  {
    id: 52,
    domain: "Domain 3: Design High-Performing Architectures",
    question: "A company needs to optimize the performance of a containerized application by placing containers on instances with the most available resources. Which ECS feature should they use?",
    options: [
      "ECS Service Auto Scaling",
      "ECS Capacity Providers",
      "ECS Task Placement Strategies",
      "ECS Fargate launch type"
    ],
    correctAnswer: 2,
    explanation: "ECS Task Placement Strategies allow you to define rules for how tasks are placed on container instances. Strategies like binpack and spread optimize resource utilization and instance distribution."
  },
  {
    id: 53,
    domain: "Domain 3: Design High-Performing Architectures",
    question: "A company needs to implement a high-performance data warehouse for complex analytics queries on petabytes of data. Which AWS service is MOST appropriate?",
    options: [
      "Amazon RDS",
      "Amazon Redshift",
      "Amazon DynamoDB",
      "Amazon Athena"
    ],
    correctAnswer: 1,
    explanation: "Amazon Redshift is a fully managed data warehouse optimized for analytics queries on petabytes of data. It uses columnar storage, massively parallel processing, and advanced query optimization for complex analytical workloads."
  },
  // Domain 4: Design Cost-Optimized Architectures (20%) - Questions 54-65
  {
    id: 54,
    domain: "Domain 4: Design Cost-Optimized Architectures",
    question: "A company runs a batch processing job that can tolerate interruptions and needs to minimize compute costs. Which EC2 pricing model is MOST cost-effective?",
    options: [
      "On-Demand Instances",
      "Reserved Instances",
      "Spot Instances",
      "Dedicated Hosts"
    ],
    correctAnswer: 2,
    explanation: "Spot Instances provide up to 90% discount compared to On-Demand pricing. They are ideal for fault-tolerant, flexible workloads like batch processing that can tolerate interruptions when the Spot price exceeds the bid."
  },
  {
    id: 55,
    domain: "Domain 4: Design Cost-Optimized Architectures",
    question: "A company needs to reduce storage costs for infrequently accessed data that must be retained for 7 years for regulatory compliance. Which S3 storage class is MOST appropriate?",
    options: [
      "S3 Standard",
      "S3 Intelligent-Tiering",
      "S3 Glacier Deep Archive",
      "S3 One Zone-IA"
    ],
    correctAnswer: 2,
    explanation: "S3 Glacier Deep Archive provides the lowest cost storage for long-term retention of data that is rarely accessed. It is designed for archival data with retrieval times of 12 hours, making it ideal for regulatory compliance."
  },
  {
    id: 56,
    domain: "Domain 4: Design Cost-Optimized Architectures",
    question: "A company needs to run a containerized application without managing servers and pay only for the compute resources used by the containers. Which AWS service is MOST cost-effective?",
    options: [
      "Amazon ECS with EC2 launch type",
      "AWS Fargate",
      "Amazon EKS with managed node groups",
      "AWS Lambda"
    ],
    correctAnswer: 1,
    explanation: "AWS Fargate provides serverless compute for containers. You pay only for the vCPU and memory resources used by your containers, with no upfront costs or need to manage EC2 instances or clusters."
  },
  {
    id: 57,
    domain: "Domain 4: Design Cost-Optimized Architectures",
    question: "A company needs to receive automated recommendations for optimizing EC2 instance sizes and types based on historical utilization metrics. Which AWS service should they use?",
    options: [
      "AWS CloudWatch",
      "AWS Compute Optimizer",
      "AWS Trusted Advisor",
      "AWS Systems Manager"
    ],
    correctAnswer: 1,
    explanation: "AWS Compute Optimizer analyzes utilization metrics and provides recommendations for optimal EC2 instance types, sizes, and configurations. It helps identify over-provisioned instances and suggests right-sizing opportunities."
  },
  {
    id: 58,
    domain: "Domain 4: Design Cost-Optimized Architectures",
    question: "A company needs to commit to a consistent amount of compute usage across EC2, Fargate, and Lambda for predictable workloads. Which pricing model is MOST appropriate?",
    options: [
      "Reserved Instances",
      "Savings Plans",
      "Spot Instances",
      "Dedicated Hosts"
    ],
    correctAnswer: 1,
    explanation: "Savings Plans provide flexibility across instance families, regions, and even compute services (EC2, Fargate, Lambda). You commit to a consistent amount of usage (USD/hour) rather than specific instance types."
  },
  {
    id: 59,
    domain: "Domain 4: Design Cost-Optimized Architectures",
    question: "A company needs to store data with unknown or changing access patterns and wants AWS to automatically optimize storage costs without performance impact. Which S3 storage class is MOST appropriate?",
    options: [
      "S3 Standard",
      "S3 Intelligent-Tiering",
      "S3 Standard-IA",
      "S3 Glacier"
    ],
    correctAnswer: 1,
    explanation: "S3 Intelligent-Tiering automatically moves objects between storage classes based on access patterns. It optimizes costs by moving infrequently accessed objects to lower-cost tiers without performance impact or operational overhead."
  },
  {
    id: 60,
    domain: "Domain 4: Design Cost-Optimized Architectures",
    question: "A company needs to reduce data transfer costs for traffic between their VPC and S3 buckets in the same region. Which approach is MOST cost-effective?",
    options: [
      "Use CloudFront for data transfer",
      "Use S3 Transfer Acceleration",
      "Use a VPC endpoint for S3",
      "Use AWS Direct Connect"
    ],
    correctAnswer: 2,
    explanation: "VPC endpoints for S3 allow private connectivity between VPC and S3 without traversing the public internet or NAT Gateway. Data transfer between S3 and EC2 in the same region via VPC endpoints is free."
  },
  {
    id: 61,
    domain: "Domain 4: Design Cost-Optimized Architectures",
    question: "A company needs to run a development environment for 8 hours per day on weekdays only. Which EC2 pricing and scaling strategy is MOST cost-effective?",
    options: [
      "Purchase Reserved Instances for the development instances",
      "Use On-Demand Instances with scheduled scaling to start and stop instances",
      "Use Spot Instances with Auto Scaling",
      "Purchase Savings Plans for the development workload"
    ],
    correctAnswer: 1,
    explanation: "Scheduled scaling with On-Demand instances allows you to automatically start and stop instances based on business hours. This is more cost-effective than keeping instances running 24/7 or purchasing reserved capacity for intermittent usage."
  },
  {
    id: 62,
    domain: "Domain 4: Design Cost-Optimized Architectures",
    question: "A company needs to reduce costs for a caching layer that stores non-critical session data. Which ElastiCache engine is MOST cost-effective?",
    options: [
      "ElastiCache for Redis with cluster mode enabled",
      "ElastiCache for Memcached",
      "ElastiCache for Redis with replicas",
      "DynamoDB Accelerator (DAX)"
    ],
    correctAnswer: 1,
    explanation: "ElastiCache for Memcached is a simple, cost-effective caching solution. It provides in-memory caching without the advanced features (persistence, replication, multi-AZ) of Redis, making it more cost-effective for basic caching needs."
  },
  {
    id: 63,
    domain: "Domain 4: Design Cost-Optimized Architectures",
    question: "Which AWS service provides a centralized view of cost optimization recommendations including idle resources, underutilized instances, and Reserved Instance purchase opportunities?",
    options: [
      "AWS Budgets",
      "AWS Trusted Advisor",
      "AWS Cost Explorer",
      "AWS Compute Optimizer"
    ],
    correctAnswer: 1,
    explanation: "AWS Trusted Advisor provides automated recommendations across cost optimization, security, fault tolerance, performance, and service limits. It identifies idle resources, underutilized instances, and cost savings opportunities."
  },
  {
    id: 64,
    domain: "Domain 4: Design Cost-Optimized Architectures",
    question: "A company needs to reduce database costs for a workload with unpredictable read traffic. Which approach is MOST cost-effective?",
    options: [
      "Provision a large RDS instance to handle peak traffic",
      "Use Aurora Serverless v2 with auto-scaling capacity",
      "Migrate to DynamoDB with provisioned capacity",
      "Use RDS Multi-AZ with read replicas in all regions"
    ],
    correctAnswer: 1,
    explanation: "Aurora Serverless v2 automatically scales capacity based on application demand. You pay only for the database capacity you use, making it cost-effective for unpredictable workloads without over-provisioning."
  },
  {
    id: 65,
    domain: "Domain 4: Design Cost-Optimized Architectures",
    question: "A company needs to optimize costs for a workload that requires consistent compute capacity for 1 year with no flexibility to change instance types. Which pricing model provides the MOST significant discount?",
    options: [
      "Savings Plans",
      "Reserved Instances with All Upfront payment",
      "Spot Instances",
      "On-Demand Instances"
    ],
    correctAnswer: 1,
    explanation: "Reserved Instances with All Upfront payment provide the highest discount (up to 72% compared to On-Demand) for predictable, steady-state workloads. This is the most cost-effective option when you have no flexibility needs and can pay upfront."
  }
];

