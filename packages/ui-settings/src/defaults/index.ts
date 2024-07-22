// Copyright 2017-2024 @polkadot/ui-settings authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Option } from '../types.js';

export { CRYPTOS, CRYPTOS_ETH, CRYPTOS_LEDGER } from './crypto.js';
export { ENDPOINT_DEFAULT, ENDPOINTS } from './endpoints.js';
export { LEDGER_APP, LEDGER_CONN, LEDGER_CONN_DEFAULT } from './ledger.js';
export { PREFIX_DEFAULT, PREFIXES } from './ss58.js';
export { ICON_DEFAULT, ICON_DEFAULT_HOST, ICONS, NOTIFICATION_DEFAULT, UIMODE_DEFAULT, UIMODES, UITHEME_DEFAULT, UITHEMES } from './ui.js';

export const CAMERA_DEFAULT = 'off';

export const CAMERA: Option[] = [
  {
    info: 'on',
    text: 'Allow camera access',
    value: 'on'
  },
  {
    info: 'off',
    text: 'Do not allow camera access',
    value: 'off'
  }
];

export const LANGUAGE_DEFAULT = 'default';

export const LOCKING_DEFAULT = 'session';

export const LOCKING: Option[] = [
  {
    info: 'session',
    text: 'Once per session',
    value: 'session'
  },
  {
    info: 'tx',
    text: 'On each transaction',
    value: 'tx'
  }
];

export const METADATA_UP_DEFAULT = 'off';

export const METADATA_UP: Option[] = [
  {
    info: 'off',
    text: 'Do not auto-update extension metadata',
    value: 'off'
  },
  {
    info: 'on',
    text: 'Auto-update extension metadata',
    value: 'on'
  }
];

export const STORAGE_DEFAULT = 'off';

export const STORAGE: Option[] = [
  {
    info: 'on',
    text: 'Allow local in-browser account storage',
    value: 'on'
  },
  {
    info: 'off',
    text: 'Do not allow local in-browser account storage',
    value: 'off'
  }
];
