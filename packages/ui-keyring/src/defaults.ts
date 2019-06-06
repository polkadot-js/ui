// Copyright 2017-2019 @polkadot/ui-keyring authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { u8aToHex } from '@polkadot/util';
import { decodeAddress } from '@polkadot/keyring';

const ACCOUNT_PREFIX = 'account:';
const ADDRESS_PREFIX = 'address:';
const CONTRACT_PREFIX = 'contract:';
const MAX_PASS_LEN = 32;

function toHex (address: string): string {
  return u8aToHex(
    // When saving pre-checksum changes, ensure that we can decode
    decodeAddress(address, true)
  );
}

const accountKey = (address: string): string =>
  `${ACCOUNT_PREFIX}${toHex(address)}`;

const addressKey = (address: string): string =>
  `${ADDRESS_PREFIX}${toHex(address)}`;

const contractKey = (address: string): string =>
  `${CONTRACT_PREFIX}${toHex(address)}`;

const accountRegex = new RegExp(`^${ACCOUNT_PREFIX}0x[0-9a-f]*`, '');

const addressRegex = new RegExp(`^${ADDRESS_PREFIX}0x[0-9a-f]*`, '');

const contractRegex = new RegExp(`^${CONTRACT_PREFIX}0x[0-9a-f]*`, '');

export {
  accountKey,
  accountRegex,
  addressKey,
  addressRegex,
  contractKey,
  contractRegex,
  MAX_PASS_LEN
};
