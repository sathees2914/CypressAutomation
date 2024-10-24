export class LoginPage {
  textUsername = "#username";
  textPassword = "#password";
  submitButton = "#submit";

  visit() {
    cy.visit("https://practicetestautomation.com/practice-test-login/");
  }

  getUsernameInput() {
    return cy.get(this.textUsername);
  }

  getPasswordInput() {
    return cy.get(this.textPassword);
  }

  getLoginButton() {
    return cy.get(this.submitButton);
  }

  login(username, password) {
    this.getUsernameInput().type(username);
    this.getPasswordInput().type(password);
    this.getLoginButton().click();
  }
}
