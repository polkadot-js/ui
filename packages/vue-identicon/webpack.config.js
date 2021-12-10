// Copyright 2017-2021 @polkadot/react-identicon authors & contributors
// SPDX-License-Identifier: Apache-2.0

const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const webpack = require('webpack');
const ENV = process.env.NODE_ENV || 'development';
const isProd = ENV === 'production';

module.exports = {
  context: __dirname,
  devtool: isProd ? 'source-map' : 'eval-cheap-source-map',
  entry: './src/Demo.ts',
  mode: ENV,
  module: {
    rules: [
      {
        exclude: /(node_modules)/,
        test: /\.(js|ts)$/,
        use: [
          'babel-loader'
        ]
      },
      {
        loader: 'vue-loader',
        test: /\.vue$/
      }
    ]
  },
  output: {
    filename: './demo.js',
    path: path.join(__dirname, 'build')
  },
  plugins: [
    new VueLoaderPlugin(),
    new webpack.ProvidePlugin({
      Buffer: ['buffer', 'Buffer']
    }),
    new webpack.ProvidePlugin({
      process: 'process/browser'
    })
  ],
  resolve: {
    alias: {
      '@polkadot/ui-shared': path.resolve(__dirname, '../ui-shared/build'),
      'process/browser': require.resolve('process/browser')
    },
    extensions: ['.js', '.ts']
  }
};
