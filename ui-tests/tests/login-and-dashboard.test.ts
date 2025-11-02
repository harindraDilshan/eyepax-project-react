import { Builder, By, until, WebDriver } from "selenium-webdriver";
import "chromedriver";
import { strict as assert } from "assert";

describe("Cognito Login + Dashboard Content Test", function () {
  this.timeout(90000); // slightly higher because Cognito login + redirect takes time

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
      until.elementLocated(
        By.xpath("//button[contains(text(), 'Login with Cognito')]")
      ),
      10000
    );
    await loginButton.click();

    await driver.wait(until.urlContains("amazoncognito.com"), 10000);

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

    // Wait for dashboard
    await driver.wait(until.urlContains("dashboard"), 20000);
    const currentUrl = await driver.getCurrentUrl();
    assert.ok(currentUrl.includes("dashboard"), "Redirected to dashboard");
  });

  it("should verify dashboard content elements", async () => {
    // --- Welcome message ---
    const welcome = await driver.wait(
      until.elementLocated(By.xpath("//h1[contains(text(), 'Welcome back')]")),
      10000
    );
    const welcomeText = await welcome.getText();
    console.log("✅ Found welcome message:", welcomeText);
    assert.ok(welcomeText.includes("Welcome back"));

    // --- Stat cards ---
    const stats = ["Total Users", "Active Sessions", "Recent Audits"];
    for (const stat of stats) {
      const element = await driver.wait(
        until.elementLocated(By.xpath(`//*[contains(text(), '${stat}')]`)),
        10000
      );
      assert.ok(await element.isDisplayed(), `${stat} should be visible`);
    }

    // --- Quick Actions ---
    const actions = ["Manage Users", "View Audit Logs"];
    for (const action of actions) {
      const element = await driver.wait(
        until.elementLocated(By.xpath(`//h3[contains(text(), '${action}')]`)),
        10000
      );
      assert.ok(await element.isDisplayed(), `${action} should be visible`);
    }

    console.log("🎉 Dashboard content verification passed!");
  });
});
