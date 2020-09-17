// Copyright 2017-2020 @polkadot/ui-shared authors & contributors
// SPDX-License-Identifier: Apache-2.0

import createElement from './element';

export default function rect (size: number): Element {
  const elem = createElement(size, 'rect');

  elem.setAttributeNS('', 'rx', `${size / 16}`);
  elem.setAttributeNS('', 'ry', `${size / 16}`);

  return elem;
}
