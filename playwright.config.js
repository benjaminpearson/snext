import { defineConfig } from '@playwright/test';

export default defineConfig({
  // Look for test files in this directory, relative to this configuration file.
  testDir: 'src/e2e',

  // Run all tests in parallel.
  fullyParallel: true,

  // Fail the build on CI if you accidentally left test.only in the source code.
  forbidOnly: Boolean(process.env.CI),

  // Retry on CI only.
  retries: process.env.CI ? 2 : 0,

  // Opt out of parallel tests on CI.
  workers: process.env.CI ? 1 : undefined,

  // Reporter to use
  reporter: 'html',

  use: {
    // Base URL to use in actions like `await page.goto('/')`.
    baseURL: 'http://localhost:3000',

    // Collect trace when retrying the failed test.
    trace: 'on-first-retry',
  },
  // Run your local dev server before starting the tests.
  webServer: {
    command: 'pnpm build && pnpm start',
    url: 'http://localhost:3000',
    reuseExistingServer: !process.env.CI,
    timeout: 300000,
  },
  // Output test results
  outputDir: './src/e2e/test-results',
});
