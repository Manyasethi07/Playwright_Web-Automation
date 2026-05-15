const { test, expect } = require('@playwright/test');
 
const SignupPage = require('../Pages/SignupPage');
const ProductPage = require('../Pages/SearchPage');
const CheckoutPage = require('../Pages/AddToCartPage');
const LogoutPage = require('../Pages/LogoutPage');
 
require('dotenv').config();
 
test('End-to-End Workflow: Register -> Search -> Add To Cart -> Checkout -> Logout',
  async ({ page }) => {
    
    console.log('END TO END WORKFLOW STARTED');
 
    // Block ad networks to prevent flaky tests (be specific — don't block google fonts/APIs)
    await page.route('**/*', route => {
      const url = route.request().url();
      if (
        url.includes('doubleclick.net') ||
        url.includes('googlesyndication') ||
        url.includes('googleadservices') ||
        url.includes('adservice.google') ||
        url.includes('pagead') ||
        url.includes('adsystem')
      ) {
        return route.abort();
      }
      return route.continue();
    });
 
    // Initialize
    const signupPage = new SignupPage(page);
    const productPage = new ProductPage(page);
    const checkoutPage = new CheckoutPage(page);
    const logoutPage = new LogoutPage(page);
 
    // unique email
    const uniqueEmail = `tester${Date.now()}@gmail.com`;
    console.log(`Generated unique email: ${uniqueEmail}`);
 
    // User data
    const user = {
      firstName: process.env.FIRST_NAME,
      lastName: process.env.LAST_NAME,
      address: process.env.ADDRESS,
      state: process.env.STATE,
      city: process.env.CITY,
      zipcode: process.env.ZIPCODE,
      mobileNumber: process.env.MOBILE_NUMBER
    };
 
    // Payment data
    const payment = {
      cardName: process.env.CARD_NAME,
      cardNumber: process.env.CARD_NUMBER,
      cvc: process.env.CARD_CVC,
      expiryMonth: process.env.CARD_EXPIRY_MONTH,
      expiryYear: process.env.CARD_EXPIRY_YEAR
    };
 
    //1: REGISTER USER
    console.log('STEP 1: Registering new user...');
    await signupPage.navigate();
    await signupPage.openSignupLogin();
 
    await signupPage.enterSignupDetails(process.env.USER_NAME, uniqueEmail);
 
    await signupPage.fillAccountInformation( process.env.USER_PASSWORD);
    await signupPage.fillAddressInformation(user);
    await signupPage.createAccount();
 
    //await expect(signupPage.accountCreatedText).toBeVisible();
    console.log('Account created successfully.');
 
    await expect(signupPage.continueButton).toBeVisible();
    await signupPage.continueAfterSuccess();
 
    console.log('Verifying home page is displayed...');
    await expect(signupPage.homeBanner).toBeVisible();
    console.log('Home page displayed successfully.');
 
    //STEP 2: SEARCH PRODUCT
    console.log('STEP 2: Searching product...');
    await productPage.clickProducts();
 
    await productPage.searchProduct(
      process.env.SEARCH_PRODUCT
    );
 
    await expect(
      productPage.searchedProductsTitle
    ).toBeVisible();
    console.log('✓ Search results displayed.');
 
    /*
     * STEP 3: OPEN PRODUCT DETAILS AND ADD TO CART
     */
    console.log('STEP 3: Opening first product details...');
    await productPage.openFirstProductDetails();
 
    await expect(
      productPage.addToCartButton
    ).toBeVisible();
    console.log('Product details page opened.');
 
    console.log('Adding product to cart...');
    await productPage.addToCart();
 
    await expect(
      productPage.continueShoppingButton
    ).toBeVisible();
    console.log('Product added to cart successfully.');
 
    await productPage.continueShopping();

 
    /*
     * STEP 4: CHECKOUT AND PAYMENT
     */
    console.log('STEP 4: Proceeding to checkout...');
    console.log('debug: going to home');
    await checkoutPage.goToHome();
    console.log('debug: going to cart');
    await checkoutPage.goToCart();
    console.log('debug: proceeding to checkout');
    await checkoutPage.proceedToCheckout();
    console.log('debug: placing order');
    await checkoutPage.placeOrder();
 
    console.log('Entering payment details...');
    await checkoutPage.fillPaymentDetails(payment);
 
    console.log('Confirming order...');
    await checkoutPage.confirmOrder();
 
    console.log('Verifying order confirmation...');
    await expect(
      checkoutPage.orderConfirmationText
    ).toContainText(
      'Congratulations! Your order has been confirmed!'
    );
    console.log('Order confirmed successfully.');
 
    await expect(
      checkoutPage.continueButton
    ).toBeVisible();
    await checkoutPage.clickContinue();
 
    /*
     * STEP 5: LOGOUT
     */
    console.log('STEP 5: Logging out...');
    await logoutPage.clickLogout();
 
    console.log('Verifying logout...');
    await expect(page).toHaveURL(/login/);
    await expect(logoutPage.signupLoginLink).toBeVisible();
    console.log('Logout successful.');
 
    console.log('//END TO END WORKFLOW COMPLETED SUCCESSFULLY'
    );
  }
);
 