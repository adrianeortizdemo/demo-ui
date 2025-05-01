// cypress.config.js
const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    // Run your specs under cypress/integration/*.cy.js
    specPattern: 'cypress/integration/**/*.cy.js',
    // We don’t need any supportFile for this demo
    supportFile: false,

    setupNodeEvents(on, config) {
      // Hook in the Qase reporter
      require('cypress-qase-reporter/plugin')(on, config);
      return config;
    },
  },

  // Tell Cypress to use the Qase reporter
  reporter: 'cypress-qase-reporter',
  reporterOptions: {
    apiToken: process.env.QASE_API_TOKEN,
    projectCode: 'DEMOUI',    // ← your actual project code
    logging: true,
  },
});
