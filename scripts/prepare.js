// prepare.js
//
// See Disable husky in CI/Docker/Prod
// https://typicode.github.io/husky/#/?id=disable-husky-in-cidockerprod
// to avoid permissions issue with npm ci in a Docker container
//
const isCi = process.env.CI !== undefined
if (!isCi) {
  require('husky').install()
}
