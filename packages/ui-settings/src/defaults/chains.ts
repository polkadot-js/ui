// Copyright 2017-2021 @polkadot/ui-settings authors & contributors
// SPDX-License-Identifier: Apache-2.0

import known from '@polkadot/networks';

type ChainDef = string[];

interface NetDef {
  genesisHash: string[];
  network: string;
}

const chains: Record <string, ChainDef> = known
  .map(({ genesisHash, network }) => ({ genesisHash, network }))
  .filter((def): def is NetDef => def.genesisHash.length > 0 && !!def.network)
  .reduce((chains, { genesisHash, network }) => ({ ...chains, [network]: genesisHash }), {});

export { chains };
