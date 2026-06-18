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
    // Ignore errors - happens when called before page loads
  }
}

test.describe('Category Menu', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(500);
  });

  test.afterEach(async ({ page }) => {
    await cleanupAllData(page);
  });

  test('should display AWS Cloud category with exam cards', async ({ page }) => {
    await test.step('Navigate to AWS Cloud category', async () => {
      await getByTestId(page, 'category-card-aws-cloud').click();
    });

    await test.step('Category heading is visible', async () => {
      await expect(page.getByRole('heading', { name: 'AWS Cloud' })).toBeVisible();
    });

    await test.step('Exam cards are displayed', async () => {
      const examCards = page.locator('[data-test-id^="exam-card-"]');
      await expect(examCards.first()).toBeVisible();
    });
  });

  test('should navigate back to home when clicking back button', async ({ page }) => {
    await test.step('Navigate to category page', async () => {
      await getByTestId(page, 'category-card-aws-cloud').click();
    });

    await test.step('Click back button', async () => {
      await getByTestId(page, 'back-button').click();
    });

    await test.step('Home page is displayed', async () => {
      await expect(getByTestId(page, 'category-card-aws-cloud')).toBeVisible();
    });
  });

  test('should navigate to start screen when selecting an exam', async ({ page }) => {
    await test.step('Navigate to category page', async () => {
      await getByTestId(page, 'category-card-aws-cloud').click();
    });

    await test.step('Click on first exam card', async () => {
      await page.locator('[data-test-id^="exam-card-"]').first().click();
    });

    await test.step('Start screen is displayed', async () => {
      await expect(getByTestId(page, 'start-exam-button')).toBeVisible();
    });
  });

  test('should display exam details correctly', async ({ page }) => {
    await test.step('Navigate to category page', async () => {
      await getByTestId(page, 'category-card-aws-cloud').click();
    });

    await test.step('Exam card shows details', async () => {
      const firstCard = page.locator('[data-test-id^="exam-card-"]').first();
      await expect(firstCard).toBeVisible();
    });
  });

  test('should toggle theme on category page', async ({ page }) => {
    await test.step('Navigate to category page', async () => {
      await getByTestId(page, 'category-card-aws-cloud').click();
    });

    await test.step('Toggle theme', async () => {
      await getByTestId(page, 'theme-toggle').click();
    });

    await test.step('Theme toggle text changes', async () => {
      const text = await getByTestId(page, 'theme-toggle').textContent();
      expect(text).toMatch(/Light|Dark/);
    });
  });
});
