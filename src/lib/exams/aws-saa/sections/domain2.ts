import type { ExamQuestion } from '@/types';

export const questions: ExamQuestion[] = [
  // Domain 2: Design Resilient Architectures — Test Set 1 (Questions 1–15)
  {
    id: 1,
    domain: "Domain 2: Design Resilient Architectures",
    question: "A company's database on Amazon RDS MySQL is experiencing heavy read traffic, causing performance degradation. They need to scale read capacity without impacting the primary database. Which solution should they implement?",
    options: [
      "Enable Multi-AZ deployment on the RDS instance",
      "Create Amazon RDS Read Replicas and distribute read traffic to them",
      "Increase the instance size of the primary RDS database to a larger type",
      "Migrate the database to Amazon DynamoDB with on-demand capacity"
    ],
    correctAnswer: 1,
    explanation: "RDS Read Replicas provide horizontal scaling for read-heavy workloads by offloading read traffic from the primary database. They can be deployed in the same region or cross-region to improve read capacity and resilience."
  },
  {
    id: 2,
    domain: "Domain 2: Design Resilient Architectures",
    question: "A company needs to implement a disaster recovery strategy for a mission-critical application with an RTO of 1 hour and an RPO of 15 minutes. Which DR strategy is MOST appropriate?",
    options: [
      "Backup and Restore with daily snapshots",
      "Pilot Light with a minimal core infrastructure in the DR region",
      "Warm Standby with a scaled-down but functional environment in the DR region",
      "Multi-Site Active-Active with full capacity in two regions"
    ],
    correctAnswer: 2,
    explanation: "Warm Standby maintains a scaled-down but functional copy of the production environment in the DR region. It can be scaled up within minutes to meet an RTO of 1 hour, while continuous replication can achieve an RPO of 15 minutes."
  },
  {
    id: 3,
    domain: "Domain 2: Design Resilient Architectures",
    question: "An application uses an Auto Scaling group spanning three Availability Zones. The health checks are configured on the EC2 status checks only. During an incident, instances became unhealthy at the application level but the status checks remained healthy, so they were not replaced. What should they do?",
    options: [
      "Enable Elastic Load Balancer health checks in the Auto Scaling group",
      "Reduce the health check grace period to zero",
      "Increase the Auto Scaling group desired capacity",
      "Enable instance protection on all instances"
    ],
    correctAnswer: 0,
    explanation: "Enabling Elastic Load Balancer (ELB) health checks in the Auto Scaling group ensures that instances are marked unhealthy when they fail application-level health checks, not just EC2 status checks. This allows Auto Scaling to replace them automatically."
  },
  {
    id: 4,
    domain: "Domain 2: Design Resilient Architectures",
    question: "A company needs to ensure that if the primary region becomes unavailable, traffic is automatically redirected to a secondary region with minimal manual intervention. Which AWS service should they use?",
    options: [
      "AWS Global Accelerator with static anycast IPs and health checks",
      "Amazon Route 53 with failover routing policy and health checks",
      "Amazon CloudFront with multiple origin regions configured",
      "AWS Elastic Load Balancer with cross-region load balancing"
    ],
    correctAnswer: 1,
    explanation: "Amazon Route 53 with failover routing policy and health checks monitors the health of endpoints and automatically routes traffic to the secondary region when the primary fails. It provides DNS-level failover with minimal manual intervention."
  },
  {
    id: 5,
    domain: "Domain 2: Design Resilient Architectures",
    question: "A company needs to replicate objects from an S3 bucket in us-east-1 to a bucket in eu-west-1 for compliance and disaster recovery. The replication should include object metadata and ACLs. Which feature should they enable?",
    options: [
      "S3 Transfer Acceleration",
      "S3 Cross-Region Replication (CRR) with metadata replication enabled",
      "S3 Batch Operations with a copy job",
      "AWS DataSync with a scheduled task"
    ],
    correctAnswer: 1,
    explanation: "S3 Cross-Region Replication (CRR) automatically replicates objects, metadata, and optionally ACLs or tags to a destination bucket in a different region. It is designed for compliance and disaster recovery with asynchronous replication."
  },
  {
    id: 6,
    domain: "Domain 2: Design Resilient Architectures",
    question: "A company runs an event-driven architecture where an order processing system must handle bursts of traffic without losing messages. The processing system occasionally takes longer than expected to complete. Which service should they use to decouple the systems?",
    options: [
      "Amazon SNS with a fan-out pattern to multiple subscribers",
      "Amazon SQS with a dead-letter queue and increased visibility timeout",
      "AWS Lambda with asynchronous invocation and retry policies",
      "Amazon Kinesis Data Streams with enhanced fan-out"
    ],
    correctAnswer: 1,
    explanation: "Amazon SQS decouples application components by storing messages durably. A dead-letter queue captures failed messages, and an increased visibility timeout prevents other consumers from processing a message while it is still being worked on."
  },
  {
    id: 7,
    domain: "Domain 2: Design Resilient Architectures",
    question: "A company needs to protect their data from accidental deletion by maintaining multiple versions of every object in an S3 bucket. They also need to be able to restore previous versions quickly. Which feature should they enable?",
    options: [
      "S3 Cross-Region Replication",
      "S3 Versioning",
      "S3 Object Lock with governance mode",
      "S3 Lifecycle policies for transition to Glacier"
    ],
    correctAnswer: 1,
    explanation: "S3 Versioning keeps multiple versions of an object in the same bucket. It protects against accidental deletion or overwriting by allowing you to restore previous versions quickly. It is a foundational feature for data resilience."
  },
  {
    id: 8,
    domain: "Domain 2: Design Resilient Architectures",
    question: "A company needs to implement a database that can survive a complete regional outage with minimal data loss. They are using Amazon Aurora PostgreSQL. Which feature should they enable?",
    options: [
      "Aurora Multi-AZ deployment within the same region",
      "Aurora Global Database with a secondary region",
      "Aurora Serverless with automatic scaling",
      "RDS Read Replicas in multiple regions"
    ],
    correctAnswer: 1,
    explanation: "Aurora Global Database spans multiple regions with a primary region and up to five secondary regions. It provides fast cross-region replication (typically under 1 second) and enables disaster recovery with a low RPO by promoting a secondary region."
  },
  {
    id: 9,
    domain: "Domain 2: Design Resilient Architectures",
    question: "A company needs to implement a health check for an API endpoint that runs on EC2 instances. If the API becomes unhealthy, traffic should be automatically redirected to a standby instance in another Availability Zone. Which solution should they use?",
    options: [
      "Amazon CloudWatch with a custom metric and a CloudWatch alarm",
      "An Application Load Balancer with health checks and cross-zone load balancing enabled",
      "AWS Global Accelerator with health checks and endpoint groups",
      "AWS Auto Scaling with a custom CloudWatch alarm for CPU utilization"
    ],
    correctAnswer: 1,
    explanation: "An Application Load Balancer performs health checks on registered targets and automatically routes traffic away from unhealthy instances. With cross-zone load balancing enabled, it distributes traffic across healthy instances in all AZs."
  },
  {
    id: 10,
    domain: "Domain 2: Design Resilient Architectures",
    question: "A company needs to back up multiple AWS resources including EC2 volumes, RDS databases, DynamoDB tables, and EFS file systems using a unified backup policy. They also need to enforce retention policies. Which service should they use?",
    options: [
      "AWS CloudFormation with backup stack templates",
      "AWS Backup with backup plans and vaults",
      "Amazon S3 with cross-region replication and lifecycle policies",
      "AWS DataSync with scheduled replication tasks"
    ],
    correctAnswer: 1,
    explanation: "AWS Backup provides a centralized, fully managed backup service that supports EBS, RDS, DynamoDB, EFS, and other resources. It allows you to create unified backup plans with scheduling, retention policies, and lifecycle management."
  },
  {
    id: 11,
    domain: "Domain 2: Design Resilient Architectures",
    question: "A company needs to implement a fully managed message broker that supports AMQP and MQTT for a microservices architecture. They need the broker to handle complex routing and message transformation. Which service should they use?",
    options: [
      "Amazon SQS with FIFO queues",
      "Amazon SNS with topic filtering",
      "Amazon MQ with ActiveMQ or RabbitMQ",
      "AWS EventBridge with custom event buses"
    ],
    correctAnswer: 2,
    explanation: "Amazon MQ provides managed message brokers (ActiveMQ and RabbitMQ) that support industry-standard protocols including AMQP and MQTT. It handles complex routing, message transformation, and protocol compatibility for decoupling microservices."
  },
  {
    id: 12,
    domain: "Domain 2: Design Resilient Architectures",
    question: "A company needs to design an architecture that can survive a complete Availability Zone failure without manual intervention. Their application runs on EC2 instances with a relational database. Which design should they implement?",
    options: [
      "Deploy EC2 instances in a single AZ with a larger instance type and enable S3 backup",
      "Deploy EC2 instances in multiple AZs behind an ALB and use RDS Multi-AZ deployment",
      "Deploy EC2 instances in multiple regions with Route 53 latency routing and RDS Read Replicas",
      "Deploy EC2 instances in a single AZ with enhanced networking and use EBS snapshots"
    ],
    correctAnswer: 1,
    explanation: "Deploying EC2 instances across multiple AZs behind an ALB ensures application availability during an AZ failure. RDS Multi-AZ provides automatic failover to a standby instance in a different AZ, ensuring database availability without manual intervention."
  },
  {
    id: 13,
    domain: "Domain 2: Design Resilient Architectures",
    question: "A company needs to monitor the health of their EC2 instances and automatically trigger a notification when an instance fails a status check. They also want the instance to be automatically recovered if possible. Which solution should they use?",
    options: [
      "Amazon CloudWatch alarms with EC2 Auto Recovery actions",
      "AWS Systems Manager OpsCenter with automated remediation runbooks",
      "AWS Health Dashboard with email notifications",
      "Amazon EventBridge with a custom event pattern for instance status checks"
    ],
    correctAnswer: 0,
    explanation: "Amazon CloudWatch alarms can monitor EC2 status checks and trigger an EC2 Auto Recovery action. Auto Recovery automatically moves the instance to new hardware within the same AZ when a system status check fails, minimizing downtime."
  },
  {
    id: 14,
    domain: "Domain 2: Design Resilient Architectures",
    question: "A company needs to implement a static website with 99.999999999% durability and global availability. The content should be cached at edge locations for low latency. Which AWS service combination should they use?",
    options: [
      "EC2 instances with Auto Scaling and Elastic Load Balancing",
      "Amazon S3 with static website hosting and Amazon CloudFront",
      "AWS Lambda with API Gateway and DynamoDB",
      "Amazon ECS with Fargate and an Application Load Balancer"
    ],
    correctAnswer: 1,
    explanation: "Amazon S3 provides 99.999999999% durability and high availability for static content. Amazon CloudFront caches content at edge locations globally, providing low latency and additional resilience for the static website."
  },
  {
    id: 15,
    domain: "Domain 2: Design Resilient Architectures",
    question: "A company needs to implement a disaster recovery strategy where they maintain a minimal core infrastructure in a secondary region, with critical data continuously replicated. The remaining infrastructure is provisioned only during a failover. Which strategy is this?",
    options: [
      "Backup and Restore",
      "Pilot Light",
      "Warm Standby",
      "Multi-Site Active-Active"
    ],
    correctAnswer: 1,
    explanation: "Pilot Light maintains a minimal core infrastructure in the DR region, typically just the database with continuous replication. The rest of the infrastructure (e.g., compute) is provisioned and scaled up only during a failover, balancing cost and recovery time."
  }
];

