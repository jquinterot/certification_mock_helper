import { test, expect } from '@playwright/test';

test.describe('Simple Test', () => {
  test('should pass basic test', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByRole('heading', { name: 'Certification Practice Hub' })).toBeVisible();
  });
});
