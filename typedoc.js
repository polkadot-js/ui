// Copyright 2017-2020 @polkadot/ui authors & contributors
// SPDX-License-Identifier: Apache-2.0

module.exports = {
  exclude: '**/*+(index|e2e|spec).ts',
  excludeExternals: true,
  excludeNotExported: true,
  excludePrivate: true,
  excludeProtected: true,
  hideGenerator: true,
  includeDeclarations: false,
  module: 'commonjs',
  moduleResolution: 'node',
  name: 'Polkadot JS UI libraries',
  out: 'docs',
  stripInternal: 'true',
  theme: 'markdown'
};
