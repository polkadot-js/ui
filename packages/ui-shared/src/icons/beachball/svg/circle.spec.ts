// Copyright 2017-2020 @polkadot/ui-shared authors & contributors
// SPDX-License-Identifier: Apache-2.0

import xmlserializer from 'xmlserializer';

import circle from './circle';

describe('circle', (): void => {
  it('creates a basic SVG circle element', (): void => {
    expect(
      xmlserializer.serializeToString(
        circle(123, 12, 34)
      )
    ).toEqual('<circle xmlns="http://www.w3.org/2000/svg" cx="12" cy="34" r="123"/>');
  });
});
