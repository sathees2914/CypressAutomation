

describe('template spec', () => {
  
  
  it.skip('passes', () => {
    cy.visit('https://practice.expandtesting.com/iframe');
    const ifram = cy.get('#mce_0_ifr').its('0.contentDocument.body').should('be.visible').then(cy.wrap);
  
    ifram.clear().type("Welcome to tutorial {ctrl+a}")
    cy.get('[aria-label="Bold"]').click();
  
  
  })

  it("iframe -approach2",()=>{
    cy.visit("https://practice.expandtesting.com/iframe");
    cy.frameLoaded("#mce_0_ifr")
    cy.iframe("#mce_0_ifr").clear().type("welcome");
    
  })


  })