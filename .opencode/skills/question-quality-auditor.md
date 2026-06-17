# Question Quality Auditor Skill

## Purpose
Validate existing questions against official exam syllabi, check coverage of each domain/chapter, verify question accuracy, and identify gaps in the question bank.

## Core Principles

### 1. Coverage Analysis
For each exam, verify:
- What percentage of each domain/chapter is covered
- Are there any topics within domains with no questions
- Is the question distribution proportional to exam weighting

### 2. Question Format Validation
Verify each question follows the official format:
- Correct type (multiple-choice, multiple-response)
- Appropriate difficulty level (K2: Understand, K3: Apply)
- Proper explanation references syllabus concepts
- No outdated information or deprecated terminology

### 3. Accuracy Checks
- Answer key correctness
- Plausible but incorrect distractors
- Clear, unambiguous correct answer
- Explanations are educational and accurate

### 4. Gap Detection
- Missing topics from official syllabus
- Under-represented domains
- Question types not covered (ordering, matching)

## Audit Workflow

### Step 1: Load Exam Configuration
```typescript
interface ExamAuditConfig {
  examId: string;
  examName: string;
  domains: { name: string; weight: number; topics: string[] }[];
  totalQuestions: number;
  questionTypes: ('multiple-choice' | 'multiple-response' | 'ordering' | 'matching')[];
}
```

### Step 2: Analyze Coverage
For each domain:
```typescript
function analyzeDomainCoverage(
  domainName: string,
  questions: Question[],
  config: ExamAuditConfig
): DomainCoverage {
  const domainQuestions = questions.filter(q => q.domain === domainName);
  const topicCoverage = config.domains
    .find(d => d.name === domainName)?.topics || [];

  return {
    domain: domainName,
    questionCount: domainQuestions.length,
    expectedWeight: config.domains.find(d => d.name === domainName)?.weight || 0,
    actualWeight: (domainQuestions.length / questions.length) * 100,
    coveredTopics: extractTopics(domainQuestions),
    missingTopics: topicCoverage.filter(t => !coveredTopics.includes(t)),
  };
}
```

### Step 3: Validate Question Quality
```typescript
interface QualityIssue {
  questionId: number;
  severity: 'critical' | 'warning' | 'info';
  type: 'format' | 'accuracy' | 'coverage' | 'clarity';
  message: string;
}

function validateQuestion(question: Question): QualityIssue[] {
  const issues: QualityIssue[] = [];

  // Check format
  if (question.options.length !== 4) {
    issues.push({
      questionId: question.id,
      severity: 'critical',
      type: 'format',
      message: 'Multiple choice must have exactly 4 options',
    });
  }

  // Check for problematic options
  if (question.options.some(o => o.includes('All of the above') || o.includes('None of the above'))) {
    issues.push({
      questionId: question.id,
      severity: 'warning',
      type: 'format',
      message: 'Avoid "All of the above" or "None of the above" options',
    });
  }

  // Check explanation
  if (question.explanation.length < 50) {
    issues.push({
      questionId: question.id,
      severity: 'warning',
      type: 'clarity',
      message: 'Explanation should be at least 50 characters',
    });
  }

  return issues;
}
```

### Step 4: Generate Coverage Report
```typescript
interface CoverageReport {
  examId: string;
  totalQuestions: number;
  domainCoverage: DomainCoverage[];
  qualityIssues: QualityIssue[];
  gaps: string[];
  recommendations: string[];
}

function generateReport(examId: string, questions: Question[]): CoverageReport {
  const config = getExamConfig(examId);
  const domainCoverage = config.domains.map(d => analyzeDomainCoverage(d.name, questions, config));
  const qualityIssues = questions.flatMap(validateQuestion);
  const gaps = domainCoverage.flatMap(d => d.missingTopics);

  return {
    examId,
    totalQuestions: questions.length,
    domainCoverage,
    qualityIssues,
    gaps: [...new Set(gaps)],
    recommendations: generateRecommendations(domainCoverage, qualityIssues, gaps),
  };
}
```

## Exam-Specific Audit Triggers

### AWS ML Engineer Associate (MLA-C01)
```yaml
domains:
  - name: "Domain 1: Data Preparation for ML"
    weight: 28%
    topics:
      - Data formats (Parquet, JSON, CSV, ORC, Avro)
      - Feature engineering (scaling, encoding, splitting)
      - Data sources (S3, RDS, DynamoDB, Kinesis)
      - Data quality and bias detection
      - AWS services: Glue, DataBrew, Ground Truth, Feature Store
```

### ISTQB Foundation Level (CTFL v4.0)
```yaml
chapters:
  - name: "Chapter 1: Fundamentals of Testing"
    weight: 15%
    topics:
      - Why testing is necessary
      - Seven testing principles
      - Fundamental test process
      - Psychology of testing
```

### ISTQB Testing with GenAI
```yaml
chapters:
  - name: "Chapter 1: Introduction to GenAI for Testing"
    weight: 15%
    topics:
      - What is GenAI and LLMs
      - Capabilities relevant to testing
      - Limitations and risks
```

## Coverage Thresholds

| Metric | Acceptable | Warning | Critical |
|--------|------------|---------|----------|
| Domain weight variance | ±5% | ±10% | >10% |
| Topic coverage | >80% | 50-80% | <50% |
| Question quality issues | <5% | 5-10% | >10% |
| Explanation length | >50 chars | 20-50 chars | <20 chars |

## Output Format

When auditing, produce a report:

```markdown
# Question Quality Audit Report

## Exam: [Exam Name]

### Coverage Summary
| Domain | Questions | Expected | Actual | Status |
|--------|-----------|----------|--------|--------|
| Domain 1 | 45 | 28% | 32% | ✅ |
| Domain 2 | 30 | 26% | 21% | ⚠️ |

### Quality Issues
- [ ] Q1: Multiple response without clear indication (critical)
- [ ] Q45: "All of the above" option used (warning)

### Missing Topics
- Data lake architecture
- Model monitoring metrics

### Recommendations
1. Add 5-10 questions covering Domain 2
2. Remove or fix Q1 format issue
3. Expand explanations to reference specific AWS services
```

## When to Use This Skill
- When adding new questions to verify format
- Before releasing exam updates
- To identify gaps in question coverage
- To validate question bank against official syllabus
- When receiving feedback about question accuracy
