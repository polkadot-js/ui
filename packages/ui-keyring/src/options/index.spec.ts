// Copyright 2017-2020 @polkadot/ui-keyring authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { KeyringStruct } from '../types';
import keyringOptionInstance from '.';

describe('KeyringOption', (): void => {
  it('should not allow initOptions to be called more than once', (): void => {
    const state: Partial<KeyringStruct> = {};

    // first call
    keyringOptionInstance.init(state as KeyringStruct);

    // second call
    expect((): void => {
      keyringOptionInstance.init(state as KeyringStruct);
    }).toThrowError('Unable to initialise options more than once');
  });
});
