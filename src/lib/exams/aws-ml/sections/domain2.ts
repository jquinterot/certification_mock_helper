import type { ExamQuestion } from '@/types';

export const questions: ExamQuestion[] = [
  // Test Set 1: Questions 1-15
  {
    id: 1,
    domain: "Domain 2: ML Model Development",
    question: "A data scientist is selecting an algorithm for a binary classification problem with a highly imbalanced dataset (1:100 ratio). Which algorithm and technique combination is MOST appropriate?",
    options: [
      "Linear regression with L2 regularization",
      "XGBoost with scale_pos_weight parameter and stratified sampling",
      "K-Means clustering with k=2",
      "Random Forest without any class balancing"
    ],
    correctAnswer: 1,
    explanation: "XGBoost is a powerful gradient boosting algorithm that handles imbalanced data well through the scale_pos_weight parameter, which balances the gradient of positive and negative samples. Stratified sampling ensures that train/test splits maintain the class distribution, preventing further imbalance issues."
  },
  {
    id: 2,
    domain: "Domain 2: ML Model Development",
    question: "Which SageMaker training job configuration is MOST appropriate for distributing a large computer vision model across multiple GPUs using data parallelism?",
    options: [
      "Use a single ml.p3.2xlarge instance",
      "Use SageMaker Distributed Data Parallel (SDP) with multiple ml.p3.8xlarge instances",
      "Use Spot Training on a single instance",
      "Use SageMaker Neo for compilation"
    ],
    correctAnswer: 1,
    explanation: "SageMaker Distributed Data Parallel (SDP) is optimized for distributing training across multiple GPUs and instances. It implements optimized AllReduce communication, making it more efficient than standard PyTorch DDP for large-scale training. Multiple ml.p3.8xlarge instances provide the necessary GPU resources for distributed data parallelism."
  },
  {
    id: 3,
    domain: "Domain 2: ML Model Development",
    question: "A model is underfitting the training data. Which technique is MOST likely to reduce underfitting?",
    options: [
      "Increase regularization strength",
      "Increase model complexity or add more relevant features",
      "Reduce training data size",
      "Apply early stopping immediately"
    ],
    correctAnswer: 1,
    explanation: "Underfitting occurs when the model is too simple to capture the patterns in the data. Increasing model complexity (adding layers, increasing tree depth, adding polynomial features) or adding more relevant features gives the model more capacity to learn the underlying patterns."
  },
  {
    id: 4,
    domain: "Domain 2: ML Model Development",
    question: "Which cross-validation technique is MOST appropriate for a dataset with a small number of samples (n=500) and high variance?",
    options: [
      "Hold-out validation with 80/20 split",
      "5-fold cross-validation",
      "Leave-One-Out Cross-Validation (LOOCV)",
      "Time-series split"
    ],
    correctAnswer: 2,
    explanation: "With only 500 samples, hold-out validation would leave too few samples for reliable evaluation. LOOCV trains on n-1 samples and tests on 1 sample, repeating n times. While computationally expensive, it maximizes the training data for each fold and provides the most reliable performance estimate for small datasets."
  },
  {
    id: 5,
    domain: "Domain 2: ML Model Development",
    question: "A company is training a neural network for image classification and wants to prevent overfitting without increasing training data. Which regularization combination is MOST effective?",
    options: [
      "Dropout + L2 weight decay + Data augmentation",
      "Only batch normalization",
      "Increase learning rate + Reduce batch size",
      "Add more fully connected layers"
    ],
    correctAnswer: 0,
    explanation: "Dropout randomly deactivates neurons during training, L2 weight decay penalizes large weights, and data augmentation creates synthetic training samples. Together, these three techniques provide a comprehensive defense against overfitting by reducing model co-adaptation, penalizing complexity, and increasing data diversity."
  },
  {
    id: 6,
    domain: "Domain 2: ML Model Development",
    question: "Which SageMaker Automatic Model Tuning strategy is MOST efficient when tuning 10 hyperparameters with a budget of 50 training jobs?",
    options: [
      "Grid search",
      "Random search",
      "Bayesian optimization",
      "Manual tuning"
    ],
    correctAnswer: 2,
    explanation: "Bayesian optimization uses a probabilistic model to guide the search, requiring fewer evaluations than grid or random search. With 10 hyperparameters and a budget of 50 jobs, Bayesian optimization will explore the space more efficiently by learning from previous trials and focusing on promising regions."
  },
  {
    id: 7,
    domain: "Domain 2: ML Model Development",
    question: "Which evaluation metric is MOST appropriate for a regression model predicting housing prices where some outliers represent luxury mansions?",
    options: [
      "Mean Absolute Error (MAE)",
      "Root Mean Squared Error (RMSE)",
      "Mean Squared Logarithmic Error (MSLE)",
      "R-squared only"
    ],
    correctAnswer: 0,
    explanation: "MAE is robust to outliers because it uses absolute differences rather than squared differences. For housing price prediction where luxury mansions are outliers, RMSE would disproportionately penalize errors on these expensive properties. MAE provides a more balanced evaluation across all price ranges."
  },
  {
    id: 8,
    domain: "Domain 2: ML Model Development",
    question: "Which deep learning architecture is BEST for a sequence-to-sequence NLP task like machine translation?",
    options: [
      "Convolutional Neural Network (CNN)",
      "Recurrent Neural Network (RNN) with LSTM/GRU or Transformer",
      "Fully Connected Feedforward Network",
      "Autoencoder"
    ],
    correctAnswer: 1,
    explanation: "Sequence-to-sequence tasks require models that can capture temporal dependencies and contextual relationships across the entire sequence. RNNs with LSTM/GRU or Transformer architectures (which use self-attention) are designed for sequence modeling. Transformers have become the standard for machine translation due to their ability to model long-range dependencies."
  },
  {
    id: 9,
    domain: "Domain 2: ML Model Development",
    question: "A company needs to fine-tune a BERT model for sentiment analysis with only 1,000 labeled examples. Which transfer learning approach is MOST appropriate?",
    options: [
      "Train BERT from scratch on the 1,000 examples",
      "Use pre-trained BERT weights and fine-tune the last few layers with a small learning rate",
      "Use pre-trained BERT weights and only train a new classification head",
      "Use a random initialization for all layers"
    ],
    correctAnswer: 1,
    explanation: "With only 1,000 examples, training from scratch would overfit. Fine-tuning the last few layers of a pre-trained BERT model with a small learning rate allows the model to adapt its pre-trained representations to the specific domain while preserving general language understanding. Training only the classification head (option C) may not adapt representations enough."
  },
  {
    id: 10,
    domain: "Domain 2: ML Model Development",
    question: "Which ensemble technique trains multiple models on different subsets of the training data and aggregates their predictions?",
    options: [
      "Boosting (e.g., AdaBoost, Gradient Boosting)",
      "Bagging (e.g., Random Forest)",
      "Stacking",
      "Blending"
    ],
    correctAnswer: 1,
    explanation: "Bagging (Bootstrap Aggregating) trains multiple models on different random subsets of the training data (created by sampling with replacement) and aggregates predictions by voting or averaging. Random Forest is a classic bagging algorithm that builds multiple decision trees on bootstrapped samples."
  },
  {
    id: 11,
    domain: "Domain 2: ML Model Development",
    question: "Which SageMaker Debugger feature helps detect vanishing gradients during deep neural network training?",
    options: [
      "Model output tensor monitoring",
      "Gradient statistics rules (VanishingGradient rule)",
      "Inference latency monitoring",
      "Data drift detection"
    ],
    correctAnswer: 1,
    explanation: "SageMaker Debugger provides built-in rules like VanishingGradient that monitor gradient statistics during training. If gradients become too small across layers, the rule triggers an alert, helping data scientists detect and fix vanishing gradient problems before training completes."
  },
  {
    id: 12,
    domain: "Domain 2: ML Model Development",
    question: "Which approach is MOST appropriate for handling a bias/variance tradeoff when a model has high variance (overfitting) on a fixed dataset?",
    options: [
      "Increase model capacity",
      "Add more training data or reduce model complexity",
      "Change the optimization algorithm",
      "Increase the number of epochs"
    ],
    correctAnswer: 1,
    explanation: "High variance indicates the model is overfitting the training data. Adding more training data helps the model learn more general patterns. If more data is not available, reducing model complexity (fewer parameters, less depth, regularization) reduces the model's capacity to memorize the training data."
  },
  {
    id: 13,
    domain: "Domain 2: ML Model Development",
    question: "Which model artifact format is the standard for saving and loading scikit-learn models for deployment on SageMaker?",
    options: [
      "JSON",
      "Pickle or Joblib",
      "CSV",
      "HDF5"
    ],
    correctAnswer: 1,
    explanation: "scikit-learn models are typically saved using Python's pickle module or joblib library. Joblib is more efficient for large numpy arrays. These serialized formats preserve the entire model object, including preprocessing steps, and can be loaded into SageMaker inference containers."
  },
  {
    id: 14,
    domain: "Domain 2: ML Model Development",
    question: "A company is training a ResNet model on ImageNet data and wants to use a warm-up learning rate schedule. What is the PRIMARY benefit of this approach?",
    options: [
      "It reduces training time by 50%",
      "It prevents early training instability by starting with a small learning rate and gradually increasing",
      "It automatically finds the optimal learning rate",
      "It eliminates the need for batch normalization"
    ],
    correctAnswer: 1,
    explanation: "Learning rate warm-up starts training with a very small learning rate and gradually increases it over a few epochs. This prevents early training instability, which can occur when large initial updates cause the model to diverge, especially in deep networks with batch normalization."
  },
  {
    id: 15,
    domain: "Domain 2: ML Model Development",
    question: "Which distributed training paradigm is MOST appropriate when a single model is too large to fit in the memory of one GPU?",
    options: [
      "Data parallelism",
      "Model parallelism",
      "Pipeline parallelism",
      "Both B and C"
    ],
    correctAnswer: 3,
    explanation: "When a model exceeds a single GPU's memory, model parallelism splits the model across multiple devices. Pipeline parallelism (a form of model parallelism) splits the model into sequential stages on different devices. Both techniques address the same memory constraint by partitioning the model rather than the data."
  },
  {
    id: 16,
    domain: "Domain 2: ML Model Development",
    question: "A startup wants to build a conversational AI interface that can understand customer intent, manage multi-turn dialogues, and integrate with backend APIs for order lookups. They need a managed service without building custom NLP models. Which AWS service is MOST appropriate?",
    options: [
      "Amazon Lex for building conversational interfaces with built-in NLU",
      "Amazon Bedrock with a general-purpose foundation model",
      "Amazon Comprehend for custom entity recognition",
      "Amazon Rekognition for image analysis"
    ],
    correctAnswer: 0,
    explanation: "Amazon Lex is purpose-built for building conversational interfaces with built-in natural language understanding (NLU), intent recognition, slot filling, and multi-turn dialogue management. It integrates with backend services via Lambda. While Bedrock can generate text, Lex provides the structured dialogue management and NLU capabilities required for production chatbots without custom model development."
  }
];

