import type { Locator, Page } from '@playwright/test';

export class ExamScreenPage {
  readonly page: Page;
  readonly exitButton: Locator;
  readonly themeToggle: Locator;
  readonly saveExitButton: Locator;
  readonly submitExamButton: Locator;
  readonly progressBar: Locator;
  readonly timerDisplay: Locator;
  readonly answeredCount: Locator;
  readonly flaggedCount: Locator;
  readonly flagButton: Locator;
  readonly previousButton: Locator;
  readonly nextButton: Locator;
  readonly showExplanationButton: Locator;
  readonly nextFlaggedButton: Locator;
  readonly questionNavigator: Locator;
  readonly questionNavigatorItems: Locator;

  constructor(page: Page) {
    this.page = page;
    this.exitButton = page.getByTestId('exit-button');
    this.themeToggle = page.getByTestId('theme-toggle');
    this.saveExitButton = page.getByTestId('save-exit-button');
    this.submitExamButton = page.getByTestId('submit-exam-button');
    this.progressBar = page.getByTestId('progress-bar');
    this.timerDisplay = page.getByTestId('timer-display');
    this.answeredCount = page.getByTestId('answered-count');
    this.flaggedCount = page.getByTestId('flagged-count');
    this.flagButton = page.getByTestId('flag-button');
    this.previousButton = page.getByTestId('previous-button');
    this.nextButton = page.getByTestId('next-button');
    this.showExplanationButton = page.getByTestId('show-explanation-button');
    this.nextFlaggedButton = page.getByTestId('next-flagged-button');
    this.questionNavigator = page.getByTestId('question-navigator');
    this.questionNavigatorItems = page.locator('[data-test-id^="question-navigator-item-"]');
  }

  questionCard(questionIndex: number) {
    return this.page.getByTestId(`question-${questionIndex}`);
  }

  answerOption(questionIndex: number, option: 'a' | 'b' | 'c' | 'd') {
    return this.page.getByTestId(`answer-option-${questionIndex}-${option}`);
  }

  domainBadge(questionIndex: number) {
    return this.page.getByTestId(`question-${questionIndex}`).getByTestId('domain-badge');
  }

  explanationPanel(questionIndex: number) {
    return this.page.getByTestId(`question-${questionIndex}`).getByTestId('explanation-panel');
  }

  async selectAnswer(questionIndex: number, option: 'a' | 'b' | 'c' | 'd') {
    await this.answerOption(questionIndex, option).click();
  }

  async goToQuestion(index: number) {
    await this.page.getByTestId(`question-navigator-item-${index}`).click();
  }

  async flagCurrentQuestion() {
    await this.flagButton.click();
  }

  async goToPrevious() {
    await this.previousButton.click();
  }

  async goToNext() {
    await this.nextButton.click();
  }

  async toggleExplanation() {
    await this.showExplanationButton.click();
  }

  async submitExam() {
    await this.submitExamButton.click();
  }

  async exit() {
    await this.exitButton.click();
  }

  async getCurrentQuestionIndex(): Promise<number> {
    const text = await this.page.locator('text=/Question \\d+ of \\d+/').textContent();
    const match = text?.match(/Question (\\d+) of (\\d+)/);
    return match ? parseInt(match[1], 10) - 1 : 0;
  }
}
