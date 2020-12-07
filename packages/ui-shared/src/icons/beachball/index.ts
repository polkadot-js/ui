// Copyright 2017-2020 @polkadot/ui-shared authors & contributors
// SPDX-License-Identifier: Apache-2.0

// Copyright 2016 Dan Finlay

import type { Options } from '../types';

import newShape from './shape/circle';
import newElement from './svg/element';
import colors from './colors';
import newContainer from './container';
import { SHAPE_COUNT } from './defaults';
import newSeeder from './seeder';

export default function generate (seed: string | Uint8Array, { size = 256 }: Options, className = '', style?: { [index: string]: string }): HTMLElement {
  const seeder = newSeeder(seed);
  const colorGen = colors(seeder);
  const outer = newContainer(size, 'white', className, style);
  const container = newContainer(size, colorGen());
  const svg = newElement(size);

  outer.appendChild(container);
  container.appendChild(svg);

  for (let count = 0; count < SHAPE_COUNT; count++) {
    const fill = colorGen();
    const shape = newShape(seeder, fill, size, count);

    svg.appendChild(shape);
  }

  return outer;
}
