// Copyright 2017-2022 @polkadot/react-qr authors & contributors
// SPDX-License-Identifier: Apache-2.0

import React, { useMemo } from 'react';

import { QrDisplay } from './Display';
import { createAddressPayload } from './util';

interface Props {
  address: string;
  genesisHash: string;
  className?: string;
  size?: string | number;
  style?: React.CSSProperties;
  timerDelay?: number;
}

function DisplayAddress ({ address, className, genesisHash, size, style, timerDelay }: Props): React.ReactElement<Props> | null {
  const data = useMemo(
    () => createAddressPayload(address, genesisHash),
    [address, genesisHash]
  );

  if (!data) {
    return null;
  }

  return (
    <QrDisplay
      className={className}
      size={size}
      skipEncoding
      style={style}
      timerDelay={timerDelay}
      value={data}
    />
  );
}

export const QrDisplayAddress = React.memo(DisplayAddress);
