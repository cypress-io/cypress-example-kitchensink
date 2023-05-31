const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
  async setupNodeEvents(on, config) {
      // config = await require("./Redefine.js").redefinePlugin(on, config);
      console.log("cypress spec pattern: ", config.specPattern)
      return config;
    }
  }
});
