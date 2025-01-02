// Copyright 2017-2025 @polkadot/ui-keyring authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { SubjectInfo } from './types.js';

import { combineLatest, map } from 'rxjs';

import { accounts } from './accounts.js';
import { addresses } from './addresses.js';
import { contracts } from './contracts.js';

interface Result {
  accounts: SubjectInfo;
  addresses: SubjectInfo;
  contracts: SubjectInfo;
}

export const obervableAll = /*#__PURE__*/ combineLatest([
  accounts.subject,
  addresses.subject,
  contracts.subject
]).pipe(
  map(([accounts, addresses, contracts]): Result => ({
    accounts,
    addresses,
    contracts
  }))
);
