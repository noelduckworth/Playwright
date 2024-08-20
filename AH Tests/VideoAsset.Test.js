// @ts-check
const { test, expect } = require('@playwright/test');

test('Video Assest', async ({ page }) => {
  await page.goto('https://sc-sandbox-main-advocatehealthcom.ahcdigital.org/zQA-Home-New/ADVQA%20Kitchen%20Sink%20Basic%20Page');
  await expect(page.getByRole('figure', { name: 'C16 Video asset caption Rich' })).toBeVisible();
  await expect(page).toHaveScreenshot();
});
