import type { ExamQuestion } from '@/types';

export const questions: ExamQuestion[] = [
  // Domain 1: Design Secure Architectures — Test Set 1 (Questions 1–15)
  {
    id: 1,
    domain: "Domain 1: Design Secure Architectures",
    question: "A company operates 30 AWS accounts under a single organization and wants to prevent any member account from disabling CloudTrail logging. Which control should they implement?",
    options: [
      "Attach an IAM policy to each account's root user that denies cloudtrail:StopLogging",
      "Apply an AWS Organizations SCP that denies cloudtrail:StopLogging and cloudtrail:DeleteTrail",
      "Enable AWS Config in the management account and use a rule to detect CloudTrail changes",
      "Deploy GuardDuty in each member account and create alerts for CloudTrail modification events"
    ],
    correctAnswer: 1,
    explanation: "Service Control Policies (SCPs) in AWS Organizations apply to all member accounts and can deny specific actions regardless of local administrator permissions. Denying cloudtrail:StopLogging and cloudtrail:DeleteTrail ensures no member account can disable or remove CloudTrail."
  },
  {
    id: 2,
    domain: "Domain 1: Design Secure Architectures",
    question: "A financial services firm needs to enforce that all data at rest in their RDS databases is encrypted using a key that they can rotate on a custom schedule and for which they can audit every use. Which encryption approach meets these requirements?",
    options: [
      "Enable RDS storage encryption using the default AWS managed key (aws/rds)",
      "Enable RDS storage encryption using a customer-managed key in AWS KMS with custom rotation enabled",
      "Use SSL/TLS connections to encrypt all database traffic",
      "Implement application-level encryption before writing data to RDS"
    ],
    correctAnswer: 1,
    explanation: "A customer-managed key (CMK) in AWS KMS allows the firm to enable automatic key rotation on a custom schedule, configure detailed key policies, and audit every cryptographic operation via CloudTrail logs. AWS-managed keys do not support custom rotation schedules."
  },
  {
    id: 3,
    domain: "Domain 1: Design Secure Architectures",
    question: "An application running on EC2 instances in a private subnet needs to access an Amazon S3 bucket. The security team requires that traffic does not traverse the public internet and that no long-term credentials are stored on the instances. Which solution should they use?",
    options: [
      "Store IAM user access keys in AWS Secrets Manager and configure a NAT Gateway for internet access",
      "Attach an IAM role to the EC2 instances and create a VPC endpoint for S3",
      "Use a bucket policy that allows access from the VPC's CIDR and configure a NAT Gateway",
      "Create a VPN connection from the VPC to S3 and use a service-linked role"
    ],
    correctAnswer: 1,
    explanation: "An IAM role attached to EC2 instances provides temporary credentials automatically via the instance metadata service, eliminating long-term credentials. A VPC endpoint for S3 keeps traffic within the AWS network, never traversing the public internet."
  },
  {
    id: 4,
    domain: "Domain 1: Design Secure Architectures",
    question: "A company needs to implement a defense-in-depth network security strategy for a three-tier web application. They want to filter traffic at both the subnet boundary and the instance level. Which combination of AWS features should they use?",
    options: [
      "Security Groups for the subnet boundary and Network ACLs for the instance level",
      "Network ACLs for the subnet boundary and Security Groups for the instance level",
      "AWS Network Firewall for both subnet and instance-level filtering",
      "AWS WAF for both subnet and instance-level filtering"
    ],
    correctAnswer: 1,
    explanation: "Network ACLs operate at the subnet boundary and provide stateless, numbered rules for ingress and egress. Security Groups are stateful virtual firewalls that operate at the instance (ENI) level. Using both provides defense-in-depth network security."
  },
  {
    id: 5,
    domain: "Domain 1: Design Secure Architectures",
    question: "A DevOps team needs to automatically rotate the database password for an Amazon RDS PostgreSQL instance every 60 days. The application retrieves credentials programmatically. Which service and configuration should they use?",
    options: [
      "AWS Systems Manager Parameter Store with SecureString and a scheduled Lambda function",
      "AWS Secrets Manager with automatic rotation enabled and the default RDS rotation Lambda template",
      "AWS Certificate Manager with a custom rotation schedule configured in RDS",
      "AWS KMS with key rotation enabled and the application decrypting credentials from an S3 bucket"
    ],
    correctAnswer: 1,
    explanation: "AWS Secrets Manager supports built-in automatic rotation for RDS databases using pre-built Lambda rotation templates. It stores credentials securely and rotates them on a configurable schedule without requiring application changes."
  },
  {
    id: 6,
    domain: "Domain 1: Design Secure Architectures",
    question: "A security team needs to detect if an EC2 instance is communicating with a known malicious IP address. Which service should they enable?",
    options: [
      "AWS Config with a custom rule for VPC Flow Log analysis",
      "Amazon GuardDuty with VPC Flow Logs and DNS query logs enabled",
      "AWS Trusted Advisor with the security best practices check",
      "Amazon Inspector with the network reachability assessment package"
    ],
    correctAnswer: 1,
    explanation: "Amazon GuardDuty uses machine learning and threat intelligence to analyze VPC Flow Logs, DNS logs, and CloudTrail events to detect anomalies, including communication with known malicious IP addresses and domains."
  },
  {
    id: 7,
    domain: "Domain 1: Design Secure Architectures",
    question: "A company needs to ensure that every API call made in their AWS account is logged and retained for 7 years for compliance. They also need the logs to be immutable. Which solution should they implement?",
    options: [
      "Enable Amazon CloudWatch Logs and set a retention period of 7 years",
      "Enable AWS CloudTrail in all regions and send logs to an S3 bucket with Object Lock in compliance mode",
      "Enable AWS Config with an S3 bucket configured for cross-region replication",
      "Enable VPC Flow Logs and send them to a CloudWatch Logs group with a 7-year retention"
    ],
    correctAnswer: 1,
    explanation: "AWS CloudTrail logs all API calls. Sending logs to an S3 bucket with Object Lock in compliance mode makes them immutable for a specified retention period, satisfying the 7-year retention and immutability requirements."
  },
  {
    id: 8,
    domain: "Domain 1: Design Secure Architectures",
    question: "A company is building a web application and needs to protect it from SQL injection attacks and cross-site scripting (XSS) at the application layer. The application is fronted by an Application Load Balancer. Which service should they deploy?",
    options: [
      "AWS Shield Advanced on the ALB",
      "AWS WAF associated with the ALB",
      "AWS Network Firewall in the VPC",
      "AWS Firewall Manager with a managed rule group"
    ],
    correctAnswer: 1,
    explanation: "AWS WAF is a web application firewall that protects web applications from common exploits like SQL injection and XSS. It can be associated with Application Load Balancers, CloudFront distributions, and API Gateways."
  },
  {
    id: 9,
    domain: "Domain 1: Design Secure Architectures",
    question: "A company needs to centrally manage TLS certificates for multiple subdomains across several AWS accounts. They want automatic renewal and deployment to CloudFront and ALB. Which service should they use?",
    options: [
      "AWS Secrets Manager with a custom Lambda rotation function",
      "AWS Certificate Manager (ACM) with DNS validation and automated renewal",
      "AWS KMS with a data key used for TLS termination",
      "AWS CloudHSM with a custom certificate authority"
    ],
    correctAnswer: 1,
    explanation: "AWS Certificate Manager (ACM) provides free public TLS certificates with automatic renewal, easy DNS validation, and native integration with CloudFront, ALB, and API Gateway for centralized certificate management."
  },
  {
    id: 10,
    domain: "Domain 1: Design Secure Architectures",
    question: "A compliance officer needs to verify that all EC2 instances in the organization are using only approved AMI images. Which service should they use to continuously monitor and report non-compliant resources?",
    options: [
      "AWS Config with a managed rule for approved AMIs",
      "Amazon Inspector with the host assessment template",
      "AWS Systems Manager Compliance dashboard",
      "AWS Trusted Advisor with the security best practices check"
    ],
    correctAnswer: 0,
    explanation: "AWS Config rules can evaluate whether EC2 instances are launched from approved AMIs. The managed rule 'approved-amis-by-id' or 'approved-amis-by-tag' continuously monitors compliance and can trigger remediation actions."
  },
  {
    id: 11,
    domain: "Domain 1: Design Secure Architectures",
    question: "A company needs to grant a third-party SaaS vendor secure access to specific resources in their AWS account without creating IAM users or sharing long-term credentials. Which approach is MOST secure?",
    options: [
      "Create a cross-account IAM role with an external ID and the least-privilege policy attached",
      "Create an IAM user with programmatic access and rotate the access keys monthly",
      "Share the root account credentials with MFA enabled for the vendor",
      "Add the vendor's AWS account to the company's AWS Organization"
    ],
    correctAnswer: 0,
    explanation: "A cross-account IAM role with an external ID and a least-privilege policy provides secure, temporary access without long-term credentials. The external ID prevents the confused deputy problem, ensuring only the intended vendor can assume the role."
  },
  {
    id: 12,
    domain: "Domain 1: Design Secure Architectures",
    question: "A company needs to restrict outbound traffic from their VPC to a whitelist of approved domains. They also require stateful inspection and intrusion prevention. Which AWS service should they use?",
    options: [
      "Security Groups with outbound rules for specific domains",
      "AWS Network Firewall with domain filtering and stateful rules",
      "AWS WAF with managed rule groups for outbound traffic",
      "NAT Gateway with route table filtering"
    ],
    correctAnswer: 1,
    explanation: "AWS Network Firewall provides domain-level filtering, stateful inspection, and intrusion prevention capabilities. It operates at the VPC level and can enforce rules for outbound traffic, including allowing only specific domains."
  },
  {
    id: 13,
    domain: "Domain 1: Design Secure Architectures",
    question: "A company wants to ensure that if an AWS account root user password is compromised, the attacker still cannot perform sensitive actions. Which control should they enforce?",
    options: [
      "Enable MFA Delete on all S3 buckets",
      "Enable MFA on the root user and require MFA for root-level API calls via a policy",
      "Disable the root user and create a new IAM user with the same permissions",
      "Use AWS Organizations to remove root user privileges from all member accounts"
    ],
    correctAnswer: 1,
    explanation: "Enabling MFA on the root user and requiring MFA for root-level API calls (via IAM policy conditions or SCPs) ensures that even if the password is compromised, an attacker cannot perform sensitive actions without the MFA device."
  },
  {
    id: 14,
    domain: "Domain 1: Design Secure Architectures",
    question: "A company needs to store a master encryption key in a dedicated FIPS 140-2 Level 3 certified hardware security module (HSM) that they fully control. Which AWS service should they use?",
    options: [
      "AWS KMS with an AWS-managed key",
      "AWS CloudHSM with a customer-managed cluster",
      "AWS Secrets Manager with encryption enabled",
      "AWS Certificate Manager with a private CA"
    ],
    correctAnswer: 1,
    explanation: "AWS CloudHSM provides dedicated hardware security modules (HSMs) that are FIPS 140-2 Level 3 certified. Customers have full control over their keys within the HSM, unlike AWS KMS which is a multi-tenant service."
  },
  {
    id: 15,
    domain: "Domain 1: Design Secure Architectures",
    question: "A company uses AWS Organizations and wants to prevent any member account from creating IAM users with full administrative access. Which control should they apply?",
    options: [
      "Enable AWS Config in the management account and monitor for IAM user creation",
      "Apply an SCP that denies iam:CreateUser when the policy is the AdministratorAccess managed policy",
      "Deploy AWS Security Hub and create a custom insight for IAM user creation",
      "Use AWS Trusted Advisor to alert when IAM users are created in member accounts"
    ],
    correctAnswer: 1,
    explanation: "An SCP can deny specific IAM actions based on conditions. Denying iam:CreateUser when the attached policy is AdministratorAccess (or denying iam:AttachUserPolicy for the managed policy) prevents the creation of full admin users across member accounts."
  }
];

