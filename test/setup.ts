import '@testing-library/jest-dom/vitest';
import { afterEach, vi, beforeEach } from 'vitest';
import { cleanup } from '@testing-library/react';
import { configure } from '@testing-library/dom';

// The app uses `data-test-id` (with a hyphen) consistently.
configure({ testIdAttribute: 'data-test-id' });

beforeEach(() => {
  // Reset localStorage between tests
  if (typeof window !== 'undefined') {
    window.localStorage.clear();
  }
});

afterEach(() => {
  cleanup();
  vi.restoreAllMocks();
  vi.useRealTimers();
});
