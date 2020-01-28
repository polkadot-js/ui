// Copyright 2017-2020 @polkadot/ui-keyring authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { detectPackage } from '@polkadot/util';

import keyring, { Keyring } from './Keyring';
import Ledger from './ledger';

let pkgJson;

try {
  pkgJson = require('./package.json');
} catch (error) {
  pkgJson = require('../package.json');
}

detectPackage(pkgJson);

export default keyring;

export {
  Keyring,
  Ledger
};
