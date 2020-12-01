// Copyright 2017-2020 @polkadot/ui-keyring authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { KeyringStore, KeyringJson } from '../types';

import store from 'store';

export default class BrowserStore implements KeyringStore {
  public all (cb: (key: string, value: KeyringJson) => void): void {
    store.each((value: KeyringJson, key: string): void => {
      cb(key, value);
    });
  }

  public get (key: string, cb: (value: KeyringJson) => void): void {
    cb(store.get(key));
  }

  public remove (key: string, cb?: () => void): void {
    store.remove(key);
    cb && cb();
  }

  public set (key: string, value: KeyringJson, cb?: () => void): void {
    store.set(key, value);
    cb && cb();
  }
}
