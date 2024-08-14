// @ts-check
const { test, expect } = require('@playwright/test');

test('Bio Directory Card', async ({ page }) => {

  await page.goto('https://sc-sandbox-main-advocatehealthcom.ahcdigital.org/zQA-Home-New/ADVQA%20BioCard%20Grid%20Page%20MM2');
   await expect(page.getByTestId('container').nth(3)).toBeVisible();
   await expect(page.getByTestId('bio-card').first()).toBeVisible();
   await expect(page.getByTestId('bio-card-directory').getByAltText(' ', { exact: true })).toBeVisible();
   await expect(page.getByText('Specialty: Biography ThreeTitle: Biography ThreePhone: 4144579875Email: aurqa1@')).toBeVisible();
   await expect(page.getByTestId('bio-card').nth(1)).toBeVisible();
   await expect(page.getByAltText('  ')).toBeVisible();
   await expect(page.getByText('Biography FourSpecialty:')).toBeVisible();
  await expect(page).toHaveScreenshot('BioDirectoryCard.png', { fullPage: true });
});

test('Bio Grid', async ({ page }) => {
  await page.goto('https://sc-sandbox-main-advocatehealthcom.ahcdigital.org/zQA-Home-New/ADVQA%20BioCard%20Grid%20Page%20MM2');
   await expect(page.getByText('Bio Card GridBiography OneQA')).toBeVisible();
   await expect(page.getByText('Biography OneQA Analyst, Sr.')).toBeVisible();
   await expect(page.getByRole('img', { name: 'Advocate Aurora Health contributed $2.1B to community charitable care and' })).toBeVisible();
   await expect(page.getByRole('link', { name: 'Biography One' })).toBeVisible();
   await expect(page.getByRole('link', { name: 'Biography One' })).toBeVisible();
   await expect(page.getByText('Biography TwoBiography Two')).toBeVisible();
   await expect(page.getByText('Biography FiveBiography Card')).toBeVisible();
   await expect(page.getByText('Biography SixBiography Card')).toBeVisible();
  await expect(page).toHaveScreenshot('BioGrid.png', { fullPage: true });
});
