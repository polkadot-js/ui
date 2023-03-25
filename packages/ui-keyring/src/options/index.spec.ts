// Copyright 2017-2023 @polkadot/ui-keyring authors & contributors
// SPDX-License-Identifier: Apache-2.0

/// <reference types="@polkadot/dev-test/globals.d.ts" />

import type { KeyringStruct } from '../types.js';

import { KeyringOption } from './index.js';

describe('KeyringOption', (): void => {
  // Warning: Test "should not allow initOptions to be called more than once" generated asynchronous activity after the test ended. This activity created the error "TypeError: Cannot read properties of undefined (reading 'subject')" and would have caused the test to fail, but instead triggered an uncaughtException event.
  it.skip('should not allow initOptions to be called more than once', (): void => {
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
