// Copyright 2017-2020 @polkadot/ui-shared authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

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
