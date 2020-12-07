// Copyright 2017-2020 @polkadot/ui-shared authors & contributors
// SPDX-License-Identifier: Apache-2.0

// Copyright 2016 Dan Finlay

import type { Seeder } from '../types';

import { SHAPE_COUNT } from '../defaults';
import newRect from '../svg/rect';

export default function square (seeder: Seeder, fill: string, diameter: number, count: number): Element {
  const center = diameter / 2;
  const svg = newRect(diameter);
  const firstRot = seeder();
  const angle = Math.PI * 2 * firstRot;
  const scale = count / SHAPE_COUNT;
  const velocity = ((diameter / SHAPE_COUNT) * seeder()) + (scale * diameter);
  const tx = (Math.cos(angle) * velocity).toFixed(3);
  const ty = (Math.sin(angle) * velocity).toFixed(3);
  const rot = ((firstRot * 360) + (seeder() * 180)).toFixed(1);

  svg.setAttributeNS('', 'transform', `translate(${tx} ${ty}) rotate(${rot} ${center} ${center})`);
  svg.setAttributeNS('', 'fill', fill);

  return svg;
}
