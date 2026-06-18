import type { Locator, Page } from '@playwright/test';

export class CategoryMenuPage {
  readonly page: Page;
  readonly backButton: Locator;
  readonly themeToggle: Locator;
  readonly examCards: Locator;

  constructor(page: Page) {
    this.page = page;
    this.backButton = page.getByTestId('back-button');
    this.themeToggle = page.getByTestId('theme-toggle');
    this.examCards = page.locator('[data-test-id^="exam-card-"]');
  }

  async getExamCard(examId: string): Promise<Locator> {
    return this.page.getByTestId(`exam-card-${examId}`);
  }

  async selectExam(examId: string) {
    await this.getExamCard(examId).click();
  }

  async goBack() {
    await this.backButton.click();
  }
}
