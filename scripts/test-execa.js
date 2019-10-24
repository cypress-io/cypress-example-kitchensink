const execa = require('execa')

execa('echo Hello', {
  shell: true,
}).then(console.log)
