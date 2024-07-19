// @ts-check
const { test, expect } = require('@playwright/test');

test('Promo CTA', async ({ page }) => {
  await page.goto('https://sc-main-advocatehealthcom.ahcdigital.org/QA%20Page/ADV%20QA%20C07-1%20Promo%20Callout');
  await expect(page.locator('div').filter({ hasText: 'ADV QA C07-1 - Promo CTAADV' }).nth(3)).toBeVisible();
  await expect(page.locator('#content')).toContainText('ADV QA C07-1 - Promo CTA');
  await expect(page.getByTestId('rich-text').getByRole('paragraph')).toContainText('ADV QA Supporting copy testing Promo Callout');
  await expect(page.getByRole('link', { name: 'ADV QA CTA 1' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'ADV QA CTA 2' })).toBeVisible();
  await expect(page).toHaveScreenshot();
});
