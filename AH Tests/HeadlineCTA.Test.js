// @ts-check
const { test, expect } = require('@playwright/test');

test('Headline', async ({ page }) => {
    await page.goto('https://sc-main-advocatehealthcom.ahcdigital.org/QA/C03%20Headline%20With%20Optional%20CTA/C03%20Headline%20With%20Optional%20CTA');

    await expect(page.getByRole('heading', { name: 'Headline With Optional CTA Test', exact: true })).toBeVisible();
    await expect(page.getByTestId('column-grid')).toContainText('Headline With Optional CTA Test');

  await expect(page).toHaveScreenshot('Headline.png', { fullPage: true });
});


test('Headline CTA', async ({ page }) => {
    await page.goto('https://sc-main-advocatehealthcom.ahcdigital.org/QA/C03%20Headline%20With%20Optional%20CTA/C03%20Headline%20With%20Optional%20CTA');

    await expect(page.getByRole('heading', { name: 'Headline With Optional CTA Test', exact: true })).toBeVisible();
    await expect(page.getByText('Headline with Optional CTA Test 2Learn More')).toBeVisible();
    await expect(page.getByRole('link', { name: 'Learn More' })).toBeVisible();

    await expect(page).toHaveScreenshot('HeadlineCTA.png', { fullPage: true });
});
