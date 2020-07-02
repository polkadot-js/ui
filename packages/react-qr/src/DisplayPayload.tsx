// Copyright 2017-2020 @polkadot/react-qr authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import React, { useEffect, useState } from 'react';

import { createSignPayload } from './util';
import QrDisplay from './Display';

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
  const [data, setData] = useState<Uint8Array | null>(null);

  useEffect((): void => {
    setData(createSignPayload(address, cmd, payload, genesisHash));
  }, [address, cmd, payload, genesisHash]);

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

export default React.memo(DisplayPayload);
