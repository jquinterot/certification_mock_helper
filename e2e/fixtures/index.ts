import { test, expect, type Page } from '@playwright/test';

async function cleanupAllData(page: Page) {
  await page.evaluate(() => {
    localStorage.clear();
    sessionStorage.clear();
  });
}

async function waitForPageLoad(page: Page) {
  await page.waitForLoadState('networkidle');
}

export { cleanupAllData, waitForPageLoad };
export { expect };
