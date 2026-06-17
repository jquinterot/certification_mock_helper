import type { ExamQuestion } from '@/types';

export const questions2: ExamQuestion[] = [
  // Domain 1: Data Preparation for ML (28%) - Questions 1-18
  {
    id: 1,
    domain: "Domain 1: Data Preparation for ML",
    question: "A data scientist needs to perform feature engineering on a dataset stored in Amazon S3. They want to use a visual interface to create transformations without writing code. Which AWS service is MOST appropriate?",
    options: [
      "Amazon SageMaker Training Jobs",
      "Amazon SageMaker Data Wrangler",
      "AWS Lambda with Python scripts",
      "Amazon EMR with Hive"
    ],
    correctAnswer: 1,
    explanation: "Amazon SageMaker Data Wrangler provides a visual interface for data preparation and feature engineering. It includes over 300 built-in transformations, allows you to import data from multiple sources (including S3), and exports the transformed data or feature engineering pipeline without requiring code."
  },
  {
    id: 2,
    domain: "Domain 1: Data Preparation for ML",
    question: "A company needs to perform real-time feature extraction on streaming data before feeding it into an ML model. Which AWS service combination should they use?",
    options: [
      "Amazon S3 and AWS Batch",
      "Amazon Kinesis Data Analytics and AWS Lambda",
      "Amazon RDS and Amazon Athena",
      "Amazon EFS and AWS Glue"
    ],
    correctAnswer: 1,
    explanation: "Amazon Kinesis Data Analytics can process streaming data in real-time using Apache Flink or SQL, and AWS Lambda can perform feature extraction transformations. This combination is ideal for real-time feature engineering pipelines before model inference."
  },
  {
    id: 3,
    domain: "Domain 1: Data Preparation for ML",
    question: "Which technique is MOST appropriate for normalizing numerical features that contain outliers?",
    options: [
      "Min-Max scaling",
      "Standard scaling (Z-score normalization)",
      "Robust scaling using median and IQR",
      "Log transformation only"
    ],
    correctAnswer: 2,
    explanation: "Robust scaling uses the median and interquartile range (IQR) instead of mean and standard deviation, making it resistant to outliers. Min-Max and Standard scaling are sensitive to outliers. Log transformation helps but doesn't provide the same normalization as scaling."
  },
  {
    id: 4,
    domain: "Domain 1: Data Preparation for ML",
    question: "A company needs to store image data for training a computer vision model. The images should be efficiently accessible during distributed training. Which storage approach is BEST?",
    options: [
      "Store images as individual files in Amazon EFS",
      "Use RecordIO or WebDataset format in Amazon S3 with ShardedByS3Key",
      "Store images as base64 strings in Amazon DynamoDB",
      "Use Amazon RDS with BLOB columns"
    ],
    correctAnswer: 1,
    explanation: "RecordIO or WebDataset format in S3 with ShardedByS3Key distribution is optimal for distributed training. These formats allow efficient streaming of image data to training instances, and ShardedByS3Key ensures each worker gets a distinct subset of data."
  },
  {
    id: 5,
    domain: "Domain 1: Data Preparation for ML",
    question: "Which technique is MOST effective for handling missing categorical data in a dataset where the missingness is related to other observed variables?",
    options: [
      "Delete rows with missing values",
      "Mode imputation",
      "Multiple imputation by chained equations (MICE)",
      "Replace with a constant placeholder"
    ],
    correctAnswer: 2,
    explanation: "MICE (Multiple Imputation by Chained Equations) is a sophisticated technique that models each feature with missing values as a function of other features. It's particularly effective when missingness is related to other observed variables (MAR - Missing At Random)."
  },
  {
    id: 6,
    domain: "Domain 1: Data Preparation for ML",
    question: "A team needs to implement a data pipeline that automatically detects schema changes in incoming data. Which AWS service should they use?",
    options: [
      "Amazon SageMaker Model Monitor",
      "AWS Glue Data Catalog with crawlers",
      "Amazon CloudWatch Events",
      "AWS Config Rules"
    ],
    correctAnswer: 1,
    explanation: "AWS Glue Data Catalog with crawlers can automatically detect schema changes and update the catalog. Crawlers can be scheduled to run periodically and will detect new columns, data type changes, and new partitions, keeping the schema registry up to date."
  },
  {
    id: 7,
    domain: "Domain 1: Data Preparation for ML",
    question: "Which data format is BEST for efficient storage and querying of nested JSON-like data for ML workloads on S3?",
    options: [
      "CSV with flattened columns",
      "Apache Parquet",
      "Apache Avro",
      "Raw JSON files"
    ],
    correctAnswer: 1,
    explanation: "Apache Parquet is a columnar storage format that supports complex nested data structures efficiently. It provides better compression than JSON, supports predicate pushdown for faster querying, and is natively supported by most ML frameworks and AWS services."
  },
  {
    id: 8,
    domain: "Domain 1: Data Preparation for ML",
    question: "A company needs to reduce dimensionality of high-dimensional categorical data while preserving relationships between categories. Which technique is MOST appropriate?",
    options: [
      "One-hot encoding",
      "Entity embedding (learned dense representations)",
      "Label encoding",
      "Binary encoding"
    ],
    correctAnswer: 1,
    explanation: "Entity embeddings are learned dense vector representations that capture relationships between categories. Unlike one-hot encoding which creates sparse high-dimensional vectors, embeddings reduce dimensionality while preserving semantic relationships, often improving model performance."
  },
  {
    id: 9,
    domain: "Domain 1: Data Preparation for ML",
    question: "Which AWS service can be used to automatically detect and mask sensitive data (PII) in datasets before ML training?",
    options: [
      "Amazon SageMaker Clarify",
      "Amazon Macie",
      "AWS IAM",
      "Amazon GuardDuty"
    ],
    correctAnswer: 1,
    explanation: "Amazon Macie is a fully managed data security and privacy service that uses machine learning to automatically discover, classify, and protect sensitive data (PII) in S3. It can identify PII and help ensure datasets are properly anonymized before ML training."
  },
  {
    id: 10,
    domain: "Domain 1: Data Preparation for ML",
    question: "A team needs to split time-series data for ML training without data leakage. Which approach is MOST appropriate?",
    options: [
      "Random split into train/test sets",
      "Stratified split based on labels",
      "Chronological split (time-based split)",
      "K-fold cross-validation"
    ],
    correctAnswer: 2,
    explanation: "For time-series data, a chronological split is essential to prevent data leakage. The training set should contain earlier time periods, and the test set should contain later periods. Random or stratified splits would leak future information into the training set."
  },
  {
    id: 11,
    domain: "Domain 1: Data Preparation for ML",
    question: "Which technique is BEST for generating additional training data for image classification when labeled data is scarce?",
    options: [
      "Duplicate existing images",
      "Data augmentation (rotation, flipping, cropping, color jitter)",
      "Use higher resolution images",
      "Convert to grayscale"
    ],
    correctAnswer: 1,
    explanation: "Data augmentation creates synthetic training examples by applying transformations like rotation, flipping, cropping, and color adjustments. This increases dataset diversity and helps prevent overfitting, especially when labeled data is limited."
  },
  {
    id: 12,
    domain: "Domain 1: Data Preparation for ML",
    question: "A company needs to join data from multiple S3 buckets with different formats (CSV, Parquet, JSON) for ML training. Which AWS service is MOST appropriate?",
    options: [
      "Amazon Athena with federated query",
      "AWS Glue DataBrew",
      "Amazon SageMaker Processing",
      "AWS Lambda with manual parsing"
    ],
    correctAnswer: 0,
    explanation: "Amazon Athena with federated query allows you to query data across multiple S3 buckets and formats (CSV, Parquet, JSON) using standard SQL. It can join data from different sources without moving data, making it ideal for exploratory data preparation before ML training."
  },
  {
    id: 13,
    domain: "Domain 1: Data Preparation for ML",
    question: "Which technique is MOST appropriate for handling categorical variables with a natural ordering relationship?",
    options: [
      "One-hot encoding",
      "Ordinal encoding (preserving order)",
      "Binary encoding",
      "Hash encoding"
    ],
    correctAnswer: 1,
    explanation: "Ordinal encoding preserves the natural ordering of categories (e.g., low < medium < high). This is appropriate when the categorical variable has a meaningful order. One-hot encoding would lose this information, and binary/hash encoding doesn't preserve order."
  },
  {
    id: 14,
    domain: "Domain 1: Data Preparation for ML",
    question: "A company needs to create a reproducible data preprocessing pipeline for ML. Which approach is BEST?",
    options: [
      "Manual steps in Jupyter notebooks",
      "AWS Glue jobs with version control",
      "Ad-hoc SQL queries",
      "Spreadsheet-based transformations"
    ],
    correctAnswer: 1,
    explanation: "AWS Glue jobs with version control provide a reproducible, automated data preprocessing pipeline. Jobs can be scheduled, monitored, and versioned, ensuring consistency across training runs. Manual notebooks or ad-hoc queries are not reproducible."
  },
  {
    id: 15,
    domain: "Domain 1: Data Preparation for ML",
    question: "Which data validation technique is MOST important for detecting schema drift in production ML pipelines?",
    options: [
      "Manual data sampling",
      "Great Expectations or AWS Glue Data Quality rules",
      "Visual data inspection",
      "Post-hoc model accuracy monitoring"
    ],
    correctAnswer: 1,
    explanation: "Great Expectations or AWS Glue Data Quality rules provide automated, programmatic data validation. They can detect schema drift (new columns, type changes), missing values, and distribution changes automatically, unlike manual methods which are error-prone."
  },
  {
    id: 16,
    domain: "Domain 1: Data Preparation for ML",
    question: "A data scientist needs to transform text data into numerical embeddings for an NLP model. Which approach is BEST?",
    options: [
      "TF-IDF vectors only",
      "Pre-trained word embeddings (Word2Vec, GloVe) or contextual embeddings (BERT)",
      "Character-level ASCII encoding",
      "Bag of Words with binary counts"
    ],
    correctAnswer: 1,
    explanation: "Pre-trained word embeddings (Word2Vec, GloVe) or contextual embeddings (BERT) capture semantic meaning and relationships between words. TF-IDF and Bag of Words are simpler but don't capture semantics. Contextual embeddings like BERT are state-of-the-art for most NLP tasks."
  },
  {
    id: 17,
    domain: "Domain 1: Data Preparation for ML",
    question: "Which technique is BEST for detecting and removing duplicate records in a large dataset before ML training?",
    options: [
      "Manual inspection",
      "Hash-based deduplication or AWS Glue FindMatches",
      "Random sampling",
      "Deleting all rows with null values"
    ],
    correctAnswer: 1,
    explanation: "Hash-based deduplication computes hashes for records and removes duplicates efficiently. AWS Glue FindMatches ML transform can also identify fuzzy duplicates (records that are similar but not exact matches). Both are scalable approaches for large datasets."
  },
  {
    id: 18,
    domain: "Domain 1: Data Preparation for ML",
    question: "A company needs to ensure their training data is representative of all demographic groups. Which bias detection metric is MOST relevant?",
    options: [
      "Mean Squared Error",
      "Class Imbalance (CI) or Difference in Positive Proportions in Labels (DPL)",
      "Root Mean Squared Error",
      "R-squared"
    ],
    correctAnswer: 1,
    explanation: "Class Imbalance (CI) and Difference in Positive Proportions in Labels (DPL) are pre-training bias metrics that detect whether different demographic groups are represented proportionally in the dataset. MSE, RMSE, and R-squared are regression metrics, not bias metrics."
  },
  // Domain 2: ML Model Development (26%) - Questions 19-35
  {
    id: 19,
    domain: "Domain 2: ML Model Development",
    question: "Which AWS service is BEST for training a custom computer vision model using transfer learning with minimal code?",
    options: [
      "Amazon SageMaker Training with custom Docker containers",
      "Amazon SageMaker Autopilot",
      "Amazon Rekognition Custom Labels",
      "AWS DeepLens"
    ],
    correctAnswer: 2,
    explanation: "Amazon Rekognition Custom Labels allows you to train custom computer vision models using transfer learning with minimal code. You only need to provide labeled images, and the service handles the transfer learning, training, and hosting."
  },
  {
    id: 20,
    domain: "Domain 2: ML Model Development",
    question: "Which technique is MOST effective for preventing overfitting in tree-based models like XGBoost?",
    options: [
      "Increasing the number of trees",
      "L1/L2 regularization (reg_alpha, reg_lambda), max_depth, and early stopping",
      "Using larger learning rates",
      "Removing all categorical features"
    ],
    correctAnswer: 1,
    explanation: "XGBoost provides regularization parameters (reg_alpha for L1, reg_lambda for L2), max_depth to control tree complexity, and early stopping. These are the most effective techniques for preventing overfitting in gradient boosting models."
  },
  {
    id: 21,
    domain: "Domain 2: ML Model Development",
    question: "A data scientist needs to compare multiple model architectures for an NLP task. Which SageMaker feature is MOST appropriate?",
    options: [
      "SageMaker Training Jobs with manual scripting",
      "SageMaker Experiments with multiple trial components",
      "SageMaker Model Registry",
      "SageMaker Inference Recommender"
    ],
    correctAnswer: 1,
    explanation: "Amazon SageMaker Experiments allows you to organize, compare, and evaluate multiple ML experiments (trial components). You can track different model architectures, hyperparameters, and metrics in a single view, making it ideal for model comparison."
  },
  {
    id: 22,
    domain: "Domain 2: ML Model Development",
    question: "Which metric is MOST appropriate for evaluating a multi-class classification model with imbalanced classes?",
    options: [
      "Accuracy",
      "Macro-averaged F1 Score",
      "Mean Absolute Error",
      "Precision for the majority class only"
    ],
    correctAnswer: 1,
    explanation: "Macro-averaged F1 Score computes the F1 score for each class independently and then averages them. This treats all classes equally regardless of their size, making it suitable for imbalanced multi-class classification. Accuracy is biased toward majority classes."
  },
  {
    id: 23,
    domain: "Domain 2: ML Model Development",
    question: "Which technique is MOST appropriate for handling concept drift in a production ML model?",
    options: [
      "Retrain the model on the original training data",
      "Continuous learning with incremental training on new data",
      "Increase the model complexity",
      "Use a larger batch size"
    ],
    correctAnswer: 1,
    explanation: "Concept drift occurs when the relationship between input features and target variable changes over time. Continuous learning with incremental training on new data allows the model to adapt to changing patterns. Retraining on original data won't address the drift."
  },
  {
    id: 24,
    domain: "Domain 2: ML Model Development",
    question: "Which AWS AI service should be used for real-time language translation during a live video conference?",
    options: [
      "Amazon Polly",
      "Amazon Translate",
      "Amazon Transcribe",
      "Amazon Comprehend"
    ],
    correctAnswer: 1,
    explanation: "Amazon Translate provides real-time neural machine translation. It can translate text between languages in real-time, making it suitable for live applications. For video conferences, you'd combine it with Transcribe (speech-to-text) and Polly (text-to-speech)."
  },
  {
    id: 25,
    domain: "Domain 2: ML Model Development",
    question: "A model's training accuracy is 95% but validation accuracy is 60%. Which technique is MOST likely to help?",
    options: [
      "Add more training data",
      "Increase model complexity",
      "Apply regularization (dropout, L2, early stopping)",
      "Train for more epochs"
    ],
    correctAnswer: 2,
    explanation: "A large gap between training and validation accuracy indicates severe overfitting. Regularization techniques like dropout, L2 regularization, and early stopping are designed to reduce overfitting by penalizing model complexity or stopping training before overfitting occurs."
  },
  {
    id: 26,
    domain: "Domain 2: ML Model Development",
    question: "Which AWS service is BEST for building a recommendation system without writing ML code?",
    options: [
      "Amazon SageMaker Studio",
      "Amazon Personalize",
      "Amazon Kendra",
      "Amazon OpenSearch Service"
    ],
    correctAnswer: 1,
    explanation: "Amazon Personalize is a fully managed ML service for building recommendation systems. It provides pre-built recipes for different recommendation scenarios (user-item, item-item, popularity) and doesn't require writing ML code. You just provide interaction data and item metadata."
  },
  {
    id: 27,
    domain: "Domain 2: ML Model Development",
    question: "Which activation function is BEST for the output layer of a binary classification neural network?",
    options: [
      "ReLU",
      "Sigmoid",
      "Tanh",
      "Softmax"
    ],
    correctAnswer: 1,
    explanation: "Sigmoid activation outputs values between 0 and 1, which can be interpreted as probabilities for binary classification. ReLU is for hidden layers, Tanh outputs -1 to 1, and Softmax is for multi-class classification."
  },
  {
    id: 28,
    domain: "Domain 2: ML Model Development",
    question: "Which approach is MOST effective for improving model performance when training data is limited?",
    options: [
      "Use a larger model architecture",
      "Transfer learning from pre-trained models",
      "Increase the learning rate",
      "Remove regularization"
    ],
    correctAnswer: 1,
    explanation: "Transfer learning leverages knowledge from pre-trained models trained on large datasets. By fine-tuning on your limited data, you can achieve better performance than training from scratch. Larger models and higher learning rates typically worsen performance with limited data."
  },
  {
    id: 29,
    domain: "Domain 2: ML Model Development",
    question: "Which AWS service is BEST for detecting fraudulent activity in real-time financial transactions?",
    options: [
      "Amazon Forecast",
      "Amazon Fraud Detector",
      "Amazon Comprehend",
      "Amazon Translate"
    ],
    correctAnswer: 1,
    explanation: "Amazon Fraud Detector is a fully managed service that uses ML to identify potentially fraudulent online activities. It provides real-time fraud predictions and can be customized for specific fraud patterns in financial transactions."
  },
  {
    id: 30,
    domain: "Domain 2: ML Model Development",
    question: "What is the primary purpose of using a learning rate scheduler during model training?",
    options: [
      "To increase training speed throughout",
      "To adapt the learning rate based on training progress (e.g., reduce on plateau)",
      "To keep the learning rate constant",
      "To randomize the learning rate"
    ],
    correctAnswer: 1,
    explanation: "Learning rate schedulers adjust the learning rate during training based on progress metrics. Common strategies include reducing the learning rate when validation loss plateaus, or using cosine annealing. This helps achieve better convergence and finer adjustments as training progresses."
  },
  {
    id: 31,
    domain: "Domain 2: ML Model Development",
    question: "Which metric is MOST appropriate for evaluating a model that predicts customer churn (rare event)?",
    options: [
      "Accuracy",
      "Precision-Recall AUC or F1 Score",
      "Mean Squared Error",
      "R-squared"
    ],
    correctAnswer: 1,
    explanation: "For rare events like churn, Precision-Recall AUC and F1 Score are more informative than accuracy. Accuracy can be misleading when the positive class is rare (e.g., predicting 'no churn' for everyone gives 95% accuracy). Precision-Recall focuses on the performance for the positive class."
  },
  {
    id: 32,
    domain: "Domain 2: ML Model Development",
    question: "Which technique is MOST appropriate for reducing inference latency of a deep learning model?",
    options: [
      "Increase model size",
      "Model quantization (INT8) and ONNX optimization",
      "Add more layers",
      "Use a larger batch size"
    ],
    correctAnswer: 1,
    explanation: "Model quantization reduces precision from FP32 to INT8, significantly reducing model size and inference latency. ONNX optimization provides additional performance improvements through graph optimization. These are standard techniques for production deployment."
  },
  {
    id: 33,
    domain: "Domain 2: ML Model Development",
    question: "Which AWS service can be used to analyze sentiment in customer reviews at scale?",
    options: [
      "Amazon Polly",
      "Amazon Comprehend",
      "Amazon Translate",
      "Amazon Textract"
    ],
    correctAnswer: 1,
    explanation: "Amazon Comprehend is a natural language processing (NLP) service that uses ML to find insights and relationships in text. It provides sentiment analysis, entity detection, key phrase extraction, and language detection, making it ideal for analyzing customer reviews."
  },
  {
    id: 34,
    domain: "Domain 2: ML Model Development",
    question: "A data scientist needs to track model hyperparameters and metrics across multiple training runs. Which tool is MOST appropriate?",
    options: [
      "Amazon CloudWatch Logs",
      "Amazon SageMaker Experiments with MLflow integration",
      "Amazon S3 versioning",
      "AWS CloudTrail"
    ],
    correctAnswer: 1,
    explanation: "Amazon SageMaker Experiments provides native tracking of hyperparameters, metrics, and artifacts across training runs. It integrates with MLflow for additional experiment tracking capabilities. CloudWatch Logs and S3 versioning don't provide structured experiment tracking."
  },
  {
    id: 35,
    domain: "Domain 2: ML Model Development",
    question: "Which AWS AI service is BEST for extracting structured data from scanned documents and forms?",
    options: [
      "Amazon Rekognition",
      "Amazon Textract",
      "Amazon Comprehend",
      "Amazon Translate"
    ],
    correctAnswer: 1,
    explanation: "Amazon Textract automatically extracts text, handwriting, and data from scanned documents and forms. It goes beyond simple OCR by understanding the structure of forms and tables, returning structured data with key-value pairs."
  },
  // Domain 3: Deployment and Orchestration (22%) - Questions 36-49
  {
    id: 36,
    domain: "Domain 3: Deployment and Orchestration",
    question: "Which SageMaker endpoint configuration is BEST for handling sporadic traffic with zero idle capacity cost?",
    options: [
      "Real-time endpoint with multiple instances",
      "Serverless endpoint with provisioned concurrency",
      "Asynchronous endpoint",
      "Multi-model endpoint"
    ],
    correctAnswer: 1,
    explanation: "SageMaker Serverless Endpoints automatically scale compute capacity based on inference request volume, and you only pay for the compute capacity used to process inference requests. With provisioned concurrency, you can keep a warm pool of instances for predictable latency."
  },
  {
    id: 37,
    domain: "Domain 3: Deployment and Orchestration",
    question: "Which deployment strategy is BEST for comparing two model versions with live traffic to measure business impact?",
    options: [
      "Blue/green deployment",
      "Canary deployment",
      "A/B testing with traffic splitting",
      "Rolling deployment"
    ],
    correctAnswer: 2,
    explanation: "A/B testing with traffic splitting routes different percentages of traffic to different model versions. This allows you to measure business metrics (conversion, revenue) for each version and make data-driven decisions. Blue/green and canary are for safe rollout, not statistical comparison."
  },
  {
    id: 38,
    domain: "Domain 3: Deployment and Orchestration",
    question: "Which AWS service is BEST for managing infrastructure as code for ML pipelines using Python?",
    options: [
      "AWS CloudFormation with YAML templates",
      "AWS CDK (Cloud Development Kit)",
      "AWS CloudShell",
      "AWS Systems Manager"
    ],
    correctAnswer: 1,
    explanation: "AWS CDK allows you to define cloud infrastructure using familiar programming languages like Python, TypeScript, and Java. It provides high-level constructs that compile to CloudFormation, making it ideal for defining ML infrastructure as code in Python."
  },
  {
    id: 39,
    domain: "Domain 3: Deployment and Orchestration",
    question: "A company needs to deploy 100+ small models cost-effectively. Which SageMaker deployment option is BEST?",
    options: [
      "Individual real-time endpoints for each model",
      "SageMaker Multi-Model Endpoint",
      "SageMaker Batch Transform",
      "SageMaker Serverless Endpoint"
    ],
    correctAnswer: 1,
    explanation: "SageMaker Multi-Model Endpoints allow you to deploy thousands of models on a single endpoint, sharing the underlying compute. This is dramatically more cost-effective than individual endpoints when you have many models that receive intermittent traffic."
  },
  {
    id: 40,
    domain: "Domain 3: Deployment and Orchestration",
    question: "Which AWS service should be used to orchestrate complex ML workflows with conditional branching and parallel execution?",
    options: [
      "AWS Lambda with Step Functions",
      "Amazon SageMaker Pipelines",
      "Amazon SQS",
      "AWS Batch"
    ],
    correctAnswer: 1,
    explanation: "Amazon SageMaker Pipelines provides a native ML workflow orchestration service with support for conditional branching, parallel execution, parameterization, and caching. It integrates directly with SageMaker features and is designed specifically for ML workflows."
  },
  {
    id: 41,
    domain: "Domain 3: Deployment and Orchestration",
    question: "Which approach is BEST for implementing automated rollback of a deployed ML model when error rates exceed thresholds?",
    options: [
      "Manual monitoring and manual rollback",
      "Amazon CloudWatch Alarms triggering AWS Lambda for SageMaker endpoint updates",
      "Email alerts to DevOps team",
      "Daily manual review of logs"
    ],
    correctAnswer: 1,
    explanation: "CloudWatch Alarms can monitor SageMaker endpoint metrics (InvocationErrors, ModelLatency) and trigger AWS Lambda functions. The Lambda can automatically update the endpoint to point to a previous model version, enabling fully automated rollback based on error thresholds."
  },
  {
    id: 42,
    domain: "Domain 3: Deployment and Orchestration",
    question: "Which SageMaker feature is BEST for compiling a trained model to run on specific hardware accelerators (e.g., NVIDIA Jetson, ARM)?",
    options: [
      "SageMaker Model Monitor",
      "SageMaker Neo",
      "SageMaker Autopilot",
      "SageMaker Debugger"
    ],
    correctAnswer: 1,
    explanation: "Amazon SageMaker Neo compiles models for specific target hardware (CPUs, GPUs, edge devices like NVIDIA Jetson, ARM). It optimizes model performance for the target hardware platform, making it ideal for edge deployment scenarios."
  },
  {
    id: 43,
    domain: "Domain 3: Deployment and Orchestration",
    question: "Which AWS service is BEST for managing model artifacts and metadata across multiple model versions?",
    options: [
      "Amazon S3 with manual folder naming",
      "Amazon SageMaker Model Registry",
      "Amazon DynamoDB",
      "Amazon EFS"
    ],
    correctAnswer: 1,
    explanation: "Amazon SageMaker Model Registry is a metadata store that allows you to catalog, version, and manage ML models. It supports model approval workflows, lineage tracking, and integration with CI/CD pipelines, making it the best choice for managing model artifacts across versions."
  },
  {
    id: 44,
    domain: "Domain 3: Deployment and Orchestration",
    question: "Which container orchestration service is BEST for deploying ML models that require custom Kubernetes operators?",
    options: [
      "Amazon ECS",
      "Amazon EKS (Elastic Kubernetes Service)",
      "AWS Fargate",
      "AWS Lambda"
    ],
    correctAnswer: 1,
    explanation: "Amazon EKS is a managed Kubernetes service that supports custom Kubernetes operators, CRDs, and advanced Kubernetes features. This is essential for complex ML deployments that require custom resource management, sidecars, or advanced scheduling."
  },
  {
    id: 45,
    domain: "Domain 3: Deployment and Orchestration",
    question: "Which auto scaling configuration is MOST appropriate for a SageMaker endpoint with predictable daily traffic patterns?",
    options: [
      "Target tracking on CPU utilization",
      "Scheduled scaling based on known traffic patterns",
      "Step scaling on memory usage",
      "No scaling (fixed instances)"
    ],
    correctAnswer: 1,
    explanation: "Scheduled scaling allows you to set up scaling actions that occur at specific times. This is ideal for predictable traffic patterns (e.g., higher load during business hours). Target tracking is better for unpredictable traffic."
  },
  {
    id: 46,
    domain: "Domain 3: Deployment and Orchestration",
    question: "Which approach is BEST for deploying an ML model that processes large payloads (up to 1GB) asynchronously?",
    options: [
      "Real-time endpoint with auto scaling",
      "SageMaker Asynchronous Inference",
      "Serverless endpoint",
      "Multi-model endpoint"
    ],
    correctAnswer: 1,
    explanation: "SageMaker Asynchronous Inference is designed for large payloads and long processing times. It queues requests, processes them asynchronously, and stores results in S3. It supports payloads up to 1GB and doesn't require maintaining persistent instances for the entire duration."
  },
  {
    id: 47,
    domain: "Domain 3: Deployment and Orchestration",
    question: "Which AWS service should be used to trigger a SageMaker pipeline when new data arrives in an S3 bucket?",
    options: [
      "Amazon CloudWatch",
      "Amazon EventBridge with S3 event notifications",
      "AWS Config",
      "Amazon QuickSight"
    ],
    correctAnswer: 1,
    explanation: "Amazon EventBridge can receive S3 event notifications (ObjectCreated) and trigger SageMaker Pipelines. This event-driven approach enables automated retraining and inference pipelines when new data arrives, without polling."
  },
  {
    id: 48,
    domain: "Domain 3: Deployment and Orchestration",
    question: "Which approach is BEST for ensuring model reproducibility in a production ML pipeline?",
    options: [
      "Manual documentation of steps",
      "Version control for code (Git), data (DVC), and model artifacts (SageMaker Model Registry)",
      "Storing model weights in S3",
      "Using the same random seed"
    ],
    correctAnswer: 1,
    explanation: "Full reproducibility requires versioning code (Git), data (DVC or SageMaker Data Wrangler export), and model artifacts (SageMaker Model Registry). This ensures that every component of the ML pipeline can be recreated exactly. Random seeds alone are insufficient."
  },
  {
    id: 49,
    domain: "Domain 3: Deployment and Orchestration",
    question: "Which AWS service is BEST for storing and managing Docker container images for custom ML model containers?",
    options: [
      "Amazon S3",
      "Amazon ECR (Elastic Container Registry)",
      "Amazon EFS",
      "AWS CodeArtifact"
    ],
    correctAnswer: 1,
    explanation: "Amazon ECR is a fully managed container registry that stores, manages, and deploys Docker container images. It integrates with SageMaker, ECS, and EKS, and supports image scanning, lifecycle policies, and cross-region replication."
  },
  // Domain 4: Monitoring, Maintenance, and Security (24%) - Questions 50-65
  {
    id: 50,
    domain: "Domain 4: Monitoring, Maintenance, and Security",
    question: "Which AWS service is BEST for detecting anomalies in model input data over time?",
    options: [
      "Amazon CloudWatch",
      "Amazon SageMaker Model Monitor with data quality monitoring",
      "AWS CloudTrail",
      "Amazon Inspector"
    ],
    correctAnswer: 1,
    explanation: "Amazon SageMaker Model Monitor with data quality monitoring automatically detects anomalies in model input data by comparing incoming data against a baseline. It can identify data drift, missing values, and schema changes over time."
  },
  {
    id: 51,
    domain: "Domain 4: Monitoring, Maintenance, and Security",
    question: "Which AWS service provides comprehensive audit trails for all API calls made to SageMaker resources?",
    options: [
      "Amazon CloudWatch Logs",
      "AWS CloudTrail",
      "AWS Config",
      "Amazon GuardDuty"
    ],
    correctAnswer: 1,
    explanation: "AWS CloudTrail records all API calls made to AWS services, including SageMaker. It provides audit logs showing who made what calls, when, and from where. This is essential for security auditing, compliance, and operational troubleshooting."
  },
  {
    id: 52,
    domain: "Domain 4: Monitoring, Maintenance, and Security",
    question: "Which approach is MOST effective for monitoring model performance degradation in production?",
    options: [
      "Manual periodic testing",
      "SageMaker Model Monitor with scheduled baseline comparisons",
      "Checking logs daily",
      "User feedback surveys"
    ],
    correctAnswer: 1,
    explanation: "SageMaker Model Monitor with scheduled baseline comparisons provides automated, continuous monitoring of model performance. It compares incoming data and predictions against a baseline, alerting you when metrics drift beyond thresholds. This is more reliable than manual methods."
  },
  {
    id: 53,
    domain: "Domain 4: Monitoring, Maintenance, and Security",
    question: "Which instance purchasing strategy is MOST cost-effective for short-term, experimental ML training?",
    options: [
      "Reserved Instances",
      "Spot Instances",
      "On-Demand Instances",
      "Dedicated Hosts"
    ],
    correctAnswer: 1,
    explanation: "Spot Instances offer up to 90% discount compared to On-Demand pricing. They are ideal for fault-tolerant, experimental workloads that can handle interruptions. SageMaker Managed Spot Training makes it easy to use Spot Instances for training jobs."
  },
  {
    id: 54,
    domain: "Domain 4: Monitoring, Maintenance, and Security",
    question: "An ML team suspects unauthorized access attempts to their SageMaker notebook instances from external IP addresses. Which AWS service provides intelligent threat detection with machine learning to identify suspicious activity patterns?",
    options: [
      "Amazon CloudWatch",
      "Amazon GuardDuty",
      "AWS CloudTrail",
      "Amazon Inspector"
    ],
    correctAnswer: 1,
    explanation: "Amazon GuardDuty provides intelligent threat detection using machine learning to identify suspicious activity patterns, including unauthorized access attempts. CloudWatch is for monitoring metrics, CloudTrail logs API calls but doesn't detect threats, and Inspector is for vulnerability assessments."
  },
  {
    id: 55,
    domain: "Domain 4: Monitoring, Maintenance, and Security",
    question: "Which IAM best practice is MOST critical for securing SageMaker notebook instances?",
    options: [
      "Use the root account for all operations",
      "Attach the AmazonSageMakerFullAccess policy to all users",
      "Use IAM roles with least privilege and VPC endpoints",
      "Share IAM user credentials among team members"
    ],
    correctAnswer: 2,
    explanation: "Using IAM roles with least privilege and VPC endpoints is the most critical practice. Least privilege ensures users only have necessary permissions, and VPC endpoints keep traffic within the AWS network, reducing exposure. FullAccess policies and shared credentials are security risks."
  },
  {
    id: 56,
    domain: "Domain 4: Monitoring, Maintenance, and Security",
    question: "Which AWS service is BEST for setting up automated cost alerts for ML training jobs?",
    options: [
      "AWS Cost Explorer",
      "AWS Budgets with SNS notifications",
      "AWS Trusted Advisor",
      "AWS Billing Dashboard"
    ],
    correctAnswer: 1,
    explanation: "AWS Budgets allows you to set custom cost and usage budgets with automated alerts via SNS when thresholds are exceeded. It can trigger notifications, Lambda functions, or other automated responses, making it ideal for proactive cost monitoring."
  },
  {
    id: 57,
    domain: "Domain 4: Monitoring, Maintenance, and Security",
    question: "Which technique is MOST effective for securing model artifacts in transit between services?",
    options: [
      "Use HTTP instead of HTTPS",
      "Enable TLS/SSL encryption for all service communications",
      "Use unencrypted S3 buckets",
      "Disable VPC endpoints"
    ],
    correctAnswer: 1,
    explanation: "TLS/SSL encryption ensures all data in transit is encrypted. AWS services support TLS by default, and you should ensure all endpoints use HTTPS. This prevents man-in-the-middle attacks and ensures data confidentiality during transmission."
  },
  {
    id: 58,
    domain: "Domain 4: Monitoring, Maintenance, and Security",
    question: "A company wants to identify unused SageMaker endpoints that have had zero invocations for the past 30 days to reduce unnecessary costs. Which AWS service provides automated checks for low utilization and idle resources?",
    options: [
      "AWS Cost Explorer",
      "AWS Compute Optimizer",
      "AWS Trusted Advisor",
      "AWS Budgets"
    ],
    correctAnswer: 2,
    explanation: "AWS Trusted Advisor provides automated checks for cost optimization, including idle resources like unused SageMaker endpoints. It scans your infrastructure and provides recommendations with actionable steps. Cost Explorer shows spending patterns but doesn't identify unused resources, Compute Optimizer focuses on rightsizing, and Budgets sets spending thresholds."
  },
  {
    id: 59,
    domain: "Domain 4: Monitoring, Maintenance, and Security",
    question: "Which approach is BEST for isolating ML training environments from production systems?",
    options: [
      "Use the same VPC for all environments",
      "Deploy training and production in separate VPCs with VPC peering where needed",
      "Use public subnets for all resources",
      "Disable security groups"
    ],
    correctAnswer: 1,
    explanation: "Using separate VPCs for training and production environments provides network isolation. VPC peering can be configured for necessary communication between environments. This is a security best practice that prevents accidental interference and limits blast radius."
  },
  {
    id: 60,
    domain: "Domain 4: Monitoring, Maintenance, and Security",
    question: "Which AWS service can trace requests across distributed ML inference endpoints to identify bottlenecks?",
    options: [
      "Amazon CloudWatch Metrics",
      "AWS X-Ray",
      "AWS CloudTrail",
      "Amazon GuardDuty"
    ],
    correctAnswer: 1,
    explanation: "AWS X-Ray provides distributed tracing that helps analyze and debug requests as they travel through multiple services. For ML inference endpoints, it can trace requests through API Gateway, Lambda, SageMaker, and other services to identify latency bottlenecks."
  },
  {
    id: 61,
    domain: "Domain 4: Monitoring, Maintenance, and Security",
    question: "Which tagging strategy is MOST effective for tracking costs of ML experiments across multiple teams?",
    options: [
      "Use only AWS-generated tags",
      "Implement consistent tagging with project, team, environment, and experiment identifiers",
      "Avoid tagging to reduce complexity",
      "Use random tags for each resource"
    ],
    correctAnswer: 1,
    explanation: "Consistent tagging with project, team, environment, and experiment identifiers enables accurate cost allocation and chargeback. Tags can be used in Cost Explorer, Budgets, and billing reports to analyze spending by team, project, or experiment."
  },
  {
    id: 62,
    domain: "Domain 4: Monitoring, Maintenance, and Security",
    question: "Which AWS service can monitor SageMaker endpoint invocation latency and automatically alert when thresholds are exceeded?",
    options: [
      "AWS CloudTrail",
      "Amazon CloudWatch Alarms with SNS",
      "AWS Config Rules",
      "Amazon Macie"
    ],
    correctAnswer: 1,
    explanation: "Amazon CloudWatch Alarms can monitor SageMaker endpoint metrics like ModelLatency and OverheadLatency. When thresholds are exceeded, alarms can send notifications via SNS to email, Slack, or trigger automated remediation via Lambda."
  },
  {
    id: 63,
    domain: "Domain 4: Monitoring, Maintenance, and Security",
    question: "Which security feature in SageMaker helps control network access to notebook instances and training jobs?",
    options: [
      "SageMaker Model Registry",
      "VPC configuration with security groups and network ACLs",
      "SageMaker Autopilot",
      "SageMaker Canvas"
    ],
    correctAnswer: 1,
    explanation: "VPC configuration with security groups and network ACLs controls network access to SageMaker resources. Security groups act as virtual firewalls, and network ACLs provide additional subnet-level security. This is essential for securing ML environments."
  },
  {
    id: 64,
    domain: "Domain 4: Monitoring, Maintenance, and Security",
    question: "A company is running SageMaker training jobs on ml.p3.2xlarge instances but suspects they may be over-provisioned. Which AWS service provides detailed recommendations for rightsizing training instances based on CPU, GPU, and memory utilization metrics?",
    options: [
      "AWS Cost Explorer",
      "AWS Compute Optimizer",
      "AWS Trusted Advisor",
      "AWS Budgets"
    ],
    correctAnswer: 1,
    explanation: "AWS Compute Optimizer analyzes resource utilization metrics (CPU, GPU, memory, disk) and provides specific rightsizing recommendations for EC2 instances, including SageMaker training instances. Trusted Advisor provides broader checks but less detailed instance-level recommendations, while Cost Explorer and Budgets are for cost analysis and alerting."
  },
  {
    id: 65,
    domain: "Domain 4: Monitoring, Maintenance, and Security",
    question: "Which approach is MOST effective for ensuring data encryption at rest for ML datasets stored in S3?",
    options: [
      "Use unencrypted S3 buckets",
      "Enable SSE-S3 or SSE-KMS encryption on S3 buckets",
      "Store data in public buckets",
      "Use S3 ACLs for encryption"
    ],
    correctAnswer: 1,
    explanation: "SSE-S3 (Amazon-managed keys) or SSE-KMS (AWS KMS keys) provides server-side encryption for data at rest in S3. SSE-KMS offers additional audit trails and key rotation. This is a fundamental security requirement for sensitive ML datasets."
  }
];

