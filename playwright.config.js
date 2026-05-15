require('dotenv').config();

const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({

  testDir: './tests',

  reporter: [
    ['list'],
    [
      'html',
      {
        open: 'never',
        host: '127.0.0.1',
        port: 9500
      }
    ],
    ['allure-playwright']
  ],

  use: {
    headless: false,
    viewport: null,
    launchOptions: {
      slowMo: 500,
      args: ['--start-maximized']
    },
    actionTimeout: 60000,
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure'
  },

  projects: [
    {
      name: 'chromium',
      use: {
        browserName: 'chromium',
        viewport: null
      }
    }
  ],

  timeout: 120 * 1000,
  expect: {
    timeout: 6000
  }

});