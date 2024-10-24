describe("Authentication", () => {
  it("basic Authentication", () => {
    cy.request({
      method: "get",
      url: "https://postman-echo.com/basic-auth",
      auth: {
        user: "postman",
        pass: "password",
        timeout: 1000,
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.authenticated).to.eq(true);
    });
  });

  it("basic Authentication", () => {
    cy.request({
      method: "get",
      url: "https://postman-echo.com/basic-auth",
      auth: {
        user: "postman",
        pass: "password",
        method: "degest",
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.authenticated).to.eq(true);
    });
  });
});
