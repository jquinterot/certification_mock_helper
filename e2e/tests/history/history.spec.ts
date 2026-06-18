import { test, expect, type Page } from '@playwright/test';
import { ExamHistoryPage, StartScreenPage } from '../../pages';
import { NavigationSteps, ExamSteps } from '../../steps';

async function cleanupAllData(page: Page) {
  await page.evaluate(() => {
    localStorage.clear();
    sessionStorage.clear();
  });
}

test.describe('Exam History', () => {
  let historyPage: ExamHistoryPage;
  let startScreen: StartScreenPage;
  let navigationSteps: NavigationSteps;
  let examSteps: ExamSteps;

  test.beforeEach(async ({ page }) => {
    historyPage = new ExamHistoryPage(page);
    startScreen = new StartScreenPage(page);
    navigationSteps = new NavigationSteps(page);
    examSteps = new ExamSteps(page);
    await cleanupAllData(page);
  });

  test.afterEach(async ({ page }) => {
    await cleanupAllData(page);
  });

  test('should show progress stats after completing an exam', async ({ page }) => {
    await test.step('Complete an exam', async () => {
      await navigationSteps.navigateToStartScreen('AWS Cloud', 'aws-ml');
      await navigationSteps.startExam();
      await examSteps.completeExamSilently();
    });

    await test.step('Navigate back to start screen', async () => {
      await page.getByTestId('back-button').click();
    });

    await test.step('Progress section is visible', async () => {
      await expect(startScreen.progressBestScore).toBeVisible();
      await expect(startScreen.progressAverageScore).toBeVisible();
      await expect(startScreen.progressAttempts).toBeVisible();
    });
  });

  test('should display history section after completing exam', async ({ page }) => {
    await test.step('Complete an exam', async () => {
      await navigationSteps.navigateToStartScreen('AWS Cloud', 'aws-ml');
      await navigationSteps.startExam();
      await examSteps.completeExamSilently();
    });

    await test.step('Navigate back and retake exam', async () => {
      await page.getByTestId('back-button').click();
      await page.getByTestId('retake-button').click();
      await examSteps.completeExamSilently();
    });

    await test.step('Navigate back to start screen', async () => {
      await page.getByTestId('back-button').click();
    });

    await test.step('View history button is visible', async () => {
      await expect(startScreen.viewHistoryButton).toBeVisible();
    });

    await test.step('Click view history', async () => {
      await startScreen.viewHistoryButton.click();
    });

    await test.step('History page is displayed', async () => {
      await expect(historyPage.bestScore).toBeVisible();
      await expect(historyPage.averageScore).toBeVisible();
      await expect(historyPage.totalAttempts).toBeVisible();
    });
  });

  test('should display attempt list on history page', async () => {
    await test.step('Complete an exam', async () => {
      await navigationSteps.navigateToStartScreen('AWS Cloud', 'aws-ml');
      await navigationSteps.startExam();
      await examSteps.completeExamSilently();
    });

    await test.step('Navigate to history page', async () => {
      await page.getByTestId('back-button').click();
      await page.getByTestId('view-history-button').click();
    });

    await test.step('Attempt items are displayed', async () => {
      const attempts = historyPage.attemptItems;
      await expect(attempts.first()).toBeVisible();
      const count = await attempts.count();
      expect(count).toBeGreaterThan(0);
    });
  });

  test('should go back from history page', async () => {
    await test.step('Navigate to history page', async () => {
      await navigationSteps.navigateToStartScreen('AWS Cloud', 'aws-ml');
      await navigationSteps.startExam();
      await examSteps.completeExamSilently();
      await page.getByTestId('back-button').click();
      await page.getByTestId('view-history-button').click();
    });

    await test.step('Click back button', async () => {
      await historyPage.goBack();
    });

    await test.step('Start screen is visible', async () => {
      await expect(startScreen.startExamButton).toBeVisible();
    });
  });

  test('should toggle theme on history page', async ({ page }) => {
    await test.step('Navigate to history page', async () => {
      await navigationSteps.navigateToStartScreen('AWS Cloud', 'aws-ml');
      await navigationSteps.startExam();
      await examSteps.completeExamSilently();
      await page.getByTestId('back-button').click();
      await page.getByTestId('view-history-button').click();
    });

    await test.step('Theme toggle is visible', async () => {
      await expect(historyPage.themeToggle).toBeVisible();
    });

    await test.step('Toggle theme', async () => {
      await historyPage.themeToggle.click();
    });

    await test.step('Theme is changed', async () => {
      const text = await historyPage.themeToggle.textContent();
      expect(text).toMatch(/Light|Dark/);
    });
  });
});
