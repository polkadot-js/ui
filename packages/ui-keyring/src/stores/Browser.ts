// Copyright 2017-2022 @polkadot/ui-keyring authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { KeyringJson, KeyringStore } from '../types';

import store from 'store';

export class BrowserStore implements KeyringStore {
  public all (fn: (key: string, value: KeyringJson) => void): void {
    store.each((value: KeyringJson, key: string): void => {
      fn(key, value);
    });
  }

  public get (key: string, fn: (value: KeyringJson) => void): void {
    fn(store.get(key) as KeyringJson);
  }

  public remove (key: string, fn?: () => void): void {
    store.remove(key);
    fn && fn();
  }

  public set (key: string, value: KeyringJson, fn?: () => void): void {
    store.set(key, value);
    fn && fn();
  }
}
