const path = require('path');

module.exports = {
  entry: './scroll-animate.esm.js',
  output: {
    filename: 'scroll-animate.js',
    path: path.resolve(__dirname, ''),
  },
};