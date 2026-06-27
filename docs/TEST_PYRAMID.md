# Test Pyramid & Automation Health

> Generated 2026-06-26. Use this to decide what to write next and what
> to retire.

## The pyramid in one sentence

| Layer | Count | Speed | Cost to maintain | Status |
|---|---|---|---|---|
| **Unit** (pure functions, isolated hooks) | 233 / 34 files | <1s | Low | **Healthy** |
| **Integration** (multiple units, real storage) | **0** | <2s | Low | **Missing** |
| **E2E** (full user flows in a real browser) | 33 / 5 files | ~2 min (sharded) | Medium | **Healthy** |
| **Accessibility** (axe-core) | 0 | <30s | Low | **Missing** |
| **Visual regression** (screenshot diff) | 0 | ~30s | Medium | **Missing** |
| **Performance** (Lighthouse / Web Vitals) | 0 | ~30s | Low | **Missing** |
| **Mutation** (Stryker) | 0 | ~3 min | Medium | **Missing** |
| **Property-based** (fast-check) | 0 | <2s | Low | **Missing** |
| **Cross-browser** (Firefox, WebKit) | 99 / 3 projects | ~2x of chromium | Medium | **Enabled** (chromium, firefox, webkit) |

## What the project has today

```
   /\
  /  \      E2E: 33 ✓
 /----\     A11y: ✗
/______\    Visual: ✗
        \
         \    Integration: 0  ← MISSING
          \
           \  Unit: 233 ✓
            \________________
```

This is closer to a **honeycomb** than a pyramid. The middle
(integration) layer is empty. The cost:

- Every interaction that involves **two units working together** is
  either covered by an E2E test (slow) or by a unit test that mocks
  one of the units (brittle, easy to mock the contract wrong).
- Storage corruption / quota / private-mode edge cases are
  **not unit-tested** because they require a real `localStorage`
  interaction that survives across hook instances.
- The `useAppState` orchestrator is uncovered (by design — see
  `docs/TESTING.md`) and has no integration tests either. If two
  hooks it composes change their contract, only E2E catches the
  break.

## Coverage by file (current)

| File | % Stmts | % Branch | What's uncovered |
|---|---|---|---|
| `useLocalStorage.ts` | 83.33 | 76.92 | Quota-exceeded path (lines 30-35) |
| `useExamActions.ts` | 98.02 | 97.36 | `reviewFlagged` edge cases (137, 154-155) |
| `useSubmitResults.ts` | 100 | 88.88 | Branch 39 (defensive fallback) |
| `study-history.ts` | 84.21 | 80.7 | Question analytics error paths (131-135, 142-147) |
| `utils.ts` | 100 | 93.75 | Empty-questions branch (55) |
| `shuffle.ts` | 100 | 85.71 | Fallback when correctIndices missing (22, 25) |
| `logger.ts` | 100 | 96.55 | Sensitive-key redaction check (98) |

**Total**: 96.84% lines / 93.42% branches. Above the 80% / 70%
threshold but the uncovered 3% is **all in error paths and
fallbacks** — exactly the code most likely to break in production.

## The missing layer: integration tests

For a 100% client-side app, the integration layer is **storage
roundtrips** and **hook composition**. Examples that should exist:

### Category A: Storage roundtrips

1. **Write through one hook, read through another**
   - Save a question note via `useNotes`, reload the page, confirm
     the note is still there.
   - Save an attempt via `useSubmitResults`, refresh, confirm it
     shows up in `ExamHistory`.

2. **Schema migration**
   - If a future version of `SavedTest` adds a field, old saved
     tests should load with a sensible default. **Today this is
     not tested at all.**

3. **Quota / private-mode failures**
   - Mock `localStorage.setItem` to throw, confirm the logger
     captures the error and the in-memory state still updates.

4. **Cross-tab sync (out of scope today, but worth a test stub)**
   - A `storage` event listener would let two tabs stay in sync.
     No such code today; if added, it needs a test.

### Category B: Hook composition

1. **`useTimer` + `useTimerAutoSubmit` together**
   - Already partially covered in `useTimerAutoSubmit.test.ts`,
     but the "timer.start() then auto-submit fires" sequence is
     only tested in isolation. A test that uses BOTH hooks
     together is missing.

2. **`useExamState` + `useExamActions` together**
   - Already done well in `useExamActions.test.ts`.

3. **`useAppState` wiring**
   - The orchestrator is uncovered. A test that mounts a real
     `AppProvider` and exercises the state machine
     (`home → category → exam-start → exam → results → history`)
     would catch contract changes in any of the 5 sub-hooks.

4. **AppContext + DialogState + ExitDialog interaction**
   - Open exit dialog, click "Save & Exit", confirm the save
     actually happened in localStorage. Already covered by E2E
     (`e2e/tests/exam/exam.spec.ts`), but the integration version
     would be 100x faster and more diagnostic.

### Category C: Storage edge cases

1. **Corrupted JSON**
   - Tested: `useLocalStorage` falls back to initial value.
   - Not tested: `study-history` JSON.parse fallback paths
     (lines 131-135, 142-147).

2. **Wrong shape**
   - `useLocalStorage<T>` is generic, but if the stored JSON is
     `null` when the caller expects `{}`, no runtime check
     exists. Today the consumer crashes. A defensive
     `typeof === 'object'` guard with a test would prevent this.

3. **Versioning**
   - The `exam-attempts-${examId}` and `question-analytics` keys
     have no version field. If a future migration needs to
     transform old data, the change is invisible to tests.

