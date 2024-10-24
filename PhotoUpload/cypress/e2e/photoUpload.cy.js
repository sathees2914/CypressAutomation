describe("upload the text file using in cypress", () => {
  it("upload the file and support file name", () => {
    cy.visit("https://the-internet.herokuapp.com/upload");
    cy.get("#file-upload").selectFile(
      "C:/Users/Lenovo/CypressAutomation/PhotoUpload/cypress/fixtures/api.txt"
    );
    cy.get("#file-submit").click();
    cy.get("h3").should("be.visible");
  });
});
