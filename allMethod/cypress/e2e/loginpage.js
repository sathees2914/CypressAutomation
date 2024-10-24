class LoginPage {
  get usernameInput() {
    return "#username";
  }
  get passwordInput() {
    return "#password";
  }
  get submitButton() {
    return "#submit";
  }
  get postTitle() {
    return ".post-title";
  }

  enterUsername(username) {
    cy.get(this.usernameInput).click().type(username);
  }

  enterPassword(password) {
    cy.get(this.passwordInput).click().type(password);
  }

  submit() {
    cy.get(this.submitButton).click();
  }

  verifyLoginSuccess() {
    cy.get(this.postTitle).should("have.text", "Logged In Successfully");
  }
}

export default LoginPage;
