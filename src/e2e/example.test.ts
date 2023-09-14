import { test, expect } from '@playwright/test';

test('should navigate to the home page', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveURL('http://localhost:3000');
  await expect(
    page.getByRole('heading', { name: 'Product Designer' }),
  ).toBeInViewport();
});
