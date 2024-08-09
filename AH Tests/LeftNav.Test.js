// @ts-check
const { test, expect } = require('@playwright/test');

test('General Left Nav Page', async ({ page }) => {
    await page.goto('https://sc-sandbox-main-advocatehealthcom.ahcdigital.org/zQA-Home-New/QA-Services-Specialties-2/QA-Service-Line-Landing-Page');
     await expect(page.getByRole('region', { name: 'Basic Left Nav Page with' })).toBeVisible();
     await expect(page.getByTestId('left-navigation-list')).toBeVisible();
    await page.getByRole('button', { name: 'See more QA Test' }).click();
     await expect(page.getByTestId('left-navigation-list')).toBeVisible();
  
    await expect(page).toHaveScreenshot();
});