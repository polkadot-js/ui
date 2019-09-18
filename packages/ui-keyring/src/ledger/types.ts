// Copyright 2017-2019 @polkadot/ui-keyring authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import Transport from '@ledgerhq/hw-transport';

export type LedgerTypes = 'hid' | 'u2f' | 'webusb';

export interface LedgerAddress {
  address: string;
  publicKey: string;
}

export interface LedgerSignature {
  signature: string;
}

export interface LedgerVersion {
  isLocked: boolean;
  isTestMode: boolean;
  version: [number, number, number];
}

export interface TransportDef {
  create (): Promise<Transport>;
  type: LedgerTypes;
}