## What should be retired

- **No tests should be retired right now.** All 233 unit tests
  exercise real behavior. The 33 E2E tests are a coherent suite.
  The skill explicitly says "no `waitForTimeout`", and the suite
  honors it.

## Roadmap (priority order)

### P0 — this week (1-2 days)

1. **Add storage roundtrip integration tests** (~10 tests)
   - `useNotes` save + reload
   - `useSavedTests` add + reload + delete
   - `useSubmitResults` write + `getExamHistory` read
   - `study-history` corruption fallback (currently uncovered)

2. **Add quota / private-mode test** (~2 tests)
   - Mock `localStorage.setItem` to throw in `useLocalStorage`,
     confirm the error is logged and in-memory state still updates.

3. **Add `useTimer` + `useTimerAutoSubmit` composition test** (~3 tests)
   - This is the most-likely-to-break composition in the app:
     the timer must advance and the auto-submit must fire
     exactly once.

### P1 — this month (3-5 days)

4. **Add a thin "smoke" test** (~5 tests)
   - A new top-level `src/__smoke__/*.test.tsx` that renders each
     screen with a mocked `AppContext` and asserts no
     unhandled errors / console errors. Catches regressions
     when a refactor breaks a screen-level component.

5. **Add `AppContext` provider integration test** (~5 tests)
   - Mount a real `AppProvider`, walk through the state machine
     via direct calls to `setPhase`, confirm the right child
     renders at each step. Catches `useAppState` regressions.

6. **Add property-based tests for shuffle and seed** (~6 tests)
   - `fast-check` to generate 1000 random inputs and assert
     invariants:
     - `shuffleQuestions` always preserves the option multiset
     - `shuffleQuestions` always maps each original correct index
       to its shuffled position
     - `generateSessionSeed` returns integers in [0, 1_000_000)
     - `calculateExamDuration` is always > 0 and respects the
       15-min minimum

### P2 — this quarter (1-2 weeks)

7. **Accessibility tests** (~3-5 tests, new file)
   - `axe-core` in a Playwright test that runs against the home
     page, the start screen, and the exam screen. Asserts no
     violations.

8. **Visual regression** (chromatic or Playwright screenshot)
   - Out of scope for this project until the design stabilizes
     (post-UI-review implementation). When ready: 1 baseline
     snapshot per screen, diff threshold 0.1%.

9. **Mutation testing** (Stryker)
   - One-time audit (not a CI gate) to find tests that pass
     without testing anything. Stryker mutates the source and
     reports which mutants survive. Anything surviving is
     untested.

10. **Cross-browser E2E** (Firefox, WebKit)
    - **DONE 2026-06-27.** Playwright config now lists three
      projects (`chromium`, `firefox`, `webkit`). CI matrix runs
      all three in parallel as separate jobs (one per browser).
      All 33 tests pass on all 3 browsers locally (33×3 = 99
      tests). `package.json` scripts `test:e2e:chromium`,
      `test:e2e:firefox`, `test:e2e:webkit` are the per-project
      runners.

### P3 — when applicable

11. **Lighthouse CI / Web Vitals**
    - When the bundle size grows past 200KB gzip. Use
      `lighthouse-ci` with performance budgets.

12. **Dependency vulnerability scanning** (Snyk, npm audit --omit=dev)
    - Already have Dependabot. Add npm audit in CI as a
      non-blocking warning (Dependabot for blocking PRs).

13. **Secret scanning in CI** (gitleaks)
    - Belt-and-suspenders on top of `eslint-plugin-no-secrets`.
      Catches secrets the lint rule misses (e.g., in non-source
      files like docs or fixtures).

14. **Link checking** in `src/lib/study-resources.ts`
    - The hardcoded URLs in study resources break silently.
      A weekly cron that HEAD-checks each URL would catch
      bit-rot.

## How to measure "automation health"

Track over time (target values):

| Metric | Today | Target |
|---|---|---|
| Unit test count | 233 | 280+ (after P0/P1) |
| Integration test count | 0 | 25+ |
| E2E test count | 33 | 40+ |
| Lines of test code / lines of source | 1.4 | 1.5+ |
| Coverage (lines, src/hooks + src/lib) | 96.84% | 99% |
| Coverage (branches) | 93.42% | 95% |
| E2E duration (full sharded) | ~4m | <3m |
| E2E flake rate | 0% | <1% |
| Test files with skipped tests | 0 | 0 |

The first three metrics answer "is the pyramid balanced?". The
coverage metrics answer "are the existing tests deep enough?". The
duration / flake metrics answer "is the suite fast and reliable
enough that developers don't disable it?".

## How to use this document

When adding a new test, ask:

1. **Which layer?** Unit / integration / E2E / a11y / visual?
2. **What does it cover that nothing else does?** If two tests
   assert the same thing, delete one.
3. **Does it run in <2s?** If no, it's an E2E test and belongs in
   `e2e/tests/`.
4. **Does it use `page.waitForTimeout`?** If yes, rewrite as an
   assertion-based wait. If you can't, file an issue and tag it
   "flaky".
5. **Does the new code it covers have a corresponding unit test
   for the error path?** Add both at once.

When retiring a test, ask:

1. **Is it duplicating another test?**
2. **Is it testing a behavior that no longer exists?**
3. **Is it flaky and unfixable?** Quarantine it (move to a
   `__quarantine__/` folder) and re-enable when fixed.
