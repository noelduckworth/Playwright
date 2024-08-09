// @ts-check
const { test, expect } = require('@playwright/test');

test('Promo CTA', async ({ page }) => {
  await page.goto('https://sc-sandbox-main-advocatehealthcom.ahcdigital.org/zQA-Home-New/QA%20Automation%20Basic%20Page');
   await expect(page.getByTestId('promo-callout').first()).toBeVisible();
   await expect(page.getByText('C07 - Promo CTALorem ipsum')).toBeVisible();
   await expect(page.getByRole('link', { name: '/zQA-Home-New' })).toBeVisible();
   await expect(page.getByRole('link', { name: '/zQA-Home-New' })).toBeEnabled();
  await expect(page).toHaveScreenshot();
});
