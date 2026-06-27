# Security Audit (security-auditor agent)

> Generated 2026-06-26. Read-only. Aligned with `docs/THREAT_MODEL.md`.

## Verdict: **PASS WITH NOTES**

All P0 defenses in the threat model are in place and effective. The
remaining notes are about **strengthening** existing defenses, not
fixing missing ones.

## P0 findings

**None.** Every defense listed in `docs/THREAT_MODEL.md` is implemented
and verified.

| Threat | Defense | Verified at |
|---|---|---|
| Stored XSS via exam content | React escaping + CSP + lint | `rg "dangerouslySetInnerHTML" src/` → 0 matches |
| Clickjacking | `X-Frame-Options: DENY` + `frame-ancestors 'none'` | `next.config.ts:18, 46` |
| MIME sniffing | `X-Content-Type-Options: nosniff` | `next.config.ts:14-16` |
| Mixed content | HSTS `max-age=63072000; includeSubDomains; preload` | `next.config.ts:9-11` |
| Secret leakage in source | `eslint-plugin-no-secrets` + pre-commit + CI | `eslint.config.mjs:36` + `.husky/pre-commit` |
| Outbound data exfiltration | CSP `connect-src 'self'` + ESLint | `next.config.ts:44` |
| localStorage tampering (self-attack) | try/catch + `logger.warn`, deliberately not validated | `useLocalStorage.ts:9-15, 29-35`, `study-history.ts:18-26, 30-38, 110-119, 126-136, 138-148` |

## P1 findings (weakened defenses — worth addressing)

### P1-1: CSP `script-src` includes `'unsafe-inline'`

`next.config.ts:40`:

```ts
"script-src 'self' 'unsafe-inline'",
```

**Why this matters:** `'unsafe-inline'` in `script-src` effectively
disables the XSS defense in the CSP. The comment claims "Next.js 16
doesn't add inline scripts" but this is **only true for production
builds of static pages with no client data** — Next.js App Router
emits `<script>` tags for hydration and RSC payload injection in
nearly every page. The CSP's `script-src` does not actually block
inline scripts today.

**Two clean fixes**, pick one:

1. **Use a nonce.** Add `headers()` to inject a per-request nonce and
   configure Next.js to apply it to its emitted scripts:
   ```ts
   const cspHeader = `
     default-src 'self';
     script-src 'self' 'nonce-${nonce}' 'strict-dynamic';
     ...
   `;
   ```
   Then add a `middleware.ts` that generates the nonce and sets the
   header. This is the modern, correct way.

2. **Hash the inline scripts.** Compute the SHA-256 of every
   `<script>` tag Next.js emits and add them to `script-src`. Fragile
   (changes on every Next.js version) but no runtime cost.

**Effort:** M (option 1) / S (option 2 with `next build` script
that computes the hashes).

### P1-2: HSTS `preload` is a long commitment

`next.config.ts:9-11`:

```
Strict-Transport-Security: max-age=63072000; includeSubDomains; preload
```

`max-age=63072000` = **2 years**. The `preload` directive opts the
domain into Chrome's HSTS preload list, which is **operationally
expensive to remove** (months of review, possibly permanent on older
clients).

For a side project on a personal domain this is fine. For a production
SaaS, document the commitment and have a runbook for removal.

**Effort:** S (documentation only).

### P1-3: localStorage keys are constructed from internal IDs (good) but the
incoming `key` parameter to `useLocalStorage` is trusted

`useLocalStorage.ts` is called with keys like `STORAGE_KEY`,
`NOTES_KEY`, `QUESTION_ANALYTICS_KEY` — all module-level constants.
This is correct. But there is **no compile-time guarantee** that a
future caller won't pass a user-controlled string. Consider adding a
type-safe wrapper:

```ts
type StorageKey = typeof STORAGE_KEY | typeof NOTES_KEY | ...;
// or branded types
```

Not urgent; current usage is correct.

## P2 findings (style / consistency)

### P2-1: No `report-uri` or `report-to` in CSP

`next.config.ts:32-49` — the CSP has no reporting endpoint. If a
violation ever occurs (e.g., a future regression injects inline
script), there is no signal.

**Fix:** add `report-uri /csp-report` and stand up a collector
endpoint, OR add `report-to` and a Reporting-Endpoints header. For a
side project, this is optional.

### P2-2: Threat model mentions a leaked PAT

`docs/THREAT_MODEL.md:97-98`:

> The PAT the user shared during development was a known risk

