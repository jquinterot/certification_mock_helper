import type { Locator, Page } from '@playwright/test';

export const getHomePageLocators = (page: Page) => ({
  themeToggle: page.getByTestId('theme-toggle'),
  categoryCardAws: page.getByTestId('category-card-aws-cloud'),
  categoryCardIstqb: page.getByTestId('category-card-istqb-testing'),
  statCertifications: page.getByTestId('stat-certifications'),
  statTestSets: page.getByTestId('stat-test-sets'),
  statTotalQuestions: page.getByTestId('stat-total-questions'),
});

export class HomePage {
  readonly page: Page;
  readonly themeToggle: Locator;
  readonly categoryCardAws: Locator;
  readonly categoryCardIstqb: Locator;
  readonly statCertifications: Locator;
  readonly statTestSets: Locator;
  readonly statTotalQuestions: Locator;

  constructor(page: Page) {
    this.page = page;
    const locators = getHomePageLocators(page);
    this.themeToggle = locators.themeToggle;
    this.categoryCardAws = locators.categoryCardAws;
    this.categoryCardIstqb = locators.categoryCardIstqb;
    this.statCertifications = locators.statCertifications;
    this.statTestSets = locators.statTestSets;
    this.statTotalQuestions = locators.statTotalQuestions;
  }

  async goto() {
    await this.page.goto('/');
  }

  async toggleTheme() {
    await this.themeToggle.click();
  }

  async selectCategory(category: 'aws' | 'istqb') {
    if (category === 'aws') {
      await this.categoryCardAws.click();
    } else {
      await this.categoryCardIstqb.click();
    }
  }

  async getThemeMode(): Promise<'dark' | 'light'> {
    const text = await this.themeToggle.textContent();
    return text?.includes('Light Mode') ? 'dark' : 'light';
  }
}
