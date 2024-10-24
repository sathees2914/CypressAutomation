describe('template spec', () => {




  it('Multiple tab', () => {
    cy.visit('https://the-internet.herokuapp.com/windows');
    cy.get(".example a").invoke("removeAttr","target").click();
    cy.url().should('contain','https://the-internet.herokuapp.com/windows/new');

  });


  it("Multiple tab approach2",()=>{
    cy.visit("https://the-internet.herokuapp.com/windows");
    cy.get(".example a").then ((t)=>{
      let url = t.prop('href');
      cy.visit(url)
    })
   cy.url().should('contain','https://the-internet.herokuapp.com/windows/new')
   cy.go('back');
   cy.url().should('contain','https://the-internet.herokuapp.com/windows')
 
  
  })


})