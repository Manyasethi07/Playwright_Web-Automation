class ProductPage {
  constructor(page) {
    this.page = page;
 
    // Home page
    this.productsLink = page.getByRole('link', { name: /Products/i });
 
    // Search section
    this.searchTextbox = page.getByRole('textbox', { name: 'Search Product'});
    this.searchButton = page.locator('#submit_search');
 
    // Search results
    this.searchedProductsTitle = page.getByText('Searched Products');
 
    // Product details (dynamic)
    // Clicks the first visible "View Product" link from search results
    this.firstViewProductLink = page.locator('.choose a').first();
 
    // Product details page
    this.addToCartButton = page.getByRole('button', {
      name: /Add to cart/i
    });
 
    // Modal
    this.continueShoppingButton = page.getByRole('button', { name: 'Continue Shopping'});
  }
 
  async navigate() {
    await this.page.goto('https://automationexercise.com/');
  }
 
  async clickProducts() {
    await this.productsLink.click();
  }
 
  async searchProduct(productName) {
    await this.searchTextbox.fill(productName);
    await this.searchButton.click();
  }
 
  async openFirstProductDetails() {
    // Dynamic locator: works for any product ID
    await this.firstViewProductLink.click();
  }
 
  async addToCart() {
    await this.addToCartButton.click();
  }
 
  async continueShopping() {
    await this.continueShoppingButton.click();
  }
}
 
module.exports = ProductPage;