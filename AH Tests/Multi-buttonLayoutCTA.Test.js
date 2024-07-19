// @ts-check
const { test, expect } = require('@playwright/test');

test('Accordion', async ({ page }) => {
    await page.goto('https://sc-main-advocatehealthcom.ahcdigital.org/QA-Home/QA-Services-and-Specialties/QA-Service-Line-Landing-Page');
    
    await expect(page.getByTestId('icon-cta-bordered-grid')).toBeVisible();

    await expect(page.getByTestId('icon-cta-bordered-card').first()).toBeVisible();
    await expect(page.getByRole('link', { name: 'Schedule in Livewell' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Schedule in Livewell' })).toBeEnabled();

    await expect(page.getByTestId('icon-cta-bordered-card').nth(1)).toBeVisible();
    await expect(page.getByRole('link', { name: 'Schedule online' })).toBeEnabled();
    await expect(page.getByTestId('icon-cta-bordered-card-second-cta')).toBeVisible();

    await expect(page.getByText('ADV QAC31-3 - PhoneCall us to schedule your orthopedic appointment at a location near you.Call 800-323-')).toBeVisible();
    await expect(page.getByRole('link', { name: 'Call 800-323-' })).toBeEnabled();
    
    await expect(page).toHaveScreenshot();
});