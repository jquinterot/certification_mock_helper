import type { ExamQuestion } from '@/types';

export const questions: ExamQuestion[] = [
  // Domain 3: Design High-Performing Architectures — Test Set 1 (Questions 1–15)
  {
    id: 1,
    domain: "Domain 3: Design High-Performing Architectures",
    question: "A company runs a read-heavy application backed by Amazon RDS MySQL. The database is experiencing high CPU utilization due to repeated read queries. Which solution will MOST effectively improve read performance?",
    options: [
      "Scale up the primary RDS instance to a larger instance type",
      "Add Amazon RDS Read Replicas and distribute read traffic to them",
      "Enable Multi-AZ deployment on the RDS instance",
      "Migrate the database to Amazon DynamoDB with on-demand capacity"
    ],
    correctAnswer: 1,
    explanation: "RDS Read Replicas provide horizontal scaling for read-heavy workloads by offloading read traffic from the primary database. Adding read replicas is the most effective way to improve read performance without over-provisioning the primary instance."
  },
  {
    id: 2,
    domain: "Domain 3: Design High-Performing Architectures",
    question: "A company needs to serve static and dynamic content to users globally with the lowest possible latency. The dynamic content requires lightweight customization based on the user's location. Which AWS service combination should they use?",
    options: [
      "Amazon CloudFront with Lambda@Edge",
      "AWS Global Accelerator with Elastic Load Balancers",
      "Amazon Route 53 with geolocation routing",
      "AWS App Mesh with CloudFront"
    ],
    correctAnswer: 0,
    explanation: "Amazon CloudFront with Lambda@Edge allows you to run lightweight code at edge locations to customize dynamic content based on user location. CloudFront caches static content, while Lambda@Edge handles dynamic content customization with minimal latency."
  },
  {
    id: 3,
    domain: "Domain 3: Design High-Performing Architectures",
    question: "A company needs to optimize the performance of a DynamoDB table for read-heavy workloads with millions of requests per second. They need microsecond-level latency for cached reads. Which solution should they implement?",
    options: [
      "Increase the provisioned read capacity units on the DynamoDB table",
      "Deploy DynamoDB Accelerator (DAX) in front of the table",
      "Enable DynamoDB Streams and replicate reads to a cache layer",
      "Migrate to Amazon RDS with read replicas for caching"
    ],
    correctAnswer: 1,
    explanation: "DynamoDB Accelerator (DAX) is a fully managed, highly available caching service for DynamoDB that provides microsecond-level latency for read-heavy workloads. It reduces read load on the underlying table and improves response times."
  },
  {
    id: 4,
    domain: "Domain 3: Design High-Performing Architectures",
    question: "A company needs to optimize storage performance for a high-performance computing (HPC) workload that requires high-throughput, low-latency parallel file storage. The workload processes files up to 100 GB. Which AWS storage service is MOST appropriate?",
    options: [
      "Amazon EFS with Max I/O performance mode",
      "Amazon FSx for Lustre with S3 integration",
      "Amazon EBS io2 Block Express volumes",
      "Amazon S3 with Transfer Acceleration"
    ],
    correctAnswer: 1,
    explanation: "Amazon FSx for Lustre provides high-performance parallel file storage optimized for HPC workloads. It offers sub-millisecond latencies and high throughput, and can be linked to S3 for persistent data storage."
  },
  {
    id: 5,
    domain: "Domain 3: Design High-Performing Architectures",
    question: "A company needs to optimize the performance of an API that serves global users. The API responses are cacheable for 5 minutes. Which service should they use to reduce latency and API backend load?",
    options: [
      "Amazon CloudFront with a cache behavior for the API origin",
      "AWS Global Accelerator with static anycast IPs",
      "Amazon Route 53 with latency-based routing",
      "AWS AppSync with a DynamoDB data source"
    ],
    correctAnswer: 0,
    explanation: "Amazon CloudFront can cache API responses at edge locations, reducing latency for global users and offloading the API backend. It supports TTL-based caching for dynamic content and integrates with API Gateway and custom origins."
  },
  {
    id: 6,
    domain: "Domain 3: Design High-Performing Architectures",
    question: "A company needs to optimize network performance for a cluster of EC2 instances running a tightly coupled HPC workload. They need the lowest possible latency and highest packet-per-second performance between instances. Which EC2 feature should they use?",
    options: [
      "Enhanced Networking with ENA",
      "Elastic Fabric Adapter (EFA)",
      "AWS PrivateLink",
      "AWS Direct Connect"
    ],
    correctAnswer: 1,
    explanation: "Elastic Fabric Adapter (EFA) provides OS-bypass capabilities for tightly coupled HPC workloads, delivering lower latency and higher packet-per-second performance than standard Enhanced Networking. It is designed for distributed machine learning and HPC."
  },
  {
    id: 7,
    domain: "Domain 3: Design High-Performing Architectures",
    question: "A company needs to run complex analytical queries on a large dataset stored in Amazon S3. They want the queries to be fast and do not want to load the data into a separate database. Which AWS service should they use?",
    options: [
      "Amazon RDS with a read replica querying S3 via federated queries",
      "Amazon Athena with partition projection and columnar formats",
      "Amazon Redshift with Spectrum querying external tables",
      "Amazon DynamoDB with a global secondary index on S3 metadata"
    ],
    correctAnswer: 1,
    explanation: "Amazon Athena is a serverless query service that allows you to analyze data directly in S3 using standard SQL. Using partition projection and columnar formats (Parquet/ORC) significantly improves query performance without requiring data loading."
  },
  {
    id: 8,
    domain: "Domain 3: Design High-Performing Architectures",
    question: "A company needs to optimize the performance of a containerized application by ensuring that containers are placed on EC2 instances with the most available CPU and memory. Which ECS feature should they use?",
    options: [
      "ECS Service Auto Scaling",
      "ECS Capacity Providers",
      "ECS Task Placement Strategies with the binpack strategy",
      "ECS Fargate launch type"
    ],
    correctAnswer: 2,
    explanation: "ECS Task Placement Strategies with the binpack strategy place tasks on container instances with the most available CPU and memory. This optimizes resource utilization and reduces the number of running instances needed."
  },
  {
    id: 9,
    domain: "Domain 3: Design High-Performing Architectures",
    question: "A company needs to implement a high-performance data warehouse for complex analytics queries on petabytes of data. The queries involve joins and aggregations across multiple large tables. Which AWS service is MOST appropriate?",
    options: [
      "Amazon RDS with a Multi-AZ deployment and read replicas",
      "Amazon Redshift with RA3 nodes and managed storage",
      "Amazon DynamoDB with global secondary indexes",
      "Amazon Athena with federated query to multiple data sources"
    ],
    correctAnswer: 1,
    explanation: "Amazon Redshift with RA3 nodes and managed storage provides a high-performance data warehouse optimized for complex analytics queries on petabytes of data. It uses columnar storage, massively parallel processing, and advanced query optimization."
  },
  {
    id: 10,
    domain: "Domain 3: Design High-Performing Architectures",
    question: "A company needs to cache session data for a web application with sub-millisecond latency. The cache must support data structures like lists and sets, and provide persistence. Which AWS service is MOST appropriate?",
    options: [
      "Amazon ElastiCache for Memcached",
      "Amazon ElastiCache for Redis",
      "Amazon DynamoDB DAX",
      "Amazon S3 with Transfer Acceleration"
    ],
    correctAnswer: 1,
    explanation: "Amazon ElastiCache for Redis provides sub-millisecond latency, supports advanced data structures (lists, sets, hashes), and offers persistence options. It is ideal for session caching and real-time applications requiring high performance."
  },
  {
    id: 11,
    domain: "Domain 3: Design High-Performing Architectures",
    question: "A company needs to optimize the performance of a web application by reducing database load. The application repeatedly queries the same set of reference data. Which AWS service should they use to cache the query results?",
    options: [
      "Amazon CloudFront with an origin shield",
      "Amazon ElastiCache for Memcached",
      "Amazon S3 with intelligent tiering",
      "AWS Lambda with an in-memory cache"
    ],
    correctAnswer: 1,
    explanation: "Amazon ElastiCache for Memcached provides a simple, high-performance in-memory cache for frequently accessed data. Caching reference data reduces database load and improves application response times."
  },
  {
    id: 12,
    domain: "Domain 3: Design High-Performing Architectures",
    question: "A company needs to optimize EBS performance for a database running on EC2 that requires consistent, low-latency IOPS. The database performs a mix of random reads and writes. Which EBS volume type is MOST appropriate?",
    options: [
      "gp3 (General Purpose SSD)",
      "io2 Block Express (Provisioned IOPS SSD)",
      "st1 (Throughput Optimized HDD)",
      "sc1 (Cold HDD)"
    ],
    correctAnswer: 1,
    explanation: "io2 Block Express provides the highest performance for I/O-intensive workloads, offering up to 256,000 IOPS and 4,000 MB/s throughput per volume. It is designed for the most demanding database workloads requiring consistent, low-latency IOPS."
  },
  {
    id: 13,
    domain: "Domain 3: Design High-Performing Architectures",
    question: "A company needs to transfer petabytes of data from on-premises to AWS for a high-performance analytics workload. The network connection is limited and would take months to transfer the data. Which AWS service is MOST appropriate?",
    options: [
      "AWS DataSync with a high-bandwidth network link",
      "AWS Snowmobile with a secure data container",
      "AWS Direct Connect with a 100 Gbps connection",
      "AWS Transfer Family with SFTP endpoints"
    ],
    correctAnswer: 1,
    explanation: "AWS Snowmobile is an exabyte-scale data transfer service that uses a secure 45-foot shipping container to transfer up to 100 PB of data. It is ideal for transferring petabytes of data when network transfer is impractical."
  },
  {
    id: 14,
    domain: "Domain 3: Design High-Performing Architectures",
    question: "A company needs to optimize the performance of a Lambda function that is experiencing cold start latency. The function is invoked infrequently but needs to respond quickly when called. Which approach should they use?",
    options: [
      "Increase the function's memory allocation to the maximum",
      "Enable provisioned concurrency for the function",
      "Move the function to EC2 with Auto Scaling",
      "Use AWS Step Functions to orchestrate the function with a faster trigger"
    ],
    correctAnswer: 1,
    explanation: "Provisioned concurrency keeps a specified number of execution environments initialized and ready to respond immediately. It eliminates cold start latency for infrequently invoked functions that require fast response times."
  },
  {
    id: 15,
    domain: "Domain 3: Design High-Performing Architectures",
    question: "A company needs to optimize API performance by throttling requests to prevent backend overload. They also need to cache responses for a configurable TTL. Which API Gateway feature should they enable?",
    options: [
      "API Gateway caching with a cache TTL and usage plans with throttling limits",
      "API Gateway WebSocket APIs with connection pooling",
      "API Gateway Private APIs with VPC endpoints",
      "API Gateway Lambda authorizers with caching"
    ],
    correctAnswer: 0,
    explanation: "API Gateway caching stores responses at the API Gateway level for a configurable TTL, reducing backend load. Usage plans with throttling limits control the rate of requests, preventing backend overload and improving overall API performance."
  }
];

