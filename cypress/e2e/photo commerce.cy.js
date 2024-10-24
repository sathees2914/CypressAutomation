describe('My Test Suite', () => {
  describe('Your Cypress Test Suite', () => {
  beforeEach(() => {
    cy.visit('https://rahulshettyacademy.com/angularpractice/shop')
  })
  
  
    it('Should open the website', () => {
     cy.visit('https://rahulshettyacademy.com/angularpractice/shop');
    cy.get(':nth-child(1) > .card > .card-footer > .btn').eq(0).click();
    cy.get(':nth-child(4) > .card > .card-footer > .btn').click(); 
    cy.get('#navbarResponsive > .navbar-nav > .nav-item > .nav-link').click();
    cy.get(':nth-child(4) > :nth-child(5) > .btn').click()
   
   
   
   cy.get('#country').then (function($input){
    $input.val('India')
   })
  
   cy.get('.checkbox > label').click();
   
   
   
   
    cy.get('.ng-untouched > .btn').click()
    cy.get('strong').should('have.text','Success!')
  });

 
  it('check the login page successfull',()=>{
     cy.visit('https://rahulshettyacademy.com/angularpractice/shop');
     cy.get('.navbar > .navbar-nav > :nth-child(1) > .nav-link').click();
     cy.get(':nth-child(1) > .form-control').type('sathees Kumar');  
     cy.get(':nth-child(2) > .form-control').type('satheeskumarbalachandran95@gmail.com');
     cy.get('#exampleInputPassword1').type('satheeskumar');
     cy.get('#exampleCheck1').click();
     cy.get('#exampleFormControlSelect1').select('Male');
     cy.get('#inlineRadio1').click();
     cy.get('input.form-control[type="date"]').eq(0).clear().type('1995-06-29')
     cy.get('.btn').click();
     cy.get('strong').should('have.text','Success!');
     });


  


});

});






 



































