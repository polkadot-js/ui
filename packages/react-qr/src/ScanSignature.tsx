// Copyright 2017-2019 @polkadot/react-qr authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { BaseProps } from './types';

import React from 'react';
import { u8aToHex } from '@polkadot/util';

import QrScan from './Scan';
import { encodeString } from './util';

interface ScanType {
  signature: string;
}

interface Props extends BaseProps {
  onError?: (error: Error) => void;
  onScan?: (scanned: ScanType) => void;
}

export default class ScanSignature extends React.PureComponent<Props> {
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

    onScan({ signature: u8aToHex(encodeString(data)) });
  }
}
