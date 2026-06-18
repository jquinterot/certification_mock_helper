import type { Page } from '@playwright/test';
import { HomePage } from '../pages';

export class ThemeSteps {
  constructor(private page: Page) {}

  async toggleTheme() {
    const homePage = new HomePage(this.page);
    await homePage.toggleTheme();
  }

  async getCurrentTheme(): Promise<'dark' | 'light'> {
    const homePage = new HomePage(this.page);
    return homePage.getThemeMode();
  }

  async verifyThemeToggle() {
    const initialTheme = await this.getCurrentTheme();
    await this.toggleTheme();
    const newTheme = await this.getCurrentTheme();
    return initialTheme !== newTheme;
  }
}
