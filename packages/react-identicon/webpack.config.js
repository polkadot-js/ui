// Copyright 2017-2019 @polkadot/react-identicon authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

const ENV = process.env.NODE_ENV || 'development';
const isProd = ENV === 'production';

module.exports = {
  context: __dirname,
  devtool: isProd ? 'source-map' : 'cheap-eval-source-map',
  entry: './src/Demo.tsx',
  mode: ENV,
  output: {
    path: __dirname,
    filename: './demo.js'
  },
  resolve: {
    alias: {
      '@polkadot/ui-settings': path.resolve(__dirname, '../ui-settings/build'),
      '@polkadot/ui-shared': path.resolve(__dirname, '../ui-shared/build')
    },
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  },
  module: {
    rules: [
      {
        test: /\.(js|ts|tsx)$/,
        exclude: /(node_modules)/,
        use: [
          'babel-loader'
        ]
      }
    ]
  },
  plugins: []
};
