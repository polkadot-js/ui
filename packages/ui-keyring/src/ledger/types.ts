// Copyright 2017-2020 @polkadot/ui-keyring authors & contributors
// SPDX-License-Identifier: Apache-2.0

import Transport from '@ledgerhq/hw-transport';

export type LedgerTypes = 'hid' | 'u2f' | 'webusb';

export interface AccountOptions {
  account: number;
  addressIndex: number;
  change: number;
}

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
