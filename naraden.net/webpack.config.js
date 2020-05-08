const path = require('path')
module.exports = {
  mode: 'development',
  entry: './src/js/common.js',
  output: {
    filename: 'common.js',
    path: path.join(__dirname, 'dist/js')
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader'
      }
    }]
  }
}
