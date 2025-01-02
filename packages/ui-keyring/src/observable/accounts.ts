// Copyright 2017-2025 @polkadot/ui-keyring authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { accountKey } from '../defaults.js';
import { genericSubject } from './genericSubject.js';

export const accounts = /*#__PURE__*/ genericSubject(accountKey, true);
