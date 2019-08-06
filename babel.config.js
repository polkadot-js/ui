/* eslint-disable @typescript-eslint/no-var-requires */
const base = require('@polkadot/dev-react/config/babel');

module.exports = Object.keys(base).reduce((config, key) => {
  config[key] = base[key];

  if (key === 'plugins') {
    config[key] = config[key].concat([
      'transform-vue-template'
    ]);
  }

  return config;
}, {});
