# Playwright Web Automation Framework

## Overview

This project is an end-to-end web automation framework built using Playwright with JavaScript. The framework follows the Page Object Model (POM) design pattern for better maintainability, scalability, and code reusability.

The project includes:

1. UI Automation Testing
2. API Testing
3. Cross-browser execution
4. Reporting support
   
---

# Tech Stack

* Playwright
* JavaScript
* Node.js
* Git & GitHub
  
---

# Framework Features

* Page Object Model (POM)
* Reusable page classes
* UI and API test coverage
* Cross-browser support
* Easy test execution
* Organized project structure
* Scalable automation framework

---

# Project Structure

```bash
Playwright_Web_Automation/
│
├── .github/workflows/
├── API_Files/              # API response files
├── pages/                  # Page Object Model classes
├── tests/                  # Test cases
├── .gitignore
├── package.json
├── package-lock.json
├── playwright.config.js
└── README.md
```

---

# Automated Test Scenarios

## UI Test Cases

* User Login
* User Logout
* User Registration
* Product Search
* Add Product To Cart
* Payment Module
* End-to-End Workflow Testing

## API Test Cases

* GET Products API
* POST Products API
* GET Brands API
* GET Users API

---

# Installation

Clone the repository:

```bash
git clone https://github.com/Manyasethi07/Playwright_Web_Automation.git
```

Navigate to the project folder:

```bash
cd Playwright_Web_Automation
```

Install dependencies:

```bash
npm install
```

Install Playwright browsers:

```bash
npx playwright install
```

---

# Run Tests

Run all tests:

```bash
npx playwright test
```

Run specific test file:

```bash
npx playwright test tests/TC03-Login.spec.js
```

Run tests on a specific browser:

```bash
npx playwright test --project=chromium
```

---

# Reporting

Generate Playwright HTML Report:

```bash
npx playwright show-report
```

Generate Allure Report:

```bash
allure generate allure-results --clean
allure open
```

---

# Best Practices Used

* Page Object Model (POM)
* Reusable locators and methods
* Clean folder structure
* Environment variable support
* Git ignore for generated files
* Modular and scalable framework design
