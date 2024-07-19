// @ts-check
const { test, expect } = require('@playwright/test');

test('Hero Statistics', async ({ page }) => {
    await page.goto('https://sc-main-advocatehealthcom.ahcdigital.org/CMC/QA/C52%20Hero%20Statistics/C52%20Hero%20Statistics');

  await expect(page.getByText('C52 Hero StatisticsLorem')).toBeVisible();
  await expect(page.locator('#special-id').getByTestId('hero-statistics-column-grid')).toBeVisible();
  await expect(page.locator('#special-id')).toContainText('nearly155Kteammatesmore than21Kdoctorsnearly42Knursesserving nearly6Mpatients69hospitalsmore than1Ksites of caredelivering nearly$6Bin community benefitmore than$28Bin annual revenue3rdlargest nonprofit');

  await expect(page).toHaveScreenshot('HeroStatisticsScreenshot.png');
});


test('Top Statistics', async ({ page }) => {
    await page.goto('https://sc-main-advocatehealthcom.ahcdigital.org/CMC/QA/C50%20Top%20Statistics/C50%20Top%20Statistics');

    await expect(page.getByText('Top Statistics V1Lorem ipsum')).toBeVisible();
    await expect(page.locator('#top-links-id').getByText('100%All our hospitals')).toBeVisible();
    await expect(page.locator('#top-links-id').getByText('13% reductionAll our')).toBeVisible();
    await expect(page.locator('#top-links-id').getByText('124% increaseIn language')).toBeVisible();
    await expect(page.getByTestId('top-statistics-cta')).toBeEnabled();

    await expect(page).toHaveScreenshot('TopStatisticsScreenshot.png');
});

test('Side Statistics', async ({ page }) => {
    await page.goto('https://sc-main-advocatehealthcom.ahcdigital.org/CMC/QA/C51%20Side%20Statistics/C51%20Side%20Statistics');

    await expect(page.getByTestId('side-statistics-content').first()).toBeVisible();
    await expect(page.locator('#content')).toContainText('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.');
    await expect(page.locator('#content')).toContainText('50KLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.');
    await expect(page.locator('#content')).toContainText('2000Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.');
    await expect(page.locator('#stats-blue').getByTestId('side-statistics-content')).toBeVisible();
    await expect(page.getByRole('list').nth(2)).toBeVisible();
  
    await expect(page).toHaveScreenshot('SideStatisticsScreenshot.png');
});