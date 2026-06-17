import type { ExamQuestion } from '@/types';

export const questions: ExamQuestion[] = [
  // Domain 4: Design Cost-Optimized Architectures — Test Set 1 (Questions 1–15)
  {
    id: 1,
    domain: "Domain 4: Design Cost-Optimized Architectures",
    question: "A company runs a batch processing job that can tolerate interruptions and needs to minimize compute costs. The job takes 4 hours to complete and does not need to run continuously. Which EC2 pricing model is MOST cost-effective?",
    options: [
      "On-Demand Instances",
      "Reserved Instances with 1-year term",
      "Spot Instances",
      "Dedicated Hosts"
    ],
    correctAnswer: 2,
    explanation: "Spot Instances provide up to 90% discount compared to On-Demand pricing. They are ideal for fault-tolerant, flexible workloads like batch processing that can tolerate interruptions and do not require continuous execution."
  },
  {
    id: 2,
    domain: "Domain 4: Design Cost-Optimized Architectures",
    question: "A company needs to reduce storage costs for infrequently accessed data that must be retained for 7 years for regulatory compliance. Retrieval times of 12 hours are acceptable. Which S3 storage class is MOST appropriate?",
    options: [
      "S3 Standard-IA",
      "S3 Intelligent-Tiering",
      "S3 Glacier Deep Archive",
      "S3 One Zone-IA"
    ],
    correctAnswer: 2,
    explanation: "S3 Glacier Deep Archive provides the lowest cost storage for long-term retention of data that is rarely accessed. It is designed for archival data with retrieval times of 12 hours, making it ideal for regulatory compliance with infrequent access."
  },
  {
    id: 3,
    domain: "Domain 4: Design Cost-Optimized Architectures",
    question: "A company has a predictable, steady-state workload running on EC2 instances 24/7 for the next 3 years. They want the maximum possible discount. Which pricing model and payment option should they choose?",
    options: [
      "Reserved Instances with No Upfront payment",
      "Reserved Instances with All Upfront payment",
      "Savings Plans with Partial Upfront payment",
      "Spot Instances with a persistent request"
    ],
    correctAnswer: 1,
    explanation: "Reserved Instances with All Upfront payment provide the highest discount (up to 72% compared to On-Demand) for predictable, steady-state workloads. This is the most cost-effective option when the company can pay the full amount upfront."
  },
  {
    id: 4,
    domain: "Domain 4: Design Cost-Optimized Architectures",
    question: "A company needs to run a containerized application without managing servers and pay only for the compute resources used by the containers. Which AWS service is MOST cost-effective?",
    options: [
      "Amazon ECS with EC2 launch type",
      "AWS Fargate",
      "Amazon EKS with managed node groups",
      "AWS Lambda with container image support"
    ],
    correctAnswer: 1,
    explanation: "AWS Fargate provides serverless compute for containers. You pay only for the vCPU and memory resources used by your containers, with no upfront costs or need to manage EC2 instances or clusters."
  },
  {
    id: 5,
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
    id: 6,
    domain: "Domain 4: Design Cost-Optimized Architectures",
    question: "A company needs to store data with unknown or changing access patterns and wants AWS to automatically optimize storage costs without performance impact or operational overhead. Which S3 storage class is MOST appropriate?",
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
    id: 7,
    domain: "Domain 4: Design Cost-Optimized Architectures",
    question: "A company needs to reduce data transfer costs for traffic between their VPC and S3 buckets in the same region. The traffic currently flows through a NAT Gateway. Which approach is MOST cost-effective?",
    options: [
      "Use CloudFront for data transfer to S3",
      "Use S3 Transfer Acceleration",
      "Use a VPC endpoint for S3",
      "Use AWS Direct Connect"
    ],
    correctAnswer: 2,
    explanation: "VPC endpoints for S3 allow private connectivity between VPC and S3 without traversing the public internet or NAT Gateway. Data transfer between S3 and EC2 in the same region via VPC endpoints is free, eliminating NAT Gateway data processing charges."
  },
  {
    id: 8,
    domain: "Domain 4: Design Cost-Optimized Architectures",
    question: "A company needs to run a development environment for 8 hours per day on weekdays only. They want to minimize EC2 costs. Which pricing and scaling strategy is MOST cost-effective?",
    options: [
      "Purchase Reserved Instances for the development instances",
      "Use On-Demand Instances with scheduled scaling to start and stop instances",
      "Use Spot Instances with Auto Scaling",
      "Purchase Savings Plans for the development workload"
    ],
    correctAnswer: 1,
    explanation: "Scheduled scaling with On-Demand instances allows the company to automatically start and stop instances based on business hours (8 hours/day, weekdays). This is more cost-effective than keeping instances running 24/7 or purchasing reserved capacity for intermittent usage."
  },
  {
    id: 9,
    domain: "Domain 4: Design Cost-Optimized Architectures",
    question: "A company needs to reduce costs for a caching layer that stores non-critical session data. They need in-memory caching but do not require persistence, replication, or advanced data structures. Which ElastiCache engine is MOST cost-effective?",
    options: [
      "ElastiCache for Redis with cluster mode enabled",
      "ElastiCache for Memcached",
      "ElastiCache for Redis with replicas",
      "DynamoDB Accelerator (DAX)"
    ],
    correctAnswer: 1,
    explanation: "ElastiCache for Memcached is a simple, cost-effective caching solution. It provides in-memory caching without the advanced features (persistence, replication, multi-AZ, advanced data structures) of Redis, making it more cost-effective for basic caching needs."
  },
  {
    id: 10,
    domain: "Domain 4: Design Cost-Optimized Architectures",
    question: "A company needs to reduce database costs for a workload with unpredictable traffic that includes occasional spikes. They are currently using a large RDS instance to handle peak traffic. Which approach is MOST cost-effective?",
    options: [
      "Right-size the RDS instance to match average traffic and use read replicas for spikes",
      "Use Aurora Serverless v2 with auto-scaling capacity",
      "Migrate to DynamoDB with provisioned capacity and Auto Scaling",
      "Use RDS Multi-AZ with a smaller instance type"
    ],
    correctAnswer: 1,
    explanation: "Aurora Serverless v2 automatically scales database capacity based on application demand. You pay only for the capacity you use, making it cost-effective for unpredictable workloads without over-provisioning for peak traffic."
  },
  {
    id: 11,
    domain: "Domain 4: Design Cost-Optimized Architectures",
    question: "A company needs to implement a cost allocation strategy to track spending by department across multiple AWS accounts. They also want to generate reports and set budgets per department. Which combination of services should they use?",
    options: [
      "AWS Cost Explorer and AWS Organizations consolidated billing",
      "AWS Budgets, AWS Cost Explorer, and cost allocation tags",
      "AWS Trusted Advisor and AWS Billing Console",
      "AWS Config and AWS Systems Manager Inventory"
    ],
    correctAnswer: 1,
    explanation: "Cost allocation tags allow you to categorize resources by department. AWS Cost Explorer provides cost analysis and reporting by tag, and AWS Budgets allows you to set custom budgets per department with alerting."
  },
  {
    id: 12,
    domain: "Domain 4: Design Cost-Optimized Architectures",
    question: "A company needs to move objects older than 90 days from S3 Standard to a lower-cost storage class automatically. Which feature should they configure?",
    options: [
      "S3 Intelligent-Tiering with archive configurations",
      "S3 Lifecycle policies with a transition rule to S3 Standard-IA or Glacier",
      "S3 Cross-Region Replication with a destination in a lower-cost region",
      "S3 Object Lock with a retention period of 90 days"
    ],
    correctAnswer: 1,
    explanation: "S3 Lifecycle policies allow you to define rules that automatically transition objects to lower-cost storage classes (e.g., Standard-IA, Glacier) after a specified number of days. This reduces storage costs without manual intervention."
  },
  {
    id: 13,
    domain: "Domain 4: Design Cost-Optimized Architectures",
    question: "A company needs to optimize compute costs for a workload that requires consistent compute capacity for 1 year but may need to change instance types during the term. Which pricing model provides the best balance of discount and flexibility?",
    options: [
      "Reserved Instances with convertible reservations",
      "Savings Plans with Compute Savings Plans",
      "Spot Instances with a diversified fleet",
      "On-Demand Instances with Auto Scaling"
    ],
    correctAnswer: 1,
    explanation: "Compute Savings Plans provide flexibility across instance families, regions, and operating systems. You commit to a consistent amount of usage (USD/hour) rather than specific instance types, providing both significant discounts and flexibility."
  },
  {
    id: 14,
    domain: "Domain 4: Design Cost-Optimized Architectures",
    question: "A company needs to reduce network data transfer costs for a workload that frequently transfers data between two VPCs in the same region. The traffic currently flows over the public internet. Which approach is MOST cost-effective?",
    options: [
      "Use AWS Direct Connect with a private VIF",
      "Use VPC peering to connect the VPCs directly",
      "Use AWS Transit Gateway with a VPN attachment",
      "Use AWS PrivateLink with interface endpoints"
    ],
    correctAnswer: 1,
    explanation: "VPC peering connects two VPCs directly, allowing traffic to flow over the AWS private network without traversing the public internet. Data transfer between peered VPCs in the same region is charged at the same low rate as intra-region data transfer, which is significantly cheaper than internet data transfer."
  },
  {
    id: 15,
    domain: "Domain 4: Design Cost-Optimized Architectures",
    question: "A company needs to optimize compute costs for a general-purpose web application currently running on x86-based EC2 instances. They want to maintain similar performance while reducing costs. Which instance family should they evaluate first?",
    options: [
      "M6i (Intel-based general purpose)",
      "M6g (AWS Graviton2-based general purpose)",
      "C6i (Intel-based compute optimized)",
      "R6i (Intel-based memory optimized)"
    ],
    correctAnswer: 1,
    explanation: "AWS Graviton2-based instances (M6g) provide up to 40% better price-performance compared to comparable x86-based instances for general-purpose workloads. They are the most cost-effective choice for web applications that can run on ARM-based processors."
  }
];

