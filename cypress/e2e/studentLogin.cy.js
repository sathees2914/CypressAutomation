describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://practicetestautomation.com/practice-test-login')
    cy.get("#username").eq(0).type("student")
    cy.get('input[type="password"').type("Password123");
    cy.get('#submit').click();
    cy.get('.post-title').should('have.text','Logged In Successfully')
  })
})