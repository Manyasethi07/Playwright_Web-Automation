class LogoutPage {
  constructor(page) {
    this.page = page;
 
    // Logout link
    this.logoutLink = page.getByRole('link', { name: 'Logout' });
 
    // Login page elements after logout
    this.signupLoginLink = page.getByRole('link', {name: /Signup \/ Login/i });
  }
 
  async clickLogout() {
    await this.logoutLink.click();
  }
}
 
module.exports = LogoutPage;