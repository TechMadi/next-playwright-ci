import { test as setup, expect } from "@playwright/test";
const OVERVIEW_TEXT = "Here's your overview";

export const userAuthFile = "playwright/.auth/user.json";

setup("sign in as a user", async ({ page }) => {
  await page.goto("/");

  let emailInput = page.getByLabel("Email");

  let passwordInput = page.getByPlaceholder("Password");

  let loginButton = page.getByRole("button", { name: "Login" });

  await emailInput.fill(process.env.DEV_EMAIL!);
  await passwordInput.fill(process.env.PASSWORD!);
  await loginButton.click();

  await expect(page.getByText(OVERVIEW_TEXT)).toBeVisible();
  await page.context().storageState({ path: userAuthFile });
});
