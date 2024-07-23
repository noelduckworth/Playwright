// @ts-check
const { test, expect } = require('@playwright/test');

test('Reverse Row Stories', async ({ page }) => {
    await page.goto('https://sc-main-advocatehealthcom.ahcdigital.org/QA/C11%20Reverse%20row%20stories/C11%20Reverse%20row%20stories');
    
    await expect(page.getByText('Reverse Row StoriesLorem')).toBeVisible();

    await expect(page.getByTestId('reverse-row-base').first()).toBeVisible();
    await expect(page.getByTestId('reverse-rows').getByTestId('column').first()).toBeVisible();
    await expect(page.getByText('When you can’t pencil in an appointmentLorem ipsum dolor sit amet, consectetur').first()).toBeVisible();
    await expect(page.getByTestId('cta-button').nth(1)).toBeVisible();
    await expect(page.getByTestId('cta-button').nth(2)).toBeVisible();   
    await expect(page.getByTestId('cta-button').nth(1)).toBeEnabled();
    await expect(page.getByTestId('cta-button').nth(2)).toBeEnabled();

    await expect(page.getByTestId('reverse-row-base').nth(1)).toBeVisible();
    await expect(page.getByRole('img', { name: 'Reverse Row Stories' })).toBeVisible();
    await expect(page.getByText('When you can’t pencil in an appointmentLorem ipsum dolor sit amet, consectetur').nth(1)).toBeVisible();
    await expect(page.getByTestId('cta-button').nth(3)).toBeVisible();
    await expect(page.getByTestId('cta-button').nth(4)).toBeVisible();
    await expect(page.getByTestId('cta-button').nth(3)).toBeVisible();
    await expect(page.getByTestId('cta-button').nth(4)).toBeVisible();
    
    await expect(page).toHaveScreenshot();
});