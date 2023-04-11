const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://example.cypress.io',
  },
  env: {
    "navBarText":"cypress.io",
    "commands":"Commands"
  },
})