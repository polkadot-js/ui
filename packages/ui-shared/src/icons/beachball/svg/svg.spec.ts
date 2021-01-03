// Copyright 2017-2021 @polkadot/ui-shared authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { serializeToString } from 'xmlserializer';

import { svg } from './svg';

describe('svg', (): void => {
  it('creates a basic SVG element', (): void => {
    expect(
      serializeToString(
        svg('rect')
      )
    ).toEqual('<rect xmlns="http://www.w3.org/2000/svg"/>');
  });
});
