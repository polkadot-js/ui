// Copyright 2016 Dan Finlay
// Copyright 2017-2020 @polkadot/ui-shared authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ColorGen, Seeder } from './types';

import Color from 'color';

import { COLORS } from './defaults';

const WOBBLE = 30;

export default function colors (seeder: Seeder): ColorGen {
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
