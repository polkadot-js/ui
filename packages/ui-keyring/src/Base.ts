// Copyright 2017-2019 @polkadot/ui-keyring authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Prefix } from '@polkadot/keyring/address/types';
import { KeyringInstance, KeyringPair } from '@polkadot/keyring/types';
import { AddressSubject } from './observable/types';
import { KeyringOptions, KeyringStore } from './types';

import testKeyring from '@polkadot/keyring/testing';
import { isBoolean, isString } from '@polkadot/util';

import accounts from './observable/accounts';
import addresses from './observable/addresses';
import contracts from './observable/contracts';
import env from './observable/development';
import LocalStorageStore from './stores/LocalStorage';
import { MAX_PASS_LEN } from './defaults';

export default class Base {
  private _account: AddressSubject;
  private _address: AddressSubject;
  private _contract: AddressSubject;
  private _keyring?: KeyringInstance;
  private _prefix?: Prefix;
  protected _genesisHash?: string;
  protected _store: KeyringStore;

  constructor () {
    this._account = accounts;
    this._address = addresses;
    this._contract = contracts;
    this._keyring = undefined;
    this._store = null as any;
  }

  get account () {
    return this._account;
  }

  get address () {
    return this._address;
  }

  get contract () {
    return this._contract;
  }

  get keyring (): KeyringInstance {
    if (this._keyring) {
      return this._keyring;
    }

    throw new Error(`Keyring should be initialised via 'loadAll' before use`);
  }

  get genesisHash () {
    return this._genesisHash;
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
    const accountsValue = this.account.subject.getValue();
    const addressesValue = this.address.subject.getValue();
    const contractsValue = this.contract.subject.getValue();
    const address = isString(_address)
      ? _address
      : this.encodeAddress(_address);

    return !accountsValue[address] && !addressesValue[address] && !contractsValue[address];
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
    this._genesisHash = options.genesisHash && options.genesisHash.toHex();
    this._store = options.store || new LocalStorageStore();

    this.addAccountPairs();
  }

  protected addAccountPairs (): void {
    this.keyring
      .getPairs()
      .forEach((pair: KeyringPair) => {
        const address = pair.address();

        this.account.add(this._store, address, {
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
