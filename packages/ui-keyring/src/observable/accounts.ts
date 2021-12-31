// Copyright 2017-2022 @polkadot/ui-keyring authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { accountKey } from '../defaults';
import { genericSubject } from './genericSubject';

export const accounts = genericSubject(accountKey, true);
