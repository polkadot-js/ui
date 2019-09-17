// Copyright 2017-2019 @polkadot/ui-keyring authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import Transport from '@ledgerhq/hw-transport';
import LedgerU2F from '@ledgerhq/hw-transport-u2f';
import LedgerWebUSB from '@ledgerhq/hw-transport-webusb';
import LedgerApp, { ResponseBase } from 'ledger-polkadot';

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
  major: number;
  minor: number;
  patch: number;
}

const DEFAULT_ACCOUNT = 0x80000000;
const DEFAULT_CHANGE = 0x80000000;
const DEFAULT_INDEX = 0x80000005;
const SUCCESS_CODE = 0x9000;

export class Ledger {
  private app: LedgerApp;

  constructor (transport: Transport) {
    this.app = new LedgerApp(transport);
  }

  private throwError (result: ResponseBase): void {
    if (result.return_code !== SUCCESS_CODE) {
      throw new Error(result.error_message);
    }
  }

  public async getAddress (confirm = false, account = DEFAULT_ACCOUNT, change = DEFAULT_CHANGE, addressIndex = DEFAULT_INDEX): Promise<LedgerAddress> {
    const result = await this.app.getAddress(account, change, addressIndex, confirm);

    this.throwError(result);

    return {
      address: result.address,
      publicKey: `0x${result.pubKey}`
    };
  }

  public async getVersion (): Promise<LedgerVersion> {
    const result = await this.app.getVersion();

    this.throwError(result);

    return {
      isLocked: result.device_locked,
      isTestMode: result.test_mode,
      major: result.major,
      minor: result.minor,
      patch: result.patch
    };
  }

  public async sign (message: Uint8Array, account = DEFAULT_ACCOUNT, change = DEFAULT_CHANGE, addressIndex = DEFAULT_INDEX): Promise<LedgerSignature> {
    const result = await this.app.sign(account, change, addressIndex, message);

    this.throwError(result);

    return {
      signature: `0x${result.signature}`
    };
  }
}

export async function openLedger (type: 'u2f' | 'webusb'): Promise<Ledger> {
  let transport: Transport;

  if (type === 'u2f') {
    transport = await LedgerU2F.create(7500);
  } else if (type === 'webusb') {
    transport = await LedgerWebUSB.create();
  } else {
    throw new Error(`Unsupported transport ${type}`);
  }

  return new Ledger(transport);
}
