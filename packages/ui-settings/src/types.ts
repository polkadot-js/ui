// Copyright 2017-2025 @polkadot/ui-settings authors & contributors
// SPDX-License-Identifier: Apache-2.0

export interface Option {
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
  ledgerApp: string;
  ledgerConn: string;
  locking: string;
  metadataUp: string;
  notification: string;
  prefix: number;
  storage: string;
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

export interface Endpoint {
  type: EndpointType;
  param: string;
}

export type EndpointType = 'json-rpc' | 'substrate-connect';
