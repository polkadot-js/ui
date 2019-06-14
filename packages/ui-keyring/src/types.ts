// Copyright 2017-2019 @polkadot/ui-keyring authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Hash } from '@polkadot/types';
import { KeyringInstance as BaseKeyringInstance, KeyringPair, KeyringPair$Meta, KeyringPair$Json, KeyringOptions as KeyringOptionsBase } from '@polkadot/keyring/types';
import { KeypairType } from '@polkadot/util-crypto/types';
import { AddressSubject, SingleAddress } from './observable/types';

export type ContractMeta = {
  abi: string,
  genesisHash?: string
};

export interface KeyringStore {
  all: (cb: (key: string, value: any) => void) => void;
  get: (key: string, cb: (value: any) => void) => void;
  remove: (key: string, cb?: () => void) => void;
  set: (key: string, value: any, cb?: () => void) => void;
}

export type KeyringOptions = KeyringOptionsBase & {
  filter?: (json: KeyringJson) => boolean,
  genesisHash?: Hash,
  isDevelopment?: boolean,
  store?: KeyringStore
};

export type KeyringJson$Meta = {
  contract?: ContractMeta,
  isInjected?: boolean,
  isRecent?: boolean,
  isTesting?: boolean,
  name?: string,
  whenCreated?: number,
  whenEdited?: number,
  whenUsed?: number,
  [index: string]: any
};

export type KeyringJson = {
  address: string,
  meta: KeyringJson$Meta
};

export type KeyringAddress = {
  readonly address: string,
  readonly meta: KeyringJson$Meta,
  readonly publicKey: Uint8Array
};

export type KeyringAddressType = 'address' | 'contract';

export type KeyringItemType = 'account' | KeyringAddressType;

export type CreateResult = {
  json: KeyringPair$Json,
  pair: KeyringPair
};

export interface KeyringStruct {
  readonly accounts: AddressSubject;
  readonly addresses: AddressSubject;
  readonly contracts: AddressSubject;
  readonly keyring: BaseKeyringInstance | undefined;
  readonly genesisHash?: string;

  addExternal: (publicKey: Uint8Array, meta?: KeyringPair$Meta) => CreateResult;
  addPair: (pair: KeyringPair, password: string) => CreateResult;
  addUri: (suri: string, password?: string, meta?: KeyringPair$Meta, type?: KeypairType) => CreateResult;
  backupAccount: (pair: KeyringPair, password: string) => KeyringPair$Json;
  createFromUri (suri: string, meta?: KeyringPair$Meta, type?: KeypairType): KeyringPair;
  decodeAddress: (key: string | Uint8Array) => Uint8Array;
  encodeAddress: (key: string | Uint8Array) => string;
  encryptAccount: (pair: KeyringPair, password: string) => void;
  forgetAccount: (address: string) => void;
  forgetAddress: (address: string) => void;
  forgetContract: (address: string) => void;
  getAccount: (address: string | Uint8Array) => KeyringAddress;
  getAccounts: () => Array<KeyringAddress>;
  getAddress: (address: string | Uint8Array, type: KeyringItemType | null) => KeyringAddress;
  getAddresses: () => Array<KeyringAddress>;
  getContract: (address: string | Uint8Array) => KeyringAddress;
  getContracts: (genesisHash?: string) => Array<KeyringAddress>;
  getPair: (address: string | Uint8Array) => KeyringPair;
  getPairs: () => Array<KeyringPair>;
  isAvailable: (address: string | Uint8Array) => boolean;
  isPassValid: (password: string) => boolean;
  loadAll: (options: KeyringOptions) => void;
  restoreAccount: (json: KeyringPair$Json, password: string) => KeyringPair;
  saveAccount: (pair: KeyringPair, password?: string) => KeyringPair$Json;
  saveAccountMeta: (pair: KeyringPair, meta: KeyringPair$Meta) => void;
  saveAddress: (address: string, meta: KeyringPair$Meta) => KeyringPair$Json;
  saveContract: (address: string, meta: KeyringPair$Meta) => KeyringPair$Json;
  saveRecent: (address: string) => SingleAddress;
  setDevMode: (isDevelopment: boolean) => void;
}
