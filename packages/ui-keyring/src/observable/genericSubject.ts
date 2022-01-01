// Copyright 2017-2022 @polkadot/ui-keyring authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { KeypairType } from '@polkadot/util-crypto/types';
import type { KeyringJson, KeyringStore } from '../types';
import type { AddressSubject, SingleAddress, SubjectInfo } from './types';

import { BehaviorSubject } from 'rxjs';

import { objectCopy, objectSpread } from '@polkadot/util';

import { createOptionItem } from '../options/item';
import { env } from './env';

function callNext (current: SubjectInfo, subject: BehaviorSubject<SubjectInfo>, withTest: boolean): void {
  const isDevMode = env.isDevelopment();
  const filtered: SubjectInfo = {};

  Object.keys(current).forEach((key): void => {
    const { json: { meta: { isTesting = false } = {} } = {} } = current[key];

    if (!withTest || isDevMode || isTesting !== true) {
      filtered[key] = current[key];
    }
  });

  subject.next(filtered);
}

export function genericSubject (keyCreator: (address: string) => string, withTest = false): AddressSubject {
  let current: SubjectInfo = {};
  const subject = new BehaviorSubject({});
  const next = (): void => callNext(current, subject, withTest);

  env.subject.subscribe(next);

  return {
    add: (store: KeyringStore, address: string, json: KeyringJson, type?: KeypairType): SingleAddress => {
      current = objectCopy(current);

      current[address] = {
        json: objectSpread({}, json, { address }),
        option: createOptionItem(address, json.meta.name),
        type
      };

      // we do not store dev or injected accounts (external/transient)
      if (!json.meta.isInjected && (!json.meta.isTesting || env.isDevelopment())) {
        store.set(keyCreator(address), json);
      }

      next();

      return current[address];
    },
    remove: (store: KeyringStore, address: string): void => {
      current = objectCopy(current);

      delete current[address];

      store.remove(keyCreator(address));
      next();
    },
    subject
  };
}
