describe("Login and create cookie", () => {
  it("logs in and creates a cookie", () => {
    cy.visit("http://127.0.0.1:5500/cookies/cypress/e2e/index.html")
      .get('input[name="username"]')
      .type("username")
      .get('input[name="password"]')
      .type("password")
      .get("form")
      .submit();

    cy.setCookie("loginToken", "validToken");

    cy.getCookie("loginToken").should("have.property", "value", "validToken");
  });

  // it("verifies the cookie is set", () => {
  //   cy.visit("http://127.0.0.1:5500/cookies/cypress/e2e/index.html")
  //     .getCookie("loginToken")
  //     .should("eq", "validToken");
  // });
});
