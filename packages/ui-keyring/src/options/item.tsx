// Copyright 2017-2018 @polkadot/ui-keyring authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { KeyringSectionOption } from './types';

import React from 'react';
import { isUndefined } from '@polkadot/util';

import KeyPair from './KeyPair';

export default function createItem (address: string, _name?: string): KeyringSectionOption {
  const name = isUndefined(_name)
    ? (
      (address.length > 15)
        ? `${address.slice(0, 7)}…${address.slice(-7)}`
        : address
    )
    : _name;

  return {
    key: address,
    name,
    text: (
      <KeyPair
        address={address}
        name={name}
      />
    ),
    value: address
  };
}
