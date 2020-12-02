// Copyright 2017-2020 @polkadot/ui-keyring authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { BehaviorSubject } from 'rxjs';
import type { KeyringSectionOption } from '../options/types';
import type { KeyringJson, KeyringStore } from '../types';

export interface SingleAddress {
  json: KeyringJson;
  option: KeyringSectionOption;
}

export interface SubjectInfo {
  [index: string]: SingleAddress;
}

export interface AddressSubject {
  add: (store: KeyringStore, address: string, json: KeyringJson) => SingleAddress;
  remove: (store: KeyringStore, address: string) => void;
  subject: BehaviorSubject<SubjectInfo>;
}
