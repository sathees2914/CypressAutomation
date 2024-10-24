describe("Assertion", () => {
  it("passes", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
    cy.url()
      .should(
        "eq",
        "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
      )
      .and("contain", "orange")
      .and("include", "orangehrmlive")
      .and("not.contain", "green");

    cy.title()
      .should("eq", "Orangehrm")
      .and("include", "OrangeHRM")
      .and("contain", "HRM");

    cy.get(".orangegrm-login-branding > img").should("be.visible").and("exit");

    // cy.get(".orangegrm-login-branding > img").should("exit");

    cy.xpath("//a").should("have.length", "5");

    cy.get(".orangehrm-login-branding img").should("be.visible").and("exist");
    cy.get("a").should("have.length", 5);
    cy.get("[name='username']").type("Admin");
    cy.get("[name='username']").should("have.value", "Admin");
    cy.get("[name='password']").type("admin123");
    cy.get("[name='password']").should("have.value", "admin123");
    cy.get(".orangehrm-login-button").click();
  });

  it("explicit Assertion", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
    cy.get("[name='username']").type("Admin");
    cy.get("[name='password']").type("admin123");
    cy.get(".orangehrm-login-button").click();

    let expectedUsername = "Test 26 user";
    cy.get(".oxd-userdropdown-name").then((x) => {
      let actualUsername = x.text();

      // BDD style
      expect(actualUsername).to.equal(expectedUsername);
      expect(actualUsername).contain(expectedUsername);

      // TDD style
      assert.equal(actualUsername, expectedUsername);
      assert.notEqual(actualUsername, expectedUsername);
    });
  });
});
