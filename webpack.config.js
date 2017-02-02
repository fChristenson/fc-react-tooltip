var path = require('path');

module.exports = {
  context: path.join(__dirname, 'examples'),
  entry: './examples.js',
  output: {
    path: path.join(__dirname, 'examples'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test:    /\.jsx?$/,
        exclude: /node_modules/,
        loader:  'babel-loader',
        query: {
          presets: ['react']
        }
      }
    ]
  }
};