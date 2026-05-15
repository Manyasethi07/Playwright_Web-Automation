//---tc1--------------Get All Products List API Test-----------------

import { test, expect } from '@playwright/test';
import fs from 'fs';

test('API Testing - Get All Products List', async ({ request }) => {

  // API URL
  const apiURL = 'https://automationexercise.com/api/productsList';

  // Send GET request
  const response = await request.get(apiURL);

  // Status Code Assertion
  expect(response.status()).toBe(200);

  // Convert response into JSON
  const responseBody = await response.json();

  // Console Prints
  console.log('FULL RESPONSE');
  console.log(responseBody);

  console.log('TOTAL PRODUCTS');
  console.log(responseBody.products.length);

  console.log('FIRST PRODUCT');
  console.log(responseBody.products[0]);

  // Assertions
  expect(response.ok()).toBeTruthy();

  expect(responseBody.products).toBeDefined();

  expect(Array.isArray(responseBody.products)).toBeTruthy();

  expect(responseBody.products.length).toBeGreaterThan(0);

  // First Product Assertions
  const firstProduct = responseBody.products[0];

  expect(firstProduct).toHaveProperty('id');
  expect(firstProduct).toHaveProperty('name');
  expect(firstProduct).toHaveProperty('price');
  expect(firstProduct).toHaveProperty('brand');
  expect(firstProduct).toHaveProperty('category');

  // Exact Assertions
  expect(firstProduct.name).toBe('Blue Top');
  expect(firstProduct.brand).toBe('Polo');

  // Create text content
  const textData = `
================ API TEST RESULT ================
API URL:
${apiURL}
-------------------------------------------------
STATUS CODE:
${response.status()}
-------------------------------------------------
TOTAL PRODUCTS:
${responseBody.products.length}
-------------------------------------------------
FIRST PRODUCT:
${JSON.stringify(firstProduct, null, 2)}
-------------------------------------------------
FULL RESPONSE:
${JSON.stringify(responseBody, null, 2)}
=================================================
`;
  // Write data into text file
  fs.writeFileSync('./API_Files/API_Response.txt', textData);

  console.log('Text file created successfully');

});
