import type { Locator, Page } from '@playwright/test';

export class ResultsScreenPage {
  readonly page: Page;
  readonly themeToggle: Locator;
  readonly passFailBadge: Locator;
  readonly scoreCorrect: Locator;
  readonly scoreIncorrect: Locator;
  readonly scorePercentage: Locator;
  readonly domainBreakdown: Locator;
  readonly reviewAllButton: Locator;
  readonly reviewFlaggedButton: Locator;
  readonly retakeButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.themeToggle = page.getByTestId('theme-toggle');
    this.passFailBadge = page.getByTestId('results-pass-fail-badge');
    this.scoreCorrect = page.getByTestId('score-correct');
    this.scoreIncorrect = page.getByTestId('score-incorrect');
    this.scorePercentage = page.getByTestId('score-percentage');
    this.domainBreakdown = page.getByTestId('domain-breakdown');
    this.reviewAllButton = page.getByTestId('review-all-button');
    this.reviewFlaggedButton = page.getByTestId('review-flagged-button');
    this.retakeButton = page.getByTestId('retake-button');
  }

  domainBar(domainName: string): Locator {
    const key = domainName.toLowerCase().replace(/\s+/g, '-');
    return this.page.getByTestId(`domain-${key}-bar`);
  }

  async getScorePercentage(): Promise<number> {
    const text = await this.scorePercentage.textContent();
    return parseInt(text?.replace('%', '') || '0', 10);
  }

  async isPassing(): Promise<boolean> {
    const percentage = await this.getScorePercentage();
    return percentage >= 72;
  }

  async reviewAll() {
    await this.reviewAllButton.click();
  }

  async retake() {
    await this.retakeButton.click();
  }
}
