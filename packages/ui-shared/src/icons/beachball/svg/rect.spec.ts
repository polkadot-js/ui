// Copyright 2017-2022 @polkadot/ui-shared authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { serializeToString } from 'xmlserializer';

import { rect } from './rect';

describe('rect', (): void => {
  it('creates a basic SVG rect element', (): void => {
    expect(
      serializeToString(
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument,@typescript-eslint/no-explicit-any
        rect(123) as any
      )
    ).toEqual('<rect xmlns="http://www.w3.org/2000/svg" x="0" y="0" width="123" height="123" rx="7.6875" ry="7.6875"/>');
  });
});