export const questions2: ExamQuestion[] = [
  // Domain 1: Design Secure Architectures — Test Set 2 (Questions 16–30)
  {
    id: 1,
    domain: "Domain 1: Design Secure Architectures",
    question: "A company needs to analyze whether their EC2 instances have unintended network exposure to the internet, such as overly permissive security group rules. Which service should they use?",
    options: [
      "Amazon GuardDuty for network anomaly detection",
      "Amazon Inspector with the network reachability assessment",
      "AWS Config with a rule for open security groups",
      "AWS Trusted Advisor for security checks"
    ],
    correctAnswer: 1,
    explanation: "Amazon Inspector's network reachability assessment package identifies whether EC2 instances have unintended network accessibility, such as ports open to the internet due to overly permissive security groups or NACLs."
  },
  {
    id: 2,
    domain: "Domain 1: Design Secure Architectures",
    question: "A company wants to ensure that every object uploaded to an S3 bucket is automatically encrypted using a customer-managed key, even if the client does not specify encryption. Which configuration should they apply?",
    options: [
      "Enable S3 default encryption with SSE-KMS and a customer-managed key on the bucket",
      "Attach a bucket policy that denies PutObject requests without the x-amz-server-side-encryption header",
      "Enable S3 Object Lock with governance mode on the bucket",
      "Use S3 Batch Operations to retroactively encrypt all existing objects"
    ],
    correctAnswer: 0,
    explanation: "Enabling S3 default encryption with SSE-KMS and a customer-managed key on the bucket automatically encrypts every object at rest, even if the client does not specify encryption headers. This is the most effective and transparent approach."
  },
  {
    id: 3,
    domain: "Domain 1: Design Secure Architectures",
    question: "A company has a hybrid architecture with on-premises Active Directory and needs to grant on-premises users access to AWS accounts using their existing credentials without maintaining separate IAM users. Which solution should they implement?",
    options: [
      "Create IAM users for each on-premises user and synchronize passwords via a custom script",
      "Use AWS IAM Identity Center with an AD Connector to AWS Directory Service",
      "Deploy AWS Direct Connect and use a VPC endpoint for Active Directory authentication",
      "Use AWS Cognito user pools with a custom LDAP connector"
    ],
    correctAnswer: 1,
    explanation: "AWS IAM Identity Center (successor to AWS SSO) integrates with AWS Directory Service (AD Connector) to allow on-premises Active Directory users to access AWS accounts using their existing credentials, without requiring separate IAM users."
  },
  {
    id: 4,
    domain: "Domain 1: Design Secure Architectures",
    question: "A security team needs to detect if any S3 bucket in their organization has been made publicly accessible. They want automated alerting and remediation. Which solution should they use?",
    options: [
      "Enable S3 Block Public Access at the account level in all regions",
      "Use AWS Config with the s3-bucket-public-read-prohibited rule and an AWS Systems Manager remediation document",
      "Enable Amazon Macie to detect public bucket configurations",
      "Use AWS Trusted Advisor with automated email notifications for public buckets"
    ],
    correctAnswer: 1,
    explanation: "AWS Config with the managed rule 's3-bucket-public-read-prohibited' continuously monitors bucket configurations for public access. Combined with an AWS Systems Manager automation document (or a Lambda function), it can trigger automated remediation."
  },
  {
    id: 5,
    domain: "Domain 1: Design Secure Architectures",
    question: "A company needs to implement a private connection between their VPC and an AWS service (such as Amazon S3) without exposing traffic to the public internet. The connection should use private IP addresses. Which solution should they use?",
    options: [
      "A NAT Gateway in a private subnet with route tables pointing to the service's public endpoints",
      "An interface VPC endpoint powered by AWS PrivateLink",
      "A VPN connection from the VPC to the AWS service endpoint",
      "AWS Direct Connect with a public VIF to the service"
    ],
    correctAnswer: 1,
    explanation: "Interface VPC endpoints powered by AWS PrivateLink provide private connectivity between VPCs and AWS services using private IP addresses. Traffic stays within the AWS network and never traverses the public internet."
  },
  {
    id: 6,
    domain: "Domain 1: Design Secure Architectures",
    question: "A company needs to enforce that all IAM users in their organization must change their passwords every 90 days and cannot reuse the last 5 passwords. Which feature should they configure?",
    options: [
      "An AWS Organizations SCP with password policy conditions",
      "The IAM password policy for the AWS account",
      "AWS Config with a rule for password rotation compliance",
      "AWS IAM Identity Center with a custom identity provider policy"
    ],
    correctAnswer: 1,
    explanation: "The IAM password policy allows you to enforce password requirements for IAM users, including minimum password length, password expiration (e.g., every 90 days), and password reuse prevention (e.g., cannot reuse the last 5 passwords)."
  },
  {
    id: 7,
    domain: "Domain 1: Design Secure Architectures",
    question: "A company needs to protect their web application against volumetric DDoS attacks at the network and transport layers. The application is served through CloudFront and an ALB. Which service combination should they use?",
    options: [
      "AWS WAF with rate-based rules and AWS Shield Standard",
      "AWS Shield Advanced with AWS WAF and access to the DDoS Response Team",
      "AWS Network Firewall with stateful rules and AWS Firewall Manager",
      "Amazon CloudFront with origin shield and geo-restriction"
    ],
    correctAnswer: 1,
    explanation: "AWS Shield Advanced provides enhanced DDoS protection at Layers 3 and 4, with cost protection, real-time visibility, and 24/7 access to the DDoS Response Team. Combined with AWS WAF, it provides comprehensive protection against network and application layer attacks."
  },
  {
    id: 8,
    domain: "Domain 1: Design Secure Architectures",
    question: "A company needs to ensure that all CloudTrail logs are encrypted and that only the security team can decrypt them. The key usage must be auditable. Which approach should they use?",
    options: [
      "Enable SSE-S3 on the CloudTrail S3 bucket with default encryption",
      "Use SSE-KMS with a customer-managed key and a key policy that restricts decrypt permissions to the security team role",
      "Use client-side encryption before CloudTrail writes logs to S3",
      "Enable S3 Object Lock on the CloudTrail bucket with compliance mode"
    ],
    correctAnswer: 1,
    explanation: "Using SSE-KMS with a customer-managed key allows a key policy that restricts kms:Decrypt to the security team role. KMS also logs every key usage in CloudTrail, providing auditable encryption key access."
  },
  {
    id: 9,
    domain: "Domain 1: Design Secure Architectures",
    question: "A company needs to securely manage and rotate API keys for a third-party payment gateway used by their application. The application is running on EC2 instances. Which service should they use?",
    options: [
      "AWS Certificate Manager to store and rotate the API keys",
      "AWS Secrets Manager to store the API keys and configure automatic rotation",
      "AWS Systems Manager Parameter Store with the default parameter type",
      "AWS KMS to encrypt the API keys stored in an S3 bucket"
    ],
    correctAnswer: 1,
    explanation: "AWS Secrets Manager is designed to securely store and automatically rotate secrets, including API keys, database credentials, and tokens. It supports custom Lambda rotation functions for third-party services like payment gateways."
  },
  {
    id: 10,
    domain: "Domain 1: Design Secure Architectures",
    question: "A company needs to provide a centralized security dashboard that aggregates findings from GuardDuty, Inspector, Macie, and IAM Access Analyzer across multiple AWS accounts. Which service should they use?",
    options: [
      "AWS Config with a custom aggregator",
      "AWS Security Hub with cross-account integration enabled",
      "Amazon CloudWatch with a custom dashboard and Lambda data collection",
      "AWS Trusted Advisor with the security checks enabled"
    ],
    correctAnswer: 1,
    explanation: "AWS Security Hub provides a centralized security dashboard that aggregates and prioritizes findings from multiple AWS security services (GuardDuty, Inspector, Macie, IAM Access Analyzer) across multiple accounts, enabling a comprehensive view of security posture."
  },
  {
    id: 11,
    domain: "Domain 1: Design Secure Architectures",
    question: "A company needs to restrict SSH access to EC2 instances in a private subnet so that connections can only originate from a specific corporate IP range. Which control should they implement?",
    options: [
      "Configure the VPC's NACLs to allow inbound SSH from the corporate IP range and deny all other SSH traffic",
      "Configure the security group attached to the EC2 instances to allow inbound SSH from the corporate CIDR block",
      "Use an IAM policy that restricts the aws:SourceIp condition for the ec2:StartInstances action",
      "Enable AWS Network Firewall and create a rule that allows SSH only from the corporate IP range"
    ],
    correctAnswer: 1,
    explanation: "Security Groups are the primary mechanism for controlling instance-level access. Configuring inbound SSH rules to allow only the corporate CIDR block ensures that only authorized IP ranges can connect to the instances."
  },
  {
    id: 12,
    domain: "Domain 1: Design Secure Architectures",
    question: "A company needs to ensure that all data in transit between their on-premises data center and AWS is encrypted. They want a dedicated, private network connection. Which solution should they use?",
    options: [
      "AWS Site-to-Site VPN with IPsec encryption over the public internet",
      "AWS Direct Connect with a MACsec-encrypted connection or a VPN over DX",
      "AWS Transit Gateway with VPC peering and encryption enabled",
      "AWS PrivateLink with interface endpoints for on-premises access"
    ],
    correctAnswer: 1,
    explanation: "AWS Direct Connect provides a dedicated private network connection. MACsec encryption (Layer 2) or a VPN over Direct Connect ensures all data in transit is encrypted over the dedicated connection, providing both privacy and encryption."
  },
  {
    id: 13,
    domain: "Domain 1: Design Secure Architectures",
    question: "A company needs to implement a security policy that denies access to AWS resources unless the request originates from a specific set of IP addresses. This policy should apply to all IAM roles and users. Which approach is MOST effective?",
    options: [
      "Attach a permissions boundary with an IP condition to every IAM user and role",
      "Use an AWS Organizations SCP with a condition that denies all actions unless aws:SourceIp matches the approved range",
      "Configure the VPC's NACLs to deny traffic from unauthorized IP ranges",
      "Enable AWS WAF on a CloudFront distribution with IP set rules"
    ],
    correctAnswer: 1,
    explanation: "An AWS Organizations SCP with an IP condition (aws:SourceIp) applies to all IAM principals in the organization. It denies API calls from unauthorized IP addresses at the organization level, regardless of individual IAM policies."
  },
  {
    id: 14,
    domain: "Domain 1: Design Secure Architectures",
    question: "A company needs to create a private certificate authority (CA) to issue TLS certificates for internal microservices. The certificates should be managed, rotated, and revoked automatically. Which service should they use?",
    options: [
      "AWS Certificate Manager with a private certificate authority (ACM PCA)",
      "AWS KMS with a customer-managed key and a custom certificate rotation Lambda",
      "AWS CloudHSM with a self-managed certificate authority",
      "AWS Secrets Manager with custom certificate storage and rotation"
    ],
    correctAnswer: 0,
    explanation: "AWS Certificate Manager Private Certificate Authority (ACM PCA) allows you to create a private CA for internal use. It provides automated certificate issuance, renewal, revocation, and management for internal microservices."
  },
  {
    id: 15,
    domain: "Domain 1: Design Secure Architectures",
    question: "A company needs to implement a zero-trust architecture for internal application access. They want to authenticate users, evaluate their device posture, and authorize access to specific applications based on identity and context. Which AWS solution should they use?",
    options: [
      "IAM Identity Center with AWS Verified Access",
      "AWS IAM with VPC endpoints and security groups",
      "AWS Cognito with custom authentication flows",
      "AWS Direct Connect with MACsec and IAM policies"
    ],
    correctAnswer: 0,
    explanation: "AWS Verified Access, integrated with IAM Identity Center, provides zero-trust application access by evaluating user identity, device posture, and context before granting access to internal applications. It enforces least-privilege access based on real-time signals."
  }
];
