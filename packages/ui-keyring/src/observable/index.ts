// Copyright 2017-2020 @polkadot/ui-keyring authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { SubjectInfo } from './types';

import { combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';

import accounts from './accounts';
import addresses from './addresses';
import contracts from './contracts';

interface Result {
  accounts: SubjectInfo;
  addresses: SubjectInfo;
  contracts: SubjectInfo;
}

export default combineLatest(
  accounts.subject,
  addresses.subject,
  contracts.subject
).pipe(
  map(([accounts, addresses, contracts]): Result => ({
    accounts,
    addresses,
    contracts
  }))
);
