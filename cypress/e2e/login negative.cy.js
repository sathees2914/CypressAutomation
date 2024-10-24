describe('check the negative results', () => {

beforeEach(()=>{
  cy.visit('https://practicetestautomation.com/practice-test-login/')
})


it('test login page with negative case 1', () => {
  cy.get ("#username").eq(0).type("student1")
  cy.get ('#password').type("Password123")
  cy.get ('#submit').click()
  cy.get ('#error').should('have.text','Your username is invalid!')  
  })

it ('test login page negative case 2',()=>{
  cy.get ('#username').eq(0).type('student')
  cy.get('#password').type('password123')
  cy.get('#submit').click()
  cy.get('#error').should('have.text','Your password is invalid!')
})


it ('test login page positive case 3',()=>{
  cy.get ('#username').eq(0).type('student')
  cy.get('#password').type('Password123')
  cy.get('#submit').click()

  cy.get('.post-title').should('have.text','Logged In Successfully')
})

})