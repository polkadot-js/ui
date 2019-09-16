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
import BrowserStore from './stores/Browser'; // direct import (skip index with all)
import { MAX_PASS_LEN } from './defaults';

export default class Base {
  private _accounts: AddressSubject;

  private _addresses: AddressSubject;

  private _contracts: AddressSubject;

  private _keyring?: KeyringInstance;

  protected _genesisHash?: string;

  protected _store!: KeyringStore;

  private _ss58Format?: Prefix;

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

    throw new Error('Keyring should be initialised via \'loadAll\' before use');
  }

  public get genesisHash (): string | undefined {
    return this._genesisHash;
  }

  public decodeAddress = (key: string | Uint8Array, ignoreChecksum?: boolean, ss58Format?: Prefix): Uint8Array => {
    // FIXME Tryings are wrong... :()
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return (this.keyring.decodeAddress as any)(key, ignoreChecksum, ss58Format);
  }

  public encodeAddress = (key: string | Uint8Array, ss58Format?: Prefix): string => {
    // FIXME Tryings are wrong... :()
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return (this.keyring.encodeAddress as any)(key, ss58Format);
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

  public setSS58Format (ss58Format: number): void {
    this._ss58Format = ss58Format as Prefix;
  }

  public setDevMode (isDevelopment: boolean): void {
    env.set(isDevelopment);
  }

  protected initKeyring (options: KeyringOptions): void {
    const keyring = testKeyring({ ss58Format: this._ss58Format, ...options }, true);

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
