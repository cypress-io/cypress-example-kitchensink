module.exports = {
  projectId: '4b7344',
  e2e: {
    setupNodeEvents (on, config) {
      // used by the cy.task() example in misc.cy.js
      on('task', {
        nodeVersion () {
          return process.version
        },
        sum ({ a, b }) {
          return a + b
        },
      })

      // Projects scaffolded from these specs don't register the tasks above,
      // so the cy.task() example checks this flag before calling them
      config.expose = { ...config.expose, kitchensinkTasks: true }

      return config
    },
  },
}
