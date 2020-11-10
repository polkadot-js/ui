// Copyright 2017-2020 @polkadot/ui-keyring authors & contributors
// SPDX-License-Identifier: Apache-2.0

import './detectPackage';

import { Keyring } from './Keyring';

export { default as Ledger } from '@polkadot/ledger';

const keyring = new Keyring();

export default keyring;

export { Keyring };
