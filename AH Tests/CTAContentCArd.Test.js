// @ts-check
const { test, expect } = require('@playwright/test');

test('CTA Content Card', async ({ page }) => {
  await page.goto('https://sc-sandbox-main-advocatehealthcom.ahcdigital.org/zQA-Home-New/QA%20Automation%20Basic%20Page');
   await expect(page.getByText('C20 CTA Content Card Headline QASupport copy QAQA Headline C20Body copy QAFirst')).toBeVisible();
   await expect(page.getByRole('img', { name: 'Advocate Aurora Health signs' })).toBeVisible();
   await expect(page.getByText('QA Headline C20Body copy QA')).toBeVisible();
   await expect(page.getByRole('link', { name: 'First CTA QA button' })).toBeVisible();
   await expect(page.getByText('First CTA QA buttonSecond CTA')).toBeVisible();
   await expect(page.getByRole('link', { name: 'Second CTA button QA' })).toBeVisible();

  await expect(page).toHaveScreenshot();
});
