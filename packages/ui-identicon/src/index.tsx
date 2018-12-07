// Copyright 2017-2018 @polkadot/ui-identicon authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Prefix } from '@polkadot/keyring/address/types';
import { IdentityProps as Props } from './types';

import React from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import styled from 'styled-components';
import { decodeAddress, encodeAddress } from '@polkadot/keyring';
import settings from '@polkadot/ui-settings/index';
import { isHex, isU8a } from '@polkadot/util';

import Empty from './Empty';
import Polkadot from './Polkadot';
import Substrate from './Substrate';

type State = {
  address?: string | null
};

const DEFAULT_SIZE = 64;
const Components: { [index: string]: React.ComponentType<any> } = {
  'polkadot': Polkadot,
  'substrate': Substrate
};
const Wrapper = styled.div`
  cursor: copy;
  display: inline-block;
  line-height: 0;

  > .container {
    position: relative;

    > div,
    > svg {
      position: relative;
    }

    &:before {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      border-radius: 50%;
      box-shadow: 0 0 5px 2px #e0e0e0;
      content: '';
    }

    &.highlight:before {
      box-shadow: 0 0 5px 2px red;
    }
  }
`;

export default class IdentityIcon extends React.PureComponent<Props, State> {
  state: State = {
    address: null
  };

  private static prefix?: Prefix = undefined;

  static setDefaultPrefix (prefix: Prefix) {
    IdentityIcon.prefix = prefix;
  }

  static getDerivedStateFromProps ({ prefix = IdentityIcon.prefix, value }: Props, prevState: State): State | null {
    try {
      const address = isU8a(value) || isHex(value)
        ? encodeAddress(value, prefix)
        : value;

      decodeAddress(address as string, prefix);

      return address === prevState.address
        ? null
        : { address };
    } catch (error) {
      // swallow,invalid address or input
    }

    return {
      address: null
    };
  }

  render () {
    const { className, isHighlight = false, size = DEFAULT_SIZE, style, theme = settings.uiTheme } = this.props;
    const { address } = this.state;

    const Component = !address
      ? Empty
      : Components[theme] || Substrate;
    const wrapped = (
      <Wrapper
        className={['ui--IdentityIcon', className].join(' ')}
        key={address || ''}
        style={style}
      >
        <Component
          className={isHighlight ? 'highlight' : ''}
          size={size}
          value={address || ''}
        />
      </Wrapper>
    );

    if (!address) {
      return wrapped;
    }

    return (
      <CopyToClipboard
        onCopy={this.onCopy}
        text={address}
      >
        {wrapped}
      </CopyToClipboard>
    );
  }

  private onCopy = (): void => {
    const { onCopy } = this.props;
    const { address } = this.state;

    if (address && onCopy) {
      onCopy(address);
    }
  }
}
