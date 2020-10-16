// Copyright 2017-2020 @polkadot/ui-settings authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { Option } from '../types';

export const LEDGER_CONN_DEFAULT = 'none';

export const LEDGER_CONN: Option[] = [
  {
    info: 'none',
    text: 'Do not attach Ledger devices',
    value: 'none'
  },
  // Deprecated
  // {
  //   info: 'u2f',
  //   text: 'Attach Ledger via U2F',
  //   value: 'u2f'
  // },
  {
    info: 'webusb',
    text: 'Attach Ledger via WebUSB',
    value: 'webusb'
  }
];
