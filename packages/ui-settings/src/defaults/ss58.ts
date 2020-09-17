// Copyright 2017-2020 @polkadot/ui-settings authors & contributors
// SPDX-License-Identifier: Apache-2.0

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
  },
  {
    info: 'kulupu',
    text: 'Kulupu (live)',
    value: 16
  },
  {
    info: 'subsocial',
    text: 'Subsocial (live)',
    value: 28
  }
];
