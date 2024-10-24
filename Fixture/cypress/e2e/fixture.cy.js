describe("Login Page Tests", () => {
  beforeEach(() => {
    cy.fixture("example").then((users) => {
      cy.visit("https://practicetestautomation.com/practice-test-login/");
      cy.log("Loaded example fixture:", users);
    });
  });

  it("should log in with valid credentials", () => {
    cy.fixture("example").then((users) => {
      cy.get("#username").type(users.validUser.username);
      cy.get("#password").type(users.validUser.password);
      cy.get("#submit").click();

      cy.contains("Logged In Successfully").should("be.visible");
    });
  });

  it("should display error with invalid credentials", () => {
    cy.fixture("example").then((users) => {
      cy.get("#username").type(users.invalidUser.username);
      cy.get("#password").type(users.invalidUser.password);
      cy.get("#submit").click();

      cy.contains("Your password is invalid!").should("be.visible");
    });
  });
});
