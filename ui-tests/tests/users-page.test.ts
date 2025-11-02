import { Builder, By, until, WebDriver } from "selenium-webdriver";
import "chromedriver";
import { strict as assert } from "assert";

describe("Users Page UI Automation", function () {
  this.timeout(120000);

  let driver: WebDriver;

  before(async () => {
    driver = await new Builder().forBrowser("chrome").build();
  });

  after(async () => {
    await driver.quit();
  });

  it("should login successfully via Cognito", async () => {
    await driver.get("http://localhost:3000/login");

    const loginButton = await driver.wait(
      until.elementLocated(By.xpath("//button[contains(text(), 'Login with Cognito')]")),
      10000
    );
    await loginButton.click();
    console.log("✅ Clicked Login with Cognito");

    // Wait for Cognito login page
    await driver.wait(until.urlContains("amazoncognito.com"), 15000);

    // Step 1: Email
    await driver
      .findElement(By.id("formField:R6dpf55:"))
      .sendKeys("admin@eyepax.com");
    await driver.findElement(By.css("button[type='submit']")).click();
    console.log("✅ Entered email");

    // Step 2: Password
    await driver.wait(until.elementLocated(By.id("formField:r1:")), 10000);
    await driver
      .findElement(By.id("formField:r1:"))
      .sendKeys("@uBzWXQL7BwPXmWW");
    await driver.findElement(By.css("button[type='submit']")).click();
    console.log("✅ Entered password");

    // Step 3: Optional MFA
    try {
      await driver.wait(until.elementLocated(By.id("formField:rb:")), 5000);
      console.log("⏸ MFA detected — please enter manually...");
      await driver.sleep(15000);
      await driver.findElement(By.css("button[type='submit']")).click();
    } catch {
      console.log("✅ No MFA step detected");
    }

    // Wait for dashboard redirect
    await driver.wait(until.urlContains("dashboard"), 20000);
    console.log("✅ Login successful, redirected to dashboard");
  });

  it("should verify Users Page content", async () => {
    // 1️⃣ Navigate to Users Page
    await driver.get("http://localhost:3000/users");

    // 2️⃣ Verify page heading
    const heading = await driver.wait(
      until.elementLocated(By.xpath("//h1[contains(text(), 'Users Management')]")),
      10000
    );
    assert.ok(await heading.isDisplayed(), "Users Management heading is visible");
    console.log("✅ Found Users Management heading");

    // 3️⃣ Verify search bar exists
    const searchInput = await driver.wait(
      until.elementLocated(By.css("input[placeholder*='Search']")),
      10000
    );
    assert.ok(await searchInput.isDisplayed(), "Search input visible");
    console.log("✅ Found search input");

    // Type a search query
    await searchInput.clear();
    await searchInput.sendKeys("john");
    console.log("✅ Entered search query: john");

    // Wait for results (mock or real)
    await driver.sleep(2000);

    // 4️⃣ Verify pagination buttons
    const nextBtn = await driver.findElement(By.xpath("//button[contains(text(), 'Next')]"));
    const prevBtn = await driver.findElement(By.xpath("//button[contains(text(), 'Previous')]"));
    assert.ok(await nextBtn.isDisplayed(), "Next button visible");
    assert.ok(await prevBtn.isDisplayed(), "Previous button visible");
    console.log("✅ Pagination buttons are visible");

    // 5️⃣ Verify pagination info
    const pageInfo = await driver.findElement(By.xpath("//*[contains(text(), 'Page')]"));
    assert.ok(await pageInfo.isDisplayed(), "Page info visible");
    console.log("✅ Page info displayed");

    // 6️⃣ Optional: Check user cards/list presence
    const userCards = await driver.findElements(By.css("[data-testid='user-row'], .user-row, .user-card"));
    console.log(`✅ Found ${userCards.length} user entries (or placeholders)`);

    // 7️⃣ Optional: Open and close a user detail modal (if users exist)
    if (userCards.length > 0) {
      await userCards[0].click();
      console.log("✅ Clicked first user entry");

      await driver.wait(until.elementLocated(By.css(".modal, [role='dialog']")), 10000);
      console.log("✅ User detail modal opened");

      const closeBtn = await driver.findElement(By.xpath("//button[contains(text(), 'Close')]"));
      await closeBtn.click();
      console.log("✅ Closed user detail modal");
    } else {
      console.log("ℹ️ No user rows available to test modal interaction");
    }
  });
});
