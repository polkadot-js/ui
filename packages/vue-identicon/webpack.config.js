/* eslint-disable @typescript-eslint/no-var-requires */
// Copyright 2017-2019 @polkadot/react-identicon authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

const ENV = process.env.NODE_ENV || 'development';
const isProd = ENV === 'production';

module.exports = {
  context: __dirname,
  devtool: isProd ? 'source-map' : 'cheap-eval-source-map',
  entry: './src/demo.js',
  mode: ENV,
  output: {
    path: path.join(__dirname, 'build),
    filename: './demo.js'
  },
  resolve: {
    alias: {
      '@polkadot/ui-shared': path.resolve(__dirname, '../ui-shared/src')
    },
    extensions: ['.js', '.ts']
  },
  module: {
    rules: [
      {
        test: /\.(js|ts)$/,
        exclude: /(node_modules)/,
        use: [
          'babel-loader'
        ]
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin()
  ]
};
