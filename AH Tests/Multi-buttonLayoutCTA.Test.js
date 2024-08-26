// @ts-check
const { test, expect } = require('@playwright/test');

test('Multi-buttonLayoutCTA', async ({ page }) => {
    await page.goto('https://sc-sandbox-main-advocatehealthcom.ahcdigital.org/zQA-Home-New/ADVQA%20Kitchen%20Sink%20Basic%20Page');

     await expect(page.locator('#content div').filter({ hasText: 'ADV QA C04-1 - Multi-button' }).nth(2)).toBeVisible();
   
   await expect(page.locator('div').filter({ hasText: /^Advocate HealthQA Home NewHealth ServicesFind a Cardiologist$/ }).getByTestId('multi-button-1')).toBeVisible();
   await expect(page.getByTestId('multi-button-2')).toBeVisible();
   await expect(page.getByTestId('multi-button-3')).toBeVisible();
   await expect(page.getByTestId('multi-button-4')).toBeVisible();
   await expect(page.locator('div').filter({ hasText: /^Advocate HealthQA Home NewHealth ServicesFind a Cardiologist$/ }).getByTestId('multi-button-1')).toBeEnabled();
   await expect(page.getByTestId('multi-button-2')).toBeEnabled();
   await expect(page.getByTestId('multi-button-3')).toBeEnabled();
   await expect(page.getByTestId('multi-button-4')).toBeEnabled();
    await expect(page).toHaveScreenshot();
    await page.screenshot({ fullPage: true });
});