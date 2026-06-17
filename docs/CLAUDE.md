@AGENTS.md

<!-- BEGIN:project-context -->
# Project-Specific Context

This is a **certification exam practice platform** (not a typical Next.js app).

**Key differences:**
- App Router with `use client` components for interactivity
- Custom state management (NOT Redux/Zustand - use `useAppState` hook)
- localStorage for persistence (NOT a database)
- Theme system with light/dark mode support
- Questions stored as static TypeScript files

**Always read before editing:**
- `.opencode/skills/project-context.md` - Architecture and patterns
- `docs/ARCHITECTURE.md` - Detailed architecture
- `docs/EXAM_ANALYSIS.md` - Exam coverage analysis

<!-- END:project-context -->

<!-- BEGIN:nextjs-agent-rules -->
# Next.js 16 Rules

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data.

- Read the relevant guide in `node_modules/next/dist/docs/` before writing code
- Heed deprecation notices
- App Router is default (NOT Pages Router)
- Use `output: 'export'` for static deployment
<!-- END:nextjs-agent-rules -->
