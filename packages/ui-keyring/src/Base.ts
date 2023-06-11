// Copyright 2017-2023 @polkadot/ui-keyring authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { KeyringInstance, KeyringPair } from '@polkadot/keyring/types';
import type { HexString } from '@polkadot/util/types';
import type { Prefix } from '@polkadot/util-crypto/address/types';
import type { AddressSubject } from './observable/types.js';
import type { KeyringOptions, KeyringStore } from './types.js';

import { createTestKeyring } from '@polkadot/keyring';
import { isBoolean, isNumber, isString } from '@polkadot/util';

import { accounts } from './observable/accounts.js';
import { addresses } from './observable/addresses.js';
import { contracts } from './observable/contracts.js';
import { env } from './observable/env.js';
import { BrowserStore } from './stores/Browser.js'; // direct import (skip index with all)

export class Base {
  #accounts: AddressSubject;

  #addresses: AddressSubject;

  #contracts: AddressSubject;

  #isEthereum: boolean;

  #keyring?: KeyringInstance;

  protected _store: KeyringStore;

  protected _genesisHash?: HexString | undefined;

  protected _genesisHashAdd: HexString[] = [];

  constructor () {
    this.#accounts = accounts;
    this.#addresses = addresses;
    this.#contracts = contracts;
    this.#isEthereum = false;
    this._store = new BrowserStore();
  }

  public get accounts (): AddressSubject {
    return this.#accounts;
  }

  public get addresses (): AddressSubject {
    return this.#addresses;
  }

  public get contracts (): AddressSubject {
    return this.#contracts;
  }

  public get isEthereum (): boolean {
    return this.#isEthereum;
  }

  public get keyring (): KeyringInstance {
    if (this.#keyring) {
      return this.#keyring;
    }

    throw new Error('Keyring should be initialised via \'loadAll\' before use');
  }

  public get genesisHash (): HexString | undefined {
    return this._genesisHash;
  }

  public get genesisHashes (): HexString[] {
    return this._genesisHash
      ? [this._genesisHash, ...this._genesisHashAdd]
      : [...this._genesisHashAdd];
  }

  public decodeAddress = (key: string | Uint8Array, ignoreChecksum?: boolean, ss58Format?: Prefix): Uint8Array => {
    return this.keyring.decodeAddress(key, ignoreChecksum, ss58Format);
  };

  public encodeAddress = (key: string | Uint8Array, ss58Format?: Prefix): string => {
    return this.keyring.encodeAddress(key, ss58Format);
  };

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
    return password.length > 0;
  }

  public setSS58Format (ss58Format?: Prefix): void {
    if (this.#keyring && isNumber(ss58Format)) {
      this.#keyring.setSS58Format(ss58Format);
    }
  }

  public setDevMode (isDevelopment: boolean): void {
    env.set(isDevelopment);
  }

  protected initKeyring (options: KeyringOptions): void {
    const keyring = createTestKeyring(options, true);

    if (isBoolean(options.isDevelopment)) {
      this.setDevMode(options.isDevelopment);
    }

    // set Ethereum state
    this.#isEthereum = keyring.type === 'ethereum';

    this.#keyring = keyring;
    this._genesisHash = options.genesisHash && (
      isString(options.genesisHash)
        ? options.genesisHash.toString() as HexString
        : options.genesisHash.toHex()
    );
    this._genesisHashAdd = options.genesisHashAdd || [];
    this._store = options.store || this._store;

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
