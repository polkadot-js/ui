// Copyright 2017-2021 @polkadot/react-identicon authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { packageInfo as settingsInfo } from '@polkadot/ui-settings/packageInfo';
import { packageInfo as sharedInfo } from '@polkadot/ui-shared/packageInfo';
import { detectPackage } from '@polkadot/util';

import __dirname from './cjs/dirname';
import { packageInfo } from './packageInfo';

detectPackage(packageInfo, typeof __dirname !== 'undefined' && __dirname, [settingsInfo, sharedInfo]);
