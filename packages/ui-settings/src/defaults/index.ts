// Copyright 2017-2019 @polkadot/ui-settings authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Option } from '../types';

import { CRYPTOS } from './crypto';
import { ENDPOINTS, ENDPOINT_DEFAULT } from './endpoints';
import { PREFIXES, PREFIX_DEFAULT } from './ss58';
import { isPolkadot } from './type';

const LANGUAGE_DEFAULT = 'default';

const LANGUAGES: Option[] = [
  {
    info: 'detect',
    text: 'Default browser language (auto-detect)',
    value: LANGUAGE_DEFAULT
  }
];

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

export {
  CRYPTOS,
  ENDPOINT_DEFAULT,
  ENDPOINTS,
  LANGUAGE_DEFAULT,
  LANGUAGES,
  LOCKING_DEFAULT,
  LOCKING,
  PREFIX_DEFAULT,
  PREFIXES,
  UIMODE_DEFAULT,
  UIMODES,
  UITHEME_DEFAULT,
  UITHEMES
};
