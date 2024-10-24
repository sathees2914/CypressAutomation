describe('template spec', () => {
  beforeEach(()=>{
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
  })
  
  
  it('passes', () => {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    cy.title().should('include','Practice Page')
  })

it('check the ratio',()=>{
  cy.get('input[value="radio1"]').check()
})

it('check the option',()=>{
  // cy.get ('label input[type ="checkbox"]').check('Option1').should('be.checked').
  cy.get('#checkBoxOption1').eq(0).click();
  cy.get('#checkBoxOption3').click();
  cy.get('#checkBoxOption3').should('be.checked');
  
})

it('check the dropdown',()=>{
  
  cy.get('#dropdown-class-example').select('option3').should('have.value','option3')
  cy.get('#dropdown-class-example').should('have.value','option3');
})


it.only('type  my name click confirm button,and handle alert',()=>{
  cy.get ('#name').type('sathees');
  cy.get('#confirmbtn').click();
})

})