// Copyright 2017-2021 @polkadot/react-identicon authors & contributors
// SPDX-License-Identifier: Apache-2.0

import React from 'react';
import ReactDOM from 'react-dom';

import { encodeAddress, randomAsU8a } from '@polkadot/util-crypto';

import { Identicon } from '.';

const THEMES = ['beachball', 'polkadot', 'substrate'];

export default class Demo extends React.PureComponent {
  public override render (): React.ReactNode {
    const identities: string[] = [];

    while (identities.length !== 50) {
      identities.push(
        encodeAddress(randomAsU8a(32))
      );
    }

    return (
      <div>
        <div>
          {identities.map((value, index): React.ReactNode => (
            <Identicon
              key={value.toString()}
              theme={THEMES[index % THEMES.length] as 'empty'}
              value={value}
            />
          ))}
        </div>
        <div>
          {THEMES.map((theme): React.ReactNode => (
            <Identicon
              key={theme}
              theme={theme as 'empty'}
              value='5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY'
            />
          ))}
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById('demo');

if (!rootElement) {
  throw new Error('Unable to find element with id \'demo\'');
}

ReactDOM.render(<Demo />, rootElement);
