// @ts-check
const { test, expect } = require('@playwright/test');

test('Side Media Assest', async ({ page }) => {
  await page.goto('https://sc-main-advocatehealthcom.ahcdigital.org/CMC/QA/C17%20Side%20Media%20Asset/C17%20Side%20Media%20Asset');
 
  await expect(page.getByText('Side Media AssetAt vero eos').first()).toBeVisible();
  await expect(page.locator('div > div > p').first()).toBeVisible();
  await expect(page.getByRole('img', { name: 'A smiling doctor with a mask' })).toBeVisible();
  await expect(page.locator('p:nth-child(2)').first()).toBeVisible();
  await expect(page.getByText('Side Media AssetAt vero eos').nth(1)).toBeVisible();
  await expect(page.locator('div:nth-child(2) > div > div > div > p').first()).toBeVisible();
  await expect(page.locator('div:nth-child(2) > div > div > div > p:nth-child(2)')).toBeVisible();

  await expect(page).toHaveScreenshot();
});
