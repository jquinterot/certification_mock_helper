# Code Decomposer Skill

## Purpose
Break down large files into focused, single-responsibility modules. Enforce file size limits and proper component architecture.

## File Size Limits

| File Type | Max Lines | Action |
|-----------|-----------|--------|
| Page component | 100 | Extract screen components |
| UI Component | 150 | Extract sub-components |
| Custom hook | 100 | Split state vs actions |
| Utility module | 80 | Split by domain |
| Data file (questions) | 150 | Split by domain/chapter |
| Types file | 80 | Split by domain |

## Decomposition Strategies

### 1. Page Component Decomposition

**Problem**: `page.tsx` is a "God component" handling all screens (295 lines)

**Solution**: Extract each screen into its own component

```
src/app/page.tsx                    # Orchestrator only (< 60 lines)
src/components/screens/
  HomeScreen.tsx                    # Home page content
  CategoryScreen.tsx                # Category selection
  ExamStartScreen.tsx               # Exam setup/start
  ExamScreen.tsx                    # Active exam
  ResultsScreen.tsx                 # Score results
  ReviewScreen.tsx                  # Question review
  index.ts                          # Barrel export
```

**Pattern**:
```typescript
// page.tsx - thin orchestrator
export default function HomePage() {
  const [phase, setPhase] = useState<AppPhase>('home');
  const examState = useExam();

  const renderScreen = () => {
    switch (phase) {
      case 'home': return <HomeScreen onNavigate={setPhase} />;
      case 'category': return <CategoryScreen onSelect={handleSelect} />;
      // ...
    }
  };

  return <main className="...">{renderScreen()}</main>;
}
```

### 2. Sub-Component Extraction

**Problem**: `StartScreen.tsx` has inline sub-components (360 lines)

**Solution**: Extract each sub-component to its own file

```
src/components/start-screen/
  StartScreen.tsx                   # Main component (< 80 lines)
  TestSetCard.tsx                   # Test set selection card
  ModeCard.tsx                      # Exam mode card
  InfoCard.tsx                      # Information display
  index.ts                          # Barrel export
```

**Rule**: If a sub-component is 20+ lines and has its own state/logic, extract it.

### 3. Hook Decomposition

**Problem**: `useExam.ts` mixes state management and actions (200 lines)

**Solution**: Separate concerns

```
src/hooks/
  useExamState.ts                   # State + reducer
  useExamActions.ts                 # Action callbacks
  useExam.ts                        # Composes both (thin)
  index.ts                          # Barrel export
```

**Pattern**:
```typescript
// useExamState.ts
export interface ExamState {
  answers: Record<number, number | number[]>;
  flags: Set<number>;
  currentQuestion: number;
}

export function useExamState(initial?: Partial<ExamState>) {
  const [state, dispatch] = useReducer(examReducer, initial);
  return { state, dispatch };
}

// useExamActions.ts
export function useExamActions(dispatch: Dispatch<ExamAction>) {
  const selectAnswer = useCallback((idx: number, answer: number) => {
    dispatch({ type: 'SELECT_ANSWER', idx, answer });
  }, [dispatch]);

  return { selectAnswer, /* ... */ };
}

// useExam.ts - thin composition
export function useExam(initial?: Partial<ExamState>) {
  const { state, dispatch } = useExamState(initial);
  const actions = useExamActions(dispatch);
  return { ...state, ...actions };
}
```

### 4. Data File Decomposition

**Problem**: Question files are 500-868 lines

**Solution**: Split by domain/chapter

```
src/lib/exams/aws-ml/
  questions/
    domain1.ts                      # ~50 questions
    domain2.ts                      # ~50 questions
    domain3.ts                      # ~50 questions
    domain4.ts                      # ~50 questions
    index.ts                        # Aggregates all
  config.ts                         # Exam metadata
  index.ts                          # Barrel export
```

**Pattern**:
```typescript
// questions/domain1.ts
import type { Question } from '@/types';

export const domain1Questions: Question[] = [
  { id: 1, domain: 'Domain 1', /* ... */ },
  // Keep under 150 lines
];

// questions/index.ts
export { domain1Questions } from './domain1';
export { domain2Questions } from './domain2';
// ...

export const allQuestions: Question[] = [
  ...domain1Questions,
  ...domain2Questions,
  // ...
];
```

### 5. Utility Module Decomposition

**Problem**: `utils.ts` mixes unrelated functions

**Solution**: Split by domain

```
src/lib/utils/
  time.ts                           # formatTime
  date.ts                           # formatDate
  scoring.ts                        # calculateScore, getDomainScores, isCorrectAnswer
  filters.ts                        # getActiveQuestions, getDomainStats
  index.ts                          # Barrel re-export
```

## Extraction Rules

### When to Extract
1. File exceeds line limit (see table above)
2. Multiple responsibilities in one file
3. Inline sub-components 20+ lines
4. Function/hook 40+ lines doing one thing
5. More than 3 related exports that could be grouped

### When NOT to Extract
1. Simple type definitions (keep cohesive)
2. Related constants under 30 lines
3. Trivial helpers (< 10 lines, used once)
4. Theme definitions (cohesive unit)
5. Barrel index files

### Naming Conventions
- **Components**: PascalCase (`TestSetCard.tsx`)
- **Hooks**: camelCase with `use` prefix (`useExamState.ts`)
- **Utilities**: camelCase, domain name (`scoring.ts`)
- **Data files**: camelCase, content description (`domain1.ts`)
- **Folders**: kebab-case (`start-screen/`, `question-card/`)

### Barrel Exports
Always create `index.ts` for extracted groups:
```typescript
export { TestSetCard } from './TestSetCard';
export { ModeCard } from './ModeCard';
export { InfoCard } from './InfoCard';
```

## Verification

After decomposition:
```bash
npm run build     # No build errors
npm run lint      # No lint errors
npx tsc --noEmit  # No type errors
```

Check:
- All import paths resolve correctly
- No circular dependencies
- No functionality changes
- File sizes within limits

## When to Use This Skill
- Files exceed size limits
- Components have multiple responsibilities
- Inline sub-components are complex
- Hooks mix state and actions
- Data files contain multiple domains/chapters
