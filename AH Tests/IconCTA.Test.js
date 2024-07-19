// @ts-check
const { test, expect } = require('@playwright/test');

test('Icon CTA Colored Box', async ({ page }) => {
  await page.goto('https://sc-main-advocatehealthcom.ahcdigital.org/QA/C32%20Icon%20CTA%20Colored%20Box/C32%20Icon%20CTA%20Colored%20Box');
 
  await expect(page.getByTestId('icon-cta-colored-box')).toBeVisible();
 
  await expect(page.getByTestId('icon-cta-anchor').first()).toBeVisible();
  await expect(page.getByTestId('icon-cta-anchor').first()).toBeEnabled();

  await expect(page.getByTestId('icon-cta-anchor').nth(1)).toBeVisible();
  await expect(page.getByTestId('icon-cta-anchor').nth(1)).toBeEnabled();

  await expect(page.getByRole('link', { name: 'Lorem ipsum dolor sit ame Lorem ipsum dolor sit amet, consectetur adipiscing' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Lorem ipsum dolor sit ame Lorem ipsum dolor sit amet, consectetur adipiscing' })).toBeEnabled();

  await expect(page).toHaveScreenshot('IconCTAColoredBox.png', { fullPage: true });
});

test('Icon CTA Bordered', async ({ page }) => {
  await page.goto('https://sc-main-advocatehealthcom.ahcdigital.org/QA/C31%20Icon%20CTA%20Bordered/C31%20Icon%20CTA%20Bordered');
 
  await expect(page.getByTestId('icon-cta-bordered')).toBeVisible();
  
  await expect(page.getByTestId('icon-cta-bordered-card').first()).toBeVisible();
  await expect(page.locator('div').filter({ hasText: /^Start a scheduled visit$/ }).getByTestId('icon-cta-bordered-card-first-cta')).toBeVisible();
  await expect(page.locator('div').filter({ hasText: /^Start a scheduled visit$/ }).getByTestId('icon-cta-bordered-card-first-cta')).toBeEnabled();
  
  await expect(page.getByTestId('icon-cta-bordered-card').nth(1)).toBeVisible();

  await expect(page.getByTestId('icon-cta-bordered-card').nth(2)).toBeVisible();
  await expect(page.locator('div').filter({ hasText: /^Start a scheduled visitLearn more about this visit$/ }).getByTestId('icon-cta-bordered-card-first-cta')).toBeVisible();
  await expect(page.locator('div').filter({ hasText: /^Start a scheduled visitLearn more about this visit$/ }).getByTestId('icon-cta-bordered-card-first-cta')).toBeEnabled();
  await expect(page.getByRole('link', { name: 'Learn more about this visit' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Learn more about this visit' })).toBeEnabled();
  
  await expect(page.getByTestId('icon-cta-bordered-card').nth(3)).toBeVisible();
  await expect(page.getByRole('link', { name: 'Learn More', exact: true })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Learn More', exact: true })).toBeEnabled();

  await expect(page).toHaveScreenshot('IconCTABordered.png', { fullPage: true });
});

test('Icon CTA Left Aligned', async ({ page }) => {
  await page.goto('https://sc-main-advocatehealthcom.ahcdigital.org/QA/C33%20Icon%20CTA%20Left%20Aligned/C33%20Icon%20CTA%20Left%20Aligned');
 
  await expect(page.getByTestId('icon-cta-left-aligned')).toBeVisible();

  await expect(page.getByTestId('icon-cta-left-aligned-card').first()).toBeVisible();
  await expect(page.getByTestId('icon-cta-left-aligned-card-card-cta').first()).toBeVisible();
  await expect(page.getByTestId('icon-cta-left-aligned-card-card-cta').first()).toBeEnabled();
  
  await expect(page.getByTestId('icon-cta-left-aligned-card').nth(1)).toBeVisible();
  await expect(page.getByTestId('icon-cta-left-aligned-card-card-cta').nth(1)).toBeVisible();
  await expect(page.getByTestId('icon-cta-left-aligned-card-card-cta').nth(1)).toBeEnabled();
 
  await expect(page.getByTestId('icon-cta-left-aligned-card').nth(2)).toBeVisible();
  await expect(page.getByTestId('icon-cta-left-aligned-card-card-cta').nth(2)).toBeVisible();
  await expect(page.getByTestId('icon-cta-left-aligned-card-card-cta').nth(2)).toBeEnabled();

  await expect(page).toHaveScreenshot('IconCTALeftAligned.png', { fullPage: true });
});


