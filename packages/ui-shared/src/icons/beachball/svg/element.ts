// Copyright 2016 Dan Finlay
// Copyright 2017-2020 @polkadot/ui-shared authors & contributors
// SPDX-License-Identifier: Apache-2.0

import createSvg from './svg';

export default function element (size: number, type = 'svg', x = 0, y = 0): Element {
  const elem = createSvg(type);

  elem.setAttributeNS('', 'x', `${x}`);
  elem.setAttributeNS('', 'y', `${y}`);
  elem.setAttributeNS('', 'width', `${size}`);
  elem.setAttributeNS('', 'height', `${size}`);

  return elem;
}
