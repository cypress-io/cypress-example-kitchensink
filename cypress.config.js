// Branch 2 Commit 2

module.exports = {
  projectId: 'zz3qkj', // development 29a47616-1201-4a50-b709-32e8e8269eb7
  // projectId: 'tri6ny', // staging 045a7542-7947-4024-853e-2857c77d7565
  experimentalWebKitSupport: true,
  e2e: {
    setupNodeEvents: (on, config) => {
      on('before:spec', (spec) => {
      })
    },
  },
}
