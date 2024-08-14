// @ts-check
const { test, expect } = require('@playwright/test');

test('Image Assest', async ({ page }) => {
  await page.goto('https://sc-sandbox-main-advocatehealthcom.ahcdigital.org/zQA%20Home%20New/QA%20Automation%20Basic%20Page%202');
   await expect(page.getByTestId('image-asset')).toBeVisible();
   await expect(page.getByTestId('image-asset-image-wrapper')).toBeVisible();
   await expect(page.getByTestId('image-asset-image-wrapper')).toBeEnabled();
  await expect(page).toHaveScreenshot();
});
