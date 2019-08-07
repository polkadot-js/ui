// Copyright 2017-2019 @polkadot/react-qr authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { u8aConcat, u8aToU8a } from '@polkadot/util';
import { decodeAddress } from '@polkadot/util-crypto';

import { ADDRESS_PREFIX, CRYPTO_SR25519, DEFAULT_IMG_SIZE, FRAME_SIZE, SUBSTRATE_ID } from './constants';

const MULTIPART = new Uint8Array([0]);

export function encodeNumber (value: number): Uint8Array {
  return new Uint8Array([value >> 8, value & 0xff]);
}

export function encodeString (value: string): Uint8Array {
  const u8a = new Uint8Array(value.length);

  for (let i = 0; i < value.length; i++) {
    u8a[i] = value.charCodeAt(i);
  }

  return u8a;
}

export function decodeString (value: Uint8Array): string {
  return value.reduce((str, code): string => {
    return str + String.fromCharCode(code);
  }, '');
}

export function createAddressPayload (address: string): Uint8Array {
  return u8aConcat(
    encodeString(ADDRESS_PREFIX),
    encodeString(address)
  );
}

export function createSignPayload (address: string, cmd: Uint8Array, payload: string | Uint8Array): Uint8Array {
  return u8aConcat(
    SUBSTRATE_ID,
    CRYPTO_SR25519,
    cmd,
    decodeAddress(address),
    u8aToU8a(payload)
  );
}

export function createFrames (input: Uint8Array): Uint8Array[] {
  const frames = [];
  let idx = 0;

  while (idx < input.length) {
    frames.push(input.subarray(idx, idx + FRAME_SIZE));

    idx += FRAME_SIZE;
  }

  return frames.map((frame, index: number): Uint8Array =>
    u8aConcat(
      MULTIPART,
      encodeNumber(frames.length),
      encodeNumber(index),
      frame
    )
  );
}

export function createImgSize (size: number = DEFAULT_IMG_SIZE): Record<string, string> {
  const height = `${size}px`;

  return {
    height,
    width: height
  };
}
