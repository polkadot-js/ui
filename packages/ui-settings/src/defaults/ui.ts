// Copyright 2017-2024 @polkadot/ui-settings authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Option } from '../types.js';

import { isPolkadot } from './type.js';

export const LANGUAGE_DEFAULT = 'default';

export const UIMODE_DEFAULT = !isPolkadot && typeof window !== 'undefined' && window.location.host.includes('ui-light')
  ? 'light'
  : 'full';

export const UIMODES: Option[] = [
  {
    info: 'full',
    text: 'Fully featured',
    value: 'full'
  },
  {
    info: 'light',
    text: 'Basic features only',
    value: 'light'
  }
];

export const UITHEME_DEFAULT = isPolkadot
  ? 'polkadot'
  : 'substrate';

export const UITHEMES: Option[] = [
  {
    info: 'polkadot',
    text: 'Polkadot',
    value: 'polkadot'
  },
  {
    info: 'substrate',
    text: 'Substrate',
    value: 'substrate'
  }
];

export const ICON_DEFAULT = 'default';

export const ICON_DEFAULT_HOST = isPolkadot
  ? 'polkadot'
  : 'substrate';

export const ICONS: Option[] = [
  {
    info: 'default',
    text: 'Default for the connected node',
    value: 'default'
  },
  {
    info: 'polkadot',
    text: 'Polkadot',
    value: 'polkadot'
  },
  {
    info: 'substrate',
    text: 'Substrate',
    value: 'substrate'
  },
  {
    info: 'beachball',
    text: 'Beachball',
    value: 'beachball'
  }
];

export const NOTIFICATION_DEFAULT = 'popup';
