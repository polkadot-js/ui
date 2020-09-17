// Copyright 2017-2020 @polkadot/ui-shared authors & contributors
// SPDX-License-Identifier: Apache-2.0

import xmlserializer from 'xmlserializer';

import svg from './svg';

describe('svg', (): void => {
  it('creates a basic SVG element', (): void => {
    expect(
      xmlserializer.serializeToString(
        svg('rect')
      )
    ).toEqual('<rect xmlns="http://www.w3.org/2000/svg"/>');
  });
});
