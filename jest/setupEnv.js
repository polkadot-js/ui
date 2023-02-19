// Copyright 2017-2023 @polkadot/ui authors & contributors
// SPDX-License-Identifier: Apache-2.0

import nodeCrypto from 'crypto';

window.crypto ??= {
  getRandomValues: function (buffer) {
    return nodeCrypto.randomFillSync(buffer);
  }
};
