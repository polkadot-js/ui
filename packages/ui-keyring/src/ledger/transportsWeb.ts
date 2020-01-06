// Copyright 2017-2020 @polkadot/ui-keyring authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { TransportDef } from './types';

import Transport from '@ledgerhq/hw-transport';
import LedgerU2F from '@ledgerhq/hw-transport-u2f';
import LedgerWebUSB from '@ledgerhq/hw-transport-webusb';

const transports: TransportDef[] = [
  {
    create: (): Promise<Transport> =>
      LedgerU2F.create(),
    type: 'u2f'
  },
  {
    create: (): Promise<Transport> =>
      LedgerWebUSB.create(),
    type: 'webusb'
  }
];

export default transports;
