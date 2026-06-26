import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import path from 'node:path';

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./test/setup.ts'],
    include: ['src/**/*.{test,spec}.{ts,tsx}'],
    exclude: [
      'node_modules/**',
      '.next/**',
      'e2e/**',
      'src/app/**',
      'src/lib/exams/**',
      'playwright-report/**',
      'test-results/**',
    ],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'html'],
      include: ['src/hooks/**', 'src/lib/**'],
      exclude: [
        '**/*.test.*',
        '**/index.ts',
        'src/lib/exams/**',
        'src/lib/constants.ts',
        'src/lib/constants/**',
        'src/lib/types.ts',
        'src/hooks/useAppState.ts',
        'src/hooks/useExam.ts',
      ],
      thresholds: {
        lines: 80,
        functions: 80,
        branches: 70,
        statements: 80,
      },
    },
  },
  resolve: {
    alias: [
      { find: '@/test', replacement: path.resolve(__dirname, './test') },
      { find: '@', replacement: path.resolve(__dirname, './src') },
    ],
  },
});
