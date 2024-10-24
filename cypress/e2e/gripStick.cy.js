describe("Grip Stick Example", () => {
  it("should perform grip stick action", () => {
    cy.visit("http://127.0.0.1:5500/cypress/e2e/gripStick.html");

    cy.get("#element").gripStick(100, 100);

    cy.get("#element").should(
      "have.css",
      "background-color",
      "rgb(240, 240, 240)"
    );
  });
});

// Cypress.Commands.add("gripStick", (selector, x, y) => {
//   cy.get(selector)
//     .trigger("mousedown", { which: 1, pageX: x, pageY: y }) // click and hold
//     .trigger("mousemove", { clientX: x, clientY: y }) // move mouse
//     .trigger("mouseup", { which: 1, pageX: x, pageY: y }); // release
// });
