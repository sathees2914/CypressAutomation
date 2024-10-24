import LoginPage from "../pages/loginPage";

describe("Login Page", () => {
  const loginPage = new LoginPage();

  it("passes", () => {
    cy.visitLoginPage();
    loginPage.enterUsername("student");
    loginPage.enterPassword("Password123");
    loginPage.submit();
    loginPage.verifyLoginSuccess();
  });
})
