const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.w3schools.com/",

    testIsolation: false,
    chromeWebSecurity: false,
    experimentalSessionAndOrigin: true,

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
