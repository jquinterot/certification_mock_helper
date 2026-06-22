import { test, expect } from '../../fixtures';

test.describe('Home Page', () => {
  test('should display the home page with title and description', async ({ cleanPage: page }) => {
    await test.step('I can see the main heading', async () => {
      await expect(page.getByRole('heading', { name: 'Certification Practice Hub' })).toBeVisible();
    });

    await test.step('I can see the description', async () => {
      await expect(page.getByText('Practice exams for AWS and ISTQB certifications')).toBeVisible();
    });
  });

  test('should display both category cards', async ({ cleanPage: page }) => {
    await test.step('AWS Cloud category card is visible', async () => {
      await expect(page.getByTestId('category-card-aws-cloud')).toBeVisible();
    });

    await test.step('ISTQB Testing category card is visible', async () => {
      await expect(page.getByTestId('category-card-istqb-testing')).toBeVisible();
    });
  });

  test('should display statistics', async ({ cleanPage: page }) => {
    await test.step('Stats are visible', async () => {
      await expect(page.getByText('Certifications').first()).toBeVisible();
      await expect(page.getByText('Test Sets')).toBeVisible();
      await expect(page.getByText('Total Questions')).toBeVisible();
    });

    await test.step('Stats contain positive numbers', async () => {
      const certs = await page.getByTestId('stat-certifications').textContent();
      const testSets = await page.getByTestId('stat-test-sets').textContent();
      const questions = await page.getByTestId('stat-total-questions').textContent();
      expect(parseInt(certs ?? '0', 10)).toBeGreaterThan(0);
      expect(parseInt(testSets ?? '0', 10)).toBeGreaterThan(0);
      expect(parseInt(questions ?? '0', 10)).toBeGreaterThan(0);
    });
  });

  test('should toggle theme', async ({ cleanPage: page, homePage }) => {
    await test.step('Theme toggle is visible', async () => {
      await expect(homePage.themeToggle).toBeVisible();
    });

    await test.step('Initial theme state', async () => {
      const text = await homePage.themeToggle.textContent();
      expect(text).toMatch(/Light Mode|Dark Mode/);
    });

    await test.step('Click toggle and verify change', async () => {
      const initialText = await homePage.themeToggle.textContent();
      await homePage.toggleTheme();
      const afterText = await homePage.themeToggle.textContent();
      expect(afterText).not.toBe(initialText);
    });
  });

  test('should navigate to AWS Cloud category', async ({ cleanPage: page }) => {
    await test.step('Click AWS Cloud card', async () => {
      await page.getByTestId('category-card-aws-cloud').click();
    });

    await test.step('Category page shows AWS Cloud heading', async () => {
      await expect(page.getByRole('heading', { name: 'AWS Cloud' })).toBeVisible();
    });

    await test.step('Exam cards are displayed', async () => {
      await expect(page.locator('[data-test-id^="exam-card-"]').first()).toBeVisible();
    });
  });

  test('should navigate to ISTQB Testing category', async ({ cleanPage: page }) => {
    await test.step('Click ISTQB Testing card', async () => {
      await page.getByTestId('category-card-istqb-testing').click();
    });

    await test.step('Category page shows ISTQB Testing heading', async () => {
      await expect(page.getByRole('heading', { name: 'ISTQB Testing', exact: true })).toBeVisible();
    });
  });
});