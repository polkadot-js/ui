// Copyright 2017-2020 @polkadot/react-qr authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { BaseProps } from './types';

import React, { useCallback } from 'react';

import QrScan from './Scan';

interface ScanType {
  signature: string;
}

interface Props extends BaseProps {
  onError?: (error: Error) => void;
  onScan?: (scanned: ScanType) => void;
}

function ScanSignature ({ className, onError, onScan, size, style }: Props): React.ReactElement<Props> {
  const _onScan = useCallback(
    (signature: string | null): void => {
      if (!signature || !onScan) {
        return;
      }

      onScan({ signature: `0x${signature}` });
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

export default React.memo(ScanSignature);
