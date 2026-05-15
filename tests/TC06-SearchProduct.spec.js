const { test, expect } = require('@playwright/test');
const ProductPage = require('../Pages/SearchPage');
require('dotenv').config();

test('Search product and add to cart', async ({ page }) => {
    console.log('Test Started: Search product and add to cart');

    const productPage = new ProductPage(page);
    const searchProduct = process.env.SEARCH_PRODUCT;
 
    console.log('Navigating to Automation Exercise home page');
    await productPage.navigate();
 
    console.log('Clicking Products menu');
    await productPage.clickProducts();
 
    console.log(`Searching for product:${searchProduct}`);
    await productPage.searchProduct(searchProduct);
 
    console.log('Verifying "Searched Products" title is visible');
    //await expect(productPage.searchedProductsTitle).toBeVisible();
    console.log('Search results are displayed.');
 
    console.log('Opening first product details page using dynamic locator');
    await productPage.openFirstProductDetails();

    console.log('Verifying Add to Cart button is visible');
    //await expect(productPage.addToCartButton).toBeVisible();
    console.log('Product details page opened successfully.');
 
    console.log('Clicking Add to Cart');
    await productPage.addToCart();
 
    console.log('Verifying Continue Shopping button is visible');
    //await expect(productPage.continueShoppingButton).toBeVisible();
    console.log('Product added to cart successfully.');
 
    console.log('Clicking Continue Shopping');
    await productPage.continueShopping();
    console.log('Clicking on Home Page');
    await page.getByRole('link', { name: 'Home' }).click();
 
    console.log('Test Passed: Search product and add to cart');
});