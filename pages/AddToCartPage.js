class CheckoutPage {
  constructor(page) {
    this.page = page;
 
    // Navigation
    this.homeLink = page.locator('a[href="/"]').first();
    this.cartLink = page.locator('a[href="/view_cart"]').first();

    // Checkout
    this.proceedToCheckoutButton = page.locator('a.check_out');
    this.placeOrderLink = page.locator('a[href="/payment"]');

    // Payment fields (using data-qa attributes — confirmed from live page inspection)
    this.nameOnCardInput = page.locator('[data-qa="name-on-card"]');
    this.cardNumberInput = page.locator('[data-qa="card-number"]');
    this.cvcInput = page.locator('[data-qa="cvc"]');
    this.expiryMonthInput = page.locator('[data-qa="expiry-month"]');
    this.expiryYearInput = page.locator('[data-qa="expiry-year"]');
 
    // Actions
    this.payAndConfirmButton = page.locator('[data-qa="pay-button"]');
 
    // Success elements
    this.orderConfirmationText = page.locator('p').filter({hasText: 'Congratulations! Your order has been confirmed!'});
    this.continueButton = page.getByRole('link', { name: 'Continue' });
  }


  async goToHome() {
    await this.homeLink.click();
  }
 
  async goToCart() {
    await this.cartLink.click();
  }
 
  async proceedToCheckout() {
    await this.proceedToCheckoutButton.waitFor({ state: 'visible' });
    await this.proceedToCheckoutButton.click();
  }
 
  async placeOrder() {
    await this.placeOrderLink.waitFor({ state: 'visible' });
    await this.placeOrderLink.click();
  }
 
  async fillPaymentDetails(payment) {
    // Wait for payment page to fully load
    await this.page.waitForURL('**/payment', { timeout: 15000 });
    await this.nameOnCardInput.waitFor({ state: 'visible' });
    await this.nameOnCardInput.fill(payment.cardName);
    await this.cardNumberInput.fill(payment.cardNumber);
    await this.cvcInput.fill(payment.cvc);
    await this.expiryMonthInput.fill(payment.expiryMonth);
    await this.expiryYearInput.fill(payment.expiryYear);
  }
 
  async confirmOrder() {
    await this.payAndConfirmButton.waitFor({ state: 'visible' });
    await this.payAndConfirmButton.click();
  }
 
  async clickContinue() {
    await this.continueButton.waitFor({ state: 'visible' });
    await this.continueButton.click();
  }
}
 
module.exports = CheckoutPage;
 
