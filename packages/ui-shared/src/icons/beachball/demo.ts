// Copyright 2017-2022 @polkadot/ui-shared authors & contributors
// SPDX-License-Identifier: Apache-2.0

// Copyright 2016 Dan Finlay

import { isNull } from '@polkadot/util';
import { encodeAddress, randomAsU8a } from '@polkadot/util-crypto';

import { beachballIcon } from '.';

const element = document.getElementById('demo');

function generateIcon (seed: string = encodeAddress(randomAsU8a(32))): void {
  const start = Date.now();

  if (isNull(element)) {
    throw new Error('Unable to find #demo element');
  }

  element.appendChild(
    beachballIcon(seed, { isAlternative: false, size: 100 }, 'padded')
  );

  console.log(`Icon generated in ${(Date.now() - start)}ms`);
}

function generateIcons (count = 512): void {
  generateIcon(encodeAddress(new Uint8Array(32)));

  for (let index = 1; index < count; index++) {
    generateIcon();
  }
}

generateIcons();
