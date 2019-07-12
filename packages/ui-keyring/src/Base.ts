// Copyright 2017-2019 @polkadot/ui-keyring authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { KeyringInstance, KeyringPair } from '@polkadot/keyring/types';
import { Prefix } from '@polkadot/util-crypto/address/types';
import { AddressSubject } from './observable/types';
import { KeyringOptions, KeyringStore } from './types';

import testKeyring from '@polkadot/keyring/testing';
import { isBoolean, isString } from '@polkadot/util';

import accounts from './observable/accounts';
import addresses from './observable/addresses';
import contracts from './observable/contracts';
import env from './observable/development';
import { BrowserStore } from './stores';
import { MAX_PASS_LEN } from './defaults';

export default class Base {
  private _accounts: AddressSubject;

  private _addresses: AddressSubject;

  private _contracts: AddressSubject;

  private _keyring?: KeyringInstance;

  private _prefix?: Prefix;

  protected _genesisHash?: string;

  protected _store!: KeyringStore;

  public constructor () {
    this._accounts = accounts;
    this._addresses = addresses;
    this._contracts = contracts;
    this._keyring = undefined;
  }

  public get accounts (): AddressSubject {
    return this._accounts;
  }

  public get addresses (): AddressSubject {
    return this._addresses;
  }

  public get contracts (): AddressSubject {
    return this._contracts;
  }

  public get keyring (): KeyringInstance {
    if (this._keyring) {
      return this._keyring;
    }

    throw new Error(`Keyring should be initialised via 'loadAll' before use`);
  }

  public get genesisHash (): string | undefined {
    return this._genesisHash;
  }

  public decodeAddress = (key: string | Uint8Array, ignoreChecksum?: boolean): Uint8Array => {
    return this.keyring.decodeAddress(key, ignoreChecksum);
  }

  public encodeAddress = (key: string | Uint8Array): string => {
    return this.keyring.encodeAddress(key);
  }

  public getPair (address: string | Uint8Array): KeyringPair {
    return this.keyring.getPair(address);
  }

  public getPairs (): KeyringPair[] {
    return this.keyring.getPairs().filter((pair: KeyringPair): boolean =>
      env.isDevelopment() || pair.meta.isTesting !== true
    );
  }

  public isAvailable (_address: Uint8Array | string): boolean {
    const accountsValue = this.accounts.subject.getValue();
    const addressesValue = this.addresses.subject.getValue();
    const contractsValue = this.contracts.subject.getValue();
    const address = isString(_address)
      ? _address
      : this.encodeAddress(_address);

    return !accountsValue[address] && !addressesValue[address] && !contractsValue[address];
  }

  public isPassValid (password: string): boolean {
    return password.length > 0 && password.length <= MAX_PASS_LEN;
  }

  public setAddressPrefix (prefix: number): void {
    this._prefix = prefix as Prefix;
  }

  public setDevMode (isDevelopment: boolean): void {
    env.set(isDevelopment);
  }

  protected initKeyring (options: KeyringOptions): void {
    const keyring = testKeyring({ addressPrefix: this._prefix, ...options }, true);

    if (isBoolean(options.isDevelopment)) {
      this.setDevMode(options.isDevelopment);
    }

    this._keyring = keyring;
    this._genesisHash = options.genesisHash && options.genesisHash.toHex();
    this._store = options.store || new BrowserStore();

    this.addAccountPairs();
  }

  protected addAccountPairs (): void {
    this.keyring
      .getPairs()
      .forEach(({ address, meta }: KeyringPair): void => {
        this.accounts.add(this._store, address, { address, meta });
      });
  }

  protected addTimestamp (pair: KeyringPair): void {
    if (!pair.meta.whenCreated) {
      pair.setMeta({ whenCreated: Date.now() });
    }
  }
}
