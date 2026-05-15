//---------tc4--------GET User Account Detail By Email API Test----------------

import { test, expect } from '@playwright/test';
import fs from 'fs';

test('GET User Account Detail By Email API Test', async ({ request }) => {

  // API URL
  const apiURL =
    'https://automationexercise.com/api/getUserDetailByEmail';

  // Test Email
  const email = 'automationtester099@gmail.com';

  // Send GET Request with query parameter
  const response = await request.get(apiURL, {
    params: {
      email: email
    }
  });

  // Print HTTP Status
  console.log('HTTP Status:', response.status());

  // Convert response to JSON
  const responseBody = await response.json();

  // Print Full Response
  console.log('Full Response:', responseBody);

  // Assertions
  expect(response.status()).toBe(200);

  expect(response.ok()).toBeTruthy();

  // Verify response properties
  expect(responseBody).toHaveProperty('responseCode');

  // Verify response code
  expect(responseBody.responseCode).toBe(200);

  // Verify user object exists
  expect(responseBody.user).toBeDefined();

  // Store user details
  const user = responseBody.user;

  // Print User Details
  console.log('User Details:', user);

  // Assertions on user fields
  expect(user).toHaveProperty('name');
  expect(user).toHaveProperty('email');
  expect(user).toHaveProperty('title');

  // Verify email matches
  expect(user.email).toBe(email);

  // Create text content
  const textData = `
================ API TEST RESULT ================
API URL:
${apiURL}
-------------------------------------------------
REQUEST METHOD:
GET
-------------------------------------------------
REQUEST PARAMETER:
email = ${email}
-------------------------------------------------
HTTP STATUS:
${response.status()}
-------------------------------------------------
API RESPONSE CODE:
${responseBody.responseCode}
-------------------------------------------------
USER DETAILS:
${JSON.stringify(user, null, 2)}
-------------------------------------------------
FULL RESPONSE:
${JSON.stringify(responseBody, null, 2)}
=================================================
`;
  // Create text file
 fs.writeFileSync('./API_Files/User_Detail_API_Response.txt', textData);

  console.log('Text file created successfully');
});