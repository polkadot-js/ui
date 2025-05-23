// Copyright 2017-2025 @polkadot/ui-shared authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { svg } from './svg.js';

export function circle (r: number, cx: number, cy: number): Element {
  const elem = svg('circle');

  elem.setAttributeNS('', 'cx', `${cx}`);
  elem.setAttributeNS('', 'cy', `${cy}`);
  elem.setAttributeNS('', 'r', `${r}`);

  return elem;
}
