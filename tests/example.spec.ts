import { test, expect } from '@playwright/test';

test('should toggle title between Hello sir and Hello madam', async ({ page }) => {
  await page.goto('http://localhost:3000'); // Update with actual URL if needed

  const titleDisplay = page.getByTestId('title-display');
  const toggleButton = page.getByTestId('toggle-title-btn');

  // Check initial state
  await expect(titleDisplay).toHaveText("Hello sir");

  // Click button to toggle
  await toggleButton.click();
  await expect(titleDisplay).toHaveText("Hello madam");

  // Click again to toggle back
  await toggleButton.click();
  await expect(titleDisplay).toHaveText("Hello sir");
});