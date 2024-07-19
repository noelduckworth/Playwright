// @ts-check
const { test, expect } = require('@playwright/test');

test('Accordion', async ({ page }) => {
    await page.goto('https://sc-main-aurorabaycarecom.ahcdigital.org/qa%20test/page%20link%20list');
    await expect(page.locator('div:nth-child(6) > div')).toBeVisible();
    await expect(page.getByRole('img', { name: 'A smiling woman relaxed on a' }).first()).toBeVisible();
    await expect(page.getByText('General story headlineLorem').first()).toBeVisible();
    await expect(page.getByRole('link', { name: 'Shop Now', exact: true }).nth(2)).toBeEnabled();
  
    await expect(page).toHaveScreenshot();
});