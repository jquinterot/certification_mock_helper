import { test, expect } from '../../fixtures';

test.describe('Category Menu', () => {
  test('should display AWS Cloud category with exam cards', async ({ cleanPage: page }) => {
    await test.step('Navigate to AWS Cloud category', async () => {
      await page.getByTestId('category-card-aws-cloud').click();
    });

    await test.step('Category heading is visible', async () => {
      await expect(page.getByRole('heading', { name: 'AWS Cloud', exact: true })).toBeVisible();
    });

    await test.step('Exam cards are displayed', async () => {
      await expect(page.locator('[data-test-id^="exam-card-"]').first()).toBeVisible();
    });
  });

  test('should navigate back to home when clicking back button', async ({ cleanPage: page }) => {
    await test.step('Navigate to category page', async () => {
      await page.getByTestId('category-card-aws-cloud').click();
    });

    await test.step('Click back button', async () => {
      await page.getByTestId('back-button').click();
    });

    await test.step('Home page is displayed', async () => {
      await expect(page.getByTestId('category-card-aws-cloud')).toBeVisible();
    });
  });

  test('should navigate to start screen when selecting an exam', async ({ cleanPage: page }) => {
    await test.step('Navigate to category page', async () => {
      await page.getByTestId('category-card-aws-cloud').click();
    });

    await test.step('Click on first exam card', async () => {
      await page.locator('[data-test-id^="exam-card-"]').first().click();
    });

    await test.step('Start screen is displayed', async () => {
      await expect(page.getByTestId('start-exam-button')).toBeVisible();
    });
  });

  test('should display exam details correctly', async ({ cleanPage: page }) => {
    await test.step('Navigate to category page', async () => {
      await page.getByTestId('category-card-aws-cloud').click();
    });

    await test.step('Exam card shows details', async () => {
      const firstCard = page.locator('[data-test-id^="exam-card-"]').first();
      await expect(firstCard).toBeVisible();
    });
  });

  test('should toggle theme on category page', async ({ cleanPage: page }) => {
    await test.step('Navigate to category page', async () => {
      await page.getByTestId('category-card-aws-cloud').click();
    });

    await test.step('Toggle theme', async () => {
      await page.getByTestId('theme-toggle').click();
    });

    await test.step('Theme toggle text changes', async () => {
      const text = await page.getByTestId('theme-toggle').textContent();
      expect(text).toMatch(/Light|Dark/);
    });
  });
});