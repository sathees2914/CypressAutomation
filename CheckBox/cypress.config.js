const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout: 6000,
  // chromeWebSecurity:false,
  video: true,
  videoCompression: true,
  videoCompression: 1,

  // screenshotOnRunFailure: true,
  screenshotOnRunFailure: false,
  projectId: "xmb616",
  videoUploadOnPasses: true,
  videoUploadOnPasses: false,
  execTimeout: 6000,
  taskTimeout: 5000,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
