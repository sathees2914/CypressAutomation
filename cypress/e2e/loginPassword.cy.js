// const XLSX = require('xlsx')

// // const cypress = require("cypress")




// describe('Login test', () => {
//   it('Should login with credentials from Excel', () => {
//     cy.visit('https://practicetestautomation.com/practice-test-login')
//     const credentials = getCredentialsFormExel('E:\fs.xlsx');


//     cy.get('#username').type(credentials.userName);
//     cy.get('#password').type(credentials.password);
//     cy.get('#submit').click()

//     cy.url('https://practicetestautomation.com/practice-test-login').should('include','/dashboard')

//   })
  
// })

// function getCredentialsFormExel(filepath){
//   const workbook = XLSX.read(filepath);
//   const sheetName =workbook.SheetNames[0];
//   const worksheet =workbook.Sheets[sheetName];

//   const userNameCell = worksheet['A1'];
//  const passwordCell = worksheet['B1'];


// const userName = userNameCell ? userNameCell.v : '';
// const password = passwordCell ? passwordCell.v : '';

// return { userName, password };

// }





// describe('convert data to json',() =>{
//   it('read data from xcel',()=>{
//     cy.parseXlsx('C:\Users\Lenovo\CypressAutomation\fs.xlsx').then ((jsonData)=>{
//       const rowLength = cypress.$(jsonData[0].data).rowLength


//       cy.log(rowLength)
//       for(let i =1;i < rowLength;i++){
//         let value = jsonData[0].data[i]

//         cy.visit('https://practicetestautomation.com/practice-test-login')
        
        
        
//     cy.get('#username').type(value[0]);
//      cy.get('#password').type(value[1]);
//      cy.get('#submit').click()
//       }
//     })
//   })
// })
  