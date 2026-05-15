class SignupPage {
  constructor(page) {
    this.page = page;
 
    // Home page
    this.signupLoginLink = page.getByRole('link', { name: /Signup \/ Login/i });
 
    // Signup section
    this.nameInput = page.getByRole('textbox', { name: 'Name' });
    this.signupEmailInput = page
      .locator('form')
      .filter({ hasText: 'Signup' })
      .getByPlaceholder('Email Address');
    this.signupButton = page.getByRole('button', { name: 'Signup' });
 
    // Account information
    this.mrsRadio = page.getByRole('radio', { name: 'Mrs.' });
    this.passwordInput = page.getByRole('textbox', { name: 'Password *' });
    this.dayDropdown = page.locator('#days');
    this.monthDropdown = page.locator('#months');
    this.yearDropdown = page.locator('#years');
 
    // Address information
    this.firstNameInput = page.getByRole('textbox', { name: 'First name *' });
    this.lastNameInput = page.getByRole('textbox', { name: 'Last name *' });
    this.addressInput = page.getByRole('textbox', { name: 'Address * (Street address, P.'});
    this.stateInput = page.getByRole('textbox', { name: 'State *' });
    this.cityInput = page.locator('#city');
    this.zipcodeInput = page.locator('#zipcode');
    this.mobileNumberInput = page.getByRole('textbox', { name: 'Mobile Number *' });
 
    // Actions
    this.createAccountButton = page.getByRole('button', {name: 'Create Account'});
 
    // Success page
    this.accountCreatedText = page.getByText(
      'Account Created! Congratulations! Your new account has been successfully'
    );
    this.continueButton = page.getByRole('link', { name: 'Continue' });
    this.homeBanner = page.getByRole('link', { name: 'Website for automation' });
  }
 
  async navigate() {
    await this.page.goto('https://automationexercise.com/');
  }
 
  async openSignupLogin() {
    await this.signupLoginLink.click();
  }
 
  async enterSignupDetails(name, email) {
    await this.nameInput.fill(name);
    await this.signupEmailInput.fill(email);
    await this.signupButton.click();
  }
 
  async fillAccountInformation(password) {
    await this.mrsRadio.check();
    await this.passwordInput.fill(password);
    await this.dayDropdown.selectOption('1');
    await this.monthDropdown.selectOption('1');
    await this.yearDropdown.selectOption('2003');
  }
 
  async fillAddressInformation(user) {
    await this.firstNameInput.fill(user.firstName);
    await this.lastNameInput.fill(user.lastName);
    await this.addressInput.fill(user.address);
    await this.stateInput.fill(user.state);
    await this.cityInput.fill(user.city);
    await this.zipcodeInput.fill(user.zipcode);
    await this.mobileNumberInput.fill(user.mobileNumber);
  }
 
  async createAccount() {
    await this.createAccountButton.click();
  }
 
  async continueAfterSuccess() {
    await this.continueButton.click();
  }
}
 
module.exports = SignupPage;