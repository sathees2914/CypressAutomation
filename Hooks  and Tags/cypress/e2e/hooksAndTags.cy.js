//  Hooks in cypress is before,after,before each and after each
//  tags in cypress is .only,.skip,describe,it

describe("Simple Cypress Hooks Example", () => {
  // beforeEach.skip(() => {
  //   cy.visit("https://practicetestautomation.com/practice-test-login/");
  // });
  // it.skip("check the positive login", () => {
  //   cy.get("#username").type("student");
  //   cy.get("#password").type("Password123");
  //   cy.get("#submit").click();
  //   cy.contains("Logged In Successfully").should("be.visible");
  // });

  // it.skip("check the negative scenerio in login username", () => {
  //   cy.get("#username").type("Student");
  //   cy.get("#password").type("Password123");
  //   cy.get("#submit").click();
  //   cy.contains("Your username is invalid!").should("be.visible");
  // });

  // it.skip("check the negative scenerio in login password", () => {
  //   cy.get("#username").type("student");
  //   cy.get("#password").type("password123");
  //   cy.get("#submit").click();
  //   cy.contains("Your password is invalid!").should("be.visible");
  // });

  afterEach(() => {
    // Reset the state by visiting the login page after each test
    cy.visit("https://practicetestautomation.com/practice-test-login/");
  });

  it("should login successfully with correct credentials", () => {
    cy.get("#username").type("student");
    cy.get("#password").type("Password123");
    cy.get("#submit").click();
    cy.contains("Logged In Successfully").should("be.visible");
  });

  it("should show error for incorrect username", () => {
    cy.get("#username").type("InvalidUser");
    cy.get("#password").type("Password123");
    cy.get("#submit").click();
    cy.contains("Invalid username or password").should("be.visible");
  });

  it("should show error for incorrect password", () => {
    cy.get("#username").type("student");
    cy.get("#password").type("IncorrectPassword");
    cy.get("#submit").click();
    cy.contains("Invalid username or password").should("be.visible");
  });

  //   after(() => {
  //     cy.log("After all tests - Global teardown");
  //   });

  //   beforeEach(() => {
  //     cy.log("Before each test - Setup");
  //   });

  //   afterEach(() => {
  //     cy.log("After each test - Teardown");
  //   });

  //   it("Test Case 1", () => {
  //     cy.log("Running Test Case 1");

  //     cy.visit("https://example.com");
  //     cy.contains("Example Domain").should("be.visible");
  //   });

  //   it("Test Case 2", () => {
  //     cy.log("Running Test Case 2");

  //     cy.visit("https://example.com");
  //     cy.url().should("include", "example.com");
  //   });
});
