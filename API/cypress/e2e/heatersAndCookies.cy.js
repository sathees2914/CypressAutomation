describe("API testing", () => {
  let authToken = null;

  before("creating access token", () => {
    cy.request({
      method: "Post",
      url: "https://simple-books-api.glitch.me/api-clients/",
      headers: {
        "content-type": "application/json",
      },
      body: {
        clientName: "ABC",
        clientEmail: Math.random().toString(5).substring(2) + "@gmail.com",
      },
    }).then((response) => {
      authToken = response.body.accessToken;
    });
  });

  before("create a new order", () => {
    cy.request({
      method: "post",
      url: "https://simple-books-api.glitch.me/api-clients/",
      headers: {
        "content-type": "application/json",
        Authorization: "Bearer" + authToken,
      },
      body: {
        bookId: 1,
        customerName: "xyzbc",
      },
    }).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body.created).to.eq(true);
    });

    it("Fetching the orders", () => {
      cy.request({
        method: "Get",
        url: "https://simple-books-api.glitch.me/api-clients/",
        header: {
          "content-Type": "application/json",
          Authorization: "Bearer" + authToken,
        },

        cookies: {
          cookieName: "mycookie",
        },
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).has.length(1);
      });
    });
  });
});
