describe('Create text file with content', () => {
  it('Writes "sathees" to the specified text file', () => {
    
    const content = 'sathiya';

    
    const filePath = 'C:\\Users\\Lenovo\\CypressAutomation\\type the text\\text.txt';


    cy.writeFile(filePath, content).then(() => {

      cy.log(`File "${filePath}" created successfully!`);
    });
  });
});
