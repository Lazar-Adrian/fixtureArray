import { expect } from '@playwright/test';
import { test } from '../fixture';

test.describe('Check Array value', () => {
test.use({
  param1: [
    {
      par1: 1,
      par2: {
        spar1: true,
        spar2: 2,
      },
    },
  ],
  param2: [
    {
      p1: true,
      p2: false,
      p3: "example",
    },
  ],
  param3: [
    {
      a: {
        spar31: true,
        spar32: {
          s2par1: 3,
          s2par2: "test",
        },
      },
      b: {
        spar321: "data",
        spar322: {
          s3par1: 4,
          s3par2: "sample",
        },
      },
      c: "value",
    },
    {
      a: {
        spar31: true,
        spar32: {
          s2par1: 3,
          s2par2: "test",
        },
      },
      b: {
        spar321: "data",
        spar322: {
          s3par1: 4,
          s3par2: "sample",
        },
      },
      c: "value",
    },
    {
      a: {
        spar31: true,
        spar32: {
          s2par1: 3,
          s2par2: "test",
        },
      },
      b: {
        spar321: "data",
        spar322: {
          s3par1: 4,
          s3par2: "sample",
        },
      },
      c: "value",
    }
  ],
});
  
  test('has title', async ({ testPage }) => {
    await testPage.goto("https://playwright.dev/");
    
    // Expect a title "to contain" a substring.
    await expect(testPage).toHaveTitle(/Playwright/);
  });
  
  test.skip("get started link", async ({ testPage }) => {
    await testPage.goto("https://playwright.dev/");

    // Click the get started link.
    await testPage.getByRole("link", { name: "Get started" }).click();

    // Expects page to have a heading with the name of Installation.
    await expect(
      testPage.getByRole("heading", { name: "Installation" })
    ).toBeVisible();
  });
  
});