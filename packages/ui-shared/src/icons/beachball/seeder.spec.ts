// Copyright 2017-2025 @polkadot/ui-shared authors & contributors
// SPDX-License-Identifier: Apache-2.0

/// <reference types="@polkadot/dev-test/globals.d.ts" />

import type { Seeder } from './types.js';

import { seeder as newSeeder } from './seeder.js';

describe('seeder', (): void => {
  let seeder: Seeder;

  beforeEach((): void => {
    seeder = newSeeder(new Uint8Array([1, 2, 3, 4]));
  });

  it('generates numbers using 2 spaces', (): void => {
    expect(
      seeder()
    ).toEqual(0.0156402587890625);
  });

  it('generates numbers using 2 spaces (incremented)', (): void => {
    seeder();

    expect(
      seeder()
    ).toEqual(0.0078582763671875);
  });
});
