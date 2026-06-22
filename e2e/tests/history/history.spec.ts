import { test, expect } from '../../fixtures';

test.describe('Exam History', () => {
  test('should show progress stats after completing an exam', async ({ completedExamPage: page }) => {
    await test.step('Navigate back to start screen', async () => {
      await page.getByTestId('back-button').click();
      await expect(page.getByTestId('category-card-aws-cloud')).toBeVisible();
      await page.getByTestId('category-card-aws-cloud').click();
      await expect(page.getByRole('heading', { name: 'AWS Cloud' })).toBeVisible();
      await page.getByTestId('exam-card-aws-ml').click();
    });

    await test.step('Progress section is visible', async () => {
      await expect(page.getByTestId('progress-best-score')).toBeVisible({ timeout: 10000 });
    });
  });

  test('should display history section after completing exam', async ({ historyPage: page }) => {
    await test.step('History page is displayed', async () => {
      await expect(page.getByTestId('best-score')).toBeVisible();
    });
  });

  test('should display attempt list on history page', async ({ historyPage: page }) => {
    await test.step('Attempt items are displayed', async () => {
      const attempts = page.locator('[data-test-id^="attempt-"]');
      await expect(attempts.first()).toBeVisible({ timeout: 10000 });
    });
  });

  test('should go back from history page', async ({ historyPage: page }) => {
    await test.step('Click back button', async () => {
      await page.getByTestId('back-button').click();
    });

    await test.step('Start screen is visible', async () => {
      await expect(page.getByTestId('start-exam-button')).toBeVisible({ timeout: 10000 });
    });
  });

  test('should toggle theme on history page', async ({ historyPage: page }) => {
    await test.step('Toggle theme', async () => {
      await page.getByTestId('theme-toggle').click();
    });

    await test.step('Theme is changed', async () => {
      const text = await page.getByTestId('theme-toggle').textContent();
      expect(text).toMatch(/Light|Dark/);
    });
  });
});