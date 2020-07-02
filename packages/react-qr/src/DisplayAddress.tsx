// Copyright 2017-2020 @polkadot/react-qr authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import React, { useEffect, useState } from 'react';

import { createAddressPayload } from './util';
import QrDisplay from './Display';

interface Props {
  address: string;
  genesisHash: string;
  className?: string;
  size?: string | number;
  style?: React.CSSProperties;
}

function DisplayExtrinsic ({ address, className, genesisHash, size, style }: Props): React.ReactElement<Props> | null {
  const [data, setData] = useState<Uint8Array | null>(null);

  useEffect((): void => {
    setData(createAddressPayload(address, genesisHash));
  }, [address, genesisHash]);

  if (!data) {
    return null;
  }

  return (
    <QrDisplay
      className={className}
      size={size}
      skipEncoding
      style={style}
      value={data}
    />
  );
}

export default React.memo(DisplayExtrinsic);
