describe("User Data Fetching", () => {
  beforeEach(() => {
    // Load the HTML file
    cy.visit("http://127.0.0.1:5500/stub/cypress/e2e/index.html");
  });

  it("should display user name when button is clicked", () => {
    // Create a stub for the fetchData method
    const user = {
      fetchData: () => {},
    };

    cy.stub(user, "fetchData").returns({ name: "John Doe" });

    // Stub the method globally
    cy.window().then((win) => {
      win.user = user; // Assign stubbed user object to the window
    });

    // Click the button to fetch user data
    cy.get("#fetch-data").click();

    // Assert that the displayed user name is correct
    cy.get("#user-name").should("have.text", "John Doe");
  });
});
