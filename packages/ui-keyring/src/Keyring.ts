// Copyright 2017-2019 @polkadot/ui-keyring authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { KeyringPair, KeyringPair$Meta, KeyringPair$Json } from '@polkadot/keyring/types';
import { KeypairType } from '@polkadot/util-crypto/types';
import { SingleAddress } from './observable/types';
import { CreateResult, KeyringAddress, KeyringJson, KeyringJson$Meta, KeyringOptions, KeyringStruct } from './types';

import createPair from '@polkadot/keyring/pair';
import { hexToU8a, isHex, isString, u8aToHex } from '@polkadot/util';

import env from './observable/development';
import Base from './Base';
import { accountKey, addressKey, accountRegex, addressRegex } from './defaults';
import keyringOption from './options';

const RECENT_EXPIRY = 24 * 60 * 60;

// No accounts (or test accounts) should be loaded until after the chain determination.
// Chain determination occurs outside of Keyring. Loading `keyring.loadAll({ type: 'ed25519' | 'sr25519' })` is triggered
// from the API after the chain is received
export class Keyring extends Base implements KeyringStruct {
  addExternal (publicKey: Uint8Array, meta: KeyringPair$Meta = {}): CreateResult {
    const pair = this.keyring.addFromAddress(publicKey, { ...meta, isExternal: true }, null);
    const json = this.saveAccount(pair);

    return {
      json,
      pair
    };
  }

  addPair (pair: KeyringPair, password: string): CreateResult {
    this.keyring.addPair(pair);
    const json = this.saveAccount(pair, password);

    return {
      json,
      pair
    };
  }

  addUri (suri: string, password?: string, meta: KeyringPair$Meta = {}, type?: KeypairType): CreateResult {
    const pair = this.keyring.addFromUri(suri, meta, type);
    const json = this.saveAccount(pair, password);

    return {
      json,
      pair
    };
  }

  backupAccount (pair: KeyringPair, password: string): KeyringPair$Json {
    if (!pair.isLocked()) {
      pair.lock();
    }

    pair.decodePkcs8(password);

    return pair.toJson(password);
  }

  createAccount (seed: Uint8Array, password?: string, meta?: KeyringPair$Meta): KeyringPair {
    console.warn('createAccount deprecated, use addUri instead');

    return this.addUri(u8aToHex(seed), password, meta).pair;
  }

  createAccountExternal (publicKey: Uint8Array, meta?: KeyringPair$Meta): KeyringPair {
    console.warn('createAccountExternal deprecated, use addExternal instead');

    return this.addExternal(publicKey, meta).pair;
  }

  createAccountMnemonic (seed: string, password?: string, meta?: KeyringPair$Meta): KeyringPair {
    console.warn('createAccountMnemonic deprecated, use createUri instead');

    return this.addUri(seed, password, meta).pair;
  }

  createFromUri (suri: string, meta: KeyringPair$Meta = {}, type?: KeypairType): KeyringPair {
    return this.keyring.createFromUri(suri, meta, type);
  }

  encryptAccount (pair: KeyringPair, password: string): void {
    const json = pair.toJson(password);

    json.meta.whenEdited = Date.now();

    this.keyring.addFromJson(json);
    this.accounts.add(this._store, pair.address(), json);
  }

  forgetAccount (address: string): void {
    this.keyring.removePair(address);
    this.accounts.remove(this._store, address);
  }

  forgetAddress (address: string): void {
    this.addresses.remove(this._store, address);
  }

  getAccount (address: string | Uint8Array): KeyringAddress {
    return this.getAddress(address, 'account');
  }

  getAccounts (): Array<KeyringAddress> {
    const available = this.accounts.subject.getValue();

    return Object
      .keys(available)
      .map((address) => this.getAddress(address, 'account'))
      .filter((account) => env.isDevelopment() || account.getMeta().isTesting !== true);
  }

  getAddress (_address: string | Uint8Array, type: 'account' | 'address' = 'address'): KeyringAddress {
    const address = isString(_address)
      ? _address
      : this.encodeAddress(_address);
    const publicKey = this.decodeAddress(address);
    const subject = type === 'account'
      ? this.accounts.subject
      : this.addresses.subject;

    return {
      address: (): string =>
        address,
      isValid: (): boolean =>
        !!subject.getValue()[address],
      publicKey: (): Uint8Array =>
        publicKey,
      getMeta: (): KeyringJson$Meta =>
        subject.getValue()[address].json.meta
    };
  }

