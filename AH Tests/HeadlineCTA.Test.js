// @ts-check
const { test, expect } = require('@playwright/test');

test('Headline', async ({ page }) => {
  await page.goto('https://sc-sandbox-main-advocatehealthcom.ahcdigital.org/zQA-Home-New/QA-Services-Specialties-2/QA-Service-Line-Landing-Page');

   await expect(page.getByRole('heading', { name: 'QA C03-1 - Headline w/' })).toBeVisible();
   await expect(page.getByTestId('headline-with-optional-cta').getByRole('heading')).toContainText('QA C03-1 - Headline w/Optional CTA Ortho Services');
  await expect(page).toHaveScreenshot('Headline.png', { fullPage: true });
});


test('Headline CTA', async ({ page }) => {
  await page.goto('https://sc-sandbox-main-advocatehealthcom.ahcdigital.org/zQA-Home-New/QA-Services-Specialties-2');
   await expect(page.getByText('Headline CTAQA Home NewLorem')).toBeVisible();
   await expect(page.getByRole('heading', { name: 'Headline CTA' })).toBeVisible();
   await expect(page.getByTestId('headline-with-optional-cta').getByTestId('anchor')).toBeVisible();

    await expect(page).toHaveScreenshot('HeadlineCTA.png', { fullPage: true });
});
