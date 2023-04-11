const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:8080',
    // baseUrl:'https://example.cypress.io/'//For Lambda tests
  },
  env: {
    "navBarText":"cypress.io",
    "commands":"Commands"
  },
})