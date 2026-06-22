---
name: typescript-refactorer
description: Use when duplicate TypeScript types, name collisions, loose any types, or prop interfaces exceeding 10 properties are found. Consolidates types to a single source of truth and enforces strict typing.
---

## Purpose
Consolidate duplicate types, enforce strict typing, eliminate name collisions, and maintain a single source of truth for all TypeScript types in the codebase.

## Core Principles

### 1. Single Source of Truth
- **NEVER** redefine an interface in multiple files
- **ALWAYS** import from centralized type definitions
- Types live in `src/types/` or `src/lib/` and are imported everywhere else

### 2. Naming Conventions
- **Interfaces**: PascalCase, descriptive names (`ExamQuestion`, `ExamMetadata`)
- **Avoid collisions**: Prefix with domain when needed (`ExamQuestion` vs `AppQuestion`)
- **No generic names**: `ExamConfig` is ambiguous — use `ExamRuntimeConfig` vs `ExamMetadataConfig`

### 3. Type Organization
```
src/types/
  index.ts          # Re-exports all types
  questions.ts      # Question-related types
  exams.ts          # Exam metadata and config types
  app.ts            # Application state types
  ui.ts             # Component prop types
```

### 4. Strict Typing Rules
- **NO `any`** — use `unknown` if truly unknown, or proper unions
- **Explicit return types** on all functions
- **Discriminated unions** for multi-type scenarios:
  ```typescript
  type QuestionType =
    | { type: 'multiple-choice'; correctAnswer: number }
    | { type: 'multiple-response'; correctAnswer: number[] }
    | { type: 'ordering'; correctAnswer: number[] }
    | { type: 'matching'; correctAnswer: number[]; options: { prompts: string[]; answers: string[] } };
  ```
- **Utility types**: Use `Pick`, `Omit`, `Partial`, `Required` to derive types
- **Const assertions** for literal types: `const MODES = ['full', 'section'] as const`

### 5. Refactoring Workflow

1. **Audit**: Find all duplicate type definitions using grep
2. **Consolidate**: Create single canonical definition in `src/types/`
3. **Rename**: Resolve naming collisions with domain-specific prefixes
4. **Replace**: Update all imports across the codebase
5. **Verify**: Run `tsc --noEmit` to catch type errors
6. **Clean**: Remove all inline/duplicate type definitions

### 6. Common Patterns to Enforce

#### Before (Bad)
```typescript
// In 9 different files:
interface Question {
  id: number;
  question: string;
  correctAnswer: number | number[];
}
```

#### After (Good)
```typescript
// src/types/questions.ts
export interface BaseQuestion {
  id: number;
  domain: string;
  question: string;
  options: string[];
  explanation: string;
}

export interface SingleChoiceQuestion extends BaseQuestion {
  type: 'multiple-choice';
  correctAnswer: number;
}

export interface MultipleResponseQuestion extends BaseQuestion {
  type: 'multiple-response';
  correctAnswer: number[];
}

export type Question = SingleChoiceQuestion | MultipleResponseQuestion;
```

### 7. Props Typing
- **Group related props** into config objects when > 10 props
- **Use discriminated unions** for variant props
- **Extract callback types** into named interfaces

#### Before (Bad)
```tsx
interface ExamScreenProps {
  mode: string;
  selectedDomain: string;
  // ... 15 more props
}
```

#### After (Good)
```tsx
type ExamMode = 'full' | 'section';

interface ExamScreenProps {
  config: ExamScreenConfig;
  state: ExamScreenState;
  actions: ExamScreenActions;
}

interface ExamScreenConfig {
  mode: ExamMode;
  selectedDomain: string;
  questions: Question[];
}
```

### 8. Generic Patterns
- **Generic hooks**: `useLocalStorage<T>(key: string, initial: T)`
- **Generic utilities**: `function getDomainStats<T extends { domain: string }>(items: T[])`
- **Generic components**: `interface ListProps<T> { items: T[]; renderItem: (item: T) => ReactNode }`

## Anti-Patterns to Fix

1. **Duplicate interfaces** — consolidate immediately
2. **Name collisions** — rename with domain prefixes
3. **Loose `string` types** — use literal unions (`'full' | 'section'`)
4. **Implicit `any`** — add explicit types
5. **Missing return types** — add to all functions
6. **Inline type definitions** — extract to `src/types/`
7. **Unused type exports** — remove dead code

## Verification Steps

After refactoring, always run:
```bash
npx tsc --noEmit
npm run lint
npm run build
```

## When to Use This Skill
- When duplicate types are found across files
- When type names collide with different shapes
- When `any` or loose types are used
- When props interfaces grow beyond 10 properties
- When adding new question types that need proper typing