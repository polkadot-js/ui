// Copyright 2017-2023 @polkadot/ui-shared authors & contributors
// SPDX-License-Identifier: Apache-2.0

/// <reference types="@polkadot/dev-test/node.d.ts" />

import xs from 'xmlserializer';

import { element } from './element.js';

describe('element', (): void => {
  it('creates a basic SVG element', (): void => {
    expect(
      xs.serializeToString(
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument,@typescript-eslint/no-explicit-any
        element(123) as any
      )
    ).toEqual('<svg xmlns="http://www.w3.org/2000/svg" x="0" y="0" width="123" height="123"/>');
  });
});
