// Copyright 2017-2022 @polkadot/ui authors & contributors
// SPDX-License-Identifier: Apache-2.0

import path from 'path';

import { createBundle } from '@polkadot/dev/config/rollup';

const pkgs = [
  '@polkadot/react-identicon',
  '@polkadot/react-qr',
  '@polkadot/ui-keyring',
  '@polkadot/ui-settings',
  '@polkadot/vue-identicon'
];

const external = [
  ...pkgs,
  '@polkadot/hw-ledger',
  '@polkadot/keyring',
  '@polkadot/util',
  '@polkadot/util-crypto',
  'react',
  'react-dom',
  'vue',
  'vue-router'
];

const globals = {
  react: 'React',
  'react-dom': 'ReactDOM',
  vue: 'Vue',
  'vue-router': 'VueRouter'
};

const entries = ['ui-shared'].reduce((all, p) => ({
  ...all,
  [`@polkadot/${p}`]: path.resolve(process.cwd(), `packages/${p}/build`)
}), {
  // re-exported in @polkadot/util-crypto, map directly
  '@polkadot/networks': '@polkadot/util-crypto'
});

const overrides = {};

export default pkgs.map((pkg) => {
  const override = (overrides[pkg] || {});

  return createBundle({
    external,
    globals,
    pkg,
    ...override,
    entries: {
      ...entries,
      ...(override.entries || {})
    }
  });
});
