import { test, expect, type Page } from '@playwright/test';
import { ResultsScreenPage, StartScreenPage } from '../../pages';
import { NavigationSteps, ExamSteps } from '../../steps';

async function cleanupAllData(page: Page) {
  await page.evaluate(() => {
    localStorage.clear();
    sessionStorage.clear();
  });
}

test.describe('Results Screen', () => {
  let resultsScreen: ResultsScreenPage;
  let startScreen: StartScreenPage;
  let navigationSteps: NavigationSteps;
  let examSteps: ExamSteps;

  test.beforeEach(async ({ page }) => {
    resultsScreen = new ResultsScreenPage(page);
    startScreen = new StartScreenPage(page);
    navigationSteps = new NavigationSteps(page);
    examSteps = new ExamSteps(page);
    await cleanupAllData(page);
  });

  test.afterEach(async ({ page }) => {
    await cleanupAllData(page);
  });

  test('should display results with all required elements', async () => {
    await test.step('Complete an exam', async () => {
      await navigationSteps.navigateToStartScreen('AWS Cloud', 'aws-ml');
      await navigationSteps.startExam();
      await examSteps.completeExamSilently();
    });

    await test.step('Pass/fail badge is visible', async () => {
      await expect(resultsScreen.passFailBadge).toBeVisible();
    });

    await test.step('Score correct is displayed', async () => {
      await expect(resultsScreen.scoreCorrect).toBeVisible();
    });

    await test.step('Score incorrect is displayed', async () => {
      await expect(resultsScreen.scoreIncorrect).toBeVisible();
    });

    await test.step('Score percentage is displayed', async () => {
      await expect(resultsScreen.scorePercentage).toBeVisible();
    });
  });

  test('should display domain breakdown section', async () => {
    await test.step('Complete an exam', async () => {
      await navigationSteps.navigateToStartScreen('AWS Cloud', 'aws-ml');
      await navigationSteps.startExam();
      await examSteps.completeExamSilently();
    });

    await test.step('Domain breakdown section is visible', async () => {
      await expect(resultsScreen.domainBreakdown).toBeVisible();
    });

    await test.step('Domain breakdown heading is shown', async () => {
      await expect(resultsScreen.domainBreakdown.getByText('Domain Breakdown')).toBeVisible();
    });
  });

  test('should have review all button', async () => {
    await test.step('Complete an exam', async () => {
      await navigationSteps.navigateToStartScreen('AWS Cloud', 'aws-ml');
      await navigationSteps.startExam();
      await examSteps.completeExamSilently();
    });

    await test.step('Review all button is visible and enabled', async () => {
      await expect(resultsScreen.reviewAllButton).toBeVisible();
      await expect(resultsScreen.reviewAllButton).toBeEnabled();
    });
  });

  test('should have retake exam button', async () => {
    await test.step('Complete an exam', async () => {
      await navigationSteps.navigateToStartScreen('AWS Cloud', 'aws-ml');
      await navigationSteps.startExam();
      await examSteps.completeExamSilently();
    });

    await test.step('Retake button is visible and enabled', async () => {
      await expect(resultsScreen.retakeButton).toBeVisible();
      await expect(resultsScreen.retakeButton).toBeEnabled();
    });
  });

  test('should toggle theme on results page', async () => {
    await test.step('Complete an exam', async () => {
      await navigationSteps.navigateToStartScreen('AWS Cloud', 'aws-ml');
      await navigationSteps.startExam();
      await examSteps.completeExamSilently();
    });

    await test.step('Theme toggle is visible', async () => {
      await expect(resultsScreen.themeToggle).toBeVisible();
    });

    await test.step('Toggle theme', async () => {
      await resultsScreen.themeToggle.click();
    });

    await test.step('Theme is changed', async () => {
      const text = await resultsScreen.themeToggle.textContent();
      expect(text).toMatch(/Light|Dark/);
    });
  });

  test('should navigate back to home from results', async () => {
    await test.step('Complete an exam', async () => {
      await navigationSteps.navigateToStartScreen('AWS Cloud', 'aws-ml');
      await navigationSteps.startExam();
      await examSteps.completeExamSilently();
    });

    await test.step('Click retake to go back to start screen', async () => {
      await resultsScreen.retakeButton.click();
    });

    await test.step('Start screen is visible', async () => {
      await expect(startScreen.startExamButton).toBeVisible();
    });
  });
});
