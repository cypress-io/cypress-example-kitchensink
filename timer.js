const { spawn } = require('child_process')

const options = {
  stdio: 'inherit',
}
const c = spawn('./node_modules/.bin/cypress', ['run', '--record', '--parallel'], options)
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
}, 300*1000)

