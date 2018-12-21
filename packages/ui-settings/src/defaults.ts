// Copyright 2017-2018 @polkadot/ui-settings authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ChainsInfo, Options } from './types';

const CHAINS: ChainsInfo = [
  {
    name: 'Development',
    networkId: 0,
    tokenDecimals: 0,
    tokenSymbol: 'Unit'
  },
  {
    name: 'Local Testnet',
    networkId: 0,
    tokenDecimals: 0,
    tokenSymbol: 'Unit'
  },
  {
    name: 'Charred Cherry',
    networkId: 68,
    tokenDecimals: 15,
    tokenSymbol: 'CHR'
  }
];

const ENDPOINTS: Options = [
  { text: 'Charred Cherry (Substrate, hosted by Parity)', value: 'wss://substrate-rpc.parity.io/' },
  { disabled: true, text: 'Alexander (Polkadot, hosted by Parity)', value: 'wss://polkadot-rpc.polkadot.io/' },
  { text: 'Local Node (127.0.0.1:9944)', value: 'ws://127.0.0.1:9944/' }
];

const LANGUAGES: Options = [
  { value: 'default', text: 'Default browser language (auto-detect)' }
];

const UIMODES: Options = [
  { value: 'full', text: 'Fully featured' },
  { value: 'light', text: 'Basic features only' }
];

const UITHEMES: Options = [
  { value: 'polkadot', text: 'Polkadot' },
  { value: 'substrate', text: 'Substrate' },
];

export {
  CHAINS,
  ENDPOINTS,
  LANGUAGES,
  UIMODES,
  UITHEMES
};
