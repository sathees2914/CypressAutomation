describe("first test in cypress", () => {
  it("connect to the URL", () => {
    cy.visit('https://www.youtube.com');
  });

  it("seach the bmw m5 cs car",()=>{
    cy.visit('https://www.youtube.com');
    cy.get('#search-input > #search').type('BMW M5 cs');
    cy.get('#search-icon-legacy').click();
    cy.get(':nth-child(3) > :nth-child(2) > #dismissible > ytd-thumbnail.style-scope > #thumbnail > yt-image.style-scope > .yt-core-image').click();
  })
});