# Study Enhancer Skill

## Purpose
Add study aids and analytics to help users prepare for certifications more effectively. Track progress, identify weaknesses, and provide targeted study recommendations.

## Features to Implement

### 1. Exam History & Progress Tracking

**New Types:**
```typescript
interface ExamAttempt {
  id: string;
  examId: string;
  testSet: number;
  mode: 'full' | 'section';
  selectedDomain?: string;
  score: number;
  totalQuestions: number;
  percentage: number;
  passed: boolean;
  domainScores: DomainScore[];
  timeElapsed: number;
  completedAt: number; // timestamp
  answers: Record<number, number | number[]>; // for review
}

interface ExamHistory {
  examId: string;
  attempts: ExamAttempt[];
  bestScore: number;
  averageScore: number;
  totalAttempts: number;
  lastAttempt: number | null;
}
```

**Storage:**
- Store completed attempts in localStorage
- Key: `exam-history-{examId}`
- Limit to last 10 attempts per exam

### 2. Weakness Detection

```typescript
interface WeaknessAnalysis {
  examId: string;
  weakestDomains: {
    domain: string;
    averageScore: number;
    questionCount: number;
    missedQuestionIds: number[];
  }[];
  recommendedStudyOrder: string[]; // domains to study first
}
```

### 3. Per-Domain Study Guide

Generate study summaries based on exam configuration:

```typescript
interface DomainStudyGuide {
  domain: string;
  weight: number; // exam percentage
  keyTopics: string[]; // extracted from question domains
  totalQuestions: number;
  averageDifficulty: number; // based on historical performance
  resources: string[]; // placeholder for external links
}
```

### 4. Progress Dashboard

Show on exam selection screen:
- Best score
- Average score
- Attempts count
- Last attempt date
- Weakest domain

### 5. Spaced Repetition for Flagged Questions

Track frequently missed questions:
```typescript
interface QuestionAnalytics {
  questionId: number;
  examId: string;
  timesSeen: number;
  timesCorrect: number;
  lastSeen: number;
  difficulty: 'easy' | 'medium' | 'hard';
}
```

## Implementation Checklist

### Phase 1: Data Model
- [ ] Add `ExamAttempt` type
- [ ] Add `QuestionAnalytics` type
- [ ] Create attempt storage service

### Phase 2: History Tracking
- [ ] Save attempt after exam completion
- [ ] Display history on exam start screen
- [ ] Show improvement trends

### Phase 3: Analytics
- [ ] Calculate weakness analysis
- [ ] Generate study recommendations
- [ ] Track question-level analytics

### Phase 4: UI Enhancements
- [ ] Add "History" tab on exam selection
- [ ] Show weakest domains with suggestions
- [ ] Add "Study Mode" for weak areas
- [ ] Progress charts over time

## Data Flow

```
Exam Completed
    ↓
Save Attempt → ExamHistory
    ↓
Calculate Weaknesses
    ↓
Generate Recommendations
    ↓
Show on Home/Exam Selection
```

## Storage Keys

```
exam-attempts-{examId}    → ExamAttempt[]
question-analytics         → Record<string, QuestionAnalytics>
```

## Example UI Additions

### Exam Selection Screen
```
┌─────────────────────────────────────┐
│ AWS ML Engineer Associate            │
│ Best: 78% | Avg: 72% | Attempts: 5 │
│ ⚠️ Weakest: Domain 4 (62%)          │
│ [Start Exam] [View History]          │
└─────────────────────────────────────┘
```

### History Screen
```
┌─────────────────────────────────────┐
│ Exam History                        │
│                                     │
│ Jun 15, 2026 - 82% ✓ (Pass)        │
│ Jun 12, 2026 - 71% ✗ (Fail)        │
│ Jun 10, 2026 - 75% ✓ (Pass)        │
│                                     │
│ Domain Breakdown:                   │
│ Domain 1: ████████░░ 80%           │
│ Domain 2: ██████░░░░ 60% ⚠️        │
│ Domain 3: █████████░ 90%           │
│ Domain 4: █████░░░░░ 50% ⚠️        │
│                                     │
│ [Study Domain 2] [Study Domain 4]   │
└─────────────────────────────────────┘
```

## Formulas

### Weakness Score
```typescript
const weaknessScore = (missed / attempted) * 100;
// Higher = weaker
```

### Recommended Study Order
```typescript
const studyOrder = domains
  .sort((a, b) => a.weaknessScore - b.weaknessScore)
  .map(d => d.domain);
// Study weakest domains first
```

### Question Difficulty
```typescript
const difficulty = questionAnalytics.timesCorrect / questionAnalytics.timesSeen;
// < 0.4 = hard, 0.4-0.7 = medium, > 0.7 = easy
```

## When to Use This Skill
- When adding study aids to exam selection
- When implementing progress tracking
- When adding analytics dashboards
- When building recommendation systems
