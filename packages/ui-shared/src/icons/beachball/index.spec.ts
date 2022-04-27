// Copyright 2017-2022 @polkadot/ui-shared authors & contributors
// SPDX-License-Identifier: Apache-2.0

import xmlserializer from 'xmlserializer';

import { beachballIcon } from '.';

describe('identicon', (): void => {
  it('generates a basic [0,..,0] identicon', (): void => {
    expect(
      xmlserializer.serializeToString(
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument,@typescript-eslint/no-explicit-any
        beachballIcon(new Uint8Array(32), { isAlternative: false, size: 256 }) as any
      )
    ).toEqual(
      '<div xmlns="http://www.w3.org/1999/xhtml" class="" style="background: white; border-radius: 128px; display: inline-block; height: 256px; margin: 0px; overflow: hidden; padding: 0px; width: 256px;"><div class="" style="background: rgb(20, 20, 20); border-radius: 128px; display: inline-block; height: 256px; margin: 0px; overflow: hidden; padding: 0px; width: 256px;"><svg xmlns="http://www.w3.org/2000/svg" x="0" y="0" width="256" height="256"><circle cx="128" cy="140.8" r="128" fill="hsl(212.10000000000002, 65.6%, 55.5%)"/><circle cx="128" cy="153.6" r="102.4" fill="hsl(9.800000000000011, 90.7%, 57.6%)"/><circle cx="128" cy="166.4" r="76.8" fill="hsl(345, 85.7%, 86.3%)"/><circle cx="128" cy="179.2" r="51.2" fill="hsl(261.9, 100%, 87.3%)"/><circle cx="128" cy="192" r="25.6" fill="hsl(345, 100%, 25.1%)"/></svg></div></div>'
    );
  });

  it('allows overrides', (): void => {
    expect(
      xmlserializer.serializeToString(
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument,@typescript-eslint/no-explicit-any
        beachballIcon(new Uint8Array(32), { isAlternative: false, size: 100 }, 'testClass', { display: 'block' }) as any
      )
    ).toEqual(
      '<div xmlns="http://www.w3.org/1999/xhtml" class="testClass" style="background: white; border-radius: 50px; display: block; height: 100px; margin: 0px; overflow: hidden; padding: 0px; width: 100px;"><div class="" style="background: rgb(20, 20, 20); border-radius: 50px; display: inline-block; height: 100px; margin: 0px; overflow: hidden; padding: 0px; width: 100px;"><svg xmlns="http://www.w3.org/2000/svg" x="0" y="0" width="100" height="100"><circle cx="50" cy="55" r="50" fill="hsl(212.10000000000002, 65.6%, 55.5%)"/><circle cx="50" cy="60" r="40" fill="hsl(9.800000000000011, 90.7%, 57.6%)"/><circle cx="50" cy="65" r="30" fill="hsl(345, 85.7%, 86.3%)"/><circle cx="50" cy="70" r="20" fill="hsl(261.9, 100%, 87.3%)"/><circle cx="50" cy="75" r="10" fill="hsl(345, 100%, 25.1%)"/></svg></div></div>'
    );
  });
});
