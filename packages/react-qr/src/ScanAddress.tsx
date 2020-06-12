// Copyright 2017-2020 @polkadot/react-qr authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { BaseProps } from './types';

import React, { useCallback } from 'react';
import { assert } from '@polkadot/util';
import { decodeAddress } from '@polkadot/util-crypto';

import { ADDRESS_PREFIX, SEED_PREFIX } from './constants';
import QrScan from './Scan';

interface ScanType {
  isAddress: boolean;
  content: string;
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
        const [prefix, content, genesisHash, name] = data.split(':');
        const isValidPrefix = prefix === ADDRESS_PREFIX || prefix === SEED_PREFIX;

        assert(isValidPrefix, `Invalid prefix received, expected '${ADDRESS_PREFIX}/${SEED_PREFIX}' , found '${prefix}'`);

        const isAddress = prefix === ADDRESS_PREFIX;

        if (isAddress) {
          decodeAddress(content);
        }

        onScan({ content, genesisHash, isAddress, name });
      } catch (error) {
        console.error('@polkadot/react-qr:QrScanAddress', (error as Error).message, data);
      }
    },
    [onScan]
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
