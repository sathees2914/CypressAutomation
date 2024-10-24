import { envSmoke, envuserIvalid, envuserPassword } from "../support/loginPage";

class loginPage {
  // visit the url
  visit = () => {
    cy.visit(envSmoke.url);
  };

  //    type the usename in the username textbox
  username = () => {
    cy.get(envSmoke.userCSS).click().type(envSmoke.username);
  };

  //   type the password in the password textbox
  password = () => {
    cy.get("#password").click().type(envSmoke.password);
  };

  //   click the subimt button
  submit = () => {
    cy.get("#submit").click();
  };

  //   check the successfull MSG
  successMSG = () => {
    cy.get(".post-title").should("contain", envSmoke.checkTheSuccessfulMSG);
  };

  smokeTest = () => {
    this.visit();
    this.username();
    this.password();
    this.submit();
    this.successMSG();
  };
}

class invaluedUsername {
  // visit the url
  visit = () => {
    cy.visit(envuserIvalid.url);
  };

  //    type the usename in the username textbox
  username = () => {
    cy.get("#username").click().type(envuserIvalid.username);
  };

  //   type the password in the password textbox
  password = () => {
    cy.get("#password").click().type(envuserIvalid.password);
  };

  //   click the subimt button
  submit = () => {
    cy.get("#submit").click();
  };

  invalidMSG = () => {
    cy.get("#error").should("contain", envuserIvalid.userinvalid);
  };
}

class invalidPassword {
  visit = () => {
    cy.visit(envuserPassword.url);
  };

  username = () => {
    cy.get("#username").click().type(envuserPassword.username);
  };
  password = () => {
    cy.get("#password").click().type(envuserPassword.password);
  };
  submit = () => {
    cy.get("#submit").click();
  };

  invalidMSG = () => {
    cy.get("#error").should("contain", envuserPassword.passwordinvalid);
  };
}

export default { loginPage, invaluedUsername, invalidPassword };
