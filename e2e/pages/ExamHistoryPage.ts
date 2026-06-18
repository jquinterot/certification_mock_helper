import type { Locator, Page } from '@playwright/test';

export class ExamHistoryPage {
  readonly page: Page;
  readonly backButton: Locator;
  readonly themeToggle: Locator;
  readonly bestScore: Locator;
  readonly averageScore: Locator;
  readonly totalAttempts: Locator;
  readonly attemptItems: Locator;
  readonly weaknessAreas: Locator;
  readonly studyButtons: Locator;

  constructor(page: Page) {
    this.page = page;
    this.backButton = page.getByTestId('back-button');
    this.themeToggle = page.getByTestId('theme-toggle');
    this.bestScore = page.getByTestId('best-score');
    this.averageScore = page.getByTestId('average-score');
    this.totalAttempts = page.getByTestId('total-attempts');
    this.attemptItems = page.locator('[data-test-id^="attempt-"]');
    this.weaknessAreas = page.locator('[data-test-id^="weakness-area-"]');
    this.studyButtons = page.locator('[data-test-id^="study-button-"]');
  }

  async goBack() {
    await this.backButton.click();
  }

  async getAttemptCount(): Promise<number> {
    return this.attemptItems.count();
  }

  async deleteAttempt(attemptId: string) {
    await this.page.getByTestId(`delete-attempt-${attemptId}`).click();
  }
}
