// Copyright 2017-2020 @polkadot/ui-shared authors & contributors
// SPDX-License-Identifier: Apache-2.0

import createSvg from './svg';

export default function circle (r: number, cx: number, cy: number): Element {
  const elem = createSvg('circle');

  elem.setAttributeNS('', 'cx', `${cx}`);
  elem.setAttributeNS('', 'cy', `${cy}`);
  elem.setAttributeNS('', 'r', `${r}`);

  return elem;
}
