import { test, expect } from '@playwright/test';

test('visit home page', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveURL('http://localhost:3000');
  await expect(
    page.getByRole('heading', { name: 'Product Designer' }),
  ).toBeInViewport();
});

test('visit home page and visit th example page', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveURL('http://localhost:3000');
  await page.getByText('Example - TH').click();
  await expect(page).toHaveURL('http://localhost:3000/th/example');
  await expect(page.getByText('Locale: th')).toBeInViewport();
});

test('visit english example page', async ({ page }) => {
  await page.goto('http://localhost:3000/example');
  await expect(page.getByText('Locale: en')).toBeInViewport();
  await expect(
    page.getByText('Translated text: Translated text'),
  ).toBeInViewport();
});

test('visit thai example page', async ({ page }) => {
  await page.goto('http://localhost:3000/th/example');
  await expect(page.getByText('Locale: th')).toBeInViewport();
  await expect(
    page.getByText('Translated text: ข้อความที่แปล'),
  ).toBeInViewport();
});

test('visit id example page', async ({ page }) => {
  await page.goto('http://localhost:3000/id/example');
  await expect(page.getByText('Locale: id')).toBeInViewport();
  await expect(
    page.getByText('Translated text: Teks yang diterjemahkan'),
  ).toBeInViewport();
});
