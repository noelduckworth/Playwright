// @ts-check
const { test, expect } = require('@playwright/test');

test('Accordion', async ({ page }) => {
    await page.goto('https://sc-main-advocatehealthcom.ahcdigital.org/QA-Page/Accordion');
   await page.getByRole('button', { name: 'QA C01-1 - Accordion Item -' }).click();
    await expect(page.getByLabel('QA C01-1 - Accordion Item -').getByTestId('rich-text').first()).toBeVisible();
  
    await page.getByRole('button', { name: 'Accordion Headline Here 2' }).first().click();
    await expect(page.getByRole('region', { name: 'Accordion Headline Here 2' }).getByTestId('rich-text').first()).toBeVisible();
   
    await page.getByRole('button', { name: 'Accordion Headline Here 1' }).first().click();
    await expect(page.locator('[id="radix-\\:Rbin6\\:"] > div')).toBeVisible();
   
    await page.getByRole('button', { name: 'How do I find a doctor or' }).first().click();
    await expect(page.locator('[id="radix-\\:Rcin6\\:"] > div')).toBeVisible();
    
    await expect(page).toHaveScreenshot({ threshold: 0.05 });
});