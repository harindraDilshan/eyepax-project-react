// import { Builder, By, until, WebDriver } from "selenium-webdriver";
// import "chromedriver";
// import { strict as assert } from "assert";

// describe("Settings Page UI Automation", function () {
//   this.timeout(120000);

//   let driver: WebDriver;

//   before(async () => {
//     driver = await new Builder().forBrowser("chrome").build();
//   });

//   after(async () => {
//     await driver.quit();
//   });

//   it("should login successfully via Cognito", async () => {
//     await driver.get("http://localhost:3000/login");

//     const loginButton = await driver.wait(
//       until.elementLocated(
//         By.xpath("//button[contains(text(), 'Login with Cognito')]")
//       ),
//       10000
//     );
//     await loginButton.click();
//     console.log("✅ Clicked Login with Cognito");

//     // Wait for Cognito login page
//     await driver.wait(until.urlContains("amazoncognito.com"), 15000);

//     // Step 1: Email
//     await driver
//       .findElement(By.id("formField:R6dpf55:"))
//       .sendKeys("admin@eyepax.com");
//     await driver.findElement(By.css("button[type='submit']")).click();
//     console.log("✅ Entered email");

//     // Step 2: Password
//     await driver.wait(until.elementLocated(By.id("formField:r1:")), 10000);
//     await driver
//       .findElement(By.id("formField:r1:"))
//       .sendKeys("@uBzWXQL7BwPXmWW");
//     await driver.findElement(By.css("button[type='submit']")).click();
//     console.log("✅ Entered password");

//     // Step 3: Optional MFA
//     try {
//       await driver.wait(until.elementLocated(By.id("formField:rb:")), 5000);
//       console.log("⏸ MFA detected — please enter manually...");
//       await driver.sleep(15000);
//       await driver.findElement(By.css("button[type='submit']")).click();
//     } catch {
//       console.log("✅ No MFA step detected");
//     }

//     // Wait for dashboard redirect
//     await driver.wait(until.urlContains("dashboard"), 20000);
//     console.log("✅ Login successful, redirected to dashboard");
//   });

//   it("should verify Settings Page UI elements", async () => {
//     // 1️⃣ Navigate to Settings page
//     await driver.get("http://localhost:3000/settings");

//     // 2️⃣ Verify the main heading
//     const heading = await driver.wait(
//       until.elementLocated(By.xpath("//h1[contains(text(), 'Settings')]")),
//       10000
//     );
//     assert.ok(await heading.isDisplayed(), "Settings heading is visible");
//     console.log("✅ Found Settings heading");

//     // 3️⃣ Verify subtitle
//     const subtitle = await driver.findElement(
//       By.xpath(
//         "//*[contains(text(), 'Manage your profile and role permissions')]"
//       )
//     );
//     assert.ok(await subtitle.isDisplayed(), "Subtitle text visible");
//     console.log("✅ Found subtitle text");

//     // 4️⃣ Verify both tabs exist
//     const profileTab = await driver.wait(
//       until.elementLocated(
//         By.xpath("//button[contains(text(), 'Profile Settings')]")
//       ),
//       10000
//     );
//     const rolesTab = await driver.wait(
//       until.elementLocated(
//         By.xpath("//button[contains(text(), 'Role Management')]")
//       ),
//       10000
//     );
//     assert.ok(await profileTab.isDisplayed(), "Profile Settings tab visible");
//     assert.ok(await rolesTab.isDisplayed(), "Role Management tab visible");
//     console.log("✅ Found both tabs");

//     // 5️⃣ Check Profile tab is active by default
//     const profileTabClass = await profileTab.getAttribute("class");
//     assert.ok(
//       profileTabClass.includes("border-indigo-600"),
//       "Profile tab is active by default"
//     );
//     console.log("✅ Profile tab is active by default");

//     // 6️⃣ Click Role Management tab
//     await rolesTab.click();
//     console.log("✅ Clicked Role Management tab");

//     // Wait for tab switch to complete
//     await driver.sleep(1000);

//     // Verify Role tab becomes active
//     const rolesTabClass = await rolesTab.getAttribute("class");
//     assert.ok(
//       rolesTabClass.includes("border-indigo-600"),
//       "Role Management tab becomes active"
//     );
//     console.log("✅ Role Management tab is active now");

