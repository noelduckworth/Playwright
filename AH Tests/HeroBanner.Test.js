// @ts-check
const { test, expect } = require('@playwright/test');

test('Hero Banner Carousel', async ({ page }) => {
  //page.goto('https://google.com', { waitUntil: 'networkidle' });
  await page.goto('https://sc-sandbox-main-advocatehealthcom.ahcdigital.org/zQA-Home-New', { waitUntil: 'networkidle' });
  await page.getByTestId('hero-banner-carousel').getByRole('button', { name: 'Pause' }).click();
   await expect(page.getByTestId('hero-banner-carousel').getByLabel('1 /').getByTestId('hero-banner')).toBeVisible();
   await expect(page.getByRole('heading', { name: 'Hero Banner 1' })).toBeVisible();
   await expect(page.getByTestId('hero-banner-carousel').getByLabel('1 /').getByTestId('rich-text-supporting-copy').getByText('Hero banner supporting copy tel:18003238622 Find a Cardiologist')).toBeVisible();
   await expect(page.getByRole('link', { name: '-800-3 Advocate' })).toBeVisible();
   await expect(page.getByRole('link', { name: '-800-3 Advocate' })).toBeEnabled();
   await expect(page.locator('._carousel-controls_3f4o4_218').first()).toBeVisible();
    await expect(page).toHaveScreenshot('HeroBannerCarousel.png', { fullPage: true });
});


test('Hero Banner', async ({ page }) => {
  await page.goto('https://sc-sandbox-main-advocatehealthcom.ahcdigital.org/zQA-Home-New/QA-Services-Specialties-2');
   await expect(page.getByTestId('hero-banner')).toBeVisible();
   await expect(page.getByTestId('hero-banner').getByText('Hero BannerHero Banner')).toBeVisible();
   await expect(page.getByTestId('first-link-desktop')).toBeVisible();
  await expect(page).toHaveScreenshot('HeroBanner.png', { fullPage: true })
});