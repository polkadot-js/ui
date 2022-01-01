// Copyright 2017-2022 @polkadot/ui-shared authors & contributors
// SPDX-License-Identifier: Apache-2.0

// Copyright 2016 Dan Finlay

const SVG_NS = 'http://www.w3.org/2000/svg';

export function svg (type: string): Element {
  return document.createElementNS(SVG_NS, type);
}
