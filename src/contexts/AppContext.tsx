'use client';

import { createContext, useContext } from 'react';
import { useAppState } from '@/hooks/useAppState';

type AppState = ReturnType<typeof useAppState>;

export const AppContext = createContext<AppState | null>(null);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const appState = useAppState();
  return (
    <AppContext.Provider value={appState}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}