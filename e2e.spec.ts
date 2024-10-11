import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.google.com/search?q=demoqa&oq=demoqa&gs_lcrp=EgZjaHJvbWUyBggAEEUYOdIBCDE5MzVqMGoyqAIAsAIB&sourceid=chrome&ie=UTF-8');
  await page.getByRole('link', { name: 'DEMOQA DEMOQA https://demoqa.' }).click();
  await page.locator('svg').first().click();
  await page.locator('li').filter({ hasText: 'Text Box' }).click();
  await page.getByPlaceholder('Full Name').click();
  await page.getByPlaceholder('Full Name').fill('test');
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByText('Name:test').click();
});