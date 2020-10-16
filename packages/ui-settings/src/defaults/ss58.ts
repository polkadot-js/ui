// Copyright 2017-2020 @polkadot/ui-settings authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { Option } from '../types';
import { available } from '@polkadot/networks';

export const PREFIX_DEFAULT = -1;

const defaultNetwork: Option = {
  info: 'default',
  text: 'Default for the connected node',
  value: -1
};

const networks = available.map(({ displayName, network, prefix }) => ({
  info: network,
  text: displayName,
  value: prefix
}));

export const PREFIXES: Option[] = [defaultNetwork, ...networks];
