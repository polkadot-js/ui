// Copyright 2017-2025 @polkadot/ui-keyring authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { BehaviorSubject } from 'rxjs';
import type { KeypairType } from '@polkadot/util-crypto/types';
import type { KeyringSectionOption } from '../options/types.js';
import type { KeyringJson, KeyringStore } from '../types.js';

export interface SingleAddress {
  json: KeyringJson;
  option: KeyringSectionOption;
  type?: KeypairType | undefined;
}

export type SubjectInfo = Record<string, SingleAddress>;

export interface AddressSubject {
  add: (store: KeyringStore, address: string, json: KeyringJson, type?: KeypairType) => SingleAddress;
  remove: (store: KeyringStore, address: string) => void;
  subject: BehaviorSubject<SubjectInfo>;
}
