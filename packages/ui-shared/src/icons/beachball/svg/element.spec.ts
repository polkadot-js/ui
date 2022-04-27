// Copyright 2017-2022 @polkadot/ui-shared authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { serializeToString } from 'xmlserializer';

import { element } from './element';

describe('element', (): void => {
  it('creates a basic SVG element', (): void => {
    expect(
      serializeToString(
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument,@typescript-eslint/no-explicit-any
        element(123) as any
      )
    ).toEqual('<svg xmlns="http://www.w3.org/2000/svg" x="0" y="0" width="123" height="123"/>');
  });
});
