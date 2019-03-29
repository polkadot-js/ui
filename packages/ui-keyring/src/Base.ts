// Copyright 2017-2019 @polkadot/ui-keyring authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Prefix } from '@polkadot/keyring/address/types';
import { KeyringInstance, KeyringPair } from '@polkadot/keyring/types';
import { AddressSubject } from './observable/types';
import { KeyringOptions } from './types';

import testKeyring from '@polkadot/keyring/testing';
import { isBoolean, isString } from '@polkadot/util';

import accounts from './observable/accounts';
import addresses from './observable/addresses';
import env from './observable/development';
import { MAX_PASS_LEN } from './defaults';

export default class Base {
  private _accounts: AddressSubject;
  private _addresses: AddressSubject;
  private _keyring?: KeyringInstance;
  private _prefix?: Prefix;

  constructor () {
    this._accounts = accounts;
    this._addresses = addresses;
    this._keyring = undefined;
  }

  get accounts () {
    return this._accounts;
  }

  get addresses () {
    return this._addresses;
  }

  get keyring (): KeyringInstance {
    if (this._keyring) {
      return this._keyring;
    }

    throw new Error(`Keyring should be initialised via 'loadAll' before use`);
  }

  decodeAddress (key: string | Uint8Array, ignoreChecksum?: boolean): Uint8Array {
    return this.keyring.decodeAddress(key, ignoreChecksum);
  }

  encodeAddress (key: string | Uint8Array): string {
    return this.keyring.encodeAddress(key);
  }

  getPair (address: string | Uint8Array): KeyringPair {
    return this.keyring.getPair(address);
  }

  getPairs (): Array<KeyringPair> {
    return this.keyring.getPairs().filter((pair: KeyringPair) =>
      env.isDevelopment() || pair.getMeta().isTesting !== true
    );
  }

  isAvailable (_address: Uint8Array | string): boolean {
    const accountsValue = this.accounts.subject.getValue();
    const addressesValue = this.addresses.subject.getValue();
    const address = isString(_address)
      ? _address
      : this.encodeAddress(_address);

    return !accountsValue[address] && !addressesValue[address];
  }

  isPassValid (password: string): boolean {
    return password.length > 0 && password.length <= MAX_PASS_LEN;
  }

  setAddressPrefix (prefix: number): void {
    this._prefix = prefix as Prefix;
  }

  setDevMode (isDevelopment: boolean): void {
    env.set(isDevelopment);
  }

  protected initKeyring (options: KeyringOptions): void {
    const keyring = testKeyring({ addressPrefix: this._prefix, ...options }, true);

    if (isBoolean(options.isDevelopment)) {
      this.setDevMode(options.isDevelopment);
    }

    this._keyring = keyring;

    this.addAccountPairs();
  }

  protected addAccountPairs (): void {
    this.keyring
      .getPairs()
      .forEach((pair: KeyringPair) => {
        const address = pair.address();

        this.accounts.add(address, {
          address,
          meta: pair.getMeta()
        });
      });
  }

  protected addTimestamp (pair: KeyringPair): void {
    if (!pair.getMeta().whenCreated) {
      pair.setMeta({  whenCreated: Date.now() });
    }
  }
}
