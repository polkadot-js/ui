// Copyright 2017-2020 @polkadot/react-qr authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

const ADDRESS_PREFIX = 'substrate';
const FRAME_SIZE = 1024;
const SUBSTRATE_ID = new Uint8Array([0x53]);
const CRYPTO_SR25519 = new Uint8Array([0x01]);
const CMD_SIGN_TX = new Uint8Array([0]);
const CMD_SIGN_TX_HASH = new Uint8Array([1]);
const CMD_SIGN_IMMORTAL_TX = new Uint8Array([2]);
const CMD_SIGN_MSG = new Uint8Array([3]);

export {
  ADDRESS_PREFIX,
  CMD_SIGN_TX,
  CMD_SIGN_TX_HASH,
  CMD_SIGN_IMMORTAL_TX,
  CMD_SIGN_MSG,
  CRYPTO_SR25519,
  FRAME_SIZE,
  SUBSTRATE_ID
};
