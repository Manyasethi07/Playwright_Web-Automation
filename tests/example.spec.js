// import { test, expect } from '@playwright/test';

// test('test', async ({ page }) => {
//   await page.goto('https://automationexercise.com/');
//   await page.getByRole('link', { name: ' Products' }).click();
//   await page.getByRole('textbox', { name: 'Search Product' }).click();
//   await page.getByRole('textbox', { name: 'Search Product' }).fill('shirt');
//   await page.locator('#submit_search').click();
//   //await page.locator('.product-overlay').first().click();
//   await page.locator('a[href="/product_details/2"]').click();
//   await page.getByRole('link', { name: ' View Product' }).first().click();
//   //await page.locator('iframe[name="aswift_3"]').contentFrame().getByRole('button', { name: 'Close ad' }).click();
//   // await page.locator('#quantity').click();
//   // await page.locator('#quantity').fill('2');
//   //await page.getByRole('button', { name: 'Add to cart' }).click();
//   //await page.locator([type = 'button']).click();
//   //await page.locator('.btn.btn-default.cart').click();
//   //await page.locator('text=Add to cart').click();
//   await page.getByRole('button', { name: /Add to cart/i }).click();

//   await page.getByRole('button', { name: 'Continue Shopping' }).click();
// });


//search product

// import { test, expect } from '@playwright/test';

// test('test', async ({ page }) => {

//   await page.goto('https://automationexercise.com/');

//   await page.getByRole('link', { name: /Products/i }).click();

//   await page.getByRole('textbox', { name: 'Search Product' }).fill('shirt');

//   await page.locator('#submit_search').click();

//   // Open product details page
//   await page.locator('a[href="/product_details/2"]').click();

//   // Add to cart
//   await page.getByRole('button', { name: /Add to cart/i }).click();

//   await page.getByRole('button', { name: 'Continue Shopping' }).click();
//await page.getByRole('link', { name: 'Home' }).click();

// });

// import { test, expect } from '@playwright/test';
// test('test', async ({ page }) => {
//   await page.goto('https://automationexercise.com/');
//   await page.getByRole('link', { name: 'Signup / Login' }).click();
//   await page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address').click();
//   await page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address').fill('automationtester099@gmail.com');
//   await page.getByRole('textbox', { name: 'Password' }).click();
//   await page.getByRole('textbox', { name: 'Password' }).fill('abc@123');
//   await page.getByRole('button', { name: 'Login' }).click();
// });

// import { test, expect } from '@playwright/test';

// test('test', async ({ page }) => {
//   await page.goto('https://automationexercise.com/');
//   await page.getByRole('link', { name: ' Signup / Login' }).click();
//   await page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address').click();
//   await page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address').fill('automationtester099@gmail.com');
//   await page.getByRole('textbox', { name: 'Password' }).click();
//   await page.getByRole('textbox', { name: 'Password' }).fill('abc@123');
//   await page.getByRole('button', { name: 'Login' }).click();
  // await page.getByRole('link', { name: ' Products' }).click();
  // await page.getByRole('textbox', { name: 'Search Product' }).click();
  // await page.getByRole('textbox', { name: 'Search Product' }).fill('shirt');
  // await page.locator('#submit_search').click();
  // await page.getByRole('link', { name: ' View Product' }).first().click();
  // await page.getByRole('button', { name: ' Add to cart' }).click();
  // await page.getByRole('button', { name: 'Continue Shopping' }).click();
//   await page.getByRole('link', { name: 'Home' }).click();
//   await page.getByRole('link', { name: 'Cart' }).click();
//   await page.getByText('Proceed To Checkout').click();
//   await page.getByRole('link', { name: 'Place Order' }).click();
//   await page.locator('input[name="name_on_card"]').click();
//   await page.locator('input[name="name_on_card"]').fill('xyz');
//   await page.locator('input[name="card_number"]').click();
//   await page.locator('input[name="card_number"]').fill('123456789');
//   await page.getByRole('textbox', { name: 'ex.' }).click();
//   await page.getByRole('textbox', { name: 'ex.' }).fill('123');
//   await page.getByRole('textbox', { name: 'MM' }).click();
//   await page.getByRole('textbox', { name: 'MM' }).fill('11');
//   await page.getByRole('textbox', { name: 'YYYY' }).click();
//   await page.getByRole('textbox', { name: 'YYYY' }).fill('2090');
//   await page.getByRole('button', { name: 'Pay and Confirm Order' }).click();
//   const text = await page.locator('p').textContent();

// console.log(text);

// await expect(page.locator('p'))
//   .toContainText('Congratulations! Your order has been confirmed!');
//   await page.getByRole('link', { name: 'Continue' }).click();
// });

// import { test, expect } from '@playwright/test';

// test('Get All Products List API Test', async ({ request }) => {

