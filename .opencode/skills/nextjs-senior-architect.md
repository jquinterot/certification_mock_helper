# Next.js Senior Architect & Developer Skill

## Architecture Principles

### 1. Component Decomposition
- **Single Responsibility**: Each component does one thing well
- **Container/Presentational**: Separate stateful containers from pure UI
- **Atomic Design**: Atoms → Molecules → Organisms → Templates → Pages
- **Composition over Inheritance**: Use props and children, not class extension

### 2. State Management Hierarchy
- **Local state**: useState for component-specific UI (modals, forms, toggles)
- **Shared state**: useReducer + Context for complex cross-component state
- **Server state**: React Query / SWR for async data
- **Global state**: Zustand / Redux only when truly global
- **URL state**: Next.js router for shareable state

### 3. Custom Hooks Pattern
- Extract reusable logic from components
- Name hooks descriptively: `useExam`, `useTimer`, `useLocalStorage`
- Return typed objects: `{ state, actions, derivedValues }`
- Keep hooks focused: one concern per hook
- Use useCallback for stable function references
- Use useMemo for expensive computations

### 4. File Organization
```
src/
  app/              # Next.js App Router pages
  components/       # Reusable UI components
    ui/             # Pure presentational (shadcn-style)
    features/       # Domain-specific components
    layouts/        # Layout wrappers
  hooks/            # Custom React hooks
  lib/              # Utilities, constants, types
  providers/        # Context providers
  stores/           # State management (Zustand/Redux)
  types/            # Shared TypeScript types
  utils/            # Pure functions
```

### 5. TypeScript Best Practices
- **Strict mode**: Always enable `strict: true`
- **Explicit types**: No `any` without justification
- **Interface vs Type**: Use `interface` for object shapes, `type` for unions
- **Discriminated unions**: For state machines and reducers
- **Utility types**: Use `Pick`, `Omit`, `Partial` appropriately
- **Path aliases**: Use `@/` for clean imports

### 6. Performance Optimization
- **React.memo**: For expensive pure components
- **useMemo**: For expensive computations
- **useCallback**: For stable function props
- **Dynamic imports**: `next/dynamic` for code splitting
- **Image optimization**: Use `next/image` always
- **Font optimization**: Use `next/font` for web fonts
- **Server Components**: Default to Server Components, use 'use client' only when needed

### 7. Next.js App Router Specifics
- **Server Components**: Default, no JS bundle, direct DB access
- **Client Components**: Mark with 'use client', use for interactivity
- **Streaming**: Use Suspense boundaries for progressive loading
- **Parallel Routes**: For complex layouts with multiple views
- **Intercepting Routes**: For modals and overlays
- **Route Groups**: For layout organization without URL segments

### 8. Accessibility (a11y)
- **Semantic HTML**: Use proper heading hierarchy, landmarks
- **ARIA labels**: For interactive elements without visible text
- **Focus management**: Trap focus in modals, restore on close
- **Keyboard navigation**: Ensure all interactive elements are keyboard accessible
- **Color contrast**: WCAG 2.1 AA minimum (4.5:1 for normal text)
- **Screen readers**: Test with NVDA/VoiceOver

### 9. Testing Strategy
- **Unit tests**: Vitest for utilities and hooks
- **Component tests**: React Testing Library for UI
- **E2E tests**: Playwright for critical user flows
- **Snapshot tests**: For UI regression prevention
- **Coverage**: Aim for 80%+ on critical paths

### 10. Code Quality
- **ESLint**: Strict rules with @typescript-eslint
- **Prettier**: Consistent formatting
- **Husky**: Pre-commit hooks for linting
- **Conventional Commits**: Semantic versioning automation
- **Code Reviews**: Focus on architecture, not style

## Anti-Patterns to Avoid

1. **God Components**: Files > 200 lines need decomposition
2. **Props Drilling**: Use Context or composition instead
3. **useEffect for State Sync**: Use derived state or reducers
4. **Inline Styles**: Use Tailwind or CSS modules
5. **Any Types**: Explicit types improve maintainability
6. **Client Components for Static Content**: Default to Server Components
7. **No Error Boundaries**: Always wrap risky components
8. **Synchronous LocalStorage**: Wrap in try/catch, use effects
9. **Missing Loading States**: Always show feedback for async ops
10. **No Accessibility**: A11y is not optional

## Decision Matrix

| Concern | Solution | When |
|---------|----------|------|
| Local UI state | useState | Component-only |
| Shared UI state | useReducer + Context | 2-3 components |
| Complex global state | Zustand | 3+ components, async |
| Server data | React Query | API calls |
| Form state | React Hook Form | Any form |
| URL state | Next.js router | Shareable, bookmarkable |
| Animation | Framer Motion | Complex animations |
| Charts | Recharts / Chart.js | Data visualization |
| Tables | TanStack Table | Complex data tables |
| Virtualization | react-window | Long lists > 100 items |
