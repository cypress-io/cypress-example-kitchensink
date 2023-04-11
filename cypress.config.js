const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:8080',
  },
  env: {
    "navBarText":"cypress.io",
    "commands":"Commands"
  },
})