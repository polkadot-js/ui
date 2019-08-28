// Copyright 2017-2019 @polkadot/ui-settings authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Options } from './types';

// matches https://polkadot.js.org & https://*.polkadot.io
const isPolkadot = typeof window !== 'undefined' && window.location.host.indexOf('polkadot') !== -1;

const WSS_NODES = {
  parity: {
    hosted: 'hosted by Parity',
    nodes: {
      alex: 'wss://poc3-rpc.polkadot.io/',
      fir: 'wss://substrate-rpc.parity.io/',
      kusama: 'wss://kusama-rpc.polkadot.io/'
    }
  },
  unfra: {
    hosted: 'hosted by Centrality UNfrastructure',
    nodes: {
      alex: 'wss://alex.unfrastructure.io/public/ws'
    }
  },
  w3f: {
    hosted: 'hosted by Web3 Foundation',
    nodes: {
      kusama: 'wss://canary-5.kusama.network/'
    }
  }
};
const LANGUAGE_DEFAULT = 'default';
const LOCKING_DEFAULT = 'session';

const CRYPTOS: Options = [
  {
    info: 'ed25519',
    text: 'Edwards (ed25519)',
    value: 'ed25519'
  },
  {
    info: 'sr25519',
    text: 'Schnorrkel (sr25519)',
    value: 'sr25519'
  }
];

const ENDPOINTS: Options = [
  {
    info: 'kusama',
    text: `Kusama (Polkadot Canary, ${WSS_NODES.parity.hosted})`,
    value: WSS_NODES.parity.nodes.kusama
  },
  {
    info: 'kusama',
    text: `Kusama (Polkadot Canary, ${WSS_NODES.w3f.hosted})`,
    value: WSS_NODES.w3f.nodes.kusama
  },
  {
    info: 'alexander',
    text: `Alexander (Polkadot Test, ${WSS_NODES.parity.hosted})`,
    value: WSS_NODES.parity.nodes.alex
  },
  {
    info: 'alexander',
    text: `Alexander (Polkadot Test, ${WSS_NODES.unfra.hosted})`,
    value: WSS_NODES.unfra.nodes.alex
  },
  {
    info: 'substrate',
    text: `Flaming Fir (Substrate Test, ${WSS_NODES.parity.hosted})`,
    value: WSS_NODES.parity.nodes.fir
  },
  {
    info: 'local',
    text: 'Local Node (127.0.0.1:9944)',
    value: 'ws://127.0.0.1:9944/'
  }
];

const LANGUAGES: Options = [
  {
    info: 'detect',
    text: 'Default browser language (auto-detect)',
    value: LANGUAGE_DEFAULT
  }
];

const LOCKING: Options = [
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

const PREFIXES: Options = [
  {
    info: 'default',
    text: 'Default for the connected node',
    value: -1
  },
  {
    info: 'substrate',
    text: 'Substrate (development)',
    value: 42
  },
  {
    info: 'kusama',
    text: 'Kusama (canary)',
    value: 2
  },
  {
    info: 'polkadot',
    text: 'Polkadot (live)',
    value: 0
  }
];

const UIMODES: Options = [
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

const UITHEMES: Options = [
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

const ENDPOINT_DEFAULT = isPolkadot
  ? WSS_NODES.parity.nodes.kusama
  : WSS_NODES.parity.nodes.fir;

const PREFIX_DEFAULT = -1;

const UITHEME_DEFAULT = isPolkadot
  ? 'polkadot'
  : 'substrate';

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
