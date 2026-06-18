import { test, expect, type Page } from '@playwright/test';
import { ExamScreenPage, StartScreenPage, ExitDialogPage, ResultsScreenPage } from '../../pages';
import { NavigationSteps, ExamSteps } from '../../steps';

async function cleanupAllData(page: Page) {
  await page.evaluate(() => {
    localStorage.clear();
    sessionStorage.clear();
  });
}

test.describe('Exam Taking Flow', () => {
  let startScreen: StartScreenPage;
  let examScreen: ExamScreenPage;
  let exitDialog: ExitDialogPage;
  let resultsScreen: ResultsScreenPage;
  let navigationSteps: NavigationSteps;
  let examSteps: ExamSteps;

  test.beforeEach(async ({ page }) => {
    startScreen = new StartScreenPage(page);
    examScreen = new ExamScreenPage(page);
    exitDialog = new ExitDialogPage(page);
    resultsScreen = new ResultsScreenPage(page);
    navigationSteps = new NavigationSteps(page);
    examSteps = new ExamSteps(page);
    await cleanupAllData(page);
  });

  test.afterEach(async ({ page }) => {
    await cleanupAllData(page);
  });

  test('should display start screen with all required elements', async ({ page }) => {
    await test.step('Navigate to start screen', async () => {
      await navigationSteps.navigateToStartScreen('AWS Cloud', 'aws-ml');
    });

    await test.step('Mode selection cards are visible', async () => {
      await expect(startScreen.modeCardFull).toBeVisible();
      await expect(startScreen.modeCardSection).toBeVisible();
    });

    await test.step('Test set selection is visible', async () => {
      await expect(startScreen.testSetCard1).toBeVisible();
      await expect(startScreen.testSetCard2).toBeVisible();
    });

    await test.step('Start exam button is visible and enabled', async () => {
      await expect(startScreen.startExamButton).toBeVisible();
      await expect(startScreen.startExamButton).toBeEnabled();
    });
  });

  test('should start exam and display question interface', async ({ page }) => {
    await test.step('Start exam', async () => {
      await navigationSteps.navigateToStartScreen('AWS Cloud', 'aws-ml');
      await navigationSteps.startExam();
    });

    await test.step('Question card is visible', async () => {
      await expect(examScreen.questionCard(0)).toBeVisible();
    });

    await test.step('All 4 answer options are visible', async () => {
      await expect(examScreen.answerOption(0, 'a')).toBeVisible();
      await expect(examScreen.answerOption(0, 'b')).toBeVisible();
      await expect(examScreen.answerOption(0, 'c')).toBeVisible();
      await expect(examScreen.answerOption(0, 'd')).toBeVisible();
    });

    await test.step('Question navigator is visible', async () => {
      await expect(examScreen.questionNavigator).toBeVisible();
    });

    await test.step('Timer is visible', async () => {
      await expect(examScreen.timerDisplay).toBeVisible();
    });
  });

  test('should track answered questions count', async () => {
    await test.step('Start exam', async () => {
      await navigationSteps.navigateToStartScreen('AWS Cloud', 'aws-ml');
      await navigationSteps.startExam();
    });

    await test.step('Initial answered count is 0', async () => {
      const text = await examScreen.answeredCount.textContent();
      expect(text).toContain('0');
    });

    await test.step('Answer a question', async () => {
      await examScreen.selectAnswer(0, 'a');
    });

    await test.step('Answered count is updated to 1', async () => {
      const text = await examScreen.answeredCount.textContent();
      expect(text).toContain('1');
    });
  });

  test('should navigate between questions with prev/next buttons', async () => {
    await test.step('Start exam', async () => {
      await navigationSteps.navigateToStartScreen('AWS Cloud', 'aws-ml');
      await navigationSteps.startExam();
    });

    await test.step('Previous button is disabled on first question', async () => {
      await expect(examScreen.previousButton).toBeDisabled();
    });

    await test.step('Go to next question', async () => {
      await examScreen.goToNext();
    });

    await test.step('Previous button is now enabled', async () => {
      await expect(examScreen.previousButton).toBeEnabled();
    });
  });

  test('should flag and unflag questions', async () => {
    await test.step('Start exam', async () => {
      await navigationSteps.navigateToStartScreen('AWS Cloud', 'aws-ml');
      await navigationSteps.startExam();
    });

    await test.step('Flagged count is not visible initially', async () => {
      await expect(examScreen.flaggedCount).not.toBeVisible();
    });

    await test.step('Flag the question', async () => {
      await examScreen.flagButton.click();
    });

    await test.step('Flagged count shows 1', async () => {
      await expect(examScreen.flaggedCount).toBeVisible();
    });

    await test.step('Unflag the question', async () => {
      await examScreen.flagButton.click();
    });

    await test.step('Flagged count is hidden', async () => {
      await expect(examScreen.flaggedCount).not.toBeVisible();
    });
  });

  test('should toggle explanation visibility', async () => {
    await test.step('Start exam', async () => {
      await navigationSteps.navigateToStartScreen('AWS Cloud', 'aws-ml');
      await navigationSteps.startExam();
    });

    await test.step('Explanation is not visible initially', async () => {
      await expect(examScreen.explanationPanel(0)).not.toBeVisible();
    });

    await test.step('Click show explanation', async () => {
      await examScreen.toggleExplanation();
    });

    await test.step('Explanation panel is now visible', async () => {
      await expect(examScreen.explanationPanel(0)).toBeVisible();
    });
  });

  test('should open exit dialog when clicking exit', async () => {
    await test.step('Start exam', async () => {
      await navigationSteps.navigateToStartScreen('AWS Cloud', 'aws-ml');
      await navigationSteps.startExam();
    });

    await test.step('Click exit button', async () => {
      await examScreen.exitButton.click();
    });

    await test.step('Exit dialog is now visible', async () => {
      await expect(exitDialog.dialog).toBeVisible();
    });

    await test.step('Dialog has save and leave options', async () => {
      await expect(exitDialog.saveButton).toBeVisible();
      await expect(exitDialog.leaveButton).toBeVisible();
      await expect(exitDialog.cancelButton).toBeVisible();
    });
  });

  test('should cancel exit and stay on exam', async () => {
    await test.step('Start exam and open exit dialog', async () => {
      await navigationSteps.navigateToStartScreen('AWS Cloud', 'aws-ml');
      await navigationSteps.startExam();
      await examScreen.exitButton.click();
    });

    await test.step('Cancel exit', async () => {
      await exitDialog.cancel();
    });

    await test.step('Dialog is closed and exam is still visible', async () => {
      await expect(exitDialog.dialog).not.toBeVisible();
      await expect(examScreen.questionCard(0)).toBeVisible();
    });
  });

  test('should exit exam without saving', async () => {
    await test.step('Start exam and answer a question', async () => {
      await navigationSteps.navigateToStartScreen('AWS Cloud', 'aws-ml');
      await navigationSteps.startExam();
      await examScreen.selectAnswer(0, 'a');
    });

    await test.step('Open exit dialog and leave', async () => {
      await examScreen.exitButton.click();
      await exitDialog.leaveWithoutSaving();
    });

    await test.step('Navigated back to start screen', async () => {
      await expect(startScreen.startExamButton).toBeVisible();
    });
  });

  test('should complete exam and show results', async () => {
    await test.step('Start exam', async () => {
      await navigationSteps.navigateToStartScreen('AWS Cloud', 'aws-ml');
      await navigationSteps.startExam();
    });

    await test.step('Complete exam silently', async () => {
      await examSteps.completeExamSilently();
    });

    await test.step('Results screen is displayed', async () => {
      await expect(resultsScreen.passFailBadge).toBeVisible();
    });

    await test.step('Score section is visible', async () => {
      await expect(resultsScreen.scoreCorrect).toBeVisible();
      await expect(resultsScreen.scoreIncorrect).toBeVisible();
      await expect(resultsScreen.scorePercentage).toBeVisible();
    });
  });

  test('should save and exit exam', async () => {
    await test.step('Start exam and answer a question', async () => {
      await navigationSteps.navigateToStartScreen('AWS Cloud', 'aws-ml');
      await navigationSteps.startExam();
      await examScreen.selectAnswer(0, 'a');
    });

    await test.step('Click save and exit', async () => {
      await examScreen.saveExitButton.click();
    });

    await test.step('Navigated back to start screen', async () => {
      await expect(startScreen.startExamButton).toBeVisible();
    });
  });
});
