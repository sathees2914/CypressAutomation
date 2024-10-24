// cypress/e2e/drag-and-drop.spec.js

describe("Drag and Drop Test", () => {
  beforeEach(() => {
    cy.visit(""); // Adjust this URL to match where your HTML file is served
  });

  it("should drag and drop an item", () => {
    // Replace these selectors with the actual selectors in your HTML file
    const sourceSelector = "#draggable";
    const targetSelector = "#dropzone";

    // Use custom dragAndDrop command
    cy.dragAndDrop(sourceSelector, targetSelector);

    // Assert that the drop target contains the expected text after the drop
    cy.get(targetSelector).should("contain.text", "Dropped!");
  });
});
