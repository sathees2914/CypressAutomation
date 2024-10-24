// locator
// --------

// css selector
// x-Path

// css selector
// -----------
//    tag id                 / #id
//    tag class              / .class
//    tag attribute          / [attribute="value"]
//    tag class attribute    / .class[attribute="value"]

describe("template spec", () => {
  it("passes", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
    cy.get("[name='username']").type("Admin");
    cy.get("[name='password']").type("admin123");
    cy.get(".orangehrm-login-button").click();
  });
});
