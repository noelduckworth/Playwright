// @ts-check
const { test, expect } = require('@playwright/test');

test('Footer', async ({ page }) => {
  await page.goto('https://sc-sandbox-main-advocatehealthcom.ahcdigital.org/zQA-Home-New/QA-Services-Specialties-2');
   await expect(page.getByTestId('footer')).toBeVisible();
   await expect(page.getByText('Find a Cardiologist QueryZQA')).toBeVisible();
   await expect(page.getByText('Footer Link 21Footer Link').first()).toBeVisible();
   await expect(page.getByText('Footer Link 21Footer Link').nth(1)).toBeVisible();
   await expect(page.getByText('Footer Link 21Footer Link').nth(2)).toBeVisible();
  await expect(page).toHaveScreenshot();
});
