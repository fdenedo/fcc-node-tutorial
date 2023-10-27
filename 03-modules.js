// Modules
// CommonJS - every file in Node is a module by default

// Note, needs 4-names and 5-utils
const names = require('./4-names'); // could destructure to { const {john, peter} }
const sayHi = require('./5-utils')
const allTheStuff = require('./6-alternative-module')

// can just call directly here, invoking the module
// it gets wrapped in a function
require('./7-mind-grenade')

console.log(allTheStuff);

sayHi(names.john);
sayHi(names.peter);
