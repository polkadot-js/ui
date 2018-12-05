// Copyright 2017-2018 @polkadot/ui-keyring authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import './KeyPair.css';

import React from 'react';
import IdentityIcon from '@polkadot/ui-identicon/index';

type Props = {
  address: string,
  className?: string,
  name: string,
  style?: {
    [index: string]: string
  }
};

export default class KeyPair extends React.PureComponent<Props> {
  render () {
    const { address, className, name, style } = this.props;

    return (
      <div
        className={['ui--KeyPair', className].join(' ')}
        style={style}
      >
        <IdentityIcon
          className='ui--KeyPair-icon'
          size={32}
          value={address}
        />
        <div className='ui--KeyPair-name'>
          {name}
        </div>
        <div className='ui--KeyPair-address'>
          {address}
        </div>
      </div>
    );
  }
}
