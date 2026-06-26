# Testing Strategy

The certification-mock-helper app uses a two-layer testing strategy: **unit
tests** for hooks, lib functions, and pure components, and **end-to-end
tests** for full user flows. The full pipeline (lint + build + unit + e2e)
runs on every push and pull request via GitHub Actions.

## TL;DR

| Layer | Tool | Location | Count |
|---|---|---|---|
| Unit tests | Vitest + React Testing Library | `src/**/*.{test,spec}.ts(x)` | 208 tests / 29 files |
| E2E tests | Playwright | `e2e/tests/**/*.spec.ts` | 33 tests |
| CI pipeline | GitHub Actions | `.github/workflows/ci.yml` | 4 jobs (lint, build, unit, e2e) |

```bash
npm test          # one-shot unit tests
npm run test:watch
npm run test:coverage     # runs unit tests + coverage thresholds
npm run test:e2e          # Playwright e2e (requires `npm run build` first)
npm run lint && npm run build && npm run test:coverage && npm run test:e2e
```

## Coverage

- Provider: `@vitest/coverage-v8`
- Scope: `src/hooks/**` and `src/lib/**` (data files in `src/lib/exams/**`,
  the `constants/` data folder, and the `useAppState`/`useExam` orchestrators
  are excluded)
- Thresholds (enforced by Vitest): **80% lines/statements/functions, 70% branches**
- Current coverage: **~99% lines / 95% branches**

## Unit Test Conventions

### File location
Tests live next to the file they cover, named `*.test.ts(x)`:

```
src/hooks/useTimer.ts
src/hooks/useTimer.test.ts        ✓
src/lib/utils.ts
src/lib/utils.test.ts             ✓
src/components/ExitDialog.tsx
src/components/ExitDialog.test.tsx ✓
```

### Shared infrastructure
- `test/setup.ts` — `jest-dom` matchers, `localStorage.clear()` before each
  test, RTL `cleanup()` after each, restores spies and switches back to real
  timers.
- `test/utils/render.tsx` — `renderWithProviders(ui, { appContextValue })`
  wraps the component in an `AppContext.Provider` so components that call
  `useApp()` can be tested in isolation.
- `test/utils/factories.ts` — `makeQuestion`, `makeShuffledQuestion`,
  `makeSavedTest`, `makeAttempt` produce sane defaults so each test only
  specifies what it cares about.

### What we test
- **All** exported functions in `src/lib/**` (excluding data files).
- **All** hooks in `src/hooks/**` *except* `useAppState` (orchestrator; covered
  by E2E) and `useExam` (thin composer; covered via the underlying hooks).
- **Pure components only**: dialogs, the theme toggle, error boundary,
  question card, navigator, and notes. Screen components (HomePage,
  ExamScreen, ResultsScreen, StartScreen) are tested via E2E.

### Path alias
`@/test/...` resolves to `./test/...` (project root), and `@/...` to
`./src/...`. The order matters in `vitest.config.ts`: list the more specific
alias first.

### Mocking strategy
- **localStorage**: automatically reset in `test/setup.ts`. Tests that exercise
  persistence read the raw value via `JSON.parse(localStorage.getItem(...))`.
- **Date / time**: use `vi.spyOn(Date, 'now').mockReturnValue(...)` for
  deterministic timestamps.
- **`generateSessionSeed`**: mocked per-file with `vi.mock('@/lib/exam-duration')`
  to produce predictable seeds (e.g., when asserting on question ordering).
- **Components using `useApp()`**: pass a partial `appContextValue` to
  `renderWithProviders` containing only the methods the component needs.

### Test ID attribute
The app uses `data-test-id="..."` (with a hyphen) consistently. Vitest's
`getByTestId` is configured to recognise this in `test/setup.ts` via
`configure({ testIdAttribute: 'data-test-id' })`.

## E2E Test Conventions

- **Tool**: Playwright (chromium only).
- **Location**: `e2e/tests/<feature>/<file>.spec.ts`. One feature per
  folder; each `spec.ts` covers a single page or flow.
- **Fixtures**: defined in `e2e/fixtures/` and replayed via `useState` in
  localStorage before each test.
- **Workers**: limited to 3 to avoid test pollution from shared localStorage.
- **Timeouts**: 120s for the long "complete exam" test, 30s default.
- **Reports**: blob report merged in CI and uploaded as a single HTML
  artifact.

## CI Pipeline

`.github/workflows/ci.yml` runs four jobs in parallel; the e2e job waits
on the other three before starting.

1. **Lint** — `npm run lint` (ESLint with the Next.js preset).
2. **Build** — `npm run build` (Next.js production build).
3. **Unit Tests + Coverage** — `npm run test:coverage` and a second run to
   enforce thresholds. Uploads the `coverage/` directory.
4. **E2E Tests** — sharded 1/2 + 2/2 in a Playwright container, then a
   `merge-reports` job that produces a single HTML report.

All four must pass before a PR can be merged.

## Adding a New Test

1. **Pure function / utility**: add `src/lib/<file>.test.ts` using the
   factories in `test/utils/factories.ts` if you need questions/attempts.
2. **Hook**: add `src/hooks/use<Name>.test.ts`. Use `renderHook` +
   `@testing-library/react`. Use `act()` for state updates. For hooks that
   read/write `localStorage`, the setup file resets storage between tests.
3. **Pure component**: add `src/components/<Component>.test.tsx`. If the
   component uses `useApp()`, pass an `appContextValue` mock to
   `renderWithProviders`. Otherwise use plain `render`.
4. **Screen component / full flow**: add a Playwright test under
   `e2e/tests/<feature>/`.
5. **Run locally**:
   ```bash
   npm run test:coverage         # unit
   npm run test:e2e              # e2e (after npm run build)
   ```
6. **Push**: the CI pipeline will run all four jobs and report the
   results.

## Common Pitfalls

- **`renderHook` captures stale state**: when one hook's behaviour depends on
  another hook's state, call them inside the *same* `renderHook` callback
  (see `src/hooks/useExamActions.test.ts`). Using two separate `renderHook`
  calls means the second hook sees the initial state of the first.
- **`@testing-library/dom` strict mode**: `getByTestId` throws if the
  element is missing. Use `queryByTestId` when the absence is the
  expected outcome.
- **`Math.random` in seed tests**: mock `generateSessionSeed` to assert on
  order changes deterministically. Without a mock, two consecutive calls
  may produce the same shuffle by sheer luck.
- **Multi-response questions**: the answer can be `number | number[]`. When
  constructing a ShuffledQuestion with `makeShuffledQuestion`, pass
  `correctAnswer: [0, 2]` *and* `shuffledCorrectIndex: [0, 2]` so both the
  raw and shuffled views stay consistent.
