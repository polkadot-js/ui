// Copyright 2017-2022 @polkadot/react-qr authors & contributors
// SPDX-License-Identifier: Apache-2.0

import React, { useCallback } from 'react';

import { assert } from '@polkadot/util';
import { decodeAddress } from '@polkadot/util-crypto';

import { ADDRESS_PREFIX, SEED_PREFIX } from './constants';
import { QrScan } from './Scan';

interface ScanType {
  isAddress: boolean;
  content: string;
  genesisHash: string;
  name?: string;
}

interface Props {
  className?: string;
  onError?: (error: Error) => void;
  onScan: (scanned: ScanType) => void;
  size?: string | number;
  style?: React.CSSProperties;
  isEthereum?: boolean
}

function ScanAddress ({ className, isEthereum, onError, onScan, size, style }: Props): React.ReactElement<Props> {
  const _onScan = useCallback(
    (data: string | null): void => {
      if (data) {
        try {
          let prefix: string, content: string, genesisHash: string, name: string[];

          if (!isEthereum) {
            [prefix, content, genesisHash, ...name] = data.split(':');
          } else {
            [prefix, content, ...name] = data.split(':');
            genesisHash = '';
            content = content.substring(0, 42);
          }

          const expectedPrefix = (isEthereum ? 'ethereum' : ADDRESS_PREFIX);
          const isValidPrefix = (prefix === expectedPrefix) || (prefix === SEED_PREFIX);

          assert(isValidPrefix, `Invalid prefix received, expected '${expectedPrefix} or ${SEED_PREFIX}' , found '${prefix}'`);

          const isAddress = prefix === expectedPrefix;

          if (isAddress && !isEthereum) {
            decodeAddress(content);
          }

          onScan({ content, genesisHash, isAddress, name: name?.length ? name.join(':') : undefined });
        } catch (error) {
          onError && onError(error as Error);

          console.error('@polkadot/react-qr:QrScanAddress', (error as Error).message, data);
        }
      }
    },
    [onScan, onError, isEthereum]
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

export const QrScanAddress = React.memo(ScanAddress);
