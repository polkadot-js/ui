// Copyright 2017-2022 @polkadot/ui-shared authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { serializeToString } from 'xmlserializer';

import { svg } from './svg';

describe('svg', (): void => {
  it('creates a basic SVG element', (): void => {
    expect(
      serializeToString(
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument,@typescript-eslint/no-explicit-any
        svg('rect') as any
      )
    ).toEqual('<rect xmlns="http://www.w3.org/2000/svg"/>');
  });
});
