const { readFileSync, writeFileSync } = require('fs');

console.log('start');
// BLOCKING
// If 1 user calls these, no-one else will be able to do anything
const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');

console.log(first, second);

// BLOCKING - must finish before anything else is done
writeFileSync(
    './content/result-sync.txt', 
    `Here is the result: ${first}, ${second}`,
    { flag: 'a' } // Optional, a = append
);

console.log('done with this task');
console.log('starting the next one');