'use client';

import { useAppState } from '@/hooks/useAppState';
import { HomePage } from '@/components/HomePage';
import { CategoryMenu } from '@/components/CategoryMenu';
import { StartScreen } from '@/components/StartScreen';
import { ResultsScreen } from '@/components/ResultsScreen';
import { ExamSession } from '@/components/screens/ExamSession';
import { ExamHistory } from '@/components/ExamHistory';
import { getExamsByCategory } from '@/lib/exams';

export default function AppPage() {
  const state = useAppState();

  if (state.phase === 'home') {
    return <HomePage onSelectCategory={state.handleSelectCategory} theme={state.theme} themeMode={state.themeMode} onToggleTheme={state.toggleThemeMode} />;
  }

  if (state.phase === 'category') {
    const exams = getExamsByCategory(state.selectedCategory);
    return (
      <CategoryMenu
        category={state.selectedCategory}
        exams={exams}
        onSelectExam={state.handleSelectExam}
        onBack={state.handleBackToHome}
        theme={state.theme}
        themeMode={state.themeMode}
        onToggleTheme={state.toggleThemeMode}
      />
    );
  }

  if (state.phase === 'exam-start' && state.selectedExamConfig) {
    return (
      <StartScreen
        examName={state.selectedExamConfig.name}
        examSubtitle={state.selectedExamConfig.shortName}
        durationMinutes={state.selectedExamConfig.durationMinutes}
        passingScore={state.selectedExamConfig.passingScore}
        savedTests={state.filteredSavedTests}
        mode={state.examMode}
        selectedDomain={state.selectedDomain}
        testSet={state.selectedTestSet}
        domains={state.domains}
        domainStats={state.domainStats}
        sectionDomainStats={state.sectionDomainStats}
        totalQuestions={state.totalQuestions}
        maxTestSets={state.maxTestSets}
        theme={state.theme}
        themeMode={state.themeMode}
        onToggleTheme={state.toggleThemeMode}
        examHistory={state.examHistory}
        weaknessAnalysis={state.weaknessAnalysis}
        onResumeTest={state.handleResumeTest}
        onDeleteTest={state.deleteSavedTest}
        onSetMode={state.setExamMode}
        onSetDomain={state.setSelectedDomain}
        onSetTestSet={state.setSelectedTestSet}
        onStart={state.handleStartExam}
        onViewHistory={state.handleViewHistory}
        onBackToHome={state.handleBackToHome}
      />
    );
  }

  if (state.phase === 'results') {
    return (
      <ResultsScreen
        score={state.exam.score}
        domainScores={state.exam.domainScores}
        timer={state.timer.timer}
        testSet={state.exam.config.testSet}
        mode={state.exam.config.mode}
        selectedDomain={state.exam.config.selectedDomain}
        flaggedCount={state.exam.flaggedCount}
        theme={state.theme}
        themeMode={state.themeMode}
        onToggleTheme={state.toggleThemeMode}
        examId={state.selectedExamId}
        answers={state.exam.answers}
        questions={state.questions}
        onReview={state.handleReview}
        onReviewFlagged={state.handleReviewFlagged}
        onReset={state.handleReset}
        onBackToHome={state.handleBackToHome}
      />
    );
  }

  if (state.phase === 'history' && state.selectedExamConfig) {
    return (
      <ExamHistory
        examId={state.selectedExamId}
        examName={state.selectedExamConfig.name}
        attempts={state.examHistory?.attempts || []}
        weaknessAnalysis={state.weaknessAnalysis}
        theme={state.theme}
        themeMode={state.themeMode}
        onToggleTheme={state.toggleThemeMode}
        onBack={state.handleBackFromHistory}
        onStudyDomain={state.handleStudyDomain}
      />
    );
  }

  return (
    <ExamSession
      questions={state.questions}
      activeQuestions={state.exam.activeQuestions}
      currentQuestion={state.exam.currentQuestion}
      answers={state.exam.answers}
      showExplanation={state.exam.showExplanation}
      flaggedQuestions={state.exam.flaggedQuestions}
      showResults={state.exam.showResults}
      timer={state.timer.timer}
      config={state.exam.config}
      flaggedCount={state.exam.flaggedCount}
      answeredCount={state.exam.answeredCount}
      theme={state.theme}
      themeMode={state.themeMode}
      onToggleTheme={state.toggleThemeMode}
      onSelectAnswer={state.exam.selectAnswer}
      onToggleFlag={state.exam.toggleFlag}
      onToggleExplanation={state.exam.toggleExplanation}
      onGoToPrevious={state.exam.goToPrevious}
      onGoToNext={state.exam.goToNext}
      onGoToQuestion={state.exam.goToQuestion}
      onGoToNextFlagged={state.exam.goToNextFlagged}
      onSubmit={state.handleSubmit}
      onExit={state.handleExit}
      onSave={state.handleSave}
      showExitDialog={state.showExitDialog}
      showSubmitDialog={state.showSubmitDialog}
      onCloseExitDialog={() => state.setShowExitDialog(false)}
      onCloseSubmitDialog={() => state.setShowSubmitDialog(false)}
      onConfirmSubmit={state.handleConfirmSubmit}
      onLeave={state.handleLeave}
    />
  );
}
