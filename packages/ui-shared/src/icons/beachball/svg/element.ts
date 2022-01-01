// Copyright 2017-2022 @polkadot/ui-shared authors & contributors
// SPDX-License-Identifier: Apache-2.0

// Copyright 2016 Dan Finlay

import { svg } from './svg';

export function element (size: number, type = 'svg', x = 0, y = 0): Element {
  const elem = svg(type);

  elem.setAttributeNS('', 'x', `${x}`);
  elem.setAttributeNS('', 'y', `${y}`);
  elem.setAttributeNS('', 'width', `${size}`);
  elem.setAttributeNS('', 'height', `${size}`);

  return elem;
}