export const questions2: ExamQuestion[] = [
  // Test Set 2: Questions 16-30
  {
    id: 1,
    domain: "Domain 2: ML Model Development",
    question: "Which SageMaker training job feature allows training to resume from the last checkpoint after a Spot Instance interruption?",
    options: [
      "SageMaker Managed Spot Training with checkpointing to S3",
      "SageMaker Debugger",
      "SageMaker Automatic Model Tuning",
      "SageMaker Neo"
    ],
    correctAnswer: 0,
    explanation: "SageMaker Managed Spot Training supports checkpointing to S3. When a Spot Instance is interrupted, the training job can resume from the last checkpoint when capacity becomes available. This makes Spot Training viable for long-running training jobs, reducing costs by up to 90%."
  },
  {
    id: 2,
    domain: "Domain 2: ML Model Development",
    question: "A company is comparing a Random Forest model and a Gradient Boosting model for a tabular dataset. Which characteristic makes Gradient Boosting more suitable when the dataset has complex non-linear interactions?",
    options: [
      "Random Forest is always better for non-linear data",
      "Gradient Boosting builds trees sequentially, correcting errors of previous trees, capturing complex interactions better",
      "Random Forest uses fewer trees than Gradient Boosting",
      "Gradient Boosting trains faster than Random Forest"
    ],
    correctAnswer: 1,
    explanation: "Gradient Boosting builds trees sequentially, where each new tree focuses on correcting the residual errors of the ensemble so far. This additive approach allows it to capture complex non-linear interactions and decision boundaries more effectively than Random Forest, which builds trees independently."
  },
  {
    id: 3,
    domain: "Domain 2: ML Model Development",
    question: "Which evaluation metric is MOST appropriate for a multi-class classification problem where each class is equally important and the dataset is balanced?",
    options: [
      "Accuracy",
      "Macro-averaged F1 Score",
      "Weighted F1 Score",
      "Precision-Recall AUC"
    ],
    correctAnswer: 1,
    explanation: "Macro-averaged F1 Score computes the F1 score for each class independently and then averages them. This treats all classes equally regardless of their frequency, making it ideal when each class is equally important and the dataset is balanced. Accuracy is also reasonable but F1 provides a better balance of precision and recall."
  },
  {
    id: 4,
    domain: "Domain 2: ML Model Development",
    question: "Which neural network architecture is BEST for processing variable-length sequences of text tokens while maintaining positional information?",
    options: [
      "Multi-Layer Perceptron (MLP)",
      "Convolutional Neural Network (CNN)",
      "Transformer with positional encoding",
      "Autoencoder"
    ],
    correctAnswer: 2,
    explanation: "Transformers process sequences using self-attention mechanisms, which are permutation-invariant. To maintain positional information, transformers add positional encodings (sine/cosine or learned embeddings) to the input embeddings. This allows them to understand word order while processing all tokens in parallel."
  },
  {
    id: 5,
    domain: "Domain 2: ML Model Development",
    question: "Which technique is MOST appropriate for a small dataset (n=300) to get the most reliable estimate of model performance?",
    options: [
      "Single 80/20 train-test split",
      "Stratified 10-fold cross-validation",
      "Bootstrap sampling with replacement",
      "Leave-p-out cross-validation with p=50"
    ],
    correctAnswer: 1,
    explanation: "With 300 samples, a single train-test split would evaluate on only 60 samples. Stratified 10-fold cross-validation ensures each fold has proportional class representation and evaluates on 30 samples per fold, averaging 10 performance estimates. This provides the most reliable performance estimate for small datasets while maintaining class balance."
  },
  {
    id: 6,
    domain: "Domain 2: ML Model Development",
    question: "A company needs to optimize hyperparameters for a SageMaker XGBoost model. The search space includes max_depth (integer 3-10), learning_rate (continuous 0.01-0.3), and subsample (continuous 0.5-1.0). Which tuning strategy is BEST?",
    options: [
      "Grid search with step size 1 for all parameters",
      "Random search with 100 jobs",
      "Bayesian optimization with 30 jobs",
      "Manual tuning by data scientists"
    ],
    correctAnswer: 2,
    explanation: "Bayesian optimization is the most efficient strategy for mixed-type hyperparameters (integer and continuous). With 30 jobs, it will model the search space and focus on promising regions, typically outperforming random search with the same budget. Grid search is inefficient for continuous parameters."
  },
  {
    id: 7,
    domain: "Domain 2: ML Model Development",
    question: "Which technique is MOST effective for reducing the dimensionality of high-dimensional image features before training a classifier?",
    options: [
      "One-hot encoding",
      "Principal Component Analysis (PCA) or t-SNE/UMAP for visualization",
      "Label encoding",
      "Feature hashing"
    ],
    correctAnswer: 1,
    explanation: "PCA is a linear dimensionality reduction technique that projects high-dimensional data onto a lower-dimensional subspace while preserving maximum variance. For image features, PCA can reduce dimensionality while retaining most of the information. t-SNE and UMAP are non-linear techniques primarily used for visualization."
  },
  {
    id: 8,
    domain: "Domain 2: ML Model Development",
    question: "Which SageMaker feature allows you to automatically capture and save training metrics (like loss and accuracy) to Amazon S3 for analysis?",
    options: [
      "SageMaker Model Monitor",
      "SageMaker Debugger with tensor output",
      "SageMaker Training Job metrics and CloudWatch",
      "SageMaker Inference Recommender"
    ],
    correctAnswer: 2,
    explanation: "SageMaker Training Jobs automatically emit metrics to Amazon CloudWatch. You can define custom metrics in the training script, and SageMaker will capture them. CloudWatch metrics can be visualized in dashboards and are also stored for analysis, providing a built-in mechanism for tracking training progress."
  },
  {
    id: 9,
    domain: "Domain 2: ML Model Development",
    question: "Which regularization technique is MOST appropriate for preventing overfitting in a linear regression model with many correlated features?",
    options: [
      "L1 regularization (Lasso)",
      "L2 regularization (Ridge)",
      "Elastic Net (combination of L1 and L2)",
      "Dropout"
    ],
    correctAnswer: 2,
    explanation: "Elastic Net combines L1 and L2 regularization. L1 (Lasso) performs feature selection by shrinking some coefficients to zero, while L2 (Ridge) handles correlated features by distributing coefficients among them. Elastic Net gets the best of both worlds, which is particularly useful when there are many correlated features."
  },
  {
    id: 10,
    domain: "Domain 2: ML Model Development",
    question: "Which technique is used to train a model that generalizes better by training on multiple augmented versions of the same training data?",
    options: [
      "Cross-validation",
      "Data augmentation with consistency regularization",
      "Early stopping",
      "Gradient clipping"
    ],
    correctAnswer: 1,
    explanation: "Data augmentation with consistency regularization trains the model to produce consistent predictions across different augmented versions of the same input. This improves generalization by teaching the model to be invariant to transformations that shouldn't change the label, such as image flips or text paraphrases."
  },
  {
    id: 11,
    domain: "Domain 2: ML Model Development",
    question: "Which deep learning optimization algorithm is MOST appropriate for training large neural networks with sparse gradients, such as NLP models?",
    options: [
      "Stochastic Gradient Descent (SGD) with momentum",
      "Adam (Adaptive Moment Estimation)",
      "RMSprop",
      "AdaGrad"
    ],
    correctAnswer: 1,
    explanation: "Adam combines the advantages of AdaGrad (handling sparse gradients) and RMSprop (handling non-stationary objectives). It maintains per-parameter learning rates and momentum estimates, making it the default choice for training large neural networks, especially in NLP where gradients can be sparse."
  },
  {
    id: 12,
    domain: "Domain 2: ML Model Development",
    question: "Which model artifact storage approach is MOST appropriate for ensuring reproducibility in a team of data scientists?",
    options: [
      "Save models to local directories on each data scientist's laptop",
      "Version models in Amazon S3 with metadata tags (SageMaker Model Registry)",
      "Email model files to team members",
      "Store models in a shared network drive without versioning"
    ],
    correctAnswer: 1,
    explanation: "SageMaker Model Registry (or S3 with versioning and metadata) provides centralized model storage with versioning, lineage tracking, and approval workflows. This ensures that any team member can reproduce experiments by retrieving the exact model version, training code, and data used."
  },
  {
    id: 13,
    domain: "Domain 2: ML Model Development",
    question: "Which technique is MOST appropriate for a regression problem where the target variable has a highly skewed distribution (e.g., income with a long tail)?",
    options: [
      "Train the model directly on the raw target values",
      "Apply a log transformation to the target variable before training",
      "Remove all outliers above the 95th percentile",
      "Use classification instead of regression"
    ],
    correctAnswer: 1,
    explanation: "Log transformation compresses the long tail of a skewed distribution, making it closer to normal. This reduces the influence of extreme values and often improves model performance. After training, predictions can be exponentiated back to the original scale. Removing outliers (option C) loses valuable data."
  },
  {
    id: 14,
    domain: "Domain 2: ML Model Development",
    question: "Which SageMaker feature is MOST appropriate for debugging why a training job is producing NaN loss values?",
    options: [
      "SageMaker Model Monitor",
      "SageMaker Debugger with LossNotDecreasing and similar rules",
      "SageMaker Automatic Model Tuning",
      "SageMaker Inference Recommender"
    ],
    correctAnswer: 1,
    explanation: "SageMaker Debugger can monitor loss values in real-time during training. Built-in rules like LossNotDecreasing, VanishingGradient, or Overfit can detect NaN losses and other training anomalies. Debugger captures tensors and metrics, allowing deep analysis of why training diverged."
  },
  {
    id: 15,
    domain: "Domain 2: ML Model Development",
    question: "Which ensemble method is MOST appropriate for combining predictions from a neural network, a random forest, and an XGBoost model to improve overall performance?",
    options: [
      "Bagging",
      "Boosting",
      "Stacking (super learning with a meta-learner)",
      "Voting without weights"
    ],
    correctAnswer: 2,
    explanation: "Stacking (or super learning) trains a meta-learner on the predictions of multiple base models. The meta-learner learns the optimal way to combine predictions, potentially outperforming simple voting. This is ideal when combining diverse model types (neural network, random forest, XGBoost) with different strengths."
  },
  {
    id: 16,
    domain: "Domain 2: ML Model Development",
    question: "A company wants to build a customer support chatbot that can answer questions about their product catalog using natural language. They have no ML engineers and need to deploy quickly without managing infrastructure. Which AWS service should they use?",
    options: [
      "Amazon SageMaker with custom model training",
      "Amazon Bedrock with foundation models via API",
      "Amazon Personalize with real-time recommendations",
      "Amazon Forecast with time-series predictions"
    ],
    correctAnswer: 1,
    explanation: "Amazon Bedrock provides access to foundation models via a simple API, enabling rapid deployment of generative AI applications like chatbots without infrastructure management or ML expertise. SageMaker requires ML engineering for custom model development. Personalize and Forecast are specialized services for recommendations and forecasting, not conversational AI."
  },
  {
    id: 17,
    domain: "Domain 2: ML Model Development",
    question: "A healthcare company wants to build a generative AI application that predicts patient outcomes using clinical notes. They need to fine-tune a foundation model on their proprietary patient data while ensuring data confidentiality and without managing ML infrastructure. Which AWS service is MOST appropriate?",
    options: [
      "Amazon Rekognition for image analysis",
      "Amazon Comprehend Medical for medical text extraction",
      "Amazon Bedrock with fine-tuning and serverless deployment",
      "Amazon SageMaker Studio for full ML lifecycle management"
    ],
    correctAnswer: 2,
    explanation: "Amazon Bedrock provides serverless access to foundation models with fine-tuning capabilities, allowing healthcare organizations to customize models on proprietary data without managing infrastructure. Data remains confidential during fine-tuning. Comprehend Medical only extracts medical entities from text, not predictive modeling. SageMaker Studio requires hands-on ML infrastructure management. Rekognition is for computer vision, not clinical text analysis."
  },
  {
    id: 18,
    domain: "Domain 2: ML Model Development",
    question: "A pharmaceutical company needs to compare different foundation models (Anthropic Claude, Amazon Titan, AI21 Jurassic) for drug discovery text generation. They want to evaluate model performance without provisioning GPU instances or managing model deployments. Which AWS service should they use?",
    options: [
      "Amazon SageMaker with custom model training and deployment",
      "Amazon Bedrock with single API access to multiple foundation models",
      "Amazon Lex with custom intent classification",
      "Amazon Polly for text-to-speech synthesis"
    ],
    correctAnswer: 1,
    explanation: "Amazon Bedrock provides a single API to access multiple foundation models from leading providers (Anthropic, AI21, Meta, Amazon) without managing infrastructure or deployments. This allows rapid evaluation and comparison of different models for specific use cases. SageMaker requires provisioning and managing instances. Lex and Polly are specialized services for conversational AI and voice synthesis, not foundation model evaluation."
  },
  {
    id: 19,
    domain: "Domain 2: ML Model Development",
    question: "An e-commerce company has deployed a fraud detection model where only 3% of transactions are fraudulent. The company wants to optimize the model to detect fraud while minimizing false positives so genuine transactions are not blocked. Which TWO metrics should the ML engineer use to evaluate performance?",
    options: [
      "F1 Score",
      "False Positive Rate",
      "True Positive Rate",
      "Cut-off (threshold)",
      "RMSE (Root Mean Square Error)"
    ],
    correctAnswer: [0, 1],
    explanation: "The F1 Score balances precision (minimizing false positives) and recall (detecting true fraud cases), making it ideal for imbalanced fraud detection. The False Positive Rate (FPR) directly measures the proportion of genuine transactions incorrectly flagged as fraudulent, which the company explicitly wants to minimize. True Positive Rate alone does not address false positives. Cut-off is a decision threshold, not a performance metric. RMSE is for regression, not classification."
  },
  {
    id: 20,
    domain: "Domain 2: ML Model Development",
    question: "A data scientist wants to quickly build a sentiment analysis model without training from scratch. They need a pre-trained NLP model that can be fine-tuned on their domain-specific text data. Which AWS service should they use?",
    options: [
      "Amazon SageMaker JumpStart with pre-trained models and solution templates",
      "Amazon Comprehend for custom classification",
      "Amazon Bedrock with prompt engineering",
      "Amazon Rekognition for text detection"
    ],
    correctAnswer: 0,
    explanation: "Amazon SageMaker JumpStart provides pre-trained models and solution templates for common ML tasks, including NLP. You can fine-tune these models on your data without training from scratch. Comprehend is for general text analysis without fine-tuning. Bedrock provides foundation models via API but not fine-tuning for custom classification. Rekognition is for computer vision, not NLP."
  },
  {
    id: 21,
    domain: "Domain 2: ML Model Development",
    question: "An ML team needs to understand why their loan approval model rejected certain applications and identify potential bias against specific demographic groups. Which AWS service should they use?",
    options: [
      "Amazon SageMaker Clarify for model explainability and bias detection",
      "Amazon CloudWatch for performance monitoring",
      "Amazon SageMaker Debugger for training optimization",
      "AWS IAM for access control"
    ],
    correctAnswer: 0,
    explanation: "Amazon SageMaker Clarify provides model explainability and bias detection capabilities. It uses SHAP values to explain individual predictions and can detect pre-training and post-training bias across demographic groups. CloudWatch monitors infrastructure metrics. Debugger optimizes training performance. IAM manages access control, not model bias."
  },
  {
    id: 22,
    domain: "Domain 2: ML Model Development",
    question: "A retail company wants to forecast daily sales for the next 30 days based on historical data that includes seasonality and promotions. They need a built-in algorithm that handles time-series forecasting with multiple related time series. Which SageMaker algorithm should they use?",
    options: [
      "Linear Learner",
      "DeepAR",
      "K-Means",
      "XGBoost"
    ],
    correctAnswer: 1,
    explanation: "DeepAR is a SageMaker built-in algorithm specifically designed for time-series forecasting. It uses recurrent neural networks to model multiple related time series simultaneously, handling seasonality, trends, and covariates like promotions. Linear Learner is for linear regression. K-Means is for clustering. XGBoost is a gradient boosting algorithm for tabular data, not time-series forecasting."
  }
];
