describe("Login Test Practice ",()=>{
  beforeEach(()=>{
  cy.visit("https://practicetestautomation.com/practice-test-login/")
  })
  it ("Test Login page following test cases given",()=>{
    cy.get("#username").eq(0).type("student")
    cy.get('input[type="password"]').type("Password123")
    cy.get('button[class ="btn"]').click()
    cy.url().should('include',"practicetestautomation.com/logged-in-successfully/")
    cy.get('strong').should('have.text',"Congratulations student. You successfully logged in!")
    cy.get('.wp-block-button a').should('be.visible')  
    
  })
  it("Test Login page following test case 1",()=>{
     cy.get("#username").eq(0).type("studenti")
     cy.get('input[type="password"]').type("Password23")
     cy.get('button[class ="btn"]').click()
     cy.get('#error').should('have.text',"Your username is invalid!")
     
  })

  it("Test Login page following test case 2",()=>{
    cy.get("#username").eq(0).type("student")
    cy.get('input[type="password"]').type("password123")
    cy.get('button[class ="btn"]').click()
    cy.get('#error').should('have.text',"Your password is invalid!")
    
 })
})