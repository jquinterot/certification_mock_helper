import type { Locator, Page } from '@playwright/test';

export class ExitDialogPage {
  readonly page: Page;
  readonly dialog: Locator;
  readonly saveButton: Locator;
  readonly leaveButton: Locator;
  readonly cancelButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.dialog = page.getByTestId('exit-dialog');
    this.saveButton = page.getByTestId('exit-dialog-save');
    this.leaveButton = page.getByTestId('exit-dialog-leave');
    this.cancelButton = page.getByTestId('exit-dialog-cancel');
  }

  async isVisible(): Promise<boolean> {
    return this.dialog.isVisible();
  }

  async saveAndExit() {
    await this.saveButton.click();
  }

  async leaveWithoutSaving() {
    await this.leaveButton.click();
  }

  async cancel() {
    await this.cancelButton.click();
  }
}
