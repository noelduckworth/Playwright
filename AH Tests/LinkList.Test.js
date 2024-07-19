// @ts-check
const { test, expect } = require('@playwright/test');

test('Link List', async ({ page }) => {
  await page.goto('https://sc-main-advocatehealthcom.ahcdigital.org/QA/C08%20-%20Link%20List/C08%20-%20Link%20List');
 
  await expect(page.getByText('Link ListOptional Supporting')).toBeVisible();
  await expect(page.getByRole('link', { name: 'Service Link Here' }).first()).toBeVisible();
  await expect(page.getByRole('link', { name: 'Service Link Here' }).first()).toBeEnabled();
 
  await expect(page.getByRole('link', { name: 'Service Link Here' }).nth(2)).toBeVisible();
  await expect(page.getByRole('link', { name: 'Service Link Here' }).nth(2)).toBeEnabled();

  await expect(page.getByRole('link', { name: 'Service Link Here' }).nth(1)).toBeVisible();
  await expect(page.getByRole('link', { name: 'Service Link Here' }).nth(3)).toBeEnabled();

  await expect(page.getByRole('link', { name: 'Service Link Here' }).nth(3)).toBeVisible();
  await expect(page.getByRole('link', { name: 'Service Link Here' }).nth(3)).toBeEnabled();

  await expect(page.getByRole('link', { name: 'Button Name' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Button Name' })).toBeEnabled();

  await expect(page).toHaveScreenshot();
});
