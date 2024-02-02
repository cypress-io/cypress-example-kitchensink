// install.mjs
//
// See "CI server and Docker" in
// https://typicode.github.io/husky/how-to.html#ci-server-and-docker
// to avoid permissions issue with npm ci in a Docker container
//
const isCi = process.env.CI !== undefined
if (!isCi) {
  const husky = (await import('husky')).default
  console.log(husky())
}
