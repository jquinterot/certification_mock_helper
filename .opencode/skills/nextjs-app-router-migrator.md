# Next.js App Router Migrator Skill

## Purpose
Convert client-side single-page apps to proper Next.js App Router architecture with Server Components, route segments, streaming, and server actions.

## Current State Analysis
This app uses a single `page.tsx` with client-side phase-based navigation:
```typescript
type AppPhase = 'home' | 'category' | 'exam-start' | 'exam' | 'results' | 'review';
const [phase, setPhase] = useState<AppPhase>('home');
```

This misses Next.js benefits: no SSR, no routing, no SEO, no server actions, no streaming.

## Migration Strategy

### Phase 1: Route Structure
Replace phase-based navigation with URL-based routing.

**Before**:
```
src/app/page.tsx                    # Single page, all phases
```

**After**:
```
src/app/
  page.tsx                          # Home page (Server Component)
  categories/
    page.tsx                        # Category selection
  exam/
    [examId]/
      page.tsx                      # Exam setup (Server Component)
      test/
        page.tsx                    # Active exam (Client Component)
      results/
        page.tsx                    # Score results
      review/
        page.tsx                    # Question review
  saved/
    page.tsx                        # Saved tests list
```

### Phase 2: Server vs Client Components

**Server Components** (default, no `'use client'`):
- Pages that fetch exam config/questions
- Static content (home, categories)
- Data loading and transformation

**Client Components** (`'use client'`):
- Interactive exam UI (answering, navigation)
- Timer display
- Dialogs and modals
- localStorage access
- Event handlers

**Pattern**:
```typescript
// Server Component (page.tsx)
export default async function ExamPage({ params }: { params: Promise<{ examId: string }> }) {
  const { examId } = await params;
  const exam = examRegistry[examId];
  const questions = await getExamQuestions(examId, 1);

  return <ExamClient exam={exam} questions={questions} />;
}

// Client Component (ExamClient.tsx)
'use client';

export default function ExamClient({ exam, questions }: ExamClientProps) {
  const [answers, setAnswers] = useState({});
  // ... interactive logic
}
```

### Phase 3: Server Actions
Replace client-side persistence with server actions.

```typescript
// src/app/actions.ts
'use server';

import { revalidatePath } from 'next/cache';

export async function saveTestProgress(examId: string, state: SavedTestState) {
  // Save to database or localStorage wrapper
  await db.savedTests.upsert({
    where: { examId },
    create: { examId, ...state },
    update: state,
  });
  revalidatePath('/saved');
}

export async function submitExam(examId: string, answers: Record<number, number | number[]>) {
  const questions = await getExamQuestions(examId, 1);
  const score = calculateScore(questions, answers);

  await db.results.create({
    examId,
    answers: JSON.stringify(answers),
    score,
    submittedAt: new Date(),
  });

  revalidatePath(`/exam/${examId}/results`);
  return { score, questions: questions.length };
}

export async function loadSavedTest(examId: string) {
  return await db.savedTests.findUnique({ where: { examId } });
}

export async function deleteSavedTest(examId: string) {
  await db.savedTests.delete({ where: { examId } });
  revalidatePath('/saved');
}
```

### Phase 4: Data Fetching Pattern

**Server-side fetching**:
```typescript
// src/lib/exams/server.ts
export async function getExamQuestions(examId: string, testSet: number): Promise<Question[]> {
  const exam = examRegistry[examId];
  if (!exam) throw new Error(`Exam ${examId} not found`);

  // Dynamic import based on examId
  const questions = await loadQuestions(examId, testSet);
  return questions;
}

export async function getExamConfig(examId: string): Promise<ExamMetadata> {
  return examRegistry[examId];
}
```

**In Server Components**:
```typescript
export default async function ExamPage({ params }: { params: Promise<{ examId: string }> }) {
  const { examId } = await params;
  const [exam, questions] = await Promise.all([
    getExamConfig(examId),
    getExamQuestions(examId, 1),
  ]);

  return <ExamClient exam={exam} questions={questions} />;
}
```

### Phase 5: Loading States & Streaming

```typescript
// src/app/exam/[examId]/loading.tsx
export default function ExamLoading() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="animate-pulse text-muted-foreground">Loading exam...</div>
    </div>
  );
}

// With Suspense:
import { Suspense } from 'react';

export default async function ExamPage() {
  return (
    <Suspense fallback={<ExamLoading />}>
      <ExamContent />
    </Suspense>
  );
}
```

### Phase 6: Error Boundaries

```typescript
// src/app/exam/[examId]/error.tsx
'use client';

export default function ExamError({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4">
      <h2 className="text-2xl font-bold">Something went wrong</h2>
      <p className="text-muted-foreground">{error.message}</p>
      <button onClick={reset} className="btn-primary">Try again</button>
    </div>
  );
}
```

## Migration Order

1. **Create route structure** — add directories, keep old page.tsx working
2. **Migrate static pages** — home, categories (Server Components)
3. **Add server actions** — save, load, submit, delete
4. **Migrate exam flow** — setup, test, results, review
5. **Add loading/error states** — Suspense boundaries, error.tsx
6. **Remove old code** — delete phase-based page.tsx
7. **Update navigation** — replace `setPhase()` with `router.push()`

## URL State Mapping

| Old Phase | New Route |
|-----------|-----------|
| `home` | `/` |
| `category` | `/categories` |
| `exam-start` | `/exam/[examId]` |
| `exam` | `/exam/[examId]/test` |
| `results` | `/exam/[examId]/results` |
| `review` | `/exam/[examId]/review` |

## Navigation Updates

**Before**:
```typescript
setPhase('exam');
```

**After**:
```typescript
import { useRouter } from 'next/navigation';
const router = useRouter();
router.push(`/exam/${examId}/test`);
```

## Best Practices

1. **Server Components by default** — only use `'use client'` when needed
2. **Parallel data fetching** — `Promise.all` for independent queries
3. **Cache aggressively** — use `revalidate` for static data
4. **Error boundaries everywhere** — every route should have `error.tsx`
5. **Loading states** — every async route should have `loading.tsx`
6. **Type params** — always type `params` and `searchParams` as `Promise`
7. **Colocate** — keep route-specific components near their routes

## Verification

```bash
npm run build     # All routes build successfully
npm run dev       # All routes accessible
npm run lint      # No errors
```

Check:
- No `'use client'` in Server Components
- Server actions have `'use server'` directive
- All routes have loading.tsx and error.tsx
- Navigation uses `router.push()` not state

## When to Use This Skill
- Converting SPA to Next.js App Router
- Adding server-side rendering
- Implementing server actions
- Adding route-based navigation
- Improving SEO and performance
