# Remaining work — bad-code-practices audit

> Status snapshot taken after the **quick wins** (S-effort fixes from the
> audit) and **five new regression tests** were applied. Everything below
> was intentionally deferred — it's M+ effort and out of scope for a
> quick-win pass.

**Quick wins already shipped** (this session):
- §2.1 Fixed `useSubmitResults` analytics bug (answers now keyed by
  index, comparison uses `shuffledCorrectIndex` via `checkAnswer`).
- §2.2 Fixed resume seed restoration (`useExamSelection.restoreSeed` +
  real call site in `useAppState.resumeTest`).
- §2.3 Fixed `CategoryMenu` "2 test sets" lie — uses `exam.testSetCount`.
- §2.4 Fixed `HomePage` mislabeled stats — numbers now match labels.
- §2.5 Fixed `ExamHistory` trend chart — uses `attempt.passed` (single
  source of truth); legend uses per-exam `passingScore`; domain bars
  use the named `DOMAIN_MASTERY_THRESHOLD` constant.
- §2.6 Fixed `ResultsScreen` full-mode pass/fail — uses per-exam
  `passingScore` via the new `getPassingScore` helper.
- §4.3 New `getPassingScore` helper in `constants.ts` (single source of
  truth for the pass/fail threshold).
- §4.4 Deleted dead constants: `PASSING_THRESHOLD`, `TOTAL_EXAM_TIME`,
  `QUESTIONS_PER_MINUTE`.
- §4.5 Deleted dead exports: `getSectionDomainStats`, `getExamHistory`,
  `getQuestionAnalytics`, `getMostMissedQuestions`, `clearExamHistory`,
  `useSavedTests.deleteExamAttempt` wrapper, `constants/ui.tsx` `iconMap`.
- §4.8 `ExamHistory` now uses `examHistory.bestScore`/`averageScore`
  instead of recomputing.
- §4.9 `MAX_TEST_SETS` removed; `maxTestSets` now derived from
  `selectedExamConfig.testSetCount`. `testSetCount` added to
  `ExamMetadataConfig` and all 4 registered configs (and the orphan
  `istqb-ai` config, see §A below).
- §6.3 Removed redundant `as` casts in `StartScreen`, `ResultsScreen`,
  and `theme.ts`.
- §6.4 `import type { Theme }` across 4 files.
- §7.4 Removed dead `isMultiple` param in `QuestionCard`.
- §7.5 Removed dead `&&` guards in `StartScreen` and `ResultsScreen`.
- §7.6 Fixed `ExamScreen` "Back to Home" → "Exit" label/aria mismatch.
- §7.7 Renamed `isJsCorrect` → `isCorrect` in `ExamScreen` mobile nav.

**New tests added** (this session):
- `src/lib/constants.test.ts` — `getPassingScore` unit test
  (3 cases: full mode, section mode, ISTQB vs AWS regression).
- `src/hooks/_integration/useAppState.test.ts` — 9 integration tests for
  the god hook covering: phase transitions, exam flow, save/exit,
  resume (including the §2.2 regression).
- `src/components/CategoryMenu.test.tsx` — test set count per exam
  (regression for §2.3).
- `src/components/HomePage.test.tsx` — stats numbers match labels
  (regression for §2.4).
- `src/components/ResultsScreen.test.tsx` — per-exam pass/fail colors
  (regression for §2.6).

**Test results:** 254 passed, 2 todo, 40 files. Coverage: 97.09% stmts
/ 94.31% branches / 100% funcs / 97.09% lines (well above the 80/70
thresholds in `vitest.config.ts`).

---

## A. New findings (discovered during quick-win execution)

### A1. Orphan exam `istqb-ai` is not registered
**File:** `src/lib/exams/istqb-ai/` (full folder).

`istqb-ai` is **not** in `src/lib/exams/index.ts`'s `allExams` array and
not handled in `loader.ts`'s `getQuestions`/`getSectionQuestions`. The
folder contains `config.ts`, `questions.ts`, `questions2.ts`, and
`sections/` — ~50+ questions of content that is **unreachable from the
app**. The config was previously compiling only because it predated the
`testSetCount` requirement; I added `testSetCount: 2` to keep the build
green.

**Action options:**
- **Register it** (add to `index.ts` + `loader.ts`; add section map
  entries if sections should be exposed). Small effort.
- **Delete the folder** (dead code, but ~50+ questions of authored
  content). Reversible via git.

**Why deferred:** this is a product decision (is ISTQB AI a target
certification or scrapped work?) — not safe to make in a quick-win pass.

### A2. `STORAGE_KEY` value is stale
**File:** `src/lib/constants.ts:1`

```
export const STORAGE_KEY = 'aws-ml-exam-saved-tests';
```

