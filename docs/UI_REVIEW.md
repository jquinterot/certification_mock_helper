# UI Design Review (frontend-design skill)

> Applied via the Anthropic `frontend-design` skill located at
> `.opencode/skills/frontend-design/SKILL.md`. Read-only review — no code
> changes. Specific file:line references throughout.

## Executive summary

The app is competent and consistent but reads as a **template**. Every
screen uses the same `rounded-2xl` + `border-white/10` + `bg-gradient`
+ lucide icon + "rounded-stat-card" pattern. Nothing is memorable. The
biggest opportunity is to **find one signature element that belongs to
"certification practice" and let everything else get quieter**. The
biggest risk is that the design continues to feel like a polished but
generic SaaS dashboard — fine, but invisible.

## Hero / thesis assessment

**Current home page** (`src/components/HomePage.tsx:24-91`):
- `<Award>` icon in a gradient box
- "Certification Practice Hub" headline
- Generic 2-line description ("Practice exams for AWS and ISTQB
  certifications with realistic questions, timed tests, and detailed
  explanations")
- Two category cards
- Three stat tiles ("Certifications", "Test Sets", "Total Questions")

**This is the template answer the skill explicitly warns about**: a
"big icon + 3 stats + 2 cards" landing page. It tells the user what
the app does, not **why they should care right now**.

A more distinctive hero thesis would be: **the test itself is the
hero**. Show a real exam question — the question text, the four
options, the timer ticking — and let "Start practicing" be the only
CTA. The product is "realistic practice exams"; show one. The "stats"
and "categories" can be the secondary content, below the fold.

Specific change: replace `HomePage.tsx:27-90` with a single-card
hero that renders a sample question, a "Start" button, and one
supporting line. Move the category grid below the fold or to a
secondary screen.

## Typography

**Current** (`src/app/layout.tsx:5-13`, `globals.css:11-12`):
- Display + body: `Geist` (variable)
- Mono: `Geist Mono`

Geist is fine — clean, modern, neutral. The problem is it's the
**default Next.js 16 font**. Every new Next.js app uses Geist. So
the app looks "from a Next.js starter" rather than "from this
project".

**Recommended typeface pair (specific and opinionated)**:

| Role | Typeface | Why |
|---|---|---|
| Display (headlines, score) | **Fraunces** (Google Fonts) | A contemporary serif with a touch of personality. Pairs "serious credential" with "warmth". Free, variable, looks distinctive next to Geist. |
| Body | **Inter** (Google Fonts) | Workhorse sans, neutral but not generic. Pairs with Fraunces without competing. |
| Mono (timer, IDs, question numbers) | **JetBrains Mono** (Google Fonts) | For numbers that need to feel precise and instrumented. |

Fraunces is the risk the skill demands: most certification apps
default to a clean sans (Geist, Inter, Manrope). Using a serif for
the display is a real point of view. Justification: certification is
ritual — the certificate, the seal, the official document. Serif
sits naturally there.

Effort: S (drop-in via `next/font/google`). Impact: 4/5.

## Palette

**Current** (from `src/lib/theme.ts`, `src/lib/constants/ui.tsx`):
- Dark: near-black slate + orange-500 (AWS) / blue-500 (ISTQB)
- Light: white + same accents
- Many tailwind slate-X / white-X opacity utilities scattered

The orange/blue split is the **only design choice with a real
opinion** in the current palette. Everything else is "slate-900 +
white/10". A more deliberate dark palette for "serious exam
practice":

| Token | Hex | Role |
|---|---|---|
| `--ink` | `#0B0B0F` | Background (slightly bluer than pure black) |
| `--ink-2` | `#13131A` | Card surface |
| `--rule` | `#26262E` | Hairline borders, dividers |
| `--paper` | `#F4F1EA` | Body text in dark mode (warm off-white) |
| `--ember` | `#E8743C` | Primary accent (replaces orange-500) |
| `--signal` | `#7DAE7E` | Success / "Passed" green (desaturated, not emerald) |
| `--alarm` | `#D76145` | Failed / wrong (warm red, not Tailwind red-500) |

Why: the warm off-white text on near-black is a real choice (most
apps use pure white, which is harsh). Desaturated green/red signal
states feel more like grading marks on a paper than alert colors.
Ember instead of orange-500 reads as "ink that catches the light"
rather than "Tailwind orange".

Effort: M (one PR to `theme.ts` + `tailwind.config`). Impact: 4/5.

## Signature element proposal

The app has no signature. Every screen is "rounded card + gradient +
icon + button". The skill's principle: **spend your boldness in one
place**.

**Proposal: a "credential stamp" treatment**.

- The result of a passed exam is a circular seal — like a wax seal on
  a diploma. Centered, monospace, two rings (inner: exam name, outer:
  date + score). Used exactly once: on `ResultsScreen.tsx` for passed
  exams, replacing the trophy icon and the "PASSED" pill.
- Reuse the seal motif minimally elsewhere: a small embossed version
  appears in the exam history list and on the home page hero (as the
  "logo").
- ASCII sketch:

```
       ╭─────────────╮
       │   ★ CTFL ★  │
       │   v4.0.1    │
       │             │
       │   PASSED    │
       │   78 / 100  │
       │   2026-06   │
       ╰─────────────╯
```

The seal embodies the subject: certification is a credential, and
credentials are stamped. It's specific to this product. It's not a
generic trophy, not a green checkmark, not a percent.

Effort: L (one new component + use on 3 screens). Impact: 5/5.

## Per-screen critique

### HomePage (`src/components/HomePage.tsx`)

- **Works**: clear information hierarchy, accessible (button
  has aria-label via text), responsive grid.
- **Doesn't work**: hero is generic; the "3 stats" tile row is
  decoration (the numbers never change during a session); the
  category cards use the same icon treatment as everything else.
- **One change**: replace the hero with a single "start practicing"
  CTA + a live sample question. Move category selection to a small
  drawer or secondary section.

### CategoryMenu (`src/components/CategoryMenu.tsx`)

- **Works**: exam cards are information-dense (questions, time,
  passing score, domains).
- **Doesn't work**: "Start Exam" appears on every card; the
  back-button uses a bare "Back to Home" text — no icon, no
  affordance.
- **One change**: change the back button to a proper chevron + text
  combo. Add a hover state that previews the first question of the
  exam.

### StartScreen (`src/components/StartScreen.tsx`)

- **Works**: the section-mode 2-step flow (domain → test set) is
  well-designed. Saved-test list is useful.
- **Doesn't work**: too many stacked components (saved tests,
  weakness analysis, mode selection, test set, domain selection,
  info cards, exam info). The "Estimated time" calculation at line
  51-58 has a `15` and `20` magic-number fallback for section
  mode that's a smell.
