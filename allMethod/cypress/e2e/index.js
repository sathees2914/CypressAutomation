Cypress.Commands.add("visitLoginPage", () => {
  cy.visit(`${Cypress.env("BASE_URL")}/practice-test-login/`);
});

Cypress.Commands.add("enterUsername", (username) => {
  cy.get("#username").click().type(username);
});

Cypress.Commands.add("enterPassword", (password) => {
  cy.get("#password").click().type(password);
});

Cypress.Commands.add("submitLogin", () => {
  cy.get("#submit").click();
});

Cypress.Commands.add("verifyLoginSuccess", () => {
  cy.get(".post-title").should("have.text", "Logged In Successfully");
});
