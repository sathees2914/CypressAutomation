// describe("template spec", () => {
//   it("passes", () => {
//     cy.visit("https://practicetestautomation.com/practice-test-login/");
//     cy.get("#username").click();
//     cy.get("#username").type("student");
//     cy.get("#password").click();
//     cy.get("#password").type("Password123");
//     cy.get("#submit").click();
//     cy.get(".post-title").should("have.text", "Logged In Successfully");
//   });
// });

import { Loginpage } from "../support/login";

describe("loginPage", () => {
  const loginPage = new Loginpage();

  it("login succcessfull", () => {
    loginPage.login(Cypress.env("username"), Cypress.env("password"));
    loginPage.verifySuccessMessage();
  });
});
