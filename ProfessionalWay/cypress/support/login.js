export class Loginpage {
  get Url() {
    return Cypress.env("baseUrl") + "/practice-test-login/";
  }
  get usernameInput() {
    return "#username";
  }

  get passwordInput() {
    return "#password";
  }

  get submitButton() {
    return "#submit";
  }

  get successMessage() {
    return ".post-title";
  }

  login(username, password) {
    cy.visit(this.Url);
    cy.get(this.usernameInput).click().type(username);
    cy.get(this.passwordInput).click().type(password);
    cy.get(this.submitButton).click();
  }

  verifySuccessMessage() {
    cy.get(this.successMessage).should("have.text", "Logged In Successfully");
  }
}