export const questions2: ExamQuestion[] = [
  // Domain 2: Design Resilient Architectures — Test Set 2 (Questions 16–30)
  {
    id: 1,
    domain: "Domain 2: Design Resilient Architectures",
    question: "A company needs to ensure that their DynamoDB table can be restored to any point in time within the last 35 days after accidental data deletion. Which feature should they enable?",
    options: [
      "DynamoDB Streams",
      "DynamoDB Point-in-Time Recovery (PITR)",
      "DynamoDB Global Tables",
      "DynamoDB On-Demand Backup"
    ],
    correctAnswer: 1,
    explanation: "DynamoDB Point-in-Time Recovery (PITR) provides continuous backups, allowing you to restore your table to any point in time within the last 35 days. It protects against accidental writes or deletes without requiring manual snapshots."
  },
  {
    id: 2,
    domain: "Domain 2: Design Resilient Architectures",
    question: "A company needs to distribute user traffic across multiple AWS regions based on the lowest latency for each user. The solution should also provide automatic failover if a region becomes unhealthy. Which service and configuration should they use?",
    options: [
      "Amazon Route 53 with latency-based routing and health checks",
      "AWS Global Accelerator with endpoint groups and health checks",
      "Amazon CloudFront with multiple origins and origin failover",
      "AWS Elastic Load Balancer with cross-region load balancing"
    ],
    correctAnswer: 0,
    explanation: "Amazon Route 53 with latency-based routing directs users to the region with the lowest latency. Combined with health checks, it automatically fails over to the next best region if the primary becomes unhealthy."
  },
  {
    id: 3,
    domain: "Domain 2: Design Resilient Architectures",
    question: "A company needs to implement a message queue that can handle a sudden burst of 100,000 messages without losing any. Messages must be processed exactly once and in order. Which service and configuration should they use?",
    options: [
      "Amazon SNS with FIFO topics and message deduplication",
      "Amazon SQS with FIFO queues and content-based deduplication",
      "Amazon Kinesis Data Streams with a single shard",
      "AWS EventBridge with a custom event bus and archive"
    ],
    correctAnswer: 1,
    explanation: "Amazon SQS FIFO queues guarantee exactly-once processing and strict ordering of messages. Content-based deduplication automatically prevents duplicate messages from being processed, making it ideal for ordered, deduplicated message processing."
  },
  {
    id: 4,
    domain: "Domain 2: Design Resilient Architectures",
    question: "A company needs to implement an architecture where an order placement system can continue accepting orders even if the inventory system is temporarily down. The inventory updates should be processed later when the system recovers. Which pattern should they use?",
    options: [
      "Synchronous API calls between the order and inventory systems with exponential backoff",
      "An asynchronous event-driven architecture using Amazon SQS between the order and inventory systems",
      "A direct database connection from the order system to the inventory database",
      "A scheduled AWS Batch job that periodically syncs orders to the inventory system"
    ],
    correctAnswer: 1,
    explanation: "An asynchronous event-driven architecture using Amazon SQS decouples the order and inventory systems. SQS durably stores messages, allowing the order system to continue accepting orders even when the inventory system is unavailable."
  },
  {
    id: 5,
    domain: "Domain 2: Design Resilient Architectures",
    question: "A company needs to implement a disaster recovery strategy with an RTO of less than 5 minutes and an RPO of near zero. Their application must remain fully operational during a regional outage. Which strategy is MOST appropriate?",
    options: [
      "Pilot Light with a minimal core infrastructure in the DR region",
      "Warm Standby with a scaled-down environment in the DR region",
      "Multi-Site Active-Active with full capacity in multiple regions",
      "Backup and Restore with hourly snapshots"
    ],
    correctAnswer: 2,
    explanation: "Multi-Site Active-Active runs the full application in multiple regions simultaneously, serving traffic from all regions. It provides the lowest RTO (near zero) and RPO (near zero) because traffic is automatically routed to healthy regions without requiring infrastructure provisioning."
  },
  {
    id: 6,
    domain: "Domain 2: Design Resilient Architectures",
    question: "A company needs to replicate their on-premises NAS storage to AWS for disaster recovery. They need to maintain a copy of the data that can be accessed by EC2 instances in the cloud. Which service should they use?",
    options: [
      "AWS Storage Gateway with File Gateway mode",
      "AWS DataSync with a scheduled task to Amazon S3",
      "AWS Snowball Edge with compute enabled",
      "AWS Transfer Family with SFTP endpoints"
    ],
    correctAnswer: 0,
    explanation: "AWS Storage Gateway File Gateway provides a hybrid cloud storage service that presents a file interface to on-premises NAS and asynchronously replicates files to Amazon S3. The files can be accessed by EC2 instances via S3 or NFS."
  },
  {
    id: 7,
    domain: "Domain 2: Design Resilient Architectures",
    question: "A company needs to implement an Auto Scaling group that can respond to both CPU utilization and custom application metrics. The scaling should be proactive rather than reactive. Which feature should they use?",
    options: [
      "Target tracking scaling policies with predefined metrics",
      "Target tracking scaling policies with custom CloudWatch metrics",
      "Step scaling policies with CloudWatch alarms",
      "Scheduled scaling based on predictable traffic patterns"
    ],
    correctAnswer: 1,
    explanation: "Target tracking scaling policies with custom CloudWatch metrics allow Auto Scaling to proactively maintain the target value of a custom metric (e.g., request latency per instance). This is more proactive than reactive step scaling."
  },
  {
    id: 8,
    domain: "Domain 2: Design Resilient Architectures",
    question: "A company needs to implement a database that provides automatic failover to a standby instance in a different Availability Zone with synchronous replication. Which Amazon RDS feature should they use?",
    options: [
      "RDS Read Replicas",
      "RDS Multi-AZ deployment",
      "Aurora Global Database",
      "RDS Cross-Region Read Replicas"
    ],
    correctAnswer: 1,
    explanation: "RDS Multi-AZ deployment creates a synchronous standby replica in a different Availability Zone. If the primary instance fails, RDS automatically fails over to the standby without manual intervention, ensuring high availability."
  },
  {
    id: 9,
    domain: "Domain 2: Design Resilient Architectures",
    question: "A company needs to ensure that their NAT Gateways in a VPC do not become a single point of failure for outbound internet access. Which design should they implement?",
    options: [
      "Deploy a single NAT Gateway in a central VPC and share it via AWS Transit Gateway",
      "Deploy NAT Gateways in each Availability Zone where instances are deployed",
      "Use a NAT instance with high availability instead of NAT Gateways",
      "Configure VPC endpoints for all internet-facing services"
    ],
    correctAnswer: 1,
    explanation: "NAT Gateways are AZ-specific resources. Deploying a NAT Gateway in each AZ where instances are deployed ensures that if one AZ fails, instances in other AZs can still access the internet through their local NAT Gateway."
  },
  {
    id: 10,
    domain: "Domain 2: Design Resilient Architectures",
    question: "A company needs to implement an event-driven architecture where a file upload to S3 triggers multiple independent processing steps (thumbnail generation, metadata extraction, and virus scanning). Which service should they use to orchestrate the events?",
    options: [
      "Amazon SNS with a single topic and multiple Lambda subscribers",
      "Amazon SQS with a single queue and multiple consumers",
      "AWS EventBridge with a custom event bus and multiple rules",
      "AWS Step Functions with a standard workflow"
    ],
    correctAnswer: 2,
    explanation: "AWS EventBridge with a custom event bus and multiple rules can route S3 events to multiple independent targets (Lambda functions, Step Functions, etc.) based on event patterns. It provides a flexible, serverless event router for complex event-driven architectures."
  },
  {
    id: 11,
    domain: "Domain 2: Design Resilient Architectures",
    question: "A company needs to implement a warm standby disaster recovery strategy with an RTO of less than 15 minutes. The application runs on EC2 instances with a PostgreSQL database. Which approach is MOST appropriate?",
    options: [
      "Maintain a minimal EC2 Auto Scaling group in the DR region with the database continuously replicated via RDS Read Replicas",
      "Keep a fully scaled-out copy of the production environment running in the DR region",
      "Store encrypted EBS snapshots and RDS snapshots in the DR region and restore them on demand",
      "Use S3 Cross-Region Replication for all data and deploy CloudFormation templates on demand"
    ],
    correctAnswer: 0,
    explanation: "Warm Standby maintains a scaled-down but functional copy of the application in the DR region. A minimal EC2 Auto Scaling group can be scaled up quickly, and the database can be promoted from a read replica, meeting an RTO of less than 15 minutes."
  },
  {
    id: 12,
    domain: "Domain 2: Design Resilient Architectures",
    question: "A company needs to implement a DynamoDB table that allows users to read and write locally in multiple regions with low latency. Changes must be automatically replicated to all regions. Which feature should they use?",
    options: [
      "DynamoDB Streams with AWS Lambda replication",
      "DynamoDB Global Tables",
      "DynamoDB PITR with cross-region restore",
      "DynamoDB Accelerator (DAX) with regional clusters"
    ],
    correctAnswer: 1,
    explanation: "DynamoDB Global Tables provide multi-region, multi-active replication, allowing applications to read and write locally in multiple regions. Changes are automatically propagated to all regions with eventual consistency."
  },
  {
    id: 13,
    domain: "Domain 2: Design Resilient Architectures",
    question: "A company needs to implement a health check for a web application that runs on EC2 instances in multiple AZs. The health check should be HTTP-based and traffic should only route to healthy instances. Which service should they use?",
    options: [
      "Amazon CloudWatch with a custom HTTP health check metric",
      "An Application Load Balancer with target group health checks",
      "AWS Global Accelerator with TCP health checks",
      "Amazon Route 53 with health checks on the EC2 public IPs"
    ],
    correctAnswer: 1,
    explanation: "An Application Load Balancer performs HTTP-based health checks on registered targets in target groups. It automatically routes traffic only to healthy instances across multiple AZs, providing application-level health monitoring."
  },
  {
    id: 14,
    domain: "Domain 2: Design Resilient Architectures",
    question: "A company needs to back up their EBS volumes, RDS databases, and DynamoDB tables on a daily basis with a 30-day retention policy. They also need to store backups in a separate AWS account for compliance. Which solution should they implement?",
    options: [
      "Write custom Lambda functions to create snapshots and copy them to a cross-account S3 bucket",
      "Use AWS Backup with a backup plan, cross-account backup vault, and a 30-day retention policy",
      "Use Amazon S3 with cross-region replication and lifecycle policies for snapshot storage",
      "Use AWS DataSync with scheduled tasks to copy data to a backup account"
    ],
    correctAnswer: 1,
    explanation: "AWS Backup supports centralized backup plans with cross-account backup vaults. It can back up EBS, RDS, DynamoDB, and other resources on a schedule, enforce retention policies, and copy backups to a vault in a different account for compliance."
  },
  {
    id: 15,
    domain: "Domain 2: Design Resilient Architectures",
    question: "A company needs to ensure that if a single EC2 instance in an Auto Scaling group fails, it is automatically replaced with a new instance. The replacement should use the same launch template. Which feature should they configure?",
    options: [
      "Amazon CloudWatch alarm with a Simple Notification Service notification",
      "Auto Scaling group health checks with EC2 or ELB health check types",
      "AWS Systems Manager State Manager with an association for instance replacement",
      "AWS Lambda triggered by an EventBridge rule for instance termination"
    ],
    correctAnswer: 1,
    explanation: "Auto Scaling group health checks monitor the health of instances. If an instance fails health checks (EC2 status checks or ELB health checks), the Auto Scaling group automatically terminates it and launches a replacement using the same launch template."
  }
];
