// Copyright 2017-2023 @polkadot/ui-keyring authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { decodeAddress } from '@polkadot/keyring';
import { u8aToHex } from '@polkadot/util';

const ACCOUNT_PREFIX = 'account:';
const ADDRESS_PREFIX = 'address:';
const CONTRACT_PREFIX = 'contract:';

function toHex (address: string): string {
  return u8aToHex(
    // When saving pre-checksum changes, ensure that we can decode
    decodeAddress(address, true)
  );
}

export function accountKey (address: string): string {
  return `${ACCOUNT_PREFIX}${toHex(address)}`;
}

export function addressKey (address: string): string {
  return `${ADDRESS_PREFIX}${toHex(address)}`;
}

export function contractKey (address: string): string {
  return `${CONTRACT_PREFIX}${toHex(address)}`;
}

export const accountRegex = new RegExp(`^${ACCOUNT_PREFIX}0x[0-9a-f]*`, '');

export const addressRegex = new RegExp(`^${ADDRESS_PREFIX}0x[0-9a-f]*`, '');

export const contractRegex = new RegExp(`^${CONTRACT_PREFIX}0x[0-9a-f]*`, '');
