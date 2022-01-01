// Copyright 2017-2022 @polkadot/ui-shared authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { ColorGen } from './types';

import { colors as newColors } from './colors';
import { seeder as newSeeder } from './seeder';

describe('colors', (): void => {
  let colors: ColorGen;

  beforeEach((): void => {
    colors = newColors(newSeeder());
  });

  it('generates using default alpha', (): void => {
    expect(
      colors()
    ).toEqual(
      // 'hsla(166.70000000000005, 98.6%, 27.6%, 0.9)'
      'hsl(37.19999999999999, 100%, 54.9%)'
    );
  });

  it('applies specified alpha', (): void => {
    expect(
      colors(0.5)
    ).toEqual(
      // 'hsla(166.70000000000005, 98.6%, 27.6%, 0.5)'
      'hsla(37.19999999999999, 100%, 54.9%, 0.5)'
    );
  });

  it('rolates colors', (): void => {
    colors();

    expect(
      colors()
    ).not.toEqual('hsla(166.70000000000005, 98.6%, 27.6%, 0.9)');
  });

  it('works in edge conditions (0xff)', (): void => {
    const u8a = new Uint8Array(32);

    u8a.fill(255);

    expect(
      colors = newColors(newSeeder(u8a))
    ).not.toThrow();

    expect(
      colors()
    ).toEqual(
      // 'hsla(234.39999999999998, 75.9%, 51.2%, 0.9)'
      'hsl(15, 0%, 100%)'
    );
  });
});
