// Copyright 2017-2019 @polkadot/ui-keyring authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { KeyringStore } from '../types';

import store from 'store';

export default class Store implements KeyringStore {
  all (cb: (key: string, value: any) => void): void {
    store.each((value: any, key: string) =>
      cb(key, value)
    );
  }

  get (key: string, cb: (value: any) => void): void {
    cb(store.get(key));
  }

  remove (key: string, cb?: () => void): void {
    store.remove(key);
    cb && cb();
  }

  set (key: string, value: any, cb?: () => void): void {
    store.set(key, value);
    cb && cb();
  }
}