export const questions2: ExamQuestion[] = [
  // Domain 3: Design High-Performing Architectures — Test Set 2 (Questions 16–30)
  {
    id: 1,
    domain: "Domain 3: Design High-Performing Architectures",
    question: "A company needs to improve the performance of a database by caching frequently accessed query results. The cache should support high availability and failover across Availability Zones. Which AWS service is MOST appropriate?",
    options: [
      "Amazon CloudFront with an origin failover group",
      "Amazon ElastiCache for Redis with Multi-AZ enabled",
      "Amazon DynamoDB DAX with a multi-AZ cluster",
      "Amazon S3 with cross-region replication"
    ],
    correctAnswer: 1,
    explanation: "Amazon ElastiCache for Redis with Multi-AZ enabled provides high availability with automatic failover to a replica in a different Availability Zone. It caches frequently accessed query results, reducing database load and improving response times."
  },
  {
    id: 2,
    domain: "Domain 3: Design High-Performing Architectures",
    question: "A company needs to optimize the performance of a large file transfer workload between S3 and EC2 instances. The instances are in the same region as the S3 bucket. Which approach is MOST effective?",
    options: [
      "Use S3 Transfer Acceleration for all transfers",
      "Use a VPC endpoint for S3 and parallelize requests with multiple connections",
      "Use CloudFront to cache S3 objects before transferring to EC2",
      "Enable S3 Cross-Region Replication to a bucket closer to the instances"
    ],
    correctAnswer: 1,
    explanation: "Using a VPC endpoint for S3 provides high-bandwidth private connectivity within the same region. Parallelizing requests with multiple connections (e.g., using S3 multipart upload/download) maximizes throughput for large file transfers."
  },
  {
    id: 3,
    domain: "Domain 3: Design High-Performing Architectures",
    question: "A company needs to optimize the performance of a web application by serving images and videos from edge locations close to users. The content is stored in S3. Which service should they use?",
    options: [
      "Amazon CloudFront with an S3 origin and origin access control",
      "AWS Global Accelerator with S3 as an endpoint",
      "Amazon Route 53 with geolocation routing to regional S3 buckets",
      "AWS Direct Connect with a public VIF to S3"
    ],
    correctAnswer: 0,
    explanation: "Amazon CloudFront is a content delivery network (CDN) that caches content at edge locations worldwide. With an S3 origin and origin access control (OAC), it serves images and videos from the edge with low latency and high transfer speeds."
  },
  {
    id: 4,
    domain: "Domain 3: Design High-Performing Architectures",
    question: "A company needs to optimize the performance of a relational database workload that requires high sequential read throughput for large analytics queries. The database runs on EC2 with EBS storage. Which EBS volume type is MOST appropriate?",
    options: [
      "gp3 (General Purpose SSD)",
      "io2 (Provisioned IOPS SSD)",
      "st1 (Throughput Optimized HDD)",
      "sc1 (Cold HDD)"
    ],
    correctAnswer: 2,
    explanation: "st1 (Throughput Optimized HDD) provides high sequential read throughput at a lower cost than SSD volumes. It is optimized for large, sequential workloads like big data analytics and log processing, not random IOPS."
  },
  {
    id: 5,
    domain: "Domain 3: Design High-Performing Architectures",
    question: "A company needs to optimize the performance of a containerized application running on Amazon ECS. The application experiences high latency during startup because containers pull large images from a remote registry. Which solution should they implement?",
    options: [
      "Use ECS Service Auto Scaling to reduce the number of concurrent tasks",
      "Use Amazon ECR with image scanning and cache images on EC2 instances with EBS",
      "Use ECS with Fargate and enable container image caching in the ECS agent",
      "Store images in S3 and use AWS DataSync to pre-stage images on instances"
    ],
    correctAnswer: 2,
    explanation: "ECS with Fargate and container image caching (via the ECS agent on EC2) reduces startup latency by caching frequently used container images locally. Fargate also eliminates the need to manage EC2 instances and their image pull performance."
  },
  {
    id: 6,
    domain: "Domain 3: Design High-Performing Architectures",
    question: "A company needs to optimize the performance of a Lambda function that processes large files from S3. The function is timing out because it spends too much time downloading the file. Which approach should they use?",
    options: [
      "Increase the Lambda function timeout to 15 minutes and increase memory to 10 GB",
      "Use S3 Select to retrieve only the required subsets of data from the object",
      "Move the file processing to EC2 with a large instance type",
      "Use AWS Step Functions to split the file into smaller chunks before processing"
    ],
    correctAnswer: 1,
    explanation: "S3 Select allows you to retrieve only a subset of data from an object using simple SQL expressions. This reduces the amount of data transferred and processed, significantly improving Lambda function performance and reducing timeouts."
  },
  {
    id: 7,
    domain: "Domain 3: Design High-Performing Architectures",
    question: "A company needs to implement a high-performance search service for a catalog with millions of products. The search must support full-text search, filtering, and aggregations with low latency. Which AWS service is MOST appropriate?",
    options: [
      "Amazon Athena with partitioned queries",
      "Amazon OpenSearch Service",
      "Amazon Redshift with a materialized view",
      "Amazon DynamoDB with global secondary indexes"
    ],
    correctAnswer: 1,
    explanation: "Amazon OpenSearch Service is a fully managed search and analytics engine that supports full-text search, filtering, aggregations, and real-time analytics. It is optimized for low-latency search across large datasets."
  },
  {
    id: 8,
    domain: "Domain 3: Design High-Performing Architectures",
    question: "A company needs to optimize the performance of an RDS PostgreSQL database that handles a large number of concurrent connections. The database is experiencing connection limits and slow query performance due to connection overhead. Which solution should they implement?",
    options: [
      "Increase the RDS instance size to a larger type with more CPU and memory",
      "Use Amazon RDS Proxy to manage and pool database connections",
      "Enable Multi-AZ deployment to distribute connections across instances",
      "Migrate the database to Aurora Serverless to handle variable connections"
    ],
    correctAnswer: 1,
    explanation: "Amazon RDS Proxy is a fully managed database proxy that handles connection pooling and sharing. It reduces connection overhead, improves database efficiency under high concurrency, and increases failover resilience."
  },
  {
    id: 9,
    domain: "Domain 3: Design High-Performing Architectures",
    question: "A company needs to optimize data transfer performance for a workload that requires frequent small file reads from S3 across multiple EC2 instances. They want to minimize latency and maximize throughput. Which approach is MOST effective?",
    options: [
      "Use S3 Transfer Acceleration for all read requests",
      "Use S3 with byte-range fetches and parallel GET requests across multiple connections",
      "Enable S3 Cross-Region Replication to a bucket in the same AZ as the instances",
      "Use AWS Snowball to pre-stage data on the EC2 instances"
    ],
    correctAnswer: 1,
    explanation: "Using S3 byte-range fetches and parallel GET requests across multiple connections allows the application to retrieve different parts of an object concurrently. This maximizes throughput and minimizes latency for small file reads."
  },
  {
    id: 10,
    domain: "Domain 3: Design High-Performing Architectures",
    question: "A company needs to optimize the performance of a compute-intensive workload on EC2. They want to use the most cost-effective instance family that provides the best price-performance ratio for general-purpose workloads. Which instance family should they consider?",
    options: [
      "M6i (Intel-based general purpose)",
      "M6g (AWS Graviton2-based general purpose)",
      "C6i (Intel-based compute optimized)",
      "C6g (AWS Graviton2-based compute optimized)"
    ],
    correctAnswer: 1,
    explanation: "AWS Graviton2-based instances (M6g) provide up to 40% better price-performance compared to comparable Intel-based instances for general-purpose workloads. They are the most cost-effective choice for many compute-intensive applications."
  },
  {
    id: 11,
    domain: "Domain 3: Design High-Performing Architectures",
    question: "A company needs to optimize the performance of a web application by reducing the round-trip time for SSL/TLS handshakes. The application is served via CloudFront. Which feature should they enable?",
    options: [
      "CloudFront origin shield",
      "CloudFront custom SSL/TLS certificates with session resumption",
      "CloudFront field-level encryption",
      "CloudFront signed URLs with a short expiration"
    ],
    correctAnswer: 1,
    explanation: "CloudFront supports SSL/TLS session resumption, which allows clients to reuse previously established SSL/TLS session parameters. This reduces the round-trip time for SSL/TLS handshakes, improving connection performance."
  },
  {
    id: 12,
    domain: "Domain 3: Design High-Performing Architectures",
    question: "A company needs to optimize the performance of a real-time bidding application that requires sub-millisecond read and write latency for session state data. The data volume is small but access is extremely frequent. Which AWS service is MOST appropriate?",
    options: [
      "Amazon DynamoDB with on-demand capacity",
      "Amazon ElastiCache for Redis with cluster mode enabled",
      "Amazon RDS with a cache-optimized instance type",
      "Amazon S3 with S3 Select for fast queries"
    ],
    correctAnswer: 1,
    explanation: "Amazon ElastiCache for Redis with cluster mode enabled provides sub-millisecond read and write latency for in-memory data. It is ideal for real-time applications like bidding systems that require extremely frequent, low-latency access to session state."
  },
  {
    id: 13,
    domain: "Domain 3: Design High-Performing Architectures",
    question: "A company needs to optimize the performance of a batch data processing job that reads from and writes to S3. The job is I/O bound and needs to maximize throughput. Which combination of techniques should they use?",
    options: [
      "Use S3 Standard storage and single-threaded PUT requests",
      "Use S3 multipart upload, parallel GET requests, and EC2 instances with enhanced networking",
      "Use S3 Glacier for storage and S3 Select for filtering data",
      "Use S3 Transfer Acceleration and single-threaded sequential reads"
    ],
    correctAnswer: 1,
    explanation: "S3 multipart upload and parallel GET requests maximize throughput by utilizing multiple connections. EC2 instances with enhanced networking (ENA) provide higher bandwidth and lower latency, further optimizing I/O-bound batch processing jobs."
  },
  {
    id: 14,
    domain: "Domain 3: Design High-Performing Architectures",
    question: "A company needs to optimize the performance of an API Gateway that is experiencing high latency during traffic spikes. The backend is a Lambda function. Which combination of features should they use?",
    options: [
      "Enable API Gateway caching and increase the Lambda function memory and timeout",
      "Enable API Gateway throttling and reduce the Lambda function concurrency",
      "Use API Gateway HTTP APIs instead of REST APIs and enable Lambda provisioned concurrency",
      "Use API Gateway WebSocket APIs and reduce the payload size"
    ],
    correctAnswer: 2,
    explanation: "API Gateway HTTP APIs have lower latency and lower cost than REST APIs. Enabling Lambda provisioned concurrency keeps execution environments warm, reducing cold start latency during traffic spikes and improving overall API response times."
  },
  {
    id: 15,
    domain: "Domain 3: Design High-Performing Architectures",
    question: "A company needs to optimize the performance of a video streaming application. The videos are stored in S3 and must be delivered to users with minimal buffering. Which AWS service should they use?",
    options: [
      "Amazon S3 with Transfer Acceleration",
      "Amazon CloudFront with adaptive bitrate streaming and S3 origin",
      "AWS Global Accelerator with TCP optimization",
      "Amazon EC2 with GPU instances for video transcoding"
    ],
    correctAnswer: 1,
    explanation: "Amazon CloudFront with adaptive bitrate streaming delivers video content from edge locations close to users. It supports protocols like HLS and DASH, adjusting video quality based on network conditions to minimize buffering."
  }
];
