// Copyright 2017-2025 @polkadot/ui-shared authors & contributors
// SPDX-License-Identifier: Apache-2.0

/// <reference types="@polkadot/dev-test/globals.d.ts" />

import { container } from './container.js';

describe('container', (): void => {
  it('applies default styles', (): void => {
    expect(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any,@typescript-eslint/no-unsafe-member-access
      (container(100).style as any)._values
    ).toMatchObject({
      background: 'white',
      'border-radius': '50px',
      display: 'inline-block',
      height: '100px',
      margin: '0px',
      overflow: 'hidden',
      padding: '0px',
      width: '100px'
    });
  });

  it('overrides with supplied styles', (): void => {
    expect(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any,@typescript-eslint/no-unsafe-member-access
      (container(50, 'black', '', { display: 'block' }).style as any)._values
    ).toMatchObject({
      background: 'black',
      'border-radius': '25px',
      display: 'block',
      height: '50px',
      margin: '0px',
      overflow: 'hidden',
      padding: '0px',
      width: '50px'
    });
  });

  it('applies the specified className', (): void => {
    expect(
      container(100, 'blue', 'testClass').className
    ).toEqual('testClass');
  });
});
