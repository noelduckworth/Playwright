// @ts-check
const { test, expect } = require('@playwright/test');

test('Side Photo Contact Card', async ({ page }) => {
    await page.goto('https://sc-sandbox-main-advocatehealthcom.ahcdigital.org/zQA-Home-New/ADVQA%20Kitchen%20Sink%20Basic%20Page%20MM');
     await expect(page.getByTestId('side-photo-content-card').locator('div').filter({ hasText: 'C13 - Side Photo CardLorem' }).first()).toBeVisible();
     await expect(page.getByRole('img', { name: 'we care about your experience' })).toBeVisible();
     await expect(page.getByText('C13 - Side Photo CardLorem')).toBeVisible();
     await expect(page.getByTestId('side-photo-content-card-item').getByText('Lorem Ipsum is simply dummy')).toBeVisible();
     await expect(page.getByTestId('side-photo-content-card-item').getByTestId('anchor')).toBeVisible();
     await expect(page.getByTestId('side-photo-content-card-item').getByTestId('anchor')).toBeEnabled();
  
    await expect(page).toHaveScreenshot();
});