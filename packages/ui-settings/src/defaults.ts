// Copyright 2017-2019 @polkadot/ui-settings authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Options } from './types';

// matches https://polkadot.js.org & https://*.polkadot.io
// tslint:disable-next-line
const isPolkadot = typeof window !== 'undefined' && window.location.host.indexOf('polkadot') !== -1;

const WSS_NODES = {
  parity: {
    hosted: 'hosted by Parity',
    nodes: {
      alex: 'wss://poc3-rpc.polkadot.io/',
      elm: 'wss://substrate-rpc.parity.io/'
    }
  },
  unfra: {
    hosted: 'hosted by Centrality UNfrastructure',
    nodes: {
      alex: 'wss://alex.unfrastructure.io/public/ws'
    }
  }
};
const LANGUAGE_DEFAULT = 'default';
const LOCKING_DEFAULT = 'session';

const CRYPTOS: Options = [
  { text: 'Edwards (ed25519)', value: 'ed25519' },
  { text: 'Schnorrkel (sr25519)', value: 'sr25519' }
];

const ENDPOINTS: Options = [
  { text: `Alexander (Polkadot, ${WSS_NODES.parity.hosted})`, value: WSS_NODES.parity.nodes.alex },
  { text: `Alexander (Polkadot, ${WSS_NODES.unfra.hosted})`, value: WSS_NODES.unfra.nodes.alex },
  { text: `Emberic Elm (Substrate, ${WSS_NODES.parity.hosted})`, value: WSS_NODES.parity.nodes.elm },
  { text: 'Local Node (127.0.0.1:9944)', value: 'ws://127.0.0.1:9944/' }
];

const LANGUAGES: Options = [
  { text: 'Default browser language (auto-detect)', value: LANGUAGE_DEFAULT }
];

const LOCKING: Options = [
  { text: 'Once per session', value: 'session' },
  { text: 'On each transaction', value: 'tx' }
];

const PREFIXES: Options = [
  { text: 'Default for the connected node', value: -1 },
  { text: 'Substrate (development)', value: 42 },
  { text: 'Kusama (canary)', value: 2 },
  { text: 'Polkadot (live)', value: 0 }
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
  ? WSS_NODES.parity.nodes.alex
  : WSS_NODES.parity.nodes.elm;

const PREFIX_DEFAULT = -1;

const UITHEME_DEFAULT = isPolkadot
  ? 'polkadot'
  : 'substrate';

// tslint:disable-next-line
const UIMODE_DEFAULT = !isPolkadot && typeof window !== 'undefined' && window.location.host.indexOf('ui-light') !== -1
  ? 'light'
  : 'full';

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
