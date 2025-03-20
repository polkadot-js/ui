// Copyright 2017-2025 @polkadot/ui-keyring authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { KeyringJson, KeyringStore } from '../types.js';

import { mkdirpSync } from 'mkdirp';
import fs from 'node:fs';
import path from 'node:path';

// NOTE untested and unused by any known apps, probably broken in various mysterious ways
export class FileStore implements KeyringStore {
  #path: string;

  constructor (path: string) {
    if (!fs.existsSync(path)) {
      mkdirpSync(path);
    }

    this.#path = path;
  }

  private validateKey (key: string): boolean {
    // Make sure the key has a .json extension
    if (!key.endsWith('.json')) {
      console.error('Non-JSON file requested: ', key);

      return false;
    }

    // Remove '.json'
    const keyWithoutExtension = key.slice(0, -5);
    // Only allow alphanumeric characters, hyphens, and underscores in the base filename
    const safeKeyRegex = /^[a-zA-Z0-9_-]+$/;

    if (!safeKeyRegex.test(keyWithoutExtension)) {
      console.error('Invalid key format detected: ', key);

      return false;
    }

    return true;
  }

  public all (fn: (key: string, value: KeyringJson) => void): void {
    fs
      .readdirSync(this.#path)
      .filter((key): boolean => !['.', '..', '.DS_Store'].includes(key))
      .forEach((key): void => {
        const value = this._readKey(key);

        value?.address && fn(key, value);
      });
  }

  public get (key: string, fn: (value: KeyringJson) => void): void {
    const value = this._readKey(key);

    if (!value?.address) {
      throw new Error(`Invalid JSON found for ${key}`);
    }

    fn(value);
  }

  public remove (key: string, fn?: () => void): void {
    fs.unlinkSync(this._getPath(key));
    fn && fn();
  }

  public set (key: string, value: KeyringJson, fn?: () => void): void {
    fs.writeFileSync(this._getPath(key), Buffer.from(JSON.stringify(value), 'utf-8'));
    fn && fn();
  }

  private _getPath (key: string): string {
    if (!this.validateKey(key)) {
      throw new Error('Invalid key format');
    }

    return path.join(this.#path, key);
  }

  private _readKey (key: string): KeyringJson | undefined {
    try {
      return JSON.parse(
        fs.readFileSync(this._getPath(key)).toString('utf-8')
      ) as KeyringJson;
    } catch (error) {
      console.error(error);
    }

    return undefined;
  }
}
