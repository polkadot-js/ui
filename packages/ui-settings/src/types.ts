// Copyright 2017-2021 @polkadot/ui-settings authors & contributors
// SPDX-License-Identifier: Apache-2.0

export type Option = {
  disabled?: boolean;
  info: string;
  text: string;
  value: string | number;
}

export interface SettingsStruct {
  apiType: Endpoint;
  apiUrl: string;
  camera: string;
  i18nLang: string;
  icon: string;
  ledgerConn: string;
  locking: string;
  prefix: number;
  uiMode: string;
  uiTheme: string;
}

export interface NetworkSpecsStruct {
  color: string;
  decimals: number;
  genesisHash: string;
  prefix: number;
  title: string;
  unit: string;
}

export type Endpoint = JsonRpcEndpoint | SubstrateConnectEndpoint;
export interface JsonRpcEndpoint {
  type: EndpointType.jrpc;
  url: string;
}

export interface SubstrateConnectEndpoint {
  type: EndpointType.substrateconnect;
  chain: string;
}

export enum EndpointType {
  jrpc = 'json-rpc',
  substrateconnect = 'substrate-connect'
}
