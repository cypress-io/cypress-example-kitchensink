const { spawn } = require('child_process')

const groupName = process.env.STAGE_NAME ? process.env.STAGE_NAME : 'tests'
const timeout = process.env.TIMEOUT_SECONDS ? parseFloat(process.env.TIMEOUT_SECONDS) : 300

console.log('group name: %s', groupName)
console.log('timeout: %d seconds', timeout)

const options = {
  stdio: 'inherit',
}
const c = spawn('./node_modules/.bin/cypress', ['run', '--record', '--parallel', '--group', groupName], options)
c.on('close', () => {
  console.log('cypress run closed')
  process.exit(0)
})
c.on('error', (err) => {
  console.log('error', err)
  process.exit(1)
})

setTimeout(() => {
  console.log('hmm, TIMED OUT')
  console.log('exitting')
  c.kill('SIGKILL')
  process.exit(0)
}, timeout*1000)

