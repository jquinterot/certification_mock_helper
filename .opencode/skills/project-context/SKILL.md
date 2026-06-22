---
name: project-context
description: Use ONLY when starting work on the certification_mock_helper project. Provides project structure overview, technology stack, exam architecture, and key file locations for onboarding.
---

Use this skill when starting work on the certification_mock_helper project.

## Project Overview

Multi-certification exam practice platform supporting AWS and ISTQB certifications. Built with Next.js 16, TypeScript, and Tailwind CSS.

**Key Files:**
- `src/app/page.tsx` - Main orchestrator (handles routing between phases)
- `src/hooks/useAppState.ts` - Central state management
- `src/types/index.ts` - TypeScript interfaces
- `src/lib/theme.ts` - Light/dark theme system
- `src/lib/exams/` - Exam configurations and questions

## Architecture

### State Management
```
useAppState (src/hooks/useAppState.ts)
├── phase: AppPhase ('home' | 'category' | 'exam-start' | 'exam' | 'results' | 'history')
├── selectedCategory / selectedExamId / selectedExamConfig
├── examMode ('full' | 'section')
├── theme / themeMode (light/dark)
└── exam = useExam(questions)
    ├── answers, flaggedQuestions, currentQuestion
    ├── showResults, showExplanation
    └── selectAnswer, toggleFlag, submit, etc.
```

### Screen Flow
1. `home` → HomePage (category selection)
2. `category` → CategoryMenu (exam selection)
3. `exam-start` → StartScreen (test set/domain selection, saved tests)
4. `exam` → ExamScreen + ExamSession (actual exam taking)
5. `results` → ResultsScreen (score display)
6. `history` → ExamHistory (past attempts)

### Theme System
- Themes defined in `src/lib/theme.ts`
- `Theme` interface with light/dark variants
- CSS classes use `dark:` prefix for dark mode
- Never use hardcoded `text-slate-300` or `bg-white/5` - use theme properties

**Theme properties:**
- `bgText` / `bgTextSecondary` - text colors
- `bgCard` / `bgCardHover` - card backgrounds
- `bgButton` / `bgButtonHover` - button backgrounds
- `borderColor` / `borderHover` - border colors
- `primaryLightText` / `primaryText` - brand colors

## Coding Conventions

### TypeScript
- Strict mode enabled
- Use explicit types for props and return values
- Never use `any` without eslint-disable comment
- Use `interface` for object shapes, `type` for unions

### Components
- Use `memo()` for list items and expensive components
- Use `useCallback` for event handlers passed as props
- Use `useMemo` for expensive computations
- Prefix unused props with underscore: `_unusedProp`

### Styling
- Use theme properties from `src/lib/theme.ts`
- Pattern: `className={\`${theme.bgCard} ${theme.borderColor} border\`}`
- Use `dark:` prefix for dark-mode-only styles when theme property isn't available
- Example: `dark:text-slate-300 dark:bg-white/5`

### Question Data
- Questions stored in `src/lib/exams/{exam-id}/`
- Each exam has `config.ts` with metadata
- `questions.ts` and `questions2.ts` for full test sets
- `sections/` folder for domain/chapter practice
- Questions use `domain` field to identify topic

### Saved Tests
- `SavedTest` interface includes `status: 'in-progress' | 'submitted'`
- In-progress tests can be resumed
- Submitted tests open in read-only results mode
- Question order preserved via `questionSeed`

## Important Patterns

### Adding a New Exam
1. Create `src/lib/exams/{exam-id}/config.ts` with `ExamConfig`
2. Add questions to `questions.ts`, `questions2.ts`
3. Add sections to `sections/` folder
4. Import and add to `src/lib/exams/index.ts`
5. Update `getQuestions()` and `getSectionQuestions()` in `loader.ts`

### Adding Question Types
Currently supports:
- Single answer: `correctAnswer: number`
- Multiple answer: `correctAnswer: number[]`

### Theme-Aware Components
Always update components when adding new theme properties:
1. Add property to `Theme` interface
2. Add to `createDarkTheme()` and `createLightTheme()`
3. Update components to use the new property

## File Organization

```
src/
├── app/
│   ├── page.tsx          # Main orchestrator
│   ├── layout.tsx         # Root layout
│   └── globals.css        # Global styles
├── components/
│   ├── HomePage.tsx       # Category selection
│   ├── CategoryMenu.tsx  # Exam selection
│   ├── StartScreen.tsx    # Test config + saved tests
│   ├── ExamScreen.tsx     # Question display + navigation
│   ├── ResultsScreen.tsx  # Score + breakdown
│   ├── ExamHistory.tsx    # Past attempts
│   ├── QuestionCard.tsx   # Question + options
│   ├── QuestionNavigator.tsx # Question grid sidebar
│   ├── ExitDialog.tsx     # Leave exam confirmation
│   ├── SubmitDialog.tsx   # Submit confirmation
│   ├── screens/
│   │   └── ExamSession.tsx # Orchestrates ExamScreen + dialogs
│   └── start-screen/
│       ├── SavedTestList.tsx
│       ├── ModeSelection.tsx
│       ├── TestSetSelection.tsx
│       ├── DomainSelection.tsx
│       └── ExamInfo.tsx
├── hooks/
│   ├── useAppState.ts     # Central state
│   ├── useExam.ts         # Exam state wrapper
│   ├── useExamState.ts    # Exam state (internal)
│   ├── useExamActions.ts  # Exam actions (internal)
│   ├── useTimer.ts       # Timer logic
│   ├── useSavedTests.ts   # localStorage CRUD
│   └── useLocalStorage.ts # localStorage hook
├── lib/
│   ├── exams/
│   │   ├── index.ts      # Exam registry
│   │   ├── loader.ts     # Question loading
│   │   ├── types.ts      # ExamConfig type
│   │   ├── aws-ml/
│   │   ├── aws-saa/
│   │   ├── istqb-foundation/
│   │   └── istqb-genai/
│   ├── theme.ts          # Theme system
│   ├── constants.ts      # Storage keys
│   ├── utils.ts          # formatTime, formatDate
│   └── study-history.ts   # Attempt tracking
└── types/
    └── index.ts          # Shared types
```

## Build & Deployment

```bash
npm run build   # Production build
npm run lint    # ESLint check
npm run dev     # Development server
```

- Static export enabled (`output: 'export'`)
- Deployable to Vercel, Netlify, or any static host