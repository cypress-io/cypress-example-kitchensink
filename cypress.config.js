module.exports = {
  projectId: '4b7344',
  e2e: {
    setupNodeEvents (on, config) {
      // tasks run in Node, outside the browser, for cy.task() in misc.cy.js
      on('task', {
        nodeVersion () {
          return process.version
        },
        sum ({ a, b }) {
          return a + b
        },
      })

      // tells the cy.task() example that the tasks above are registered
      config.expose = { ...config.expose, kitchensinkTasks: true }

      return config
    },
  },
}
