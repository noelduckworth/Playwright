// @ts-check
const { test, expect } = require('@playwright/test');

test('CTA Content Card', async ({ page }) => {
  await page.goto('https://sc-main-advocatehealthcom.ahcdigital.org/QA/C20%20CTA%20Content%20Cards/C20%20CTA%20Content%20Cards');
 
  await expect(page.getByTestId('column-grid').first()).toBeVisible();

  await expect(page.locator('#content img').first()).toBeVisible();

  await expect(page.getByText('When you can’t pencil in an appointmentDr. David Callaway joins unique network').first()).toBeVisible();
  await expect(page.locator('#content')).toContainText('When you can’t pencil in an appointmentDr. David Callaway joins unique network examining leadership examples of recent presidents');
 
  await expect(page.getByRole('link', { name: 'Learn More' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Learn More' })).toBeEnabled();


  await expect(page).toHaveScreenshot({threshold: 0.15 });
});
