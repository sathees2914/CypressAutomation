describe("Callback Function Test", () => {
  it("should show an alert and execute the callback", () => {
    // Visit the HTML file
    cy.visit("http://127.0.0.1:5500/callBack/cypress/e2e/index.html"); // Replace with the correct path

    // Stub the alert and console.log functions
    cy.window().then((win) => {
      cy.stub(win, "alert").as("alertStub"); // Stub alert
      cy.stub(win.console, "log").as("consoleLogStub"); // Stub console.log
    });

    // Click the button
    cy.get("#myButton").click();

    // Check if the alert was called with the correct message
    cy.get("@alertStub").should("be.calledWith", "Button Clicked!");

    // Check if the console log was called correctly
    cy.get("@consoleLogStub").should("be.calledWith", "Button was clicked!");
    cy.get("@consoleLogStub").should(
      "be.calledWith",
      "Callback executed after alert."
    );
  });
});
