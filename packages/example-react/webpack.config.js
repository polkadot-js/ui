/* eslint-disable @typescript-eslint/no-var-requires */
// Copyright 2017-2019 @polkadot/example-react authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

const path = require('path');
const { WebpackPluginServe } = require('webpack-plugin-serve');

module.exports = {
  context: __dirname,
  devtool: 'cheap-eval-source-map',
  entry: './src/index.tsx',
  mode: 'development',
  output: {
    chunkFilename: '[name].[chunkhash:8].js',
    globalObject: '(typeof self !== \'undefined\' ? self : this)',
    filename: '[name].js',
    path: path.join(__dirname, 'build')
  },
  resolve: {
    alias: {
      '@polkadot/react-identicon': path.resolve(__dirname, '../react-identicon/src'),
      '@polkadot/ui-keyring': path.resolve(__dirname, '../ui-keyring/src'),
      '@polkadot/ui-settings': path.resolve(__dirname, '../ui-settings/src'),
      '@polkadot/ui-shared': path.resolve(__dirname, '../ui-shared/src')
    },
    extensions: ['.js', '.ts', '.tsx']
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /(node_modules)/,
        use: [
          {
            loader: 'babel-loader',
            options: require('../../babel.config.js')
          }
        ]
      }
    ]
  },
  plugins: [
    new WebpackPluginServe({
      hmr: false, // switch off, Chrome WASM memory leak
      liveReload: false, // explict off, overrides hmr
      progress: false, // since we have hmr off, disable
      port: 8080,
      static: __dirname
    })
  ],
  watch: true
};
