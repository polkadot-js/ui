// Copyright 2017-2025 @polkadot/ui-settings authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { selectableNetworks } from '@polkadot/networks';
import { objectSpread } from '@polkadot/util';

type ChainDef = string[];

export const chains: Record <string, ChainDef> = /*#__PURE__*/ selectableNetworks
  .filter((n) => n.genesisHash.length)
  .reduce((chains, { genesisHash, network }) => objectSpread(chains, { [network]: genesisHash }), {});
