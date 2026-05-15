//---tc2-----------------POST To All Products List API Test----------------

import { test, expect } from '@playwright/test';
import fs from 'fs';

test('POST To All Products List API Test', async ({ request }) => {

  const apiURL = 'https://automationexercise.com/api/productsList';

  // POST Request
  const response = await request.post(apiURL);

  // Actual HTTP Status
  console.log('HTTP Status Code:', response.status());

  // JSON Response
  const responseBody = await response.json();
  console.log('Response Body:', responseBody);

  // Correct Assertions
  expect(response.status()).toBe(200);

  expect(responseBody.responseCode).toBe(405);

  expect(responseBody.message)
    .toContain('This request method is not supported');

  // Save into text file
  const textData = `
============= API TEST RESULT =============
API URL:
${apiURL}
-------------------------------------------
HTTP STATUS:
${response.status()}
-------------------------------------------
API RESPONSE CODE:
${responseBody.responseCode}
-------------------------------------------
MESSAGE:
${responseBody.message}
===========================================
`;

fs.writeFileSync('./API_Files/POST_API_Response.txt', textData);

  console.log('Text file created successfully');

});