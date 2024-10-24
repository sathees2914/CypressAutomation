describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://testautomationpractice.blogspot.com/')
    cy.get("#male").should("be.visible");
    cy.get("#male").check().should('be.checked')
    cy.get("#female").should('not.be.checked')
  });
})