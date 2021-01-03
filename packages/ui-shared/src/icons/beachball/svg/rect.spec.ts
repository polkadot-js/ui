// Copyright 2017-2021 @polkadot/ui-shared authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { serializeToString } from 'xmlserializer';

import { rect } from './rect';

describe('rect', (): void => {
  it('creates a basic SVG rect element', (): void => {
    expect(
      serializeToString(
        rect(123)
      )
    ).toEqual('<rect xmlns="http://www.w3.org/2000/svg" x="0" y="0" width="123" height="123" rx="7.6875" ry="7.6875"/>');
  });
});
