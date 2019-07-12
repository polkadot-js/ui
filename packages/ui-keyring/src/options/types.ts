// Copyright 2017-2019 @polkadot/ui-keyring authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { KeyringItemType, KeyringStruct } from '../types';

import React from 'react';

export interface KeyringSectionOption {
  className?: string;
  disabled?: boolean;
  content?: React.ReactNode;
  key: string | null;
  name: string;
  text: React.ReactNode;
  value: string | null;
}

export type KeyringSectionOptions = KeyringSectionOption[];

export type KeyringOptions = {
  [type in KeyringItemType | 'all' | 'allPlus' | 'recent' | 'testing']: KeyringSectionOptions
};

export type KeyringOption$Type = keyof KeyringOptions;

export interface KeyringOptionInstance {
  createOptionHeader: (name: string) => KeyringSectionOption;
  init: (keyring: KeyringStruct) => void;
}
