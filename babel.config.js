// Copyright 2017-2020 @polkadot/ui authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

const base = require('@polkadot/dev/config/babel');

module.exports = Object.keys(base).reduce((config, key) => {
  config[key] = base[key];

  if (key === 'plugins') {
    config[key] = config[key].concat([
      'transform-vue-template'
    ]);
  }

  return config;
}, {});
