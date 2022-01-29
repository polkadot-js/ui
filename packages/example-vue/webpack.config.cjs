// Copyright 2017-2022 @polkadot/example-vue authors & contributors
// SPDX-License-Identifier: Apache-2.0

const path = require('path');
const { WebpackPluginServe } = require('webpack-plugin-serve');

module.exports = {
  context: __dirname,
  devtool: 'eval-cheap-source-map',
  entry: './src/index.ts',
  mode: 'development',
  module: {
    rules: [
      {
        exclude: /(node_modules)/,
        test: /\.(ts|tsx)$/,
        use: [
          {
            loader: 'babel-loader',
            options: require('../../babel.config.cjs')
          }
        ]
      }
    ]
  },
  output: {
    chunkFilename: '[name].[chunkhash:8].js',
    filename: '[name].js',
    globalObject: '(typeof self !== \'undefined\' ? self : this)',
    path: path.join(__dirname, 'build')
  },
  plugins: [
    new WebpackPluginServe({
      hmr: false, // switch off, Chrome WASM memory leak
      liveReload: false, // explict off, overrides hmr
      port: 8080,
      progress: false, // since we have hmr off, disable
      static: __dirname
    })
  ],
  resolve: {
    alias: {
      '@polkadot/ui-keyring': path.resolve(__dirname, '../ui-keyring/build'),
      '@polkadot/ui-settings': path.resolve(__dirname, '../ui-settings/build'),
      '@polkadot/ui-shared': path.resolve(__dirname, '../ui-shared/build'),
      '@polkadot/vue-identicon': path.resolve(__dirname, '../vue-identicon/build')
    },
    extensions: ['.js', '.ts', '.tsx']
  },
  target: 'web',
  watch: true
};
