// Copyright 2017-2023 @polkadot/ui-shared authors & contributors
// SPDX-License-Identifier: Apache-2.0

/// <reference types="@polkadot/dev/node/test/node" />

import xs from 'xmlserializer';

import { circle } from './circle.js';

describe('circle', (): void => {
  it('creates a basic SVG circle element', (): void => {
    expect(
      xs.serializeToString(
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument,@typescript-eslint/no-explicit-any
        circle(123, 12, 34) as any
      )
    ).toEqual('<circle xmlns="http://www.w3.org/2000/svg" cx="12" cy="34" r="123"/>');
  });
});
