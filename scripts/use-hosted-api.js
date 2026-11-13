// Locally, the specs and app call the stand-in API that `npm start` serves (scripts/api.js).
// The deployed site and the published package run with no such server, so before either
// deploys, this points every API call at the hosted jsonplaceholder instead. It edits
// app/ and cypress/ in place.
const fs = require('fs')
const path = require('path')

const HOSTED_API = 'https://jsonplaceholder.cypress.io'
const LOCAL_API_URL = /http:\/\/localhost:8080\/(users|comments|posts)\b/g
const LOCAL_APP_ROOT = 'const root = \'\''
const HOSTED_APP_ROOT = `const root = '${HOSTED_API}'`

const repoRoot = path.join(__dirname, '..')
const appScript = path.join(repoRoot, 'app/assets/js/scripts.js')

const filesIn = (dir) => {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const fullPath = path.join(dir, entry.name)

    if (entry.isDirectory()) {
      return filesIn(fullPath)
    }

    return /\.(js|html)$/.test(entry.name) ? [fullPath] : []
  })
}

let changedFiles = 0

for (const file of [...filesIn(path.join(repoRoot, 'app')), ...filesIn(path.join(repoRoot, 'cypress'))]) {
  const original = fs.readFileSync(file, 'utf8')
  let updated = original.replace(LOCAL_API_URL, `${HOSTED_API}/$1`)

  if (file === appScript) {
    // The app requests its own origin locally, so this one has no URL to match
    if (!updated.includes(LOCAL_APP_ROOT) && !updated.includes(HOSTED_APP_ROOT)) {
      throw new Error(`Expected ${path.relative(repoRoot, file)} to contain \`${LOCAL_APP_ROOT}\``)
    }

    updated = updated.replace(LOCAL_APP_ROOT, HOSTED_APP_ROOT)
  }

  if (updated !== original) {
    fs.writeFileSync(file, updated)
    changedFiles++
  }
}

console.log(`Pointed ${changedFiles} files at ${HOSTED_API}`)
