// Local
const secret = 'SUPER SECRET'

// Share
const john = 'John';
const peter = 'Peter';

// Export the things to share ONLY (multiple values)
module.exports = {
    john,
    peter
}

// Exports is an object
// console.log(module);
/*
Module {
  id: '.',
  path: 'D:\\Users\\Fure\\Documents\\NodeJS Practice\\fcc-tutorial',
  exports: { john: 'John', peter: 'Peter' },
  filename: 'D:\\Users\\Fure\\Documents\\NodeJS Practice\\fcc-tutorial\\4-names.js',
  loaded: false,
  children: [],
  paths: [
    'D:\\Users\\Fure\\Documents\\NodeJS Practice\\fcc-tutorial\\node_modules',
    'D:\\Users\\Fure\\Documents\\NodeJS Practice\\node_modules',
    'D:\\Users\\Fure\\Documents\\node_modules',
    'D:\\Users\\Fure\\node_modules',
    'D:\\Users\\node_modules',
    'D:\\node_modules'
  ]
}
*/