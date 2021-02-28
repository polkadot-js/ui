// Copyright 2017-2021 @polkadot/ui-keyring authors & contributors
// SPDX-License-Identifier: Apache-2.0

import './detectPackage';

import { Keyring } from './Keyring';

export { Ledger } from '@polkadot/hw-ledger';
export { packageInfo } from './packageInfo';

const keyring = new Keyring();

export { Keyring, keyring };

export default keyring;
