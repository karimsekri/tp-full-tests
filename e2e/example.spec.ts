import { test, expect } from '@playwright/test';

// test('has title', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Expect a title "to contain" a substring.
//   await expect(page).toHaveTitle(/Playwright/);
// });

// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });

test('test value of Input', async ({ page }) => {
  await page.goto('http://localhost:5173/');
  await page.locator('#lune_id').fill('fdsf');
  await expect(page.locator('#lune_id')).toContainText(['1', '2']);

  await page.locator('#terre_id').click();
  await expect(page.locator('#terre_id')).toContainText(['1', '2']);

  await page.locator('#soleil_id').click();
  await expect(page.locator('#soleil_id')).toContainText(['1', '2']);

 });
