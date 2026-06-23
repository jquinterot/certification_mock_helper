import { test, expect } from '../../fixtures';

test.describe('Results Screen', () => {
  test('should display results with all required elements', async ({ completedExamPage: page }) => {
    await test.step('Pass/fail badge is visible', async () => {
      await expect(page.getByTestId('results-pass-fail-badge')).toBeVisible();
    });

    await test.step('Score correct is displayed', async () => {
      await expect(page.getByTestId('score-correct')).toBeVisible();
    });

    await test.step('Score incorrect is displayed', async () => {
      await expect(page.getByTestId('score-incorrect')).toBeVisible();
    });

    await test.step('Score percentage is displayed', async () => {
      await expect(page.getByTestId('score-percentage')).toBeVisible();
    });
  });

  test('should display domain breakdown section', async ({ completedExamPage: page }) => {
    await test.step('Domain breakdown section is visible', async () => {
      await expect(page.getByTestId('domain-breakdown')).toBeVisible();
    });
  });

  test('should have review all button', async ({ completedExamPage: page }) => {
    await test.step('Review all button is visible', async () => {
      await expect(page.getByTestId('review-all-button')).toBeVisible();
    });
  });

  test('should have retake exam button', async ({ completedExamPage: page }) => {
    await test.step('Retake button is visible', async () => {
      await expect(page.getByTestId('retake-button')).toBeVisible();
    });
  });

  test('should toggle theme on results page', async ({ completedExamPage: page }) => {
    await test.step('Theme toggle is visible', async () => {
      await expect(page.getByTestId('theme-toggle')).toBeVisible();
    });

    await test.step('Toggle theme', async () => {
      await page.getByTestId('theme-toggle').click();
    });

    await test.step('Theme is changed', async () => {
      const text = await page.getByTestId('theme-toggle').textContent();
      expect(text).toMatch(/Light|Dark/);
    });
  });

  test('should navigate back to start screen from results', async ({ completedExamPage: page }) => {
    await test.step('Click back to home button', async () => {
      await page.getByTestId('back-button').click();
      await expect(page.getByTestId('category-card-istqb-testing')).toBeVisible();
    });

    await test.step('Navigate to start screen', async () => {
      await page.getByTestId('category-card-istqb-testing').click();
      await expect(page.getByRole('heading', { name: 'ISTQB Testing', exact: true })).toBeVisible();
      await page.getByTestId('exam-card-istqb-foundation').click();
    });

    await test.step('Start screen is visible', async () => {
      await expect(page.getByTestId('start-exam-button')).toBeVisible({ timeout: 10000 });
    });
  });
});