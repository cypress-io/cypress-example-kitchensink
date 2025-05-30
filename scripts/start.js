const { execSync } = require('child_process')

const port = process.env.PORT || 8080
let cmd = `serve --listen ${port} --no-request-logging`

if (process.env.CI) cmd += ' --no-clipboard'

if (process.argv.length > 2) cmd += ` ${process.argv.slice(2).join(' ')}`

console.log(`Running "${cmd}"...`)

execSync(cmd, { stdio: 'inherit' })
