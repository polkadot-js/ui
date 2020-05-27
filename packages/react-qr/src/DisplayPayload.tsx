// Copyright 2017-2020 @polkadot/react-qr authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { BaseProps } from './types';

import React, { useEffect, useState } from 'react';

import { createSignPayload } from './util';
import QrDisplay from './Display';

interface Props extends BaseProps {
  address: string;
  cmd: number;
  genesisHash: Uint8Array | string;
  payload: Uint8Array;
}

function DisplayPayload ({ address, className, cmd, genesisHash, payload, size, style }: Props): React.ReactElement<Props> | null {
  const [data, setData] = useState<Uint8Array | null>(null);

  useEffect((): void => {
    setData(createSignPayload(address, cmd, genesisHash, payload));
  }, [address, cmd, genesisHash, payload]);

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
