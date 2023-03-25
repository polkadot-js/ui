// Copyright 2017-2023 @polkadot/ui-keyring authors & contributors
// SPDX-License-Identifier: Apache-2.0

/// <reference types="@polkadot/dev-test/globals.d.ts" />

import type { KeyringStruct } from '../types.js';

import { KeyringOption } from './index.js';

const keyringOption = new KeyringOption();

describe('KeyringOption', (): void => {
  afterAll((): void => {
    keyringOption.clear();
  });

  it('should not allow initOptions to be called more than once', (): void => {
    const state: Partial<KeyringStruct> = {};

    // first call
    keyringOption.init(state as KeyringStruct);

    // second call
    expect(
      () => keyringOption.init(state as KeyringStruct)
    ).toThrow('Unable to initialise options more than once');
  });
});
