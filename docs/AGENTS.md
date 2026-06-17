# Agent Guidelines

## Working with this Project

### First Steps
When starting work, read `.opencode/skills/project-context.md` for:
- Architecture overview
- State management patterns
- Theme system
- Coding conventions

### Common Tasks

#### Adding a new exam
1. Create exam folder in `src/lib/exams/{exam-id}/`
2. Add `config.ts` with exam metadata
3. Add questions to `questions.ts`, `questions2.ts`
4. Register in `src/lib/exams/index.ts`
5. Update loader in `src/lib/exams/loader.ts`

#### Adding theme support
1. Add property to `Theme` interface in `src/lib/theme.ts`
2. Add to `createDarkTheme()` and `createLightTheme()`
3. Update components to use the new property

#### Modifying exam flow
1. Check `src/app/page.tsx` for screen routing
2. Check `src/hooks/useAppState.ts` for state transitions
3. Check `src/hooks/useExamActions.ts` for exam logic

### Code Style
- Use TypeScript strict mode
- Use theme properties for all colors
- Use `dark:` prefix for dark-mode-only styles
- Prefix unused parameters with underscore
- Use `memo()` for list items

### Build Commands
```bash
npm run build   # Production build
npm run lint   # ESLint check  
npm run dev    # Development server
```

### Important Files
- `src/types/index.ts` - All shared types
- `src/lib/theme.ts` - Theme definitions
- `src/lib/exams/loader.ts` - Question loading
- `src/hooks/useAppState.ts` - Central state
