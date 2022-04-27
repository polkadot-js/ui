// Copyright 2017-2022 @polkadot/ui authors & contributors
// SPDX-License-Identifier: Apache-2.0

const nodeCrypto = require('crypto');

window.crypto = {
  getRandomValues: function (buffer) {
    return nodeCrypto.randomFillSync(buffer);
  }
};
