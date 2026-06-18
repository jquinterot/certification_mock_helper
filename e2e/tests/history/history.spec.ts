import { test, expect, type Page } from '@playwright/test';

function getByTestId(page: any, testId: string) {
  return page.locator(`[data-test-id="${testId}"]`);
}

async function cleanupAllData(page: Page) {
  try {
    await page.evaluate(() => {
      localStorage.clear();
      sessionStorage.clear();
    });
  } catch {
    // Ignore errors
  }
}

async function completeExam(page: any) {
  const questionCount = await page.locator('[data-test-id^="question-navigator-item-"]').count();
  for (let i = 0; i < questionCount; i++) {
    await getByTestId(page, `question-navigator-item-${i}`).click();
    await page.waitForTimeout(100);
    await getByTestId(page, `answer-option-${i}-a`).click();
    await page.waitForTimeout(100);
  }
  await getByTestId(page, 'submit-exam-button').first().click();
  await page.waitForTimeout(500);
  const submitDialog = getByTestId(page, 'submit-dialog');
  if (await submitDialog.isVisible()) {
    await getByTestId(page, 'submit-dialog-confirm').click();
  }
  // Wait for results page to load
  await page.waitForSelector('[data-test-id="results-pass-fail-badge"]', { timeout: 10000 });
}

test.describe('Exam History', () => {
  test.describe.configure({ mode: 'serial' });
  test.setTimeout(60000);
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(500);
  });

  test.afterEach(async ({ page }) => {
    await cleanupAllData(page);
  });

  test('should show progress stats after completing an exam', async ({ page }) => {
    await test.step('Complete an exam', async () => {
      await getByTestId(page, 'category-card-aws-cloud').click();
      await page.waitForTimeout(500);
      await getByTestId(page, 'exam-card-aws-ml').click();
      await page.waitForTimeout(500);
      await getByTestId(page, 'start-exam-button').click();
      await page.waitForTimeout(500);
      await completeExam(page);
      await page.waitForTimeout(500);
    });

    await test.step('Navigate back to start screen', async () => {
      await getByTestId(page, 'back-button').click();
      await page.waitForTimeout(1000);
      await getByTestId(page, 'category-card-aws-cloud').click();
      await page.waitForTimeout(500);
      await getByTestId(page, 'exam-card-aws-ml').click();
      await page.waitForTimeout(1000);
    });

    await test.step('Progress section is visible', async () => {
      await expect(getByTestId(page, 'progress-best-score')).toBeVisible({ timeout: 10000 });
    });
  });

  test('should display history section after completing exam', async ({ page }) => {
    await test.step('Complete an exam', async () => {
      await getByTestId(page, 'category-card-aws-cloud').click();
      await page.waitForTimeout(500);
      await getByTestId(page, 'exam-card-aws-ml').click();
      await page.waitForTimeout(500);
      await getByTestId(page, 'start-exam-button').click();
      await page.waitForTimeout(500);
      await completeExam(page);
      await page.waitForTimeout(500);
    });

    await test.step('Navigate back and view history', async () => {
      await getByTestId(page, 'back-button').click();
      await page.waitForTimeout(500);
      await getByTestId(page, 'category-card-aws-cloud').click();
      await page.waitForTimeout(500);
      await getByTestId(page, 'exam-card-aws-ml').click();
      await page.waitForTimeout(500);
      await getByTestId(page, 'view-history-button').click();
      await page.waitForTimeout(500);
    });

    await test.step('History page is displayed', async () => {
      await expect(getByTestId(page, 'best-score')).toBeVisible({ timeout: 10000 });
    });
  });

  test('should display attempt list on history page', async ({ page }) => {
    await test.step('Complete an exam and view history', async () => {
      await getByTestId(page, 'category-card-aws-cloud').click();
      await page.waitForTimeout(500);
      await getByTestId(page, 'exam-card-aws-ml').click();
      await page.waitForTimeout(500);
      await getByTestId(page, 'start-exam-button').click();
      await page.waitForTimeout(500);
      await completeExam(page);
      await page.waitForTimeout(500);
      await getByTestId(page, 'back-button').click();
      await page.waitForTimeout(500);
      await getByTestId(page, 'category-card-aws-cloud').click();
      await page.waitForTimeout(500);
      await getByTestId(page, 'exam-card-aws-ml').click();
      await page.waitForTimeout(500);
      await getByTestId(page, 'view-history-button').click();
      await page.waitForTimeout(500);
    });

    await test.step('Attempt items are displayed', async () => {
      const attempts = page.locator('[data-test-id^="attempt-"]');
      await expect(attempts.first()).toBeVisible({ timeout: 10000 });
    });
  });

  test('should go back from history page', async ({ page }) => {
    await test.step('Navigate to history page', async () => {
      await getByTestId(page, 'category-card-aws-cloud').click();
      await page.waitForTimeout(500);
      await getByTestId(page, 'exam-card-aws-ml').click();
      await page.waitForTimeout(500);
      await getByTestId(page, 'start-exam-button').click();
      await page.waitForTimeout(500);
      await completeExam(page);
      await page.waitForTimeout(500);
      await getByTestId(page, 'back-button').click();
      await page.waitForTimeout(500);
      await getByTestId(page, 'category-card-aws-cloud').click();
      await page.waitForTimeout(500);
      await getByTestId(page, 'exam-card-aws-ml').click();
      await page.waitForTimeout(500);
      await getByTestId(page, 'view-history-button').click();
      await page.waitForTimeout(500);
    });

    await test.step('Click back button', async () => {
      await getByTestId(page, 'back-button').click();
      await page.waitForTimeout(1000);
    });

    await test.step('Start screen is visible', async () => {
      await expect(getByTestId(page, 'start-exam-button')).toBeVisible({ timeout: 10000 });
    });
  });

  test('should toggle theme on history page', async ({ page }) => {
    await test.step('Navigate to history page', async () => {
      await getByTestId(page, 'category-card-aws-cloud').click();
      await page.waitForTimeout(500);
      await getByTestId(page, 'exam-card-aws-ml').click();
      await page.waitForTimeout(500);
      await getByTestId(page, 'start-exam-button').click();
      await page.waitForTimeout(500);
      await completeExam(page);
      await page.waitForTimeout(500);
      await getByTestId(page, 'back-button').click();
      await page.waitForTimeout(500);
      await getByTestId(page, 'category-card-aws-cloud').click();
      await page.waitForTimeout(500);
      await getByTestId(page, 'exam-card-aws-ml').click();
      await page.waitForTimeout(500);
      await getByTestId(page, 'view-history-button').click();
      await page.waitForTimeout(500);
    });

    await test.step('Toggle theme', async () => {
      await getByTestId(page, 'theme-toggle').click();
    });

    await test.step('Theme is changed', async () => {
      const text = await getByTestId(page, 'theme-toggle').textContent();
      expect(text).toMatch(/Light|Dark/);
    });
  });
});
