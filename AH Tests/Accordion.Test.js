// @ts-check
const { test, expect } = require('@playwright/test');

test('Accordion', async ({ page }) => {
    await page.goto('https://sc-sandbox-main-advocatehealthcom.ahcdigital.org/zQA-Home-New/ADVQA%20Kitchen%20Sink%20Basic%20Page%20MM');
     await expect(page.locator('#content div').filter({ hasText: 'ADV QA C01-1 - AccordionTop Supporting copy - QA TESTAccordion Headline Here' }).nth(3)).toBeVisible();
     await expect(page.getByRole('button', { name: 'Accordion Headline Here' })).toBeVisible();
    await page.getByRole('button', { name: 'Accordion Headline Here' }).click();
     await expect(page.getByText('Lorem Ipsum is simply dummy').first()).toBeVisible();
     await expect(page.getByLabel('Accordion Headline Here').getByTestId('rich-text').first()).toBeVisible();
    await page.getByRole('button', { name: 'Accordion Headline Here' }).click();
     await expect(page.getByRole('button', { name: 'Neonatology/NICU' }).first()).toBeVisible();
    await page.getByRole('button', { name: 'Neonatology/NICU' }).first().click();
     await expect(page.locator('[id="radix-\\:R38rn6\\:"] > div > .r-rich-text > div')).toBeVisible();
    await page.getByRole('button', { name: 'Neonatology/NICU' }).first().click();
     await expect(page.getByRole('button', { name: 'QA C01-1 - Accordion Item -' })).toBeVisible();
    await page.getByRole('button', { name: 'QA C01-1 - Accordion Item -' }).click();
     await expect(page.getByLabel('QA C01-1 - Accordion Item -').getByTestId('rich-text').first()).toBeVisible();
    
    await expect(page).toHaveScreenshot({ threshold: 0.05 });
});