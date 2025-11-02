import { Builder, By, until } from "selenium-webdriver";

(async function testExampleComponent() {
  const driver = await new Builder().forBrowser("chrome").build();

  try {
    // 1. Open your local React app
    await driver.get("http://localhost:3000"); // change if using CRA or deployed version

    // 2. Wait for your component (for example, a button with text)
    const button = await driver.wait(
      until.elementLocated(By.css('button[data-testid="submit-btn"]')),
      10000
    );

    // 3. Click the button
    await button.click();

    // 4. Verify a result
    const result = await driver.wait(
      until.elementLocated(By.css('p[data-testid="result-text"]')),
      5000
    );

    const text = await result.getText();
    console.log("✅ Result:", text);
  } finally {
    await driver.quit();
  }
})();
