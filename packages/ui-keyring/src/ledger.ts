// Copyright 2017-2019 @polkadot/ui-keyring authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import Transport from '@ledgerhq/hw-transport';
import LedgerU2F from '@ledgerhq/hw-transport-u2f';
import LedgerWebUSB from '@ledgerhq/hw-transport-webusb';
import LedgerApp from 'ledger-polkadot';

export async function openLedger (type: 'u2f' | 'webusb'): Promise<LedgerApp> {
  let transport: Transport;

  if (type === 'u2f') {
    transport = await LedgerU2F.create(7500);
  } else if (type === 'webusb') {
    transport = await LedgerWebUSB.create();
  } else {
    throw new Error(`Unsupported transport ${type}`);
  }

  return new LedgerApp(transport);
}
