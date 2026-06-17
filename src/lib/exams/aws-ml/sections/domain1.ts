import type { ExamQuestion } from '@/types';

export const questions: ExamQuestion[] = [
  // Test Set 1: Questions 1-15
  {
    id: 1,
    domain: "Domain 1: Data Preparation for ML",
    question: "An ML engineer needs to prepare training data from multiple on-premises sources for a computer vision model. The raw images and labels must be transferred to S3 with automatic schema validation for the label metadata. Which AWS service combination is MOST appropriate?",
    options: [
      "AWS Database Migration Service",
      "AWS DataSync with AWS Glue crawlers",
      "Amazon Kinesis Data Streams",
      "AWS Direct Connect only"
    ],
    correctAnswer: 1,
    explanation: "AWS DataSync is designed for online data transfer from on-premises to AWS storage services (including S3). Combined with AWS Glue crawlers, it can automatically detect schema and partition structure as data lands in the data lake, making it ideal for large-scale ML data ingestion."
  },
  {
    id: 2,
    domain: "Domain 1: Data Preparation for ML",
    question: "An ML engineer needs to build a feature engineering pipeline that joins multiple data sources, handles missing values, and scales numerical features before training. Which AWS Glue feature allows them to visually design this workflow without writing Apache Spark code?",
    options: [
      "AWS Glue Data Catalog",
      "AWS Glue Studio Visual ETL",
      "AWS Glue DataBrew",
      "AWS Glue Schema Registry"
    ],
    correctAnswer: 1,
    explanation: "AWS Glue Studio provides a visual ETL interface where you can design workflows by connecting nodes (sources, transforms, targets) in a graph. It generates the underlying Apache Spark code automatically, making it accessible to users who prefer visual design over writing code."
  },
  {
    id: 3,
    domain: "Domain 1: Data Preparation for ML",
    question: "A team needs to standardize the scale of numerical features across a dataset containing both age (0-100) and income (0-1,000,000). Which technique should they apply?",
    options: [
      "Min-Max scaling to [0, 1] range",
      "Standard scaling (Z-score normalization to mean=0, std=1)",
      "Decimal scaling",
      "Unit vector scaling"
    ],
    correctAnswer: 1,
    explanation: "Standard scaling (Z-score normalization) transforms features to have mean=0 and standard deviation=1. This is appropriate when features have vastly different scales (age vs. income) and when the algorithm is sensitive to feature scales, such as gradient descent-based methods, SVMs, and neural networks."
  },
  {
    id: 4,
    domain: "Domain 1: Data Preparation for ML",
    question: "An ML engineer needs to run a large-scale feature engineering job on Spark that processes 10TB of clickstream data. The job should run on demand and automatically shut down after completion to minimize costs. Which Amazon EMR feature is MOST appropriate?",
    options: [
      "EMR Serverless",
      "EMR on EC2 with auto-termination",
      "EMR Studio",
      "Both A and B"
    ],
    correctAnswer: 3,
    explanation: "Both EMR Serverless and EMR on EC2 with auto-termination support ephemeral clusters. EMR Serverless automatically provisions and scales resources for applications without managing clusters. EMR on EC2 can be configured with auto-termination to shut down after job completion. Both optimize costs for feature engineering workloads."
  },
  {
    id: 5,
    domain: "Domain 1: Data Preparation for ML",
    question: "A company needs to validate that a numerical feature 'age' contains only values between 0 and 120 before training. Which AWS Glue Data Quality rule type is MOST appropriate?",
    options: [
      "ColumnValues > 0",
      "ColumnValues between 0 and 120",
      "ColumnCount > 1000",
      "ColumnExists 'age'"
    ],
    correctAnswer: 1,
    explanation: "AWS Glue Data Quality supports rules like 'ColumnValues between X and Y' for range validation. This directly checks that all values in the 'age' column fall within the expected range, which is the most appropriate rule for this validation requirement."
  },
  {
    id: 6,
    domain: "Domain 1: Data Preparation for ML",
    question: "Which data format is MOST suitable for storing sparse feature vectors for ML training on Amazon S3, providing efficient storage and fast reading?",
    options: [
      "Dense CSV files",
      "LibSVM or COO sparse format",
      "JSON with null values",
      "Plain text files"
    ],
    correctAnswer: 1,
    explanation: "LibSVM and COO (Coordinate Format) are sparse formats that only store non-zero values. For sparse feature vectors (common in NLP and recommendation systems), these formats significantly reduce storage size and improve I/O performance compared to dense formats like CSV or JSON."
  },
  {
    id: 7,
    domain: "Domain 1: Data Preparation for ML",
    question: "A team needs to profile a dataset to understand data distributions, correlations, and missing value patterns before building a model. Which SageMaker Data Wrangler feature should they use?",
    options: [
      "Data Wrangler Flows",
      "Data Wrangler Analysis and Data Quality Report",
      "Data Wrangler Export to Pipelines",
      "Data Wrangler Import from Athena"
    ],
    correctAnswer: 1,
    explanation: "SageMaker Data Wrangler's Analysis and Data Quality Report feature provides automated profiling including histograms, correlations, missing value statistics, and data quality insights. This helps data scientists understand the data before building models."
  },
  {
    id: 8,
    domain: "Domain 1: Data Preparation for ML",
    question: "Which technique is MOST appropriate for handling missing values in a time-series dataset where values are missing at random?",
    options: [
      "Forward fill (last observation carried forward)",
      "Mean imputation across all timestamps",
      "Linear interpolation based on neighboring timestamps",
      "Delete the entire time series"
    ],
    correctAnswer: 2,
    explanation: "Linear interpolation estimates missing values based on neighboring timestamps, which is appropriate for time-series data where temporal relationships matter. Forward fill can introduce bias if gaps are large, and mean imputation ignores temporal structure. Deletion loses valuable data."
  },
  {
    id: 9,
    domain: "Domain 1: Data Preparation for ML",
    question: "A company needs to encode a categorical variable 'product_category' with 5,000 unique values. One-hot encoding would create too many columns. Which technique is MOST appropriate?",
    options: [
      "Target encoding (mean encoding)",
      "Hash encoding (feature hashing)",
      "Label encoding without ordering",
      "Frequency encoding only"
    ],
    correctAnswer: 1,
    explanation: "Hash encoding (feature hashing) maps high-cardinality categorical variables to a lower-dimensional space using a hash function. It controls the output dimensionality regardless of the number of unique values, making it ideal for very high cardinality features like 5,000 unique categories."
  },
  {
    id: 10,
    domain: "Domain 1: Data Preparation for ML",
    question: "An ML team needs to standardize preprocessing steps (handling missing values, outliers, and scaling) across multiple training datasets for different model versions. Which AWS Glue DataBrew feature allows them to create reusable preprocessing workflows?",
    options: [
      "DataBrew Projects",
      "DataBrew Recipes",
      "DataBrew Jobs",
      "DataBrew Datasets"
    ],
    correctAnswer: 1,
    explanation: "AWS Glue DataBrew Recipes are collections of data cleaning and normalization steps that can be saved and reused across multiple datasets. They provide version control and can be shared across teams, ensuring consistent data preparation across projects."
  },
  {
    id: 11,
    domain: "Domain 1: Data Preparation for ML",
    question: "An ML engineer is building a pipeline that ingests streaming feature data from Kafka. They need to detect schema changes in the incoming data to prevent training failures due to unexpected column additions. Which AWS service should they use?",
    options: [
      "AWS Glue Schema Registry",
      "Amazon API Gateway",
      "AWS Config Rules",
      "Amazon CloudWatch"
    ],
    correctAnswer: 0,
    explanation: "AWS Glue Schema Registry allows you to register and validate schemas for data streams (Kafka, Kinesis, MQTT). It can detect schema changes and enforce schema evolution rules, ensuring that incoming ML data conforms to the expected structure."
  },
  {
    id: 12,
    domain: "Domain 1: Data Preparation for ML",
    question: "Which data preprocessing technique is MOST important when preparing text data for a bag-of-words model?",
    options: [
      "Tokenization, stop word removal, and stemming/lemmatization",
      "Image resizing and normalization",
      "One-hot encoding of characters",
      "Z-score normalization of word frequencies"
    ],
    correctAnswer: 0,
    explanation: "For bag-of-words text models, standard NLP preprocessing includes tokenization (splitting text into words), stop word removal (eliminating common words like 'the', 'a'), and stemming/lemmatization (reducing words to their root form). These steps reduce dimensionality and improve model performance."
  },
  {
    id: 13,
    domain: "Domain 1: Data Preparation for ML",
    question: "An ML engineer needs to create a flat training dataset by joining a fact table with multiple dimension tables (customer, product, time). The resulting dataset will be used to train a gradient boosting model. Which AWS service is MOST appropriate?",
    options: [
      "Amazon Redshift with UNLOAD to S3",
      "AWS Glue ETL with join transformations",
      "Amazon DynamoDB with single-table design",
      "Amazon S3 Select"
    ],
    correctAnswer: 1,
    explanation: "AWS Glue ETL supports join transformations to denormalize star schemas by combining fact and dimension tables. This creates a flat dataset suitable for ML training. While Redshift can also perform joins, Glue ETL is purpose-built for data preparation and can write directly to S3 in ML-friendly formats."
  },
  {
    id: 14,
    domain: "Domain 1: Data Preparation for ML",
    question: "Which technique is BEST for creating a feature that captures the recency of a customer's last purchase for a churn prediction model?",
    options: [
      "One-hot encoding of purchase month",
      "Days since last purchase (numerical feature)",
      "Label encoding of purchase day",
      "Hash encoding of customer ID"
    ],
    correctAnswer: 1,
    explanation: "Days since last purchase is a numerical feature that directly captures recency. It provides a continuous, interpretable measure that models can learn from. One-hot encoding of month loses the temporal relationship, while label encoding implies a false ordinal relationship."
  },
  {
    id: 15,
    domain: "Domain 1: Data Preparation for ML",
    question: "Which approach is MOST appropriate for handling categorical variables in a dataset where the categories have a natural ordering (e.g., 'low', 'medium', 'high')?",
    options: [
      "One-hot encoding to preserve all categories",
      "Ordinal encoding that maps to integer values preserving order",
      "Binary encoding for dimensionality reduction",
      "Hash encoding for high cardinality"
    ],
    correctAnswer: 1,
    explanation: "Ordinal encoding maps ordered categories to integer values that preserve the natural ordering (e.g., low=1, medium=2, high=3). This maintains the ordinal relationship, which is important for algorithms that can leverage ordering information. One-hot encoding would lose the ordinal relationship."
  }
];

