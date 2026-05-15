const { test, expect } = require('@playwright/test');
const SignupPage = require('../Pages/SignupPage');
require('dotenv').config();
 
test.only('Verify user registration', async ({ page }) => {
  console.log('Test Started: Verify user registration');
 
  const signupPage = new SignupPage(page);
 
  // Generate unique email for every run
  const uniqueEmail = `manya${Date.now()}@gmail.com`;
  console.log(`Generated unique email: ${uniqueEmail}`);
 
  // Test data from .env
  const user = {
    firstName: process.env.FIRST_NAME,
    lastName: process.env.LAST_NAME,
    address: process.env.ADDRESS,
    state: process.env.STATE,
    city: process.env.CITY,
    zipcode: process.env.ZIPCODE,
    mobileNumber: process.env.MOBILE_NUMBER
  };
 
  console.log('Navigating to Automation Exercise home page');
  await signupPage.navigate();
 
  console.log('Opening Signup / Login page');
  await signupPage.openSignupLogin();
 
  console.log('Entering signup details');
  await signupPage.enterSignupDetails(
    process.env.USER_NAME,
    uniqueEmail
  );
 
  console.log('Filling account information');
  await signupPage.fillAccountInformation(
    process.env.USER_PASSWORD
  );
 
  console.log('Filling address information');
  await signupPage.fillAddressInformation(user);
 
  console.log('Clicking Create Account button');
  await signupPage.createAccount();
 
  // Assertions with log messages
  console.log('Verifying that "Account Created!" message is visible');
  await expect(signupPage.accountCreatedText).toBeVisible();
  console.log('Account creation success message is displayed.');
 
  console.log('Verifying that Continue button is visible');
  await expect(signupPage.continueButton).toBeVisible();
  console.log('Continue button is displayed.');
 
  console.log('Clicking Continue button');
  await signupPage.continueAfterSuccess();
 
  console.log('Verifying that the home page banner is visible');
  await expect(signupPage.homeBanner).toBeVisible();
  console.log('User successfully returned to the home page.');
 
  console.log('Test Passed: Verify user registration');
});
 