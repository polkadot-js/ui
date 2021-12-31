// Copyright 2017-2022 @polkadot/ui-settings authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Option } from '../types';

import { isPolkadot } from './type';

const LANGUAGE_DEFAULT = 'default';

const UIMODE_DEFAULT = !isPolkadot && typeof window !== 'undefined' && window.location.host.includes('ui-light')
  ? 'light'
  : 'full';

const UIMODES: Option[] = [
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

const UITHEME_DEFAULT = isPolkadot
  ? 'polkadot'
  : 'substrate';

const UITHEMES: Option[] = [
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

const ICON_DEFAULT = 'default';

const ICON_DEFAULT_HOST = isPolkadot
  ? 'polkadot'
  : 'substrate';

const ICONS: Option[] = [
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

const NOTIFICATION_DEFAULT = 'popup';

export {
  ICON_DEFAULT,
  ICON_DEFAULT_HOST,
  ICONS,
  LANGUAGE_DEFAULT,
  NOTIFICATION_DEFAULT,
  UIMODE_DEFAULT,
  UIMODES,
  UITHEME_DEFAULT,
  UITHEMES
};
