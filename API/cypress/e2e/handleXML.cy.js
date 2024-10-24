const xml2js = require("xml2js");
const parser = new xml2js.Parser({ explicitArray: false });

describe("xml parsing", () => {
  const xmlPayload = "<pet>  <id>0</id> <category> <id>0</id> <name>dog</name>";
  let petid = null;

  before("Creating new pet", () => {
    cy.request({
      method: "Post",
      url: "https://petstore.swagger.io/v2/pet",
      body: xmlPayload,
      headers: { "content-Type": "application/xml", accept: "application/xml" },
    }).then((response) => {
      expect(response.status).to.eq(200);
      parser.parseString(response.body, (err, result) => {
        petid = result.pet.id;
      });
    });
  });

  it("Fetching pet data-parsing xml", () => {
    cy.request({
      method: "Get",
      url: "https://petstore.swagger.io/v2/pet" + petid,
      body: xmlPayload,
      headers: { accept: "application/xml" },
    }).then((response) => {
      expect(response.status).to.eq(200);
      parser.parseString(response.body, (err, result) => {
        petid = result.pet.id;
        expect(result.pet.id).equal(petid);
        expect(result.pet.name).equal("jimmy");
      });
    });
  });
});
