// Copyright 2017-2019 @polkadot/ui-settings authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Option } from '../types';

import { isPolkadot } from './type';

type ChainName = 'alexander' | 'edgeware' | 'edgewareTest' | 'flamingFir' | 'kusama' | 'kulupu';

interface ChainData {
  chainDisplay: string;
  logo: 'alexander' | 'edgeware' | 'kusama' | 'polkadot' | 'substrate';
  type: string;
}

type ProviderName = 'commonwealth' | 'parity' | 'unfrastructure' | 'w3f' | 'kulupu';

interface PoviderData {
  providerDisplay: string;
  nodes: Partial<Record<ChainName, string>>;
}

// we use this to give an ordering to the chains available
const ORDER_CHAINS: ChainName[] = ['kusama', 'edgeware', 'alexander', 'edgewareTest', 'flamingFir', 'kulupu'];

// we use this to order the providers inside the chains
const ORDER_PROVIDERS: ProviderName[] = ['parity', 'w3f', 'unfrastructure', 'commonwealth', 'kulupu'];

// some suplementary info on a per-chain basis
const CHAIN_INFO: Record<ChainName, ChainData> = {
  alexander: {
    chainDisplay: 'Alexander',
    logo: 'alexander',
    type: 'Polkadot Testnet'
  },
  edgeware: {
    chainDisplay: 'Edgeware',
    logo: 'edgeware',
    type: 'Edgeware Mainnet'
  },
  edgewareTest: {
    chainDisplay: 'Edgeware Testnet',
    logo: 'edgeware',
    type: 'Edgeware Testnet'
  },
  flamingFir: {
    chainDisplay: 'Flaming Fir',
    logo: 'substrate',
    type: 'Substrate Testnet'
  },
  kusama: {
    chainDisplay: 'Kusama CC3',
    logo: 'kusama',
    type: 'Polkadot Canary'
  },
  kulupu: {
    chainDisplay: 'Kulupu',
    logo: 'substrate',
    type: 'Kulupu Mainnet'
  }
};

// the actual providers with all  the nodes they provide
const PROVIDERS: Record<ProviderName, PoviderData> = {
  commonwealth: {
    providerDisplay: 'Commonwealth Labs',
    nodes: {
      // edgeware: 'wss://mainnet1.edgewa.re',
      edgewareTest: 'wss://testnet4.edgewa.re'
    }
  },
  parity: {
    providerDisplay: 'Parity',
    nodes: {
      // alexander: 'wss://poc3-rpc.polkadot.io/',
      flamingFir: 'wss://substrate-rpc.parity.io/',
      kusama: 'wss://kusama-rpc.polkadot.io/'
    }
  },
  unfrastructure: {
    providerDisplay: 'Centrality UNfrastructure',
    nodes: {
      // alexander: 'wss://alex.unfrastructure.io/public/ws'
    }
  },
  w3f: {
    providerDisplay: 'Web3 Foundation',
    nodes: {
      kusama: 'wss://cc3-5.kusama.network/'
    }
  },
  kulupu: {
    providerDisplay: 'Kulupu',
    nodes: {
      kulupu: 'wss://rpc.kulupu.network/ws'
    }
  }
};

export const ENDPOINT_DEFAULT = isPolkadot
  ? PROVIDERS.parity.nodes.kusama
  : PROVIDERS.parity.nodes.flamingFir;

export const ENDPOINTS: Option[] = ORDER_CHAINS.reduce((endpoints: Option[], chainName): Option[] => {
  const { chainDisplay, logo, type } = CHAIN_INFO[chainName];

  return ORDER_PROVIDERS.reduce((endpoints: Option[], providerName): Option[] => {
    const { providerDisplay, nodes } = PROVIDERS[providerName];
    const wssUrl = nodes[chainName];

    if (wssUrl) {
      endpoints.push({
        info: logo,
        text: `${chainDisplay} (${type}, hosted by ${providerDisplay})`,
        value: wssUrl
      });
    }

    return endpoints;
  }, endpoints);
}, []);

// add a local node right at the end
ENDPOINTS.push({
  info: 'local',
  text: 'Local Node (Own, 127.0.0.1:9944)',
  value: 'ws://127.0.0.1:9944/'
});
