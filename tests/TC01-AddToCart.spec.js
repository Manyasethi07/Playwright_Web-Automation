const { test, expect } = require('@playwright/test');
const LoginPage = require('../Pages/LoginPage');
const CheckoutPage = require('../Pages/AddToCartPage');
require('dotenv').config();
 
test.beforeEach(async ({ page }) => {
  console.log('//BeforeEach Hook Started: User Login');
 
  const loginPage = new LoginPage(page);
 
  console.log('Navigating to Automation Exercise home page');
  await loginPage.navigate();
 
  console.log('Opening Signup / Login page');
  await loginPage.openLoginPage();
 
  console.log('Logging in with credentials from .env');
  await loginPage.login(
    process.env.LOGIN_EMAIL,
    process.env.LOGIN_PASSWORD
  );
 
  console.log('Verifying successful login');
  await expect(loginPage.loggedInAsText).toBeVisible();
  console.log('Login successful.');
 
  console.log('//BeforeEach Hook Completed');
});
 
test('Verify checkout and payment confirmation', async ({ page }) => {
  console.log(' Test Started: Verify checkout and payment');
 
  const checkoutPage = new CheckoutPage(page);
 
  const payment = {
    cardName: process.env.CARD_NAME,
    cardNumber: process.env.CARD_NUMBER,
    cvc: process.env.CARD_CVC,
    expiryMonth: process.env.CARD_EXPIRY_MONTH,
    expiryYear: process.env.CARD_EXPIRY_YEAR
  };
 
  console.log('Opening Cart page...');
  await checkoutPage.goToCart();
 
  console.log('Proceeding to Checkout...');
  await checkoutPage.proceedToCheckout();
 
  console.log('Clicking Place Order...');
  await checkoutPage.placeOrder();
 
  console.log('Entering payment details...');
  await checkoutPage.fillPaymentDetails(payment);
 
  console.log('Clicking Pay and Confirm Order...');
  await checkoutPage.confirmOrder();
 
  console.log('Reading confirmation message...');
  const confirmationText =
    await checkoutPage.orderConfirmationText.textContent();
  console.log(`Confirmation Message: ${confirmationText}`);
 
  console.log('Verifying order confirmation message...');
  await expect(
    checkoutPage.orderConfirmationText
  ).toContainText(
    'Congratulations! Your order has been confirmed!'
  );
  console.log('Order confirmed successfully.');
 
  console.log('Verifying Continue button is visible...');
  await expect(checkoutPage.continueButton).toBeVisible();
  console.log('Continue button is visible.');
 
  console.log('Clicking Continue button...');
  await checkoutPage.clickContinue();
 
  console.log('Test Passed: Verify checkout and payment');
});
 