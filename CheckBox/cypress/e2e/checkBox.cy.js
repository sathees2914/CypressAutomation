describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://testautomationpractice.blogspot.com/');
    cy.get("#sunday").should('be.visible')
    cy.get('#sunday').check().should('be.checked');
    cy.get('#sunday').uncheck().should('not.be.checked');
    cy.get(".form-check-input[type='checkbox']").check().should('be.checked')
    cy.get(".form-check-input[type='checkbox']").uncheck().should('not.be.checked')
    cy.get(".form-check-input[type='checkbox']").first().check().should('be.checked')
    cy.get('.form-check-input[type="checkbox"]').last().check().should('be.checked')

  })
})