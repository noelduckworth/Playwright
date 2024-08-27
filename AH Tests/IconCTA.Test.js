// @ts-check
const { test, expect } = require('@playwright/test');

test('Icon CTA Colored Box', async ({ page }) => {
  await page.goto('https://sc-sandbox-main-advocatehealthcom.ahcdigital.org/zQA-Home-New/QA%20Automation%20Basic%20Page');

   await expect(page.getByTestId('icon-cta-colored-box')).toBeVisible();
   await expect(page.getByTestId('icon-cta-anchor')).toBeVisible();
   await expect(page.getByTestId('icon-cta-anchor')).toBeVisible();
  await expect(page).toHaveScreenshot('IconCTAColoredBox.png', { fullPage: true });
});

test('Icon CTA Bordered', async ({ page }) => {
  await page.goto('https://sc-sandbox-main-advocatehealthcom.ahcdigital.org/zQA-Home-New/QA-Services-Specialties-2/QA-Service-Line-Landing-Page');
   await expect(page.getByTestId('icon-cta-bordered-grid')).toBeVisible();
   await expect(page.getByText('ADV QA C31-1 - Icon CTA Bordered Card LivewellSchedule your orthopedic')).toBeVisible();
   await expect(page.getByRole('link', { name: 'Schedule in Livewell' })).toBeVisible();
   await expect(page.getByRole('link', { name: 'Schedule in Livewell' })).toBeEnabled();
      
   await expect(page.getByTestId('icon-cta-bordered-card').nth(1)).toBeVisible();
   await expect(page.getByText('ADV QA C31-2 - Icon CTA Bordered Card OnlineSchedule your orthopedic')).toBeVisible();
   await expect(page.getByRole('link', { name: 'Schedule online' })).toBeVisible();
   await expect(page.getByTestId('icon-cta-bordered-card-second-cta')).toBeVisible();
   await expect(page.getByRole('link', { name: 'Schedule online' })).toBeEnabled();
   await expect(page.getByTestId('icon-cta-bordered-card-second-cta')).toBeEnabled();

   await expect(page.getByTestId('icon-cta-bordered-card').nth(2)).toBeVisible();
   await expect(page.getByText('ADV QAC31-3 - PhoneCall us to')).toBeVisible();
   await expect(page.getByRole('link', { name: 'Call 800-323-' })).toBeVisible();
     await expect(page.getByRole('link', { name: 'Call 800-323-' })).toBeEnabled();

  await expect(page).toHaveScreenshot('IconCTABordered.png', { fullPage: true });
});

test('Icon CTA Left Aligned', async ({ page }) => {
  await page.goto('https://sc-sandbox-main-advocatehealthcom.ahcdigital.org/zQA-Home-New/QA%20Automation%20Basic%20Page');
   await expect(page.getByTestId('icon-cta-left-aligned')).toBeVisible();
   await expect(page.getByTestId('icon-cta-left-aligned-grid')).toBeVisible();
   await expect(page.getByTestId('icon-cta-left-aligned-card-card-cta')).toBeVisible();
  await expect(page).toHaveScreenshot('IconCTALeftAligned.png', { fullPage: true });
});


