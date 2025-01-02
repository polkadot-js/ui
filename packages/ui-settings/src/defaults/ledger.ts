// Copyright 2017-2025 @polkadot/ui-settings authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Option } from '../types.js';

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

export const LEDGER_APP_DEFAULT = 'generic';

export const LEDGER_APP: Option[] = [
  {
    info: 'generic',
    text: 'Use the Ledger Polkadot Generic App',
    value: 'generic'
  },
  {
    info: 'migration',
    text: 'Use the Ledger Migration App',
    value: 'migration'
  },
  {
    info: 'chainSpecific',
    text: 'Use the Chain Specific Ledger App',
    value: 'chainSpecific'
  }
];
