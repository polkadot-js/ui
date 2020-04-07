// Copyright 2017-2020 @polkadot/ui authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

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
