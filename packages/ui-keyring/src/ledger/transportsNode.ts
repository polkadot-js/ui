// Copyright 2017-2020 @polkadot/ui-keyring authors & contributors
// SPDX-License-Identifier: Apache-2.0

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
