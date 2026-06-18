import type { Locator, Page } from '@playwright/test';

export class StartScreenPage {
  readonly page: Page;
  readonly backButton: Locator;
  readonly themeToggle: Locator;
  readonly viewHistoryButton: Locator;
  readonly modeCardFull: Locator;
  readonly modeCardSection: Locator;
  readonly testSetCard1: Locator;
  readonly testSetCard2: Locator;
  readonly domainCards: Locator;
  readonly startExamButton: Locator;
  readonly progressBestScore: Locator;
  readonly progressAverageScore: Locator;
  readonly progressAttempts: Locator;
  readonly weakestDomain: Locator;
  readonly savedTestItems: Locator;

  constructor(page: Page) {
    this.page = page;
    this.backButton = page.getByTestId('back-button');
    this.themeToggle = page.getByTestId('theme-toggle');
    this.viewHistoryButton = page.getByTestId('view-history-button');
    this.modeCardFull = page.getByTestId('mode-card-full-exam');
    this.modeCardSection = page.getByTestId('mode-card-section-mode');
    this.testSetCard1 = page.getByTestId('testset-card-1');
    this.testSetCard2 = page.getByTestId('testset-card-2');
    this.domainCards = page.locator('[data-test-id^="domain-card-"]');
    this.startExamButton = page.getByTestId('start-exam-button');
    this.progressBestScore = page.getByTestId('progress-best-score');
    this.progressAverageScore = page.getByTestId('progress-average-score');
    this.progressAttempts = page.getByTestId('progress-attempts');
    this.weakestDomain = page.getByTestId('weakest-domain');
    this.savedTestItems = page.locator('[data-test-id^="saved-test-"]');
  }

  async selectMode(mode: 'full' | 'section') {
    if (mode === 'full') {
      await this.modeCardFull.click();
    } else {
      await this.modeCardSection.click();
    }
  }

  async selectTestSet(set: 1 | 2) {
    if (set === 1) {
      await this.testSetCard1.click();
    } else {
      await this.testSetCard2.click();
    }
  }

  async getDomainCard(domainKey: string): Promise<Locator> {
    return this.page.getByTestId(`domain-card-${domainKey}`);
  }

  async selectDomain(domainKey: string) {
    await this.getDomainCard(domainKey).click();
  }

  async startExam() {
    await this.startExamButton.click();
  }

  async viewHistory() {
    await this.viewHistoryButton.click();
  }
}
