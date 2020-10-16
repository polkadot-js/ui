// Copyright 2017-2020 @polkadot/ui-settings authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { all } from '@polkadot/networks';

type ChainDef = string[];

// Kusama is the only network to have several genesis hashes
const kusamaHashes = all.filter(({ genesisHash }) => genesisHash && genesisHash.length > 1)?.[0].genesisHash;

const chains: Record<string, ChainDef> = (!!kusamaHashes?.length && {
  kusama: kusamaHashes
}) || {};

export default chains;
