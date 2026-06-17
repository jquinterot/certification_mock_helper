# Database Architect Skill

## Purpose
Design and implement a proper persistence layer to replace localStorage-only storage. Add database models, migrations, server actions, and data access patterns.

## Current State
The app uses `localStorage` for all persistence:
- Single storage key: `'aws-ml-exam-saved-tests'`
- Stores `SavedTest[]` with in-progress exam state
- No server-side data, no sharing, no analytics

## Recommended Stack

### Option 1: Prisma + SQLite (Simple, Self-Hosted)
Best for: Single-user, local-first, easy setup

```prisma
// prisma/schema.prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "sqlite"
  url      = "file:./dev.db"
}

model Exam {
  id          String   @id
  name        String
  category    String
  description String?
  passingScore Int     @default(70)
  results     Result[]
  savedTests  SavedTest[]
}

model SavedTest {
  id              String   @id @default(cuid())
  examId          String
  exam            Exam     @relation(fields: [examId], references: [id])
  mode            String   // 'full' | 'section'
  selectedDomain  String?
  testSet         Int
  answers         String   // JSON
  flags           String   // JSON
  currentQuestion Int      @default(0)
  timeElapsed     Int      @default(0)
  startedAt       DateTime @default(now())
  updatedAt       DateTime @updatedAt

  @@unique([examId, startedAt])
}

model Result {
  id          String   @id @default(cuid())
  examId      String
  exam        Exam     @relation(fields: [examId], references: [id])
  answers     String   // JSON
  score       Float
  passed      Boolean
  domainScores String? // JSON
  timeElapsed Int
  submittedAt DateTime @default(now())
}
```

### Option 2: Drizzle + PostgreSQL (Production-Ready)
Best for: Multi-user, scalable, cloud deployment

```typescript
// src/db/schema.ts
import { pgTable, text, integer, boolean, timestamp, jsonb, uuid } from 'drizzle-orm/pg-core';

export const exams = pgTable('exams', {
  id: text('id').primaryKey(),
  name: text('name').notNull(),
  category: text('category').notNull(),
  description: text('description'),
  passingScore: integer('passing_score').default(70),
});

export const savedTests = pgTable('saved_tests', {
  id: uuid('id').defaultRandom().primaryKey(),
  examId: text('exam_id').references(() => exams.id),
  mode: text('mode').notNull(),
  selectedDomain: text('selected_domain'),
  testSet: integer('test_set').notNull(),
  answers: jsonb('answers').$type<Record<number, number | number[]>>(),
  flags: jsonb('flags').$type<number[]>(),
  currentQuestion: integer('current_question').default(0),
  timeElapsed: integer('time_elapsed').default(0),
  startedAt: timestamp('started_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
});

export const results = pgTable('results', {
  id: uuid('id').defaultRandom().primaryKey(),
  examId: text('exam_id').references(() => exams.id),
  answers: jsonb('answers').$type<Record<number, number | number[]>>(),
  score: integer('score').notNull(),
  passed: boolean('passed').notNull(),
  domainScores: jsonb('domain_scores').$type<DomainScore[]>(),
  timeElapsed: integer('time_elapsed').notNull(),
  submittedAt: timestamp('submitted_at').defaultNow(),
});
```

## Implementation Steps

### Step 1: Install Dependencies
```bash
# For Prisma + SQLite
npm install prisma @prisma/client
npx prisma init

# For Drizzle + PostgreSQL
npm install drizzle-orm pg
npm install -D drizzle-kit @types/pg
```

### Step 2: Create Database Client
```typescript
// src/db/index.ts
import { PrismaClient } from '@prisma/client';

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };

export const db = globalForPrisma.prisma || new PrismaClient();

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = db;
```

