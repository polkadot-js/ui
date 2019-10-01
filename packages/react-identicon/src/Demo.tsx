// Copyright 2017-2019 @polkadot/react-identicon authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import React from 'react';
import ReactDOM from 'react-dom';
import { encodeAddress, randomAsU8a } from '@polkadot/util-crypto';

import IdentityIcon from '.';

const THEMES = ['beachball', 'polkadot', 'substrate'];

export default class Demo extends React.PureComponent {
  public render (): React.ReactNode {
    const identities: string[] = [];

    while (identities.length !== 50) {
      identities.push(
        encodeAddress(randomAsU8a(32))
      );
    }

    return identities.map((value, index): React.ReactNode => (
      <IdentityIcon
        key={value.toString()}
        theme={THEMES[index % THEMES.length] as 'empty'}
        value={value}
      />
    ));
  }
}

const rootElement = document.getElementById('demo');

if (!rootElement) {
  throw new Error('Unable to find element with id \'demo\'');
}

ReactDOM.render(<Demo />, rootElement);
