import { test, expect, request } from "@playwright/test";

test.describe("GET  All booking", async () => {
  test("", async ({ request, page }) => {
    page.goto(`${process.env.BASE_URL}`);
  });
});
