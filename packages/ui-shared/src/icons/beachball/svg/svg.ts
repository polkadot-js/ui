// Copyright 2016 Dan Finlay
// Copyright 2017-2020 @polkadot/ui-shared authors & contributors
// SPDX-License-Identifier: Apache-2.0

const SVG_NS = 'http://www.w3.org/2000/svg';

export default function svg (type: string): Element {
  return document.createElementNS(SVG_NS, type);
}
