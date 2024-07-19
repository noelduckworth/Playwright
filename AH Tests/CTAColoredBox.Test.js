// @ts-check
const { test, expect } = require('@playwright/test');

test('CTA Colored Box', async ({ page }) => {
  await page.goto('https://sc-main-advocatehealthcom.ahcdigital.org');
 
  await expect(page.locator('div').filter({ hasText: 'Footer Header 1Footer Link' }).nth(2)).toBeVisible();
  await expect(page.getByRole('img', { name: 'AH Logo' })).toBeVisible();
  await expect(page.getByText('Footer Header 1Footer Link 11Footer Link 21Footer Header 2Footer Link 21Footer')).toBeVisible();
  await expect(page.getByTestId('bottom-text').locator('div').filter({ hasText: 'Now part of Advocate Health' }).locator('div')).toBeVisible();
  await expect(page.locator('div').filter({ hasText: 'Language assistance services' }).nth(2)).toBeVisible();

  await expect(page).toHaveScreenshot();
});


