import type { Locator, Page } from '@playwright/test';

export class SubmitDialogPage {
  readonly page: Page;
  readonly dialog: Locator;
  readonly confirmButton: Locator;
  readonly cancelButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.dialog = page.getByTestId('submit-dialog');
    this.confirmButton = page.getByTestId('submit-dialog-confirm');
    this.cancelButton = page.getByTestId('submit-dialog-cancel');
  }

  async isVisible(): Promise<boolean> {
    return this.dialog.isVisible();
  }

  async confirmSubmit() {
    await this.confirmButton.click();
  }

  async cancel() {
    await this.cancelButton.click();
  }
}
