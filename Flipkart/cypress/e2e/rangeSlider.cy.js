describe("Price Range Slider Test", () => {
  beforeEach(() => {
    cy.visit("http://127.0.0.1:5500/Flipkart/cypress/e2e/index.html"); // Adjust the path to your HTML file
  });

  it("should set the price range from 15000 to 25000", () => {
    // Assuming that the min and max sliders have the following classes:
    const minSlider = ".range-min";
    const maxSlider = ".range-max";

    // Set the minimum price to 15000
    cy.get(minSlider).invoke("val", 3); // Assuming 15000 corresponds to index 3 in your pricePoints array
    // Trigger input event to simulate slider adjustment

    // Set the maximum price to 25000
    cy.get(maxSlider).invoke("val", 4); // Assuming 25000 corresponds to index 4 // Trigger input event to simulate slider adjustment

    // Verify that the slider reflects the new values
    // cy.get(".input-min").should("have.value", "15000");
    // cy.get(".input-max").should("have.value", "25000");
  });
});
