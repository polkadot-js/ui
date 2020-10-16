// Copyright 2017-2020 @polkadot/ui-settings authors & contributors
// SPDX-License-Identifier: Apache-2.0

import known from '@polkadot/networks';

type ChainDef = string[];

const chains: Record <string, ChainDef> = known
  .filter(({ genesisHash }) => genesisHash.length > 1)
  .reduce((chains, { genesisHash, network }) => ({ ...chains, [network]: genesisHash }), {});

export default chains;
