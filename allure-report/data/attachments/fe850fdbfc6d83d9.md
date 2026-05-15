# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: TC02-E2E.spec.js >> End-to-End Workflow: Register -> Search -> Add To Cart -> Checkout -> Logout
- Location: tests\TC02-E2E.spec.js:10:6

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByRole('button', { name: 'Continue Shopping' })
Expected: visible
Timeout: 6000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 6000ms
  - waiting for getByRole('button', { name: 'Continue Shopping' })

```

```yaml
- banner:
  - link "Website for automation practice":
    - /url: /
    - img "Website for automation practice"
  - list:
    - listitem:
      - link " Home":
        - /url: /
    - listitem:
      - link " Products":
        - /url: /products
    - listitem:
      - link " Cart":
        - /url: /view_cart
    - listitem:
      - link " Logout":
        - /url: /logout
    - listitem:
      - link " Delete Account":
        - /url: /delete_account
    - listitem:
      - link " Test Cases":
        - /url: /test_cases
    - listitem:
      - link " API Testing":
        - /url: /api_list
    - listitem:
      - link " Video Tutorials":
        - /url: https://www.youtube.com/c/AutomationExercise
    - listitem:
      - link " Contact us":
        - /url: /contact_us
    - listitem:  Logged in as Testing
- heading "Category" [level=2]
- heading " Women" [level=4]:
  - link " Women":
    - /url: "#Women"
- heading " Men" [level=4]:
  - link " Men":
    - /url: "#Men"
- heading " Kids" [level=4]:
  - link " Kids":
    - /url: "#Kids"
- heading "Brands" [level=2]
- list:
  - listitem:
    - link "(6) Polo":
      - /url: /brand_products/Polo
  - listitem:
    - link "(5) H&M":
      - /url: /brand_products/H&M
  - listitem:
    - link "(5) Madame":
      - /url: /brand_products/Madame
  - listitem:
    - link "(3) Mast & Harbour":
      - /url: /brand_products/Mast & Harbour
  - listitem:
    - link "(4) Babyhug":
      - /url: /brand_products/Babyhug
  - listitem:
    - link "(3) Allen Solly Junior":
      - /url: /brand_products/Allen Solly Junior
  - listitem:
    - link "(3) Kookie Kids":
      - /url: /brand_products/Kookie Kids
  - listitem:
    - link "(5) Biba":
      - /url: /brand_products/Biba
- img "ecommerce website products"
- img "ecommerce website products"
- heading "Blue Top" [level=2]
- paragraph: "Category: Women > Tops"
- img "ecommerce website products"
- text: "Rs. 500 Quantity:"
- spinbutton: "1"
- button " Add to cart"
- paragraph: "Availability: In Stock"
- paragraph: "Condition: New"
- paragraph: "Brand: Polo"
- list:
  - listitem:
    - link "Write Your Review":
      - /url: "#reviews"
- textbox "Your Name"
- textbox "Email Address"
- textbox "Add Review Here!"
- button "Submit"
- insertion:
  - iframe
- contentinfo:
  - heading "Subscription" [level=2]
  - textbox "Your email address"
  - button ""
  - paragraph: Get the most recent updates from our site and be updated your self...
  - paragraph: Copyright © 2021 All rights reserved
