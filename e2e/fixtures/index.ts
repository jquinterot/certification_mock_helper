import { test as base, expect, type Page } from '@playwright/test';
import {
  HomePage,
  CategoryMenuPage,
  StartScreenPage,
  ExamScreenPage,
  ResultsScreenPage,
  ExamHistoryPage,
  ExitDialogPage,
  SubmitDialogPage,
} from '../pages';
import {
  NavigationSteps,
  ExamSteps,
  ThemeSteps,
} from '../steps';
import { EXAM_IDS, CATEGORIES } from '../utils/constants';

/**
 * Cleans localStorage and sessionStorage on the given page.
 * Wrapped in try/catch to handle SecurityError on about:blank.
 */
async function cleanStorage(page: Page): Promise<void> {
  try {
    await page.evaluate(() => {
      localStorage.clear();
      sessionStorage.clear();
    });
  } catch {
    // Ignore errors on restricted origins
  }
}

/**
 * Navigates to home, clears storage, and reloads to ensure clean state.
 */
async function cleanHomePage(page: Page): Promise<void> {
  await page.goto('/');
  await page.waitForLoadState('networkidle');
  await cleanStorage(page);
  await page.reload();
  await page.waitForLoadState('networkidle');
}

/**
 * Navigate from home to the start screen for a given category and exam.
 */
async function navigateToStartScreen(page: Page, categoryId: string, examId: string): Promise<void> {
  const categoryKey = categoryId === CATEGORIES.AWS ? 'aws' : 'istqb';
  await page.getByTestId(`category-card-${categoryKey === 'aws' ? 'aws-cloud' : 'istqb-testing'}`).click();
  await expect(page.getByRole('heading', { name: categoryId })).toBeVisible();
  await page.getByTestId(`exam-card-${examId}`).click();
  await expect(page.getByTestId('start-exam-button')).toBeVisible();
}

/**
 * Starts an exam from the start screen and waits for the question interface to load.
 */
async function startExam(page: Page): Promise<void> {
  await page.getByTestId('start-exam-button').click();
  await expect(page.getByTestId('question-0')).toBeVisible();
}

/**
 * Completes an exam by answering all questions with option 'a', submitting, and confirming.
 * Waits for the results screen to appear.
 */
async function completeExam(page: Page): Promise<void> {
  const examScreen = new ExamScreenPage(page);
  const submitDialog = new SubmitDialogPage(page);

  const questionCount = await examScreen.questionNavigatorItems.count();
  for (let i = 0; i < questionCount; i++) {
    await examScreen.goToQuestion(i);
    await examScreen.selectAnswer(i, 'a');
  }

  await examScreen.submitExamButton.first().click();
  await expect(submitDialog.dialog).toBeVisible();
  await submitDialog.confirmSubmit();

  await expect(page.getByTestId('results-pass-fail-badge')).toBeVisible({ timeout: 15000 });
}

/**
 * Full exam flow: navigate to start screen, start exam, complete it, and land on results.
 */
async function completeFullExam(page: Page): Promise<void> {
  await navigateToStartScreen(page, CATEGORIES.AWS, EXAM_IDS.AWS_ML);
  await startExam(page);
  await completeExam(page);
}

/**
 * Navigate from results back to the start screen.
 */
async function navigateBackToStartScreen(page: Page): Promise<void> {
  await page.getByTestId('back-button').click();
  await expect(page.getByTestId('category-card-aws-cloud')).toBeVisible();
  await navigateToStartScreen(page, CATEGORIES.AWS, EXAM_IDS.AWS_ML);
}

// ─────────────────────────────────────────────────────────────────────────────
// Custom Fixtures
// ─────────────────────────────────────────────────────────────────────────────

/**
 * The custom test fixture provides:
 * - `cleanPage`: Page with auto-cleaned storage before/after each test
 * - Page Object Model instances (auto-instantiated)
 * - Step library instances (auto-instantiated)
 * - `completedExamPage`: Page that has completed an exam and is on the results screen
 * - `historyPage`: Page navigated to the exam history page after completing an exam
 */
type AppFixtures = {
  cleanPage: Page;
  homePage: HomePage;
  categoryMenuPage: CategoryMenuPage;
  startScreenPage: StartScreenPage;
  examScreenPage: ExamScreenPage;
  resultsScreenPage: ResultsScreenPage;
  examHistoryPage: ExamHistoryPage;
  exitDialogPage: ExitDialogPage;
  submitDialogPage: SubmitDialogPage;
  navigationSteps: NavigationSteps;
  examSteps: ExamSteps;
  themeSteps: ThemeSteps;
  completedExamPage: Page;
  historyPage: Page;
};

export const test = base.extend<AppFixtures>({
  // Auto-cleaning page fixture: clears storage before and after each test
  cleanPage: async ({ page }, use) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    await cleanStorage(page);
    await page.reload();
    await page.waitForLoadState('networkidle');
    await use(page);
    await cleanStorage(page);
  },

  // POM fixtures — zero-cost, just instantiates the class
  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },

  categoryMenuPage: async ({ page }, use) => {
    await use(new CategoryMenuPage(page));
  },

  startScreenPage: async ({ page }, use) => {
    await use(new StartScreenPage(page));
  },

  examScreenPage: async ({ page }, use) => {
    await use(new ExamScreenPage(page));
  },

  resultsScreenPage: async ({ page }, use) => {
    await use(new ResultsScreenPage(page));
  },

  examHistoryPage: async ({ page }, use) => {
    await use(new ExamHistoryPage(page));
  },

  exitDialogPage: async ({ page }, use) => {
    await use(new ExitDialogPage(page));
  },

  submitDialogPage: async ({ page }, use) => {
    await use(new SubmitDialogPage(page));
  },

  // Step library fixtures
  navigationSteps: async ({ page }, use) => {
    await use(new NavigationSteps(page));
  },

  examSteps: async ({ page }, use) => {
    await use(new ExamSteps(page));
  },

  themeSteps: async ({ page }, use) => {
    await use(new ThemeSteps(page));
  },

  // Context fixture: completes an entire exam and lands on the results screen
  completedExamPage: async ({ page }, use) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    await cleanStorage(page);
    await completeFullExam(page);
    await use(page);
    await cleanStorage(page);
  },

  // Context fixture: completes an exam then navigates to the history page
  historyPage: async ({ page }, use) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    await cleanStorage(page);
    await completeFullExam(page);
    await navigateBackToStartScreen(page);
    await page.getByTestId('view-history-button').click();
    await expect(page.getByTestId('best-score')).toBeVisible({ timeout: 10000 });
    await use(page);
    await cleanStorage(page);
  },
});

export { expect };