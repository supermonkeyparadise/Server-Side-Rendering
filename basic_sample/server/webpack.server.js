const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');
const webpackNodeExternals = require('webpack-node-externals');

const config = {
  // Infom webpack that we're building a bundle
  // for nodeJS, rather than for the browser
  target: 'node',

  // Tell webpack the root file of our
  // server application
  entry: './src/index.js',

  // Tell webpack where to put the output file
  // that is generated
  // build folder 是由 webpack 動態產生
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  },

  // 跟 webpack 說，不要把已經存在於 node_modules folder 下的 js lib，copy 一份到 bundle.js
  externals: [webpackNodeExternals()]
};

module.exports = merge(baseConfig, config);
