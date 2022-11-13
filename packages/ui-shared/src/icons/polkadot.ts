// Copyright 2018-2022 @polkadot/ui-shared authors & contributors
// SPDX-License-Identifier: Apache-2.0

// Copyright 2018 Paritytech via paritytech/oo7/polkadot-identicon
//
// This has been converted from the original version that can be found at
//
// https://github.com/paritytech/oo7/blob/251ba2b7c45503b68eab4320c270b5afa9bccb60/packages/polkadot-identicon/src/index.jsx

import type { Circle, Options } from './types';

import { blake2AsU8a, decodeAddress } from '@polkadot/util-crypto';

interface Scheme {
  freq: number;
  colors: number[];
}

const S = 64;
const C = S / 2;
const Z = S / 64 * 5;

const OUTER_CIRCLE: Circle = {
  cx: C,
  cy: C,
  fill: '#eee',
  r: C
};

const SCHEMES: Scheme[] = [
  { colors: [0, 28, 0, 0, 28, 0, 0, 28, 0, 0, 28, 0, 0, 28, 0, 0, 28, 0, 1], freq: 1 },
  { colors: [0, 1, 3, 2, 4, 3, 0, 1, 3, 2, 4, 3, 0, 1, 3, 2, 4, 3, 5], freq: 20 },
  { colors: [1, 2, 3, 1, 2, 4, 5, 5, 4, 1, 2, 3, 1, 2, 4, 5, 5, 4, 0], freq: 16 },
  { colors: [0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 3], freq: 32 },
  { colors: [0, 1, 2, 3, 4, 5, 0, 1, 2, 3, 4, 5, 0, 1, 2, 3, 4, 5, 6], freq: 32 },
  { colors: [0, 1, 2, 3, 4, 5, 3, 4, 2, 0, 1, 6, 7, 8, 9, 7, 8, 6, 10], freq: 128 },
  { colors: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 8, 6, 7, 5, 3, 4, 2, 11], freq: 128 }
];

const SCHEME_TOTAL = SCHEMES
  .map((s): number => s.freq)
  .reduce((a, b): number => a + b);

let zeroHash: Uint8Array;

function getCircleXY (isSixPoint: boolean): [number, number][] {
  const r = isSixPoint
    ? (C / 8 * 5)
    : (C / 4 * 3);
  const rroot3o2 = r * Math.sqrt(3) / 2;
  const ro2 = r / 2;
  const rroot3o4 = r * Math.sqrt(3) / 4;
  const ro4 = r / 4;
  const r3o4 = r * 3 / 4;

  return [
    [C, C - r],
    [C, C - ro2],
    [C - rroot3o4, C - r3o4],
    [C - rroot3o2, C - ro2],
    [C - rroot3o4, C - ro4],
    [C - rroot3o2, C],
    [C - rroot3o2, C + ro2],
    [C - rroot3o4, C + ro4],
    [C - rroot3o4, C + r3o4],
    [C, C + r],
    [C, C + ro2],
    [C + rroot3o4, C + r3o4],
    [C + rroot3o2, C + ro2],
    [C + rroot3o4, C + ro4],
    [C + rroot3o2, C],
    [C + rroot3o2, C - ro2],
    [C + rroot3o4, C - ro4],
    [C + rroot3o4, C - r3o4],
    [C, C]
  ];
}

function findScheme (d: number): Scheme {
  let cum = 0;
  const schema = SCHEMES.find((s): boolean => d < (cum += s.freq));

  if (!schema) {
    throw new Error('Unable to find schema');
  }

  return schema;
}

function addressToId (address: string): Uint8Array {
  if (!zeroHash) {
    zeroHash = blake2AsU8a(new Uint8Array(32), 512);
  }

  return blake2AsU8a(decodeAddress(address), 512).map((x, i) => (x + 256 - zeroHash[i]) % 256);
}

function getColors (address: string): string[] {
  const id = addressToId(address);
  const sat = (Math.floor(id[29] * 70 / 256 + 26) % 80) + 30;
  const palette = new Array<string>(id.length);

  for (let i = 0; i < id.length; i++) {
    const b = (id[i] + i % 28 * 58) % 256;

    palette[i] = b === 0
      ? '#444'
      : b === 255
        ? 'transparent'
        : `hsl(${Math.floor(b % 64 * 360 / 64)}, ${sat}%, ${[53, 15, 35, 75][Math.floor(b / 64)]}%)`;
  }

  const d = Math.floor((id[30] + id[31] * 256) % SCHEME_TOTAL);
  const scheme = findScheme(d);
  const rot = (id[28] % 6) * 3;

  return scheme.colors.map((_, i): string =>
    palette[scheme.colors[i < 18 ? (i + rot) % 18 : 18]]
  );
}

/**
 * @description Generate an array of the circles that make up an identicon
 */
export function polkadotIcon (address: string, { isAlternative }: Options): Circle[] {
  const xy = getCircleXY(isAlternative);
  let colors: string[];

  try {
    // in some cases, e.g. RN where crypto may not be initialized, chaos can
    // happen when hashing, in these cases we just fill with a placeholder
    colors = getColors(address);
  } catch {
    colors = new Array<string>(xy.length).fill('#ddd');
  }

  return [OUTER_CIRCLE].concat(
    xy.map(([cx, cy], index): Circle => ({
      cx, cy, fill: colors[index], r: Z
    }))
  );
}
