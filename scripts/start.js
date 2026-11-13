const http = require('http')
const path = require('path')
const serveHandler = require('serve-handler')
const serveConfig = require('../serve.json')
const { handleApiRequest } = require('./api')

const port = process.env.PORT || 8080

// serve-handler resolves `public` against the working directory, so pin it to this repository
const config = { ...serveConfig, public: path.join(__dirname, '..', serveConfig.public) }

// The API shares the app's port, so starting the app is enough for every spec and page
http.createServer(async (req, res) => {
  if (await handleApiRequest(req, res)) {
    return
  }

  return serveHandler(req, res, config)
}).listen(port, () => {
  console.log(`Serving the Kitchen Sink App and its API on http://localhost:${port}`)
})
