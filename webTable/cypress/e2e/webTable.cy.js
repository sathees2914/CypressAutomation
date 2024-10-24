describe("template spec", () => {
  it("passes", () => {
    cy.visit("https://the-internet.herokuapp.com/tables");
    cy.get("#table1 tr").should("have.length", 5);
    cy.get("#table1 th").should("have.length", 6);
  });

  it("check specific cell value", () => {
    cy.visit("https://the-internet.herokuapp.com/tables");
    cy.get("#table1 tbody tr:nth-child(2) td:nth-child(4)").contains("$51.00");
  });

  it("read the table value", () => {
    cy.visit("https://the-internet.herokuapp.com/tables");
    cy.get("#table1 tbody tr").each(($row, index, $rows) => {
      cy.wrap($row).within(() => {
        cy.get("td").each(($col, index, $cols) => {
          cy.log($col.text());
        });
      });
    });
  });
});
