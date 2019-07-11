// Copyright 2017-2019 @polkadot/ui-keyring authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

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