//   const response = await request.get(
//     'https://automationexercise.com/api/productsList'
//   );

//   // Status Code Assertion
//   expect(response.status()).toBe(200);

//   // Response Body
//   const responseBody = await response.json();

//   console.log('Full Response:', responseBody);

//   // Products array validation
//   expect(responseBody.products).toBeDefined();

//   expect(Array.isArray(responseBody.products)).toBeTruthy();

//   // Total products validation
//   expect(responseBody.products.length).toBeGreaterThan(0);

//   console.log('Total Products:', responseBody.products.length);

//   // First Product
//   const firstProduct = responseBody.products[0];

//   console.log('First Product:', firstProduct);

//   // Field Assertions
//   expect(firstProduct).toHaveProperty('id');
//   expect(firstProduct).toHaveProperty('name');
//   expect(firstProduct).toHaveProperty('price');
//   expect(firstProduct).toHaveProperty('brand');
//   expect(firstProduct).toHaveProperty('category');

//   // Exact value assertions
//   expect(firstProduct.name).toBe('Blue Top');
//   expect(firstProduct.brand).toBe('Polo');

//   // Response should be OK
//   expect(response.ok()).toBeTruthy();

// });

//delete 
// import { test, expect } from '@playwright/test';

// test('test', async ({ page }) => {
//   await page.goto('https://automationexercise.com/');
//   await page.getByRole('link', { name: ' Signup / Login' }).click();
//   await page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address').click();
//   await page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address').fill('automationtester099@gmail.com');
//   await page.getByRole('textbox', { name: 'Password' }).click();
//   await page.getByRole('textbox', { name: 'Password' }).fill('abc@123');
//   await page.getByRole('button', { name: 'Login' }).click();
//   await page.getByRole('link', { name: ' Logout' }).click();
//   await expect(page.getByRole('link', { name: ' Signup / Login' })).toBeVisible();
// });

// ---tc1--------------Get All Products List API Test-----------------

// import { test, expect } from '@playwright/test';
// import fs from 'fs';

// test('API Testing - Get All Products List', async ({ request }) => {

//   // API URL
//   const apiURL = 'https://automationexercise.com/api/productsList';

//   // Send GET request
//   const response = await request.get(apiURL);

//   // Status Code Assertion
//   expect(response.status()).toBe(200);

//   // Convert response into JSON
//   const responseBody = await response.json();

//   // Console Prints
//   console.log('=========== FULL RESPONSE ===========');
//   console.log(responseBody);

//   console.log('=========== TOTAL PRODUCTS ===========');
//   console.log(responseBody.products.length);

//   console.log('=========== FIRST PRODUCT ===========');
//   console.log(responseBody.products[0]);

//   // Assertions
//   expect(response.ok()).toBeTruthy();

//   expect(responseBody.products).toBeDefined();

//   expect(Array.isArray(responseBody.products)).toBeTruthy();

//   expect(responseBody.products.length).toBeGreaterThan(0);

//   // First Product Assertions
//   const firstProduct = responseBody.products[0];

//   expect(firstProduct).toHaveProperty('id');
//   expect(firstProduct).toHaveProperty('name');
//   expect(firstProduct).toHaveProperty('price');
//   expect(firstProduct).toHaveProperty('brand');
//   expect(firstProduct).toHaveProperty('category');

//   // Exact Assertions
//   expect(firstProduct.name).toBe('Blue Top');
//   expect(firstProduct.brand).toBe('Polo');

//   // Create text content
//   const textData = `
// ================ API TEST RESULT ================

// API URL:
// ${apiURL}

// -------------------------------------------------

// STATUS CODE:
// ${response.status()}

// -------------------------------------------------

// TOTAL PRODUCTS:
// ${responseBody.products.length}

// -------------------------------------------------

// FIRST PRODUCT:
// ${JSON.stringify(firstProduct, null, 2)}

// -------------------------------------------------

// FULL RESPONSE:
// ${JSON.stringify(responseBody, null, 2)}

// =================================================
// `;

//   // Write data into text file
//   fs.writeFileSync('./API_Files/API_Response.txt', textData);

//   console.log('Text file created successfully');

// });

// ---tc2-----------------POST To All Products List API Test----------------

// import { test, expect } from '@playwright/test';
// import fs from 'fs';

// test('POST To All Products List API Test', async ({ request }) => {

//   const apiURL = 'https://automationexercise.com/api/productsList';

//   // POST Request
//   const response = await request.post(apiURL);

//   // Actual HTTP Status
//   console.log('HTTP Status Code:', response.status());

//   // JSON Response
//   const responseBody = await response.json();

//   console.log('Response Body:', responseBody);

//   // Correct Assertions
//   expect(response.status()).toBe(200);

//   expect(responseBody.responseCode).toBe(405);

//   expect(responseBody.message)
//     .toContain('This request method is not supported');

