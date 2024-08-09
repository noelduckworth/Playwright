// @ts-check
const { test, expect } = require('@playwright/test');

test('Accordion', async ({ page }) => {
    await page.goto('https://sc-sandbox-main-advocatehealthcom.ahcdigital.org/zQA-Home-New/ADVQA%20Kitchen%20Sink%20Basic%20Page%20MM');
     await expect(page.getByTestId('side-photo-content-card')).toBeVisible();
     await expect(page.getByRole('img', { name: 'we care about your experience' })).toBeVisible();
     await expect(page.getByText('Put your heart to the testLiving well starts with a healthy heart. Our 15-')).toBeVisible();
     await expect(page.getByTestId('side-photo-content-card-item').getByTestId('rich-text').locator('div')).toBeVisible();
     await expect(page.getByTestId('side-photo-content-card-item').getByTestId('anchor')).toBeVisible();
     await expect(page.getByTestId('side-photo-content-card-item').getByTestId('anchor')).toBeEnabled();
    await expect(page).toHaveScreenshot();
});