function getValues(filename) {
  const index = parseInt(process.env.BUILDKITE_PARALLEL_JOB);
  const n = parseInt(process.env.BUILDKITE_PARALLEL_JOB_COUNT);
  const values = [];
  
  // Node.js File System module
  const fs = require('fs');
  const data = fs.readFileSync(filename, 'utf8');
  const lines = data.split('\n');
  
  for (let line of lines) {
    line = line.trim();
    if (line) {  // Ignore empty lines
      values.push(line);
    }
  }
  
  const result = [];
  for (let i = 0; i < values.length; i++) {
    if (i % n === (index - 1) % n) {
      result.push(values[i]);
    }
  }
  
  return result;
}
const filename = "/app/redefine/redefine_specs.txt";
const result = getValues(filename);
console.log();
console.log(`"${result.join(',')}"`);
