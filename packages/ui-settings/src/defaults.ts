// Copyright 2017-2019 @polkadot/ui-settings authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Options } from './types';

// matches https://polkadot.js.org & https://poc-3.polkadot.io
const isPolkadot = window.location.host.indexOf('polkadot') !== -1;

const WSS_POLKADOT = 'wss://poc3-rpc.polkadot.io/';
const WSS_SUBSTRATE = 'wss://substrate-rpc.parity.io/';
const LANGUAGE_DEFAULT = 'default';

const ENDPOINTS: Options = [
  { text: 'Alexander (Polkadot, hosted by Parity)', value: WSS_POLKADOT },
  { text: 'Dried Danta (Substrate, hosted by Parity)', value: WSS_SUBSTRATE },
  { text: 'Local Node (127.0.0.1:9944)', value: 'ws://127.0.0.1:9944/' }
];

const LANGUAGES: Options = [
  { value: LANGUAGE_DEFAULT, text: 'Default browser language (auto-detect)' }
];

const UIMODES: Options = [
  { value: 'full', text: 'Fully featured' },
  { value: 'light', text: 'Basic features only' }
];

const UITHEMES: Options = [
  { value: 'polkadot', text: 'Polkadot' },
  { value: 'substrate', text: 'Substrate' }
];

const ENDPOINT_DEFAULT = isPolkadot
  ? WSS_POLKADOT
  : WSS_SUBSTRATE;

const UITHEME_DEFAULT = isPolkadot
  ? 'polkadot'
  : 'substrate';

const UIMODE_DEFAULT = !isPolkadot && window.location.host.indexOf('ui-light') !== -1
  ? 'light'
  : 'full';

export {
  ENDPOINT_DEFAULT,
  ENDPOINTS,
  LANGUAGE_DEFAULT,
  LANGUAGES,
  UIMODE_DEFAULT,
  UIMODES,
  UITHEME_DEFAULT,
  UITHEMES
};
