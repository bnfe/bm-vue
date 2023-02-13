const path = require('path');
const webpack = require('webpack');
const baseWebpackConfig = require('./webpack.base.conf');
const merge = require('webpack-merge');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const version = require('../package.json').version;

delete baseWebpackConfig.entry;
delete baseWebpackConfig.output;

module.exports = merge(baseWebpackConfig, {
  mode: 'production',
  entry: {
    'bm-vue.umd.js': path.join(__dirname, '../src/index.js'),
  },
  externals: {
    vue: {
      root: 'Vue',
      commonjs: 'vue',
      commonjs2: 'vue',
      amd: 'vue',
    },
    lodash: {
      commonjs: 'lodash',
      commonjs2: 'lodash',
      amd: 'lodash',
      root: '_',
    },
  },
  output: {
    path: path.resolve(__dirname, '../release'),
    filename: '[name]',
    library: 'bm-vue',
    libraryTarget: 'umd',
  },
  plugins: [
    new VueLoaderPlugin(),
  ],
});
