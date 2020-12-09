// Copyright 2017-2020 @polkadot/react-qr authors & contributors
// SPDX-License-Identifier: Apache-2.0

import React, { useMemo } from 'react';

import { QrDisplay } from './Display';
import { createSignPayload } from './util';

interface Props {
  address: string;
  className?: string;
  cmd: number;
  genesisHash: Uint8Array | string;
  payload: Uint8Array;
  size?: string | number;
  style?: React.CSSProperties;
}

function DisplayPayload ({ address, className, cmd, genesisHash, payload, size, style }: Props): React.ReactElement<Props> | null {
  const data = useMemo(
    () => createSignPayload(address, cmd, payload, genesisHash),
    [address, cmd, payload, genesisHash]
  );

  if (!data) {
    return null;
  }

  return (
    <QrDisplay
      className={className}
      size={size}
      style={style}
      value={data}
    />
  );
}

export const QrDisplayPayload = React.memo(DisplayPayload);
