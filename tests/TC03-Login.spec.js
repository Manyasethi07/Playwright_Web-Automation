const { test, expect } = require('@playwright/test');
const LoginPage = require('../Pages/LoginPage');
require('dotenv').config();
 
test('Verify user login', async ({ page }) => {
  console.log('Test Started: Verify user login');
 
  const loginPage = new LoginPage(page);
  const email = process.env.LOGIN_EMAIL;
  const password = process.env.LOGIN_PASSWORD;
 
  console.log('Navigating to Automation Exercise home page...');
  await loginPage.navigate();
 
  console.log('Opening Signup / Login page');
  await loginPage.openLoginPage();
 
  console.log(`Entering login email: ${email}`);
  console.log('Entering password');
  await loginPage.login(email, password);
 
  console.log('Verifying that user is logged in');
  await expect(loginPage.loggedInAsText).toBeVisible();
  console.log('Login successful. "Logged in as" is visible.');
 
  console.log('Test Passed: Verify user login');
});
 