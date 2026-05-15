class LoginPage {
  constructor(page) {
    this.page = page;
 
    // Home page
    this.signupLoginLink = page.getByRole('link', { name: /Signup \/ Login/i});
 
    // Login form
    this.loginEmailInput = page
      .locator('form')
      .filter({ hasText: 'Login' })
      .getByPlaceholder('Email Address');
 
    this.passwordInput = page.getByRole('textbox', {name: 'Password'});
 
    this.loginButton = page.getByRole('button', {name: 'Login'});
 
    // Post-login element
    this.loggedInAsText = page.getByText('Logged in as');
  }
 
  async navigate() {
    await this.page.goto('https://automationexercise.com/');
  }
 
  async openLoginPage() {
    await this.signupLoginLink.click();
  }
 
  async login(email, password) {
    await this.loginEmailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }
}
 
module.exports = LoginPage;