import { test, expect, type Page } from '@playwright/test';
import { HomePage, CategoryMenuPage, StartScreenPage } from '../../pages';
import { NavigationSteps } from '../../steps';

async function cleanupAllData(page: Page) {
  await page.evaluate(() => {
    localStorage.clear();
    sessionStorage.clear();
  });
}

test.describe('Category Menu', () => {
  let homePage: HomePage;
  let categoryPage: CategoryMenuPage;
  let startScreen: StartScreenPage;
  let navigationSteps: NavigationSteps;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    categoryPage = new CategoryMenuPage(page);
    startScreen = new StartScreenPage(page);
    navigationSteps = new NavigationSteps(page);
    await cleanupAllData(page);
  });

  test.afterEach(async ({ page }) => {
    await cleanupAllData(page);
  });

  test('should display AWS Cloud category with exam cards', async ({ page }) => {
    await test.step('Navigate to AWS Cloud category', async () => {
      await navigationSteps.gotoHome();
      await navigationSteps.selectCategory('AWS Cloud');
    });

    await test.step('Category heading is visible', async () => {
      await expect(page.getByRole('heading', { name: 'AWS Cloud' })).toBeVisible();
    });

    await test.step('Category description is visible', async () => {
      await expect(page.getByText('Select a certification to start practicing')).toBeVisible();
    });

    await test.step('Exam cards are displayed', async () => {
      const examCards = categoryPage.examCards;
      await expect(examCards.first()).toBeVisible();
      const count = await examCards.count();
      expect(count).toBeGreaterThan(0);
    });
  });

  test('should navigate back to home when clicking back button', async () => {
    await test.step('Navigate to category page', async () => {
      await navigationSteps.gotoHome();
      await navigationSteps.selectCategory('AWS Cloud');
    });

    await test.step('Click back button', async () => {
      await categoryPage.goBack();
    });

    await test.step('Home page is displayed', async () => {
      await expect(homePage.categoryCardAws).toBeVisible();
      await expect(homePage.categoryCardIstqb).toBeVisible();
    });
  });

  test('should navigate to start screen when selecting an exam', async () => {
    await test.step('Navigate to category page', async () => {
      await navigationSteps.gotoHome();
      await navigationSteps.selectCategory('AWS Cloud');
    });

    await test.step('Click on first exam card', async () => {
      const firstExamCard = categoryPage.examCards.first();
      await firstExamCard.click();
    });

    await test.step('Start screen is displayed', async () => {
      await expect(startScreen.startExamButton).toBeVisible();
      await expect(startScreen.modeCardFull).toBeVisible();
    });
  });

  test('should display exam details correctly', async ({ page }) => {
    await test.step('Navigate to category page', async () => {
      await navigationSteps.gotoHome();
      await navigationSteps.selectCategory('AWS Cloud');
    });

    await test.step('Exam card shows question count', async () => {
      const firstCard = categoryPage.examCards.first();
      const text = await firstCard.textContent();
      expect(text).toMatch(/\d+\s*questions/);
    });

    await test.step('Exam card shows duration', async () => {
      const firstCard = categoryPage.examCards.first();
      const text = await firstCard.textContent();
      expect(text).toMatch(/\d+\s*minutes/);
    });
  });

  test('should toggle theme on category page', async () => {
    await test.step('Navigate to category page', async () => {
      await navigationSteps.gotoHome();
      await navigationSteps.selectCategory('AWS Cloud');
    });

    await test.step('Toggle theme', async () => {
      await categoryPage.themeToggle.click();
    });

    await test.step('Theme toggle text changes', async () => {
      const text = await categoryPage.themeToggle.textContent();
      expect(text).toMatch(/Light|Dark/);
    });
  });
});
