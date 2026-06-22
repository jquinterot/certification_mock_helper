---
name: dry-code-auditor
description: Use when duplicate functions, dead code, hardcoded values, or scattered configuration are found across the codebase. Eliminates DRY violations, removes unused exports, and centralizes shared logic.
---

## Purpose
Eliminate duplicated code, dead exports, hardcoded values, and stale data. Enforce the Don't Repeat Yourself principle across the codebase.

## Detection Patterns

### 1. Duplicate Function Definitions
Search for the same function name exported from multiple files.

**Known duplicates in this codebase**:
- `getDomainStats` — defined in 9 files, only 1 is actually used
- `iconMap` — duplicated in `HomePage.tsx` and `CategoryMenu.tsx`
- `categoryColors` — duplicated in `HomePage.tsx` and `CategoryMenu.tsx`

**Fix**: Single canonical definition, import everywhere else.

```typescript
// src/lib/exam-registry.ts (canonical location)
export const iconMap: Record<string, LucideIcon> = {
  'AWS Cloud': Cloud,
  'ISTQB Testing': FileCheck,
};

export const categoryColors: Record<string, string> = {
  'AWS Cloud': 'from-orange-500 to-amber-500',
  'ISTQB Testing': 'from-blue-500 to-indigo-500',
};

// In components:
import { iconMap, categoryColors } from '@/lib/exam-registry';
```

### 2. Dead Code Detection
Search for:
- Exported functions never imported elsewhere
- Variables defined but never read
- Components defined but never rendered
- Files created but never imported
- No-op callbacks (`() => {}`)

**Known dead code**:
| Location | Issue | Action |
|----------|-------|--------|
| `aws-ml/questions.ts` | `getDomainStats` unused export | Remove |
| `aws-ml/questions2.ts` | `getDomainStats` unused export | Remove |
| `aws-saa/questions.ts` | `getDomainStats` unused export | Remove |
| `aws-saa/questions2.ts` | `getDomainStats` unused export | Remove |
| `istqb-foundation/questions.ts` | `getDomainStats` unused export | Remove |
| `istqb-foundation/questions2.ts` | `getDomainStats` unused export | Remove |
| `theme.ts` | `getThemeByExamId` never used | Remove or integrate |
| `aws-ml/special-questions.ts` | Entire file never imported | Integrate or remove |
| `page.tsx` | `onResumeTest={() => {}}` no-op | Implement or remove |

### 3. Hardcoded Statistics
**Problem**: `HomePage.tsx` has hardcoded counts that go stale:
```typescript
{ label: '3 Certifications', ... }
{ label: '6 Test Sets', ... }
{ label: '340 Total Questions', ... }
```

**Fix**: Compute dynamically from exam registry.

```typescript
// src/lib/exam-registry.ts
export function getExamStats() {
  const exams = Object.values(examRegistry);
  return {
    certificationCount: exams.length,
    testSetCount: exams.reduce((sum, e) => sum + e.testSets.length, 0),
    questionCount: exams.reduce((sum, e) => sum + e.totalQuestions, 0),
  };
}

// In HomePage:
const stats = getExamStats();
// Use stats.certificationCount, etc.
```

### 4. Duplicated Configuration
Centralize scattered config into a registry pattern.

```typescript
// src/lib/exam-registry.ts
export interface ExamEntry {
  id: string;
  name: string;
  category: string;
  description: string;
  testSets: { id: number; name: string }[];
  domains: string[];
  totalQuestions: number;
  passingScore: number;
}

export const examRegistry: Record<string, ExamEntry> = {
  'aws-ml': { /* ... */ },
  'aws-saa': { /* ... */ },
  'istqb-foundation': { /* ... */ },
  'istqb-genai': { /* ... */ },
};
```

### 5. Duplicated Logic
**Problem**: Same logic implemented multiple places.

**Example**: Domain stats calculation exists in:
- `src/lib/utils.ts` — takes `Question[]`
- `src/lib/exams/loader.ts` — takes `examId`, calls loader
- Individual question files — unused exports

**Fix**: Single implementation, compose as needed.

```typescript
// src/lib/utils/scoring.ts (canonical)
export function getDomainStats(questions: Question[]): DomainScore[] {
  const stats: Record<string, DomainScore> = {};
  // Single implementation
  return Object.values(stats);
}

// src/lib/exams/loader.ts (uses canonical)
import { getDomainStats } from '@/lib/utils/scoring';

export function getDomainStatsForExam(examId: string, testSet: number) {
  const questions = getQuestions(examId, testSet);
  return getDomainStats(questions);
}
```

## Audit Workflow

### Step 1: Scan
```bash
# Find duplicate function exports
grep -r "export function getDomainStats" src/

# Find unused exports
grep -r "export " src/ | while read line; do
  func=$(echo "$line" | sed 's/.*export function \([^ ]*\).*/\1/')
  count=$(grep -r "import.*$func" src/ | wc -l)
  if [ "$count" -eq 0 ]; then echo "Unused: $func"; fi
done
```

### Step 2: Map Dependencies
Create a map of each function:
```
Function: getDomainStats
  Defined in: utils.ts (canonical), loader.ts, questions.ts x7
  Imported by: page.tsx (from loader.ts)
  Unused: questions.ts x7
```

### Step 3: Consolidate
1. Keep the **most general** version as canonical
2. Remove all duplicate definitions
3. Update imports to point to canonical location
4. Create wrapper functions if different signatures needed

### Step 4: Remove Dead Code
1. Delete unused exports
2. Delete unused files
3. Remove no-op callbacks
4. Remove unused variables and imports

### Step 5: Dynamic Computation
1. Replace hardcoded numbers with computed values
2. Replace duplicated config with shared registry
3. Replace inline mappings with config-driven approach

## Verification

```bash
npm run lint      # No unused-vars warnings
npm run build     # Build passes
npx tsc --noEmit  # No type errors
```

## Rules

1. **ONE definition rule**: Every function, constant, type defined exactly once
2. **Import, don't copy**: Always import shared code
3. **Compute, don't hardcode**: Derive statistics from data
4. **Remove, don't comment**: Delete dead code completely
5. **Registry pattern**: Centralize configuration in one place

## When to Use This Skill
- When duplicate functions are found across files
- When hardcoded values should be dynamic
- When dead code accumulates
- When configuration is scattered
- When the same logic is repeated with minor variations