// Copyright 2017-2019 @polkadot/ui-keyring authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

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