export const questions2: ExamQuestion[] = [
  // Test Set 2: Questions 16-30
  {
    id: 1,
    domain: "Domain 1: Data Preparation for ML",
    question: "A team needs to ingest real-time clickstream data from a website for a real-time recommendation model. Which AWS service is the BEST entry point for this data ingestion?",
    options: [
      "Amazon S3 with batch uploads",
      "Amazon Kinesis Data Streams",
      "AWS Snowball Edge",
      "Amazon RDS with binary logging"
    ],
    correctAnswer: 1,
    explanation: "Amazon Kinesis Data Streams is designed for real-time data streaming at scale. It can capture clickstream data with low latency, making it the ideal entry point for real-time ML pipelines. Each click event can be consumed immediately for feature computation and model inference."
  },
  {
    id: 2,
    domain: "Domain 1: Data Preparation for ML",
    question: "An ML engineer is working with multiple data sources (S3, RDS, DynamoDB) for a model and needs a unified view of all schemas and table structures. Which AWS Glue feature automatically discovers and catalogs this metadata?",
    options: [
      "AWS Glue Data Catalog",
      "AWS Glue DataBrew",
      "AWS Glue Studio",
      "AWS Glue Schema Registry"
    ],
    correctAnswer: 0,
    explanation: "AWS Glue Data Catalog is a central metadata repository that stores table definitions, schemas, and partition information. Crawlers automatically scan data sources and populate the catalog, creating a unified view that enables data discovery and preparation for ML workloads."
  },
  {
    id: 3,
    domain: "Domain 1: Data Preparation for ML",
    question: "A company needs to normalize image pixel values from [0, 255] to [0, 1] for a deep learning computer vision model. Which preprocessing step is correct?",
    options: [
      "Divide each pixel value by 255",
      "Subtract the mean pixel value and divide by standard deviation",
      "Apply Z-score normalization per image",
      "Convert images to grayscale"
    ],
    correctAnswer: 0,
    explanation: "Dividing pixel values by 255 scales the range from [0, 255] to [0, 1]. This is standard preprocessing for computer vision models using activation functions like sigmoid or when the expected input range is [0, 1]. Per-image normalization (option C) is less common for CNNs trained on large datasets."
  },
  {
    id: 4,
    domain: "Domain 1: Data Preparation for ML",
    question: "An ML engineer needs to explore a 50TB dataset in S3 to understand feature distributions and correlations before feature selection. They prefer using SQL for this exploration. Which Amazon EMR component is MOST appropriate?",
    options: [
      "Apache Spark MLlib",
      "Apache Hive or Presto (Trino)",
      "Apache HBase",
      "Apache Flink"
    ],
    correctAnswer: 1,
    explanation: "Apache Hive and Presto (Trino) on EMR provide interactive SQL query capabilities over large datasets in S3. They are ideal for data exploration, filtering, and aggregation before ML training, allowing data scientists to examine data using familiar SQL syntax."
  },
  {
    id: 5,
    domain: "Domain 1: Data Preparation for ML",
    question: "An ML engineer is preparing a customer dataset for a churn prediction model and needs to validate that the 'email' column contains properly formatted email addresses before training. Which AWS Glue DataBrew transformation is MOST appropriate?",
    options: [
      "Remove duplicates",
      "Validate pattern with regex",
      "Impute missing values",
      "Scale to mean and standard deviation"
    ],
    correctAnswer: 1,
    explanation: "AWS Glue DataBrew provides a 'Validate pattern' transformation that uses regex to check if values match expected patterns. For email validation, you can apply a regex pattern to identify invalid email formats and flag or remove those rows."
  },
  {
    id: 6,
    domain: "Domain 1: Data Preparation for ML",
    question: "Which data format is BEST for efficient columnar querying and compression of a large tabular dataset with hundreds of columns for ML feature selection?",
    options: [
      "CSV",
      "Apache Parquet",
      "JSON Lines",
      "Apache Avro"
    ],
    correctAnswer: 1,
    explanation: "Apache Parquet is a columnar format that provides efficient compression and allows reading only the columns needed for feature selection. This significantly reduces I/O compared to row-based formats like CSV or JSON, especially when working with datasets with many columns."
  },
  {
    id: 7,
    domain: "Domain 1: Data Preparation for ML",
    question: "A data scientist needs to engineer a feature that captures the interaction between 'temperature' and 'humidity' for a weather prediction model. Which technique is MOST appropriate?",
    options: [
      "Create a new feature: temperature * humidity",
      "One-hot encode both variables separately",
      "Standardize both variables independently",
      "Remove one variable to avoid correlation"
    ],
    correctAnswer: 0,
    explanation: "Feature interaction captures the combined effect of two variables. Creating a new feature as the product (or another combination) of temperature and humidity allows the model to learn from their interaction, which may be more predictive than either variable alone."
  },
  {
    id: 8,
    domain: "Domain 1: Data Preparation for ML",
    question: "Which approach is MOST appropriate for handling missing values in a dataset where 60% of rows have at least one missing value?",
    options: [
      "Delete all rows with missing values",
      "Multiple imputation using MICE or similar techniques",
      "Replace all missing values with zeros",
      "Drop all columns with missing values"
    ],
    correctAnswer: 1,
    explanation: "Deleting 60% of rows would lose too much data. Multiple imputation techniques like MICE (Multiple Imputation by Chained Equations) model missing values based on relationships with other features, preserving data volume and statistical properties better than simple deletion or zero-filling."
  },
  {
    id: 9,
    domain: "Domain 1: Data Preparation for ML",
    question: "Which categorical encoding technique is MOST appropriate when the cardinality is moderate (around 50 unique values) and you need to preserve interpretability?",
    options: [
      "One-hot encoding",
      "Target encoding",
      "Hash encoding",
      "Embeddings from a neural network"
    ],
    correctAnswer: 0,
    explanation: "One-hot encoding creates binary columns for each category, preserving interpretability since each column clearly represents one category. With around 50 unique values, the resulting 50 additional columns are manageable. Target encoding and embeddings are less interpretable, while hash encoding intentionally loses interpretability."
  },
  {
    id: 10,
    domain: "Domain 1: Data Preparation for ML",
    question: "A company needs to perform outlier detection on a numerical dataset before training. Which statistical method is MOST robust for datasets with skewed distributions?",
    options: [
      "Mean ± 3 standard deviations",
      "Interquartile Range (IQR) method: Q1 - 1.5*IQR and Q3 + 1.5*IQR",
      "Z-score with threshold of 2",
      "Median absolute deviation (MAD)"
    ],
    correctAnswer: 3,
    explanation: "Median Absolute Deviation (MAD) is the most robust outlier detection method for skewed distributions because it uses the median rather than the mean. The median is resistant to outliers, making MAD more reliable than mean-based methods (Z-score, standard deviations) when distributions are skewed."
  },
  {
    id: 11,
    domain: "Domain 1: Data Preparation for ML",
    question: "An ML engineer is building a real-time inference pipeline that receives JSON payloads from API Gateway. They need to validate that each payload contains the expected features and correct data types before passing to the model. Which AWS service can enforce this validation?",
    options: [
      "AWS Glue Data Catalog with crawlers",
      "Amazon EventBridge with input validation",
      "AWS Glue Schema Registry with JSON Schema validation",
      "Amazon CloudWatch Logs"
    ],
    correctAnswer: 2,
    explanation: "AWS Glue Schema Registry supports JSON Schema validation and can enforce schemas on data streams. It can validate incoming JSON records against registered schemas, detect schema changes, and reject invalid records, ensuring data quality for ML pipelines."
  },
  {
    id: 12,
    domain: "Domain 1: Data Preparation for ML",
    question: "A team needs to create a feature that represents the rolling average of sales over the last 7 days for each product. Which transformation type is this?",
    options: [
      "Aggregate feature engineering",
      "Window feature engineering",
      "Cross-column feature engineering",
      "Dimensionality reduction"
    ],
    correctAnswer: 1,
    explanation: "A rolling average over a time window is a window feature engineering technique. It computes statistics (mean, sum, std) over a sliding window of recent observations. This is commonly used in time-series and transactional data to capture recent trends."
  },
  {
    id: 13,
    domain: "Domain 1: Data Preparation for ML",
    question: "Which data quality metric is MOST important to check before training a binary classification model?",
    options: [
      "Mean of the target variable",
      "Class balance ratio (positive vs. negative samples)",
      "Standard deviation of all features",
      "Number of decimal places in numerical features"
    ],
    correctAnswer: 1,
    explanation: "Class balance is critical for binary classification. If one class is severely underrepresented, the model may learn to always predict the majority class. Checking the class balance ratio helps determine if resampling techniques (SMOTE, undersampling) or class weights are needed."
  },
  {
    id: 14,
    domain: "Domain 1: Data Preparation for ML",
    question: "A company needs to convert a set of categorical features into embeddings using a neural network before feeding them into a gradient boosting model. Which approach is MOST appropriate?",
    options: [
      "Use one-hot encoding for all features",
      "Train an autoencoder to learn dense representations",
      "Apply label encoding and then use PCA",
      "Hash encode all features with 10 dimensions"
    ],
    correctAnswer: 1,
    explanation: "An autoencoder is a neural network that learns compressed, dense representations (embeddings) of input data. Training an autoencoder on categorical features can learn meaningful embeddings that capture relationships between categories, which can then be used as features for a gradient boosting model."
  },
  {
    id: 15,
    domain: "Domain 1: Data Preparation for ML",
    question: "Which approach is BEST for splitting a dataset with temporal structure to prevent data leakage when training a time-series forecasting model?",
    options: [
      "Random train/test split",
      "Stratified split based on season",
      "Walk-forward validation with expanding training window",
      "K-fold cross-validation with random folds"
    ],
    correctAnswer: 2,
    explanation: "Walk-forward validation with an expanding training window is the standard approach for time-series data. It uses only past data to predict future data, preventing data leakage. Random splits or k-fold cross-validation would leak future information into the training set, producing unrealistic performance estimates."
  },
  {
    id: 16,
    domain: "Domain 1: Data Preparation for ML",
    question: "A team needs to share features across multiple ML models in real-time and batch pipelines while maintaining consistency and versioning. Which AWS service should they use to store and retrieve features?",
    options: [
      "Amazon DynamoDB with custom versioning",
      "Amazon SageMaker Feature Store",
      "Amazon RDS with feature tables",
      "Amazon S3 with partitioned Parquet files"
    ],
    correctAnswer: 1,
    explanation: "Amazon SageMaker Feature Store is purpose-built for storing, sharing, and versioning ML features across teams and models. It provides an online store for real-time inference and an offline store for batch training, ensuring feature consistency between training and serving. DynamoDB, RDS, and S3 are general-purpose storage services that lack built-in feature management capabilities."
  },
  {
    id: 17,
    domain: "Domain 1: Data Preparation for ML",
    question: "An ML team needs to run a one-time data preprocessing job that joins multiple datasets, handles missing values, and generates a cleaned dataset for training. They want to use a managed compute environment without provisioning EC2 instances. Which AWS service should they use?",
    options: [
      "Amazon SageMaker Processing Jobs with managed compute",
      "AWS Glue Studio Visual ETL",
      "Amazon EMR Serverless",
      "AWS Lambda with 15-minute timeout"
    ],
    correctAnswer: 0,
    explanation: "Amazon SageMaker Processing Jobs provide a managed compute environment specifically for ML data preprocessing. You can run custom scripts (Python, PySpark) on managed compute without provisioning instances. SageMaker handles the infrastructure, scaling, and logging. While Glue Studio and EMR Serverless are also managed, SageMaker Processing Jobs are designed specifically for ML workflows and integrate seamlessly with training pipelines."
  }
];
