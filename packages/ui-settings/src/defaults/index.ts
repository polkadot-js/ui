// Copyright 2017-2023 @polkadot/ui-settings authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Option } from '../types.js';

import { CRYPTOS, CRYPTOS_ETH, CRYPTOS_LEDGER } from './crypto.js';
import { ENDPOINT_DEFAULT, ENDPOINTS } from './endpoints.js';
import { LEDGER_CONN, LEDGER_CONN_DEFAULT } from './ledger.js';
import { PREFIX_DEFAULT, PREFIXES } from './ss58.js';
import { ICON_DEFAULT, ICON_DEFAULT_HOST, ICONS, NOTIFICATION_DEFAULT, UIMODE_DEFAULT, UIMODES, UITHEME_DEFAULT, UITHEMES } from './ui.js';

const CAMERA_DEFAULT = 'off';

const CAMERA: Option[] = [
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

const LANGUAGE_DEFAULT = 'default';

const LOCKING_DEFAULT = 'session';

const LOCKING: Option[] = [
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

const METADATA_UP_DEFAULT = 'off';

const METADATA_UP: Option[] = [
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

const STORAGE_DEFAULT = 'off';

const STORAGE: Option[] = [
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

export {
  CAMERA_DEFAULT,
  CAMERA,
  CRYPTOS,
  CRYPTOS_ETH,
  CRYPTOS_LEDGER,
  ENDPOINT_DEFAULT,
  ENDPOINTS,
  ICON_DEFAULT,
  ICON_DEFAULT_HOST,
  ICONS,
  LANGUAGE_DEFAULT,
  LEDGER_CONN_DEFAULT,
  LEDGER_CONN,
  LOCKING_DEFAULT,
  LOCKING,
  METADATA_UP,
  METADATA_UP_DEFAULT,
  NOTIFICATION_DEFAULT,
  PREFIX_DEFAULT,
  PREFIXES,
  STORAGE,
  STORAGE_DEFAULT,
  UIMODE_DEFAULT,
  UIMODES,
  UITHEME_DEFAULT,
  UITHEMES
};
