import { Builder, By, until, WebDriver } from "selenium-webdriver";
import "chromedriver";
import { strict as assert } from "assert";

describe("Audit Logs Page UI Automation", function () {
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

  it("should verify Audit Logs Page UI elements", async () => {
    // 1️⃣ Navigate to /audit-logs
    await driver.get("http://localhost:3000/audit-logs");

    // 2️⃣ Verify the main heading
    const heading = await driver.wait(
      until.elementLocated(By.xpath("//h1[contains(text(), 'Audit Logs')]")),
      10000
    );
    assert.ok(await heading.isDisplayed(), "Audit Logs heading visible");
    console.log("✅ Found 'Audit Logs' heading");

    // 3️⃣ Verify subtitle text
    const subtitle = await driver.findElement(By.xpath("//*[contains(text(), 'View login and role change events')]"));
    assert.ok(await subtitle.isDisplayed(), "Subtitle visible");
    console.log("✅ Found page subtitle text");


    // 5️⃣ Verify pagination controls
    const nextBtn = await driver.wait(
      until.elementLocated(By.xpath("//button[contains(text(), 'Next')]")),
      10000
    );
    const prevBtn = await driver.wait(
      until.elementLocated(By.xpath("//button[contains(text(), 'Previous')]")),
      10000
    );
    assert.ok(await nextBtn.isDisplayed(), "Next button visible");
    assert.ok(await prevBtn.isDisplayed(), "Previous button visible");
    console.log("✅ Pagination buttons visible");

    // 6️⃣ Verify page info text
    const pageInfo = await driver.wait(
      until.elementLocated(By.xpath("//*[contains(text(), 'Page')]")),
      10000
    );
    assert.ok(await pageInfo.isDisplayed(), "Pagination info visible");
    console.log("✅ Found pagination info:", await pageInfo.getText());

    // 7️⃣ Verify audit logs list (or empty state)
    const logsList = await driver.findElements(By.css("[data-testid='audit-log-row'], .audit-log-row, .log-entry"));
    console.log(`✅ Found ${logsList.length} audit log entries (or placeholders)`);

    // Optional: Click Next button (if available)
    if (await nextBtn.isEnabled()) {
      await nextBtn.click();
      console.log("✅ Clicked 'Next' pagination button");
      await driver.sleep(2000);
    } else {
      console.log("ℹ️ 'Next' button disabled — single page of results");
    }
  });
});
