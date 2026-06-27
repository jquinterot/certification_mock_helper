import { defineConfig, devices } from '@playwright/test';

// NOTE: On Node v24+, set PLAYWRIGHT_FORCE_ASYNC_LOADER=1 env var before running tests.
// This is set in package.json scripts and .github/workflows/e2e-tests.yml.
// Do NOT set process.env here — it runs after the loader is already initialized.

export default defineConfig({
  testDir: './e2e/tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,
  // In CI each project is its own job (3 jobs, one per browser), so we
  // can use 2 workers per project to parallelize the 33 tests within a
  // browser. Locally, 3 workers for the active project.
  workers: process.env.CI ? 2 : 3,
  reporter: process.env.CI
    ? [
        ['list'],
        ['blob', { outputDir: 'blob-report' }],
      ]
    : [
        ['list'],
        ['html', { open: 'never', outputFolder: 'playwright-report' }],
      ],
  use: {
    baseURL: 'http://localhost:3000',
    testIdAttribute: 'data-test-id',
    trace: 'on',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    actionTimeout: 10000,
    navigationTimeout: 15000,
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ],
  webServer: {
    command: 'npm run dev',
    url: 'http://localhost:3000',
    reuseExistingServer: !process.env.CI,
    timeout: 30000,
  },
});
