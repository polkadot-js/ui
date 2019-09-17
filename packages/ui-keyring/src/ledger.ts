/* eslint-disable @typescript-eslint/camelcase */
// Copyright 2017-2019 @polkadot/ui-keyring authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import Transport from '@ledgerhq/hw-transport';
import LedgerHid from '@ledgerhq/hw-transport-node-hid';
import LedgerU2F from '@ledgerhq/hw-transport-u2f';
import LedgerWebUSB from '@ledgerhq/hw-transport-webusb';
import LedgerApp, { ResponseBase } from 'ledger-polkadot';
import { assert, bufferToU8a, u8aToBuffer, u8aToHex } from '@polkadot/util';

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
  major: number;
  minor: number;
  patch: number;
}

export const LEDGER_DEFAULT_ACCOUNT = 0x80000000;

export const LEDGER_DEFAULT_CHANGE = 0x80000000;

export const LEDGER_DEFAULT_INDEX = 0x80000000;

const SUCCESS_CODE = 0x9000;

// A very basic wrapper for a ledger app -
//  - it connects automatically, creating an app as required
//  - Promises return errors (instead of wrapper errors)
export default class Ledger {
  private app: LedgerApp | null = null;
  private type: LedgerTypes;

  public constructor (type: LedgerTypes) {
    assert(['hid', 'u2f', 'webusb'].includes(type), `Unsupported transport ${type}`);

    this.type = type;
  }

  private async getApp (): Promise<LedgerApp> {
    if (!this.app) {
      let transport: Transport;

      if (this.type === 'hid') {
        transport = await LedgerHid.create();
      } else if (this.type === 'u2f') {
        transport = await LedgerU2F.create();
      } else if (this.type === 'webusb') {
        transport = await LedgerWebUSB.create();
      } else {
        throw new Error(`Unable to create app for ${this.type}`);
      }

      this.app = new LedgerApp(transport);
    }

    return this.app;
  }

  private async withApp <T> (fn: (app: LedgerApp) => Promise<T>): Promise<T> {
    try {
      const app = await this.getApp();

      return await fn(app);
    } catch (error) {
      this.app = null;

      throw error;
    }
  }

  private async wrapError <T extends ResponseBase> (promise: Promise<T>): Promise<T> {
    const result = await promise;

    if (result.return_code !== SUCCESS_CODE) {
      throw new Error(result.error_message);
    }

    return result;
  }

  public async getAddress (confirm = false, account = LEDGER_DEFAULT_ACCOUNT, change = LEDGER_DEFAULT_CHANGE, addressIndex = LEDGER_DEFAULT_INDEX): Promise<LedgerAddress> {
    return this.withApp(async (app: LedgerApp): Promise<LedgerAddress> => {
      const { address, pubKey } = await this.wrapError(app.getAddress(account, change, addressIndex, confirm));

      return {
        address,
        publicKey: `0x${pubKey}`
      };
    });
  }

  public async getVersion (): Promise<LedgerVersion> {
    return this.withApp(async (app: LedgerApp): Promise<LedgerVersion> => {
      const { device_locked, major, minor, patch, test_mode } = await this.wrapError(app.getVersion());

      return {
        isLocked: device_locked,
        isTestMode: test_mode,
        major,
        minor,
        patch
      };
    });
  }

  public async sign (message: Uint8Array, account = LEDGER_DEFAULT_ACCOUNT, change = LEDGER_DEFAULT_CHANGE, addressIndex = LEDGER_DEFAULT_INDEX): Promise<LedgerSignature> {
    return this.withApp(async (app: LedgerApp): Promise<LedgerSignature> => {
      const buffer = u8aToBuffer(message);
      const { signature } = await this.wrapError(app.sign(account, change, addressIndex, buffer));

      return {
        signature: u8aToHex(bufferToU8a(signature))
      };
    });
  }
}
