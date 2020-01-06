/* eslint-disable @typescript-eslint/no-var-requires */
// Copyright 2017-2020 @polkadot/example-vue authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const { WebpackPluginServe } = require('webpack-plugin-serve');

module.exports = {
  context: __dirname,
  devtool: 'cheap-eval-source-map',
  entry: './src/index.ts',
  mode: 'development',
  output: {
    chunkFilename: '[name].[chunkhash:8].js',
    globalObject: '(typeof self !== \'undefined\' ? self : this)',
    filename: '[name].js',
    path: path.join(__dirname, 'build')
  },
  resolve: {
    alias: {
      '@polkadot/ui-keyring': path.resolve(__dirname, '../ui-keyring/build'),
      '@polkadot/ui-settings': path.resolve(__dirname, '../ui-settings/build'),
      '@polkadot/ui-shared': path.resolve(__dirname, '../ui-shared/build'),
      '@polkadot/vue-identicon': path.resolve(__dirname, '../vue-identicon/build')
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
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
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
    }),
    new VueLoaderPlugin()
  ],
  watch: true
};