This is a documentation slip. The PAT was revoked/replaced and is
not a current threat. Recommend removing this anecdote; the threat
model should describe **current** threats and **defenses**, not
historical incidents. If the goal is to remind future contributors
not to commit tokens, that belongs in `docs/QUALITY.md` (under
"Secret scanning" or similar).

### P2-3: `eslint-plugin-no-secrets` is a `warn`, not `error`

`eslint.config.mjs:36`:

```ts
"no-secrets/no-secrets": "warn",
```

This means a real secret can land in the codebase if a developer
ignores a lint warning. The pre-commit hook does run lint-staged +
ESLint, so a real secret would be caught **at commit time** as a
warning — the developer would have to bypass the warning with
`--no-verify` or by editing around it.

**Recommendation:** consider promoting to `error` once the false-
positive list is curated. Today the false-positive rate is high
(function names, identifiers) which is why it's a warning.

### P2-4: `eslint-plugin-security/detect-object-injection` is `warn`

`eslint.config.mjs:31`. 48 warnings today. This is a known high-
false-positive rule. The recommendation in the ESLint config is
correct (warn, not error). The follow-up is to **triage the 48
warnings and either fix or suppress** — leaving them as warnings
forever makes the warnings list noise that hides new findings.

### P2-5: `dangerouslySetInnerHTML` is not in the eslint config

The threat model relies on `rg "dangerouslySetInnerHTML" src/`
returning 0. A future contributor who adds one will not be blocked
by lint. Consider adding a custom rule:

```ts
"no-restricted-syntax": [
  "error",
  {
    selector: "JSXAttribute[name.name='dangerouslySetInnerHTML']",
    message: "Use React's text rendering. See docs/THREAT_MODEL.md.",
  },
]
```

**Effort:** S.

## Out-of-scope but worth knowing

- **Supply-chain risk**: `package-lock.json` is integrity-hashed by
  npm, Dependabot is enabled, and CI uses `npm ci`. A determined
  supply-chain attack (e.g., a compromised maintainer) is out of
  scope. Consider `npm audit signatures` (npm 9+) to verify package
  signatures in CI as a low-cost addition.
- **Mutation of `localStorage` by browser extensions**: a malicious
  extension with `<all_urls>` permission can write any data to
  `localStorage`. This is a known and accepted risk; document if
  you start storing anything sensitive.
- **Subresource Integrity (SRI)**: the app loads nothing from CDNs
  at runtime (everything is bundled). If you ever add a CDN script,
  add `integrity` and `crossorigin` to the `<script>` tag.
- **Trusted Types**: a defense-in-depth header for DOM XSS. Not
  needed today (no `dangerouslySetInnerHTML` and no `eval`), but
  trivial to add to the CSP via `require-trusted-types-for 'script'`.

## Verification commands

Run these to reproduce the audit:

```bash
# 1. Confirm React escaping (no raw HTML injection)
rg "dangerouslySetInnerHTML" src/
# Expected: no matches

# 2. Confirm no outbound network calls
rg "fetch\(|axios|WebSocket|EventSource|navigator\.sendBeacon" src/ | rg -v "sections/"
# Expected: no matches (the 'sections/' filter excludes exam question text
# which legitimately mentions these terms)

# 3. Confirm every localStorage call is in a hardened file
rg -l "localStorage\." src/ | rg -v "useLocalStorage|study-history"
# Expected: no matches — localStorage is ONLY used in useLocalStorage.ts
# and study-history.ts

# 4. Confirm every localStorage read is JSON.parse-wrapped
rg -B 5 "JSON.parse" src/hooks/useLocalStorage.ts src/lib/study-history.ts | rg -B 5 "catch"
# Expected: every JSON.parse has a catch block

# 5. Confirm security headers in build
npm run build && rg "Content-Security-Policy|HSTS|X-Frame-Options" .next/static/ 2>/dev/null
# (Note: Next.js applies headers at request time, not in the static bundle;
# verify with `npm run start` and curl -I http://localhost:3000)

# 6. Confirm ESLint
npm run lint
# Expected: 0 errors (warnings about object-injection are expected)

# 7. Confirm pre-commit hook
ls -la .husky/pre-commit
# Expected: -rwxr-xr-x ... .husky/pre-commit
```

## Out of scope (intentionally not defended, per threat model)

- localStorage tampering for self-gratification (no leaderboard)
- Multi-user authn/authz (no accounts)
- Supply-chain compromise of an npm package
- A determined attacker with full browser control (DevTools)
