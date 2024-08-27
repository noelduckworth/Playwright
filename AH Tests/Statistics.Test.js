// @ts-check
const { test, expect } = require('@playwright/test');

test('Top Statisitcs', async ({ page }) => {
    await page.goto('https://sc-sandbox-main-advocatehealthcom.ahcdigital.org/zQA-Home-New/ADVQA-Kitchen-Sink-Basic-Page');
     await expect(page.getByText('ADVQA C50 Top Statistics MMSupport copy100QA TESTsupport copy bottomHome')).toBeVisible();
     await expect(page.getByText('100QA TEST')).toBeVisible();
     await expect(page.getByTestId('top-statistics-cta').first()).toBeVisible();
     await expect(page.getByTestId('top-statistics-cta').first()).toBeEnabled();
    await expect(page).toHaveScreenshot({ threshold: 0.15 });
});

test('Side Statisitcs', async ({ page }) => {
    await page.goto('https://sc-sandbox-main-advocatehealthcom.ahcdigital.org/zQA-Home-New/ADVQA-Kitchen-Sink-Basic-Page');
    await expect(page.getByTestId('side-statistics-content')).toBeVisible();
    await expect(page.getByTestId('side-statistics-item')).toBeVisible();
    await expect(page.getByTestId('side-statistics-cta')).toBeVisible();
    await expect(page.getByTestId('side-statistics-cta')).toBeEnabled();
    await expect(page).toHaveScreenshot({ threshold: 0.15 });
});

test('Hero Statisitcs', async ({ page }) => {
    await page.goto('https://sc-sandbox-main-advocatehealthcom.ahcdigital.org/zQA-Home-New/ADVQA-Kitchen-Sink-Basic-Page');

     await expect(page.getByTestId('hero-statistics-content')).toBeVisible();
     await expect(page.getByTestId('hero-statistics-column-grid')).toBeVisible();
     await expect(page.getByTestId('hero-statistics-cta')).toBeVisible();
     await expect(page.getByTestId('hero-statistics-cta')).toBeEnabled();
    await expect(page).toHaveScreenshot({ threshold: 0.15 });
});