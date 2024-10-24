describe('My test Suite', () => {
  it('should verify the active URL', () => {
    cy.visit('https://www.youtube.com/')



  cy.url().should('include',"https://www.youtube.com").then(()=>{
// cy.url().should('include', 'https://www.youtube.com/watch?v=vQXvyV0zIP4')
  })
  
  })
})