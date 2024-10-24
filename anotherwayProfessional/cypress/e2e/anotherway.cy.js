import { loginPage, invaluedUsername, invalidPassword } from "./loginPage";

describe("loginPage", () => {
  const login = new loginPage();
  const Invalidusername = new invaluedUsername();
  const Invalidpassword = new invalidPassword();
  it("login test", () => {
    // login.visit();
    // login.username();
    // login.password();
    // login.submit();
    // // cy.wait(4000);  this is explicit wait
    // login.successMSG();

    login.smokeTest();
  });

  it("Invalidusername", () => {
    Invalidusername.visit();
    Invalidusername.username();
    Invalidusername.password();
    Invalidusername.submit();
    Invalidusername.invalidMSG();
  });

  it("InvalidPassword", () => {
    Invalidpassword.visit();
    Invalidpassword.username();
    Invalidpassword.password();
    Invalidpassword.submit();
    Invalidpassword.invalidMSG();
  });
});
