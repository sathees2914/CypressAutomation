describe("Http request", () => {
  it.skip("Get call", () => {
    cy.request("Get", "https://jsonplaceholder.typicode.com/posts/1")
      .its("status")
      .should("equal", 200);
  });

  it.skip("Post call", () => {
    cy.request({
      method: "Post",
      url: "https://jsonplaceholder.typicode.com/posts",
      body: {
        userId: 1,
        id: 1,
        title:
          "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
      },
    })
      .its("status")
      .should("equal", 201);
  });

  it.skip("put call", () => {
    cy.request({
      method: "put",
      url: "https://jsonplaceholder.typicode.com/posts/1",
      body: {
        userId: 1,
        id: 1,
        title:
          "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
      },
    })
      .its("status")
      .should("equal", 200);
  });

  it("Delete call", () => {
    cy.request({
      method: "Delete",
      url: "https://jsonplaceholder.typicode.com/posts/1",
    })
      .its("status")
      .should("equal", 200);
  });
});
