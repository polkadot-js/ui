// Copyright 2017-2019 @polkadot/ui-keyring authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { KeyringStore } from '../types';

import fs from 'fs';
import mkdirp from 'mkdirp';
import path from 'path';

// NOTE untested and unused by any known apps, probably broken in various mysterious ways
export default class FileStore implements KeyringStore {
  private _path: string;

  constructor (path: string) {
    if (!fs.existsSync(path)) {
      mkdirp.sync(path);
    }

    this._path = path;
  }

  all (cb: (key: string, value: any) => void): void {
    fs
      .readdirSync(this._path)
      .filter((key) => !['.', '..'].includes(key))
      .forEach((key) => cb(key, this._readKey(key)));
  }

  get (key: string, cb: (value: any) => void): void {
    cb(this._readKey(key));
  }

  remove (key: string, cb?: () => void): void {
    fs.unlinkSync(this._getPath(key));
    cb && cb();
  }

  set (key: string, value: any, cb?: () => void): void {
    fs.writeFileSync(this._getPath(key), Buffer.from(JSON.stringify(value), 'utf-8'));
    cb && cb();
  }

  private _getPath (key: string): string {
    return path.join(this._path, `${key}.json`);
  }

  private _readKey (key: string): any {
    return JSON.parse(
      fs.readFileSync(this._getPath(key)).toString('utf-8')
    );
  }
}
