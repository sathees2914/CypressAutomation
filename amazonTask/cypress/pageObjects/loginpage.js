class LoginPage {
    // Locators
    loginicon='[class="nav-line-2 "]';
    emailInput = '#ap_email';
    passwordInput = '#ap_password';
    continueButton = '.a-button-input';
    signInButton = '#signInSubmit';
  
    // Methods to interact with elements
    NavigateSearchBox() {
      cy.get(this.loginicon).click();
    }
    enterEmail(username) {
      cy.get(this.emailInput).type(username);
    }
  
    clickContinue() {
      cy.get(this.continueButton).click();
    }
  
    enterPassword(password) {
      cy.get(this.passwordInput).type(password);
    }
  
    clickSignIn() {
      cy.get(this.signInButton).click();
    }
   
  }
  
  // Export an instance of LoginPage to reuse in tests
  export const loginPage = new LoginPage();
  