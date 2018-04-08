const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');

const config = {
  // Tell webpack the root file of our
  // client application
  entry: './src/client/client.js',

  // Tell webpack where to put the output file
  // that is generated
  // public folder 是由 webpack 動態產生
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  }
};

module.exports = merge(baseConfig, config);
