const path = require('path')
module.exports = {
  mode: 'development',
  context: __dirname,
  entry: './assets/js/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
      }
    ]
  }
}