export const questions3: ExamQuestion[] = [
  // Domain 4: Design Cost-Optimized Architectures — Test Set 3 (Questions 16–30)
  {
    id: 16,
    domain: "Domain 4: Design Cost-Optimized Architectures",
    question: "A company runs a production web application on EC2 instances with highly variable traffic throughout the day. The minimum number of instances required during off-peak hours is 2, but during peak hours, they need up to 20 instances. Which Auto Scaling strategy is MOST cost-effective?",
    options: [
      "Use a fixed number of Reserved Instances for the minimum capacity and On-Demand Instances for peak scaling",
      "Use Reserved Instances for all instances with a mix of instance sizes",
      "Use Spot Instances for all instances with a diversified fleet",
      "Use On-Demand Instances only with step scaling"
    ],
    correctAnswer: 0,
    explanation: "Reserving the minimum required capacity (2 instances) with Reserved Instances provides discounted pricing for baseline capacity. Scaling beyond that with On-Demand instances handles peak demand cost-effectively without over-committing to Spot capacity that could be interrupted during business peak hours."
  },
  {
    id: 17,
    domain: "Domain 4: Design Cost-Optimized Architectures",
    question: "A company needs to store 500TB of data that will be accessed once per month for the first year, then accessed less than once per year for the next 9 years. Retrieval time of 12 hours is acceptable. Which S3 storage solution is MOST cost-effective?",
    options: [
      "S3 Standard with S3 Lifecycle policies transitioning to Glacier Deep Archive",
      "S3 Intelligent-Tiering with automatic archival to Deep Archive Access tier",
      "S3 Standard-IA for the first year, then transition to Glacier Deep Archive manually",
      "S3 One Zone-IA with cross-region replication to a secondary region"
    ],
    correctAnswer: 1,
    explanation: "S3 Intelligent-Tiering automatically moves objects through access tiers based on usage patterns. With the Archive Access and Deep Archive Access tiers, it optimizes costs for data with unknown or changing access patterns without requiring manual transitions or lifecycle policy configuration."
  },
  {
    id: 18,
    domain: "Domain 4: Design Cost-Optimized Architectures",
    question: "A company needs to reduce RDS database costs for a development environment that is only used during business hours (8 hours/day, 5 days/week). The database does not require high availability. Which approach is MOST cost-effective?",
    options: [
      "Use RDS Multi-AZ with a Reserved Instance",
      "Use a single-AZ RDS instance with automated backups and stop the instance during off-hours",
      "Migrate to Aurora Serverless v2 with auto-pause enabled",
      "Use RDS Read Replicas to distribute the workload"
    ],
    correctAnswer: 2,
    explanation: "Aurora Serverless v2 with auto-pause automatically stops the database cluster after a specified period of inactivity and resumes it when connections are made. This eliminates costs entirely during off-hours without requiring manual intervention or scheduled Lambda functions."
  },
  {
    id: 19,
    domain: "Domain 4: Design Cost-Optimized Architectures",
    question: "A company needs to optimize DynamoDB costs for a workload where write capacity is predictable at 500 WCU/hour but read capacity varies significantly between 100 and 10,000 RCU/hour. Which capacity model is MOST cost-effective?",
    options: [
      "Provisioned capacity with Auto Scaling for both reads and writes",
      "On-demand capacity mode for both reads and writes",
      "Provisioned capacity for writes with On-demand for reads",
      "Provisioned capacity with a fixed number of read units"
    ],
    correctAnswer: 0,
    explanation: "Provisioned capacity with Auto Scaling adjusts read and write capacity based on actual usage patterns. Since writes are predictable (500 WCU), you can set a target utilization that matches the predictable pattern while Auto Scaling handles the variable read traffic cost-effectively."
  },
  {
    id: 20,
    domain: "Domain 4: Design Cost-Optimized Architectures",
    question: "A company runs a stateless application on EC2 instances across 3 Availability Zones. They want to optimize costs and are considering replacing the NAT Gateway with a NAT Instance. Which factor is MOST important for cost optimization?",
    options: [
      "The NAT Instance must be larger than the NAT Gateway to handle the same throughput",
      "Data processing charges for NAT Gateway vs. the hourly cost of the NAT Instance",
      "The NAT Instance must be deployed in each AZ for high availability",
      "NAT Instances require more maintenance and monitoring than NAT Gateways"
    ],
    correctAnswer: 1,
    explanation: "NAT Gateways are charged per hour plus data processing fees. For high-throughput workloads, a NAT Instance (which only charges per hour) can be more cost-effective than a NAT Gateway with data processing fees. However, NAT Instances require more operational overhead and must be sized appropriately for the workload."
  },
  {
    id: 21,
    domain: "Domain 4: Design Cost-Optimized Architectures",
    question: "A company needs to connect their on-premises data center to AWS with a dedicated network connection for 24/7 data transfer. They transfer approximately 50TB/month and need consistent, low-latency throughput. Which solution is MOST cost-effective?",
    options: [
      "AWS VPN with a transit gateway attachment",
      "AWS Direct Connect with a 1 Gbps dedicated connection",
      "AWS Direct Connect with a 50 Mbps hosted connection",
      "AWS Public Virtual Interface to S3 via the internet"
    ],
    correctAnswer: 1,
    explanation: "For 50TB/month of continuous data transfer, a Direct Connect dedicated connection (1 Gbps) provides consistent throughput and eliminates per-GB data transfer charges. At 50TB/month, the dedicated connection cost would be significantly lower than equivalent VPN or internet transfer costs."
  },
  {
    id: 22,
    domain: "Domain 4: Design Cost-Optimized Architectures",
    question: "A company enables detailed monitoring (1-minute granularity) for all EC2 instances in their environment. They receive a high AWS bill from CloudWatch charges. Which approach is MOST cost-effective while maintaining operational visibility?",
    options: [
      "Use CloudWatch detailed monitoring with a Resource Data Sync to reduce costs",
      "Use CloudWatch basic monitoring (5-minute granularity) and use CloudWatch Contributor Insights for detailed analysis",
      "Disable all CloudWatch monitoring and use third-party monitoring tools",
      "Use CloudWatch embedded metrics format with Lambda to reduce ingestion costs"
    ],
    correctAnswer: 1,
    explanation: "CloudWatch basic monitoring (5-minute granularity) is free for EC2 instances, while detailed monitoring (1-minute) charges $3.50 per instance per month. Using basic monitoring with CloudWatch Contributor Insights provides cost-effective detailed analysis for specific workloads without the full detailed monitoring charges."
  },
  {
    id: 23,
    domain: "Domain 4: Design Cost-Optimized Architectures",
    question: "A company needs to analyze their AWS spending patterns over the past 6 months to identify cost optimization opportunities. They want to see cost breakdowns by service, linked account, and tag. Which AWS service should they use?",
    options: [
      "AWS Budgets with a custom report",
      "AWS Cost Explorer with grouping and filtering by service, account, and tag",
      "AWS Trusted Advisor cost optimization checks",
      "AWS Cost and Usage Report with Athena integration"
    ],
    correctAnswer: 1,
    explanation: "AWS Cost Explorer provides interactive analysis with grouping and filtering by multiple dimensions including service, account, tag, region, and more. It allows drilling down into cost patterns over time without requiring additional setup or custom queries."
  },
  {
    id: 24,
    domain: "Domain 4: Design Cost-Optimized Architectures",
    question: "A company needs to set up alerts when their monthly AWS spending exceeds $50,000. They also want alerts when daily spending exceeds $2,000. Which combination of AWS services is MOST appropriate?",
    options: [
      "AWS Cost Explorer with a saved report and Amazon SNS notification",
      "AWS Budgets with cost alerts and AWS Cost Explorer with anomaly detection",
      "AWS Budgets with a monthly cost budget and a daily cost budget with SNS alerts",
      "Amazon CloudWatch billing alarm with AWS Budgets integration"
    ],
    correctAnswer: 2,
    explanation: "AWS Budgets allows you to create multiple budgets with different time periods (monthly, daily, weekly). Creating a monthly budget ($50,000) and a daily budget ($2,000) with SNS alerts provides proactive cost monitoring and early warning of unusual spending patterns."
  },
  {
    id: 25,
    domain: "Domain 4: Design Cost-Optimized Architectures",
    question: "A company needs to export detailed cost data for custom analysis in their data warehouse. They need the most granular data available for reconciliation with their internal systems. Which AWS service provides the most detailed cost data?",
    options: [
      "AWS Cost Explorer with daily granularity",
      "AWS Cost and Usage Report with hourly or daily granularity",
      "AWS Budgets with a detailed breakdown by resource",
      "AWS Cost Explorer with monthly granularity and tag-based filtering"
    ],
    correctAnswer: 1,
    explanation: "The AWS Cost and Usage Report provides the most granular cost and usage data, including hourly and even resource-level granularity for certain services. It can be delivered to S3 and integrated with data warehouse solutions like Redshift or Athena for custom analysis."
  },
  {
    id: 26,
    domain: "Domain 4: Design Cost-Optimized Architectures",
    question: "A company is evaluating between Savings Plans and Reserved Instances for their steady-state EC2 workload. They want maximum flexibility to change instance types during the term. Which option is MOST appropriate?",
    options: [
      "Standard Reserved Instances with All Upfront payment",
      "Convertible Reserved Instances with All Upfront payment",
      "EC2 Instance Savings Plans with All Upfront payment",
      "Compute Savings Plans with Partial Upfront payment"
    ],
    correctAnswer: 1,
    explanation: "Convertible Reserved Instances provide the ability to exchange the reservation for another convertible reservation with different instance attributes (instance family, OS, tenancy, or region). This flexibility comes at a cost premium but is essential for workloads that may need to change instance types during the term."
  },
  {
    id: 27,
    domain: "Domain 4: Design Cost-Optimized Architectures",
    question: "A company runs a high-performance computing (HPC) workload on EC2 instances that requires 99.99% availability but can tolerate brief interruptions. The workload runs for 8 hours daily. Which instance purchasing approach is MOST cost-effective?",
    options: [
      "On-Demand Instances with Auto Scaling for the 8-hour window",
      "Reserved Instances with a scheduled reservation for the 8-hour window",
      "Spot Instances with a diversified fleet and checkpointing enabled",
      "Dedicated Instances for compliance requirements"
    ],
    correctAnswer: 1,
    explanation: "Reserved Instances with scheduled reservations allow you to reserve capacity for specific time windows (daily, weekly, monthly). For an 8-hour daily workload, this provides Reserved Instance discounts for only the hours needed, making it more cost-effective than all-day reservations."
  },
  {
    id: 28,
    domain: "Domain 4: Design Cost-Optimized Architectures",
    question: "A company needs to optimize storage costs for an EFS file system that stores user home directories. Users access their files frequently during business hours, but files older than 60 days are rarely accessed. Which solution is MOST cost-effective?",
    options: [
      "Use EFS Standard storage class for all files",
      "Use EFS Intelligent-Tiering with lifecycle management transitioning to EFS Infrequent Access after 30 days",
      "Use EFS Provisioned Throughput mode with a fixed throughput of 100MB/s",
      "Use Amazon S3 with S3 File Gateway for file access"
    ],
    correctAnswer: 1,
    explanation: "EFS Intelligent-Tiering automatically moves files not accessed for a configured period (e.g., 30 or 60 days) to the EFS Infrequent Access (IA) storage class. This reduces storage costs for older files while maintaining full file system access for recently accessed files."
  },
  {
    id: 29,
    domain: "Domain 4: Design Cost-Optimized Architectures",
    question: "A company needs to reduce data transfer costs for an application that downloads large files from S3. The same files are downloaded thousands of times per day by users worldwide. Which solution is MOST cost-effective?",
    options: [
      "Use S3 Transfer Acceleration for all downloads",
      "Use Amazon CloudFront with an S3 origin for caching cached copies at edge locations",
      "Use S3 Multipart Upload for all downloads",
      "Use AWS Global Accelerator with S3 as the endpoint"
    ],
    correctAnswer: 1,
    explanation: "Amazon CloudFront caches objects at edge locations globally. For files downloaded thousands of times, CloudFront serves cached copies from edge locations, reducing S3 data transfer out charges. CloudFront data transfer is charged at lower rates than S3 data transfer out to internet."
  },
  {
    id: 30,
    domain: "Domain 4: Design Cost-Optimized Architectures",
    question: "A company is analyzing their AWS bill and notices they pay for data transfer from S3 to the internet even though CloudFront is configured. Investigation shows CloudFront is not caching content effectively due to query strings. Which configuration change is MOST cost-effective?",
    options: [
      "Enable S3 Transfer Acceleration instead of CloudFront",
      "Configure CloudFront to cache based on all query strings or use a custom origin policy",
      "Use S3 pre-signed URLs with a shorter expiration",
      "Enable S3 Cross-Region Replication to multiple regions"
    ],
    correctAnswer: 1,
    explanation: "When CloudFront does not cache effectively due to query strings, it forwards every request to the S3 origin, resulting in full data transfer charges from S3 to CloudFront plus CloudFront to the internet. Configuring appropriate caching policies (cache based on all query strings or use a whitelisted approach) enables effective caching and reduces origin data transfer costs."
  }
];

