import { test, expect, request } from "@playwright/test";

test.describe("GET  All booking", async () => {
  test("Open url", async ({ page }) => {
    await page.goto(`${process.env.BASE_URL}`);
  });
});
