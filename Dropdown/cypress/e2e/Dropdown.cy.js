describe("template spec", () => {
  it("Dropdown with select", () => {
    cy.visit("https://www.zoho.com/commerce/free-demo.html");
    cy.wait(60000);
    cy.get("#zcf_address_country").select("India");
    cy.get("#zcf_address_country").should("have.value", "India");
  });
  // it.only("cropdown without select", () => {
  //   cy.visit("http://www.dummyticket.com/dummy-ticket-for-visa-application/");
  //   cy.get("#select2-billing_country-container").click();
  //   cy.get(".select2-search__field").type("Germany").type("{enter}");
  //   cy.get("#select2-billing_country-container").should("have.text", "Germany");
  // });

  it("Auto Suggestion", () => {
    cy.visit("https://www.Wikipedia.org/");
    cy.get("#searchInput").type("kerala");
    cy.get(".suggestion-title").contains("Kerala backwaters").click();
    cy.get("#firstHeading span").should("have.text", "Kerala backwaters");
  });

  it.only("dynamic length", () => {
    cy.visit("https://www.google.co.in");
    cy.get(".gLFyf").type("Cypress");
    cy.get(".wM6W7d span").each(($el, index, list) => {
      if ($el.text() == "cypress automation tool") {
        cy.wrap($el).click();
      }
    });
  });
});
