// @ts-check
const { test, expect } = require('@playwright/test');

test('Side Media Assest', async ({ page }) => {
  await page.goto('https://sc-sandbox-main-advocatehealthcom.ahcdigital.org/zQA-Home-New/QA%20Automation%20Basic%20Page');
   await expect(page.getByTestId('side-media-asset')).toBeVisible();
   await expect(page.getByText('This is an imageImage Lorem')).toBeVisible();
   await expect(page.getByTestId('media-with-caption-image-link')).toBeVisible();
  await expect(page).toHaveScreenshot();
});
