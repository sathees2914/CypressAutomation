const { defineConfig } = require("cypress");

module.exports = defineConfig({


  env:{
    "username": "7094722602",
    "password": "Swetha@6123"
    
  },
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      // implement node event listeners here
      
    },
      baseUrl:"https://www.amazon.in/"
  },
});
