// cypress/integration/compare_excel.spec.js
describe("Compare Excel Sheets", () => {
  it("should compare data in two sheets of an Excel file", () => {
    const filePath = "C:/Users/Lenovo/CypressAutomation/test/Book1.xlsx"; // Update this path as needed
    const sheet1Name = "Sheet1"; // Name of the first sheet
    const sheet2Name = "Sheet2"; // Name of the second sheet

    cy.compareExcelSheets(filePath, sheet1Name, sheet2Name);
  });
});
