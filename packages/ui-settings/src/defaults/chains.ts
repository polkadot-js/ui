// Copyright 2017-2021 @polkadot/ui-settings authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Network } from '@polkadot/networks/types';

import known from '@polkadot/networks';

type ChainDef = string[];

// NOTE This should be fixed by networks 5.7 (also in ss58)
interface NetworkNamed extends Network {
  network: string;
}

const chains: Record <string, ChainDef> = known
  .filter((n): n is NetworkNamed => n.genesisHash.length > 0 && !!n.network)
  .reduce((chains, { genesisHash, network }) => ({ ...chains, [network]: genesisHash }), {});

export { chains };
