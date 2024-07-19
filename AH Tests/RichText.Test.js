// @ts-check
const { test, expect } = require('@playwright/test');

test('Rich Text', async ({ page }) => {
    await page.goto('https://sc-main-advocatehealthcom.ahcdigital.org/QA-Home/Appointments');
    await expect(page.getByTestId('column-grid').getByTestId('rich-text').first()).toBeVisible();
    
    await page.getByRole('button', { name: 'Show More' }).first().click();
    await expect(page.getByText('Deserunt landjaeger pork loin').first()).toBeVisible();
    await expect(page).toHaveScreenshot();
});