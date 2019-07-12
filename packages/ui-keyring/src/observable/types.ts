// Copyright 2017-2019 @polkadot/ui-keyring authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { BehaviorSubject } from 'rxjs';
import { KeyringSectionOption } from '../options/types';
import { KeyringJson, KeyringStore } from '../types';

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
