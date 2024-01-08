// Copyright 2017-2024 @polkadot/ui-shared authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { element } from './element.js';

export function rect (size: number): Element {
  const elem = element(size, 'rect');

  elem.setAttributeNS('', 'rx', `${size / 16}`);
  elem.setAttributeNS('', 'ry', `${size / 16}`);

  return elem;
}
