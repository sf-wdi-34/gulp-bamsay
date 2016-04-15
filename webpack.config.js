const path = require('path');

const PATHS = {
  js: path.join(__dirname, 'js'),
  build: path.join(__dirname, 'build')
};

module.exports = {
  // Entry accepts a path or an object of entries. We'll be using the
  // latter form given it's convenient with more complex configurations.
  entry: {
    js: PATHS.js
  },
  output: {
    path: PATHS.build,
    filename: 'bundle.js'
  }
};
