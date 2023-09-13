import { test, expect } from '@playwright/test';

test('should navigate to the home page', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await expect(page).toHaveURL('http://localhost:3000');
  await expect(
    page.getByRole('img', { name: 'Next.js Logo' }),
  ).toBeInViewport();
});
