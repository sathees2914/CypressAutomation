import "cypress-file-upload";

describe("template spec", () => {
  it("File Upload", () => {
    cy.visit("https://the-internet.herokuapp.com/upload");
    cy.get("#file-upload").selectFile(
      "C:/Users/Lenovo/CypressAutomation/file upload/cypress/fixtures/index.html"
    );
    cy.get("#file-submit").click();
    cy.get(".example h3").should("have.text", "File Uploaded!");
  });
  it("File Upload with Rename Test", () => {
    const originalFilePath =
      "C:/Users/Lenovo/CypressAutomation/file upload/cypress/fixtures/index.html";
    const renamedFileName = "newname.html";

    // Visit the upload page
    cy.visit("https://the-internet.herokuapp.com/upload");

    // Read the file content using cy.readFile() with absolute path
    cy.readFile(originalFilePath, "utf-8").then((fileContent) => {
      // Attach the file with the renamed file name
      cy.get("#file-upload").attachFile({
        fileContent: fileContent,
        fileName: renamedFileName,
        mimeType: "text/html",
      });

      // Optionally, click on a submit button if required
      cy.get("#file-submit").click();

      // Assert that the file uploaded successfully
      cy.get(".example h3").should("have.text", "File Uploaded!");
    });
  });
});
