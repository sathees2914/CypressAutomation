//  1.simple Alert
//  2.Confirmation Alert
//  3.Promt Alert
//  4.Authentication Alert






describe('template spec', ()=>{

  
  
  it.skip('JS simple', () => {
    cy.visit('https://the-internet.herokuapp.com/javascript_alerts');
    cy.get('[onclick="jsAlert()"]').click();
    cy.on('window:alert',(t)=>{
      expect(t).to.contains("I am a JS Alert");
    })
    cy.get("#result").should('have.text',"You successfully clicked an alert")
  })


  
  
  it.skip("JS confirm alert - cancel button",()=>{
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts");
    cy.get('[onclick="jsConfirm()"]').click();
    cy.on('window:confirm',(t)=>{
      expect(t).to.contains('I am a JS Confirm');
    })
    cy.on('window:confirm',()=>false);
    cy.get("#result").should('have.text',"You clicked: Cancel")
  })

  
  
  
  
  it.skip("JS prompt alert",()=>{
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts");
    cy.window().then((win)=>{
      cy.stub(win,'prompt').returns(null);
    });
    cy.get('[onclick="jsPrompt()"]').click()
    cy.get('#result').should('have.text','You entered: null')
  })

  

//Approach 1
  it.skip("Authemtication",()=>{
    cy.visit("https://the-internet.herokuapp.com/basic_auth",{auth:{
              username:"admin",
              password:"admin"
    }});
cy.get('#content').contains("Congratulations!")
  })


//Approach 2

it.skip("Authentication -approach 2",()=>{
  cy.visit("https://admin:admin@the-internet.herokuapp.com/basic_auth")
  cy.get('#content').contains("Congratulations!")

})



// it("alert",()=>{
//   cy.visit('https://rahulshettyacademy.com/AutomationPractice');
//   cy.get("#name").type("sathees");
//   cy.get("#alertbtn").click();
//   cy.on('window:alert',(t)=>{
//     expect(t).to.contains("Hello sathees,share this practice page and share yourknowledge");
//   })
// })







  it('Should display name in alert message', () => {
    const name = 'sathees';

   
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

   
    cy.get('#name').type(name);

   
    cy.get('#alertbtn').click();

   
    cy.on('window:alert', (alertText) => {
      expect(alertText).to.contain(name); 
    });
  });





})