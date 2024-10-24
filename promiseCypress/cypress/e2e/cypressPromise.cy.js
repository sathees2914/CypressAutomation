describe('Promise Example Test', () => {
  it('should make a promise', () => {
   
    cy.visit('https://www.wikipedia.org');

   
    const myPromise = new Cypress.Promise(resolve => {
      setTimeout(() => {
        resolve('Promise resolved!');
      }, 1000);
    });


    myPromise.then(message => {
    
      expect(message).to.equal('Promise resolved!');
    });

    
    cy.contains(' Wikipedia').should('be.visible');
  });
});
