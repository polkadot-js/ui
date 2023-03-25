// Copyright 2017-2023 @polkadot/ui-keyring authors & contributors
// SPDX-License-Identifier: Apache-2.0

/// <reference types="@polkadot/dev-test/globals.d.ts" />

import type { KeyringStruct } from '../types.js';

import { KeyringOption } from './index.js';

describe('KeyringOption', (): void => {
  it('should not allow initOptions to be called more than once', (): void => {
    const keyringOption = new KeyringOption();
    const state = {} as KeyringStruct;

    // first call
    keyringOption.init(state);

    // second call
    expect(
      () => keyringOption.init(state)
    ).toThrow('Unable to initialise options more than once');

    // cleanup?
    keyringOption.clear();
  });
});
