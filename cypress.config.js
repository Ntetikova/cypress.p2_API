const { defineConfig } = require("cypress");

module.exports = defineConfig({
    projectId: "rjzxrx",
  
  e2e: {
    supportFile: false,
    baseUrl: "https://petstore.swagger.io/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});