// Copyright 2018-2022 @polkadot/ui-shared authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { polkadotIcon } from './polkadot';

describe('polkadotIcon', (): void => {
  it('generates the correct points from known', (): void => {
    expect(
      polkadotIcon('5Dqvi1p4C7EhPPFKCixpF3QiaJEaDwWrR9gfWR5eUsfC39TX', { isAlternative: false })
    ).toEqual([
      { cx: 32, cy: 32, fill: '#eee', r: 32 },
      { cx: 32, cy: 8, fill: 'hsl(196, 65%, 53%)', r: 5 },
      { cx: 32, cy: 20, fill: 'hsl(320, 65%, 53%)', r: 5 },
      { cx: 21.607695154586736, cy: 14, fill: 'transparent', r: 5 },
      { cx: 11.215390309173472, cy: 20, fill: 'hsl(112, 65%, 15%)', r: 5 },
      { cx: 21.607695154586736, cy: 26, fill: 'hsl(22, 65%, 15%)', r: 5 },
      { cx: 11.215390309173472, cy: 32, fill: 'hsl(213, 65%, 15%)', r: 5 },
      { cx: 11.215390309173472, cy: 44, fill: 'hsl(163, 65%, 53%)', r: 5 },
      { cx: 21.607695154586736, cy: 38, fill: 'hsl(213, 65%, 53%)', r: 5 },
      { cx: 21.607695154586736, cy: 50, fill: 'hsl(185, 65%, 75%)', r: 5 },
      { cx: 32, cy: 56, fill: 'hsl(163, 65%, 53%)', r: 5 },
      { cx: 32, cy: 44, fill: 'hsl(213, 65%, 53%)', r: 5 },
      { cx: 42.392304845413264, cy: 50, fill: 'hsl(213, 65%, 15%)', r: 5 },
      { cx: 52.78460969082653, cy: 44, fill: 'hsl(112, 65%, 15%)', r: 5 },
      { cx: 42.392304845413264, cy: 38, fill: 'hsl(22, 65%, 15%)', r: 5 },
      { cx: 52.78460969082653, cy: 32, fill: 'transparent', r: 5 },
      { cx: 52.78460969082653, cy: 20, fill: 'hsl(196, 65%, 53%)', r: 5 },
      { cx: 42.392304845413264, cy: 26, fill: 'hsl(320, 65%, 53%)', r: 5 },
      { cx: 42.392304845413264, cy: 14, fill: 'hsl(11, 65%, 35%)', r: 5 },
      { cx: 32, cy: 32, fill: 'hsl(309, 65%, 53%)', r: 5 }
    ]);
  });
});
