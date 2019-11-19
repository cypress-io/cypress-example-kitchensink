const findEdgeBrowser = require('./find-edge')
const findBraveBrowser = require('./find-brave')

// eslint-disable-next-line no-unused-vars
module.exports = (on, config) => {
  return Promise.all([findEdgeBrowser(), findBraveBrowser()]).then(([edge, brave]) => {
    return {
      browsers: config.browsers.concat(edge, brave),
    }
  })
}
