describe("template spec", () => {
  it("passes", () => {
    cy.visit("https://www.flipkart.com/");
    cy.get(".Pke_EE").type("Moblie{enter}");
    cy.get('[title="SAMSUNG"] > .QCKZip > .tJjCVx > .XqNaEv').click();
    let left = cy.get(".iToJ4v.Kaqq1s");
    let right = cy.get(".iToJ4v.D0puJn");
    left
      .trigger("mousedown")
      .trigger("mousemove", { clientX: 90 })
      .trigger("mouseup");
    right
      .trigger("mousedown")
      .trigger("mousemove", { clientX: 170 })
      .trigger("mouseup");
  });
});
