//  .a-carousel-goto-nextpage
//  #cardInstanceE1Eho7piunOboO_cjkjEqw

describe("Test Amazon in carousel", () => {
  it("traverse through rach carousel from first image until get sam image again", () => {
    cy.visit("https://amazon.in", { timeout: 100000 });
    const carouselImageSelect = ".a-link-normal";
    const rightAssowSelector = ".a-carousel-goto-nextpage";
    let firstImageSrc;
    cy.get(carouselImageSelect)
      .first()
      .find("img")
      .invoke("attr", "src")
      .then((src) => {
        firstImageSrc = src;
      });
    function clickUnitFirstImage() {
      cy.get(rightAssowSelector).click({ force: true });
      cy.wait(1000);
      cy.get(carouselImageSelect)
        .first()
        .find("img")
        .invoke("attr", "src")
        .then((currentSrc) => {
          if (currentSrc !== firstImageSrc) {
            clickUnitFirstImage();
          } else {
            cy.log("returned to first image in carousel");
          }
        });
    }
    clickUnitFirstImage();
  });
});
