import { test, expect } from '@playwright/test';

function getByTestId(page: any, testId: string) {
  return page.locator(`[data-test-id="${testId}"]`);
}

test.describe('Home Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(1000);
    // Clear storage to ensure clean state
    await page.evaluate(() => {
      localStorage.clear();
      sessionStorage.clear();
    });
    await page.reload();
    await page.waitForTimeout(1000);
  });

  test.afterEach(async ({ page }) => {
    try {
      await page.evaluate(() => {
        localStorage.clear();
        sessionStorage.clear();
      });
    } catch {
      // Ignore errors
    }
  });

  test('should display the home page with title and description', async ({ page }) => {
    await test.step('I can see the main heading', async () => {
      await expect(page.getByRole('heading', { name: 'Certification Practice Hub' })).toBeVisible();
    });

    await test.step('I can see the description', async () => {
      await expect(page.getByText('Practice exams for AWS and ISTQB certifications')).toBeVisible();
    });
  });

  test('should display both category cards', async ({ page }) => {
    await test.step('AWS Cloud category card is visible', async () => {
      await expect(getByTestId(page, 'category-card-aws-cloud')).toBeVisible();
    });

    await test.step('ISTQB Testing category card is visible', async () => {
      await expect(getByTestId(page, 'category-card-istqb-testing')).toBeVisible();
    });
  });

  test('should display statistics', async ({ page }) => {
    await test.step('Stats are visible', async () => {
      await expect(page.getByText('Certifications').first()).toBeVisible();
      await expect(page.getByText('Test Sets')).toBeVisible();
      await expect(page.getByText('Total Questions')).toBeVisible();
    });

    await test.step('Stats contain positive numbers', async () => {
      const certs = await getByTestId(page, 'stat-certifications').textContent();
      const testSets = await getByTestId(page, 'stat-test-sets').textContent();
      const questions = await getByTestId(page, 'stat-total-questions').textContent();
      expect(parseInt(certs || '0', 10)).toBeGreaterThan(0);
      expect(parseInt(testSets || '0', 10)).toBeGreaterThan(0);
      expect(parseInt(questions || '0', 10)).toBeGreaterThan(0);
    });
  });

  test('should toggle theme', async ({ page }) => {
    const themeToggle = getByTestId(page, 'theme-toggle');

    await test.step('Theme toggle is visible', async () => {
      await expect(themeToggle).toBeVisible();
    });

    await test.step('Initial theme state', async () => {
      const text = await themeToggle.textContent();
      expect(text).toMatch(/Light Mode|Dark Mode/);
    });

    await test.step('Click toggle and verify change', async () => {
      const initialText = await themeToggle.textContent();
      await themeToggle.click();
      await page.waitForTimeout(500);
      const afterText = await themeToggle.textContent();
      expect(afterText).not.toBe(initialText);
    });
  });

  test('should navigate to AWS Cloud category', async ({ page }) => {
    await test.step('Click AWS Cloud card', async () => {
      await getByTestId(page, 'category-card-aws-cloud').click();
    });

    await test.step('Category page shows AWS Cloud heading', async () => {
      await expect(page.getByRole('heading', { name: 'AWS Cloud' })).toBeVisible();
    });

    await test.step('Exam cards are displayed', async () => {
      await expect(page.locator('[data-test-id^="exam-card-"]').first()).toBeVisible();
    });
  });

  test('should navigate to ISTQB Testing category', async ({ page }) => {
    await test.step('Click ISTQB Testing card', async () => {
      await getByTestId(page, 'category-card-istqb-testing').click();
    });

    await test.step('Category page shows ISTQB Testing heading', async () => {
      await expect(page.getByRole('heading', { name: 'ISTQB Testing', exact: true })).toBeVisible();
    });
  });
});
