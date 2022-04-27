// Copyright 2017-2022 @polkadot/ui-shared authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { serializeToString } from 'xmlserializer';

import { circle } from './circle';

describe('circle', (): void => {
  it('creates a basic SVG circle element', (): void => {
    expect(
      serializeToString(
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument,@typescript-eslint/no-explicit-any
        circle(123, 12, 34) as any
      )
    ).toEqual('<circle xmlns="http://www.w3.org/2000/svg" cx="12" cy="34" r="123"/>');
  });
});
