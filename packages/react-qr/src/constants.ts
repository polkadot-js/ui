// Copyright 2017-2022 @polkadot/react-qr authors & contributors
// SPDX-License-Identifier: Apache-2.0

const ADDRESS_PREFIX = 'substrate';
const SEED_PREFIX = 'secret';
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
  SEED_PREFIX,
  SUBSTRATE_ID
};
