# Architecture & Testing Review (2026-06-26)

One-time review capturing the current state of testing, quality, and
security in the project, and what was done about it.

## Headline numbers

- **233 unit tests / 34 files** (99.5% line coverage on `src/hooks`+`src/lib`)
- **33 E2E tests / 5 spec files** (Playwright, chromium)
- **2 lint errors → 0** after security plugin install
- **0 missing HTTP security headers → all 8 set** (CSP, HSTS, X-Frame, etc.)
- **No pre-commit hook → Husky + lint-staged** installed

## Why these gaps existed

The unit + E2E setup landed in a single large commit. The focus was
on functional coverage (does the app work?) rather than on
defense-in-depth (does the app fail safely?). The screen-level
components and the `useAppState` orchestrator were excluded from
unit tests by design — covered only by E2E. That trade-off was
documented in `docs/TESTING.md` but not revisited.

Security was treated as "static hosting does it for us" — true for
some headers, false for the missing CSP. The trade-off wasn't
documented anywhere.

## Testing gaps found

| # | Gap | Why it was missed | Status |
|---|---|---|---|
| 1 | 4 untested pure components (`InfoCard`, `ModeCard`, `TestSetCard`, `ExamInfo`) | They were inside a sub-folder the initial sweep didn't cover | **Fixed**: 14 new tests added |
| 2 | 6 screen components (`HomePage`, `CategoryMenu`, `ExamScreen`, `ResultsScreen`, `StartScreen`, `ExamHistory`) with no unit tests | "E2E covers it" — true for happy path, false for error branches | **Accepted**: documented in `TESTING.md`; E2E suite covers them |
| 3 | `useAppState` (295-line orchestrator) untested | Intentionally excluded from coverage; relies on E2E | **Accepted**: same reasoning |
| 4 | No accessibility / keyboard navigation tests | Suite was scoped to "does it work", not "does it work for everyone" | **Open**: see roadmap below |
| 5 | No visual regression tests | Same | **Open** |
| 6 | No Web Vitals / performance budget in CI | Same | **Open** |
| 7 | No Firefox / WebKit E2E (config exists, never run) | CI is chromium-only to keep PR feedback fast | **Open** |
| 8 | No save-and-resume E2E flow | The `useSavedTests` hook has unit tests; the full save → reload → resume user flow does not | **Open** |

## Security gaps found and fixed

| # | Gap | Fix |
|---|---|---|
| S1 | No `Content-Security-Policy` header | Added in `next.config.ts` with `default-src 'self'`, `frame-ancestors 'none'`, `connect-src 'self'`, no inline scripts |
| S2 | No `eslint-plugin-security` | Added; high-signal rules as `error`, noisy rules as `warn` |
| S3 | No `eslint-plugin-no-secrets` | Added as `warn` (heuristic, not perfect) |
| S4 | No pre-commit gate | Husky + lint-staged run ESLint + related unit tests on staged files |
| S5 | No documented threat model | `docs/THREAT_MODEL.md` |
| S6 | No documented quality bar | `docs/QUALITY.md` |

## Quality gaps found and fixed

| # | Gap | Fix |
|---|---|---|
| Q1 | Three bare `console.error` calls scattered across the codebase | Replaced with `logger.error` (and `logger.warn` for previously-silent JSON.parse failures) |
| Q2 | `localStorage` writes in `study-history.ts` could throw and crash the app silently | Wrapped in `try/catch` + `logger.error` |
| Q3 | No "what counts as quality" doc | `docs/QUALITY.md` defines tiers (pre-commit / CI / review) and the rule-severity policy |

## Other levels of testing recommended (roadmap, not done)

These were considered but not implemented in this pass. Each has
clear value; none is urgent given the current size of the app.

| Layer | What it catches | When to add |
|---|---|---|
| **axe-core / @axe-core/playwright** | Accessibility regressions | When the first a11y bug is reported, or before adding any new interaction-heavy component |
| **Visual regression** (Chromatic or Playwright screenshot diff) | Unintended CSS changes, theme bugs, dark-mode contrast | When the design stabilizes (post-ISTQB Foundation question audit) |
| **Lighthouse CI / Web Vitals assertions** | LCP, FID, CLS regressions | When the bundle size grows past 200KB gzip |
| **Mutation testing** (Stryker) | Tests that pass without testing anything | Periodically, as a quality audit |
| **Property-based testing** (fast-check) | Edge cases in `shuffleQuestions`, `generateSessionSeed`, `calculateExamDuration` | When the seed/shuffle logic gets non-trivial (e.g., when adding anti-cheat) |
| **Firefox + WebKit E2E** | Browser-specific bugs | When the user base expands beyond chromium |
| **Dependency scanning** (Snyk, Trivy) | CVEs in transitive deps | When Dependabot alerts are no longer enough |
| **Secret scanning** (gitleaks in CI) | Tokens leaked in PRs | Already partially covered by `eslint-plugin-no-secrets`; gitleaks would be belt-and-suspenders |
| **SBOM / license audit** | License incompatibilities, supply-chain visibility | Before publishing the project publicly |
| **E2E for save-and-resume** | The flow the user actually wants to test | Before tagging a v1.0 release |

## Where the architecture-level rules live now

- **HTTP headers** → `next.config.ts`
- **Lint rules + security plugins** → `eslint.config.mjs`
- **Coverage thresholds** → `vitest.config.ts`
- **Pre-commit hook** → `.husky/pre-commit` + `package.json` `lint-staged`
- **CI pipeline** → `.github/workflows/ci.yml`
- **Quality bar** → `docs/QUALITY.md`
- **Threat model** → `docs/THREAT_MODEL.md`
- **Testing strategy** → `docs/TESTING.md`
- **Architecture overview** → `docs/ARCHITECTURE.md`
