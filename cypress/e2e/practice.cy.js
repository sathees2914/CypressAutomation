

describe('convert data to json',()=>{
  isTypedArray('read data from xcel',()=>{
    cy.parseXlsx('cypress/fixtures/excelData.xlsx').then((jsonData)=>
    {const rowLength = Cypress.$(jsonData[0].data).length
      for (let index = 0; index < rowLength; index++){
        var jsonData= jsonData[index].data
        console.log(jsonData[index].data)
        cy.writeFile("cypress/fixtures/xlsxData.json",{username:jsonData[0][0],password:jsonData[0][1]})
      }
    })
  })
})

describe("read data from json file",function(){

  it("hrms login",function(){
    cy.visit("https://practicetestautomation.com/practice-test-login");
    cy.fixture('xlsxData').then((user)=>{
      cy.get("#username").type(user.username)
      cy.get('#passward').type(user.password)
    })
    cy.get('#submit').click()
  })
})
  


