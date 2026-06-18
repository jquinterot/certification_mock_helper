import type { Page } from '@playwright/test';
import { ExamScreenPage, SubmitDialogPage } from '../pages';

export class ExamSteps {
  constructor(private page: Page) {}

  async answerQuestion(questionIndex: number, option: 'a' | 'b' | 'c' | 'd') {
    const examScreen = new ExamScreenPage(this.page);
    await examScreen.selectAnswer(questionIndex, option);
  }

  async flagQuestion() {
    const examScreen = new ExamScreenPage(this.page);
    await examScreen.flagCurrentQuestion();
  }

  async goToNextQuestion() {
    const examScreen = new ExamScreenPage(this.page);
    await examScreen.goToNext();
  }

  async goToPreviousQuestion() {
    const examScreen = new ExamScreenPage(this.page);
    await examScreen.goToPrevious();
  }

  async goToQuestion(index: number) {
    const examScreen = new ExamScreenPage(this.page);
    await examScreen.goToQuestion(index);
  }

  async toggleExplanation() {
    const examScreen = new ExamScreenPage(this.page);
    await examScreen.toggleExplanation();
  }

  async answerAndNavigate(questionIndex: number, option: 'a' | 'b' | 'c' | 'd') {
    await this.answerQuestion(questionIndex, option);
    await this.goToNextQuestion();
  }

  async completeExamSilently() {
    const examScreen = new ExamScreenPage(this.page);
    const submitDialog = new SubmitDialogPage(this.page);

    const totalQuestions = await examScreen.questionNavigatorItems.count();

    for (let i = 0; i < totalQuestions; i++) {
      await examScreen.goToQuestion(i);
      await examScreen.selectAnswer(i, 'a');
    }

    await examScreen.submitExam();
    await submitDialog.confirmSubmit();
  }

  async submitExam() {
    const examScreen = new ExamScreenPage(this.page);
    const submitDialog = new SubmitDialogPage(this.page);

    await examScreen.submitExam();

    if (await submitDialog.isVisible()) {
      await submitDialog.confirmSubmit();
    }
  }
}
