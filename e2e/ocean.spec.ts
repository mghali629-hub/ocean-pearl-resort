import { test, expect } from '@playwright/test';

test.describe('Ocean Pearl Resort E2E Test Suite', () => {
  test('should display homepage and book overwater villa', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('text=Ocean Pearl')).toBeVisible();
    await page.fill('input[placeholder="Primary Guest Name"]', 'Lord Sterling');
    await page.click('button:has-text("Confirm Direct Villa Booking")');
    await expect(page.locator('text=Villa Reservation Confirmed')).toBeVisible();
  });
});
