import { test, expect } from '../../fixtures';
import { EXAM_IDS } from '../../utils/constants';

test.describe('Exam Taking Flow', () => {
  test.beforeEach(async ({ cleanPage: page }) => {
    // Navigate to exam start screen via fixture, then to start screen
    await page.getByTestId('category-card-aws-cloud').click();
    await page.getByTestId(`exam-card-${EXAM_IDS.AWS_ML}`).click();
    await expect(page.getByTestId('start-exam-button')).toBeVisible();
  });

  test('should display start screen with all required elements', async ({ page }) => {
    await test.step('Mode selection cards are visible', async () => {
      await expect(page.getByTestId('mode-card-full-exam')).toBeVisible();
      await expect(page.getByTestId('mode-card-section-mode')).toBeVisible();
    });

    await test.step('Test set selection is visible', async () => {
      await expect(page.getByTestId('testset-card-1')).toBeVisible();
    });

    await test.step('Start exam button is visible', async () => {
      await expect(page.getByTestId('start-exam-button')).toBeVisible();
    });
  });

  test('should start exam and display question interface', async ({ page }) => {
    await test.step('Click start exam', async () => {
      await page.getByTestId('start-exam-button').click();
    });

    await test.step('Question card is visible', async () => {
      await expect(page.getByTestId('question-0')).toBeVisible();
    });

    await test.step('All 4 answer options are visible', async () => {
      await expect(page.getByTestId('answer-option-0-a')).toBeVisible();
      await expect(page.getByTestId('answer-option-0-b')).toBeVisible();
    });

    await test.step('Question navigator is visible', async () => {
      await expect(page.getByTestId('question-navigator')).toBeVisible();
    });
  });

  test('should track answered questions count', async ({ page }) => {
    await test.step('Start exam', async () => {
      await page.getByTestId('start-exam-button').click();
      await expect(page.getByTestId('question-0')).toBeVisible();
    });

    await test.step('Initial answered count is 0', async () => {
      const text = await page.getByTestId('answered-count').textContent();
      expect(text).toContain('0');
    });

    await test.step('Answer a question', async () => {
      await page.getByTestId('answer-option-0-a').click();
    });

    await test.step('Answered count is updated', async () => {
      await expect(page.getByTestId('answered-count')).toContainText('1');
    });
  });

  test('should navigate between questions with prev/next buttons', async ({ page }) => {
    await test.step('Start exam', async () => {
      await page.getByTestId('start-exam-button').click();
      await expect(page.getByTestId('question-0')).toBeVisible();
    });

    await test.step('Go to next question', async () => {
      await page.getByTestId('next-button').click();
    });

    await test.step('Previous button is now enabled', async () => {
      await expect(page.getByTestId('previous-button')).toBeEnabled();
    });
  });

  test('should flag and unflag questions', async ({ page }) => {
    await test.step('Start exam', async () => {
      await page.getByTestId('start-exam-button').click();
      await expect(page.getByTestId('question-0')).toBeVisible();
    });

    await test.step('Flag the question', async () => {
      await page.getByTestId('flag-button').click();
    });

    await test.step('Flagged count shows 1', async () => {
      await expect(page.getByTestId('flagged-count')).toBeVisible();
    });

    await test.step('Unflag the question', async () => {
      await page.getByTestId('flag-button').click();
    });
  });

  test('should toggle explanation visibility', async ({ page }) => {
    await test.step('Start exam', async () => {
      await page.getByTestId('start-exam-button').click();
      await expect(page.getByTestId('question-0')).toBeVisible();
    });

    await test.step('Click show explanation', async () => {
      await page.getByTestId('show-explanation-button').click();
    });

    await test.step('Explanation panel is visible', async () => {
      await expect(
        page.getByTestId('question-0').getByTestId('explanation-panel')
      ).toBeVisible();
    });
  });

  test('should open exit dialog when clicking exit', async ({ page }) => {
    await test.step('Start exam', async () => {
      await page.getByTestId('start-exam-button').click();
      await expect(page.getByTestId('question-0')).toBeVisible();
    });

    await test.step('Click exit button', async () => {
      await page.getByTestId('exit-button').click();
    });

    await test.step('Exit dialog is visible', async () => {
      await expect(page.getByTestId('exit-dialog')).toBeVisible();
    });
  });

  test('should cancel exit and stay on exam', async ({ page }) => {
    await test.step('Start exam and open exit dialog', async () => {
      await page.getByTestId('start-exam-button').click();
      await expect(page.getByTestId('question-0')).toBeVisible();
      await page.getByTestId('exit-button').click();
      await expect(page.getByTestId('exit-dialog')).toBeVisible();
    });

    await test.step('Cancel exit', async () => {
      await page.getByTestId('exit-dialog-cancel').click();
    });

    await test.step('Exam is still visible', async () => {
      await expect(page.getByTestId('question-0')).toBeVisible();
    });
  });

  test('should exit exam without saving', async ({ page }) => {
    await test.step('Start exam', async () => {
      await page.getByTestId('start-exam-button').click();
      await expect(page.getByTestId('question-0')).toBeVisible();
    });

    await test.step('Exit exam', async () => {
      await page.getByTestId('exit-button').click();
      await expect(page.getByTestId('exit-dialog')).toBeVisible();
      await page.getByTestId('exit-dialog-leave').click();
    });

    await test.step('Start screen is visible', async () => {
      await expect(page.getByTestId('start-exam-button')).toBeVisible();
    });
  });

  test('should complete exam and show results', async ({ page }) => {
    await test.step('Start exam', async () => {
      await page.getByTestId('start-exam-button').click();
      await expect(page.getByTestId('question-0')).toBeVisible();
    });

    await test.step('Answer all questions', async () => {
      const questionCount = await page.locator('[data-test-id^="question-navigator-item-"]').count();
      for (let i = 0; i < questionCount; i++) {
        await page.getByTestId(`question-navigator-item-${i}`).click();
        await page.getByTestId(`answer-option-${i}-a`).click();
      }
    });

    await test.step('Submit exam', async () => {
      await page.getByTestId('submit-exam-button').first().click();
      await expect(page.getByTestId('submit-dialog')).toBeVisible();
      await page.getByTestId('submit-dialog-confirm').click();
    });

    await test.step('Results screen is displayed', async () => {
      await expect(page.getByTestId('results-pass-fail-badge')).toBeVisible({ timeout: 15000 });
    });
  });

  test('should save and exit exam', async ({ page }) => {
    await test.step('Start exam and answer a question', async () => {
      await page.getByTestId('start-exam-button').click();
      await expect(page.getByTestId('question-0')).toBeVisible();
      await page.getByTestId('answer-option-0-a').click();
    });

    await test.step('Click save and exit', async () => {
      await page.getByTestId('save-exit-button').click();
    });

    await test.step('Start screen is visible', async () => {
      await expect(page.getByTestId('start-exam-button')).toBeVisible();
    });
  });
});