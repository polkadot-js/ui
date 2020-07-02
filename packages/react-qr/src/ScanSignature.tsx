// Copyright 2017-2020 @polkadot/react-qr authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import React, { useCallback } from 'react';

import QrScan from './Scan';

interface ScanType {
  signature: string;
}

interface Props {
  className?: string;
  onError?: (error: Error) => void;
  onScan: (scanned: ScanType) => void;
  size?: string | number;
  style?: React.CSSProperties;
}

function ScanSignature ({ className, onError, onScan, size, style }: Props): React.ReactElement<Props> {
  const _onScan = useCallback(
    (signature: string | null) => signature && onScan({ signature: `0x${signature}` }),
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

export default React.memo(ScanSignature);
