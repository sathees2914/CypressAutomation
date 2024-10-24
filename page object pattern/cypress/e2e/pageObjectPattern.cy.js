import LoginPage from "../e2e/loginPage.cy";

describe("Login Functionality", () => {
  const login = new LoginPage();
  it("Logs in with valid credentials", () => {
    login.visit();
    login.login("student", "Password123");
  });
});
