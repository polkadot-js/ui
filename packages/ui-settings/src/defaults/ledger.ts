// Copyright 2017-2022 @polkadot/ui-settings authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Option } from '../types';

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
    text: 'Attach Ledger via WebUSB (Chrome, recommended)',
    value: 'webusb'
  },
  {
    info: 'hid',
    text: 'Attach Ledger via WebHID (Chrome, experimental)',
    value: 'hid'
  }
];
