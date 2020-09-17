// Copyright 2017-2020 @polkadot/ui-keyring authors & contributors
// SPDX-License-Identifier: Apache-2.0

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

export default function genericSubject (keyCreator: (address: string) => string, withTest = false): AddressSubject {
  let current: SubjectInfo = {};
  const subject = new BehaviorSubject({});
  const next = (): void => callNext(current, subject, withTest);

  development.subject.subscribe(next);

  return {
    add: (store: KeyringStore, address: string, json: KeyringJson): SingleAddress => {
      current = { ...current };

      current[address] = {
        json: { ...json, address },
        option: createOptionItem(address, json.meta.name)
      };

      // we do not store dev accounts, injected or hardware (the latter two are external/transient)
      if (!json.meta.isInjected && !json.meta.isHardware && (!json.meta.isTesting || development.isDevelopment())) {
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