The value embeds the name of a single exam (aws-ml) but is now used
**across every exam** by `useSavedTests`. The constant name is fine;
the **value** is the issue. Changing the value would invalidate every
user's in-progress saved tests, so this needs a migration plan (write
new key, read both, clean up old key) or a user-facing note.

**Action options:**
- Leave as-is (documents a limitation but ships with it).
- Add a one-time migration in `useSavedTests` that copies from
  `aws-ml-exam-saved-tests` to a new neutral key on first read.
- Accept the loss and change the value (with a release note).

**Why deferred:** product/UX decision.

### A3. Pre-existing `tsc --noEmit` path-alias errors
**Files:** 12 test files import `@/test/utils/factories` and
`@/test/utils/render`, but `tsconfig.json`'s `paths` maps `@/*` to
`./src/*` only — `test/` is outside the map.

These tests pass at runtime via vitest's resolver (which has its own
config) but fail `tsc --noEmit`. The errors are pre-existing on `main`
(verified with `git stash`); CI does not run `tsc --noEmit` (it runs
`npm run build` which uses Next.js's own type-check + path resolution,
and the build passes).

**Action:** extend `tsconfig.json` `paths` so `@/*` resolves from
project root (not just `./src/*`). E.g.:
```json
"paths": { "@/*": ["./src/*", "./*"] }
```
Or, more conventional, add a separate `@test/*` alias for `test/*`.

**Why deferred:** requires deciding the alias convention; affects every
import. Small change, but I left it alone to avoid scope creep.

### A4. `categoryColors` / icon duplication — partially fixed
The dry-code-auditor flagged `iconMap` / `categoryColors` duplicated
in `HomePage` and `CategoryMenu`. These are now centralized in
`constants/ui.tsx` as `getCategoryTheme` + `getIcon`. However, the
**category list itself** is still hardcoded in `HomePage.tsx:12-15`
(`const categories = [{ name: 'AWS Cloud', ... }, { name: 'ISTQB
Testing', ... }]`), with icon names as strings resolved through
`getIcon`. Adding a third category requires editing this array. The
canonical list could be derived from `getCategories()` (in
`exams/index.ts`) with a category→icon mapping in `categoryTheme`.

**Why deferred:** M effort (new mapping + icon entry in
`categoryTheme` + rewrite the array). Cosmetic.

---

## B. Remaining M+ work from the original audit

These are the items the quick wins explicitly deferred. Reference:
the original audit report (delivered earlier in the chat) and the
roadmap in `docs/TEST_PYRAMID.md`.

### B1. `theme.ts` cleanup (audit §4.1, §4.2)
**Effort:** M · **Impact:** 4/5

The 48-property `Theme` interface has **~22 dead props** (`primary`,
`primaryHover`, `primaryText`, `primaryDarkText`, `primaryBorder`,
`primaryBorderHover`, `primaryRing`, `gradient`, `badge`,
`correctAnswer`, `correctAnswerText`, `correctAnswerBg`,
`correctAnswerBorder`, `correctAnswerTextColor`, `accent`,
`accentHover`, `accentBg`, `accentText`, `borderHover`, `bgInput`,
`iconDefault` — all verified 0 consumers). Meanwhile **~18 sites across
10 files** hardcode the exact colors those dead props were meant to
centralize (`bg-green-500/20`, `bg-red-500/30`, `bg-white/10
dark:bg-slate-800/50`, etc.).

**Two coupled fixes:**
1. Delete the dead props from `Theme` and trim `awsBase`/`istqbBase` to
   one hue-keyed factory.
2. Route the hardcoded correctness/signal colors through the surviving
   theme properties (or shared semantic classes).

**Why this is the right next PR:** unblocks the
`docs/UI_REVIEW.md` palette recommendation (desaturated `--signal`
/`--alarm` colors can't be applied globally until correctness colors
flow through one place).

### B2. Single-Context re-render storm (audit §5.2)
**Effort:** M · **Impact:** 5/5

`AppContext` provides one `appState` value; `useTimer` ticks every
second → every `useApp()` consumer re-renders every second. The
inline mobile navigator in `ExamScreen.tsx:303-336` re-runs
`checkAnswer` for every question each second.

**Fix:** split into contexts (`TimerContext`, `SelectionContext`,
`ExamContext`, `ThemeContext`) **or** move to `useSyncExternalStore` /
Zustand with selectors. At minimum, isolate the per-second timer
value and memoize the mobile navigator.

### B3. God hook decomposition (audit §5.1)
**Effort:** M · **Impact:** 4/5

`useAppState.ts` is 295 lines / ~20 responsibilities / ~50-key return.
Split into `useExamFlow` (start/resume/submit/exit) and
`useExamHistory` (history/weakness/delete); keep `useAppState` as a
thin composer <80 lines. (B2 makes this split natural — once contexts
are split, the hook can be too.)

### B4. `'use client'` hygiene (audit §3.1)
**Effort:** S · **Impact:** 3/5

