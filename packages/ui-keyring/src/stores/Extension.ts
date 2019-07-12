// Copyright 2019 @polkadot/ui-keyring authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { KeyringStore, KeyringJson } from '../types';

import extension from 'extensionizer';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type StoreValue = Record<string, any>;

const lastError = (type: string): void => {
  const error = extension.runtime.lastError;

  if (error) {
    console.error(`ExtensionStore.${type}:: runtime.lastError:`, error);
  }
};

export default class ExtensionStore implements KeyringStore {
  public all (cb: (key: string, value: KeyringJson) => void): void {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    extension.storage.local.get(null, (result: StoreValue): void => {
      lastError('all');

      Object.entries(result).forEach(([key, value]): void => {
        cb(key, value);
      });
    });
  }

  public get (key: string, cb: (value: KeyringJson) => void): void {
    extension.storage.local.get([key], (result: StoreValue): void => {
      lastError('get');

      cb(result[key]);
    });
  }

  public remove (key: string, cb?: () => void): void {
    extension.storage.local.remove(key, (): void => {
      lastError('remove');

      cb && cb();
    });
  }

  public set (key: string, value: KeyringJson, cb?: () => void): void {
    // shortcut, don't save testing accounts in extension storage
    if (key.indexOf('account:') === 0 && value.meta && value.meta.isTesting) {
      cb && cb();

      return;
    }

    extension.storage.local.set({ [key]: value }, (): void => {
      lastError('set');

      cb && cb();
    });
  }
}
