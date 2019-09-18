// Copyright 2017-2019 @polkadot/ui-keyring authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { LedgerTypes, TransportDef } from './types';

import Transport from '@ledgerhq/hw-transport';
import { assert } from '@polkadot/util';

import allNode from './transportsNode';
import allWeb from './transportsWeb';

const transports = allNode.concat(allWeb);

export default function createTransport (requestedType: LedgerTypes): Promise<Transport> {
  const def = transports.find(({ type }): boolean => type === requestedType);

  assert(def, `Unable to find a transport for ${requestedType}`);

  // we have checked for undefined in the assert
  return (def as TransportDef).create();
}