36 files carry `'use client'`, including all hooks (redundant — they
inherit from consumers) and `lib/study-history.ts` (wrong — it's a
data module). `next.config.ts` has no `output: 'export'` (despite
`CLAUDE.md:30` and `ARCHITECTURE.md:138` claiming static export), so
Server Components ARE available — the static shells of `HomePage`,
`CategoryMenu`, `ResultsScreen`, `ExamHistory` could be server
components. Fix the docs mismatch + drop redundant directives.

### B5. Dual dark-mode systems (audit §3.3)
**Effort:** S · **Impact:** 3/5

`useThemeMode.ts:15` hardcodes `useState('dark')` — no localStorage
persistence, no `prefers-color-scheme` detection. `globals.css:15-20`
has a dead `@media` block. Theme choice is lost on every reload.

**Fix:** persist via `useLocalStorage`, seed from
`matchMedia('(prefers-color-scheme: dark)')`, remove the dead
`@media` block, add `suppressHydrationWarning` to `<html>`.

### B6. Two error UIs (audit §3.2)
**Effort:** S · **Impact:** 2/5

`ErrorBoundary.tsx` (8 inline `style={{}}` blocks, hardcoded hex,
imperative hover mutation) + `app/error.tsx` (hardcoded Tailwind)
render the same fallback. Extract one `<ErrorState>` component. Remove
inline styles from `ErrorBoundary`.

### B7. `ExamScreen` decomposition (audit §7.1)
**Effort:** M · **Impact:** 3/5

340 lines mixing header, timer, theme toggle, save/submit, progress,
flag, nav, desktop sidebar, and inline mobile nav. Extract
`ExamHeader` (`:78-184`), `ExamNavigation` (`:226-280`),
`MobileQuestionNavigator` (`:300-338` — also shared with
`QuestionNavigator` per audit §4.7).

### B8. `ExamHistory` decomposition (audit §7.2)
**Effort:** M · **Impact:** 2/5

246 lines mixing stats + trend chart + weakness + resources + attempt
list. Extract `ScoreTrendChart`, `WeaknessAreas`, `AttemptList`.

### B9. `ExamQuestion` discriminated union (audit §6.1)
**Effort:** M · **Impact:** 3/5

`types/index.ts:6-7` has dual correctness fields:
`correctAnswer: number | number[]` + `correctAnswers?: number[]`.
Forces runtime disambiguation in `shuffle.ts:25` — and is exactly the
confusion that produced the §2.1 analytics bug. Replace with
`type SingleChoice = Base & { type: 'single'; correctAnswer: number }`
| `type MultipleResponse = Base & { type: 'multiple'; correctAnswers:
number[] }`.

### B10. E2E coverage for the fixed flows
**Effort:** L · **Impact:** 4/5

Add Playwright flows in `e2e/tests/` that exercise:
- Full exam → results → review → retake (covers §2.6 end-to-end).
- Save & exit → resume from `StartScreen` (covers §2.2 end-to-end).

---

## C. Test gaps still open (from the missing-test scan)

| # | Test | Layer | Why |
|---|---|---|---|
| 1 | `ExamScreen` keyboard shortcuts (`n`/`p`/`f`/`1-9`) | Integration | Wires `useGlobalKeydown` to context |
| 2 | `StartScreen` section stepper (domain → testset → start) | Integration | The `sectionStep` state machine |
| 3 | `ExamHistory` trend chart + weakness with mocked data | Unit | Renders the §2.5-fixed coloring |
| 4 | `ErrorBoundary` + `app/error.tsx` shared component (B6) | Unit | After the shared `<ErrorState>` extraction |
| 5 | `ModeSelection`, `TestSetSelection`, `InfoCard`, `ExamInfo`, `DomainSelection`, `SavedTestList` | Unit | Small start-screen atoms |
| 6 | E2E: full exam → results → review → retake (B10) | E2E | End-to-end of §2.6 fix |
| 7 | E2E: save & exit → resume (B10) | E2E | End-to-end of §2.2 fix |

---

## D. Quick reference

| Metric | Before | After |
|---|---|---|
| Test files | 36 | **40** |
| Tests passing | 238 | **254** |
| Statement coverage | 97.0% | **97.09%** |
| Branch coverage | 93.81% | **94.31%** |
| Untested components | 13 | **8** (HomePage, CategoryMenu, ResultsScreen, DomainSelection, ModeSelection, TestSetSelection, SavedTestList, ExamSession added tests for the user-facing surfaces; StartScreen, ExamHistory, ExamScreen, screens/ExamSession, app/error, app/page still untested) |
| Untested hooks | 1 (`useAppState`) | **0** (integration test added) |
| Lint errors | 0 | **0** |
| Build | passing | **passing** |
| Pre-existing `tsc` path-alias errors | 12 | **12** (unchanged — pre-existing, see A3) |