- **One change**: collapse the mode selector and the test-set
  selector into one decision ("Take the full exam" vs. "Practice a
  specific section") and only show the relevant options below.

### ExamScreen (`src/components/ExamScreen.tsx`)

- **Works**: question card is clear, multi-response badge is
  helpful, navigator is sticky.
- **Doesn't work**: the timer in the top-right is just a number. It
  has no urgency treatment as it counts down. The question header
  has a domain badge that uses the same color as the answer badge
  (visually confusing).
- **One change**: make the timer a proper stopwatch: monospace, with
  a hairline progress ring showing time remaining. Add a
  desaturated red treatment when the timer crosses 5 minutes, and
  a brighter red + 60s warning at 1 minute.

### ResultsScreen (`src/components/ResultsScreen.tsx`)

- **Works**: the domain breakdown table is information-dense and
  honest.
- **Doesn't work**: the "PASSED" / "FAILED" pill is the entire
  result. No celebration, no context, no sense of "this is the
  moment".
- **One change**: replace the pill with the **credential stamp
  signature** (see above). For failed attempts, use the same stamp
  shape but with the alarm color and "NOT YET" type.

### ExamHistory (`src/components/ExamHistory.tsx`)

- **Works**: attempt list is scannable, per-attempt actions are
  clear.
- **Doesn't work**: no progress-over-time visualization. The history
  is a list, but the *story* of the user's preparation is a curve.
- **One change**: add a thin sparkline of best-score-over-time next
  to each exam. Single line, no axes, no labels — just a shape that
  communicates "improving" or "plateauing".

## Writing audit

| Location | Current | Proposed |
|---|---|---|
| `HomePage.tsx:32` | "Certification Practice Hub" | "Pass your next cert." |
| `HomePage.tsx:34` | "Practice exams for AWS and ISTQB certifications with realistic questions, timed tests, and detailed explanations" | "Real exam conditions. Real explanations. No surprises." |
| `HomePage.tsx:80` | "Test Sets" | "Tests" |
| `CategoryMenu.tsx:30` | "Select a certification to start practicing" | "Pick a cert to start." |
| `StartScreen.tsx` copy varies | "Section Mode" / "Full Exam" labels | "Practice one chapter" / "Take the full exam" |
| `ResultsScreen.tsx` | "Try Again" / "Review Answers" | "Retake" / "Review" |
| `ErrorBoundary.tsx:84` | "An unexpected error occurred. Please try again or refresh the page." | "Something broke. Reload, or hit Try Again." |
| `app/error.tsx:33-35` | "Something went wrong / An unexpected error occurred. Please try again or refresh the page." | "Something broke. / Reload, or try again." |
| `QuestionCard.tsx` "Correct!" / "Incorrect" | Keep | Keep — these are the right call (active, specific) |

## Restraint / self-critique checklist

**Remove**:
- The 3-stat tile row on `HomePage.tsx:76-89` (decoration).
- The "Start Exam →" arrow on every `CategoryMenu.tsx` card (every
  card is a start button; the arrow is loud for what it says).
- The `bg-gradient-to-br` on every full-screen wrapper
  (`HomePage.tsx:25`, `CategoryMenu.tsx:15`, `ResultsScreen.tsx:44`).
  Pick one screen to have the gradient; the rest get a flat surface.

**Keep**:
- `rounded-2xl` on cards (one shape, repeated = discipline).
- The orange/blue category split (it IS the signature). Lean into it
  harder; don't dilute.
- The monospace treatment for numbers (timer, scores, question IDs).
  Currently inconsistent — commit to it everywhere a number appears.

**Add**:
- A visible focus ring across all interactive elements
  (currently inconsistent — `focus:ring-2 focus:ring-blue-500/50`
  appears on `QuestionNotes.tsx:45` but nowhere else).
- `prefers-reduced-motion` respect. Tailwind has
  `motion-reduce:transition-none` — apply it to all transitions.

## Two-pass design plan (per the skill)

**Pass 1: brainstorm**

- Color: ink / ink-2 / rule / paper / ember / signal / alarm
  (palette above).
- Type: Fraunces (display) + Inter (body) + JetBrains Mono (numbers).
- Layout: home page becomes a single full-bleed "current question"
  card; category grid moves to a compact bottom row; exam history
  gets sparklines.
- Signature: credential stamp on results + small embossed version in
  history and home hero.

**Pass 2: critique against the brief**

- *Risk: Fraunces might read as "too editorial" for a technical
  tool.* Mitigation: use it only at display weights, only for
  headlines, only with high contrast. Body stays Inter.
- *Risk: credential stamp might feel kitsch.* Mitigation: render it
  as a single thin line ring, not a full wax-seal illustration.
  Monospace type inside. Looks like a stamp on a form, not a
  novelty trophy.
- *Risk: monospace everywhere might feel like a terminal app.*
  Mitigation: only numbers and question IDs, not body copy.

**Pass 2 revised**: the stamp becomes a single-line outline with
monospace text inside; Fraunces is reserved for the results score
and the home headline; everything else is Inter. Ink palette stays.

## Recommended next 3 changes

| # | Change | Effort | Impact |
|---|---|---|---|
| 1 | **Add the credential stamp signature to `ResultsScreen.tsx`** (replace the "PASSED" pill) and the `home page hero`. | L | 5/5 |
| 2 | **Swap typography: Fraunces + Inter + JetBrains Mono via `next/font/google`**. Update `src/app/globals.css` to expose the new variables. | S | 4/5 |
| 3 | **Re-do the home page hero** as a sample question + single CTA. Move the category grid below the fold. | M | 4/5 |

Together: the app would have a real visual identity, a memorable
result moment, and a homepage that sells the product in 3 seconds.
None of the three are dependent; any one of them is a meaningful
step.
