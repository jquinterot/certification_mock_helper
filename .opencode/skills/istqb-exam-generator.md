# ISTQB Exam Generator Skill

## Purpose
Generate high-quality, exam-style questions for ISTQB certifications. Covers ISTQB Foundation Level (CTFL) and ISTQB Testing with Generative AI.

## Official Exam Requirements

### ISTQB Foundation Level (CTFL v4.0)
- **40 questions** per test set
- **60 minutes** duration
- **Passing score**: 65% (26/40)
- **Question types**: Multiple choice (single answer)
- **Chapters**:
  - Chapter 1: Fundamentals of Testing (15%)
  - Chapter 2: Testing Throughout the SDLC (15%)
  - Chapter 3: Static Testing (10%)
  - Chapter 4: Test Analysis & Design (25%)
  - Chapter 5: Managing the Test Activities (20%)
  - Chapter 6: Test Tools (5%)

### ISTQB Testing with Generative AI
- **40 questions** per test set
- **60 minutes** duration
- **Passing score**: 65% (26/40)
- **Question types**: Multiple choice (single answer)
- **Chapters**:
  - Chapter 1: Introduction to GenAI in Testing (15%)
  - Chapter 2: GenAI Use Cases for Testing (25%)
  - Chapter 3: Prompt Engineering for Testing (20%)
  - Chapter 4: Risks & Quality of GenAI (25%)
  - Chapter 5: Implementing GenAI in Test Process (15%)

## Question Format Standards

### Multiple Choice (ISTQB Standard)
```typescript
import type { Question } from '@/types';

export const questions: Question[] = [
  {
    id: 1,
    domain: 'Chapter 1: Fundamentals of Testing',
    type: 'multiple-choice',
    question: 'Scenario-based question...',
    options: [
      'A. First option',
      'B. Second option',
      'C. Third option',
      'D. Fourth option',
    ],
    correctAnswer: 2, // index of correct answer
    explanation: 'Detailed explanation referencing ISTQB syllabus...',
  },
];
```

## Question Writing Rules

### DO:
- Base questions on **official ISTQB syllabus** terminology
- Use **realistic testing scenarios** with specific context
- Include **4 distinct options** (A, B, C, D)
- Make distractors **plausible** and related to the topic
- Write **detailed explanations** (2-3 sentences minimum)
- Reference **specific ISTQB concepts** (e.g., "equivalence partitioning", "boundary value analysis")
- Test **understanding** over memorization
- Use **K2 (Understand)** and **K3 (Apply)** cognitive levels per Bloom's taxonomy
- Include **real-world testing contexts** (agile, waterfall, regulated industries)

### DON'T:
- Use "All of the above" as an answer
- Use "None of the above" as an answer
- Ask purely definitional questions without context
- Include trick questions or intentionally misleading options
- Use outdated ISTQB terminology (follow v4.0 syllabus)
- Mix concepts from different certification levels
- Reference tools not mentioned in the syllabus

## In-Scope Topics by Chapter

### CTFL Chapter 1: Fundamentals of Testing (15%)
- Why testing is necessary
- What is testing
- Seven testing principles
- Fundamental test process
- Psychology of testing
- Test basis, test objects, test types
- Maintenance testing

### CTFL Chapter 2: Testing Throughout SDLC (15%)
- Software development lifecycle models
- Test levels (component, integration, system, acceptance)
- Test types (functional, non-functional, structural, change-related)
- Maintenance testing
- Shift-left testing

### CTFL Chapter 3: Static Testing (10%)
- Static testing techniques
- Review process
- Roles and responsibilities
- Review types (informal, walkthrough, technical review, inspection)
- Static analysis tools

### CTFL Chapter 4: Test Analysis & Design (25%)
- Test analysis process
- Test design techniques
- Black-box techniques (equivalence partitioning, boundary value analysis, decision tables, state transition, use case testing)
- White-box techniques (statement coverage, decision coverage)
- Experience-based techniques (error guessing, exploratory testing, checklists)
- Test implementation

### CTFL Chapter 5: Managing Test Activities (20%)
- Test organization
- Test planning and estimation
- Risk-based testing
- Defect management
- Test monitoring and control
- Configuration management
- Incident management

### CTFL Chapter 6: Test Tools (5%)
- Tool support for testing
- Test automation
- Tool selection and implementation

### GenAI Chapter 1: Introduction to GenAI in Testing (15%)
- What is GenAI and LLMs
- GenAI capabilities relevant to testing
- Limitations and risks of GenAI
- GenAI in the testing landscape

### GenAI Chapter 2: GenAI Use Cases for Testing (25%)
- Test case generation
- Test data generation
- Test script generation
- Defect analysis and reporting
- Requirements analysis
- Code review assistance

### GenAI Chapter 3: Prompt Engineering for Testing (20%)
- Prompt design principles
- Context provision
- Output validation
- Iterative refinement
- Prompt templates for testing

### GenAI Chapter 4: Risks & Quality of GenAI (25%)
- Hallucination and accuracy
- Bias and fairness
- Data privacy and security
- Quality assurance of GenAI outputs
- Validation and verification strategies

### GenAI Chapter 5: Implementing GenAI in Test Process (15%)
- Integration into existing processes
- Tool evaluation and selection
- Skills and training
- Governance and policies
- Measuring effectiveness

## Scenario Templates

### Template 1: Concept Application
"A test analyst is [situation]. According to ISTQB principles, which approach is MOST appropriate?"

### Template 2: Technique Selection
"A team needs to test [scenario] with [constraints]. Which test design technique is BEST suited?"

### Template 3: Defect Analysis
"During testing, [observation] was made. What is the MOST likely cause?"

### Template 4: Process Understanding
"In an agile project, [situation]. When should [testing activity] be performed?"

### Template 5: Risk-Based Decision
"A project has [constraints] and [risks]. Which testing strategy provides the BEST risk coverage?"

## Quality Checklist

Before generating, verify each question:
- [ ] Scenario is realistic and specific to testing context
- [ ] All 4 options are plausible
- [ ] Correct answer is unambiguous per ISTQB syllabus
- [ ] Distractors are related but incorrect
- [ ] Explanation references ISTQB concepts and is educational
- [ ] Uses correct ISTQB terminology (v4.0)
- [ ] Tests understanding (K2) or application (K3)
- [ ] Matches the correct chapter
- [ ] No "All of the above" or "None of the above"
- [ ] Appropriate difficulty for Foundation level

## Generation Strategy

1. **Full Exam**: Generate 40 questions with chapter weighting per syllabus
2. **Chapter-Specific**: Generate 10-15 questions for a single chapter
3. **Topic-Specific**: Generate 5-10 questions for a specific technique
4. **Mixed Difficulty**: 40% K2 (Understand), 60% K3 (Apply)

## Output Format

```typescript
import type { Question } from '@/types';

export const questions: Question[] = [
  // Generated questions here
];
```

Ensure each question is properly typed, follows the format standards, and includes comprehensive explanations referencing ISTQB syllabus concepts.

## When to Use This Skill
- Generating new ISTQB Foundation Level questions
- Generating new ISTQB Testing with GenAI questions
- Expanding question banks for existing ISTQB exams
- Creating practice tests aligned with official syllabus
