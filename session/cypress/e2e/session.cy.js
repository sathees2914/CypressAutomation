describe("test", () => {
  beforeEach("", () => {
    cy.visit("http://127.0.0.1:5500/session/cypress/e2e/index.html");
  });

  it("should return true", () => {
    cy.session("sample", () => {
      cy.visit("http://127.0.0.1:5500/session/cypress/e2e/index.html");
      cy.get("#username").click().type("testuser");
      cy.get("#password").click().type("testpassword");
      cy.get('[type="submit"]').click();
    });
  });
});