  getAddresses (): Array<KeyringAddress> {
    const available = this.addresses.subject.getValue();

    return Object
      .keys(available)
      .map((address) => this.getAddress(address));
  }

  private rewriteKey (json: KeyringJson, key: string, hexAddr: string, creator: (addr: string) => string) {
    if (hexAddr.substr(0, 2) === '0x') {
      return;
    }

    this._store.remove(key);
    this._store.set(creator(hexAddr), json);
  }

  private loadAccount (json: KeyringJson, key: string) {
    if (!json.meta.isTesting && (json as KeyringPair$Json).encoded) {
      // FIXME Just for the transition period (ignoreChecksum)
      const pair = this.keyring.addFromJson(json as KeyringPair$Json, true);

      this.accounts.add(this._store, pair.address(), json);
    }

    const [, hexAddr] = key.split(':');

    this.rewriteKey(json, key, hexAddr.trim(), accountKey);
  }

  private loadAddress (json: KeyringJson, key: string) {
    const { isRecent, whenCreated = 0 } = json.meta;

    if (isRecent && (Date.now() - whenCreated) > RECENT_EXPIRY) {
      this._store.remove(key);
      return;
    }

    const address = this.encodeAddress(
      isHex(json.address)
        ? hexToU8a(json.address)
        // FIXME Just for the transition period (ignoreChecksum)
        : this.decodeAddress(json.address, true)
    );
    const [, hexAddr] = key.split(':');

    this.addresses.add(this._store, address, json);
    this.rewriteKey(json, key, hexAddr, addressKey);
  }

  private loadInjected (address: string, meta: KeyringJson$Meta) {
    const json = {
      address,
      meta: {
        ...meta,
        isInjected: true
      }
    };
    const pair = this.keyring.addFromAddress(address, json.meta);

    this.accounts.add(this._store, pair.address(), json);
  }

  loadAll (options: KeyringOptions, injected: Array<{ address: string, meta: KeyringJson$Meta }> = []): void {
    super.initKeyring(options);

    this._store.all((key: string, json: KeyringJson) => {
      if (accountRegex.test(key)) {
        this.loadAccount(json, key);
      } else if (addressRegex.test(key)) {
        this.loadAddress(json, key);
      }
    });

    injected.forEach(({ address, meta }) =>
      this.loadInjected(address, meta)
    );

    keyringOption.init(this);
  }

  restoreAccount (json: KeyringPair$Json, password: string): KeyringPair {
    const type = Array.isArray(json.encoding.content) ? json.encoding.content[1] : 'ed25519';
    const pair = createPair(
      type,
      {
        // FIXME Just for the transition period (ignoreChecksum)
        publicKey: this.decodeAddress(json.address, true)
      },
      json.meta,
      hexToU8a(json.encoded)
    );

    // unlock, save account and then lock (locking cleans secretKey, so needs to be last)
    pair.decodePkcs8(password);
    this.addPair(pair, password);
    pair.lock();

    return pair;
  }

  saveAccount (pair: KeyringPair, password?: string): KeyringPair$Json {
    this.addTimestamp(pair);

    const json = pair.toJson(password);

    this.keyring.addFromJson(json);
    this.accounts.add(this._store, pair.address(), json);

    return json;
  }

  saveAccountMeta (pair: KeyringPair, meta: KeyringPair$Meta): void {
    const address = pair.address();

    this._store.get(accountKey(address), (json: KeyringJson) => {
      pair.setMeta(meta);
      json.meta = pair.getMeta();

      this.accounts.add(this._store, address, json);
    });
  }

  saveAddress (address: string, meta: KeyringPair$Meta): KeyringPair$Json {
    const available = this.addresses.subject.getValue();

    const json = (available[address] && available[address].json) || {
      address,
      meta: {
        isRecent: void 0,
        whenCreated: Date.now()
      }
    };

    Object.keys(meta).forEach((key) => {
      json.meta[key] = meta[key];
    });

    delete json.meta.isRecent;

    this.addresses.add(this._store, address, json);

    return json as KeyringPair$Json;
  }

  saveRecent (address: string): SingleAddress {
    const available = this.addresses.subject.getValue();

    if (!available[address]) {
      const json = {
        address,
        meta: {
          isRecent: true,
          whenCreated: Date.now()
        }
      };

      this.addresses.add(this._store, address, (json as KeyringJson));
    }

    return this.addresses.subject.getValue()[address];
  }
}

const keyringInstance = new Keyring();

export default keyringInstance;
