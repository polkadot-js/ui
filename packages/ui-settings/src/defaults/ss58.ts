// Copyright 2017-2020 @polkadot/ui-settings authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Option } from '../types';

export const PREFIX_DEFAULT = -1;

export const PREFIXES: Option[] = [
  {
    info: 'default',
    text: 'Default for the connected node',
    value: -1
  },
  // keep as first (well, after default)
  {
    info: 'substrate',
    text: 'Substrate (generic)',
    value: 42
  },
  // all in ascending order based on value
  {
    info: 'polkadot',
    text: 'Polkadot (live)',
    value: 0
  },
  {
    info: 'kusama',
    text: 'Kusama (canary)',
    value: 2
  },
  {
    info: 'edgeware',
    text: 'Edgeware (live)',
    value: 7
  }
];
