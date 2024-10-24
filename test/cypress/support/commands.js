// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// cypress/support/commands.js

// cypress/support/commands.js
// Cypress.Commands.add(
//   "compareExcelSheets",
//   (filePath, sheet1Name, sheet2Name) => {
//     cy.task("compareExcelSheets", { filePath, sheet1Name, sheet2Name }).then(
//       (areEqual) => {
//         cy.log(`Sheets are equal: ${areEqual}`);
//         cy.wrap(areEqual).should(
//           "be.true",
//           "The data in the two sheets should be the same"
//         );
//       }
//     );
//   }
// );

Cypress.Commands.add(
  "compareExcelSheets",
  (filePath, sheet1Name, sheet2Name) => {
    cy.task("compareExcelSheets", { filePath, sheet1Name, sheet2Name }).then(
      (areEqual) => {
        cy.log(`Sheets are equal: ${areEqual}`);

        if (areEqual) {
          // If sheets are equal, you might want to log a success message or perform some actions
          cy.log("The data in the two sheets are exactly the same.");
          cy.wrap(areEqual).should(
            "be.true",
            "The data in the two sheets should be the same"
          );
        } else {
          // If sheets are not equal, you might want to handle it differently
          cy.log("The data in the two sheets are different.");
          // Optionally, you can also assert here if needed
          cy.wrap(areEqual).should(
            "be.false",
            "The data in the two sheets should not be the same"
          );
        }
      }
    );
  }
);
