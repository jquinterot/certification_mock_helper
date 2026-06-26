# Quality Standards

This document defines what "quality" means for the certification-mock-helper
codebase and how it is enforced as part of the architecture (not bolted on).

## Principle

> Quality is a property of the system, not a step at the end of a sprint.
> Every commit must keep the system at the bar; nothing below the bar is
> allowed to merge.

The bar is enforced at three checkpoints: **local** (pre-commit), **CI**
(per-push), and **review** (pull request). Removing any of them weakens the
whole.

## Local enforcement — pre-commit

- **Husky** runs on every `git commit`.
- **lint-staged** runs ESLint (with `--fix`) and the unit tests related to
  staged files.
- A commit cannot land with lint errors or unit test failures in the
  files it touches.
- The hook is installed automatically by `npm install` (via the `prepare`
  script).

Config: `.husky/pre-commit`, `package.json` `lint-staged` block.

## CI enforcement — per push

`.github/workflows/ci.yml` runs four parallel jobs. **All four must pass.**

| Job | What it catches |
|---|---|
| Lint | ESLint errors (security + quality + Next.js rules) |
| Build | TypeScript errors, Next.js build failures |
| Unit Tests + Coverage | Logic regressions; coverage drops below 80% lines / 70% branches fail the build |
| E2E Tests (sharded) | Full user-flow regressions on real Chromium |

Coverage is enforced by `vitest.config.ts` thresholds:
- 80% lines / functions / statements
- 70% branches
- Scope: `src/hooks/**`, `src/lib/**`

## ESLint rule severity tiers

`eslint.config.mjs` defines three tiers, each with a different reaction:

| Tier | Examples | Severity | Why |
|---|---|---|---|
| High-signal security | `eval`, `new Buffer`, unsafe regex, pseudo-random bytes, bidi-characters, non-literal regex | `error` | Real attack surface, low false-positive rate |
| Noisy-but-useful | `detect-object-injection` | `warn` | High false-positive rate, but worth surfacing for review |
| Secret scanning | `no-secrets/no-secrets` | `warn` | Catches leaked API keys, occasionally flags identifiers |

A new rule must justify its tier in a code comment next to the `rules:`
entry.

## Type safety

- `strict: true` in `tsconfig.json`.
- No `any` in `src/` (test fixtures and `test/utils/factories.ts` are
  excluded by design).
- Unknown payloads from `localStorage` go through `try/JSON.parse/catch`
  with `logger.warn` — never crash the app on malformed data.

## Test bar

- New lib / hook code: must have unit tests in the same file
  (`*.test.ts(x)`).
- New pure component: must have a `*.test.tsx` with at least one
  rendering test, one interaction test, and one state-driven test.
- New screen component: must have an E2E test in `e2e/tests/`.
- New error path: must have a unit test that exercises the failure
  branch.

See `docs/TESTING.md` for the full conventions.

## Code review checklist

Every PR should be reviewed against:

- [ ] Does it pass the local pre-commit hook?
- [ ] Does it pass all four CI jobs?
- [ ] Does it add tests for new code?
- [ ] Does it cover the new error path?
- [ ] Does it touch `useAppState`, `next.config.ts`, or `eslint.config.mjs`?
      → get a second reviewer.
- [ ] Does it introduce a new dependency? → explain why in the PR body.
- [ ] Does it log via `logger` (never `console.*`)?
- [ ] Does it use `data-test-id` for elements users interact with?
- [ ] Are magic strings/numbers extracted to `src/lib/constants.ts`?

## Quality metrics to track

The CI artifacts include:

- `coverage/` HTML report (uploaded per push)
- `playwright-merged-report` HTML report (uploaded per push)

Track over time:

- Coverage % (target: 99% lines on `src/hooks`+`src/lib`)
- E2E duration (target: <2 min wall-clock for the full sharded run)
- Bundle size (`next build` output `Route (app)` table)
- Number of lint warnings (target: 0; today: ~50 `object-injection` warnings
  being triaged)

## What "quality" does NOT mean here

- 100% coverage. Some code (orchestrators, app-routing glue) is
  deliberately uncovered and tested at the E2E level instead.
- Lint-clean on every rule. Some rules have known false-positive rates
  and are configured as `warn` on purpose; review them in the same PR.
- Zero dependencies. Some libraries (`@playwright/test`, `vitest`) are
  worth the bundle cost because they enable everything else.
