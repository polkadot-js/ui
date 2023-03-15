// Copyright 2017-2023 @polkadot/ui-shared authors & contributors
// SPDX-License-Identifier: Apache-2.0

/// <reference types="@polkadot/dev-test/node.d.ts" />

import type { ColorGen } from './types.js';

import { colors as newColors } from './colors.js';
import { seeder as newSeeder } from './seeder.js';

describe('colors', (): void => {
  let colors: ColorGen;

  beforeEach((): void => {
    colors = newColors(newSeeder());
  });

  it('generates using default alpha', (): void => {
    expect(
      colors()
    ).toEqual(
      // with original color ...
      // 'hsl(37.19999999999999, 100%, 54.9%)'
      'hsl(37, 100%, 55%)'
    );
  });

  it('applies specified alpha', (): void => {
    expect(
      colors(0.5)
    ).toEqual(
      // with original color ...
      // 'hsla(37.19999999999999, 100%, 54.9%, 0.5)'
      'hsla(37, 100%, 55%, 0.5)'
    );
  });

  it('rolates colors', (): void => {
    const orig = colors();

    expect(
      orig
    ).toEqual('hsl(37, 100%, 55%)');

    expect(
      colors()
    ).not.toEqual(orig);
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
      // with original color ...
      // 'hsl(15, 0%, 100%)'
      'hsl(0, 0%, 100%)'
    );
  });
});
