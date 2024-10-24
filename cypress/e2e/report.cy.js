describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.youtube.com');
    cy.screenshot('youtube_homepage')
  });

  it('search a video',()=>{
    cy.visit('https://www.youtube.com');
    cy.get('input#search').type('cypress Testing{enter}')
    cy.screenshot('search_results');


    
  });
})