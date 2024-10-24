describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.youtube.com')
    cy.screenshot('https://www.youtube.com/watch?v=vQXvyV0zIP4&t=15s',{timeout:30000})
    cy.screenshot();
  })

  
})