const { defineConfig } = require("cypress");
// require("cypress-dotenv")();

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
