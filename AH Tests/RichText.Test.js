// @ts-check
const { test, expect } = require('@playwright/test');

test('Rich Text', async ({ page }) => {
    await page.goto('https://sc-sandbox-main-advocatehealthcom.ahcdigital.org/zQA-Home-New/QA-Services-Specialties-2/QA-Service-Line-Landing-Page');
   await expect(page.getByText('Manually added C26 Rich Text component: When you\'re suffering with back issues')).toBeVisible();
   await expect(page.getByText('When you\'re suffering with')).toBeVisible();
     await expect(page).toHaveScreenshot();
});