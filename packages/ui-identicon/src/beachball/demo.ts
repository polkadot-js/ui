// Copyright 2016 Dan Finlay
// Copyright 2017-2019 @polkadot/ui-identicon authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { isNull } from '@polkadot/util';
import { encodeAddress, randomAsU8a } from '@polkadot/util-crypto';

import identicon from '.';

const element = document.getElementById('demo');

function generateIcon (seed: string = encodeAddress(randomAsU8a(32))): void {
  const start = Date.now();

  if (isNull(element)) {
    throw new Error('Unable to find #demo element');
  }

  element.appendChild(
    identicon(seed, 100, 'padded')
  );

  console.log(`Icon generated in ${(Date.now() - start)}ms`);
}

function generateIcons (count: number = 512): void {
  generateIcon(encodeAddress(new Uint8Array(32)));

  for (let index = 1; index < count; index++) {
    generateIcon();
  }
}

generateIcons();
