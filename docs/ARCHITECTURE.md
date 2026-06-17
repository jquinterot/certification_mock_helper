# Architectural Evaluation Report

## Current State: Multi-Exam Certification Practice Platform

### Overview

The app has evolved from a single AWS ML exam practice to a multi-certification platform supporting:
- **AWS Cloud**: AWS ML Engineer (4 test sets), AWS Solutions Architect (2 test sets)
- **ISTQB Testing**: Foundation Level (2 test sets), Testing with Generative AI (3 test sets)

### Architecture: Component-Based with Custom Hooks

**Phase 1: Foundation (completed)**
```
src/lib/exams/types.ts          — Shared exam types and interfaces
src/lib/exams/index.ts          — Exam registry and lookup
src/lib/exams/loader.ts         — Question loading and section routing
src/lib/theme.ts                — Theme system (AWS orange, ISTQB blue)
src/lib/utils.ts                — Pure functions (formatTime, formatDate)
```

**Phase 2: State Management (completed)**
```
src/hooks/useTimer.ts           — Timer logic with useRef
src/hooks/useExam.ts            — Exam state management (answers, flagged, current)
src/hooks/useSavedTests.ts      — Saved tests CRUD operations
```

**Phase 3: UI Components (completed)**
```
src/components/HomePage.tsx          — Category selection (AWS, ISTQB)
src/components/CategoryMenu.tsx      — Exam selection per category
src/components/StartScreen.tsx       — Test selection, mode selection, domain cards
src/components/ExamScreen.tsx        — Question + navigation + sidebar
src/components/ResultsScreen.tsx     — Score summary + domain breakdown
src/components/ExitDialog.tsx        — Leave exam confirmation
src/components/SubmitDialog.tsx      — Submit exam confirmation
```

**Phase 4: Orchestration (completed)**
```
src/app/page.tsx — Main orchestrator, ~295 lines, handles routing between screens
```

### Exam Structure

| Exam | ID | Test Sets | Section Sets | Questions | Category |
|------|-----|-----------|-------------|-----------|----------|
| AWS ML Engineer | aws-ml | 4 sets | 4 domains × 2 sets | 170 | AWS Cloud |
| AWS Solutions Architect | aws-saa | 2 sets | 4 domains × 2 sets | 130 | AWS Cloud |
| ISTQB Foundation Level | istqb-foundation | 2 sets | 6 chapters × 2 sets | 80 | ISTQB Testing |
| ISTQB Testing with GenAI | istqb-genai | 3 sets | 5 chapters × 2 sets | 120 | ISTQB Testing |

### Question Data Architecture

```
src/lib/exams/
  ├── aws-ml/
  │   ├── config.ts              — Exam metadata
  │   ├── questions.ts           — Test Set 1 (65 questions)
  │   ├── questions2.ts          — Test Set 2 (65 questions)
  │   ├── additional-questions.ts — Test Set 3 (20 questions)
  │   ├── questions4.ts            — Test Set 4 (20 questions)
  │   ├── special-questions.ts     — 15 special questions
  │   └── sections/              — Domain-specific practice
  │       ├── domain1.ts         — Data Preparation (15×2)
  │       ├── domain2.ts         — ML Model Development (15×2)
  │       ├── domain3.ts         — Deployment (15×2)
  │       └── domain4.ts         — Security (15×2)
  ├── aws-saa/
  │   ├── config.ts
  │   ├── questions.ts
  │   ├── questions2.ts
  │   └── sections/              — 4 domains × 2 sets
  ├── istqb-foundation/
  │   ├── config.ts
  │   ├── questions.ts
  │   ├── questions2.ts
  │   └── sections/              — 6 chapters × 2 sets
  └── istqb-genai/
      ├── config.ts
      ├── questions.ts           — Test Set 1 (40 questions)
      ├── questions2.ts          — Test Set 2 (40 questions)
      ├── questions3.ts          — Test Set 3 (40 questions)
      └── sections/              — 5 chapters × 2 sets
          ├── chapter1.ts        — Introduction to GenAI (15×2)
          ├── chapter2.ts        — Prompt Engineering (15×2)
          ├── chapter3.ts        — Managing Risks (15×2)
          ├── chapter4.ts        — LLM Infrastructure (15×2)
          └── chapter5.ts        — Deploying and Integrating (15×2)
```

### Theme System

The app supports dynamic theming based on selected category:

| Category | Primary | Secondary | Accent |
|----------|---------|-----------|--------|
| AWS Cloud | Orange (#f97316) | Amber (#f59e0b) | Orange gradient |
| ISTQB Testing | Blue (#3b82f6) | Cyan (#06b6d4) | Blue gradient |

### Key Features Implemented

1. **Multi-Exam Platform** — Supports 4 certifications with category-based navigation
2. **Full Exam Mode** — Timed tests with 2-4 test sets per exam
3. **Section Mode** — Domain/chapter-specific practice with 2 sets per domain
4. **Theme System** — Dynamic colors based on selected category
5. **Saved Tests** — Resume functionality with localStorage persistence
6. **Question Types** — Single-select and multiple-select (array correctAnswer)
7. **Score Tracking** — Domain-level breakdown and percentage scoring
8. **Review Mode** — Post-exam review with explanations

### Performance Optimizations

- **useMemo** — Question loading, saved tests filtering, domain stats
- **useCallback** — Event handlers for stable references
- **Dynamic imports** — Questions loaded on demand per exam/test set
- **Static generation** — Next.js static export for fast deployment

### Coverage Analysis

**AWS ML Engineer (MLA-C01)** — 170 questions covering:
- Domain 1: Data Preparation (DataSync, Glue, Kinesis, Feature Store, Processing Jobs)
- Domain 2: Model Development (SageMaker, Bedrock, JumpStart, Clarify, DeepAR, XGBoost, metrics)
- Domain 3: Deployment (Neo, Edge Manager, Inference Recommender, Greengrass, pipelines)
- Domain 4: Security (Macie, Model Cards, HIPAA, KMS, IAM, monitoring)

**ISTQB Testing with GenAI (CT-GenAI v1.1)** — 120 questions covering:
- Chapter 1: AI spectrum, LLMs, SLMs, transformers, tokenization, quantization, GANs, RLHF
- Chapter 2: Structured prompts, few-shot, one-shot, chaining, meta prompting, metrics, templates
- Chapter 3: Hallucinations, bias, privacy, EU AI Act, ISO 42001/23053, NIST AI RMF, red teaming
- Chapter 4: RAG, vector databases, embeddings, fine-tuning, LLMOps, agents, serving frameworks
- Chapter 5: Shadow AI, adoption roadmap, change management, ROI, skills, governance

### Build Status

- **TypeScript**: Strict mode, no errors
- **Next.js**: Static export (output: 'export')
- **Build**: Passes cleanly with all 4 exams

### Recent Changes

- Added ISTQB CT-GenAI exam (3 test sets, 5 chapters, 120 questions)
- Added section mode for CT-GenAI (150 section questions)
- Updated loader.ts to support 3 test sets for ISTQB GenAI
- Updated page.tsx to show 3 test sets for ISTQB GenAI
- Updated HomePage to show 2 ISTQB exams
- Added exam-quality questions with no "All of the above" answers

### Future Considerations

- **Test Set 4**: Can be added for ISTQB GenAI following the same pattern
- **New Certifications**: Add new exam config, questions, sections, and update registry
- **Analytics**: Add performance tracking per domain/chapter
- **Progress Persistence**: Expand saved tests to include section mode progress
