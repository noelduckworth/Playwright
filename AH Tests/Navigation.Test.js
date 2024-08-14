// @ts-check
const { test, expect } = require('@playwright/test');

test('BreadCrumb', async ({ page }) => {
  await page.goto('https://sc-sandbox-main-advocatehealthcom.ahcdigital.org/zQA-Home-New/QA%20Automation%20Basic%20Page');
   await expect(page.getByTestId('breadcrumb-list')).toBeVisible();
   await expect(page.getByTestId('breadcrumb-list')).toBeEnabled();
  await page.getByRole('link', { name: 'QA Home New' }).click();
  await expect(page).toHaveScreenshot('BreadCrumb.png');
});

test('Global Navigation', async ({ page }) => {
  await page.goto('https://sc-sandbox-main-advocatehealthcom.ahcdigital.org/zQA-Home-New');
   await expect(page.getByTestId('global-navigation')).toBeVisible();
  
   await expect(page.getByRole('button', { name: 'Find Cardiologist Find' })).toBeVisible();
   await expect(page.getByRole('button', { name: 'Find Cardiologist Find' })).toBeEnabled();

   await expect(page.getByRole('button', { name: 'QA Testing item 2 QA Testing item' })).toBeVisible();
   await expect(page.getByRole('button', { name: 'QA Testing item 2 QA Testing item' })).toBeEnabled();


   await expect(page.getByRole('link', { name: 'Services & Specialties' })).toBeVisible();
   await expect(page.getByRole('link', { name: 'Services & Specialties' })).toBeEnabled();
   await expect(page.getByRole('link', { name: 'Appointments' })).toBeVisible();
   await expect(page.getByRole('link', { name: 'Appointments' })).toBeEnabled();
  await expect(page).toHaveScreenshot('GlobalNavigation.png');
});

test('Utility Navigation', async ({ page }) => {
  await page.goto('https://sc-sandbox-main-advocatehealthcom.ahcdigital.org/zQA-Home-New/QA%20Automation%20Basic%20Page');
   await expect(page.getByTestId('utility-navigation')).toBeVisible();
   await expect(page.getByTestId('utility-navigation').getByRole('link', { name: '-3-ADVOCATE' })).toBeVisible();
   await expect(page.getByRole('link', { name: 'ADV QA Test' })).toBeVisible();
   await expect(page.getByRole('link', { name: 'Espanol' })).toBeVisible();
   await expect(page.getByRole('link', { name: 'Find a Doctor' })).toBeVisible();
   await expect(page.getByRole('link', { name: 'Find a Location' })).toBeVisible();
   await expect(page.getByRole('link', { name: 'Pay a Bill' })).toBeVisible();
   
   await expect(page.getByTestId('utility-navigation').getByRole('link', { name: '-3-ADVOCATE' })).toBeEnabled();
   await expect(page.getByRole('link', { name: 'ADV QA Test' })).toBeEnabled();
   await expect(page.getByRole('link', { name: 'Espanol' })).toBeEnabled();
   await expect(page.getByRole('link', { name: 'Find a Doctor' })).toBeEnabled();
   await expect(page.getByRole('link', { name: 'Find a Location' })).toBeEnabled();
   await expect(page.getByRole('link', { name: 'Pay a Bill' })).toBeEnabled();
   await expect(page.getByTestId('utility-navigation').getByTestId('cta-button')).toBeEnabled();
  await expect(page).toHaveScreenshot('UtilityNavigation.png');
});
