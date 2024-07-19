// @ts-check
const { test, expect } = require('@playwright/test');

test('Tabs', async ({ page }) => {
  await page.goto('https://sc-main-advocatehealthcom.ahcdigital.org/QA/N08%20Tabs/N08%20Tabs');

  await expect(page.locator('html')).toBeVisible();

  await page.getByRole('tab', { name: 'Tab 1' }).click();
  await expect(page.getByRole('tab', { name: 'Tab 1' })).toBeVisible();
  await expect(page.getByRole('tab', { name: 'Tab 1' })).toBeEnabled();
  await expect(page.getByTestId('rich-text').locator('div')).toContainText('Aliquet sagittis id consectetur purus ut faucibus. Tempus iaculis urna id volutpat lacus laoreet non. Sit amet dictum sit amet justo. Tellus in metus vulputate eu scelerisque felis imperdiet. Quis hendrerit dolor magna eget est. Mauris pharetra et ultrices neque ornare. Scelerisque in dictum non consectetur a erat. Purus gravida quis blandit turpis cursus in hac habitasse platea. Nulla aliquet enim tortor at auctor urna nunc. Fermentum odio eu feugiat pretium nibh ipsum. Condimentum lacinia quis vel eros donec ac odio tempor orci. Gravida dictum fusce ut placerat orci. Non diam phasellus vestibulum lorem sed risus ultricies tristique. Nisl vel pretium lectus quam id leo. Bibendum est ultricies integer quis auctor elit sed vulputate mi. Id diam maecenas ultricies mi eget mauris pharetra et. Eu feugiat pretium nibh ipsum consequat nisl. Quam adipiscing vitae proin sagittis nisl rhoncus mattis. Dictum varius duis at consectetur lorem donec massa.');
  
  await page.getByRole('tab', { name: 'Tab 2' }).click();
  await expect(page.getByRole('tab', { name: 'Tab 2' })).toBeVisible();
  await expect(page.getByRole('tab', { name: 'Tab 2' })).toBeEnabled();
  await expect(page.getByTestId('rich-text').locator('div')).toContainText('Sit amet risus nullam eget felis. Purus faucibus ornare suspendisse sed nisi lacus sed viverra tellus. Sit amet porttitor eget dolor. Id porta nibh venenatis cras sed. Consequat ac felis donec et odio pellentesque. Viverra aliquet eget sit amet tellus. Ac turpis egestas sed tempus urna et pharetra pharetra massa. Ullamcorper eget nulla facilisi etiam. Consequat ac felis donec et odio pellentesque diam volutpat commodo. Eu volutpat odio facilisis mauris sit amet massa vitae tortor. Et malesuada fames ac turpis egestas sed tempus urna et. Tortor pretium viverra suspendisse potenti.');

  await expect(page).toHaveScreenshot();
});
