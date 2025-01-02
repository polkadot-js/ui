// Copyright 2017-2025 @polkadot/ui-shared authors & contributors
// SPDX-License-Identifier: Apache-2.0

/// <reference types="@polkadot/dev-test/globals.d.ts" />

import xs from 'xmlserializer';

import { rect } from './rect.js';

describe('rect', (): void => {
  it('creates a basic SVG rect element', (): void => {
    expect(
      xs.serializeToString(
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument,@typescript-eslint/no-explicit-any
        rect(123) as any
      )
    ).toEqual('<rect xmlns="http://www.w3.org/2000/svg" x="0" y="0" width="123" height="123" rx="7.6875" ry="7.6875"/>');
  });
});
