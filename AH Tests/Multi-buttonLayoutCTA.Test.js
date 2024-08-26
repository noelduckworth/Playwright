// @ts-check
const { test, expect } = require('@playwright/test');

test('Accordion', async ({ page }) => {
    await page.goto('https://sc-main-advocatehealthcom.ahcdigital.org/QA-Home/QA-Services-and-Specialties/QA-Service-Line-Landing-Page');
    
    await expect(page.getByTestId('icon-cta-bordered-grid')).toBeVisible();

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
});