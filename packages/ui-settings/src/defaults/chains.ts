// Copyright 2017-2022 @polkadot/ui-settings authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { selectableNetworks } from '@polkadot/networks';
import { objectSpread } from '@polkadot/util';

type ChainDef = string[];

const chains: Record <string, ChainDef> = selectableNetworks
  .filter((n) => n.genesisHash.length)
  .reduce((chains, { genesisHash, network }) => objectSpread(chains, { [network]: genesisHash }), {});

export { chains };
