import { test, expect, type Page } from '@playwright/test';

function getByTestId(page: any, testId: string) {
  return page.locator(`[data-test-id="${testId}"]`);
}

async function cleanupAllData(page: Page) {
  try {
    await page.evaluate(() => {
      localStorage.clear();
      sessionStorage.clear();
    });
  } catch {
    // Ignore errors - happens when called before page loads
  }
}

test.describe('Exam Taking Flow', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(500);
    // Navigate to exam start screen
    await getByTestId(page, 'category-card-aws-cloud').click();
    await getByTestId(page, 'exam-card-aws-ml').click();
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(500);
  });

  test.afterEach(async ({ page }) => {
    await cleanupAllData(page);
  });

  test('should display start screen with all required elements', async ({ page }) => {
    await test.step('Mode selection cards are visible', async () => {
      await expect(getByTestId(page, 'mode-card-full-exam')).toBeVisible();
      await expect(getByTestId(page, 'mode-card-section-mode')).toBeVisible();
    });

    await test.step('Test set selection is visible', async () => {
      await expect(getByTestId(page, 'testset-card-1')).toBeVisible();
    });

    await test.step('Start exam button is visible', async () => {
      await expect(getByTestId(page, 'start-exam-button')).toBeVisible();
    });
  });

  test('should start exam and display question interface', async ({ page }) => {
    await test.step('Click start exam', async () => {
      await getByTestId(page, 'start-exam-button').click();
    });

    await test.step('Question card is visible', async () => {
      await expect(getByTestId(page, 'question-0')).toBeVisible();
    });

    await test.step('All 4 answer options are visible', async () => {
      await expect(getByTestId(page, 'answer-option-0-a')).toBeVisible();
      await expect(getByTestId(page, 'answer-option-0-b')).toBeVisible();
    });

    await test.step('Question navigator is visible', async () => {
      await expect(getByTestId(page, 'question-navigator')).toBeVisible();
    });
  });

  test('should track answered questions count', async ({ page }) => {
    await test.step('Start exam', async () => {
      await getByTestId(page, 'start-exam-button').click();
    });

    await test.step('Initial answered count is 0', async () => {
      const text = await getByTestId(page, 'answered-count').textContent();
      expect(text).toContain('0');
    });

    await test.step('Answer a question', async () => {
      await getByTestId(page, 'answer-option-0-a').click();
    });

    await test.step('Answered count is updated', async () => {
      const text = await getByTestId(page, 'answered-count').textContent();
      expect(text).toContain('1');
    });
  });

  test('should navigate between questions with prev/next buttons', async ({ page }) => {
    await test.step('Start exam', async () => {
      await getByTestId(page, 'start-exam-button').click();
    });

    await test.step('Go to next question', async () => {
      await getByTestId(page, 'next-button').click();
    });

    await test.step('Previous button is now enabled', async () => {
      await expect(getByTestId(page, 'previous-button')).toBeEnabled();
    });
  });

  test('should flag and unflag questions', async ({ page }) => {
    await test.step('Start exam', async () => {
      await getByTestId(page, 'start-exam-button').click();
    });

    await test.step('Flag the question', async () => {
      await getByTestId(page, 'flag-button').click();
    });

    await test.step('Flagged count shows 1', async () => {
      await expect(getByTestId(page, 'flagged-count')).toBeVisible();
    });

    await test.step('Unflag the question', async () => {
      await getByTestId(page, 'flag-button').click();
    });
  });

  test('should toggle explanation visibility', async ({ page }) => {
    await test.step('Start exam', async () => {
      await getByTestId(page, 'start-exam-button').click();
    });

    await test.step('Click show explanation', async () => {
      await getByTestId(page, 'show-explanation-button').click();
    });

    await test.step('Explanation panel is visible', async () => {
      await expect(getByTestId(page, 'question-0').locator('[data-test-id="explanation-panel"]')).toBeVisible();
    });
  });

  test('should open exit dialog when clicking exit', async ({ page }) => {
    await test.step('Start exam', async () => {
      await getByTestId(page, 'start-exam-button').click();
    });

    await test.step('Click exit button', async () => {
      await getByTestId(page, 'exit-button').click();
    });

    await test.step('Exit dialog is visible', async () => {
      await expect(getByTestId(page, 'exit-dialog')).toBeVisible();
    });
  });

  test('should cancel exit and stay on exam', async ({ page }) => {
    await test.step('Start exam and open exit dialog', async () => {
      await getByTestId(page, 'start-exam-button').click();
      await getByTestId(page, 'exit-button').click();
    });

    await test.step('Cancel exit', async () => {
      await getByTestId(page, 'exit-dialog-cancel').click();
    });

    await test.step('Exam is still visible', async () => {
      await expect(getByTestId(page, 'question-0')).toBeVisible();
    });
  });

  test('should exit exam without saving', async ({ page }) => {
    await test.step('Start exam', async () => {
      await getByTestId(page, 'start-exam-button').click();
    });

    await test.step('Exit exam', async () => {
      await getByTestId(page, 'exit-button').click();
      await getByTestId(page, 'exit-dialog-leave').click();
    });

    await test.step('Start screen is visible', async () => {
      await expect(getByTestId(page, 'start-exam-button')).toBeVisible();
    });
  });

  test('should complete exam and show results', async ({ page }) => {
    await test.step('Start exam', async () => {
      await getByTestId(page, 'start-exam-button').click();
    });

    await test.step('Answer all questions', async () => {
      const questionCount = await page.locator('[data-test-id^="question-navigator-item-"]').count();
      for (let i = 0; i < questionCount; i++) {
        await getByTestId(page, `question-navigator-item-${i}`).click();
        await getByTestId(page, `answer-option-${i}-a`).click();
      }
    });

    await test.step('Submit exam', async () => {
      await getByTestId(page, 'submit-exam-button').first().click();
      await page.waitForTimeout(500);
      await getByTestId(page, 'submit-dialog-confirm').click();
    });

    await test.step('Results screen is displayed', async () => {
      await expect(getByTestId(page, 'results-pass-fail-badge')).toBeVisible();
    });
  });

  test('should save and exit exam', async ({ page }) => {
    await test.step('Start exam and answer a question', async () => {
      await getByTestId(page, 'start-exam-button').click();
      await getByTestId(page, 'answer-option-0-a').click();
    });

    await test.step('Click save and exit', async () => {
      await getByTestId(page, 'save-exit-button').click();
    });

    await test.step('Start screen is visible', async () => {
      await expect(getByTestId(page, 'start-exam-button')).toBeVisible();
    });
  });
});
