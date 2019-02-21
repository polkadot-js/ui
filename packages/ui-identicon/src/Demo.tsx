// Copyright 2017-2019 @polkadot/ui-identicon authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import React from 'react';
import ReactDOM from 'react-dom';
import { encodeAddress } from '@polkadot/keyring';
import { randomAsU8a } from '@polkadot/util-crypto';

import IdentityIcon from './index';

export default class Demo extends React.PureComponent {
  render () {
    const identities: Array<string> = [];

    while (identities.length !== 50) {
      identities.push(
        encodeAddress(randomAsU8a(32))
      );
    }

    return identities.map((value) => (
      <IdentityIcon
        key={value.toString()}
        theme='jdenticon'
        value={value}
      />
    ));
  }
}

const rootElement = document.getElementById('demo');

if (!rootElement) {
  throw new Error(`Unable to find element with id 'demo'`);
}

ReactDOM.render(<Demo />, rootElement);