//     // Verify Profile tab is inactive
//     const profileTabClassAfter = await profileTab.getAttribute("class");
//     assert.ok(
//       !profileTabClassAfter.includes("border-indigo-600"),
//       "Profile tab is inactive"
//     );
//     console.log("✅ Profile tab is inactive after switch");

//     // Optional: Check if Role Management content is displayed
//     const roleSection = await driver.findElements(
//       By.xpath("//*[contains(text(), 'Role')]")
//     );
//     console.log(
//       `✅ Found ${roleSection.length} role-related elements (likely from RoleManagement component)`
//     );

//     // 7️⃣ Switch back to Profile tab
//     await profileTab.click();
//     console.log("✅ Switched back to Profile tab");
//   });
// });

import { Builder, By, until, WebDriver, WebElement } from "selenium-webdriver";
import "chromedriver";
import { strict as assert } from "assert";

describe("Settings Page UI Automation (Profile & Role Management)", function () {
  this.timeout(150000); // 2.5 minutes for Cognito login + interactions

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

  it("should verify Settings Page UI and Profile Edit functionality", async () => {
    // 1️⃣ Navigate to Settings Page
    await driver.get("http://localhost:3000/settings");

    // 2️⃣ Verify heading
    const heading = await driver.wait(
      until.elementLocated(By.xpath("//h1[contains(text(), 'Settings')]")),
      10000
    );
    assert.ok(await heading.isDisplayed(), "Settings heading visible");
    console.log("✅ Found Settings heading");

    // 3️⃣ Verify Profile Settings tab is active
    const profileTab = await driver.wait(
      until.elementLocated(
        By.xpath("//button[contains(text(), 'Profile Settings')]")
      ),
      10000
    );
    const profileTabClass = await profileTab.getAttribute("class");
    assert.ok(
      profileTabClass.includes("border-indigo-600"),
      "Profile tab active"
    );
    console.log("✅ Profile tab active by default");

    // 4️⃣ Verify Edit Profile button exists
    const editBtn = await driver.wait(
      until.elementLocated(
        By.xpath("//button[contains(text(), 'Edit Profile')]")
      ),
      10000
    );
    assert.ok(await editBtn.isDisplayed(), "Edit Profile button visible");
    console.log("✅ Found Edit Profile button");

    // 5️⃣ Click Edit Profile
    await editBtn.click();
    console.log("✅ Clicked Edit Profile button");

    // 6️⃣ Verify input fields become editable
    const nameField = await driver.wait(
      until.elementLocated(
        By.css("input[name='name'], [data-testid='profile-name']")
      ),
      5000
    );

    const nameDisabled = await nameField.getAttribute("disabled");
    assert.ok(nameDisabled === null, "Name field is editable");
    console.log("✅ Profile input fields are editable");

    // 7️⃣ Click Save Changes
    const saveBtn = await driver.findElement(
      By.xpath("//button[contains(text(), 'Save Changes')]")
    );
    assert.ok(await saveBtn.isDisplayed(), "Save button visible");
    await saveBtn.click();
    console.log("✅ Clicked Save Changes");

    // Wait briefly for save action
    await driver.sleep(2000);
  });

  it("should verify Role Management tab and user role", async () => {
    // 1️⃣ Switch to Role Management tab
    const rolesTab = await driver.wait(
      until.elementLocated(
        By.xpath("//button[contains(text(), 'Role Management')]")
      ),
      10000
    );
    await rolesTab.click();
    console.log("✅ Switched to Role Management tab");
    await driver.sleep(1000);

    // 2️⃣ Verify Role tab active
    const rolesTabClass = await rolesTab.getAttribute("class");
    assert.ok(
      rolesTabClass.includes("border-indigo-600"),
      "Role Management tab active"
    );
    console.log("✅ Role Management tab active");

    // 3️⃣ Verify user's role is displayed
    const roleText = await driver.wait(
      until.elementLocated(By.css("[data-testid='user-role'], .user-role")),
      10000
    );
    const roleValue = await roleText.getText();
    assert.ok(roleValue.length > 0, "User role text present");
    console.log("✅ User role visible:", roleValue);
  });
});
