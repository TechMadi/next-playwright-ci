import { test as setup, expect } from "@playwright/test";
const OVERVIEW_TEXT = "Here's your overview";
const userAuthFile = "playwright/.auth/user.json";

setup("sign in as a user", async ({ page }) => {
  await page.goto("/", { waitUntil: "domcontentloaded" });

  await page.getByLabel("Email").fill(process.env.DEV_EMAIL! as string);

  await page.getByPlaceholder("Password").fill(process.env.PASSWORD! as string);
  page.getByRole("button", { name: "Login" }).click();

  await expect(page.getByText(OVERVIEW_TEXT)).toBeVisible();
  await page.context().storageState({ path: userAuthFile });
});
