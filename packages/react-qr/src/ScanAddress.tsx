// Copyright 2017-2019 @polkadot/react-qr authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { BaseProps } from './types';

import React from 'react';
import { assert } from '@polkadot/util';

import { ADDRESS_PREFIX } from './constants';
import QrScan from './Scan';
import { decodeAddress } from '@polkadot/util-crypto';

interface Props extends BaseProps {
  onError?: (error: Error) => void;
  onScan?: (data: string) => void;
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
      // FIXME Ok, not sure just what the last part here actually is supposed to be -
      // substrate:5EAPV5oQP5XXHz2Bq49oxXzHor5jGQ2cmGbfFYn18Gpruhpq:0xe4e7807c233645b910c8db58e99ed53dc71fbfff5bbe8a5534fb7e83db449210
      // received 0xe4e7807c233645b910c8db58e99ed53dc71fbfff5bbe8a5534fb7e83db449210
      // decoded 0x5cce17d7ab633d1578d6fc09fc226b24b6cd62fa740d22bf12f23fd70abe4530
      // const [prefix, address, publicKey] = data.split(':');
      const [prefix, address] = data.split(':');

      assert(prefix === ADDRESS_PREFIX, `Invalid address received, expected '${ADDRESS_PREFIX}', found '${prefix}'`);

      // const decoded = u8aToHex(decodeAddress(address));

      // assert(publicKey === decoded, `Invalid publicKey, received ${publicKey}, decoded ${decoded}`);

      decodeAddress(address);
      onScan(address);
    } catch (error) {
      console.error('@polkadot/react-qr:QrScanAddress', error.message, data);
    }
  }
}
