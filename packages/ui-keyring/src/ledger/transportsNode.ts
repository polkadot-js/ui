// Copyright 2017-2019 @polkadot/ui-keyring authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { TransportDef } from './types';

import Transport from '@ledgerhq/hw-transport';
import LedgerHid from '@ledgerhq/hw-transport-node-hid';

const transports: TransportDef[] = [
  {
    create: (): Promise<Transport> =>
      LedgerHid.create(),
    type: 'hid'
  }
];

export default transports;
