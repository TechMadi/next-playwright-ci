import { test, expect } from "@playwright/test";
const userAuthFile = "playwright/.auth/user.json";

test.describe(
  "Open Local Host",
  {
    tag: "@e2e",
  },

  async () => {
    test.use({ storageState: userAuthFile });

    test("Open Local host ", async ({ page }) => {
      await page.goto(process.env.CLIENT_BASE_URL as string);

      await expect(page).toHaveTitle("Spear CAD");
    });

    test("Learn Next Js", async ({ page }) => {
      // await page.goto(process.env.CLIENT_BASE_URL as string) ;
    });
  }
);
