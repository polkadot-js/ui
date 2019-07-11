// Copyright 2017-2019 @polkadot/ui-keyring authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { KeyringStore, KeyringJson } from '../types';

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
