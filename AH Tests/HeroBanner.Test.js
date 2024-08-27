// @ts-check
const { test, expect } = require('@playwright/test');

test('Hero Banner Carousel', async ({ page }) => {

  await page.goto('https://sc-sandbox-main-advocatehealthcom.ahcdigital.org/zQA-Home-New');
  await page.getByTestId('hero-banner-carousel').getByRole('button', { name: 'Pause' }).click();
   await expect(page.getByTestId('hero-banner-carousel').getByLabel('1 /').getByTestId('hero-banner-desktop').locator('div').filter({ hasText: 'Hero Banner 1Hero banner' }).first()).toBeVisible();
   await expect(page.getByTestId('hero-banner-carousel').getByLabel('1 /').getByTestId('container').getByText('Hero Banner 1Hero banner')).toBeVisible();
   await expect(page.getByRole('link', { name: '-800-3 Advocate' })).toBeVisible();
   await expect(page.locator('._carousel-controls_3f4o4_218').first()).toBeVisible();

    await expect(page).toHaveScreenshot('HeroBannerCarousel.png', { fullPage: true });
});


test('Hero Banner', async ({ page }) => {
  await page.goto('https://sc-sandbox-main-advocatehealthcom.ahcdigital.org/zQA-Home-New/QA-Services-Specialties-2');
   await expect(page.getByTestId('hero-banner-desktop').locator('div').filter({ hasText: 'Hero BannerHero Banner' }).first()).toBeVisible();
   await expect(page.getByTestId('hero-banner-desktop').getByText('Hero BannerHero Banner')).toBeVisible();
   await expect(page.getByTestId('hero-banner-first-link-desktop')).toBeVisible();
   await expect(page.getByTestId('hero-banner-first-link-desktop')).toBeEnabled();

  await expect(page).toHaveScreenshot('HeroBanner.png', { fullPage: true ,  threshold: 5.5 })
});