export const questions2: ExamQuestion[] = [
  // Domain 4: Design Cost-Optimized Architectures — Test Set 2 (Questions 16–30)
  {
    id: 1,
    domain: "Domain 4: Design Cost-Optimized Architectures",
    question: "A company needs to receive proactive notifications when their AWS monthly bill is projected to exceed a defined threshold. Which service should they use?",
    options: [
      "AWS Cost Explorer with a saved report",
      "AWS Budgets with an alert threshold",
      "AWS Trusted Advisor with cost optimization checks",
      "Amazon CloudWatch with a billing alarm"
    ],
    correctAnswer: 1,
    explanation: "AWS Budgets allows you to set custom cost and usage budgets with alert thresholds. It sends proactive notifications when actual or forecasted costs exceed the defined threshold, enabling proactive cost management."
  },
  {
    id: 2,
    domain: "Domain 4: Design Cost-Optimized Architectures",
    question: "A company needs to optimize costs for a workload that has steady-state compute usage but requires flexibility across EC2, Fargate, and Lambda. They want a single commitment that covers all compute services. Which pricing model should they use?",
    options: [
      "Reserved Instances for EC2 only",
      "Savings Plans with Compute Savings Plans",
      "Spot Instances for all compute services",
      "Dedicated Hosts for EC2 and Fargate"
    ],
    correctAnswer: 1,
    explanation: "Compute Savings Plans apply to EC2, Fargate, and Lambda usage. By committing to a consistent amount of usage (USD/hour), the company receives discounted rates across all eligible compute services, providing both cost savings and flexibility."
  },
  {
    id: 3,
    domain: "Domain 4: Design Cost-Optimized Architectures",
    question: "A company needs to identify idle Elastic Load Balancers and unattached EBS volumes to reduce wasted costs. Which service should they use?",
    options: [
      "AWS Cost Explorer with resource-level granularity",
      "AWS Trusted Advisor with cost optimization checks",
      "AWS Compute Optimizer",
      "AWS Config with a custom rule for unused resources"
    ],
    correctAnswer: 1,
    explanation: "AWS Trusted Advisor provides automated recommendations for cost optimization, including identifying idle resources such as unattached Elastic IP addresses, idle load balancers, and unassociated EBS volumes."
  },
  {
    id: 4,
    domain: "Domain 4: Design Cost-Optimized Architectures",
    question: "A company needs to store data that is accessed frequently for the first 30 days, then rarely accessed but must be retained for 5 years. They want to minimize storage costs without manual intervention. Which S3 storage class and feature should they use?",
    options: [
      "S3 Standard with lifecycle transition to S3 Glacier Deep Archive",
      "S3 Intelligent-Tiering with automatic archiving to Deep Archive",
      "S3 Standard-IA with lifecycle transition to S3 Glacier",
      "S3 One Zone-IA with cross-region replication"
    ],
    correctAnswer: 1,
    explanation: "S3 Intelligent-Tiering automatically moves objects to the most cost-effective storage tier based on access patterns. With the Archive Access and Deep Archive Access tiers, it can automatically move rarely accessed data to the lowest-cost tiers without manual intervention."
  },
  {
    id: 5,
    domain: "Domain 4: Design Cost-Optimized Architectures",
    question: "A company needs to run a training job on a large dataset for a machine learning model. The job is fault-tolerant and can be restarted from checkpoints. Which compute option is MOST cost-effective?",
    options: [
      "On-Demand GPU instances for the entire training duration",
      "Spot Instances with checkpointing enabled for the training job",
      "Reserved GPU instances for the training workload",
      "SageMaker Training Jobs with on-demand instances"
    ],
    correctAnswer: 1,
    explanation: "Spot Instances provide up to 90% discount compared to On-Demand pricing. For fault-tolerant training jobs with checkpointing, Spot Instances are the most cost-effective option because the job can resume from the last checkpoint after an interruption."
  },
  {
    id: 6,
    domain: "Domain 4: Design Cost-Optimized Architectures",
    question: "A company needs to reduce data transfer costs for a web application that serves static content to users globally. The application currently serves content directly from S3, incurring high data transfer charges. Which solution should they implement?",
    options: [
      "Use S3 Transfer Acceleration for all content delivery",
      "Use Amazon CloudFront with an S3 origin and origin access control",
      "Use AWS Global Accelerator with S3 as an endpoint",
      "Use AWS Direct Connect with a public VIF to S3"
    ],
    correctAnswer: 1,
    explanation: "Amazon CloudFront caches static content at edge locations globally. By serving cached content from the edge, CloudFront reduces the number of requests to S3 and lowers data transfer costs, especially for repeated requests."
  },
  {
    id: 7,
    domain: "Domain 4: Design Cost-Optimized Architectures",
    question: "A company needs to optimize costs for a workload that requires a relational database running for exactly 12 hours per day during business hours. The database is currently running 24/7 on a db.r6g.large instance. Which approach is MOST cost-effective?",
    options: [
      "Purchase a Reserved Instance for the db.r6g.large instance",
      "Use Aurora Serverless v2 with a minimum and maximum capacity range",
      "Use an On-Demand instance with a scheduled Lambda function to start and stop the database",
      "Migrate the database to DynamoDB with on-demand capacity"
    ],
    correctAnswer: 2,
    explanation: "For a database that only needs to run 12 hours per day, using an On-Demand instance with scheduled start/stop (via Lambda or Instance Scheduler) is the most cost-effective approach. It avoids paying for 24/7 usage while maintaining full database functionality during business hours."
  },
  {
    id: 8,
    domain: "Domain 4: Design Cost-Optimized Architectures",
    question: "A company needs to optimize storage costs for a file system that stores large media files. The files are accessed sequentially and infrequently after the first 30 days. Which storage service and configuration is MOST cost-effective?",
    options: [
      "Amazon EFS with the Infrequent Access storage class and lifecycle management",
      "Amazon S3 with lifecycle policies transitioning to Glacier Deep Archive",
      "Amazon EBS gp3 volumes with snapshots",
      "Amazon FSx for Windows File Server with deduplication enabled"
    ],
    correctAnswer: 1,
    explanation: "Amazon S3 with lifecycle policies transitioning to Glacier Deep Archive provides the lowest cost for infrequently accessed large files. S3 is designed for object storage with automatic lifecycle management, making it far more cost-effective than file systems for this use case."
  },
  {
    id: 9,
    domain: "Domain 4: Design Cost-Optimized Architectures",
    question: "A company needs to reduce compute costs for a stateless web application that currently runs on a fleet of over-provisioned EC2 instances. The application has variable traffic patterns. Which solution should they implement?",
    options: [
      "Purchase Reserved Instances for the current instance fleet",
      "Enable EC2 Auto Scaling with target tracking based on CPU utilization and right-size the instance type",
      "Migrate the application to AWS Lambda with provisioned concurrency",
      "Use Spot Instances for the entire web application fleet"
    ],
    correctAnswer: 1,
    explanation: "Enabling EC2 Auto Scaling with target tracking based on CPU utilization allows the application to scale in and out based on actual demand. Right-sizing the instance type ensures the fleet is not over-provisioned, reducing costs for variable traffic patterns."
  },
  {
    id: 10,
    domain: "Domain 4: Design Cost-Optimized Architectures",
    question: "A company needs to implement a cost-effective backup strategy for their EBS volumes. They need daily backups retained for 30 days, with weekly backups retained for 1 year. Which solution should they use?",
    options: [
      "Write a custom Lambda function to create and delete snapshots",
      "Use AWS Backup with a backup plan that includes daily and weekly schedules with different retention periods",
      "Use Amazon S3 with lifecycle policies to store EBS snapshots",
      "Use AWS DataSync with a scheduled task to copy volume data to a backup bucket"
    ],
    correctAnswer: 1,
    explanation: "AWS Backup supports multiple backup schedules within a single backup plan. You can configure daily backups with a 30-day retention and weekly backups with a 1-year retention, all managed centrally without custom scripts."
  },
  {
    id: 11,
    domain: "Domain 4: Design Cost-Optimized Architectures",
    question: "A company needs to optimize network costs for a hybrid architecture where data is frequently transferred between on-premises and AWS. The data transfer is over the public internet and incurs high costs. Which solution should they implement?",
    options: [
      "Use AWS Direct Connect with a private VIF for private data transfer",
      "Use AWS VPN over the public internet with compression enabled",
      "Use AWS Transit Gateway with VPC peering for all traffic",
      "Use S3 with Transfer Acceleration for all data transfers"
    ],
    correctAnswer: 0,
    explanation: "AWS Direct Connect with a private VIF provides a dedicated, private network connection between on-premises and AWS. It reduces data transfer costs compared to the public internet, provides consistent performance, and bypasses internet bandwidth charges."
  },
  {
    id: 12,
    domain: "Domain 4: Design Cost-Optimized Architectures",
    question: "A company needs to optimize costs for a workload that uses Amazon RDS PostgreSQL with predictable, steady-state usage. They want the maximum discount but may need to change the instance family during the term. Which option should they choose?",
    options: [
      "Reserved Instances with standard reservations and All Upfront payment",
      "Reserved Instances with convertible reservations and All Upfront payment",
      "Savings Plans with EC2 Instance Savings Plans",
      "Savings Plans with Compute Savings Plans"
    ],
    correctAnswer: 1,
    explanation: "Convertible Reserved Instances provide the ability to change the instance family, operating system, or tenancy during the term while still providing significant discounts. They are ideal for predictable workloads that may require flexibility in instance type."
  },
  {
    id: 13,
    domain: "Domain 4: Design Cost-Optimized Architectures",
    question: "A company needs to reduce costs for an Amazon EFS file system that stores a mix of frequently accessed and rarely accessed files. They want the rarely accessed files to be moved to a lower-cost tier automatically. Which feature should they enable?",
    options: [
      "EFS Intelligent-Tiering with lifecycle management to EFS Infrequent Access",
      "EFS Provisioned Throughput mode with automatic scaling",
      "EFS Bursting Throughput mode with a large file system size",
      "EFS Standard storage class with manual file migration"
    ],
    correctAnswer: 0,
    explanation: "EFS Intelligent-Tiering automatically moves files that are not accessed for a specified period to the EFS Infrequent Access (IA) storage class. This reduces storage costs for rarely accessed files without manual intervention or application changes."
  },
  {
    id: 14,
    domain: "Domain 4: Design Cost-Optimized Architectures",
    question: "A company needs to optimize costs for a Lambda function that is invoked millions of times per day with predictable traffic. The function has a consistent execution duration. Which approach should they consider?",
    options: [
      "Use Lambda provisioned concurrency to reduce cold starts",
      "Use Lambda with a larger memory allocation to reduce execution time",
      "Migrate the function to EC2 with Reserved Instances for predictable savings",
      "Use Lambda with SnapStart for Java functions"
    ],
    correctAnswer: 2,
    explanation: "For a predictable, high-volume workload with consistent execution duration, migrating to EC2 with Reserved Instances may be more cost-effective than Lambda at scale. Lambda charges per request and per duration, which can be more expensive for millions of predictable invocations compared to reserved EC2 capacity."
  },
  {
    id: 15,
    domain: "Domain 4: Design Cost-Optimized Architectures",
    question: "A company needs to implement a centralized cost monitoring dashboard that shows cost trends by service, account, and tag. They also want to forecast future spending based on historical data. Which AWS service should they use?",
    options: [
      "AWS Budgets with custom budget alerts",
      "AWS Cost Explorer with grouping and filtering by tag, service, and account",
      "AWS Trusted Advisor with cost optimization recommendations",
      "AWS CloudWatch with custom billing metrics"
    ],
    correctAnswer: 1,
    explanation: "AWS Cost Explorer provides interactive cost analysis with grouping and filtering by service, account, tag, and region. It includes forecasting capabilities based on historical data, making it ideal for centralized cost monitoring and trend analysis."
  }
];
