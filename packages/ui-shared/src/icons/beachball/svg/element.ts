// Copyright 2016 Dan Finlay
// Copyright 2017-2020 @polkadot/ui-shared authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import createSvg from './svg';

export default function element (size: number, type = 'svg', x = 0, y = 0): Element {
  const elem = createSvg(type);

  elem.setAttributeNS('', 'x', `${x}`);
  elem.setAttributeNS('', 'y', `${y}`);
  elem.setAttributeNS('', 'width', `${size}`);
  elem.setAttributeNS('', 'height', `${size}`);

  return elem;
}
