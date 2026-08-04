import { test, expect } from '@playwright/test';

test.describe('Ocean Pearl Resort E2E Automation Suite', () => {
  test('should load ocean pearl landing page', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('text=Ocean Pearl')).toBeVisible();
  });

  test('should navigate to overwater villa catalog', async ({ page }) => {
    await page.goto('/rooms');
    await expect(page.locator('text=Ocean Pearl')).toBeVisible();
  });

  test('should navigate to direct booking wizard', async ({ page }) => {
    await page.goto('/booking');
    await expect(page.locator('text=Direct Villa Reservation Wizard')).toBeVisible();
  });
});
