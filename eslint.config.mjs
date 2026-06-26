import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import security from "eslint-plugin-security";
import noSecrets from "eslint-plugin-no-secrets";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Quality and security rules — these are part of the project's
  // architecture, not bolt-ons. See docs/QUALITY.md and docs/THREAT_MODEL.md
  // for the reasoning behind each rule.
  {
    plugins: {
      security,
      "no-secrets": noSecrets,
    },
    rules: {
      // ── Security (eslint-plugin-security) ────────────────────────────────
      // High-signal rules: enforced as errors because every finding here
      // has a real attack surface and the false-positive rate is low.
      "security/detect-eval-with-expression": "error",
      "security/detect-new-buffer": "error",
      "security/detect-unsafe-regex": "error",
      "security/detect-pseudoRandomBytes": "error",
      "security/detect-non-literal-regexp": "error",
      "security/detect-bidi-characters": "error",
      // Object-injection detection has a high false-positive rate on
      // legitimate code (every `obj[dynamicKey]` triggers it). Surfaced as
      // a warning so reviewers see it, but doesn't break the build.
      "security/detect-object-injection": "warn",
      // ── Secret scanning (eslint-plugin-no-secrets) ───────────────────────
      // Catches likely API keys, tokens, and credentials. Warned (not
      // errored) because the heuristic occasionally flags function names
      // and short identifiers with high entropy; reviewers should confirm.
      "no-secrets/no-secrets": "warn",
    },
  },
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    // Test artefacts (Playwright reports, traces, traces):
    "playwright-report/**",
    "test-results/**",
    "blob-report/**",
    // End-to-end tests use Playwright's `use()` helper which collides with
    // React's hooks naming convention. The fixtures are not React components
    // and we lint them separately if needed.
    "e2e/**",
    // The .opencode/ folder contains agent/skill prompts, not application code.
    ".opencode/**",
    // The fixtures and test utilities legitimately use `any` in test data
    // factories; we keep them out of the production lints.
    "test/**",
  ]),
]);

export default eslintConfig;
