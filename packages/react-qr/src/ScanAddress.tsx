// Copyright 2017-2019 @polkadot/react-qr authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { BaseProps } from './types';

import React from 'react';
import { assert } from '@polkadot/util';

import { ADDRESS_PREFIX } from './constants';
import QrScan from './Scan';
import { decodeAddress } from '@polkadot/util-crypto';

interface ScanType {
  address: string;
  genesisHash: string;
}

interface Props extends BaseProps {
  onError?: (error: Error) => void;
  onScan?: (scanned: ScanType) => void;
}

export default class ScanAddress extends React.PureComponent<Props> {
  public render (): React.ReactNode {
    const { className, onError, size, style } = this.props;

    return (
      <QrScan
        className={className}
        onError={onError}
        onScan={this.onScan}
        size={size}
        style={style}
      />
    );
  }

  private onScan = (data: string | null): void => {
    const { onScan } = this.props;

    if (!data || !onScan) {
      return;
    }

    try {
      const [prefix, address, genesisHash] = data.split(':');

      assert(prefix === ADDRESS_PREFIX, `Invalid address received, expected '${ADDRESS_PREFIX}', found '${prefix}'`);

      decodeAddress(address);
      onScan({ address, genesisHash });
    } catch (error) {
      console.error('@polkadot/react-qr:QrScanAddress', error.message, data);
    }
  }
}
