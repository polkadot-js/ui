// Copyright 2017-2022 @polkadot/ui-shared authors & contributors
// SPDX-License-Identifier: Apache-2.0

// Copyright 2016 Dan Finlay

import type { Seeder } from '../types';

import { SHAPE_COUNT } from '../defaults';
import { circle as newCircle } from '../svg/circle';

export function circle (seeder: Seeder, fill: string, diameter: number, count: number): Element {
  const center = diameter / 2;
  const angle = seeder() * 360;
  const radius = (((SHAPE_COUNT - count) / SHAPE_COUNT) * (diameter / 2)) + ((diameter / 8) * seeder());
  const offset = (diameter / 4) * (seeder() + ((count + 1) / SHAPE_COUNT));
  const cx = (offset * Math.sin(angle)) + center;
  const cy = (offset * Math.cos(angle)) + center;
  const svg = newCircle(radius, cx, cy);

  svg.setAttributeNS('', 'fill', fill);

  return svg;
}
