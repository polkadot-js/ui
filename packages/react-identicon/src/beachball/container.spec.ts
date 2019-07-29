// Copyright 2017-2019 @polkadot/react-identicon authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import container from './container';

describe('container', (): void => {
  it('applies default styles', (): void => {
    expect(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
