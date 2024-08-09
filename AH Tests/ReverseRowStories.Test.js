// @ts-check
const { test, expect } = require('@playwright/test');


test('ReverseRowStories', async ({ page }) => {
    
    await page.goto('https://sc-sandbox-main-advocatehealthcom.ahcdigital.org/zQA-Home-New/QA-Services-Specialties-2/Service-Line-Landing-Page-upper/Service-Line-Detail-Page-upper');
    
    await expect(page.getByRole('img', { name: 'blue' })).toBeVisible();
     await expect(page.getByText('ADVQA C11-1 - Reverse row story with visualQA Testing supporting copy')).toBeVisible();
     await expect(page.getByRole('link', { name: 'QA link A' })).toBeVisible();
     await expect(page.getByRole('link', { name: 'QA link A' })).toBeEnabled();

     await expect(page.getByRole('link', { name: 'QA link B' })).toBeVisible();
     await expect(page.getByRole('link', { name: 'QA link B' })).toBeEnabled();

     await expect(page.getByText('Reeves Reverse RowQA testing')).toBeVisible();
     await expect(page.getByRole('link', { name: 'Service Line Lower' })).toBeVisible();
     await expect(page.getByRole('link', { name: 'Service Line Detail Page Lower' })).toBeVisible();
     await expect(page.getByRole('img', { name: 'Four South Chicago hospitals' })).toBeVisible();
     await expect(page.getByRole('img', { name: 'Four South Chicago hospitals' })).toBeEnabled();

    await page.screenshot({ fullPage: true });
});