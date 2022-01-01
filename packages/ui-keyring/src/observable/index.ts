// Copyright 2017-2022 @polkadot/ui-keyring authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { SubjectInfo } from './types';

import { combineLatest, map } from 'rxjs';

import { accounts } from './accounts';
import { addresses } from './addresses';
import { contracts } from './contracts';

interface Result {
  accounts: SubjectInfo;
  addresses: SubjectInfo;
  contracts: SubjectInfo;
}

export const obervableAll = combineLatest([
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
