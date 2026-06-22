---
name: playwright-e2e-testing
description: Use when writing or maintaining Playwright E2E tests, fixing flaky tests, creating Page Object Models, configuring Playwright CI, or debugging test failures. Covers fixture-driven architecture, assertion-based waits, and Node v24 compatibility.
---

## Purpose
Author and maintain end-to-end tests using Playwright with a fixture-driven Page Object Model architecture. Enforce zero-flake testing, full type safety, and maximum code reuse.

## Architecture Overview

```
e2e/
├── fixtures/
│   └── index.ts          # Custom Playwright test fixture (single source of truth)
├── pages/                # Page Object Models — one per app screen
│   ├── HomePage.ts
│   ├── CategoryMenuPage.ts
│   ├── StartScreenPage.ts
│   ├── ExamScreenPage.ts
│   ├── ResultsScreenPage.ts
│   ├── ExamHistoryPage.ts
│   ├── ExitDialogPage.ts
│   ├── SubmitDialogPage.ts
│   └── index.ts          # Barrel export
├── steps/                # Step libraries — compose POMs into multi-screen workflows
│   ├── navigation.steps.ts
│   ├── exam.steps.ts
│   ├── theme.steps.ts
│   └── index.ts          # Barrel export
├── utils/
│   ├── constants.ts      # Exam IDs, answer options, category names
│   └── index.ts          # Barrel export
└── tests/                # Test spec files — one per app screen/flow
    ├── home/
    ├── category/
    ├── exam/
    ├── results/
    └── history/
```

## Core Principles

### 1. Fixture-Driven Dependency Injection
Always extend Playwright's `base.test` with custom fixtures instead of using raw `@playwright/test`.

```typescript
// e2e/fixtures/index.ts
import { test as base, expect, type Page } from '@playwright/test';
import { HomePage, ExamScreenPage } from '../pages';

type AppFixtures = {
  cleanPage: Page;
  homePage: HomePage;
  examScreenPage: ExamScreenPage;
  completedExamPage: Page;  // Context fixture
};

export const test = base.extend<AppFixtures>({
  cleanPage: async ({ page }, use) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    await cleanStorage(page);
    await page.reload();
    await page.waitForLoadState('networkidle');
    await use(page);
    await cleanStorage(page);
  },

  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },

  completedExamPage: async ({ page }, use) => {
    await cleanStorage(page);
    await completeFullExam(page);
    await use(page);
    await cleanStorage(page);
  },
});
```

**Import from fixtures, not from @playwright/test:**
```typescript
// CORRECT
import { test, expect } from '../../fixtures';

// WRONG — no custom fixtures available
import { test, expect } from '@playwright/test';
```

### 2. Three Fixture Tiers

| Tier | Name | Purpose | When to Use |
|------|------|---------|-------------|
| 1 | `cleanPage` | Auto-cleans storage, navigates to home | Simple page-level tests (home, category) |
| 2 | POM fixtures | Pre-instantiated Page Object Models | All tests — inject instead of `new HomePage(page)` |
| 3 | Context fixtures | Full workflow setup (e.g., `completedExamPage`) | Tests that need pre-existing state (results, history) |

### 3. Zero `waitForTimeout` Rule
**NEVER use `page.waitForTimeout()`**. This is the #1 cause of flaky tests.

| Pattern | Instead Of | Reason |
|---------|------------|--------|
| `await expect(locator).toBeVisible()` | `waitForTimeout(500)` then check | Auto-retries up to 5s |
| `await expect(locator).toContainText('...')` | `waitForTimeout(500)` then read text | Auto-retries |
| `await expect(locator).toBeEnabled()` | `waitForTimeout(500)` then check enabled | Auto-retries |
| `await page.waitForLoadState('networkidle')` | `waitForTimeout(1000)` | Waits for actual network idle |
| `await page.getByTestId('x').click()` | `waitForTimeout(100)` then click | Playwright auto-waits for clickability |

### 4. `testIdAttribute` Configuration
The app uses `data-test-id` (not the Playwright default `data-testid`).

```typescript
// playwright.config.ts
use: {
  testIdAttribute: 'data-test-id',
}
```

This enables `page.getByTestId('button-id')` to work with `data-test-id="button-id"`.

### 5. Page Object Model Conventions

