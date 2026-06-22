interface StudyResource {
  label: string;
  url: string;
}

const studyResources: Record<string, Record<string, StudyResource[]>> = {
  'aws-ml': {
    'Domain 1: Data Preparation for ML': [
      { label: 'AWS ML Learning Path', url: 'https://aws.amazon.com/training/learn-about/machine-learning/' },
      { label: 'SageMaker Data Prep', url: 'https://docs.aws.amazon.com/sagemaker/latest/dg/processing-job.html' },
    ],
    'Domain 2: ML Model Development': [
      { label: 'SageMaker Algorithms', url: 'https://docs.aws.amazon.com/sagemaker/latest/dg/algos.html' },
      { label: 'AWS ML Whitepaper', url: 'https://docs.aws.amazon.com/whitepapers/latest/aws-machine-learning-services-overview/' },
    ],
    'Domain 3: ML Model Deployment & Operations': [
      { label: 'SageMaker Deployment', url: 'https://docs.aws.amazon.com/sagemaker/latest/dg/deploy-model.html' },
      { label: 'AWS ML Best Practices', url: 'https://docs.aws.amazon.com/wellarchitected/latest/machine-learning-lens/' },
    ],
    'Domain 4: ML Solution Monitoring & Maintenance': [
      { label: 'SageMaker Model Monitor', url: 'https://docs.aws.amazon.com/sagemaker/latest/dg/model-monitor.html' },
      { label: 'AWS CloudWatch ML', url: 'https://docs.aws.amazon.com/sagemaker/latest/dg/monitoring-cloudwatch.html' },
    ],
  },
  'aws-saa': {
    'Domain 1: Design Secure Architectures': [
      { label: 'AWS Security', url: 'https://aws.amazon.com/security/' },
      { label: 'IAM Best Practices', url: 'https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html' },
    ],
    'Domain 2: Design Resilient Architectures': [
      { label: 'AWS Well-Architected', url: 'https://aws.amazon.com/architecture/well-architected/' },
      { label: 'AWS Reliability', url: 'https://docs.aws.amazon.com/wellarchitected/latest/reliability-pillar/' },
    ],
    'Domain 3: Design High-Performing Architectures': [
      { label: 'AWS Performance', url: 'https://docs.aws.amazon.com/wellarchitected/latest/performance-efficiency-pillar/' },
    ],
    'Domain 4: Design Cost-Optimized Architectures': [
      { label: 'AWS Cost Optimization', url: 'https://docs.aws.amazon.com/wellarchitected/latest/cost-optimization-pillar/' },
    ],
  },
  'istqb-foundation': {
    'Chapter 1: Fundamentals of Testing': [
      { label: 'ISTQB Syllabus', url: 'https://www.istqb.org/certifications/foundation-level' },
    ],
    'Chapter 2: Testing Throughout the SDLC': [
      { label: 'ISTQB Syllabus', url: 'https://www.istqb.org/certifications/foundation-level' },
    ],
    'Chapter 3: Static Testing': [
      { label: 'ISTQB Syllabus', url: 'https://www.istqb.org/certifications/foundation-level' },
    ],
    'Chapter 4: Test Analysis and Design': [
      { label: 'ISTQB Syllabus', url: 'https://www.istqb.org/certifications/foundation-level' },
    ],
    'Chapter 5: Test Management': [
      { label: 'ISTQB Syllabus', url: 'https://www.istqb.org/certifications/foundation-level' },
    ],
    'Chapter 6: Test Tools': [
      { label: 'ISTQB Syllabus', url: 'https://www.istqb.org/certifications/foundation-level' },
    ],
  },
  'istqb-genai': {
    'Chapter 1: Introduction to GenAI for Testing': [
      { label: 'ISTQB GenAI Syllabus', url: 'https://www.istqb.org/certifications/test-with-generative-ai' },
      { label: 'Transformer Architecture Guide', url: 'https://en.wikipedia.org/wiki/Transformer_(deep_learning_architecture)' },
    ],
    'Chapter 2: Prompt Engineering for Testing': [
      { label: 'ISTQB GenAI Syllabus', url: 'https://www.istqb.org/certifications/test-with-generative-ai' },
      { label: 'Prompt Engineering Guide', url: 'https://www.promptingguide.ai/' },
    ],
    'Chapter 3: Managing Risks of GenAI in Testing': [
      { label: 'ISTQB GenAI Syllabus', url: 'https://www.istqb.org/certifications/test-with-generative-ai' },
      { label: 'EU AI Act', url: 'https://artificialintelligenceact.eu/' },
      { label: 'NIST AI RMF', url: 'https://www.nist.gov/itl/ai-risk-management-framework' },
    ],
    'Chapter 4: LLM-Powered Test Infrastructure': [
      { label: 'ISTQB GenAI Syllabus', url: 'https://www.istqb.org/certifications/test-with-generative-ai' },
      { label: 'RAG Guide', url: 'https://docs.llamaindex.ai/stable/getting_started/concept/' },
    ],
    'Chapter 5: Deploying and Integrating GenAI': [
      { label: 'ISTQB GenAI Syllabus', url: 'https://www.istqb.org/certifications/test-with-generative-ai' },
      { label: 'ISO/IEC 42001', url: 'https://www.iso.org/standard/81230.html' },
    ],
  },
};

export function getStudyResources(examId: string, domain: string): StudyResource[] {
  return studyResources[examId]?.[domain] || [];
}