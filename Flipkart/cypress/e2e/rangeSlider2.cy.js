describe("Price Range Slider Tests", () => {
  beforeEach(() => {
    // Visit the page with your price range slider
    cy.visit("http://127.0.0.1:5500/Flipkart/cypress/e2e/index2.html"); // Update with the correct path
  });

  it.only("should display correct value when the slider is moved to 0", () => {
    cy.get("#priceRange").invoke("val", 0).trigger("input");
    // cy.get("#currentValue").should("contain", "₹5,000");
  });

  it("should display correct value when the slider is moved to 1", () => {
    cy.get("#priceRange").invoke("val", 1).trigger("input");
    cy.get("#currentValue").should("contain", "₹10,000");
  });

  it("should display correct value when the slider is moved to 2", () => {
    cy.get("#priceRange").invoke("val", 2).trigger("input");
    cy.get("#currentValue").should("contain", "₹15,000");
  });

  it("should display correct value when the slider is moved to 3", () => {
    cy.get("#priceRange").invoke("val", 3).trigger("input");
    cy.get("#currentValue").should("contain", "₹20,000");
  });

  it("should display correct value when the slider is moved to 4", () => {
    cy.get("#priceRange").invoke("val", 4).trigger("input");
    cy.get("#currentValue").should("contain", "₹25,000");
  });

  it("should display correct value when the slider is moved to 5", () => {
    cy.get("#priceRange").invoke("val", 5).trigger("input");
    cy.get("#currentValue").should("contain", "₹30,000");
  });
});
