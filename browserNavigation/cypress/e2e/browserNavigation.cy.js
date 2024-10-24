describe("template spec", () => {
  it("browser navigation", () => {
    cy.visit("https://demo-opencart.com/");
    cy.title().should("eq", "Your Store");
    cy.get("#narbar-menu > ul > li:nth-child(7) > a").click();
    cy.get("#content h2").should("have.text", "Cameras");
    cy.go("back");
    cy.title().should("eq", "Your Store");
    cy.go("forward");

    cy.go(-1);
    cy.screenshot("homepage");
    cy.go(1);
    cy.get("#logo").screenshot("logo");
  });
});
