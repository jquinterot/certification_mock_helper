import type { ExamQuestion } from '@/types';

export const questions: ExamQuestion[] = [
  // Domain 1: Data Preparation for ML (28%) - Questions 1-18
  {
    id: 1,
    domain: "Domain 1: Data Preparation for ML",
    question: "A company needs to store large volumes of structured and semi-structured ML training data. The data will be accessed frequently during training and must support columnar querying. Which storage format and service combination is MOST appropriate?",
    options: [
      "Store data as JSON files in Amazon EBS",
      "Store data as CSV files in Amazon EFS",
      "Store data as Apache Parquet files in Amazon S3",
      "Store data as Apache Avro files in Amazon DynamoDB"
    ],
    correctAnswer: 2,
    explanation: "Apache Parquet is a columnar storage format optimized for analytics and ML workloads, providing efficient compression and encoding. Amazon S3 is the ideal storage for ML data due to its scalability, durability, and integration with SageMaker and other AWS services."
  },
  {
    id: 2,
    domain: "Domain 1: Data Preparation for ML",
    question: "A data scientist needs to ingest streaming data from IoT devices into an ML pipeline for real-time feature engineering. Which AWS service should be used to collect and process the streaming data?",
    options: [
      "Amazon S3 with S3 Transfer Acceleration",
      "Amazon Kinesis Data Streams with Apache Flink",
      "Amazon EFS with provisioned throughput",
      "Amazon RDS with read replicas"
    ],
    correctAnswer: 1,
    explanation: "Amazon Kinesis Data Streams is designed for real-time data streaming, and Apache Flink (via Amazon Kinesis Data Analytics or Amazon EMR) can process the streaming data for feature engineering. This combination is ideal for real-time ML pipelines."
  },
  {
    id: 3,
    domain: "Domain 1: Data Preparation for ML",
    question: "A team needs to merge data from multiple sources (S3, RDS, and DynamoDB) for ML training. Which tool is MOST appropriate for this ETL task?",
    options: [
      "Amazon SageMaker Model Monitor",
      "AWS Glue with Apache Spark",
      "Amazon CloudWatch Logs Insights",
      "AWS Lambda with Amazon SQS"
    ],
    correctAnswer: 1,
    explanation: "AWS Glue is a serverless ETL service that can connect to multiple data sources (S3, RDS, DynamoDB) and process data using Apache Spark. It is specifically designed for data integration and transformation tasks for analytics and ML workloads."
  },
  {
    id: 4,
    domain: "Domain 1: Data Preparation for ML",
    question: "Which data format is BEST for storing image data for a computer vision ML model on Amazon S3?",
    options: [
      "CSV files with image URLs",
      "Apache Parquet files",
      "RecordIO or image files (JPEG/PNG) in S3 with manifest files",
      "Apache ORC files"
    ],
    correctAnswer: 2,
    explanation: "For computer vision models, images should be stored as individual files (JPEG/PNG) or RecordIO format in S3 with manifest files. RecordIO is a binary format that can pack multiple images efficiently, and manifest files help SageMaker locate the training data."
  },
  {
    id: 5,
    domain: "Domain 1: Data Preparation for ML",
    question: "A company needs to handle missing values in a numeric dataset before training. Which technique is MOST appropriate when the missing data is not random?",
    options: [
      "Delete all rows with missing values",
      "Replace missing values with the mean of the column",
      "Use imputation methods based on other features (e.g., k-NN imputation)",
      "Replace missing values with zeros"
    ],
    correctAnswer: 2,
    explanation: "When missing data is not random (MNAR - Missing Not At Random), simple methods like mean imputation or deletion can introduce bias. k-NN imputation or other model-based imputation methods that consider relationships between features are more appropriate."
  },
  {
    id: 6,
    domain: "Domain 1: Data Preparation for ML",
    question: "Which AWS service can be used to create and manage reusable features for ML models across multiple teams?",
    options: [
      "Amazon S3",
      "Amazon SageMaker Feature Store",
      "AWS Glue Data Catalog",
      "Amazon DynamoDB"
    ],
    correctAnswer: 1,
    explanation: "Amazon SageMaker Feature Store is a fully managed service that allows you to create, store, share, and manage features for ML models. It provides both online and offline stores and enables feature reuse across teams and models."
  },
  {
    id: 7,
    domain: "Domain 1: Data Preparation for ML",
    question: "A data engineer needs to label thousands of images for an object detection model. Which AWS service should be used?",
    options: [
      "Amazon SageMaker Data Wrangler",
      "Amazon SageMaker Ground Truth",
      "Amazon Rekognition",
      "AWS Lambda"
    ],
    correctAnswer: 1,
    explanation: "Amazon SageMaker Ground Truth is a data labeling service that helps build high-quality training datasets for ML. It provides workflows for image classification, object detection, semantic segmentation, and more, with options for automated and human labeling."
  },
  {
    id: 8,
    domain: "Domain 1: Data Preparation for ML",
    question: "Which technique should be used to encode categorical variables with a high cardinality (many unique values) for an ML model?",
    options: [
      "One-hot encoding",
      "Binary encoding",
      "Label encoding for all categorical variables",
      "Dropping the categorical column"
    ],
    correctAnswer: 1,
    explanation: "Binary encoding is efficient for high cardinality categorical variables because it represents categories in binary format, reducing dimensionality compared to one-hot encoding. One-hot encoding would create too many columns for high cardinality features."
  },
  {
    id: 9,
    domain: "Domain 1: Data Preparation for ML",
    question: "A company needs to detect and mitigate selection bias in their training dataset. Which AWS tool should they use?",
    options: [
      "Amazon SageMaker Model Monitor",
      "Amazon SageMaker Clarify",
      "AWS CloudTrail",
      "Amazon CloudWatch"
    ],
    correctAnswer: 1,
    explanation: "Amazon SageMaker Clarify provides bias detection and explainability capabilities for ML models. It can detect pre-training bias metrics such as class imbalance (CI), difference in proportions of labels (DPL), and other fairness metrics."
  },
  {
    id: 10,
    domain: "Domain 1: Data Preparation for ML",
    question: "Which data preprocessing step is MOST important to prevent data leakage when preparing data for ML?",
    options: [
      "Filling missing values with the mean",
      "Scaling features before splitting the dataset",
      "Splitting data into train/validation/test sets before any preprocessing that uses statistical properties",
      "Removing duplicate rows"
    ],
    correctAnswer: 2,
    explanation: "Data leakage occurs when information from the test set influences the training process. All preprocessing steps that compute statistics (scaling, imputation, feature selection) should be fit on the training data only, then applied to validation and test data. The split must happen first."
  },
  {
    id: 11,
    domain: "Domain 1: Data Preparation for ML",
    question: "A company needs to anonymize PII data in their training dataset while maintaining data utility for ML. Which approach is MOST appropriate?",
    options: [
      "Delete all rows containing PII",
      "Replace PII with hash values using deterministic hashing",
      "Use data masking or tokenization techniques",
      "Store PII in a separate database"
    ],
    correctAnswer: 2,
    explanation: "Data masking and tokenization techniques anonymize PII while preserving the data structure and relationships needed for ML. This maintains data utility better than deletion or simple hashing, which might not preserve the statistical properties needed for modeling."
  },
  {
    id: 12,
    domain: "Domain 1: Data Preparation for ML",
    question: "Which AWS service is BEST for visualizing and exploring data before building an ML model?",
    options: [
      "Amazon SageMaker Data Wrangler",
      "Amazon QuickSight",
      "Amazon CloudWatch",
      "AWS X-Ray"
    ],
    correctAnswer: 0,
    explanation: "Amazon SageMaker Data Wrangler provides an interactive visual interface for data exploration, feature engineering, and data preparation. It includes over 300 built-in transformations and allows you to visualize data distributions and relationships directly."
  },
  {
    id: 13,
    domain: "Domain 1: Data Preparation for ML",
    question: "A team needs to perform data cleaning on a large dataset using a visual interface without writing code. Which AWS service should they use?",
    options: [
      "Amazon SageMaker Data Wrangler",
      "AWS Glue DataBrew",
      "Amazon EMR",
      "AWS Lambda"
    ],
    correctAnswer: 1,
    explanation: "AWS Glue DataBrew is a visual data preparation tool that allows users to clean and normalize data without writing code. It provides over 250 pre-built transformations and is designed for data analysts and data scientists who prefer a visual interface."
  },
  {
    id: 14,
    domain: "Domain 1: Data Preparation for ML",
    question: "Which technique is BEST for addressing class imbalance in a binary classification dataset?",
    options: [
      "Use only the majority class for training",
      "Apply SMOTE (Synthetic Minority Over-sampling Technique) or resampling methods",
      "Increase the learning rate of the model",
      "Remove features with low correlation"
    ],
    correctAnswer: 1,
    explanation: "SMOTE and other resampling techniques (oversampling minority class, undersampling majority class) are specifically designed to address class imbalance. SMOTE creates synthetic samples of the minority class, helping the model learn better decision boundaries."
  },
  {
    id: 15,
    domain: "Domain 1: Data Preparation for ML",
    question: "A company needs to transform streaming data in real-time before feeding it to an ML model. Which AWS service combination is MOST appropriate?",
    options: [
      "Amazon S3 and AWS Batch",
      "Amazon Kinesis Data Streams and AWS Lambda",
      "Amazon RDS and AWS Glue",
      "Amazon EFS and Amazon EC2"
    ],
    correctAnswer: 1,
    explanation: "Amazon Kinesis Data Streams captures streaming data, and AWS Lambda can process and transform the data in real-time before it is consumed by the ML model. This serverless combination is ideal for real-time data transformation pipelines."
  },
  {
    id: 16,
    domain: "Domain 1: Data Preparation for ML",
    question: "Which data format provides the best compression and query performance for tabular ML data on S3?",
    options: [
      "JSON",
      "CSV",
      "Apache Parquet",
      "XML"
    ],
    correctAnswer: 2,
    explanation: "Apache Parquet is a columnar storage format that provides efficient compression and encoding schemes. It allows for selective column reading and predicate pushdown, which significantly improves query performance for analytics and ML workloads."
  },
  {
    id: 17,
    domain: "Domain 1: Data Preparation for ML",
    question: "A company needs to validate data quality rules (e.g., checking for null values, range validation) before ML training. Which AWS service should they use?",
    options: [
      "Amazon SageMaker Model Monitor",
      "AWS Glue Data Quality",
      "Amazon CloudWatch Alarms",
      "AWS Config"
    ],
    correctAnswer: 1,
    explanation: "AWS Glue Data Quality allows you to define and enforce data quality rules such as completeness, uniqueness, and range validation. It can automatically evaluate data quality and generate reports, making it ideal for pre-training data validation."
  },
  {
    id: 18,
    domain: "Domain 1: Data Preparation for ML",
    question: "When preparing text data for an NLP model, which tokenization approach is MOST appropriate for handling out-of-vocabulary words?",
    options: [
      "Word-level tokenization only",
      "Character-level tokenization only",
      "Subword tokenization (e.g., Byte Pair Encoding, WordPiece)",
      "Sentence-level tokenization only"
    ],
    correctAnswer: 2,
    explanation: "Subword tokenization methods like Byte Pair Encoding (BPE) and WordPiece break words into smaller subword units. This allows the model to handle rare and out-of-vocabulary words by decomposing them into known subwords, improving vocabulary coverage and model performance."
  },
  // Domain 2: ML Model Development (26%) - Questions 19-35
  {
    id: 19,
    domain: "Domain 2: ML Model Development",
    question: "A company needs to build a custom NLP model for text classification. They have limited training data but want to leverage pre-trained models. Which AWS service should they use?",
    options: [
      "Amazon SageMaker built-in algorithms",
      "Amazon SageMaker JumpStart with pre-trained models",
      "Amazon Rekognition",
      "Amazon Polly"
    ],
    correctAnswer: 1,
    explanation: "Amazon SageMaker JumpStart provides pre-trained models and solution templates that can be fine-tuned for specific tasks. For NLP text classification with limited data, fine-tuning a pre-trained model (like BERT) from JumpStart is the most effective approach."
  },
  {
    id: 20,
    domain: "Domain 2: ML Model Development",
    question: "Which regularization technique is MOST effective for preventing overfitting in deep neural networks?",
    options: [
      "Increasing the learning rate",
      "Dropout and weight decay (L2 regularization)",
      "Using larger batch sizes",
      "Adding more layers to the network"
    ],
    correctAnswer: 1,
    explanation: "Dropout randomly deactivates neurons during training, preventing co-adaptation of features. Weight decay (L2 regularization) penalizes large weights, encouraging simpler models. Both are effective techniques for reducing overfitting in neural networks."
  },
  {
    id: 21,
    domain: "Domain 2: ML Model Development",
    question: "A data scientist needs to perform hyperparameter tuning for a SageMaker model. Which optimization strategy is MOST efficient for exploring a large hyperparameter space?",
    options: [
      "Grid search",
      "Random search",
      "Bayesian optimization with SageMaker Automatic Model Tuning",
      "Manual tuning"
    ],
    correctAnswer: 2,
    explanation: "Bayesian optimization (used by SageMaker Automatic Model Tuning) is more efficient than grid search or random search for large hyperparameter spaces. It uses the results of previous evaluations to guide the search for optimal hyperparameters, requiring fewer training jobs to find good configurations."
  },
  {
    id: 22,
    domain: "Domain 2: ML Model Development",
    question: "Which metric is MOST appropriate for evaluating a binary classification model on an imbalanced dataset?",
    options: [
      "Accuracy",
      "F1 Score",
      "Mean Squared Error",
      "R-squared"
    ],
    correctAnswer: 1,
    explanation: "The F1 Score is the harmonic mean of precision and recall, making it suitable for imbalanced datasets. Accuracy can be misleading when classes are imbalanced (e.g., predicting the majority class always yields high accuracy). MSE and R-squared are for regression tasks."
  },
  {
    id: 23,
    domain: "Domain 2: ML Model Development",
    question: "A company needs to train a large deep learning model faster by distributing training across multiple GPUs. Which SageMaker feature should they use?",
    options: [
      "SageMaker Neo",
      "SageMaker Distributed Training with model parallelism or data parallelism",
      "SageMaker Model Monitor",
      "SageMaker Model Debugger"
    ],
    correctAnswer: 1,
    explanation: "SageMaker Distributed Training supports both data parallelism (splitting data across GPUs) and model parallelism (splitting the model across GPUs). This is essential for training large models that don't fit on a single GPU or for speeding up training through distributed computation."
  },
  {
    id: 24,
    domain: "Domain 2: ML Model Development",
    question: "Which AWS AI service should be used for real-time speech-to-text transcription?",
    options: [
      "Amazon Polly",
      "Amazon Transcribe",
      "Amazon Lex",
      "Amazon Comprehend"
    ],
    correctAnswer: 1,
    explanation: "Amazon Transcribe is an AWS AI service that converts speech to text. It supports real-time streaming transcription and batch processing, making it ideal for applications that need to convert audio to text."
  },
  {
    id: 25,
    domain: "Domain 2: ML Model Development",
    question: "A company is training a model and notices that training loss decreases while validation loss increases. What is this indicative of?",
    options: [
      "Underfitting",
      "Overfitting",
      "Normal training behavior",
      "Learning rate too low"
    ],
    correctAnswer: 1,
    explanation: "When training loss decreases but validation loss increases, the model is overfitting. It is memorizing the training data rather than learning generalizable patterns. Techniques like regularization, early stopping, or dropout can help address this."
  },
  {
    id: 26,
    domain: "Domain 2: ML Model Development",
    question: "Which technique is MOST appropriate for combining multiple models to improve prediction performance?",
    options: [
      "Using a single model with more layers",
      "Ensembling methods such as bagging, boosting, or stacking",
      "Increasing the training dataset size",
      "Reducing the learning rate"
    ],
    correctAnswer: 1,
    explanation: "Ensembling combines predictions from multiple models to improve overall performance. Bagging (e.g., Random Forest), boosting (e.g., XGBoost, AdaBoost), and stacking are proven techniques that reduce variance and bias, often producing better results than single models."
  },
  {
    id: 27,
    domain: "Domain 2: ML Model Development",
    question: "Which SageMaker built-in algorithm is BEST for image classification tasks?",
    options: [
      "Linear Learner",
      "XGBoost",
      "Image Classification (built-in with ResNet or custom CNNs)",
      "K-Means"
    ],
    correctAnswer: 2,
    explanation: "SageMaker provides a built-in Image Classification algorithm that uses ResNet or allows custom CNNs. It is specifically designed for image classification tasks and supports both full training and transfer learning from pre-trained models."
  },
  {
    id: 28,
    domain: "Domain 2: ML Model Development",
    question: "A company needs to version and manage their ML models for reproducibility and audit purposes. Which SageMaker feature should they use?",
    options: [
      "SageMaker Experiments",
      "SageMaker Model Registry",
      "SageMaker Autopilot",
      "SageMaker Canvas"
    ],
    correctAnswer: 1,
    explanation: "Amazon SageMaker Model Registry is a metadata store that allows you to catalog, version, and manage ML models. It supports model approval workflows, lineage tracking, and deployment management, making it essential for reproducibility and auditing."
  },
  {
    id: 29,
    domain: "Domain 2: ML Model Development",
    question: "Which AWS AI service should be used to detect objects in images and videos?",
    options: [
      "Amazon Polly",
      "Amazon Rekognition",
      "Amazon Translate",
      "Amazon Personalize"
    ],
    correctAnswer: 1,
    explanation: "Amazon Rekognition is a computer vision service that can identify objects, people, text, scenes, and activities in images and videos. It provides object detection, facial analysis, and content moderation capabilities."
  },
  {
    id: 30,
    domain: "Domain 2: ML Model Development",
    question: "What is the purpose of early stopping during model training?",
    options: [
      "To reduce the model size",
      "To prevent overfitting by stopping training when validation performance stops improving",
      "To increase the batch size",
      "To reduce the number of features"
    ],
    correctAnswer: 1,
    explanation: "Early stopping monitors the validation performance during training and stops when the metric stops improving (or starts degrading). This prevents overfitting by avoiding excessive training on the training data, which would cause the model to memorize rather than generalize."
  },
  {
    id: 31,
    domain: "Domain 2: ML Model Development",
    question: "Which metric is MOST appropriate for evaluating a regression model's performance?",
    options: [
      "Accuracy",
      "F1 Score",
      "Root Mean Square Error (RMSE)",
      "Precision"
    ],
    correctAnswer: 2,
    explanation: "RMSE is the standard metric for regression models. It measures the average magnitude of errors between predicted and actual values, penalizing larger errors more heavily due to the squaring operation. Accuracy, F1, and precision are classification metrics."
  },
  {
    id: 32,
    domain: "Domain 2: ML Model Development",
    question: "A company needs to reduce the size of their neural network model for deployment on resource-constrained devices. Which technique is MOST appropriate?",
    options: [
      "Increasing the number of layers",
      "Pruning (removing unnecessary weights) and quantization (reducing precision)",
      "Using a larger batch size during training",
      "Adding more training data"
    ],
    correctAnswer: 1,
    explanation: "Pruning removes unnecessary weights or neurons, and quantization reduces the precision of weights (e.g., from FP32 to INT8). Both are model compression techniques that reduce model size and inference time, making them ideal for edge deployment."
  },
  {
    id: 33,
    domain: "Domain 2: ML Model Development",
    question: "Which AWS service can be used to interpret and explain model predictions for regulatory compliance?",
    options: [
      "Amazon SageMaker Model Monitor",
      "Amazon SageMaker Clarify",
      "Amazon CloudWatch",
      "AWS CloudTrail"
    ],
    correctAnswer: 1,
    explanation: "Amazon SageMaker Clarify provides model explainability and bias detection capabilities. It can generate feature importance scores and SHAP values, which help explain model predictions for regulatory compliance and business stakeholders."
  },
  {
    id: 34,
    domain: "Domain 2: ML Model Development",
    question: "A company is using SageMaker to train a TensorFlow model. They need to debug convergence issues during training. Which tool should they use?",
    options: [
      "Amazon CloudWatch",
      "SageMaker Model Debugger",
      "AWS X-Ray",
      "Amazon QuickSight"
    ],
    correctAnswer: 1,
    explanation: "Amazon SageMaker Model Debugger captures tensors and metrics during training to help debug issues like vanishing/exploding gradients, overfitting, and convergence problems. It provides real-time monitoring and rule-based alerts for training anomalies."
  },
  {
    id: 35,
    domain: "Domain 2: ML Model Development",
    question: "Which AWS AI service is BEST for building a conversational AI interface for customer support?",
    options: [
      "Amazon Translate",
      "Amazon Lex",
      "Amazon Polly",
      "Amazon Transcribe"
    ],
    correctAnswer: 1,
    explanation: "Amazon Lex is a service for building conversational interfaces using voice and text. It provides the same deep learning technologies that power Amazon Alexa, making it ideal for building chatbots and voice-powered applications for customer support."
  },
  // Domain 3: Deployment and Orchestration (22%) - Questions 36-49
  {
    id: 36,
    domain: "Domain 3: Deployment and Orchestration",
    question: "A company needs to deploy an ML model for real-time inference with low latency requirements. Which SageMaker endpoint type is MOST appropriate?",
    options: [
      "Batch Transform",
      "Real-time endpoint with auto scaling",
      "Serverless endpoint",
      "Asynchronous endpoint"
    ],
    correctAnswer: 1,
    explanation: "Real-time endpoints with auto scaling are designed for low-latency inference requirements. They can scale based on traffic demand and provide consistent response times. Serverless endpoints are for intermittent traffic, while batch and async endpoints are for non-real-time workloads."
  },
  {
    id: 37,
    domain: "Domain 3: Deployment and Orchestration",
    question: "Which deployment strategy allows you to release a new model version to a small subset of users before full rollout?",
    options: [
      "Blue/green deployment",
      "Canary deployment",
      "A/B testing",
      "Rolling deployment"
    ],
    correctAnswer: 1,
    explanation: "Canary deployment routes a small percentage of traffic to the new model version while the majority remains on the old version. This allows you to validate the new model with minimal risk before gradually increasing traffic."
  },
  {
    id: 38,
    domain: "Domain 3: Deployment and Orchestration",
    question: "Which AWS service is BEST for orchestrating end-to-end ML workflows including data preprocessing, training, and deployment?",
    options: [
      "AWS Lambda",
      "Amazon SageMaker Pipelines",
      "Amazon SQS",
      "Amazon EventBridge"
    ],
    correctAnswer: 1,
    explanation: "Amazon SageMaker Pipelines is a native workflow orchestration service for ML on AWS. It allows you to define, automate, and execute end-to-end ML workflows including data preprocessing, model training, evaluation, and deployment steps."
  },
  {
    id: 39,
    domain: "Domain 3: Deployment and Orchestration",
    question: "A company needs to deploy multiple models on a single endpoint to optimize costs. Which SageMaker deployment option should they use?",
    options: [
      "Single-model endpoint",
      "Multi-model endpoint",
      "Serverless endpoint",
      "Asynchronous endpoint"
    ],
    correctAnswer: 1,
    explanation: "SageMaker Multi-Model Endpoints allow you to deploy multiple models behind a single endpoint, sharing the underlying compute resources. This is cost-effective when you have many models that receive intermittent traffic and don't need dedicated instances."
  },
  {
    id: 40,
    domain: "Domain 3: Deployment and Orchestration",
    question: "Which infrastructure-as-code tool allows you to define AWS resources using familiar programming languages like Python or TypeScript?",
    options: [
      "AWS CloudFormation (YAML/JSON only)",
      "AWS CDK (Cloud Development Kit)",
      "AWS Elastic Beanstalk",
      "AWS OpsWorks"
    ],
    correctAnswer: 1,
    explanation: "AWS CDK (Cloud Development Kit) allows you to define infrastructure using familiar programming languages like Python, TypeScript, Java, and C#. It provides higher-level constructs that compile down to CloudFormation templates, combining the power of programming with infrastructure-as-code."
  },
  {
    id: 41,
    domain: "Domain 3: Deployment and Orchestration",
    question: "Which deployment strategy provides two identical environments (production and staging) and switches traffic between them?",
    options: [
      "Canary deployment",
      "Blue/green deployment",
      "Rolling deployment",
      "A/B testing"
    ],
    correctAnswer: 1,
    explanation: "Blue/green deployment maintains two identical environments: blue (current production) and green (new version). Traffic is switched from blue to green once the new version is validated. This allows instant rollback and zero-downtime deployments."
  },
  {
    id: 42,
    domain: "Domain 3: Deployment and Orchestration",
    question: "A company needs to deploy an ML model on edge devices (e.g., IoT devices) with optimized inference performance. Which SageMaker feature should they use?",
    options: [
      "SageMaker Model Monitor",
      "SageMaker Neo",
      "SageMaker Autopilot",
      "SageMaker Debugger"
    ],
    correctAnswer: 1,
    explanation: "Amazon SageMaker Neo compiles ML models for specific target hardware (CPUs, GPUs, edge devices) to optimize inference performance. It supports various frameworks and hardware platforms, making it ideal for edge deployment scenarios."
  },
  {
    id: 43,
    domain: "Domain 3: Deployment and Orchestration",
    question: "Which AWS service should be used to build CI/CD pipelines for ML models?",
    options: [
      "Amazon S3",
      "AWS CodePipeline with SageMaker Pipelines",
      "Amazon CloudWatch",
      "AWS Lambda"
    ],
    correctAnswer: 1,
    explanation: "AWS CodePipeline can orchestrate the entire CI/CD process for ML models, including source control, build, test, and deployment stages. It can integrate with SageMaker Pipelines for ML-specific workflow steps, providing a complete CI/CD solution for ML."
  },
  {
    id: 44,
    domain: "Domain 3: Deployment and Orchestration",
    question: "Which container service is BEST for deploying ML models using Kubernetes on AWS?",
    options: [
      "Amazon ECS",
      "Amazon EKS (Elastic Kubernetes Service)",
      "AWS Fargate",
      "AWS Lambda"
    ],
    correctAnswer: 1,
    explanation: "Amazon EKS is a managed Kubernetes service that allows you to deploy containerized ML models using Kubernetes. It provides the flexibility of Kubernetes orchestration with the convenience of AWS managed infrastructure."
  },
  {
    id: 45,
    domain: "Domain 3: Deployment and Orchestration",
    question: "Which auto scaling metric is MOST appropriate for scaling SageMaker endpoints based on inference demand?",
    options: [
      "CPU utilization",
      "InvocationsPerInstance",
      "Network throughput",
      "Disk I/O"
    ],
    correctAnswer: 1,
    explanation: "InvocationsPerInstance is the most appropriate metric for scaling SageMaker endpoints because it directly measures the inference load per instance. This ensures scaling decisions are based on actual inference demand rather than general system metrics."
  },
  {
    id: 46,
    domain: "Domain 3: Deployment and Orchestration",
    question: "A company needs to run batch inference on a large dataset once per day. Which SageMaker deployment option is MOST cost-effective?",
    options: [
      "Real-time endpoint with auto scaling",
      "Batch Transform",
      "Serverless endpoint",
      "Multi-model endpoint"
    ],
    correctAnswer: 1,
    explanation: "SageMaker Batch Transform is designed for offline inference on large datasets. It processes data in batches and shuts down resources when complete, making it more cost-effective than maintaining a persistent endpoint for periodic batch jobs."
  },
  {
    id: 47,
    domain: "Domain 3: Deployment and Orchestration",
    question: "Which AWS service can be used to trigger automated retraining of an ML model when new data arrives in S3?",
    options: [
      "Amazon CloudWatch",
      "Amazon EventBridge with SageMaker Pipelines",
      "AWS X-Ray",
      "Amazon QuickSight"
    ],
    correctAnswer: 1,
    explanation: "Amazon EventBridge can detect events like new data arriving in S3 and trigger SageMaker Pipelines for automated retraining. This event-driven approach ensures models are retrained automatically when new data becomes available."
  },
  {
    id: 48,
    domain: "Domain 3: Deployment and Orchestration",
    question: "Which approach is BEST for versioning ML training code and ensuring reproducibility?",
    options: [
      "Storing code in Amazon S3",
      "Using Git with AWS CodeCommit or GitHub",
      "Using Amazon DynamoDB",
      "Using Amazon EFS"
    ],
    correctAnswer: 1,
    explanation: "Git (with AWS CodeCommit, GitHub, or similar) is the standard for version control. It tracks code changes, enables branching and merging, and ensures reproducibility by allowing you to checkout specific versions of training code."
  },
  {
    id: 49,
    domain: "Domain 3: Deployment and Orchestration",
    question: "A company needs to deploy an ML model using a custom container that includes specific dependencies. Which AWS service should they use to store and manage the container image?",
    options: [
      "Amazon S3",
      "Amazon ECR (Elastic Container Registry)",
      "Amazon EFS",
      "Amazon DynamoDB"
    ],
    correctAnswer: 1,
    explanation: "Amazon ECR is a fully managed container registry that stores, manages, and deploys Docker container images. It integrates with SageMaker, ECS, and EKS, making it the ideal choice for storing custom ML model containers."
  },
  // Domain 4: Monitoring, Maintenance, and Security (24%) - Questions 50-65
  {
    id: 50,
    domain: "Domain 4: Monitoring, Maintenance, and Security",
    question: "Which AWS service is BEST for monitoring data drift in production ML models?",
    options: [
      "Amazon CloudWatch",
      "Amazon SageMaker Model Monitor",
      "AWS CloudTrail",
      "Amazon QuickSight"
    ],
    correctAnswer: 1,
    explanation: "Amazon SageMaker Model Monitor continuously monitors the quality of ML models in production. It detects data drift (changes in input data distribution) and model quality drift, alerting you when model performance degrades."
  },
  {
    id: 51,
    domain: "Domain 4: Monitoring, Maintenance, and Security",
    question: "Which AWS service provides detailed logging of API calls for auditing and compliance of ML resources?",
    options: [
      "Amazon CloudWatch",
      "AWS CloudTrail",
      "AWS Config",
      "Amazon GuardDuty"
    ],
    correctAnswer: 1,
    explanation: "AWS CloudTrail records all API calls made to AWS services, including SageMaker. It provides audit logs for compliance, security analysis, and operational troubleshooting, showing who made what calls and when."
  },
  {
    id: 52,
    domain: "Domain 4: Monitoring, Maintenance, and Security",
    question: "A company needs to set up a dashboard to monitor real-time ML infrastructure performance metrics (CPU, memory, GPU utilization) across multiple SageMaker endpoints. Which AWS service is MOST appropriate?",
    options: [
      "Amazon CloudWatch Dashboards",
      "Amazon QuickSight",
      "AWS X-Ray",
      "Amazon OpenSearch Service"
    ],
    correctAnswer: 0,
    explanation: "Amazon CloudWatch Dashboards is the most appropriate service for real-time infrastructure monitoring. It can collect and display metrics like CPU utilization, memory usage, GPU utilization, and endpoint latency from SageMaker endpoints. QuickSight is better for business intelligence analytics, X-Ray is for distributed tracing, and OpenSearch is for log analysis."
  },
  {
    id: 53,
    domain: "Domain 4: Monitoring, Maintenance, and Security",
    question: "Which instance purchasing option is BEST for reducing costs for predictable, long-running ML training jobs?",
    options: [
      "On-Demand Instances",
      "Spot Instances",
      "Reserved Instances or SageMaker Savings Plans",
      "Dedicated Hosts"
    ],
    correctAnswer: 2,
    explanation: "Reserved Instances and SageMaker Savings Plans provide significant discounts (up to 64%) for predictable, long-running workloads with a commitment to use resources over a 1-3 year term. Spot Instances are better for fault-tolerant, flexible workloads."
  },
  {
    id: 54,
    domain: "Domain 4: Monitoring, Maintenance, and Security",
    question: "Which AWS service should be used to detect anomalous behavior in ML inference requests?",
    options: [
      "Amazon CloudWatch",
      "Amazon SageMaker Model Monitor",
      "AWS CloudTrail",
      "Amazon GuardDuty"
    ],
    correctAnswer: 1,
    explanation: "Amazon SageMaker Model Monitor can detect anomalies in inference data by comparing incoming data against a baseline. It identifies data quality issues, feature drift, and bias drift that could affect model performance."
  },
  {
    id: 55,
    domain: "Domain 4: Monitoring, Maintenance, and Security",
    question: "Which IAM best practice is MOST important for securing ML resources on AWS?",
    options: [
      "Use the root account for all ML operations",
      "Apply the principle of least privilege",
      "Share IAM credentials among team members",
      "Use only IAM users, not roles"
    ],
    correctAnswer: 1,
    explanation: "The principle of least privilege ensures that users and applications have only the minimum permissions necessary to perform their tasks. This reduces the attack surface and limits the potential damage from compromised credentials."
  },
  {
    id: 56,
    domain: "Domain 4: Monitoring, Maintenance, and Security",
    question: "A company needs to optimize their SageMaker endpoint instance types to reduce costs while maintaining inference performance. They want a service that specifically runs load tests against their model to recommend the optimal instance type. Which AWS service should they use?",
    options: [
      "AWS Cost Explorer",
      "SageMaker Inference Recommender",
      "AWS Compute Optimizer",
      "AWS Trusted Advisor"
    ],
    correctAnswer: 1,
    explanation: "SageMaker Inference Recommender is specifically designed for SageMaker endpoints and runs load tests against your model to recommend optimal instance types. It tests different instance families and sizes to find the best balance of performance and cost. AWS Compute Optimizer provides broader recommendations for EC2 instances but doesn't specifically test ML inference workloads."
  },
  {
    id: 57,
    domain: "Domain 4: Monitoring, Maintenance, and Security",
    question: "Which technique is BEST for securing ML model artifacts stored in Amazon S3?",
    options: [
      "Use S3 bucket policies and IAM roles with least privilege",
      "Make the bucket public for easy access",
      "Store artifacts in unencrypted format",
      "Use only S3 ACLs for access control"
    ],
    correctAnswer: 0,
    explanation: "S3 bucket policies and IAM roles with least privilege provide granular access control to ML artifacts. Encryption (SSE-S3, SSE-KMS, or SSE-C) should also be enabled. Public access should be blocked, and ACLs alone are insufficient for comprehensive security."
  },
  {
    id: 58,
    domain: "Domain 4: Monitoring, Maintenance, and Security",
    question: "Which AWS service is BEST for setting up budget alerts to monitor ML infrastructure costs?",
    options: [
      "AWS Cost Explorer",
      "AWS Budgets",
      "AWS Trusted Advisor",
      "AWS Billing and Cost Management"
    ],
    correctAnswer: 1,
    explanation: "AWS Budgets allows you to set custom cost and usage budgets with alerts when thresholds are exceeded. It can send notifications via email or SNS, making it ideal for proactive cost monitoring of ML workloads."
  },
  {
    id: 59,
    domain: "Domain 4: Monitoring, Maintenance, and Security",
    question: "Which approach is MOST effective for isolating ML resources in a secure network environment on AWS?",
    options: [
      "Use public subnets for all resources",
      "Deploy resources in a VPC with private subnets, security groups, and network ACLs",
      "Use only security groups without a VPC",
      "Disable all network access"
    ],
    correctAnswer: 1,
    explanation: "Deploying ML resources in a VPC with private subnets isolates them from the public internet. Security groups act as virtual firewalls, and network ACLs provide additional subnet-level security. This multi-layered approach is the AWS best practice for network security."
  },
  {
    id: 60,
    domain: "Domain 4: Monitoring, Maintenance, and Security",
    question: "Which AWS service can be used to trace and analyze latency issues in distributed ML inference endpoints?",
    options: [
      "Amazon CloudWatch",
      "AWS X-Ray",
      "AWS CloudTrail",
      "Amazon GuardDuty"
    ],
    correctAnswer: 1,
    explanation: "AWS X-Ray provides distributed tracing capabilities that help analyze and debug latency issues in distributed applications, including ML inference endpoints. It traces requests as they travel through services and identifies performance bottlenecks."
  },
  {
    id: 61,
    domain: "Domain 4: Monitoring, Maintenance, and Security",
    question: "Which tagging strategy is MOST effective for tracking ML infrastructure costs across different projects?",
    options: [
      "Use random tags for all resources",
      "Implement consistent tagging with project, environment, and team labels",
      "Avoid tagging to prevent overhead",
      "Use only AWS-generated tags"
    ],
    correctAnswer: 1,
    explanation: "Consistent tagging with project, environment, and team labels enables accurate cost allocation and tracking. Tags can be used in AWS Cost Explorer and Billing to filter and analyze costs by project, team, or environment."
  },
  {
    id: 62,
    domain: "Domain 4: Monitoring, Maintenance, and Security",
    question: "Which AWS service can monitor and alert on SageMaker endpoint invocation errors in real-time?",
    options: [
      "AWS CloudTrail",
      "Amazon CloudWatch Alarms",
      "AWS Config",
      "Amazon Macie"
    ],
    correctAnswer: 1,
    explanation: "Amazon CloudWatch Alarms can monitor metrics like InvocationErrors, ModelLatency, and OverheadLatency for SageMaker endpoints. It can trigger alerts via SNS when thresholds are breached, enabling real-time monitoring of endpoint health."
  },
  {
    id: 63,
    domain: "Domain 4: Monitoring, Maintenance, and Security",
    question: "Which security feature in SageMaker helps manage fine-grained access control for ML resources?",
    options: [
      "SageMaker Role Manager",
      "SageMaker Model Registry",
      "SageMaker Model Monitor",
      "SageMaker Autopilot"
    ],
    correctAnswer: 0,
    explanation: "SageMaker Role Manager helps create and manage IAM roles with fine-grained permissions for SageMaker users. It simplifies the process of applying least privilege access by providing pre-built permission policies for common ML personas."
  },
  {
    id: 64,
    domain: "Domain 4: Monitoring, Maintenance, and Security",
    question: "A company wants to identify underutilized EC2 instances used for ML training and receive specific recommendations for instance rightsizing (e.g., switching from a larger instance to a smaller one). Which AWS service is MOST appropriate?",
    options: [
      "AWS Cost Explorer",
      "AWS Compute Optimizer",
      "AWS Trusted Advisor",
      "AWS Budgets"
    ],
    correctAnswer: 1,
    explanation: "AWS Compute Optimizer provides specific recommendations for instance rightsizing based on utilization metrics. It analyzes CPU, memory, disk, and network utilization to recommend optimal instance types. While AWS Trusted Advisor and Cost Explorer can identify underutilized resources, Compute Optimizer provides the most detailed, actionable rightsizing recommendations with projected cost savings."
  },
  {
    id: 65,
    domain: "Domain 4: Monitoring, Maintenance, and Security",
    question: "A company needs to ensure that their ML data processing complies with data residency requirements. Which AWS feature should they use?",
    options: [
      "AWS Global Accelerator",
      "AWS Regions and data storage location controls",
      "Amazon CloudFront",
      "AWS Transit Gateway"
    ],
    correctAnswer: 1,
    explanation: "AWS Regions allow you to control where data is stored and processed. By selecting specific regions and using services like S3 with region constraints, you can ensure data residency compliance. This is critical for meeting regulatory requirements in different jurisdictions."
  }
];

