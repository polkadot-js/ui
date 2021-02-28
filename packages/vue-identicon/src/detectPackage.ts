// Copyright 2017-2021 @polkadot/vue-identicon authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { packageInfo as sharedInfo } from '@polkadot/ui-shared/packageInfo';
import { detectPackage } from '@polkadot/util';

import { packageInfo } from './packageInfo';

detectPackage(packageInfo, typeof __dirname !== 'undefined' && __dirname, [sharedInfo]);
