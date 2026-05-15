//-----tc3-----------Get All Brands List API Test----------------

import { test, expect } from '@playwright/test';
import fs from 'fs';

test('Get All Brands List API Test', async ({ request }) => {

  // API URL
  const apiURL = 'https://automationexercise.com/api/brandsList';

  // Send GET Request
  const response = await request.get(apiURL);

  // Print HTTP Status
  console.log('HTTP Status:', response.status());

  // Convert response into JSON
  const responseBody = await response.json();

  // Print Full Response
  console.log('Full Response:', responseBody);

  // Assertions
  expect(response.status()).toBe(200);
  expect(response.ok()).toBeTruthy();

  // Verify brands array exists
  expect(responseBody.brands).toBeDefined();
  expect(Array.isArray(responseBody.brands)).toBeTruthy();
  expect(responseBody.brands.length).toBeGreaterThan(0);

  // First Brand
  const firstBrand = responseBody.brands[0];

  console.log('First Brand:', firstBrand);

  // Assertions on first brand
  expect(firstBrand).toHaveProperty('id');
  expect(firstBrand).toHaveProperty('brand');

  // Print total brands
  console.log('Total Brands:', responseBody.brands.length);

  // Create text content
  const textData = `
================ API TEST RESULT ================
API URL:
${apiURL}
-------------------------------------------------
REQUEST METHOD:
GET
-------------------------------------------------
HTTP STATUS:
${response.status()}
-------------------------------------------------
TOTAL BRANDS:
${responseBody.brands.length}
-------------------------------------------------
FIRST BRAND:
${JSON.stringify(firstBrand, null, 2)}
-------------------------------------------------
FULL RESPONSE:
${JSON.stringify(responseBody, null, 2)}
=================================================
`;
  // Create text file
  fs.writeFileSync('./API_Files/Brands_API_Response.txt', textData);

  console.log('Text file created successfully');

});