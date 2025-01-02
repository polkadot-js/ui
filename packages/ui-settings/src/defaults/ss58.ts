// Copyright 2017-2025 @polkadot/ui-settings authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Option } from '../types.js';

import { availableNetworks } from '@polkadot/networks';

export const PREFIX_DEFAULT = -1;

const defaultNetwork: Option = {
  info: 'default',
  text: 'Default for the connected node',
  value: -1
};

const networks = availableNetworks.map(({ displayName, network, prefix }) => ({
  info: network,
  text: displayName,
  value: prefix
}));

export const PREFIXES: Option[] = [defaultNetwork, ...networks];
