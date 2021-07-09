// Copyright 2017-2021 @polkadot/ui authors & contributors
// SPDX-License-Identifier: Apache-2.0

import path from 'path';

import { createBundle } from '@polkadot/dev/config/rollup';

const pkgs = [
  '@polkadot/react-identicon',
  '@polkadot/react-qr',
  '@polkadot/ui-keyring',
  '@polkadot/ui-settings',
  '@polkadot/ui-shared',
  '@polkadot/vue-identicon'
];

const external = [
  ...pkgs,
  '@polkadot/keyring',
  '@polkadot/util',
  '@polkadot/util-crypto',
  'react',
  'react-dom',
  'vue'
];

const entries = ['api-derive', 'rpc-core', 'rpc-provider', 'types-known'].reduce((all, p) => ({
  ...all,
  [`@polkadot/${p}`]: path.resolve(process.cwd(), `packages/${p}/build/bundle.js`)
}), {
  // re-exported in @polkadot/util-crypto, map directly
  '@polkadot/networks': '@polkadot/util-crypto'
});

const overrides = {};

export default pkgs.map((pkg) => {
  const override = (overrides[pkg] || {});

  return createBundle({
    external,
    pkg,
    ...override,
    entries: {
      ...entries,
      ...(override.entries || {})
    }
  });
});
