// Copyright 2017-2019 @polkadot/ui-keyring authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { SubjectInfo, AddressSubject, SingleAddress } from './types';
import { KeyringJson, KeyringStore } from '../types';

import { BehaviorSubject } from 'rxjs';

import createOptionItem from '../options/item';
import development from './development';

function callNext (current: SubjectInfo, subject: BehaviorSubject<SubjectInfo>, withTest: boolean): void {
  const isDevMode = development.isDevelopment();
  const filtered: SubjectInfo = {};

  Object.keys(current).forEach((key): void => {
    const { json: { meta: { isTesting = false } = {} } = {} } = current[key];

    if (!withTest || isDevMode || isTesting !== true) {
      filtered[key] = current[key];
    }
  });

  subject.next(filtered);
}

export default function genericSubject (keyCreator: (address: string) => string, withTest: boolean = false): AddressSubject {
  let current: SubjectInfo = {};
  const subject = new BehaviorSubject({});
  const next = (): void =>
    callNext(current, subject, withTest);

  development.subject.subscribe(next);

  return {
    add: (store: KeyringStore, address: string, json: KeyringJson): SingleAddress => {
      current = { ...current };

      current[address] = {
        json: {
          ...json,
          address
        },
        option: createOptionItem(address, json.meta.name, !json.meta.isRecent)
      };

      const isDevMode = development.isDevelopment();

      if (!json.meta.isInjected && (!json.meta.isTesting || isDevMode)) {
        store.set(keyCreator(address), json);
      }

      next();

      return current[address];
    },
    remove: (store: KeyringStore, address: string): void => {
      current = { ...current };

      delete current[address];

      store.remove(keyCreator(address));
      next();
    },
    subject
  };
}
