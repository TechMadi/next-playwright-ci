import test, { expect } from "@playwright/test";

test.describe("Open Local Host", async () => {
  test("Open Local host ", async ({ page }) => {
    await page.goto(process.env.CLIENT_BASE_URL as string);

    await expect(page).toHaveTitle("Create Next App");
  });
});