```

# Test source

```ts
  5   | const CheckoutPage = require('../Pages/AddToCartPage');
  6   | const LogoutPage = require('../Pages/LogoutPage');
  7   |  
  8   | require('dotenv').config();
  9   |  
  10  | test.only('End-to-End Workflow: Register -> Search -> Add To Cart -> Checkout -> Logout',
  11  |   async ({ page }) => {
  12  |     
  13  |     console.log('========== END TO END WORKFLOW STARTED ==========');
  14  |  
  15  |     // Initialize page objects
  16  |     const signupPage = new SignupPage(page);
  17  |     const productPage = new ProductPage(page);
  18  |     const checkoutPage = new CheckoutPage(page);
  19  |     const logoutPage = new LogoutPage(page);
  20  |  
  21  |     // Generate unique email for each run
  22  |     const uniqueEmail = `tester${Date.now()}@gmail.com`;
  23  |     console.log(`Generated unique email: ${uniqueEmail}`);
  24  |  
  25  |     // User data from .env
  26  |     const user = {
  27  |       firstName: process.env.FIRST_NAME,
  28  |       lastName: process.env.LAST_NAME,
  29  |       address: process.env.ADDRESS,
  30  |       state: process.env.STATE,
  31  |       city: process.env.CITY,
  32  |       zipcode: process.env.ZIPCODE,
  33  |       mobileNumber: process.env.MOBILE_NUMBER
  34  |     };
  35  |  
  36  |     // Payment data from .env
  37  |     const payment = {
  38  |       cardName: process.env.CARD_NAME,
  39  |       cardNumber: process.env.CARD_NUMBER,
  40  |       cvc: process.env.CARD_CVC,
  41  |       expiryMonth: process.env.CARD_EXPIRY_MONTH,
  42  |       expiryYear: process.env.CARD_EXPIRY_YEAR
  43  |     };
  44  |  
  45  |     /*
  46  |      * STEP 1: REGISTER USER
  47  |      */
  48  |     console.log('STEP 1: Registering new user...');
  49  |     await signupPage.navigate();
  50  |     await signupPage.openSignupLogin();
  51  |  
  52  |     await signupPage.enterSignupDetails(
  53  |       process.env.USER_NAME,
  54  |       uniqueEmail
  55  |     );
  56  |  
  57  |     await signupPage.fillAccountInformation(
  58  |       process.env.USER_PASSWORD
  59  |     );
  60  |  
  61  |     await signupPage.fillAddressInformation(user);
  62  |     await signupPage.createAccount();
  63  |  
  64  |     //await expect(signupPage.accountCreatedText).toBeVisible();
  65  |     console.log('✓ Account created successfully.');
  66  |  
  67  |     await expect(signupPage.continueButton).toBeVisible();
  68  |     await signupPage.continueAfterSuccess();
  69  |  
  70  |     console.log('Verifying home page is displayed...');
  71  |     await expect(signupPage.homeBanner).toBeVisible();
  72  |     console.log('✓ Home page displayed successfully.');
  73  |  
  74  |     /*
  75  |      * STEP 2: SEARCH PRODUCT
  76  |      */
  77  |     console.log('STEP 2: Searching product...');
  78  |     await productPage.clickProducts();
  79  |  
  80  |     await productPage.searchProduct(
  81  |       process.env.SEARCH_PRODUCT
  82  |     );
  83  |  
  84  |     await expect(
  85  |       productPage.searchedProductsTitle
  86  |     ).toBeVisible();
  87  |     console.log('✓ Search results displayed.');
  88  |  
  89  |     /*
  90  |      * STEP 3: OPEN PRODUCT DETAILS AND ADD TO CART
  91  |      */
  92  |     console.log('STEP 3: Opening first product details...');
  93  |     await productPage.openFirstProductDetails();
  94  |  
  95  |     await expect(
  96  |       productPage.addToCartButton
  97  |     ).toBeVisible();
  98  |     console.log('✓ Product details page opened.');
  99  |  
  100 |     console.log('Adding product to cart...');
  101 |     await productPage.addToCart();
  102 |  
  103 |     await expect(
  104 |       productPage.continueShoppingButton
> 105 |     ).toBeVisible();
      |       ^ Error: expect(locator).toBeVisible() failed
  106 |     console.log('✓ Product added to cart successfully.');
  107 |  
  108 |     await productPage.continueShopping();
  109 | 
  110 |  
  111 |     /*
  112 |      * STEP 4: CHECKOUT AND PAYMENT
  113 |      */
  114 |     console.log('STEP 4: Proceeding to checkout...');
  115 |     console.log('debug: going to home');
  116 |     await checkoutPage.goToHome();
  117 |     console.log('debug: going to cart');
  118 |     await checkoutPage.goToCart();
  119 |     console.log('debug: proceeding to checkout');
  120 |     await checkoutPage.proceedToCheckout();
  121 |     console.log('debug: placing order');
  122 |     await checkoutPage.placeOrder();
  123 |  
  124 |     console.log('Entering payment details...');
  125 |     await checkoutPage.fillPaymentDetails(payment);
  126 |  
  127 |     console.log('Confirming order...');
  128 |     await checkoutPage.confirmOrder();
  129 |  
  130 |     console.log('Verifying order confirmation...');
  131 |     await expect(
  132 |       checkoutPage.orderConfirmationText
  133 |     ).toContainText(
  134 |       'Congratulations! Your order has been confirmed!'
  135 |     );
  136 |     console.log('✓ Order confirmed successfully.');
  137 |  
  138 |     await expect(
  139 |       checkoutPage.continueButton
  140 |     ).toBeVisible();
  141 |     await checkoutPage.clickContinue();
  142 |  
  143 |     /*
  144 |      * STEP 5: LOGOUT
  145 |      */
  146 |     console.log('STEP 5: Logging out...');
  147 |     await logoutPage.clickLogout();
  148 |  
  149 |     console.log('Verifying logout...');
  150 |     await expect(page).toHaveURL(/login/);
  151 |     await expect(logoutPage.signupLoginLink).toBeVisible();
  152 |     console.log('✓ Logout successful.');
  153 |  
  154 |     console.log('//END TO END WORKFLOW COMPLETED SUCCESSFULLY'
  155 |     );
  156 |   }
  157 | );
  158 |  
```