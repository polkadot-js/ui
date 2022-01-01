// Copyright 2017-2022 @polkadot/ui-shared authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Seeder } from './types';

import { isU8a, stringToU8a } from '@polkadot/util';

const DIVISOR = 256 * 256;

export function seeder (_seed: string | Uint8Array = new Uint8Array(32)): Seeder {
  const seed: Uint8Array = isU8a(_seed)
    ? _seed
    : stringToU8a(_seed);

  let index = (seed[Math.floor(seed.length / 2)] % seed.length) - 1;

  const next = (): number => {
    index += 1;

    if (index === seed.length) {
      index = 0;
    }

    return seed[index];
  };

  return (): number => {
    return ((next() * 256) + next()) / DIVISOR;
  };
}
