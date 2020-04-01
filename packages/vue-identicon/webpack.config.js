// Copyright 2017-2020 @polkadot/react-identicon authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

const ENV = process.env.NODE_ENV || 'development';
const isProd = ENV === 'production';

module.exports = {
  context: __dirname,
  devtool: isProd ? 'source-map' : 'cheap-eval-source-map',
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
    new VueLoaderPlugin()
  ],
  resolve: {
    alias: {
      '@polkadot/ui-shared': path.resolve(__dirname, '../ui-shared/build')
    },
    extensions: ['.js', '.ts']
  }
};
