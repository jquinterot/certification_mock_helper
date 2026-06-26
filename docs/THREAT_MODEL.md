# Threat Model

This document describes what we're defending against, what we're
deliberately NOT defending against, and where the defenses live. It is
updated whenever the trust boundary, the data model, or the deployment
surface changes.

## What this app is

A 100% client-side Next.js app. There is **no backend, no API, no
authentication, no PII collection**. All exam content is shipped as
TypeScript modules; all user state lives in the user's `localStorage`.

This is a small, intentionally constrained surface. The threat model
should match that.

## Trust boundaries

```
┌─────────────────────────────────────────────────┐
│  Public Internet                                 │
│                                                  │
│  ┌──────────────────────────────────────────┐  │
│  │  CDN (Vercel/whatever)  ← untrusted      │  │
│  │  ┌────────────────────────────────────┐  │  │
│  │  │  Static JS / CSS / HTML            │  │  │
│  │  └────────────────────────────────────┘  │  │
│  │           ↓                              │  │
│  │  ┌────────────────────────────────────┐  │  │
│  │  │  Browser (user's device)  ← semi-  │  │  │
│  │  │   - React app                      │  │  │
│  │  │   - localStorage (untrusted input) │  │  │
│  │  │   - DOM (output target)            │  │  │
│  │  └────────────────────────────────────┘  │  │
│  └──────────────────────────────────────────┘  │
└─────────────────────────────────────────────────┘
```

The only **trust boundary** that matters is between the app and the
user's `localStorage`. Everything served from the CDN is treated as
untrusted-but-tamper-evident (CSP, SRI).

## Threats we DO defend against

### 1. Stored XSS via exam content

**Threat:** An attacker (or a careless author) puts a `<script>` tag in an
exam question or explanation. The browser renders it and executes it.

**Why we care:** Question / explanation text is rendered into the DOM
via React. Without escaping, raw HTML would execute.

**Defense:**
- React escapes by default. Verified by code review and
  `rg "dangerouslySetInnerHTML" src/` returning zero matches.
- **Content-Security-Policy** header in `next.config.ts` blocks inline
  scripts. The CSP allows `'self'` for `script-src`; if a future
  regression reintroduces inline scripts, the browser refuses to run
  them.
- ESLint: the security plugin catches `eval` and friends.

### 2. Clickjacking

**Threat:** A malicious site embeds ours in an `<iframe>` and tricks
users into clicking the wrong thing.

**Defense:**
- `X-Frame-Options: DENY` (`next.config.ts`)
- CSP `frame-ancestors 'none'`

### 3. MIME sniffing

**Threat:** Browser interprets a non-script file as a script and runs
it.

**Defense:**
- `X-Content-Type-Options: nosniff`

### 4. Mixed content / protocol downgrade

**Threat:** A user on a coffeeshop network is downgraded to HTTP and
their answers leak.

**Defense:**
- `Strict-Transport-Security: max-age=63072000; includeSubDomains; preload`
  (forces HTTPS for two years on supporting browsers)

### 5. Secret leakage in source

**Threat:** A developer accidentally commits an API key, token, or
credential.

**Defense:**
- `eslint-plugin-no-secrets` runs on every commit (pre-commit) and
  every push (CI).
- The PAT the user shared during development was a known risk;
  the project is also small enough that the leak surface is visible
  in PR review.

### 6. localStorage tampering (denial-of-self-attack)

**Threat:** A user (or a script in the same origin) tampers with
localStorage to inflate their own scores / history.

**Why this is acceptable:** The app is a **personal practice tool**.
There is no leaderboard, no shared state, no competitive element. The
tampered data only ever belongs to the user who tampered with it.
This is a **deliberate non-defense**.

**However:** Tampered JSON **must not crash the app** or allow
prototype-pollution-style attacks. The defenses are:

- All `JSON.parse(localStorage.getItem(...))` calls are wrapped in
  `try { ... } catch { ... }` with `logger.warn`
  (`src/hooks/useLocalStorage.ts`, `src/lib/study-history.ts`).
- Keys are constructed from internal IDs, never from URL input.

### 7. Outbound data exfiltration

**Threat:** A compromised dependency or a regression in the app makes
outbound requests, leaking user state.

**Defense:**
- CSP `connect-src 'self'` blocks any `fetch`/`XHR`/`WebSocket` to
  origins other than the app's own.
- ESLint flags `dangerouslySetInnerHTML`, `eval`, and other
  exfiltration primitives.

## Threats we DELIBERATELY do NOT defend against

- **localStorage tampering for self-gratification.** No leaderboard
  exists. The "score" is only ever shown to the user themselves.
- **Multi-user authentication / authorization.** The app has no
  accounts.
- **DDoS at the origin.** Static hosting handles this; we're not
  paying for a WAF.
- **Supply-chain compromise of an npm package.** Mitigations:
  Dependabot is configured, `package-lock.json` is integrity-hashed
  by npm, and CI runs `npm ci` (not `npm install`) which verifies
  the lockfile. A full solution (Sigstore, in-toto) is out of scope.
- **A determined attacker who controls the browser.** They can always
  read localStorage from DevTools. There is no client-side
  defense against this; the answer is "don't store secrets in
  the browser."

## Where each defense lives

| Defense | Location | Layer |
|---|---|---|
| CSP, HSTS, frame-ancestors, X-Frame-Options, X-Content-Type-Options | `next.config.ts` | Edge / HTTP |
| ESLint security rules | `eslint.config.mjs` | Source |
| No `dangerouslySetInnerHTML` | Code review | Source |
| `try/catch` on all `localStorage` reads | `useLocalStorage.ts`, `study-history.ts` | App |
| Structured logging of failures | `src/lib/logger.ts` | App |
| Dependabot | `.github/dependabot.yml` | Repo |
| npm ci (lockfile integrity) | `.github/workflows/ci.yml` | CI |
| `no-secrets/no-secrets` | `eslint.config.mjs` | Source + CI |
| Pre-commit (lint-staged) | `.husky/pre-commit` | Local |

## How to update this document

Update the threat model when any of the following changes:

- A new outbound network call is added (breaks CSP `connect-src 'self'`).
- A new storage backend is added (breaks the localStorage trust
  boundary).
- Authentication is introduced (new identity model).
- Server-side rendering or server actions are added (new attack
  surface).
- A new category of user data is stored (re-evaluate the "no PII"
  assumption).
