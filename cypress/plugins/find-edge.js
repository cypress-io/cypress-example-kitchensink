const execa = require('execa')

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

const findEdgeBrowser = () => {
  const edgePath =
    '/Applications/Microsoft Edge Canary.app/Contents/MacOS/Microsoft Edge Canary'

  return execa(edgePath, ['--version']).then((result) => {
    // something like "Microsoft Edge 80.0.328.2 Canary"

    const [, version] = /Microsoft Edge (\d+\.\d+\.\d+\.\d+)/.exec(
      result.stdout
    )
    const majorVersion = parseFloat(version.split('.')[0])

    return {
      name: 'Edge Beta',
      family: 'chrome',
      displayName: 'Edge Beta',
      version,
      path: edgePath,
      majorVersion,
    }
  })
}

module.exports = findEdgeBrowser