### Step 3: Create Repository Layer
```typescript
// src/db/repositories/saved-tests.ts
import { db } from '../index';

export async function createSavedTest(data: CreateSavedTestInput) {
  return db.savedTest.create({
    data: {
      examId: data.examId,
      mode: data.mode,
      testSet: data.testSet,
      answers: JSON.stringify(data.answers),
      flags: JSON.stringify([...data.flags]),
      currentQuestion: data.currentQuestion,
      timeElapsed: data.timeElapsed,
    },
  });
}

export async function updateSavedTest(id: string, data: UpdateSavedTestInput) {
  return db.savedTest.update({
    where: { id },
    data: {
      answers: JSON.stringify(data.answers),
      flags: JSON.stringify([...data.flags]),
      currentQuestion: data.currentQuestion,
      timeElapsed: data.timeElapsed,
      updatedAt: new Date(),
    },
  });
}

export async function getSavedTests(examId?: string) {
  const where = examId ? { examId } : {};
  return db.savedTest.findMany({
    where,
    orderBy: { updatedAt: 'desc' },
  });
}

export async function deleteSavedTest(id: string) {
  return db.savedTest.delete({ where: { id } });
}
```

### Step 4: Update Server Actions
```typescript
// src/app/actions.ts
'use server';

import { createSavedTest, updateSavedTest, getSavedTests, deleteSavedTest } from '@/db/repositories/saved-tests';
import { createResult, getResults, getResult } from '@/db/repositories/results';
import { revalidatePath } from 'next/cache';

export async function saveTestProgress(data: SaveTestInput) {
  if (data.id) {
    await updateSavedTest(data.id, data);
  } else {
    await createSavedTest(data);
  }
  revalidatePath('/saved');
}

export async function submitExam(data: SubmitExamInput) {
  const result = await createResult(data);
  revalidatePath(`/exam/${data.examId}/results`);
  return result;
}

export async function loadSavedTests(examId?: string) {
  return getSavedTests(examId);
}

export async function removeSavedTest(id: string) {
  await deleteSavedTest(id);
  revalidatePath('/saved');
}
```

### Step 5: Create Seed Script
```typescript
// prisma/seed.ts
import { PrismaClient } from '@prisma/client';
import { examRegistry } from '../src/lib/exam-registry';

const prisma = new PrismaClient();

async function main() {
  for (const [id, exam] of Object.entries(examRegistry)) {
    await prisma.exam.upsert({
      where: { id },
      update: { name: exam.name, category: exam.category },
      create: {
        id,
        name: exam.name,
        category: exam.category,
        description: exam.description,
        passingScore: exam.passingScore,
      },
    });
  }
}

main().catch(console.error).finally(() => prisma.$disconnect());
```

### Step 6: Add Migrations
```bash
# Prisma
npx prisma migrate dev --name init
npx prisma db seed

# Drizzle
npx drizzle-kit generate
npx drizzle-kit migrate
```

## Data Access Patterns

### Repository Pattern
```
src/db/
  index.ts                    # Database client
  schema.ts                   # Schema definitions (Drizzle) or import from prisma/
  repositories/
    saved-tests.ts            # Saved test CRUD
    results.ts                # Results CRUD
    exams.ts                  # Exam metadata
  migrations/                 # Migration files
  seed.ts                     # Seed data
```

### Server Action Pattern
```typescript
'use server';

import { z } from 'zod';
import { revalidatePath } from 'next/cache';
import { savedTestRepository } from '@/db/repositories/saved-tests';

const saveTestSchema = z.object({
  examId: z.string(),
  mode: z.enum(['full', 'section']),
  answers: z.record(z.union([z.number(), z.array(z.number())])),
  // ...
});

export async function saveTest(input: z.infer<typeof saveTestSchema>) {
  const validated = saveTestSchema.parse(input);
  const result = await savedTestRepository.create(validated);
  revalidatePath('/saved');
  return result;
}
```

## Migration from localStorage

### Dual-Write Strategy (Transition Period)
```typescript
// During migration, write to both
export async function saveTestProgress(data: SaveTestInput) {
  // Write to database
  await db.savedTest.create({ data });

  // Also write to localStorage for backward compatibility
  const existing = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
  existing.push(data);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(existing));
}
```

### One-Way Migration Script
```typescript
// Run once to migrate existing data
export async function migrateLocalStorageToDB() {
  const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
  for (const test of saved) {
    await db.savedTest.create({ data: test });
  }
  localStorage.removeItem(STORAGE_KEY);
}
```

## Verification

```bash
npx prisma generate    # Generate client
npx prisma migrate dev # Run migrations
npm run build          # Build passes
npm run dev            # App works with DB
```

## When to Use This Skill
- Replacing localStorage with proper database
- Adding server-side persistence
- Implementing user accounts and data sharing
- Adding analytics and result tracking
- Scaling to multiple users
