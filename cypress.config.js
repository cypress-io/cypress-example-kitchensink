const fs = require('fs')
const os = require('os')

module.exports = {
  projectId: '4b7344',
  allowCypressEnv: false,
  e2e: {
    setupNodeEvents (on, config) {
      on('task', {
        // a task can return any serializable value back to the browser
        echo (message) {
          return message
        },
        // tasks run in Node, so they can use any Node API
        readConfigFile () {
          return fs.readFileSync(config.configFile, 'utf8')
        },
        osInfo () {
          return { platform: os.platform(), arch: os.arch() }
        },
      })
    },
  },
}
