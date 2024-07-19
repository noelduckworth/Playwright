// @ts-check
const { test, expect } = require('@playwright/test');

test('Hero Banner Carousel', async ({ page }) => {
  await page.goto('https://sc-main-advocatehealthcom.ahcdigital.org/QA-Home/doctors?sc_site=AdvocateHealthCom');
  await expect(page.getByTestId('hero-banner-carousel').getByTestId('hero-banner')).toBeVisible();
  await expect(page.getByTestId('hero-banner-carousel').getByTestId('heading')).toContainText('QA B01 - Hero Banner2');
  await page.getByRole('button', { name: 'Next slide' }).click();
  await page.getByRole('button', { name: 'Pause' }).click();
  await expect(page).toHaveScreenshot('HeroBannerCarousel.png', { fullPage: true })
});


test('Hero Banner', async ({ page }) => {

  await page.goto('https://sc-main-advocatehealthcom.ahcdigital.org/QA-Home/doctors?sc_site=AdvocateHealthCom');
  await page.getByTestId('hero-banner').nth(1).scrollIntoViewIfNeeded;
  await page.getByTestId('hero-banner').nth(1).click();  
  await expect(page.getByTestId('hero-banner').nth(1)).toBeVisible();
  await expect(page.locator('#content')).toContainText('QAB01 - QA Hero BannerThis instance is set to HIDE on mobile devices. This is a fine headline for QA testing.');
  await expect(page).toHaveScreenshot('HeroBanner.png', { fullPage: true })
});