// post https://gorest.co.in/public/v2/users
// put https://gorest.co.in/public/v2/users ${userId}
//  delete put https://gorest.co.in/public/v2/users ${userId}

describe("gorest APIO chaining", () => {
  const auth_token =
    "Bearer 64f3346c7d1de91282611f58a3180a3f6a2538eefe6aaa0ada3fec302631b848";

  it("create,update,delete user in gorest API", () => {
    cy.request({
      method: "post",
      url: "https://gorest.co.in/public/v2/users",
      body: {
        name: "jhon kennedy",
        gender: "male",
        email: Math.random().toString(5).substring(2) + "@gmail.com",
        status: "active",
      },
      headers: {
        Authorization: auth_token,
      },
    }).then((response) => {
      expect(response.status).to.equal(201);
      const userId = response.body.id;
      cy.request({
        method: "put",
        url: `https://gorest.co.in/public/v2/users/${userId}`,
        body: {
          name: "scott",
        },
        headers: {
          Authorization: auth_token,
        },
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.name).to.eq("scott");
        cy.request({
          method: "delete",
          url: `https://gorest.co.in/public/v2/users/${userId}`,
          headers: {
            Authorization: auth_token,
          },
        }).then((response) => {
          expect(response.status).to.eq(204);
        });
      });
    });
  });
});
