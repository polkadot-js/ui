// Copyright 2017-2020 @polkadot/ui-shared authors & contributors
// SPDX-License-Identifier: Apache-2.0

import xmlserializer from 'xmlserializer';

import seeder from '../seeder';
import circle from './circle';

describe('circle', (): void => {
  it('creates a circle shape', (): void => {
    expect(
      xmlserializer.serializeToString(
        circle(seeder(), 'blue', 50, 2)
      )
    ).toEqual('<circle xmlns="http://www.w3.org/2000/svg" cx="25" cy="32.5" r="15" fill="blue"/>');
  });
});
