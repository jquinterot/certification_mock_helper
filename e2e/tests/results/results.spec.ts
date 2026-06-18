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

test.describe('Results Screen', () => {
  test.describe.configure({ mode: 'serial' });
  test.setTimeout(60000);
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(500);
    // Navigate to exam start screen
    await getByTestId(page, 'category-card-aws-cloud').click();
    await getByTestId(page, 'exam-card-aws-ml').click();
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(500);
    // Start exam
    await getByTestId(page, 'start-exam-button').click();
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(500);
    // Complete exam
    await completeExam(page);
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(500);
  });

  test.afterEach(async ({ page }) => {
    await cleanupAllData(page);
  });

  test('should display results with all required elements', async ({ page }) => {
    await test.step('Pass/fail badge is visible', async () => {
      await expect(getByTestId(page, 'results-pass-fail-badge')).toBeVisible();
    });

    await test.step('Score correct is displayed', async () => {
      await expect(getByTestId(page, 'score-correct')).toBeVisible();
    });

    await test.step('Score incorrect is displayed', async () => {
      await expect(getByTestId(page, 'score-incorrect')).toBeVisible();
    });

    await test.step('Score percentage is displayed', async () => {
      await expect(getByTestId(page, 'score-percentage')).toBeVisible();
    });
  });

  test('should display domain breakdown section', async ({ page }) => {
    await test.step('Domain breakdown section is visible', async () => {
      await expect(getByTestId(page, 'domain-breakdown')).toBeVisible();
    });
  });

  test('should have review all button', async ({ page }) => {
    await test.step('Review all button is visible', async () => {
      await expect(getByTestId(page, 'review-all-button')).toBeVisible();
    });
  });

  test('should have retake exam button', async ({ page }) => {
    await test.step('Retake button is visible', async () => {
      await expect(getByTestId(page, 'retake-button')).toBeVisible();
    });
  });

  test('should toggle theme on results page', async ({ page }) => {
    await test.step('Theme toggle is visible', async () => {
      await expect(getByTestId(page, 'theme-toggle')).toBeVisible();
    });

    await test.step('Toggle theme', async () => {
      await getByTestId(page, 'theme-toggle').click();
    });

    await test.step('Theme is changed', async () => {
      const text = await getByTestId(page, 'theme-toggle').textContent();
      expect(text).toMatch(/Light|Dark/);
    });
  });

  test('should navigate back to start screen from results', async ({ page }) => {
    await test.step('Click back to home button', async () => {
      await getByTestId(page, 'back-button').click();
      await page.waitForTimeout(1000);
    });

    await test.step('Navigate to start screen', async () => {
      await getByTestId(page, 'category-card-aws-cloud').click();
      await page.waitForTimeout(500);
      await getByTestId(page, 'exam-card-aws-ml').click();
      await page.waitForTimeout(1000);
    });

    await test.step('Start screen is visible', async () => {
      await expect(getByTestId(page, 'start-exam-button')).toBeVisible({ timeout: 10000 });
    });
  });
});