Each POM class:
- Takes `Page` in constructor
- Exposes `Locator` properties for static elements
- Exposes methods for parameterized element access
- Exposes action methods that wrap interactions
- **Never** contains `waitForTimeout` or business logic assertions
- **Never** uses raw CSS selectors when a testId exists

```typescript
export class ExamScreenPage {
  readonly page: Page;
  readonly submitExamButton: Locator;
  readonly questionNavigatorItems: Locator;

  constructor(page: Page) {
    this.page = page;
    this.submitExamButton = page.getByTestId('submit-exam-button');
    this.questionNavigatorItems = page.locator('[data-test-id^="question-navigator-item-"]');
  }

  // Parameterized locator
  answerOption(questionIndex: number, option: 'a' | 'b' | 'c' | 'd') {
    return this.page.getByTestId(`answer-option-${questionIndex}-${option}`);
  }

  // Action method
  async selectAnswer(questionIndex: number, option: 'a' | 'b' | 'c' | 'd') {
    await this.answerOption(questionIndex, option).click();
  }
}
```

### 6. Step Library Conventions

Step classes compose POMs into multi-screen workflows. They:
- Take `Page` in constructor
- Instantiate POMs internally
- Chain POM method calls into business workflows
- Are exposed as fixtures for test specs

```typescript
export class ExamSteps {
  constructor(private page: Page) {}

  async answerAllQuestions() {
    const examScreen = new ExamScreenPage(this.page);
    const total = await examScreen.questionNavigatorItems.count();
    for (let i = 0; i < total; i++) {
      await examScreen.goToQuestion(i);
      await examScreen.selectAnswer(i, 'a');
    }
  }

  async submit() {
    const examScreen = new ExamScreenPage(this.page);
    const submitDialog = new SubmitDialogPage(this.page);
    await examScreen.submitExamButton.first().click();
    await expect(submitDialog.dialog).toBeVisible();
    await submitDialog.confirmSubmit();
  }
}
```

### 7. Test Spec Conventions

Every test spec must:
- Import `test` and `expect` from `../../fixtures`, never from `@playwright/test`
- Use fixture-provided POM instances via destructuring
- Use `test.step()` for logical groupings
- Use assertion-based waits (auto-retrying `expect` calls)
- Have zero local helper functions — all helpers live in fixtures or steps
- Define `beforeEach`/`afterEach` cleanup via fixtures, not inline

```typescript
import { test, expect } from '../../fixtures';

test.describe('Results Screen', () => {
  test('should display score', async ({ completedExamPage: page }) => {
    await test.step('Score correct is displayed', async () => {
      await expect(page.getByTestId('score-correct')).toBeVisible();
    });
  });
});
```

### 8. Test Isolation

- **Every test must be independent** — no serial mode dependency chains
- `cleanPage` fixture handles storage cleanup before/after
- Context fixtures (`completedExamPage`, `historyPage`) provide pre-built state without serial dependencies
- `fullyParallel: true` in config — all tests can run in parallel
- Never use `test.describe.configure({ mode: 'serial' })`

### 9. Type Safety

- `strict: true` in `e2e/tsconfig.json`
- **NO `any` types** — use `Page`, `Locator`, or proper custom types
- All helper functions use typed parameters
- All POM methods have explicit parameter types

### 10. Constants

Shared test constants live in `e2e/utils/constants.ts`:
```typescript
export const EXAM_IDS = {
  AWS_ML: 'aws-ml',
  AWS_SAA: 'aws-saa',
  ISTQB_FOUNDATION: 'istqb-foundation',
  ISTQB_GENAI: 'istqb-genai',
  ISTQB_AI: 'istqb-ai',
} as const;

export const ANSWER_OPTIONS = ['a', 'b', 'c', 'd'] as const;
export type AnswerOption = typeof ANSWER_OPTIONS[number];

export const CATEGORIES = {
  AWS: 'AWS Cloud',
  ISTQB: 'ISTQB Testing',
} as const;
```

## Anti-Patterns to Avoid

