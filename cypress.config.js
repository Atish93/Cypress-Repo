const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.w3schools.com/',

    testIsolation: false,
    chromeWebSecurity: false,
    experimentalSessionAndOrigin: true,
    viewportHeight: 1080,
    viewportWidth: 1920,

    reporter: 'mochawesome', // Set the reporter to Mochawesome
    reporterOptions: {
      reportDir: 'cypress/reports', // Directory where reports are saved
      overwrite: false, // Do not overwrite previous reports
      html: true, // Generate HTML report
      json: true, // Generate JSON report
    },

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
