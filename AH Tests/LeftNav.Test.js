// @ts-check
const { test, expect } = require('@playwright/test');

test('General Left Nav Page', async ({ page }) => {
    await page.goto('https://sc-main-advocatehealthcom.ahcdigital.org/QA-Home/General%20Left%20Nav%20Page');
    await expect(page.getByRole('region', { name: 'QA Home' })).toBeVisible();
    await page.getByTestId('left-navigation-list').getByTestId('accordion-trigger').click();
    await expect(page.getByRole('region', { name: 'QA Home', exact: true })).toBeVisible();
    await expect(page).toHaveScreenshot();
});