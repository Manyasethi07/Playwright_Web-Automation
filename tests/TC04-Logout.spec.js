const { test, expect } = require('@playwright/test');

const LoginPage = require('../Pages/LoginPage');
const LogoutPage = require('../Pages/LogoutPage');

require('dotenv').config();

test('Verify user logout', async ({ page }) => {

  console.log('To Verify user logged out');

  // Initialize Page Objects
  const loginPage = new LoginPage(page);
  const logoutPage = new LogoutPage(page);

  // Navigate to website
  console.log('Opening website');
  await loginPage.navigate();

  // Open Login Page
  console.log('Opening login page');
  await loginPage.openLoginPage();

  // Login
  console.log('Logging in with valid credentials');

  await loginPage.login(
    process.env.LOGIN_EMAIL,
    process.env.LOGIN_PASSWORD
  );

  // Verify Login Success
  console.log('Verifying successful login');

  await expect(
    loginPage.loggedInAsText
  ).toBeVisible();

  console.log('Login successful');

  // Logout
  console.log('Clicking Logout link');

  await logoutPage.clickLogout();

  // Verify redirect to login page
  console.log('Verifying redirect to login page');

  await expect(page).toHaveURL(/login/);

  console.log('User redirected to login page.');

  // Verify Signup/Login link visible
  console.log('Verifying Signup / Login link visibility');

  await expect(
    logoutPage.signupLoginLink
  ).toBeVisible();

  console.log(' Signup / Login link visible.');

  console.log('Test Passed: Verify user logout');

});