| Anti-Pattern | Why It's Bad | Fix |
|-------------|-------------|-----|
| `page.waitForTimeout(500)` | Flaky, slow, unreliable | Use `expect(locator).toBeVisible()` |
| Local `getByTestId(page: any, ...)` | Duplicates POM, no type safety | Use fixture-provided POM |
| `import { test } from '@playwright/test'` | No custom fixtures available | `import { test } from '../../fixtures'` |
| `test.describe.configure({ mode: 'serial' })` | Cascading failures, can't parallelize | Use context fixtures instead |
| `new HomePage(page)` in test body | Skips fixture system, manual lifecycle | Use `homePage` fixture |
| `cleanPage: any` parameter | No type safety | `cleanPage: Page` |
| Raw `page.locator('[data-test-id="..."]')` | Bypasses testIdAttribute config | Use `page.getByTestId('...')` |
| localStorage cleanup in `beforeEach` | Duplicated in every spec file | Use `cleanPage` fixture |
| `completeExam` function in test file | Duplicated business logic | Use `completedExamPage` fixture |
| Asserting on `textContent()` without null check | Runtime crash on missing text | Use `textContent ?? ''` |

## Context Fixture Design Pattern

Context fixtures encapsulate multi-step preconditions:

```typescript
// Fixture that completes an entire exam before the test starts
completedExamPage: async ({ page }, use) => {
  await page.goto('/');
  await page.waitForLoadState('networkidle');
  await cleanStorage(page);
  // Multi-step setup: navigate → start → complete → land on results
  await navigateToStartScreen(page, CATEGORIES.AWS, EXAM_IDS.AWS_ML);
  await startExam(page);
  await completeExam(page);
  await use(page);  // Test runs here with results screen visible
  await cleanStorage(page);  // Cleanup after test
},
```

## Playwright Config Best Practices

```typescript
export default defineConfig({
  fullyParallel: true,              // Maximize throughput
  use: {
    testIdAttribute: 'data-test-id', // Match app's attribute
    actionTimeout: 10000,            // Auto-wait timeout for actions
    navigationTimeout: 15000,        // Navigation timeout
    trace: 'on',                     // Full trace for debugging
    screenshot: 'only-on-failure',   // Screenshots on failure
    video: 'retain-on-failure',      // Video on failure
  },
});
```

## CI Pipeline

- 2-shard parallelism via matrix
- Official Playwright Docker image (`mcr.microsoft.com/playwright:v1.61.0-jammy`)
- Blob reporter for sharded reports, HTML reporter locally
- Artifact uploads for screenshots, traces, and merged reports

## Node v24 Compatibility: `PLAYWRIGHT_FORCE_ASYNC_LOADER=1`

**Critical**: On Node v24+, Playwright v1.61's `registerHooks` (sync hooks) path has a bug where `context.conditions` is not passed as an array, causing `TypeError: context.conditions?.includes is not a function` on any cross-file TypeScript import in test files.

**Workaround**: Set the `PLAYWRIGHT_FORCE_ASYNC_LOADER=1` environment variable to force Playwright to use the async ESM loader (`node:module.register()`) instead of the sync hooks API (`node:module.registerHooks()`). The async loader correctly passes `context.conditions` as an array.

This env var is set in:
- `package.json` scripts (all `test:e2e*` scripts)
- `.github/workflows/e2e-tests.yml` (CI pipeline)
- Must be set BEFORE Playwright starts, not inside `playwright.config.ts`

```json
// package.json
"test:e2e": "PLAYWRIGHT_FORCE_ASYNC_LOADER=1 playwright test"
```

```yaml
# .github/workflows/e2e-tests.yml
- name: Run Playwright tests
  run: PLAYWRIGHT_FORCE_ASYNC_LOADER=1 npx playwright test --shard=${{ matrix.shard }}
```

Never run `npx playwright test` directly without the env var on Node v24+. Use `npm run test:e2e` instead.

## Verification Commands

```bash
npx playwright test --reporter=list           # Run all tests
npx playwright test home --reporter=line       # Run specific suite
npx playwright test --workers=1                # Debug serially
npx playwright show-report                     # View HTML report
npx tsc --noEmit -p e2e/tsconfig.json          # Type-check e2e code
```

## When to Use This Skill

- Writing new E2E tests for any screen
- Fixing flaky tests (replace `waitForTimeout` with assertions)
- Adding new Page Object Models
- Creating new context fixtures for complex test preconditions
- Debugging test failures
- Reviewing test PRs for architecture compliance
- Configuring Playwright CI pipeline