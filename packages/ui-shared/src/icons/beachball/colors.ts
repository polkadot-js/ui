// Copyright 2017-2022 @polkadot/ui-shared authors & contributors
// SPDX-License-Identifier: Apache-2.0

// Copyright 2016 Dan Finlay

import type { ColorGen, Seeder } from './types';

import Color from 'color';

import { COLORS } from './defaults';

const WOBBLE = 30;

export function colors (seeder: Seeder): ColorGen {
  const amount = (seeder() * WOBBLE) - (WOBBLE / 2);
  const all = COLORS.map((hex): Color =>
    Color(hex).rotate(amount)
  );

  return (alpha = 1): string => {
    const index = Math.floor(all.length * seeder());

    return all.splice(index, 1)[0]
      .alpha(alpha)
      .string();
  };
}
