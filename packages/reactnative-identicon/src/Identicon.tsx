// Copyright 2017-2021 @polkadot/reactnative-identicon authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Prefix } from '@polkadot/util-crypto/address/types';
import type { Props as ComponentProps } from './types';

import React from 'react';

import { isHex, isU8a, u8aToHex } from '@polkadot/util';
import { decodeAddress, encodeAddress } from '@polkadot/util-crypto';

import { Empty, Polkadot } from './icons';

const Fallback = Polkadot;

interface Props {
  prefix?: Prefix;
  size?: number;
  theme?: 'polkadot';
  value?: string | Uint8Array | null;
}

interface State {
  address: string;
  publicKey: string;
}

const DEFAULT_SIZE = 64;
const DEFAULT_THEME = 'polkadot';

const Components: Record<string, React.ComponentType<ComponentProps>> = {
  polkadot: Polkadot
};

export default class IdentityIcon extends React.PureComponent<Props, State> {
  public override state: State = {
    address: '',
    publicKey: '0x'
  };

  private static prefix?: Prefix = undefined;

  public static setDefaultPrefix (prefix: Prefix): void {
    IdentityIcon.prefix = prefix;
  }

  public static getDerivedStateFromProps ({ prefix = IdentityIcon.prefix, value }: Props, prevState: State): State | null {
    try {
      const address = isU8a(value) || isHex(value)
        ? encodeAddress(value, prefix)
        : (value || '');
      const publicKey = u8aToHex(decodeAddress(address, true, prefix));

      return address === prevState.address
        ? null
        : { address, publicKey };
    } catch (error) {
      return {
        address: '',
        publicKey: '0x'
      };
    }
  }

  public override render (): React.ReactNode {
    const { theme = DEFAULT_THEME, size = DEFAULT_SIZE } = this.props;
    const { address, publicKey } = this.state;

    const Component = !address
      ? Empty
      : Components[theme] || Fallback;

    return (
      <Component
        address={address}
        publicKey={publicKey}
        size={size}
      />
    );
  }
}
