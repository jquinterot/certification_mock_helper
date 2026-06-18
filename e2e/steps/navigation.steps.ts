import type { Page } from '@playwright/test';
import { HomePage, CategoryMenuPage, StartScreenPage } from '../pages';

export class NavigationSteps {
  constructor(private page: Page) {}

  async gotoHome() {
    await this.page.goto('/');
  }

  async selectCategory(category: 'AWS Cloud' | 'ISTQB Testing') {
    const homePage = new HomePage(this.page);
    const categoryKey = category === 'AWS Cloud' ? 'aws' : 'istqb';
    await homePage.selectCategory(categoryKey);
  }

  async selectExam(examId: string) {
    const categoryPage = new CategoryMenuPage(this.page);
    await categoryPage.selectExam(examId);
  }

  async navigateToStartScreen(category: 'AWS Cloud' | 'ISTQB Testing', examId: string) {
    await this.selectCategory(category);
    await this.selectExam(examId);
  }

  async selectFullMode() {
    const startScreen = new StartScreenPage(this.page);
    await startScreen.selectMode('full');
  }

  async selectSectionMode() {
    const startScreen = new StartScreenPage(this.page);
    await startScreen.selectMode('section');
  }

  async selectTestSet(set: 1 | 2) {
    const startScreen = new StartScreenPage(this.page);
    await startScreen.selectTestSet(set);
  }

  async startExam() {
    const startScreen = new StartScreenPage(this.page);
    await startScreen.startExam();
  }
}
