import { loginPage } from "../pageObjects/loginpage";
import { searchPage } from "../pageObjects/searchPage";
describe('Amazon Automation Tests', () => {
  let nextpage;
  const username = Cypress.env('username');
  const password = Cypress.env('password');
  let creds;
  before(() => {
      cy.fixture('mobileBrands').then((data) => {
          creds = data;
      })
  })
  beforeEach(() => {
    cy.session('amazonLogin', () => {
      cy.visit('/');
      loginPage.NavigateSearchBox()
      loginPage.enterEmail(username);
      loginPage.clickContinue();
      loginPage.enterPassword(password);
      loginPage.clickSignIn();
    });
  });
  afterEach(()=>{
    cy.url().then((newurl)=>{
      nextpage=newurl;
    })
  })
  it('Search for Mobiles under 15000 and apply filters', () => {
    cy.visit('/'); 
    searchPage.validateHomePage()
  });
  it('productpage',()=>{
    cy.visit(nextpage)
    searchPage.searchProduct()
    searchPage.MobilesCostassertion()
    searchPage.ApplyingFillter()
    searchPage.fliterSamsung(creds.brand1);
    searchPage.fliterMotorola(creds.brand2);
  })
});
