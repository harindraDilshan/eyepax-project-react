import { Builder, By, until } from "selenium-webdriver";
import "chromedriver";

(async function testCognitoLoginAndDashboard() {
  const driver = await new Builder().forBrowser("chrome").build();

  try {
    console.log("🚀 Starting Cognito login + dashboard verification...");

    // Step 1️⃣ — Go to login page
    await driver.get("http://localhost:3000/login");

    // Step 2️⃣ — Click "Login with Cognito"
    const loginButton = await driver.wait(
      until.elementLocated(
        By.xpath("//button[contains(text(), 'Login with Cognito')]")
      ),
      10000
    );
    await loginButton.click();
    console.log("✅ Clicked 'Login with Cognito' button");

    // Step 3️⃣ — Wait for Cognito login page
    await driver.wait(until.urlContains("amazoncognito.com"), 15000);

    // Step 4️⃣ — Enter email
    await driver
      .findElement(By.id("formField:R6dpf55:"))
      .sendKeys("admin@eyepax.com");
    await driver.findElement(By.css("button[type='submit']")).click();
    console.log("✅ Entered email");

    // Step 5️⃣ — Enter password
    await driver.wait(until.elementLocated(By.id("formField:r1:")), 10000);
    await driver
      .findElement(By.id("formField:r1:"))
      .sendKeys("@uBzWXQL7BwPXmWW");
    await driver.findElement(By.css("button[type='submit']")).click();
    console.log("✅ Entered password");

    // Step 6️⃣ — Handle optional MFA
    try {
      await driver.wait(until.elementLocated(By.id("formField:rb:")), 5000);
      console.log("⏸ MFA detected — please enter manually...");
      await driver.sleep(15000);
      await driver.findElement(By.css("button[type='submit']")).click();
    } catch {
      console.log("✅ No MFA step detected");
    }

    // Step 7️⃣ — Wait for redirect to dashboard
    await driver.wait(until.urlContains("dashboard"), 20000);
    const currentUrl = await driver.getCurrentUrl();
    if (!currentUrl.includes("dashboard")) {
      throw new Error("❌ Failed to redirect to dashboard.");
    }
    console.log("✅ Redirected to dashboard:", currentUrl);

    // Step 8️⃣ — Verify Dashboard content
    console.log("🔍 Verifying dashboard content...");

    // --- Welcome message ---
    const welcome = await driver.wait(
      until.elementLocated(By.xpath("//h1[contains(text(), 'Welcome back')]")),
      10000
    );
    const welcomeText = await welcome.getText();
    console.log("✅ Found welcome message:", welcomeText);

    // --- Stat cards ---
    const stats = ["Total Users", "Active Sessions", "Recent Audits"];
    for (const stat of stats) {
      const element = await driver.wait(
        until.elementLocated(By.xpath(`//*[contains(text(), '${stat}')]`)),
        10000
      );
      if (await element.isDisplayed()) {
        console.log(`✅ Stat visible: ${stat}`);
      } else {
        console.warn(`⚠️ Stat not visible: ${stat}`);
      }
    }

    // --- Quick Actions ---
    const actions = ["Manage Users", "View Audit Logs"];
    for (const action of actions) {
      const element = await driver.wait(
        until.elementLocated(By.xpath(`//h3[contains(text(), '${action}')]`)),
        10000
      );
      if (await element.isDisplayed()) {
        console.log(`✅ Quick Action visible: ${action}`);
      } else {
        console.warn(`⚠️ Quick Action not visible: ${action}`);
      }
    }

    console.log("🎉 Dashboard content verification passed successfully!");
  } catch (err) {
    console.error("❌ Test failed:", err);
  } finally {
    await driver.quit();
    console.log("🚪 Browser closed.");
  }
})();
