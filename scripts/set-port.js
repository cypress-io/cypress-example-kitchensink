/* eslint-env node */
/* eslint-disable no-console */
const { readFileSync, writeFileSync } = require('fs')

// On some CIs like Heroku CI the host assigns random PORT and
// does not allow using default port 8080.
// So we need to replace hardcoded port 8080 with process.env.PORT
// in all our example specs and then run the tests

// if doing it locally, you can change back to the original port
// with "git checkout cypress/integration/examples" command

if (!process.env.PORT) {
  console.log('PORT environment variable is not set, nothing to do')
  process.exit(0)
}

const input = 'localhost:8080'
const inputRegex = new RegExp(input, 'g')
const target = `localhost:${process.env.PORT}`
console.log('replacing "%s" with "%s" in all spec files', input, target)

const getSpecFilenames = () => {
  const globby = require('globby')
  return globby(['cypress/integration/**/*.spec.js'])
}

const replacePort = (filename) => {
  const text = readFileSync(filename, 'utf8')
  const replaced = text.replace(inputRegex, target)
  writeFileSync(filename, replaced, 'utf8')
}

getSpecFilenames()
  .then((filenames) => {
    filenames.map(replacePort)
  })
  .catch((e) => {
    console.error(e.message)
    process.exit(1)
  })

