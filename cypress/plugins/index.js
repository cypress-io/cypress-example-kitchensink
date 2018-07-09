// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

const execa = require('execa')

const printAllProcs = () => {
  return (
    execa('ps', ['-ax'])
    .then((result) => {
      /* eslint-disable no-console */
      console.log('')
      console.log('All running processes')
      console.log('')
      console.log(result.stdout)
      console.log('')
      console.log('end')
      console.log('')
      /* eslint-enable no-console */
      return null
    })
  )
}

// eslint-disable-next-line no-unused-vars
module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
  on('task', {
    'print-all-procs': printAllProcs,
  })
}
