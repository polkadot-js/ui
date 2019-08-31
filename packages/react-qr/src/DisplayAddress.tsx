// Copyright 2017-2019 @polkadot/react-qr authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { BaseProps } from './types';

import React from 'react';
import { xxhashAsHex } from '@polkadot/util-crypto';

import { createAddressPayload } from './util';
import QrDisplay from './Display';

interface Props extends BaseProps {
  address: string;
  genesisHash: string;
}

interface State {
  data: Uint8Array | null;
  dataHash: string | null;
}

export default class DisplayExtrinsic extends React.PureComponent<Props, State> {
  public state: State = {
    data: null,
    dataHash: null
  };

  public static getDerivedStateFromProps ({ address, genesisHash }: Props, prevState: State): State | null {
    const data = createAddressPayload(address, genesisHash);
    const dataHash = xxhashAsHex(data);

    if (dataHash === prevState.dataHash) {
      return null;
    }

    return { data, dataHash };
  }

  public render (): React.ReactNode {
    const { className, size, style } = this.props;
    const { data } = this.state;

    if (!data) {
      return null;
    }

    return (
      <QrDisplay
        className={className}
        skipEncoding={true}
        size={size}
        style={style}
        value={data}
      />
    );
  }
}
