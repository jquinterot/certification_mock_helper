# E2E Test Suite Documentation

## Overview
This test suite uses Playwright with Page Object Model (POM) pattern, reusable steps, and `test.step()` for readable test documentation.

## Test Coverage Summary

### Home Page (`tests/home/home.spec.ts`)
| Test | Description |
|------|-------------|
| should display the home page with title and description | Validates main heading and description are visible |
| should display both category cards with correct content | Validates AWS Cloud and ISTQB Testing cards exist |
| should display statistics section | Validates certifications, test sets, and total questions counts |
| should toggle theme when clicking theme toggle | Tests dark/light mode switching |
| should navigate to AWS Cloud category page | Validates navigation and URL change |
| should navigate to ISTQB Testing category page | Validates navigation to ISTQB category |
| should display theme toggle with correct icon and text | Validates theme toggle UI elements |

### Category Menu (`tests/category/category.spec.ts`)
| Test | Description |
|------|-------------|
| should display AWS Cloud category with exam cards | Validates category heading, description, exam cards |
| should display ISTQB Testing category with exam cards | Validates ISTQB category display |
| should navigate back to home when clicking back button | Tests back navigation |
| should navigate to start screen when selecting an exam | Tests exam selection flow |
| should toggle theme on category page | Tests theme toggle functionality |
| should display exam details correctly | Validates question count, duration, passing score |
| should navigate to different exams | Tests multiple exam navigation |

### Exam Taking Flow (`tests/exam/exam.spec.ts`)
| Test | Description |
|------|-------------|
| should display start screen with all required elements | Validates mode cards, test set cards, start button, exam info |
| should start exam and display question interface | Validates question card, options, navigator, progress bar, timer |
| should track answered questions count | Tests answered count increments correctly |
| should navigate between questions with prev/next buttons | Tests previous/next navigation |
| should navigate to specific questions via navigator | Tests question navigator grid |
| should flag and unflag questions | Tests flag/unflag functionality |
| should toggle explanation visibility | Tests show/hide explanation |
| should open exit dialog when clicking exit | Validates exit dialog appears |
| should cancel exit and stay on exam | Tests cancel functionality |
| should exit exam without saving | Tests leave without saving |
| should display timer during exam | Validates timer display format |
| should complete exam and show results | Tests full exam completion flow |
| should save and exit exam | Tests save & exit functionality |

### Results Screen (`tests/results/results.spec.ts`)
| Test | Description |
|------|-------------|
| should display results with all required elements | Validates pass/fail badge, scores (correct, incorrect, percentage) |
| should display domain breakdown section | Validates domain breakdown heading and bars |
| should show pass/fail status correctly | Tests pass/fail determination |
| should have review all button that is functional | Validates review button is clickable |
| should have retake exam button | Validates retake button visibility |
| should toggle theme on results page | Tests theme toggle |
| should navigate back to home from results | Tests navigation via retake |

### Exam History (`tests/history/history.spec.ts`)
| Test | Description |
|------|-------------|
| should show progress stats after completing an exam | Validates best score, average, attempts |
| should display history section after multiple attempts | Tests view history button and history page |
| should display attempt list on history page | Validates attempt items show scores |
| should go back from history page | Tests back navigation |
| should toggle theme on history page | Tests theme toggle |
| should show empty state message when no history | Tests empty state handling |

## Data Test IDs Used

### HomePage
- `theme-toggle`
- `category-card-aws-cloud`
- `category-card-istqb-testing`
- `stat-certifications`
- `stat-test-sets`
- `stat-total-questions`

### CategoryMenu
- `back-button`
- `theme-toggle`
- `exam-card-{examId}`

### StartScreen
- `back-button`
- `theme-toggle`
- `view-history-button`
- `mode-card-full-exam`
- `mode-card-section-mode`
- `testset-card-1`, `testset-card-2`
- `domain-card-{domainKey}`
- `start-exam-button`
- `progress-best-score`
- `progress-average-score`
- `progress-attempts`
- `weakest-domain`

### ExamScreen
- `exit-button`
- `theme-toggle`
- `save-exit-button`
- `submit-exam-button`
- `progress-bar`
- `timer-display`
- `answered-count`
- `flagged-count`
- `flag-button`
- `previous-button`
- `next-button`
- `show-explanation-button`
- `next-flagged-button`
- `question-navigator`
- `question-navigator-item-{index}`
- `question-{index}`
- `answer-option-{index}-{a|b|c|d}`
- `domain-badge`
- `explanation-panel`

### ResultsScreen
- `theme-toggle`
- `results-pass-fail-badge`
- `score-correct`
- `score-incorrect`
- `score-percentage`
- `domain-breakdown`
- `domain-{name}-bar`
- `review-all-button`
- `review-flagged-button`
- `retake-button`

### ExamHistory
- `back-button`
- `theme-toggle`
- `best-score`
- `average-score`
- `total-attempts`
- `attempt-{id}`
- `weakness-area-{index}`
- `study-button-{domain}`
- `delete-attempt-{id}`

### Dialogs
- `exit-dialog`, `exit-dialog-save`, `exit-dialog-leave`, `exit-dialog-cancel`
- `submit-dialog`, `submit-dialog-confirm`, `submit-dialog-cancel`

## Cleanup Strategy
Each test uses `afterEach` hook to call `appFixture.cleanupAllData()` which:
- Clears `localStorage`
- Clears `sessionStorage`

This ensures test isolation and prevents data from one test affecting another.

## Running Tests

```bash
# Run all tests
npm run test:e2e

# Run tests in UI mode (recommended for development)
npm run test:e2e:ui

# Run tests in headed mode
npm run test:e2e:headed

# Run tests in specific browser
npm run test:e2e:chromium
npm run test:e2e:firefox
npm run test:e2e:webkit

# Debug mode
npm run test:e2e:debug
```
