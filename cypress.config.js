const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout: 60000,
  // chromeWebSecurity:false,
  video: true,
  screenshotOnRunFailure: true,
  // projectId: "xmb616",
  videoUploadOnPasses: false,
  videoCompression: 32,
  // reporter: "mochawesome",
  // reporterOptions: {
  //   reportDir: "mochawesome-report",
  //   overwrite: false,
  //   html: true,
  //   json: true,
  // },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

// const { defineConfig } = require("cypress");
// const xlsx = require('node-xlsx').default;
// const fs = require('fs');
// const path = require('path');

// module.exports = defineConfig({
//   e2e: {
//     setupNodeEvents(on, config){
//       on("task" ,{parsexlsx({filepath}){
//         return new promiseHooks((resolve,reject)=>{
//           try{
//             const jsonData = xlsx.parse(fs.readFileSync(filepath))
//             resolve(jsonData);
//           }catch(e){
//             reject(e)
//           }
//         })
//       }})
//     }
//   }
// })