//   // Save into text file
//   const textData = `
// ============= API TEST RESULT =============

// API URL:
// ${apiURL}

// -------------------------------------------

// HTTP STATUS:
// ${response.status()}

// -------------------------------------------

// API RESPONSE CODE:
// ${responseBody.responseCode}

// -------------------------------------------

// MESSAGE:
// ${responseBody.message}

// ===========================================
// `;

// fs.writeFileSync('./API_Files/POST_API_Response.txt', textData);

//   console.log('Text file created successfully');

// });

// -----tc3-----------Get All Brands List API Test----------------

// import { test, expect } from '@playwright/test';
// import fs from 'fs';

// test('Get All Brands List API Test', async ({ request }) => {

//   // API URL
//   const apiURL = 'https://automationexercise.com/api/brandsList';

//   // Send GET Request
//   const response = await request.get(apiURL);

//   // Print HTTP Status
//   console.log('HTTP Status:', response.status());

//   // Convert response into JSON
//   const responseBody = await response.json();

//   // Print Full Response
//   console.log('Full Response:', responseBody);

//   // Assertions
//   expect(response.status()).toBe(200);

//   expect(response.ok()).toBeTruthy();

//   // Verify brands array exists
//   expect(responseBody.brands).toBeDefined();

//   // Verify brands is array
//   expect(Array.isArray(responseBody.brands)).toBeTruthy();

//   // Verify brands count > 0
//   expect(responseBody.brands.length).toBeGreaterThan(0);

//   // First Brand
//   const firstBrand = responseBody.brands[0];

//   console.log('First Brand:', firstBrand);

//   // Assertions on first brand
//   expect(firstBrand).toHaveProperty('id');
//   expect(firstBrand).toHaveProperty('brand');

//   // Print total brands
//   console.log('Total Brands:', responseBody.brands.length);

//   // Create text content
//   const textData = `
// ================ API TEST RESULT ================

// API URL:
// ${apiURL}

// -------------------------------------------------

// REQUEST METHOD:
// GET

// -------------------------------------------------

// HTTP STATUS:
// ${response.status()}

// -------------------------------------------------

// TOTAL BRANDS:
// ${responseBody.brands.length}

// -------------------------------------------------

// FIRST BRAND:
// ${JSON.stringify(firstBrand, null, 2)}

// -------------------------------------------------

// FULL RESPONSE:
// ${JSON.stringify(responseBody, null, 2)}

// =================================================
// `;

//   // Create text file
//   fs.writeFileSync('./API_Files/Brands_API_Response.txt', textData);

//   console.log('Text file created successfully');

// });

//---------tc4--------GET User Account Detail By Email API Test----------------

// import { test, expect } from '@playwright/test';
// import fs from 'fs';

// test('GET User Account Detail By Email API Test', async ({ request }) => {

//   // API URL
//   const apiURL =
//     'https://automationexercise.com/api/getUserDetailByEmail';

//   // Test Email
//   const email = 'automationtester099@gmail.com';

//   // Send GET Request with query parameter
//   const response = await request.get(apiURL, {
//     params: {
//       email: email
//     }
//   });

//   // Print HTTP Status
//   console.log('HTTP Status:', response.status());

//   // Convert response to JSON
//   const responseBody = await response.json();

//   // Print Full Response
//   console.log('Full Response:', responseBody);

//   // Assertions
//   expect(response.status()).toBe(200);

//   expect(response.ok()).toBeTruthy();

//   // Verify response properties
//   expect(responseBody).toHaveProperty('responseCode');

//   // Verify response code
//   expect(responseBody.responseCode).toBe(200);

//   // Verify user object exists
//   expect(responseBody.user).toBeDefined();

//   // Store user details
//   const user = responseBody.user;

//   // Print User Details
//   console.log('User Details:', user);

//   // Assertions on user fields
//   expect(user).toHaveProperty('name');
//   expect(user).toHaveProperty('email');
//   expect(user).toHaveProperty('title');

//   // Verify email matches
//   expect(user.email).toBe(email);

//   // Create text content
//   const textData = `
// ================ API TEST RESULT ================

// API URL:
// ${apiURL}

// -------------------------------------------------

// REQUEST METHOD:
// GET

// -------------------------------------------------

// REQUEST PARAMETER:
// email = ${email}

// -------------------------------------------------

// HTTP STATUS:
// ${response.status()}

// -------------------------------------------------

// API RESPONSE CODE:
// ${responseBody.responseCode}

// -------------------------------------------------

// USER DETAILS:
// ${JSON.stringify(user, null, 2)}

// -------------------------------------------------

// FULL RESPONSE:
// ${JSON.stringify(responseBody, null, 2)}

// =================================================
// `;

//   // Create text file
//  fs.writeFileSync('./API_Files/User_Detail_API_Response.txt', textData);

//   console.log('Text file created successfully');

// });