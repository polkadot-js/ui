// Copyright 2017-2020 @polkadot/react-qr authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { BaseProps } from './types';

import React, { useCallback } from 'react';
import { assert } from '@polkadot/util';
import { decodeAddress } from '@polkadot/util-crypto';

import { ADDRESS_PREFIX } from './constants';
import QrScan from './Scan';

interface ScanType {
  address: string;
  genesisHash: string;
  name?: string;
}

interface Props extends BaseProps {
  onError?: (error: Error) => void;
  onScan?: (scanned: ScanType) => void;
}

function ScanAddress ({ className, onError, onScan, size, style }: Props): React.ReactElement<Props> {
  const _onScan = useCallback(
    (data: string | null): void => {
      if (!data || !onScan) {
        return;
      }

      try {
        const [prefix, address, genesisHash, name] = data.split(':');

        assert(prefix === ADDRESS_PREFIX, `Invalid address received, expected '${ADDRESS_PREFIX}', found '${prefix}'`);

        decodeAddress(address);
        onScan({ address, genesisHash, name });
      } catch (error) {
        console.error('@polkadot/react-qr:QrScanAddress', error.message, data);
      }
    },
    []
  );

  return (
    <QrScan
      className={className}
      onError={onError}
      onScan={_onScan}
      size={size}
      style={style}
    />
  );
}

export default React.memo(ScanAddress);
