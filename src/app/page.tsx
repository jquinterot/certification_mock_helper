'use client';

import { useApp } from '@/contexts/AppContext';
import { AppProvider } from '@/contexts/AppContext';
import { HomePage } from '@/components/HomePage';
import { CategoryMenu } from '@/components/CategoryMenu';
import { StartScreen } from '@/components/StartScreen';
import { ResultsScreen } from '@/components/ResultsScreen';
import { ExamSession } from '@/components/screens/ExamSession';
import { ExamHistory } from '@/components/ExamHistory';
import { ErrorBoundary } from '@/components/ErrorBoundary';

function AppContent() {
  const state = useApp();

  if (state.phase === 'home') {
    return <HomePage />;
  }

  if (state.phase === 'category') {
    return <CategoryMenu />;
  }

  if (state.phase === 'exam-start' && state.selectedExamConfig) {
    return <StartScreen />;
  }

  if (state.phase === 'results') {
    return <ResultsScreen />;
  }

  if (state.phase === 'history' && state.selectedExamConfig) {
    return <ExamHistory />;
  }

  return <ExamSession />;
}

export default function AppPage() {
  return (
    <ErrorBoundary>
      <AppProvider>
        <AppContent />
      </AppProvider>
    </ErrorBoundary>
  );
}