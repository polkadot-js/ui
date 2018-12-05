// Copyright 2017-2018 @polkadot/ui-keyring authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import React from 'react';
import styled from 'styled-components';
import IdentityIcon from '@polkadot/ui-identicon/index';

type Props = {
  address: string,
  className?: string,
  name: string,
  style?: {
    [index: string]: string
  }
};

const Wrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  position: relative;
  white-space: nowrap;

  .address {
    display: inline-block;
    flex: 1;
    font-family: monospace;
    margin-left: 1rem;
    opacity: 0.5;
    overflow: hidden;
    text-align: right;
    text-overflow: ellipsis;
  }

  .icon {
    position: absolute;
    top: -9px;
    left: 0;
  }

  .name {
    display: inline-block;
    flex: 1 0;
    margin-left: 3rem;
    overflow: hidden;
    text-transform: uppercase;
    text-overflow: ellipsis;
  }
`;

export default class KeyPair extends React.PureComponent<Props> {
  render () {
    const { address, className, name, style } = this.props;

    return (
      <Wrapper
        className={['ui--KeyPair', className].join(' ')}
        style={style}
      >
        <IdentityIcon
          className='icon'
          size={32}
          value={address}
        />
        <div className='name'>
          {name}
        </div>
        <div className='address'>
          {address}
        </div>
      </Wrapper>
    );
  }
}
