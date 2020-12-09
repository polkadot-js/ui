// Copyright 2017-2020 @polkadot/ui-keyring authors & contributors
// SPDX-License-Identifier: Apache-2.0

import './detectPackage';

import { Keyring } from './Keyring';

export { Ledger } from '@polkadot/ledger';

const keyring = new Keyring();

export { Keyring, keyring };

export default keyring;
