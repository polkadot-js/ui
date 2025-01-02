// Copyright 2017-2025 @polkadot/ui-shared authors & contributors
// SPDX-License-Identifier: Apache-2.0

// Copyright 2016 Dan Finlay

import type { Colord } from 'colord';
import type { ColorGen, Seeder } from './types.js';

import { colord } from 'colord';

import { COLORS } from './defaults.js';

const WOBBLE = 30;

export function colors (seeder: Seeder): ColorGen {
  const amount = (seeder() * WOBBLE) - (WOBBLE / 2);
  const all = COLORS.map((hex): Colord =>
    colord(hex).rotate(amount)
  );

  return (alpha = 1): string => {
    const index = Math.floor(all.length * seeder());

    return all.splice(index, 1)[0]
      .alpha(alpha)
      .toHslString();
  };
}
