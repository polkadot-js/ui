// Copyright 2017-2020 @polkadot/ui-keyring authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { TransportDef } from './types';

import Transport from '@ledgerhq/hw-transport';
import LedgerWebUSB from '@ledgerhq/hw-transport-webusb';

const transports: TransportDef[] = [
  // deprecated
  // import LedgerU2F from '@ledgerhq/hw-transport-u2f';
  // {
  //   create: (): Promise<Transport> =>
  //     LedgerU2F.create(),
  //   type: 'u2f'
  // },
  {
    create: (): Promise<Transport> =>
      LedgerWebUSB.create(),
    type: 'webusb'
  }
];

export default transports;
