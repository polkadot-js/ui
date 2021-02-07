// Copyright 2017-2021 @polkadot/ui-settings authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Network } from '@polkadot/networks/types';
import type { Option } from '../types';

import { available } from '@polkadot/networks';

// NOTE This should be fixed by networks 5.7 (also in chains)
interface NetworkNamed extends Network {
  network: string;
}

export const PREFIX_DEFAULT = -1;

const defaultNetwork: Option = {
  info: 'default',
  text: 'Default for the connected node',
  value: -1
};

const networks = available
  .filter((n): n is NetworkNamed => !!n.network)
  .map(({ displayName, network, prefix }) => ({ info: network, text: displayName, value: prefix }));

export const PREFIXES: Option[] = [defaultNetwork, ...networks];
